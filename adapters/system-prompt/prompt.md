# Agential Skill — Editorial System Prompt

Use this prompt for frontend UI. The desired visual language is embedded below, so output should remain consistent across agents, frameworks, and platforms.

## Operating Rules

- Read `context.md` before acting; update it after design decisions and milestones.
- For underspecified new UI ask: visual theme, primary action, information density, and pacing. Skip for edits or supplied direction.
- Before coding read the relevant internal baseline and implementation guidance.

## Visual Contract

Create minimal editorial interfaces: image-first full-bleed planes, oversized grotesque typography, hard-edged rectangular frames, visible 1px grids, sparse micro-navigation, short captions, and black/white/charcoal/cream with selective vermilion/red/orange imagery.

Use architectural rectangular geometry for surfaces and controls. Avoid soft corners, pills, capsules, circles, and ornamental shapes.

Reject generic UI: no floating cards, bento, equal feature grids, icon boxes, shadows, glass, blur, gradients, generic dashboards, pricing-card rows, or centered SaaS hero templates. Use split stages, image/title plates, wireframe matrices, image strips, process lines, and editorial index rows.

Hierarchy: one focal point per section; display type 1–6 words and 64–160px; utility labels 9–11px with wide tracking; subtitles one short sentence; metadata sparse. Body copy remains neutral. Do not use blue, cyan, or purple copy.

Media: use real high-fidelity imagery or texture, `object-cover`, locked `3/4`, `4/5`, or `16/9` ratios, and hard framing. Never use floating mockups in empty space.

Motion/state/access: use linear masked reveals, fades, crop shifts, and restrained gallery movement. No bounce, springs, glow, magnetic cursor, or decorative noise. All controls have real state. Use semantic HTML, WCAG AA contrast, keyboard behavior, square focus outlines, and reduced motion.

## Delivery

Build complete cohesive chunks. After every edit inspect the diff and run available tests, lint, or a smoke check. Verify syntax, imports, callers, accessibility, and prohibited visual patterns. Update `context.md`.
