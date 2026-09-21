# Motion and Component Specification — Editorial Structure

Motion supports image, type, and grid. It must never make the interface feel like a generic animated product template.

## Geometry

Use hard-edged rectangular surfaces, clear 1px rules, flat planes, and visible structure. Avoid shadows, glass, blur, gradients, pills, capsules, circles, or floating cards.

## Navigation and Hero

- Navigation is a quiet row with a 1px bottom rule, compact labels, and real keyboard behavior.
- Hero is a full-bleed image or solid plane with one oversized title, one short sentence, and sparse metadata.
- Media uses `object-cover` and a locked `3/4`, `4/5`, or `16/9` ratio.

## Editorial Index

```tsx
<div className="grid grid-cols-12 border-t border-white/20 py-5">
  <span className="col-span-2 font-mono text-[10px] tracking-[.18em] text-white/60">[ 01 ]</span>
  <h3 className="col-span-7 text-xl text-white">Title / Capability</h3>
  <span className="col-span-3 text-right font-mono text-[10px] tracking-[.18em] text-white/60">2026 / →</span>
</div>
```

## Motion

Allowed: opacity fades, masked title reveals, image crop shifts, linear row reveals, and restrained horizontal gallery movement. Use `cubic-bezier(0.16, 1, 0.3, 1)` or a similarly calm linear curve. Avoid springs, bounce, magnetic cursors, glow, blur, and perpetual decorative movement.

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
  className="text-[clamp(4rem,12vw,10rem)] leading-[.9] tracking-[-.06em]"
>
  TITLE
</motion.h1>
```

When reduced motion is requested, remove transform movement and use a brief opacity change or no animation.

## Accessibility and State

All controls have real state and semantic names. Use square focus outlines, explicit labels, keyboard-operable galleries/disclosures, WCAG AA contrast, and `aria-expanded`/`aria-controls` where relevant.
