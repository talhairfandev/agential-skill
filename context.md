# Project Context: Agential Skill
*Maintained by Talha Irfan (@talhairfandev)*
*Last updated: 2026-09-21*

## 1. Vision

- **Purpose**: A universal, model-agnostic instruction set for coding assistants that prevents generic frontend output and enforces disciplined implementation and review.
- **Repository**: `https://github.com/talhairfandev/agential-skill`
- **Visual direction**: Self-contained minimal editorial output. The desired look is embedded in the skill and does not depend on external asset inspection.

## 2. Design Direction

- **Composition**: Image-first full-bleed planes; split stages; image/title plates; visible wireframe matrices; sharp image strips; editorial index rows.
- **Typography**: Oversized neutral grotesque display type, short headings, plain sans body copy, and tiny mono utility labels.
- **Color**: Black, white, charcoal, cream, with selective vermilion/red/orange image fields or type. Body copy stays neutral.
- **Geometry**: Hard-edged rectangular framing, visible 1px rules, hard section seams, and locked rectangular media ratios (`3/4`, `4/5`, `16/9`).
- **Density**: Minimal and curated. One focal image or title per section; sparse metadata; no filler copy.
- **Forbidden patterns**: Floating cards, bento, equal feature grids, shadows, glass, blur, decorative gradients, generic SaaS heroes, dashboard widget piles, and telemetry clutter.

## 3. Architecture

- **Standard**: Agent Skills 1.0 specification (`SKILL.md`).
- **Distribution**: Zero-dependency Node.js CLI (`npx agential-skill init`), PowerShell and Bash scripts.
- **Adapters**: `AGENTS.md`, `.cursor/rules/agential-skill.mdc`, Copilot, Claude, Windsurf, and standalone system prompt.
- **References**: Baseline, design tokens, portfolio, section benchmarks, forms, accessibility, questioning, context, post-edit review, and research workflow.

## 4. Completed

- [x] Initial universal skill structure and multi-agent adapters.
- [x] Zero-dependency CLI installer and validation workflow.
- [x] WCAG, state UX, context persistence, and post-edit review references.
- [x] Reconstructed the canonical skill around a self-contained editorial output standard.
- [x] Propagated the image-led, hard-edged, no-clutter convention across all primary adapters and framework presets.
- [x] Removed explicit asset-inspection instructions and implementation-level corner terminology from active guidance.

## 5. Next

- [ ] Keep future edits synchronized across `SKILL.md`, `AGENTS.md`, adapters, `DESIGN.md`, and relevant references.
- [ ] Run the repository verification command after guidance changes.

## 6. Active Conventions

- Read this file before acting.
- Make the visual grammar obvious in the output: dominant imagery, oversized type, hairline structure, sparse metadata, and hard-edged rectangular framing.
- Keep controls quiet and functional.
- Review diffs and validate after every edit.
