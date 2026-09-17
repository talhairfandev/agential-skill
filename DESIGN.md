---
name: "Agential Swiss Editorial Design System"
version: "1.0.0"
author: "Talha Irfan (@codedits)"
license: "MIT"
tokens:
  color:
    background:
      obsidian: "#0a0a0c"
      slate: "#0b0f17"
      pure-black: "#000000"
      studio-white: "#ffffff"
      warm-editorial: "#faf9f5"
    surface:
      obsidian-card: "#121318"
      slate-card: "#111827"
      white-card: "#f8fafc"
      warm-card: "#f3f1ea"
    text:
      dark-primary: "#f8fafc"
      dark-secondary: "#a1a1aa"
      dark-muted: "#71717a"
      light-primary: "#0f172a"
      light-secondary: "#475569"
      light-muted: "#94a3b8"
    border:
      dark-default: "rgba(255, 255, 255, 0.08)"
      dark-hover: "rgba(255, 255, 255, 0.20)"
      light-default: "rgba(0, 0, 0, 0.08)"
      light-hover: "rgba(0, 0, 0, 0.18)"
    accent:
      blue: "#3b82f6"
      emerald: "#10b981"
      indigo: "#6366f1"
  typography:
    font-family:
      display: "Space Grotesk, sans-serif"
      body: "Plus Jakarta Sans, sans-serif"
      editorial: "Manrope, sans-serif"
      mono: "Geist Mono, ui-monospace, monospace"
    tracking:
      display-tight: "-0.03em"
      eyebrow-wide: "0.25em"
  radius:
    button: "0px"
    card: "0px"
    tag: "0px"
    container: "0px"
    pill: "prohibited"
  layout:
    container-max: "1280px"
    section-desktop-min: "100vh"
    section-desktop-reveal: "140vh"
    section-padding-y: "6rem"
---

# Design System Specification — Swiss Architectural Editorial & Brutalist Luxury
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

This document defines the formal visual design contract for this repository. Inspired by luxury print magazines (Vogue, 032c, Kinfolk) and architectural blueprints, this specification rejects standard SaaS patterns in favor of monumentality, hairline precision, and curatorial typography.

---

## 1. Principles

1. **Zero Radius & Hairline Wireframing:** `border-radius: 0` across all buttons, images, tags, and containers. No rounded pills or soft cards. All sections and rows are defined by razor-sharp 1px hairline gridlines (`border-neutral-200` or `border-white/12`).
2. **10:1 Typographic Tension:** Extreme scale divergence. Colossal display titles (80px–140px, `tracking-[-0.04em]`, `leading-[0.9]`) set directly against microscopic technical labels (9px–11px, `tracking-[0.15em]`, uppercase/mono).
3. **The Ledger System (No Card UI):** Capabilities, services, and features must be formatted as dense horizontal ledger rows (`[ 01 ] | Title | Specification | →`) rather than generic floating card boxes with drop shadows.
4. **Archival Artifacts:** Embed editorial indicators into the layout: trademark marks (`®`, `™`, `©`), bracketed index numerals (`[ 01 ]`), spec tags (`[STATUS: ACTIVE]`, `● AVAILABLE`), and coordinate stamps.
5. **Monolithic Contrast:** Pure `#FFFFFF` sections crashing directly into pitch-black `#000000` / `#080808` sections along dead-straight horizontal dividing lines.
6. **Strict Color Law for Copy:** Subtitles and body text MUST NEVER be blue, cyan, green, or purple. Subtitles are strictly neutral zinc (`text-zinc-400` on dark, `text-zinc-600` on light).
7. **Photographic Discipline:** Strict locked aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/9]`), `object-cover`, with high-contrast chiaroscuro or desaturated cinematic lighting. Never use cartoonish stock illustrations.

---

## 2. Token Application Matrix

### 2.1 Surfaces & Borders
- **Main Canvas:** `bg-[#0a0a0c]` (Obsidian) or `bg-[#0b0f17]` (Slate).
- **Cards & Modals:** `bg-[#121318]` with 1px border `border-white/10 hover:border-white/20`.
- **Buttons:** 
  - Primary: `bg-white text-black hover:bg-zinc-200 rounded-md` (6px).
  - Secondary: `bg-transparent text-white border border-white/15 hover:bg-white/5 rounded-md` (6px).

### 2.2 Typography Hierarchy
- **Eyebrow:** `[ SECTION NAME ]` — `font-mono text-xs font-bold tracking-[0.25em] uppercase text-zinc-400`.
- **H1 / H2 Titles:** Space Grotesk, negative tracking `tracking-tight` (`-0.03em`), high contrast `text-white`.
- **Body:** Plus Jakarta Sans, relaxed line-height `leading-relaxed`, neutral contrast `text-zinc-300`.

### 2.3 Motion
- Slide-up text reveal on scroll: `opacity: 0, y: 24` → `1, 0`.
- Duration: `0.5s` to `0.6s`, easing cubic bezier `[0.16, 1, 0.3, 1]`.
- Always respect `prefers-reduced-motion`.

---

## 3. Reference Standards
- Accessibility: [references/accessibility-standards.md](./references/accessibility-standards.md)
- Form & Feedback UX: [references/form-and-feedback-ux.md](./references/form-and-feedback-ux.md)
- Section Archetypes: [references/premium-section-benchmarks.md](./references/premium-section-benchmarks.md)
- Motion & Components: [references/framer-design-system.md](./references/framer-design-system.md)
