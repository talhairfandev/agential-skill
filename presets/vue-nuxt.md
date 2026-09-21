# Preset: Vue and Nuxt — Editorial Implementation

- Use Vue 3 Composition API and Nuxt 3 conventions.
- Use `shallowRef()` for large collections when deep reactivity is unnecessary.
- Use `defineAsyncComponent()` for dialogs and heavy interactive modules.
- Keep computed getters pure.
- Keep interaction state real and local where possible; preserve keyboard semantics.

## Visual implementation

Follow the canonical editorial system in `SKILL.md` and `DESIGN.md`: full-bleed image/title planes, oversized grotesque type, visible 1px rules, editorial index rows, and concise copy.

Use hard-edged rectangular geometry throughout. Avoid soft corners, pills, capsules, circles, shadows, blur, glass, gradients, cards, bento, and generic widget grids. Use sharp rectangular media with `object-fit: cover` and `aspect-ratio: 3 / 4`, `4 / 5`, or `16 / 9`. Use solid black, white, charcoal, cream, and selective red/orange. Body copy stays neutral.

Use semantic HTML, explicit labels, real client-side state, square focus outlines, WCAG AA contrast, and reduced-motion-safe linear transitions.
