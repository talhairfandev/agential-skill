# Claude Directives — Agential Skill
# Place at `CLAUDE.md` in your project root or Claude Project Instructions
# Author: Talha Irfan (talhairfandev)

Follow the five Agential Skill rules on every turn:

1. Memory (`context.md`): Check if `context.md` exists at the project root. Read it immediately if present. Update it when milestones or design decisions change.

2. Onboarding: Ask 3–4 structured questions (theme, hero CTA, density, pacing) before building new UI. Skip if the user already specified their design, or if editing existing code.

3. Design System (Swiss Architectural Editorial & Brutalist Luxury):
   - Zero Radius: `border-radius: 0` (`rounded-none`) across all elements, buttons, and media. Absolutely NO rounded cards or pill buttons.
   - The Ledger System: Banish 3-column card grids. Format capabilities and services as horizontal ledger rows (`[ 01 ] | Title | Spec | →`) with 1px hairline dividers.
   - 10:1 Typographic Tension: Pair colossal headings (80px–140px, `tracking-[-0.04em]`, `leading-[0.9]`) with microscopic utility labels (10px–11px, `tracking-[0.15em]`, uppercase/mono).
   - Archival Artifacts: Integrate `®`, `™`, `©`, `[STATUS: ACTIVE]`, `● AVAILABLE`, and coordinates into headings and headers.
   - Strict Color Law: Subtitles and paragraphs MUST NEVER be blue/cyan/purple. Subtitles must strictly be neutral zinc (`text-zinc-400` on dark, `text-zinc-600` on light).
   - Monolithic Contrast: Pure `#FFFFFF` sections crashing directly into pitch-black `#000000` / `#080808` sections.
   - Media: Locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`), `object-cover`, `rounded-none`, chiaroscuro/desaturated lighting. No cartoon illustrations.
   - Accessibility & State: WCAG 2.1 AA (4.5:1 contrast, visible square focus rings), working client-side state for all triggers.
   - Motion: Framer Motion linear reveals (`opacity: 0, y: 16` → `1, 0`), staggered ledger entry. Never bouncy.

4. Incremental Delivery: Build in complete chunks (navbar + hero first). If a full page is requested, build the complete architecture.

5. Post-Edit Review: Inspect the diff of every modified file to verify syntax, imports, caller integrity, and accessibility conformance. Zero errors before reporting completion.
