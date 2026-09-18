# Project Context: Agential Skill
*Maintained by Talha Irfan (@talhairfandev)*

## 1. Vision

- **Purpose**: A universal, model-agnostic instruction set for AI coding assistants that enforces disciplined frontend development — consistent design system, structured onboarding, incremental delivery, and mandatory review.
- **Repository**: `https://github.com/talhairfandev/agential-skill`

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
- **References**: 8 reference documents in `references/` (includes `framer-baseline-rules.md` and `framer-portfolio-blueprints.md`).
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
- [x] CLI streamlined to signature Brutalist Ultraviolet theme with interactive arrow-key selection, `-v`/`--version` support, direct cwd install, and automated aliases (`all`).
- [x] Inlined complete Framer Motion blueprints and mandatory pre-flight tool execution law across `SKILL.md`, `AGENTS.md`, and adapters so agents never skip motion/layout references.
- [x] Codified Low Text, High Fidelity (Anti-Clutter Law): Cut 70% of copy, limit headings to 3–6 words, subtitles to 1 sentence, and restrict metadata to max 1–2 surgical tags per section.
- [x] Framer-level portfolio system (`references/framer-portfolio-blueprints.md`): two design modes (A: Brutalist Editorial zero-radius; B: Soft Premium warm/rounded), full index + case-study page architecture, three project-grid layouts with hover reveals, and six signature interactions (scroll parallax, sticky titles, marquee, cursor bubble, reveal mask, page transition). Scoped the zero-radius/Ledger law to Mode A and explicitly allowed portfolio project grids. Added a portfolio onboarding question set and wired pre-flight/task-routing across SKILL.md, AGENTS.md, and all adapters.
- [x] Universal Framer-Level Baseline (`references/framer-baseline-rules.md`): made "treat every frontend build as a Framer-level website" the default law across SKILL.md, AGENTS.md, and all adapters. 8 rules (confident type, whitespace, smooth motion, high-fidelity media, low copy, refined interactions, section architecture, cohesive tokens) + Prime Directive (no ordinary/cluttered/template UI) + Refined App Standard exception for data-dense UIs (dashboards/tables use restrained scale + subtle motion under the same no-clutter law). Added as always-on pre-flight item and top task-routing row.

## 5. Active Conventions

- Always check `context.md` first.
- Low Text, High Fidelity: Cut 70% of copy. Headings 3–6 words max, subtitles 1 clean sentence (under 15 words). NO walls of text. Max 1–2 subtle spec badges per section.
- Strict Zero Radius: `border-radius: 0` (`rounded-none`) across all elements, buttons, and images.
- 10:1 Typographic Tension: Colossal headings (80px–140px, tight tracking) paired with microscopic utility labels (10px–11px, wide tracking).
- The Ledger System: Replace floating card boxes with stacked horizontal ledger rows with hairline dividers.
- Strict Color Law: Subtitles and paragraphs MUST NEVER be blue/cyan/purple.
- Run post-edit review after every file modification.
