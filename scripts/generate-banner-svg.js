const fs = require('fs');
const path = require('path');

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

const GRADIENT = [
  '#7e22ce',
  '#9333ea',
  '#a855f7',
  '#c084fc',
  '#d8b4fe',
  '#e9d5ff'
];

const charW = 9.2;
const startX = 36;

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderGridLine(lineStr, y, color) {
  let spans = '';
  for (let col = 0; col < lineStr.length; col++) {
    const ch = lineStr[col];
    if (ch !== ' ') {
      const x = (startX + col * charW).toFixed(1);
      spans += `<tspan x="${x}">${escapeXml(ch)}</tspan>`;
    }
  }
  return `    <text y="${y}" fill="${color}">${spans}</text>`;
}

function generateSvg() {
  const svgLines = [];

  svgLines.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" width="760" height="480">');
  svgLines.push('  <rect width="760" height="480" rx="8" fill="#09090b" stroke="#27272a" stroke-width="1"/>');
  svgLines.push('  ');
  svgLines.push('  <!-- Title Bar -->');
  svgLines.push('  <circle cx="24" cy="20" r="5" fill="#ef4444" opacity="0.8"/>');
  svgLines.push('  <circle cx="40" cy="20" r="5" fill="#f59e0b" opacity="0.8"/>');
  svgLines.push('  <circle cx="56" cy="20" r="5" fill="#10b981" opacity="0.8"/>');
  svgLines.push('  <text x="74" y="24" fill="#71717a" font-family="ui-monospace, Consolas, monospace" font-size="11px">agential-skill — v1.0.2</text>');
  svgLines.push('  <line x1="0" y1="36" x2="760" y2="36" stroke="#18181b" stroke-width="1"/>');
  svgLines.push('  ');
  svgLines.push('  <g font-family="Consolas, ui-monospace, monospace" font-size="13px" font-weight="normal" xml:space="preserve">');

  // Top Box
  const top1 = ' ┌─ ● Welcome to Agential Skill (v1.0.2) ────────────────────────────────┐';
  const top2 = ' │  Autonomous Frontend Architecture & Design Engine                     │';
  const top3 = ' └───────────────────────────────────────────────────────────────────────┘';

  // Render top box with exact colors
  let top1Spans = '';
  for (let col = 0; col < top1.length; col++) {
    const ch = top1[col];
    if (ch !== ' ') {
      const x = (startX + col * charW).toFixed(1);
      let colColor = '#581c87';
      let weight = '';
      if (ch === '●') colColor = '#c084fc';
      else if (col >= 5 && col <= 30) { colColor = '#ffffff'; weight = ' font-weight="bold"'; }
      else if (col >= 31 && col <= 39) colColor = '#71717a';
      top1Spans += `<tspan x="${x}" fill="${colColor}"${weight}>${escapeXml(ch)}</tspan>`;
    }
  }
  svgLines.push(`    <text y="68">${top1Spans}</text>`);

  let top2Spans = '';
  for (let col = 0; col < top2.length; col++) {
    const ch = top2[col];
    if (ch !== ' ') {
      const x = (startX + col * charW).toFixed(1);
      let colColor = '#581c87';
      if (col >= 4 && col <= 51) colColor = '#d8b4fe';
      top2Spans += `<tspan x="${x}" fill="${colColor}">${escapeXml(ch)}</tspan>`;
    }
  }
  svgLines.push(`    <text y="86">${top2Spans}</text>`);
  svgLines.push(renderGridLine(top3, 104, '#581c87'));

  // AGENTIAL
  let y = 142;
  BANNER_AGENTIAL.forEach((line, i) => {
    svgLines.push(renderGridLine(line, y, GRADIENT[i]));
    y += 18;
  });

  // Space
  y += 4;

  // SKILL
  BANNER_SKILL.forEach((line, i) => {
    svgLines.push(renderGridLine(line, y, GRADIENT[i]));
    y += 18;
  });

  // Footer Divider
  y += 14;
  const foot1 = ' ───────────────────────────────────────────────────────────────────────';
  svgLines.push(renderGridLine(foot1, y, '#3f3f46'));

  y += 18;
  const foot2 = '  Version: v1.0.2  │  Supports: Claude Code · Google Antigravity · VS Code';
  let foot2Spans = '';
  for (let col = 0; col < foot2.length; col++) {
    const ch = foot2[col];
    if (ch !== ' ') {
      const x = (startX + col * charW).toFixed(1);
      let colColor = '#71717a';
      let weight = '';
      if (col >= 11 && col <= 17) { colColor = '#ffffff'; weight = ' font-weight="bold"'; }
      else if (col === 19) colColor = '#3f3f46';
      else if (col >= 31 && col <= 41) { colColor = '#ffffff'; weight = ' font-weight="bold"'; }
      else if (col >= 45 && col <= 62) { colColor = '#ffffff'; weight = ' font-weight="bold"'; }
      else if (col >= 66 && col <= 72) { colColor = '#ffffff'; weight = ' font-weight="bold"'; }
      foot2Spans += `<tspan x="${x}" fill="${colColor}"${weight}>${escapeXml(ch)}</tspan>`;
    }
  }
  svgLines.push(`    <text y="${y}">${foot2Spans}</text>`);

  y += 18;
  svgLines.push(renderGridLine(foot1, y, '#3f3f46'));

  svgLines.push('  </g>');
  svgLines.push('</svg>');

  const finalSvg = svgLines.join('\n');
  const targetPath = path.resolve(__dirname, '..', 'assets', 'terminal-banner.svg');
  fs.writeFileSync(targetPath, finalSvg, 'utf-8');
  console.log('Saved SVG to:', targetPath);
}

generateSvg();
