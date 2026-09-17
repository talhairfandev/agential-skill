# Agential Skill — Operational Rules
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

You must follow these five rules on every request, without exception.

---

## 1. Session Memory (`context.md`)

- Check if `context.md` exists in the project root before taking any action.
- Update `context.md` whenever visual decisions, design tokens, or feature milestones are agreed upon or completed.

## 2. Onboarding Questions

- When starting new UI without design specs, ask 3–4 plain-English questions: visual theme, hero CTA, information density, pacing.
- **Skip this step** if the user already provided design specs, or if editing an existing page or component. Build immediately.

## 3. Design System — Swiss Architectural Editorial & Brutalist Luxury

Reject generic software/SaaS patterns (no rounded cards, no drop shadows, no generic icon boxes). Treat the browser like an architectural blueprint and high-fashion editorial catalog (Vogue, 032c, Kinfolk):

- **1. Zero Radius & Hairline Wireframing (The Anti-Card Law):**
  - **Strict Zero Radius:** `border-radius: 0` (`rounded-none`) across ALL containers, buttons, tags, and images. Absolutely NO rounded pill buttons (`rounded-full`) or bubble cards.
  - **Hairline Gridlines:** Divide all sections, rows, and columns with crisp 1px borders (`border-neutral-200` on light, `border-white/12` on dark). No soft drop shadows or blurred glassmorphism.
  - **Ledger / Index Rows:** Replace 3-column floating card grids with horizontal archival ledger rows:
    `[ 01 ]  |  Headline / Capability  |  Technical Spec / Metadata  |  →`
- **2. Extreme Scale Polarity (The 10:1 Typographic Tension):**
  - **The Colossal Display:** Headings set at 80px–140px (`text-6xl` to `text-9xl`), ultra-tight negative tracking (`tracking-[-0.04em]` to `tracking-[-0.06em]`), compressed line-height (`leading-[0.9]` to `leading-[0.95]`). Fonts: Space Grotesk, PP Neue Montreal, Syne, or Helvetica Neue.
  - **The Microscopic Precision:** Utility labels, specs, and dates set at 9px–11px (`text-[10px]` to `text-xs`), uppercase, monospace or sans, wide letter-spacing (`tracking-[0.15em]` to `tracking-[0.25em]`).
  - **Editorial Artifacts:** Integrate subtle registry marks (`®`, `™`, `©`), spec tags (`[STATUS: ACTIVE]`, `● AIRFRAME / 2026`, `COORDINATES: 52.5200° N`), and bracketed index numerals (`[ 01 ]`, `[ VOL. IV ]`).
  - **STRICT COLOR LAW:** Paragraphs and subtitles MUST NEVER be colored blue, cyan, or purple. Subtitles must strictly be neutral (`text-zinc-400` on dark, `text-zinc-600` on light). Accent colors are reserved strictly for tiny micro-indicators and telemetry dots.
- **3. Stark Monolithic Contrast:**
  - Strict two-tone base: pure `#FFFFFF` crashing directly into pitch-black `#000000` / `#080808` monolith sections.
  - Dead-straight horizontal dividing lines. No wavy dividers, no pastel blobs, no rainbow gradients.
- **4. Photographic Art Direction & Media:**
  - Mandate rigid locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`).
  - Images must use `object-cover`, `rounded-none`, with high-contrast, chiaroscuro, cinematic, or desaturated lighting. No cartoonish digital illustrations or floating UI mockups in voids.
- **5. Section Architecture & Layout:**
  - Full-bleed edge-to-edge structure (`w-full`). Generous vertical pacing (`py-24` to `py-36`).
  - Asymmetric 12-column architectural grid splits (e.g., 5-col content / 7-col media) mapped with 1px hairlines.
- **6. Interactivity & State UX:**
  - Working client-side state for all interactive triggers. Zero-radius action buttons (`rounded-none px-6 py-3 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black`).
  - WCAG 2.1 AA conformance: 4.5:1 text contrast minimum, visible square focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`), `aria-label` on icon controls, and `prefers-reduced-motion` support.
- **7. Motion:**
  - Use Framer Motion (`framer-motion` / `motion/react`). Clean linear reveals (`opacity: 0, y: 16` → `1, 0`), staggered ledger entry (`staggerChildren: 0.06`). Never bouncy, playful, or cartoonish.

## 4. Incremental Delivery

- Deliver in complete, cohesive chunks (e.g. navbar + hero first).
- Do not halt prematurely on trivial fragments, but check in with the user before tackling subsequent sections.

## 5. Post-Edit Review

- After modifying any file, inspect the diff to verify imports, syntax, closing tags, caller integrity, and accessibility (focus rings, contrast ratios, aria tags) before reporting done.
