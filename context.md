# Project Context: Agential Skill
*Maintained by Talha Irfan (@codedits)*

## 1. Vision

- **Purpose**: A universal, model-agnostic instruction set for AI coding assistants that enforces disciplined frontend development — consistent design system, structured onboarding, incremental delivery, and mandatory review.
- **Repository**: `https://github.com/codedits/agential-skill`

## 2. Design Standard

- **Styling Engine**: Tailwind CSS (dual-standard: v4 CSS-first `@theme` and v3 config).
- **Color**: Solid high-contrast surfaces. No rainbow gradients. Monochromatic ambient glows allowed.
- **Typography**: Space Grotesk (display), Plus Jakarta Sans (body), Manrope, Inter.
- **Border Radius**: Buttons 6–8px, cards 8–12px, tags 4–6px. No pill shapes.
- **Layout**: Full-bleed sections, edge-to-edge. Inner content in executive containers (`max-w-7xl`).
- **Section Architecture**: 100–140vh desktop for sticky reveals, fluid mobile.
- **Motion**: Framer Motion standard with slide-up reveals, scroll triggers, staggered entries.

## 3. Architecture

- **Standard**: Agent Skills 1.0 specification (`SKILL.md`).
- **Distribution**: Zero-dependency Node.js CLI (`npx agential-skill init`), PowerShell & Bash scripts.
- **Adapters**: `AGENTS.md` (universal root rule), `.cursorrules`, `.cursor/rules/agential-skill.mdc`, `.github/copilot-instructions.md`, `CLAUDE.md`, `.windsurfrules`, `prompt.md`.
- **References**: 6 reference documents in `references/`.
- **Visual Assets**: 9 WebP reference designs in `resources/design-references/`.

## 4. Completed

- [x] Initial universal skill structure and multi-agent adapters.
- [x] Core five pillars: memory, onboarding, design system, incremental delivery, review.
- [x] CLI installer (`bin/cli.js`), visual SVG demo, framework presets (`presets/`).
- [x] Design system: typography, color palette, minimal radius, navbar/hero standards.
- [x] Section architecture: viewport scaling, fluid mobile, signature components.
- [x] Visual reference catalogue: 9 WebP section archetypes.
- [x] Motion standard: Framer Motion slide-up reveals, scroll triggers, staggered entries.
- [x] Universal auto-trigger: `npx agential-skill init -y`, `AGENTS.md` root rule, `.cursor/rules/agential-skill.mdc` (`alwaysApply: true`).
- [x] File compaction: removed backend artifacts, eliminated duplicates, verified integrity.
- [x] Swiss editorial portfolio UI system: Space Grotesk + Plus Jakarta Sans pairing, bracketed micro-labels, dual-theme engine, rolling links, sticky card stacking, fluid buttons, magnetic hover.
- [x] Full-bleed hero section rule codified across all files.
- [x] Tailwind CSS dual-standard (v4 + v3) integrated.
- [x] Full-width layout and card standard codified.
- [x] `context.md` memory persistence protocol.
- [x] Swiss editorial redesign: stripped all marketing language, emoji, and AI jargon from every file. Rebuilt in clean, authoritative Swiss International Typographic Style voice.
- [x] WCAG 2.1 AA accessibility standards codified (`references/accessibility-standards.md`).
- [x] State UX and feedback patterns codified (`references/form-and-feedback-ux.md`).
- [x] Google Labs `DESIGN.md` specification implemented with machine-readable tokens and CLI auto-install.
- [x] Streamlined focus to Claude Code, Google Antigravity, and VS Code with an instant Fast Reference matrix for AI comprehension.
- [x] Codified Swiss Architectural Editorial & Brutalist Luxury standard: zero border-radius (`rounded-none`), 10:1 typographic scale polarity, the Ledger System (banning floating card UI), hairline architectural wireframes, archival artifacts (®, ™, [01]), and monolithic contrast.

## 5. Active Conventions

- Always check `context.md` first.
- Strict Zero Radius: `border-radius: 0` (`rounded-none`) across all elements, buttons, and images.
- 10:1 Typographic Tension: Colossal headings (80px–140px, tight tracking) paired with microscopic utility labels (10px–11px, wide tracking).
- The Ledger System: Replace floating card boxes with stacked horizontal ledger rows with hairline dividers.
- Strict Color Law: Subtitles and paragraphs MUST NEVER be blue/cyan/purple.
- Run post-edit review after every file modification.
