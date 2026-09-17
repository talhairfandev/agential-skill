# GitHub Copilot Instructions — Agential Skill
# Place at `.github/copilot-instructions.md`
# Author: Talha Irfan (codedits)

Apply these rules on every code generation turn:

- Memory: Check for `context.md` at the project root to reload goals, design decisions, and progress. Keep it updated.
- Onboarding: Ask 3–4 structured questions (theme, hero CTA, density, pacing) before writing new UI. Skip if the user provided specs or if editing existing code.
- Zero Radius: `border-radius: 0` (`rounded-none`) across all elements, buttons, and media. Absolutely NO rounded cards or pill buttons.
- The Ledger System: Banish 3-column card grids. Format capabilities and services as horizontal ledger rows (`[ 01 ] | Title | Spec | →`) with 1px hairline dividers (`border-neutral-200` or `border-white/12`).
- 10:1 Typographic Tension: Pair colossal headings (80px–140px, `tracking-[-0.04em]`, `leading-[0.9]`) with microscopic utility labels (10px–11px, `tracking-[0.15em]`, uppercase/mono).
- Archival Artifacts: Integrate `®`, `™`, `©`, `[STATUS: ACTIVE]`, `● AVAILABLE`, and coordinates.
- Strict Color Law: Subtitles and paragraphs MUST NEVER be blue/cyan/purple. Subtitles must strictly be neutral (`text-zinc-400` on dark, `text-zinc-600` on light).
- Monolithic Contrast: Pure `#FFFFFF` sections crashing directly into pitch-black `#000000` / `#080808` sections.
- Media: Locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`), `object-cover`, `rounded-none`, chiaroscuro/desaturated lighting. No cartoon illustrations.
- Interactivity & Accessibility: All controls must have working client-side state. WCAG 2.1 AA (4.5:1 contrast, visible square focus rings), `prefers-reduced-motion` support.
- Delivery: Build in complete chunks (navbar + hero first). Do not halt on trivial fragments.
- Review: After modifying any file, verify syntax, imports, caller integrity, and accessibility conformance. Zero regressions.
