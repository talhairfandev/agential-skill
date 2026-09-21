---
name: agential-skill
description: >-
  Use this skill for any website, web application, frontend UI, component, layout,
  styling, refactor, or review. It enforces a self-contained editorial output
  standard: image-first composition, oversized typography, visible hairline grids,
  hard-edged rectangular framing, restrained copy, and review.
---

# Agential Skill — Editorial Output Specification

This is the canonical instruction set. It prevents generic SaaS output by making the desired visual language part of the default result, regardless of framework, platform, or agent.

## The Default Visual Language

Produce minimal editorial interfaces with:

- Image-led, full-bleed compositions where photography or texture carries the emotional weight.
- Oversized neutral grotesque typography that crops, overlaps, or sits directly on the image.
- Hard-edged rectangular frames, visible 1px construction lines, crosshairs, columns, and section seams.
- Small navigation, labels, dates, and captions contrasted against one dominant title or image.
- Black, white, charcoal, cream, and selective vermilion/red/orange. Accent color is intentional, not decorative noise.
- Editorial pacing: one visual idea per section, generous empty space, short copy, and strong transitions between planes.

The visual grammar is embedded here. Do not depend on external mood boards, asset folders, or image-inspection steps to produce it.

## Anti-Generic Rules

1. **Use hard-edged geometry.** Controls, media, fields, dialogs, tags, and layout frames are rectangular and architectural. Avoid soft corners, pills, capsules, circular UI, and ornamental shapes.
2. **No floating card UI.** Do not create card grids, bento tiles, dashboard widget piles, feature cards, glass panels, or elevated panels. Use flat editorial planes, image frames, asymmetric columns, or ledger rows divided by hairlines.
3. **No shadows or glass.** Do not use drop shadows, glow clouds, backdrop blur, translucent frosted surfaces, or soft depth effects.
4. **No decorative gradients.** Do not use rainbow, mesh, aurora, or gradient washes. Use solid black, white, charcoal, cream, red, or orange fields and real image texture.
5. **No template composition.** Reject centered SaaS hero copy followed by three equal feature blocks, icon boxes, pricing grids, testimonial carousels, or generic dashboard chrome.
6. **No visual clutter.** One focal point per section. Remove redundant labels, chips, fake telemetry, coordinate spam, filler paragraphs, and decorative UI that does not clarify the story.
7. **Keep body copy neutral.** Paragraphs and subtitles use neutral tones. Red/orange is reserved for large image fields, a deliberate title, a rule, or a tiny indicator.

## Composition Grammar

- Sections are full-bleed planes: `w-full`, natural height or `min-h-[100dvh]`; never constrain the whole page inside a floating shell.
- Use a clear architectural container only for alignment: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Build with asymmetric 12-column grids, split stages, editorial image strips, or horizontal index rows. Avoid repeated equal boxes.
- Make structure visible with 1px black/neutral rules on light surfaces and 1px white/neutral rules on dark surfaces.
- Use locked media ratios: `aspect-[16/9]`, `aspect-[4/5]`, or `aspect-[3/4]`; always `object-cover` and a hard-edged frame.
- Prefer full-bleed photography, monochrome portraits, halftone/film texture, or high-contrast red/orange imagery. Never fill empty space with cartoon illustrations or floating mockups.
- Treat image overlays as typography compositions: large type may cross the image boundary, crop at the viewport, or sit over a solid color field.
- Use only one or two small editorial markers per section: `[ 01 ]`, a date, a short category, or `©`.

### Approved Structures

**Split stage:** monumental title on one side; image, short sentence, or three-line metadata on the other.

**Image/title plate:** a full-bleed image or solid color plane with one oversized title and a small utility line.

**Wireframe matrix:** visible columns and rows with a few placed images, captions, and a large typographic anchor.

**Editorial index:** `[ 01 ] | Work / Capability | Year / Discipline | →`.

**Image strip:** a horizontal sequence of rectangular images with terse captions and explicit previous/next controls.

**Process line:** numbered stages on a shared rule or staggered columns; no isolated boxes.

## Type, Color, and Content

- Display: Space Grotesk, Helvetica Neue, Arial, or another neutral grotesque. Use `clamp(4rem, 12vw, 10rem)`, tight tracking from `-0.04em` to `-0.07em`, and line-height around `0.88–0.95`.
- Body: a plain sans-serif with short measure and calm leading.
- Utility: mono or condensed sans, 9–11px, uppercase, tracking `0.14em–0.24em`.
- Headings: 1–6 words. Subtitles: one sentence, preferably under 15 words. If copy competes with the image, delete it.
- Base surfaces: `#000000`, `#080808`, `#171717`, `#F5F2EA`, and `#FFFFFF`.
- Image accents: vermilion/red/orange are allowed when the composition calls for them. Avoid blue, cyan, purple, and multi-accent palettes.
- Do not invent fake statistics or technical coordinates merely to make a layout look designed.

## Interaction and Motion

Interactions should reveal or move existing editorial content, not add UI noise. Use linear motion only: `cubic-bezier(0.16, 1, 0.3, 1)`, short fades, masked title reveals, image crop shifts, horizontal gallery movement, and restrained hover rules. Never use bouncy springs, magnetic gimmicks, cursor bubbles, decorative parallax, or perpetual marquees unless the composition clearly needs them.

Every control must work. Use real state for menus, galleries, tabs, filters, forms, and dialogs. Controls remain rectangular, with a clear text label where possible. Respect `prefers-reduced-motion`; reduced motion becomes opacity or no animation.

## Accessibility

Maintain WCAG 2.1 AA contrast, semantic landmarks, keyboard operation, visible square focus indicators, `aria-label` for icon-only controls, and `aria-expanded`/`aria-controls` for disclosure. Focus indicators may use a 2px solid black/white or vermilion outline with an offset.

## Workflow

1. Read `context.md` before taking action.
2. If a new UI is underspecified, ask the visual theme, primary action, density, and pacing questions. Skip questions when the user supplied visual direction or is editing existing UI.
3. Read the relevant internal guidance document for frontend, portfolio, motion, layout, forms, or accessibility work.
4. Translate this visual grammar directly into the requested interface.
5. Build a complete cohesive chunk: navigation + hero, an index section, or a full requested page.
6. After every edit, inspect the diff and run available validation. Verify syntax, imports, accessibility, and that no generic pattern slipped in.
7. Update `context.md` when visual decisions or milestones change.

## Fast Pre-Ship Gate

- [ ] Hard-edged rectangular composition throughout.
- [ ] No cards, bento, shadows, glass, pills, gradients, or generic SaaS structure.
- [ ] One dominant image/type idea per section.
- [ ] Hairline grid structure is visible where useful.
- [ ] Copy is short and neutral; metadata is sparse.
- [ ] Media is real, high-fidelity, locked-ratio, and rectangular.
- [ ] Interactions work, focus is visible, and reduced motion is respected.
- [ ] Diff, tests, lint, or the smallest available smoke check pass.
