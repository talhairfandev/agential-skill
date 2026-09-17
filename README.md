<div align="center">

# Agential Skill

### Editorial Web & UI Design System for Claude Code, Antigravity, and VS Code.

[![npm](https://img.shields.io/npm/v/agential-skill.svg?style=flat&color=171717)](https://www.npmjs.com/package/agential-skill)
[![license](https://img.shields.io/badge/license-MIT-171717.svg?style=flat)](./LICENSE)

<br/>

Specialized for **Claude Code** · **Google Antigravity** · **VS Code (GitHub Copilot)**

<br/>

<p align="center">
  <img src="./assets/demo.svg" alt="Agential Skill — workflow overview" width="760"/>
</p>

</div>

<br/>

## What This Does

AI models default to dated aesthetics, break existing code on edit, and overwhelm non-technical users with jargon. Agential Skill is a model-agnostic instruction set that corrects all three problems by enforcing a disciplined, five-step workflow on every turn.

The skill ships as a single `SKILL.md` spec with platform-specific adapters. Install once; every AI session inherits the same design system, the same review discipline, and the same communication standard.

---

## Install

```bash
# Auto-configure for all platforms:
npx agential-skill init -y

# Interactive wizard:
npx agential-skill init

# Direct from GitHub (no npm):
npx github:talhairfandev/agential-skill init -y
```

Or via one-line scripts:

- **Windows (PowerShell):** `irm https://raw.githubusercontent.com/talhairfandev/agential-skill/main/scripts/install.ps1 | iex`
- **macOS / Linux:** `curl -fsSL https://raw.githubusercontent.com/talhairfandev/agential-skill/main/scripts/install.sh | bash`

---

## The Five Pillars

Every AI running this skill follows five rules, in order:

1. **Memory** — Check `context.md` at session start. Persist all design decisions and completed milestones so context survives chat restarts and model switches.

2. **Onboarding** — Before writing new UI, ask 3–4 plain-English questions (theme, primary action, density, pacing). Skip this step when the user already provided specs or is editing existing code.

3. **Design System** — Enforce a strict visual standard: solid high-contrast colors (no rainbow gradients), clean sans-serif typography (Space Grotesk, Plus Jakarta Sans, Inter), minimal border-radius (6–8 px buttons, 8–12 px cards), full-viewport section architecture (100–140 vh desktop, fluid mobile), deliberate motion, WCAG 2.1 AA accessibility compliance (>= 4.5:1 text contrast, visible focus rings), and resilient state UX (forms, skeletons, empty states).

4. **Incremental Delivery** — Build in complete, cohesive chunks (e.g. navbar + hero first). Review the diff, verify, then pause for user feedback before continuing.

5. **Post-Edit Review** — After every file modification, verify imports, closing tags, caller integrity, accessibility attributes, and zero regressions before reporting completion.

---

## Design Specification Standard (`DESIGN.md`)

Agential Skill supports the [Google Labs `DESIGN.md`](https://github.com/google-labs-code/design.md) specification. When installed via `npx agential-skill init`, a canonical `DESIGN.md` token specification file is placed at the project root with machine-readable YAML tokens for color, typography, radii, spacing, and layout.

---

## Supported Platforms

| Platform | File | Loaded via |
|:---|:---|:---|
| **Claude Code** | `CLAUDE.md` | Project instructions |
| **Google Antigravity** | `.agents/skills/agential-skill/SKILL.md` + `AGENTS.md` | Auto-discovery |
| **VS Code (GitHub Copilot)** | `.github/copilot-instructions.md` | Workspace instructions |
| Cursor IDE (Legacy) | `.cursorrules` + `.cursor/rules/agential-skill.mdc` | Always-apply rules |
| Windsurf IDE (Legacy) | `.windsurfrules` | Cascade context |
| Web LLMs (ChatGPT / Claude) | `adapters/system-prompt/prompt.md` | Direct paste |

---

## Framework Presets

| Preset | Stack | Command |
|:---|:---|:---|
| React & Next.js | Next.js 15+, React 19, Server Components | `npx agential-skill add react-nextjs` |
| Vue & Nuxt | Vue 3 Composition API, Nuxt 3 | `npx agential-skill add vue-nuxt` |

---

## Repository Structure

```
agential-skill/
├── SKILL.md                          # Full specification (YAML frontmatter)
├── AGENTS.md                         # Compact enforcement rules (auto-loaded)
├── DESIGN.md                         # Google Labs design token specification
├── README.md
├── LICENSE
├── package.json
├── bin/cli.js                        # Zero-dependency CLI installer
├── context.md                        # Project memory template
│
├── presets/
│   ├── react-nextjs.md
│   └── vue-nuxt.md
│
├── references/
│   ├── accessibility-standards.md    # WCAG 2.1 AA checklist & patterns
│   ├── form-and-feedback-ux.md       # Form validation, skeletons, empty states
│   ├── framer-design-system.md       # Design system specification
│   ├── premium-section-benchmarks.md # Section archetype catalogue
│   ├── questioning-framework.md      # Onboarding question guide
│   ├── context-protocol.md           # Memory persistence protocol
│   ├── post-edit-review-checklist.md # Review checklist
│   └── web-research-workflow.md      # Research trigger rules
│
├── resources/
│   └── design-references/            # Visual reference images (WebP)
│
├── adapters/
│   ├── cursor/.cursorrules
│   ├── copilot/copilot-instructions.md
│   ├── claude/CLAUDE.md
│   ├── windsurf/.windsurfrules
│   └── system-prompt/prompt.md
│
├── assets/
│   └── demo.svg
│
└── .github/workflows/
    └── validate-skill.yml
```

---

## Author

Created by **Talha Irfan** ([@talhairfandev](https://github.com/talhairfandev)).

## License

[MIT](./LICENSE)
