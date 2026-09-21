---
name: "Agential Editorial Output Design System"
version: "2.1.0"
author: "Talha Irfan (@talhairfandev)"
license: "MIT"
tokens:
  color:
    background:
      ink: "#000000"
      obsidian: "#080808"
      charcoal: "#171717"
      paper: "#FFFFFF"
      cream: "#F5F2EA"
    text:
      on-dark: "#FFFFFF"
      on-dark-muted: "#B8B8B8"
      on-light: "#000000"
      on-light-muted: "#4A4A4A"
    line:
      on-dark: "rgba(255,255,255,0.22)"
      on-light: "rgba(0,0,0,0.18)"
    accent:
      vermilion: "#F0442E"
      red: "#D71920"
      orange: "#FF5A36"
  typography:
    display: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    body: "Arial, Helvetica, sans-serif"
    utility: "ui-monospace, SFMono-Regular, Menlo, monospace"
    display-size: "clamp(4rem, 12vw, 10rem)"
    display-leading: "0.9"
    display-tracking: "-0.06em"
    utility-size: "10px"
    utility-tracking: "0.18em"
  geometry:
    frame: "hard-edged rectangular"
    rule: "1px"
    shadow: "none"
  layout:
    container-max: "1280px"
    section-min: "100dvh"
    media-ratios: "3/4, 4/5, 16/9"
---

# Design System — Minimal Editorial Output

This contract is self-contained: image and type create the design; UI chrome stays quiet.

## Rules

- Use hard-edged rectangular geometry for media, controls, inputs, dialogs, tags, and loading shapes.
- Use no shadows, blur, glass, decorative gradients, floating cards, bento tiles, pills, capsules, circles, or generic feature grids.
- Build full-bleed image/title plates, split stages, visible wireframe matrices, editorial image strips, and ledger/index rows.
- Use 1px rules to expose the structure. Use black/white/charcoal/cream planes with selective red/orange imagery or type.
- Use high-fidelity images with `object-fit: cover` and locked rectangular ratios.
- Display type is huge and tight; utility type is tiny and wide. Copy is brief and neutral.

## Canonical pattern

```css
.editorial-rule { border: 1px solid rgba(0, 0, 0, 0.18); }
.editorial-rule-dark { border: 1px solid rgba(255, 255, 255, 0.22); }
.editorial-display { font-size: clamp(4rem, 12vw, 10rem); line-height: .9; letter-spacing: -.06em; }
```

```tsx
<div className="grid grid-cols-12 border-t border-black/20">
  <span className="col-span-2 border-r border-black/20 p-4 font-mono text-[10px] tracking-[.18em]">[ 01 ]</span>
  <h2 className="col-span-7 p-4 text-2xl tracking-tight">Work / Capability</h2>
  <span className="col-span-3 p-4 text-right font-mono text-[10px] tracking-[.18em]">2026 / →</span>
</div>
```

Use this same visual output for marketing sites, portfolios, product pages, and app interfaces; dense data uses tighter flat rows, not softer geometry.
