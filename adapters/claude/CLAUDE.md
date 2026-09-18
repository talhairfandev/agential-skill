# Claude Directives — Agential Skill
# Place at `CLAUDE.md` in your project root or Claude Project Instructions
# Author: Talha Irfan (talhairfandev)

Follow the five Agential Skill rules on every turn:

1. Memory (`context.md`): Check if `context.md` exists at the project root. Read it immediately if present. Update it when milestones or design decisions change.

2. Onboarding: Ask 3–4 structured questions (theme, hero CTA, density, pacing) before building new UI. Skip if the user already specified their design, or if editing existing code.

3. Design System (Swiss Architectural Editorial & Brutalist Luxury):
   - Framer-Level Baseline (universal): Treat EVERY frontend build as a Framer-level website — confident oversized type, massive whitespace, smooth scroll-driven motion (`ease [0.22,1,0.36,1]` or `[0.16,1,0.3,1]`, never bouncy), high-fidelity media, low copy, refined interactions, cohesive tokens. NEVER ship ordinary, cluttered, or template-grade UI: one focal point per section, deliberate hierarchy, generous negative space. Data-dense app UIs (dashboards/tables) use the Refined App Standard (restrained scale, subtle motion) but obey the same no-clutter law. Read `references/framer-baseline-rules.md`.
   - Zero Radius: `border-radius: 0` (`rounded-none`) across all elements, buttons, and media. Absolutely NO rounded cards or pill buttons.
   - The Ledger System: Banish 3-column card grids. Format capabilities and services as horizontal ledger rows (`[ 01 ] | Title | Spec | →`) with 1px hairline dividers.
   - Low Text, High Fidelity (Anti-Clutter): Cut 70% of copy. Headings 3–6 words, subtitles 1 sentence (under 15 words). NO walls of text or paragraphs. Do NOT clutter with fake telemetry/coordinates. Let breathing room, colossal scale, and high-fidelity media command the page.
   - 10:1 Typographic Tension: Pair colossal headings (80px–140px, `tracking-[-0.04em]`, `leading-[0.9]`) with microscopic utility labels (10px–11px, `tracking-[0.15em]`, uppercase/mono).
   - Surgical Artifacts: Subtle `®`, `™`, or `[ 01 ]`. Max 1–2 per section. Never overwhelm the canvas.
   - Strict Color Law: Subtitles and paragraphs MUST NEVER be blue/cyan/purple. Subtitles must strictly be neutral zinc (`text-zinc-400` on dark, `text-zinc-600` on light).
   - Monolithic Contrast: Pure `#FFFFFF` sections crashing directly into pitch-black `#000000` / `#080808` sections.
   - Media: Locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`), `object-cover`, `rounded-none`, chiaroscuro/desaturated lighting. No cartoon illustrations.
   - Accessibility & State: WCAG 2.1 AA (4.5:1 contrast, visible square focus rings), working client-side state for all triggers.
   - Motion: Framer Motion linear architectural reveals (`initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `ease: [0.16, 1, 0.3, 1]`), staggered ledger entry (`staggerChildren: 0.08`), and rolling text (`RollText`). Never bouncy or cartoonish.
   - Mandatory Pre-Flight Read: Before writing animations or layouts, you MUST execute tool read on `references/framer-design-system.md` and `references/premium-section-benchmarks.md`. For portfolios, personal sites, or case studies, you MUST first read `references/framer-portfolio-blueprints.md` and pick a design mode (A: Brutalist Editorial — zero-radius; or B: Soft Premium — warm cream tones, rounded media). In a portfolio context, project thumbnail grids are allowed and expected; the zero-radius/Ledger law applies to Mode A only. Do not guess or use generic defaults.

4. Incremental Delivery: Build in complete chunks (navbar + hero first). If a full page is requested, build the complete architecture.

5. Post-Edit Review: Inspect the diff of every modified file to verify syntax, imports, caller integrity, and accessibility conformance. Zero errors before reporting completion.
