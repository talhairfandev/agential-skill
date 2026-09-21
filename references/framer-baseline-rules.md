# Framer-Level Baseline — Editorial Output Law

This file governs every frontend task. “Framer-level” means intentional composition, not animated SaaS furniture. The desired output is self-contained.

## Prime Directive: Image, Type, Structure

Every screen needs one dominant image or typographic idea. Use generous negative space, concise copy, high-fidelity media, and visible structure. If the result could be a starter dashboard or a row of template blocks, reject it and rebuild the composition.

## Geometry

- Use hard-edged rectangular geometry for every surface, control, media frame, and layout seam. Avoid soft corners, pills, capsules, circles, and ornamental shapes.
- No shadows, blur, glass, translucent elevation, decorative gradients, floating cards, bento tiles, equal feature rows, or widget piles.
- Use flat planes, sharp image frames, split stages, wireframe matrices, image strips, and ledger/index rows.
- Make 1px columns, rows, and section seams visible when they clarify the composition.

## Composition Rules

- Full-bleed image-led hero or color plane; do not put the whole page in a floating shell.
- Oversized grotesque titles may crop, overlap imagery, or cross a frame boundary.
- Navigation and metadata are small, sparse, and aligned to the grid.
- Use black, white, charcoal, cream, and selective vermilion/red/orange. Body copy stays neutral.
- Use `object-cover` with `aspect-[3/4]`, `aspect-[4/5]`, or `aspect-[16/9]`.
- Headings are 1–6 words. Subtitles are one short sentence. Delete any copy that competes with the image.

## Approved Section Structures

1. Split stage: monumental type on one side, image or terse metadata on the other.
2. Image/title plate: one full-bleed image or solid field with one dominant title.
3. Wireframe matrix: visible grid with a few placed images and captions.
4. Editorial index: `[ 01 ] | title | year / discipline | →`.
5. Image strip: rectangular images with captions and real directional controls.
6. Process line: numbered stages on one shared rule, never isolated boxes.

## Motion and Interaction

Use linear masked reveals, fades, crop shifts, and restrained horizontal movement with `cubic-bezier(0.16, 1, 0.3, 1)`. No bouncy springs, magnetic cursors, glow effects, or perpetual decorative motion. Every control has working state. Respect reduced motion by removing transforms.

## Dense Interfaces

Dashboards and tables use the same hard-edged, no-clutter system: flat rows, strict alignment, visible rules, restrained type, and one accent. Tighten scale and spacing for usability; do not introduce soft panels or widget collections.

## Pre-Ship Gate

- [ ] Hard-edged editorial composition.
- [ ] No cards, bento, shadows, glass, pills, gradients, or generic SaaS structure.
- [ ] One focal point per section, sparse copy, clear grid.
- [ ] Rectangular high-fidelity media and neutral body text.
- [ ] Real interaction state, semantic access, square focus outline, reduced motion.
