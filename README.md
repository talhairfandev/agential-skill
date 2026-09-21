<div align="center">

# Agential Skill

### Autonomous Frontend Architecture & Editorial Output Design Engine for Coding Assistants

[![npm](https://img.shields.io/npm/v/agential-skill.svg?style=flat&color=171717)](https://www.npmjs.com/package/agential-skill)
[![license](https://img.shields.io/badge/license-MIT-171717.svg)](./LICENSE)

</div>

## Quickstart

Run one command in the root of your project:

```bash
npx agential-skill init
```

The installer adds the canonical skill and platform adapters to the current project.

## CLI Commands

| Command | Description |
|:---|:---|
| `npx agential-skill init` | Launch the interactive setup wizard |
| `npx agential-skill init -y` | Install all supported adapters without prompts |
| `npx agential-skill add react-nextjs` | Add React / Next.js implementation guidance |
| `npx agential-skill add vue-nuxt` | Add Vue / Nuxt implementation guidance |
| `npx agential-skill prompt` | View the standalone system prompt |
| `npx agential-skill --help` | View CLI options |

## What This Does

AI coding models often generate generic SaaS UI: soft cards, shadows, glass panels, gradient buttons, dashboard widget piles, and long filler copy. Agential Skill replaces those defaults with a self-contained editorial output system.

The system produces:

- Image-first full-bleed planes, split stages, title/image plates, and visible 1px construction grids.
- Oversized neutral grotesque typography paired with small mono utility labels and short copy.
- Hard-edged rectangular framing, with no soft ornamental geometry.
- Black, white, charcoal, cream, and selective vermilion/red/orange imagery.
- No cards, bento, shadows, glass, blur, decorative gradients, equal feature grids, or generic SaaS templates.
- Real interaction state, WCAG 2.1 AA semantics, square focus outlines, reduced-motion support, and post-edit validation.

## The Five Pillars

1. **Memory** — Read `context.md` first and persist visual decisions and milestones.
2. **Editorial Output** — Make the dominant image/type composition, hairline structure, sparse metadata, and minimal pacing unmistakable.
3. **System Discipline** — Use the same output language across sites, apps, portfolios, and framework presets.
4. **Incremental Delivery** — Deliver complete cohesive chunks rather than decorative fragments.
5. **Post-Edit Review** — Inspect diffs and run available validation after every change.

## Design Specification

`DESIGN.md` contains the machine-readable token contract. `SKILL.md` is the complete specification. `AGENTS.md` is the compact operational rule set.

## Supported Platforms

| Platform | File |
|:---|:---|
| Claude Code | `CLAUDE.md` |
| Google Antigravity | `AGENTS.md` |
| VS Code / GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules/agential-skill.mdc` |
| Windsurf | `.windsurfrules` |
| Web LLMs | `adapters/system-prompt/prompt.md` |

## Repository Structure

```text
agential-skill/
├── SKILL.md
├── AGENTS.md
├── DESIGN.md
├── context.md
├── presets/
├── references/
├── adapters/
├── .cursor/rules/
├── bin/cli.js
└── .github/workflows/
```

## Author and License

Created by **Talha Irfan** ([@talhairfandev](https://github.com/talhairfandev)). Licensed under [MIT](./LICENSE).
