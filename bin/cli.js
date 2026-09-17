#!/usr/bin/env node

/**
 * Agential Skill CLI (by Talha Irfan / talhairfandev)
 * Zero-dependency interactive and automated installer for any AI agent.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));

// ANSI colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
};

function printBanner() {
  console.log(`
${c.cyan}${c.bold}====================================================${c.reset}
${c.bold}  Agential Skill CLI (v${PKG.version})${c.reset}
${c.dim}  Author: Talha Irfan (@talhairfandev)${c.reset}
${c.dim}  Focused on Claude · Google Antigravity · VS Code${c.reset}
${c.cyan}${c.bold}====================================================${c.reset}
`);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function installSkill(targetDir, targets = ['all']) {
  console.log(`\n${c.bold}Installing into:${c.reset} ${c.dim}${targetDir}${c.reset}\n`);

  const results = [];
  const isAll = targets.includes('all');

  // 1. Antigravity & Universal Agent System (.agents/skills & .agents/rules)
  if (isAll || targets.includes('antigravity')) {
    const destSkill = path.join(targetDir, '.agents', 'skills', 'agential-skill');
    fs.mkdirSync(destSkill, { recursive: true });
    fs.copyFileSync(path.join(ROOT_DIR, 'SKILL.md'), path.join(destSkill, 'SKILL.md'));
    
    if (fs.existsSync(path.join(ROOT_DIR, 'references'))) {
      copyRecursiveSync(path.join(ROOT_DIR, 'references'), path.join(destSkill, 'references'));
    }
    if (fs.existsSync(path.join(ROOT_DIR, 'resources'))) {
      copyRecursiveSync(path.join(ROOT_DIR, 'resources'), path.join(destSkill, 'resources'));
    }
    results.push(`Google Antigravity Skill -> ${path.relative(targetDir, destSkill)}`);

    // Also install active rule so Antigravity ALWAYS uses it without being told
    const destRules = path.join(targetDir, '.agents', 'rules');
    fs.mkdirSync(destRules, { recursive: true });
    fs.copyFileSync(path.join(ROOT_DIR, 'AGENTS.md'), path.join(destRules, 'agential-skill.md'));
    results.push(`Google Antigravity Rule  -> .agents/rules/agential-skill.md (always auto-loaded)`);
  }

  // 2. Universal Agent Rules (AGENTS.md at project root)
  if (isAll || targets.includes('agents') || targets.includes('antigravity')) {
    fs.copyFileSync(path.join(ROOT_DIR, 'AGENTS.md'), path.join(targetDir, 'AGENTS.md'));
    results.push(`Universal Agent Standard -> AGENTS.md (always auto-loaded)`);
  }

  // 3. Cursor IDE (.cursorrules & .cursor/rules/agential-skill.mdc with alwaysApply: true)
  if (isAll || targets.includes('cursor')) {
    const destFile = path.join(targetDir, '.cursorrules');
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'cursor', '.cursorrules'), destFile);
    
    // Copy the .mdc file that has alwaysApply: true frontmatter
    const cursorRulesDir = path.join(targetDir, '.cursor', 'rules');
    fs.mkdirSync(cursorRulesDir, { recursive: true });
    const mdcSource = path.join(ROOT_DIR, '.cursor', 'rules', 'agential-skill.mdc');
    
    fs.copyFileSync(mdcSource, path.join(cursorRulesDir, 'agential-skill.mdc'));
    results.push(`Cursor IDE               -> .cursorrules & .cursor/rules/agential-skill.mdc (alwaysApply: true)`);
  }

  // 4. GitHub Copilot (.github/copilot-instructions.md)
  if (isAll || targets.includes('copilot')) {
    const dest = path.join(targetDir, '.github', 'copilot-instructions.md');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'copilot', 'copilot-instructions.md'), dest);
    results.push(`GitHub Copilot           -> .github/copilot-instructions.md`);
  }

  // 5. Claude Code (CLAUDE.md)
  if (isAll || targets.includes('claude')) {
    const dest = path.join(targetDir, 'CLAUDE.md');
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'claude', 'CLAUDE.md'), dest);
    results.push(`Claude Code              -> CLAUDE.md`);
  }

  // 6. Windsurf IDE (.windsurfrules)
  if (isAll || targets.includes('windsurf')) {
    const dest = path.join(targetDir, '.windsurfrules');
    if (fs.existsSync(path.join(ROOT_DIR, 'adapters', 'windsurf', '.windsurfrules'))) {
      fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'windsurf', '.windsurfrules'), dest);
      results.push(`Windsurf IDE             -> .windsurfrules`);
    }
  }

  // 7. Initialize baseline context.md if not present
  const contextFile = path.join(targetDir, 'context.md');
  if (!fs.existsSync(contextFile)) {
    const starterContext = `# Project Context: Agential Skill
*Maintained by Agential Skill (Talha Irfan / @talhairfandev)*

## 1. Vision & Core Objectives
- **Purpose**: [Briefly describe this project's purpose]
- **Target Audience**: [Who is this app for?]

## 2. Visual Theme & Design Tokens
- **Theme**: Deep Obsidian Dark Mode (\`#0a0a0c\`) / Swiss Editorial White (\`#ffffff\`)
- **Typography**: Space Grotesk (display), Plus Jakarta Sans (body)
- **Border Radius**: \`6px–8px\` (Buttons/CTAs), \`8px–12px\` (Cards)
- **Section Architecture**: \`100vh–140vh\` Desktop scale, fluid mobile responsiveness
- **Accessibility**: WCAG 2.1 AA compliant (4.5:1 contrast, focus-visible indicators)
- **Dynamic Motion**: Framer Motion smooth slide-up text (\`opacity: 0, y: 24\` -> \`1, 0\`)

## 3. Completed Milestones
- [x] Initial Agential Skill installation and memory setup

## 4. Next Planned Milestones
- [ ] Navbar + Hero Section
`;
    fs.writeFileSync(contextFile, starterContext, 'utf-8');
    results.push(`Session Memory           -> context.md (initialized)`);
  }

  // 8. Copy DESIGN.md token specification if not present
  const designFile = path.join(targetDir, 'DESIGN.md');
  if (!fs.existsSync(designFile) && fs.existsSync(path.join(ROOT_DIR, 'DESIGN.md'))) {
    fs.copyFileSync(path.join(ROOT_DIR, 'DESIGN.md'), designFile);
    results.push(`Design Specification     -> DESIGN.md (Google Labs format tokens)`);
  }

  results.forEach((msg) => console.log(`  ${c.green}[OK]${c.reset} ${msg}`));
  console.log(`\n${c.green}${c.bold}Agential Skill successfully installed.${c.reset}`);
  console.log(`${c.dim}Connected AI agents (Cursor, Claude, Copilot, Windsurf, Antigravity) will now automatically enforce this standard.${c.reset}\n`);
}

function promptInteractive(targetDir) {
  printBanner();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`${c.bold}Choose your AI platform / editor:${c.reset}`);
  console.log(`  [1] ${c.green}${c.bold}Core Trio${c.reset} (Claude + Antigravity + VS Code) - ${c.dim}(Recommended)${c.reset}`);
  console.log(`  [2] Claude Code (CLAUDE.md)`);
  console.log(`  [3] Google Antigravity & Gemini CLI (.agents & AGENTS.md)`);
  console.log(`  [4] VS Code (.github/copilot-instructions.md)`);
  console.log(`  [5] Export Standalone Prompt for Web LLMs\n`);

  rl.question(`${c.cyan}Enter choice [1-5] (default: 1): ${c.reset}`, (answer) => {
    const choice = answer.trim() || '1';

    if (choice === '5') {
      rl.close();
      const promptFile = path.join(ROOT_DIR, 'adapters', 'system-prompt', 'prompt.md');
      console.log(`\n${c.green}Standalone prompt location:${c.reset} ${promptFile}`);
      console.log(`${c.dim}Copy the content of this file and paste it into ChatGPT or Claude Custom Instructions.${c.reset}\n`);
      return;
    }

    const mapping = {
      '1': ['all'],
      '2': ['claude'],
      '3': ['antigravity'],
      '4': ['copilot'],
    };

    const selected = mapping[choice] || ['all'];

    rl.question(`\n${c.cyan}Target directory path (default: ${targetDir}): ${c.reset}`, (dirAnswer) => {
      rl.close();
      const finalDir = dirAnswer.trim() ? path.resolve(dirAnswer.trim()) : targetDir;
      installSkill(finalDir, selected);
    });
  });
}

function addPreset(presetName, targetDir) {
  printBanner();
  const presetFile = path.join(ROOT_DIR, 'presets', `${presetName}.md`);
  if (!fs.existsSync(presetFile)) {
    console.error(`${c.yellow}Preset "${presetName}" not found.${c.reset}`);
    console.log(`Available presets:`);
    if (fs.existsSync(path.join(ROOT_DIR, 'presets'))) {
      fs.readdirSync(path.join(ROOT_DIR, 'presets')).forEach((f) => {
        if (f.endsWith('.md')) console.log(`  - ${f.replace('.md', '')}`);
      });
    }
    process.exit(1);
  }

  const destDir = path.join(targetDir, '.agents', 'skills', 'agential-skill', 'references');
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(presetFile, path.join(destDir, `${presetName}.md`));
  console.log(`  ${c.green}[OK]${c.reset} Added preset ${c.bold}${presetName}${c.reset} to ${destDir}\n`);
}

// Parse Command Line Arguments
const rawArgs = process.argv.slice(2);
let command = 'init';
let targetDir = process.cwd();
let isNonInteractive = false;
let presetName = null;

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '-y' || arg === '--yes' || arg === '--all' || arg === '-a') {
    isNonInteractive = true;
  } else if (arg === '-d' || arg === '--dir' || arg === '--target') {
    targetDir = path.resolve(rawArgs[++i] || '.');
  } else if (arg === 'init') {
    command = 'init';
  } else if (arg === 'add') {
    command = 'add';
    presetName = rawArgs[++i];
  } else if (arg === 'prompt' || arg === '--prompt') {
    command = 'prompt';
  } else if (arg === '--help' || arg === '-h' || arg === 'help') {
    command = 'help';
  } else if (!arg.startsWith('-') && i === 0) {
    command = arg;
  }
}

// Fallback to non-interactive if stdin is not a terminal (e.g. CI/pipes)
if (!process.stdin.isTTY && command === 'init') {
  isNonInteractive = true;
}

if (command === 'help') {
  printBanner();
  console.log(`Usage:
  npx agential-skill init             Interactive setup for your workspace
  npx agential-skill init -y          Automated, non-interactive install for all platforms
  npx agential-skill add <preset>     Add framework preset (react-nextjs, vue-nuxt)
  npx agential-skill prompt           Show standalone system prompt location
  npx agential-skill --help           Display help message
`);
} else if (command === 'prompt') {
  printBanner();
  const promptFile = path.join(ROOT_DIR, 'adapters', 'system-prompt', 'prompt.md');
  console.log(`${c.green}Standalone system prompt:${c.reset} ${promptFile}`);
  if (fs.existsSync(promptFile)) {
    console.log(`\n${fs.readFileSync(promptFile, 'utf-8').slice(0, 500)}...\n`);
  }
} else if (command === 'add') {
  if (!presetName) {
    console.error('Usage: agential-skill add <preset-name>');
    process.exit(1);
  }
  addPreset(presetName, targetDir);
} else if (isNonInteractive) {
  printBanner();
  installSkill(targetDir, ['all']);
} else {
  promptInteractive(targetDir);
}
