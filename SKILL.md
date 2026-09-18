---
name: agential-skill
description: >-
  Use this skill when the user asks to build, design, code, refactor, debug, review, style, or optimize any website, web application, frontend UI, component, layout, or page. Enforces persistent memory (context.md), structured onboarding questions for new UI, a strict design system (solid colors, clean typography, minimal radius, viewport-scale section architecture, motion), incremental delivery, and mandatory post-edit review.
---

# Agential Skill — Specification
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

A model-agnostic skill that enforces a disciplined five-step workflow for frontend and UI development. Produces clean, consistent, well-reviewed code with a strict visual standard.

---

## FRAMER-LEVEL BASELINE (UNIVERSAL LAW — APPLIES TO EVERY FRONTEND REQUEST)

Treat **every** frontend build as a Framer-level website by default: confident oversized type, massive whitespace, smooth scroll-driven motion, high-fidelity media, low copy, refined interactions, and a cohesive token system. **Ordinary, cluttered, or template-grade UI is never acceptable output.** One clear focal point per section, deliberate hierarchy, generous negative space — curation over accumulation.

Data-dense application UIs (dashboards, admin, tables) follow the **Refined App Standard** (same tokens, palette discipline, accessibility, and no-clutter law, with restrained scale and subtle motion). This baseline governs all other references.

**Full ruleset (mandatory read for any frontend work): [`references/framer-baseline-rules.md`](./references/framer-baseline-rules.md).**

---

## MANDATORY PRE-FLIGHT TOOL EXECUTION (DO NOT SKIP)
Before generating code or UI components, you MUST execute `view_file` on the corresponding reference file:
- **ANY frontend build (always):** Read `references/framer-baseline-rules.md`
- **Portfolios / Personal Sites / Case Studies / Selected Works:** Read `references/framer-portfolio-blueprints.md`
- **Animations / Framer Motion:** Read `references/framer-design-system.md`
- **Sections / Bento / Layout Architecture:** Read `references/premium-section-benchmarks.md`
- **Forms / Loading Skeletons / State UX:** Read `references/form-and-feedback-ux.md`
- **Accessibility & Contrast Checklist:** Read `references/accessibility-standards.md`
DO NOT assume generic training defaults. Inspect these reference blueprints before coding.

---

## Task Routing

| User Intent | Action | Skip Onboarding? | Mandatory Pre-Flight File |
|:---|:---|:---|:---|
| ANY frontend build | Apply the Framer-Level Baseline; never ship ordinary/cluttered UI | — | [framer-baseline-rules.md](./references/framer-baseline-rules.md) |
| New UI without design specs | Ask the 4 onboarding questions | No | [questioning-framework.md](./references/questioning-framework.md) |
| Portfolio / personal site / case study | Ask the portfolio onboarding set, pick a design mode, then build | No (unless specs given) | [framer-portfolio-blueprints.md](./references/framer-portfolio-blueprints.md) |
| Frontend with specs or edits | Build directly | Yes | [framer-design-system.md](./references/framer-design-system.md) · [DESIGN.md](./DESIGN.md) |
| Section layouts / sticky stages | Apply viewport scaling rules | Yes | [premium-section-benchmarks.md](./references/premium-section-benchmarks.md) |
| Forms, loading, & empty states | Apply state UX patterns | Yes | [form-and-feedback-ux.md](./references/form-and-feedback-ux.md) |
| Accessibility audit & remediation | Apply WCAG 2.1 AA checklist | Yes | [accessibility-standards.md](./references/accessibility-standards.md) |
| Bug fix / refactor / small tweak | Edit target file, run review | Yes | [post-edit-review-checklist.md](./references/post-edit-review-checklist.md) |

---

## Fast Reference (For AI Assistants)

| Pillar | Mandatory Action | Key Tokens & Rules |
|:---|:---|:---|
| **1. Memory** | Read `context.md` at start; update after milestones. | Persists across session truncations and model switches. |
| **2. Onboarding** | Ask 4 questions before building new UI without specs. | 1. Theme, 2. Hero CTA, 3. Density, 4. Pacing. (Skip on edits). |
| **3. Design System** | Enforce Swiss Architectural Editorial & Brutalist Luxury. | **Zero Radius:** `border-radius: 0` (`rounded-none`) across all elements, buttons, and media. Absolutely NO rounded cards or pill buttons.<br>**Low Text, High Fidelity:** Cut 70% of copy. Headings 3–6 words, subtitles 1 sentence (under 15 words). NO text walls or paragraph clutter. Curation over clutter.<br>**10:1 Typographic Tension:** Colossal titles (80px–140px, `tracking-[-0.04em]`, `leading-[0.9]`) paired with microscopic metadata (10px–11px, `tracking-[0.15em]`, mono/uppercase).<br>**Surgical Artifacts:** Add at most 1–2 subtle marks (`®`, `™`, `[ 01 ]`). Never clutter the screen with fake telemetry tags.<br>**Hairline Wireframes:** Crisp 1px borders (`border-neutral-200` or `border-white/12`). Forbid drop shadows and blurred glass.<br>**The Ledger System:** Replace floating 3-column card grids with horizontal archival ledger rows.<br>**Monolithic Contrast:** Pure `#FFFFFF` sections crash directly into pitch-black `#000000` / `#080808` sections.<br>**Strict Color Law:** Subtitles and paragraphs MUST NEVER be blue/cyan/purple. Subtitles are strictly neutral (`text-zinc-400` / `text-zinc-600`).<br>**Media:** Rigid aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`), `object-cover`, chiaroscuro/desaturated lighting. |
| **4. Delivery** | Build in complete, cohesive chunks. | Start with Navbar + Hero stage. Pause for user review. |
| **5. Review** | Mandatory diff check before reporting done. | Verify syntax, closed tags, imports, accessibility, and zero deletions. |

---

## Pillar 1 — Memory

Chat sessions get lost, truncated, or restarted. The `context.md` file in the project root preserves state across sessions and across model switches.

1. **Session start:** Check if `context.md` exists. If it does, read it before doing anything else.
2. **Persist decisions:** After the user answers onboarding questions or a feature milestone is completed, update `context.md` with the project vision, design tokens, completed chunks, and next milestones.

*Reference: [context-protocol.md](./references/context-protocol.md)*

---

## Pillar 2 — Onboarding

Before building any new frontend page or component from an underspecified prompt, ask 3–4 structured, plain-English questions:

1. **Visual Theme** — Pitch-black brutalist luxury (`#000000` / `#080808`, recommended for tech/aerospace/fashion), warm editorial portfolio (`#faf9f5` with hairline grids), or high-contrast monolithic two-tone.
2. **Hero Message & Primary Action** — The main colossal headline and the primary action trigger.
3. **Information Density** — Curatorial catalog index (recommended) or dense architectural matrix.
4. **Pacing** — Confirm starting with navbar + hero stage, then iterating.

**Skip this step** when:
- The user already specified theme, colors, or component requirements.
- The task is an edit, modification, or bug fix on existing code.

**For portfolios / personal sites / case studies:** use the specialized 4-question portfolio set (portfolio type → design mode → work layout → sections) in [questioning-framework.md](./references/questioning-framework.md), and read [framer-portfolio-blueprints.md](./references/framer-portfolio-blueprints.md) first.

*Reference: [questioning-framework.md](./references/questioning-framework.md)*

---

## Pillar 3 — Design System (Swiss Architectural Editorial & Brutalist Luxury)

### 3.1 Theme Defaults & Monolithic Contrast

- **Rejection of SaaS Patterns:** Reject generic software UI patterns: no floating rounded cards, no soft drop shadows, no colorful gradient buttons, no pastel blobs. Treat the browser as a printed architectural blueprint and high-fashion luxury catalog (inspired by Vogue, 032c, Kinfolk, Kanso, Akihiko).
- **Monolithic Inversion:** Rely on stark, dramatic contrast. Clean white expanses crash directly into pitch-black monolith sections (`#000000` or `#080808`) separated by a razor-sharp dead-straight horizontal line.
- **Hairline Architectural Gridlines:** Use visible structural 1px dividers (`border-neutral-200` on light, `border-white/12` on dark) mapping every axis.
- **Strict Color Law for Copy:** Subtitles and paragraphs MUST NEVER be colored blue, cyan, green, or purple. Subtitles must strictly be neutral (`text-zinc-400` on dark, `text-zinc-600` on light). Accent colors (e.g. warm vermilion, cobalt) are strictly reserved for micro-status indicators.

### 3.2 Low Text, High Fidelity (The Anti-Clutter Law)

- **Cut 70% of Copy:** Never generate text-heavy websites or walls of paragraphs. Keep copy razor-sharp.
- **Headings:** 3–6 words maximum. Punchy, monumental, authoritative (e.g. `VELOCITY IN HARMONY®`, `SUPERSONIC FLIGHT`).
- **Subtitles:** 1 single sentence maximum (under 15 words). Strictly forbid multiple descriptive paragraphs in hero and marketing sections.
- **Zero Telemetry Clutter:** Do NOT spam the layout with endless status tags, timestamps, coordinates, or fake telemetry chips. Treat the website like a high-fashion editorial book or luxury brand flagship (Kinfolk, Leica, Céline), NOT an airplane cockpit or terminal log.
- **Visual & Media Dominance:** High visual fidelity wins. Let colossal scale, generous negative space (padding `py-28` to `py-36`), razor-sharp 1px hairlines, and high-contrast cinematic imagery command attention.

### 3.3 Typographic Tension (The 10:1 Scale Polarity)

- **The Colossal Heading:** Set primary headings between 80px and 140px (`text-6xl` to `text-9xl`), ultra-tight negative letter-spacing (`tracking-[-0.04em]` to `tracking-[-0.06em]`), compressed line-height (`leading-[0.9]` to `leading-[0.95]`). Fonts: Space Grotesk, PP Neue Montreal, Syne, or Helvetica Neue.
- **The Microscopic Precision:** Utility labels, metadata, dates, and categories set between 9px and 11px (`text-[10px]` to `text-xs`), uppercase, monospace or sans, wide letter-spacing (`tracking-[0.15em]` to `tracking-[0.25em]`).
- **Surgical Editorial Artifacts:**
  - Trademark & registry markers: `®`, `™`, `©` attached to primary headings and brand marks.
  - Bracketed index numerals: `[ 01 ]`, `[ 02 ]`, `[ VOL. IV ]`.
  - Max 1 or 2 surgical tags per section. Never overwhelm the canvas.

### 3.4 Zero Radius (The Anti-Card Law)

- **Strict Zero Radius:** `border-radius: 0` (`rounded-none`) across all elements, buttons, input fields, tags, and image containers.
- **Prohibited:** Rounded pill shapes (`rounded-full`), soft bubble cards (`rounded-2xl`), floating drop shadows (`shadow-xl`), and blurred glassmorphism.

### 3.5 Navbar & Hero Stage

**Navbar:**
- Full-bleed 1px hairline bottom border (`border-b border-white/12` or `border-neutral-200`).
- No pill buttons. Use sharp rectangular buttons (`rounded-none px-5 py-2.5 text-xs font-mono tracking-widest uppercase`).
- Minimal text navigation in small caps/uppercase with micro-index tags.

**Hero Stage:**
- Full-bleed edge-to-edge: `w-full min-h-[100dvh]` with generous vertical padding (`py-24` to `py-36`).
- Colossal headline paired with microscopic archival tags (`[ 01 ]`, `EST. 2026`, `®`).
- Media centerpiece must use locked aspect ratios (`aspect-[16/9]`, `aspect-[4/5]`, `aspect-[3/4]`), `object-cover`, `rounded-none`, and hairline 1px border.

### 3.6 The Ledger System (Replacing the "Card UI")

Ordinary websites use floating cards. High-end editorial sites format capabilities and services as **horizontal ledger rows** (like an archival auction catalog or technical invoice):

```tsx
// Compliant Horizontal Ledger Row
<div className="w-full border-t border-neutral-200 dark:border-white/12 py-6 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors rounded-none">
  <div className="flex items-center gap-6">
    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">[ 01 ]</span>
    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black dark:text-white">
      Supersonic Shockwave Dispersion™
    </h3>
  </div>
  <div className="flex items-center gap-8">
    <span className="text-xs font-mono tracking-wider text-zinc-400">MACH 2.2 COHESION</span>
    <span className="text-sm font-mono text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
  </div>
</div>
```

### 3.7 Media & Photographic Art Direction

- **Rigid Aspect Ratios:** All visual media must enforce locked ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`).
- **Styling:** `rounded-none`, `object-cover`, with subtle 1px hairline framing.
- **Lighting & Tone:** Chiaroscuro lighting, architectural concrete, high contrast, subtle film grain, or muted desaturated tones. Strictly no stock cartoon illustrations or floating 3D icons.

### 3.8 Asymmetric 12-Column Architectural Grids

Structure pages using 12-column architectural splits rather than symmetric 3-box rows:
- Example: 5-column editorial sticky index on the left, 7-column media catalogue on the right.
- Separated by crisp vertical and horizontal hairline borders (`border-r`, `border-l`, `border-t`, `border-b`).

### 3.9 Interactivity & State UX

All interactive controls must feature working client-side state:
- Zero-radius buttons (`rounded-none px-6 py-3 font-mono text-xs uppercase tracking-widest bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black`).
- Tab switchers, drawer toggles, and modal dossiers with instant responsive state.
- WCAG 2.1 AA conformance: visible square focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`), 4.5:1 text contrast minimum, `motion-reduce` support.

### 3.10 Motion (Framer Motion Inlined Blueprints)

Use Framer Motion (`framer-motion` or `motion/react`) in React/Next.js. In vanilla stacks, use CSS with `cubic-bezier(0.16, 1, 0.3, 1)`. Motion is structural, cinematic, and linear—NEVER bouncy, springy, or playful.

**1. Architectural Text Reveal (Headings & Display):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
>
  <h1 className="text-7xl md:text-9xl font-light tracking-[-0.05em] leading-[0.9] text-white">
    SUPERSONIC<span className="text-xs align-super font-mono text-zinc-500">®</span>
  </h1>
</motion.div>
```

**2. Staggered Ledger Rows:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
  {items.map((item, idx) => (
    <motion.div key={idx} variants={rowVariants} className="w-full border-b border-white/10 py-5 flex items-center justify-between group hover:bg-white/[0.02] rounded-none">
      <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em]">[ 0{idx + 1} ]</span>
      <h4 className="text-xl text-white font-normal">{item.title}</h4>
      <span className="font-mono text-xs text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
    </motion.div>
  ))}
</motion.div>
```

**3. Rolling Text Link (`RollText`):**
```tsx
function RollText({ text }: { text: string }) {
  return (
    <span className="relative inline-block overflow-hidden h-[1.2em] font-mono text-xs uppercase tracking-widest group">
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">{text}</span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full text-zinc-400">{text}</span>
    </span>
  );
}
```

### 3.11 Tailwind CSS & Design Tokens

Primary styling engine. Strictly enforce zero-radius and architectural hairlines:

**v4 (CSS-first):**
```css
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --font-mono: "Space Mono", monospace;
  --color-monolith: #080808;
  --color-paper: #ffffff;
  --radius: 0px;
}
```

**v3 (config-first):** Map fonts, colors, and zero radius under `theme.extend` in `tailwind.config.ts`.

**Canonical utility patterns:**
- Full-bleed hero: `w-full min-h-[100dvh] relative bg-[#080808] pt-32 pb-24 border-b border-white/10`
- Architectural container: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Button: `rounded-none bg-white text-black px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors`
- Ledger row: `w-full border-t border-white/12 py-6 px-4 flex items-center justify-between group hover:bg-white/[0.02] rounded-none`
- Archival spec tag: `text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400`

### 3.12 Advanced Interactions

- **Rolling links (`RollText`):** Dual-text stack with vertical roll on hover. Duration `300ms`, easing `cubic-bezier(0.65, 0, 0.35, 1)`.
- **Sticky card stacking:** Dynamic offset `top: ${70 + index * 32}px`. Preceding cards scale to `0.94` and dim to `brightness(0.55)`. Disabled on mobile (`<768px`).
- **Fluid button fills:** Dual-wave SVG fill rising from bottom on hover.
- **Magnetic cursor:** Desktop only. Disabled below `768px` and when `prefers-reduced-motion` is active.

### 3.13 Accessibility & Semantics (WCAG 2.1 AA)

- **Contrast compliance:** Maintain 4.5:1 minimum for body text, 3:1 for large display titles and borders. Secondary metadata must use `text-zinc-400` minimum on obsidian dark surfaces—never faint zinc (`text-zinc-600`).
- **Focus visibility:** Every clickable control must have an explicit focus indicator: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`.
- **Keyboard navigation:** Full tab sequence support, skip-to-content links, trapped focus inside open dialogs/modals.
- **Screen reader labels:** All icon-only buttons require explicit `aria-label` tags. Collapsibles require `aria-expanded`.
- **Motion reduction:** Wrap Framer Motion animations with `useReducedMotion()` and use Tailwind `motion-reduce:transition-none`.

### 3.14 Form & State UX

- **Explicit labels:** Pair all inputs with `<label>`. Do not use placeholder attributes as labels.
- **Validation feedback:** Inline errors with `role="alert"`, `aria-invalid={true}`, and `aria-describedby`.
- **Loading states:** Use geometric skeleton pulse loaders that match layout geometry rather than generic circular spinners.
- **Empty states:** Provide informative placeholders with bracketed tags (`[ NO ENTRIES ]`) and a clear primary action button.

*References: [DESIGN.md](./DESIGN.md) · [accessibility-standards.md](./references/accessibility-standards.md) · [form-and-feedback-ux.md](./references/form-and-feedback-ux.md) · [framer-design-system.md](./references/framer-design-system.md) · [premium-section-benchmarks.md](./references/premium-section-benchmarks.md) · [framer-portfolio-blueprints.md](./references/framer-portfolio-blueprints.md)*

---

## Pillar 4 — Incremental Delivery

1. **Deliver in cohesive chunks.** A chunk is a complete milestone: navbar + hero stage, or a full features section with bento grid. Never stop after trivial fragments.
2. **Handle full-page requests.** If the user asks for a complete page, build the full architecture cleanly — do not stop prematurely.
3. **Review after each chunk.** Run the post-edit review, verify, then pause.
4. **Check in with the user.** Let them inspect the result before continuing to the next section.

---

## Pillar 5 — Post-Edit Review

After creating or modifying any file, run this check before reporting completion:

1. **Imports & syntax:** All used functions, styles, and packages imported. All tags, brackets, and quotes closed.
2. **Caller integrity:** Modifying a component's props didn't break existing callers.
3. **Accessibility verification:** Focus rings present, contrast ratio met, icon buttons have `aria-label`, motion-reduction respected.
4. **No deletions:** The edit didn't accidentally remove existing features, styles, or utilities.
5. **Verification:** Run available tests, linters, or check terminal output. Zero errors.

*Reference: [post-edit-review-checklist.md](./references/post-edit-review-checklist.md)*

---

## Standard Execution Sequence

1. Check `context.md` — load existing project state.
2. Ask onboarding questions — if starting new UI without specs.
3. Persist to `context.md` — record decisions.
4. Build — apply design system rules, deliver as a cohesive chunk.
5. Post-edit review — verify zero breakage.
6. Report and pause — present summary, check in before next chunk.
