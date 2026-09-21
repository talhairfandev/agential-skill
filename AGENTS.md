# Agential Skill — Operational Rules

Follow these rules on every request.

## 1. Memory
Read `context.md` before acting. Update it when visual decisions, tokens, or milestones change.

## 2. Onboarding
For new UI without a supplied design brief, ask four plain-English questions: visual theme, primary action, information density, and pacing. Skip this for edits or when the user supplied visual direction.

## 3. Editorial Output System
The default output is minimal editorial design: image-first full-bleed planes, oversized grotesque type, visible 1px grid rules, sparse micro-navigation, short copy, and strong black/white with selective red/orange imagery.

- **Hard-edged geometry:** containers, media, buttons, inputs, tags, menus, dialogs, and loading shapes are rectangular and architectural. Avoid soft corners, pills, capsules, circles, and ornamental shapes.
- **No generic UI:** no floating cards, bento tiles, equal feature rows, icon boxes, glass, shadows, gradients, or dashboard widget piles. Use flat planes, image frames, split stages, wireframe matrices, image strips, and ledger rows.
- **Editorial hierarchy:** one focal image or title per section; display type 64–160px with tight tracking; utility labels 9–11px with wide tracking; headings 1–6 words; subtitles one short sentence.
- **Grid discipline:** show the 1px structure when it helps. Use asymmetric columns, full-bleed media, hard section seams, and locked rectangular ratios (`3/4`, `4/5`, `16/9`).
- **Color discipline:** black, white, charcoal, cream, and intentional vermilion/red/orange. Body copy stays neutral. No blue/cyan/purple copy and no multi-color palette.
- **Motion:** linear fades, masked title reveals, image crop shifts, and restrained gallery movement. No bounce, spring, blur, magnetic cursor, or decorative noise. Respect reduced motion.
- **State and access:** real client-side state, semantic HTML, WCAG AA contrast, keyboard behavior, and visible square focus outlines.

## 4. Pre-Flight
For every frontend task read the relevant internal baseline and implementation guidance before coding.

## 5. Delivery and Review
Deliver cohesive chunks. After every file modification inspect the diff and run available validation. Check syntax, imports, caller integrity, accessibility, visual clutter, generic card patterns, and accidental deletions.
