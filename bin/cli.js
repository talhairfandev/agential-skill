#!/usr/bin/env node

/**
 * Agential Skill CLI
 * Zero-dependency interactive and automated installer for any AI agent.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));

// ANSI Colors & Theming
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  white: '\x1b[1m\x1b[37m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

const THEMES = {
  cyan: {
    key: 'cyan',
    name: 'Electric Blueprint',
    dot: '\x1b[38;2;56;189;248m',       // #38bdf8
    border: '\x1b[38;2;51;65;85m',      // #334155
    sub: '\x1b[38;2;148;163;184m',      // #94a3b8
    gradient: [
      '\x1b[38;2;224;242;254m',         // #e0f2fe
      '\x1b[38;2;186;230;253m',         // #bae6fd
      '\x1b[38;2;125;211;252m',         // #7dd3fc
      '\x1b[38;2;56;189;248m',          // #38bdf8
      '\x1b[38;2;14;165;233m',          // #0ea5e9
      '\x1b[38;2;2;132;199m'            // #0284c7
    ]
  },
  emerald: {
    key: 'emerald',
    name: 'Matrix Mint',
    dot: '\x1b[38;2;52;211;153m',       // #34d399
    border: '\x1b[38;2;30;64;48m',      // #1e4030
    sub: '\x1b[38;2;167;243;208m',      // #a7f3d0
    gradient: [
      '\x1b[38;2;236;253;245m',         // #ecfdf5
      '\x1b[38;2;167;243;208m',         // #a7f3d0
      '\x1b[38;2;110;231;183m',         // #6ee7b7
      '\x1b[38;2;52;211;153m',          // #34d399
      '\x1b[38;2;16;185;129m',          // #10b981
      '\x1b[38;2;5;150;105m'            // #059669
    ]
  },
  violet: {
    key: 'violet',
    name: 'Brutalist Ultraviolet',
    dot: '\x1b[38;2;192;132;252m',      // #c084fc
    border: '\x1b[38;2;88;28;135m',      // #581c87
    sub: '\x1b[38;2;216;180;254m',      // #d8b4fe
    gradient: [
      '\x1b[38;2;126;34;206m',         // #7e22ce deep royal violet
      '\x1b[38;2;147;51;234m',         // #9333ea vivid purple
      '\x1b[38;2;168;85;247m',         // #a855f7 electric violet
      '\x1b[38;2;192;132;252m',         // #c084fc radiant lilac violet
      '\x1b[38;2;216;180;254m',         // #d8b4fe bright electric lavender
      '\x1b[38;2;233;213;255m'          // #e9d5ff subtle sheen (zero washed-out white)
    ]
  },
  amber: {
    key: 'amber',
    name: 'Solar Monolith',
    dot: '\x1b[38;2;251;191;36m',       // #fbbf24
    border: '\x1b[38;2;69;26;3m',       // #451a03
    sub: '\x1b[38;2;253;230;138m',      // #fde68a
    gradient: [
      '\x1b[38;2;254;243;199m',         // #fef3c7
      '\x1b[38;2;253;230;138m',         // #fde68a
      '\x1b[38;2;252;211;77m',          // #fcd34d
      '\x1b[38;2;251;191;36m',          // #fbbf24
      '\x1b[38;2;245;158;11m',          // #f59e0b
      '\x1b[38;2;180;83;9m'             // #b45309
    ]
  },
  crimson: {
    key: 'crimson',
    name: 'Vogue Scarlet',
    dot: '\x1b[38;2;248;113;113m',      // #f87171
    border: '\x1b[38;2;76;5;25m',       // #4c0519
    sub: '\x1b[38;2;252;165;165m',      // #fca5a5
    gradient: [
      '\x1b[38;2;255;241;242m',         // #fff1f2
      '\x1b[38;2;254;205;211m',         // #fecdd3
      '\x1b[38;2;251;113;133m',         // #fb7185
      '\x1b[38;2;244;63;94m',           // #f43f5e
      '\x1b[38;2;225;29;72m',           // #e11d48
      '\x1b[38;2;159;18;57m'            // #9f1239
    ]
  }
};

const BANNER_AGENTIAL = [
  '  █████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗ █████╗ ██╗     ',
  ' ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║██╔══██╗██║     ',
  ' ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ██║███████║██║     ',
  ' ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██║██╔══██║██║     ',
  ' ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║██║  ██║███████╗',
  ' ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚══════╝'
];

const BANNER_SKILL = [
  ' ███████╗██╗  ██╗██╗██╗     ██╗     ',
  ' ██╔════╝██║ ██╔╝██║██║     ██║     ',
  ' ███████╗█████╔╝ ██║██║     ██║     ',
  ' ╚════██║██╔═██╗ ██║██║     ██║     ',
  ' ███████║██║  ██╗██║███████╗███████╗',
  ' ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝'
];

function getTheme(themeKey) {
  const chosen = (themeKey || process.env.AGENTIAL_THEME || 'violet').toLowerCase();
  return THEMES[chosen] || THEMES.violet;
}

function printBanner(themeKey) {
  const t = getTheme(themeKey);
  console.log('');
  console.log(t.border + ' ┌─ ' + t.dot + '●' + c.reset + ' ' + c.white + 'Welcome to Agential Skill' + c.reset + c.dim + ' (v' + PKG.version + ')' + t.border + ' ──────────────────────────────┐' + c.reset);
  console.log(t.border + ' │  ' + t.sub + 'Autonomous Frontend Architecture & Design Engine                     ' + t.border + '│' + c.reset);
  console.log(t.border + ' └───────────────────────────────────────────────────────────────────────┘' + c.reset);
  console.log('');

  BANNER_AGENTIAL.forEach((line, i) => {
    console.log(t.gradient[i] + line + c.reset);
  });
  BANNER_SKILL.forEach((line, i) => {
    console.log(t.gradient[i] + line + c.reset);
  });

  console.log('');
  console.log(c.dim + ' ───────────────────────────────────────────────────────────────────────' + c.reset);
  console.log(c.dim + '  Version: ' + c.white + 'v' + PKG.version + c.reset + c.dim + '  │  Supports: ' + c.white + 'Claude Code' + c.reset + c.dim + ' · ' + c.white + 'Google Antigravity' + c.reset + c.dim + ' · ' + c.white + 'VS Code' + c.reset);
  console.log(c.dim + ' ───────────────────────────────────────────────────────────────────────' + c.reset);
  console.log('');
}

function showThemes() {
  console.log(c.bold + '\nAvailable Agential Skill Color Themes:\n' + c.reset);
  Object.keys(THEMES).forEach((key) => {
    const t = THEMES[key];
    console.log('  ' + t.dot + '●' + c.reset + ' ' + c.bold + key.padEnd(10) + c.reset + ' ' + c.dim + '— ' + t.name + c.reset);
    const preview = t.gradient.map((g) => g + '███' + c.reset).join(' ');
    console.log('    Palette: ' + preview + '\n');
  });
  console.log(c.dim + 'To use a theme in your commands:' + c.reset);
  console.log('  npx agential-skill --theme=emerald');
  console.log('  npx agential-skill --theme=violet');
  console.log('  npx agential-skill --theme=amber\n');
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

const MENU_OPTIONS = [
  { key: '1', targets: ['all'], label: 'Core Trio (Claude + Antigravity + VS Code) - (Recommended)' },
  { key: '2', targets: ['claude'], label: 'Claude Code (CLAUDE.md)' },
  { key: '3', targets: ['antigravity'], label: 'Google Antigravity & Gemini CLI (.agents & AGENTS.md)' },
  { key: '4', targets: ['copilot'], label: 'VS Code (.github/copilot-instructions.md)' },
  { key: '5', targets: null, label: 'Export Standalone Prompt for Web LLMs' }
];

function promptInteractive(targetDir, themeChoice) {
  printBanner(themeChoice);
  const t = getTheme(themeChoice);

  if (!process.stdin.isTTY) {
    installSkill(targetDir, ['all']);
    return;
  }

  console.log(`${c.bold}Choose your AI platform / editor:${c.reset} ${c.dim}(Use ↑/↓ arrows, Enter to select, or 1-5)${c.reset}\n`);

  let selectedIndex = 0;

  // Hide cursor during arrow selection
  process.stdout.write('\x1b[?25l');

  function renderMenu(isInitial) {
    if (!isInitial) {
      readline.moveCursor(process.stdout, 0, -MENU_OPTIONS.length);
    }
    MENU_OPTIONS.forEach((opt, idx) => {
      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      if (idx === selectedIndex) {
        process.stdout.write(`  ${t.dot}${c.bold}❯ [${idx + 1}] ${opt.label}${c.reset}\n`);
      } else {
        process.stdout.write(`    ${c.dim}[${idx + 1}] ${opt.label}${c.reset}\n`);
      }
    });
  }

  renderMenu(true);

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  process.stdin.resume();

  function onKeypress(str, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.stdout.write('\x1b[?25h');
      process.exit(0);
    }

    if (key && (key.name === 'up' || key.name === 'k')) {
      selectedIndex = (selectedIndex - 1 + MENU_OPTIONS.length) % MENU_OPTIONS.length;
      renderMenu(false);
    } else if (key && (key.name === 'down' || key.name === 'j')) {
      selectedIndex = (selectedIndex + 1) % MENU_OPTIONS.length;
      renderMenu(false);
    } else if (key && (key.name === 'return' || key.name === 'enter')) {
      confirmChoice(selectedIndex);
    } else if (str && ['1', '2', '3', '4', '5'].includes(str)) {
      selectedIndex = parseInt(str, 10) - 1;
      renderMenu(false);
      confirmChoice(selectedIndex);
    }
  }

  function confirmChoice(idx) {
    process.stdin.removeListener('keypress', onKeypress);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.stdout.write('\x1b[?25h');
    console.log('');

    const chosenOption = MENU_OPTIONS[idx];
    if (chosenOption.key === '5') {
      const promptFile = path.join(ROOT_DIR, 'adapters', 'system-prompt', 'prompt.md');
      console.log(`\n${c.green}Standalone prompt location:${c.reset} ${promptFile}`);
      console.log(`${c.dim}Copy the content of this file and paste it into ChatGPT or Claude Custom Instructions.${c.reset}\n`);
      process.exit(0);
      return;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${t.dot}Target directory path (default: ${targetDir}): ${c.reset}`, (dirAnswer) => {
      rl.close();
      const finalDir = dirAnswer.trim() ? path.resolve(dirAnswer.trim()) : targetDir;
      installSkill(finalDir, chosenOption.targets);
    });
  }

  process.stdin.on('keypress', onKeypress);
}

function addPreset(presetName, targetDir, themeChoice) {
  printBanner(themeChoice);
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
let themeChoice = process.env.AGENTIAL_THEME || 'violet';

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '-y' || arg === '--yes' || arg === '--all' || arg === '-a') {
    isNonInteractive = true;
  } else if (arg === '-d' || arg === '--dir' || arg === '--target') {
    targetDir = path.resolve(rawArgs[++i] || '.');
  } else if (arg.startsWith('--theme=')) {
    themeChoice = arg.split('=')[1];
  } else if (arg === '-t' || arg === '--theme') {
    themeChoice = rawArgs[++i] || 'violet';
  } else if (arg === 'init') {
    command = 'init';
  } else if (arg === 'add') {
    command = 'add';
    presetName = rawArgs[++i];
  } else if (arg === 'prompt' || arg === '--prompt') {
    command = 'prompt';
  } else if (arg === 'themes' || arg === '--themes') {
    command = 'themes';
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
  printBanner(themeChoice);
  console.log(`Usage:
  npx agential-skill init             Interactive setup for your workspace
  npx agential-skill init -y          Automated, non-interactive install for all platforms
  npx agential-skill add <preset>     Add framework preset (react-nextjs, vue-nuxt)
  npx agential-skill prompt           Show standalone system prompt location
  npx agential-skill themes           Preview all color theme variations
  npx agential-skill --theme=<name>   Set theme (cyan, emerald, violet, amber, crimson)
  npx agential-skill --help           Display help message
`);
} else if (command === 'themes') {
  printBanner(themeChoice);
  showThemes();
} else if (command === 'prompt') {
  printBanner(themeChoice);
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
  addPreset(presetName, targetDir, themeChoice);
} else if (isNonInteractive) {
  printBanner(themeChoice);
  installSkill(targetDir, ['all']);
} else {
  promptInteractive(targetDir, themeChoice);
}
