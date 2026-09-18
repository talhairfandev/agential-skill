# Framer-Level Baseline Rules (Universal Frontend Law)
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

**This is the default standard for EVERY frontend request** — landing pages, marketing sites, portfolios, product pages, and application UIs alike. Unless the user explicitly opts out, treat every build as a Framer-level website. Ordinary, cluttered, template-grade UI is never acceptable output.

Read this file before building any frontend. It sits above the specific references and governs all of them.

---

## The Prime Directive: No Ordinary, No Clutter

Every screen must look intentionally designed, not assembled from defaults. Before shipping any UI, it must pass all of these:

- **No clutter.** No dense stacks of tiny boxes, no redundant labels, no decorative noise, no filler text. Every element earns its place.
- **No generic template look.** No stock Bootstrap/SaaS-starter card rows, no default form styling, no unstyled browser components.
- **No visual chaos.** One clear focal point per section. Deliberate hierarchy. Generous negative space.
- **No lazy copy.** Short, confident, human. No lorem ipsum, no "Lorem-grade" filler, no buzzword walls.

If a layout feels busy, remove elements until one thing dominates. Curation over accumulation, always.

---

## The 8 Framer Rules (Apply to All Sites)

### 1. Confident, oversized typography
- Display headings are large and self-assured: `text-5xl` → `text-8xl` on marketing/portfolio, scaled down but still bold on app UIs.
- Tight tracking on big type (`tracking-[-0.02em]` to `tracking-[-0.04em]`), controlled line-height (`leading-[0.95]`–`leading-[1.05]`).
- Clear type scale: display → heading → body → label. No more than 3–4 distinct sizes per view.

### 2. Massive whitespace & vertical rhythm
- Sections breathe: `py-20` to `py-36` on desktop for marketing; generous but tighter on apps (`py-8`–`py-12`).
- Consistent spacing scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px). Never arbitrary one-off margins.
- Content sits in a deliberate container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`), sections span full-bleed.

### 3. Smooth, scroll-driven motion (never bouncy)
- Reveal-on-scroll for sections, staggered entrances for lists, subtle parallax on hero media.
- Easing: `[0.22, 1, 0.36, 1]` (soft) or `[0.16, 1, 0.3, 1]` (linear/structural). Durations `0.5s`–`0.8s`.
- Never springy, playful, or cartoonish. Always respect `useReducedMotion()`.

### 4. High-fidelity media
- Large, high-quality imagery/video. Locked aspect ratios (`aspect-[16/9]`, `aspect-[4/5]`, `aspect-[3/4]`), `object-cover`.
- No cartoon illustrations in a void, no floating 3D blobs, no low-res stock. Cinematic, editorial, or product-real.

### 5. Low copy, high impact
- Headlines 3–6 words. Subtitles one sentence (under ~15 words). Body copy trimmed to essentials.
- Cut ~70% of the copy an average generator would produce.

### 6. Refined micro-interactions
- Hover reveals, rolling text links, magnetic/custom cursor (desktop only), button state feedback.
- Every interactive control has real working state — never mock/non-functional UI.

### 7. Deliberate section architecture
- Each section is one complete idea with a signature component, not a bullet list.
- Use sticky/pinned moments and, where fitting, horizontal-scroll sequences. Desktop reveal stages `100–140vh`; static content uses natural height + padding.

### 8. Cohesive token system & accessibility
- One design mode (see below), one palette, one type system, one radius policy applied consistently.
- WCAG 2.1 AA throughout: 4.5:1 text contrast, visible focus rings, `aria-label` on icon controls, keyboard nav, reduced-motion.

---

## Two Framer Modes (Pick One Per Project)

When style isn't specified, ask which mode (keep it to one plain question), record it in `context.md`, then apply it consistently. Full details in [`framer-portfolio-blueprints.md`](./framer-portfolio-blueprints.md) §0.

| | **Mode A — Brutalist Editorial** | **Mode B — Soft Premium** |
|:---|:---|:---|
| Radius | `rounded-none` everywhere | Media `rounded-2xl`/`rounded-3xl`, buttons `rounded-full` allowed |
| Palette | `#FFFFFF` ↔ `#080808` monolithic | Warm cream `#f5f3ee`/`#faf9f5`, ink `#1a1a1a` |
| Type | Space Grotesk + mono labels | Grotesk/serif display + clean sans |
| Dividers | 1px hairlines | Whitespace / soft dividers |
| Motion | `[0.16, 1, 0.3, 1]` | `[0.22, 1, 0.36, 1]` |

Never mix radii or palettes across modes within one site.

---

## The Dense-UI Exception (Dashboards, Admin, Data Tables)

Framer's giant type + parallax does not suit data-dense application UIs. For dashboards, admin panels, settings, and table-heavy tools, apply the **Refined App Standard** instead — still premium, still uncluttered, never ordinary:

- **Type:** Restrained scale (`text-sm`–`text-2xl`). Clarity over spectacle. Same type system, smaller steps.
- **Spacing:** Tighter but rhythmic (`py-6`–`py-12`, `gap-4`–`gap-6`). No cramped rows; generous row height and padding.
- **Motion:** Subtle only — fades, small slide-ins, no parallax or scroll spectacle. Instant, responsive state.
- **Layout:** Clear grid, aligned columns, consistent card/panel treatment. One accent color, plenty of neutral space.
- **Anti-clutter still applies:** No tiny cramped widgets, no redundant chrome, no visual noise. Group, align, and give data room to breathe.
- **Data viz:** Clean, minimal axes, one or two accent colors, no rainbow palettes, no chart-junk.

The Refined App Standard shares the same tokens, palette discipline, accessibility, and no-clutter law as the Framer modes — it simply dials down scale and motion for usability.

---

## Pre-Ship Checklist (Every Frontend Build)

- [ ] One clear focal point per section; nothing cluttered or noisy.
- [ ] Type is confident with a clear, limited scale (marketing) or restrained and clear (app).
- [ ] Whitespace and spacing follow a consistent scale; sections breathe.
- [ ] Motion is smooth and scroll-aware (sites) or subtle (apps); never bouncy; reduced-motion respected.
- [ ] Media is high-fidelity with locked aspect ratios; no cartoon/void art.
- [ ] Copy is short and confident; no filler/lorem.
- [ ] All interactions have real working state.
- [ ] One consistent mode/palette/radius/type system.
- [ ] WCAG 2.1 AA: contrast, focus rings, aria, keyboard nav.
- [ ] Nothing looks like a default template or an ordinary cluttered UI.

---

*Related: [framer-portfolio-blueprints.md](./framer-portfolio-blueprints.md) · [framer-design-system.md](./framer-design-system.md) · [premium-section-benchmarks.md](./premium-section-benchmarks.md) · [form-and-feedback-ux.md](./form-and-feedback-ux.md) · [accessibility-standards.md](./accessibility-standards.md)*
