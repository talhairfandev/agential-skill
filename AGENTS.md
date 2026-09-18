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
  - **Editorial Artifacts (Surgical, Not Cluttered):** Subtle marks (`®`, `™`, `©`) and index numerals (`[ 01 ]`). Use at most ONE or TWO per section. NEVER clutter the layout with fake coordinates or endless tags.
  - **STRICT COLOR LAW:** Paragraphs and subtitles MUST NEVER be colored blue, cyan, or purple. Subtitles must strictly be neutral (`text-zinc-400` on dark, `text-zinc-600` on light). Accent colors are reserved strictly for tiny micro-indicators and telemetry dots.
- **3. Low Text, High Fidelity (Anti-Clutter Law):**
  - **Cut 70% of Copy:** Never generate text-heavy websites or walls of paragraphs. Keep copy razor-sharp.
  - **Headings:** 3–6 words maximum. Punchy, monumental, authoritative.
  - **Subtitles:** 1 single sentence maximum (under 15 words). No dense paragraphs in landing or marketing sections.
  - **Zero Telemetry Clutter:** Do NOT spam the page with endless status tags, timestamps, or fake coordinates. Treat the page like a high-end luxury art gallery or design book (Kinfolk, Leica, Céline), NOT an airplane cockpit or terminal log.
  - **Visual & Media Dominance:** High visual fidelity wins. Let colossal scale, generous negative space (padding `py-28` to `py-36`), razor-sharp 1px hairlines, and high-contrast cinematic imagery command attention.
- **4. Stark Monolithic Contrast:**
  - Strict two-tone base: pure `#FFFFFF` crashing directly into pitch-black `#000000` / `#080808` monolith sections.
  - Dead-straight horizontal dividing lines. No wavy dividers, no pastel blobs, no rainbow gradients.
- **5. Photographic Art Direction & Media:**
  - Mandate rigid locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`).
  - Images must use `object-cover`, `rounded-none`, with high-contrast, chiaroscuro, cinematic, or desaturated lighting. No cartoonish digital illustrations or floating UI mockups in voids.
- **6. Section Architecture & Layout:**
  - Full-bleed edge-to-edge structure (`w-full`). Generous vertical pacing (`py-24` to `py-36`).
  - Asymmetric 12-column architectural grid splits (e.g., 5-col content / 7-col media) mapped with 1px hairlines.
- **7. Interactivity & State UX:**
  - Working client-side state for all interactive triggers. Zero-radius action buttons (`rounded-none px-6 py-3 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black`).
  - WCAG 2.1 AA conformance: 4.5:1 text contrast minimum, visible square focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`), `aria-label` on icon controls, and `prefers-reduced-motion` support.
- **8. Motion & Framer Motion Blueprints (Inlined Standard):**
  - **Core Philosophy:** Motion is structural, cinematic, and linear. NEVER bouncy, springy, playful, or cartoonish.
  - **Easing Curve:** Strictly `[0.16, 1, 0.3, 1]` or `[0.25, 1, 0.5, 1]`.
  - **A. Text & Headline Reveal:**
    ```tsx
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1 className="text-7xl md:text-9xl font-light tracking-[-0.05em] leading-[0.9] text-white">ARCHITECTURAL</h1>
    </motion.div>
    ```
  - **B. Staggered Ledger Container & Rows:**
    ```tsx
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
    };
    const rowVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
      {items.map((item, idx) => (
        <motion.div key={idx} variants={rowVariants} className="w-full border-b border-white/10 py-5 flex items-center justify-between group hover:bg-white/[0.02] rounded-none">
          <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em]">[ 0{idx + 1} ]</span>
          <h4 className="text-xl text-white font-normal">{item.title}</h4>
          <span className="font-mono text-xs text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
        </motion.div>
      ))}
    </motion.div>
    ```
  - **C. Rolling Text Link (Hover Telemetry):**
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
  - **D. Accessibility / Reduced Motion:** Always respect `useReducedMotion()`. When active, disable transform translates and use simple opacity fades.

---

## MANDATORY PRE-FLIGHT TOOL EXECUTION
Before generating code or components, you MUST execute `view_file` on the matching reference file if your task touches any of these domains:
0. **ANY frontend build (always):** Read `references/framer-baseline-rules.md` — treat every build as a Framer-level website (confident type, whitespace, smooth motion, high-fidelity media, low copy, refined interactions). Never ship ordinary or cluttered UI. Data-dense app UIs use the Refined App Standard within the same no-clutter law.
1. **Portfolios, Personal Sites, Case Studies, or Selected Works:** Read `references/framer-portfolio-blueprints.md`
2. **Animations, Transitions, or Micro-interactions:** Read `references/framer-design-system.md`
3. **Page Architecture, Bento Grids, or Sticky Layouts:** Read `references/premium-section-benchmarks.md`
4. **Forms, Inputs, Loading Skeletons, or Dialogs:** Read `references/form-and-feedback-ux.md`
5. **Contrast, Focus Rings, or Screen Reader Semantics:** Read `references/accessibility-standards.md`
DO NOT bypass this requirement or rely on generic training data defaults. Verify the exact code patterns first.

## 4. Incremental Delivery

- Deliver in complete, cohesive chunks (e.g. navbar + hero first).
- Do not halt prematurely on trivial fragments, but check in with the user before tackling subsequent sections.

## 5. Post-Edit Review

- After modifying any file, inspect the diff to verify imports, syntax, closing tags, caller integrity, and accessibility (focus rings, contrast ratios, aria tags) before reporting done.
