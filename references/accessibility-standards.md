# Accessibility Standards — Editorial Interfaces

Apply WCAG 2.1 AA without introducing generic visual chrome.

## Contrast

- Body text: at least 4.5:1.
- Large display text: at least 3:1.
- Rules and focus indicators: at least 3:1 where required.
- Use white or neutral text on black/charcoal, black/charcoal text on white/cream, and vermilion only when contrast is verified.

## Focus and Keyboard Access

Every interactive element needs a visible square focus outline. Use a 2px solid white, black, or vermilion outline with offset; never rely on color change alone.

```tsx
className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0442E]"
```

Provide skip links, logical tab order, keyboard-operable galleries and disclosures, and `aria-label` for icon-only controls. Use `aria-expanded` and `aria-controls` for toggles.

## Semantics and State

Use landmarks, headings in order, descriptive image alt text, explicit form labels, `aria-invalid`, `aria-describedby`, and `role=\"alert\"` for errors. All loading, empty, success, and failure states must be understandable without motion or color alone.

## Motion

Respect `prefers-reduced-motion`. Replace transforms and parallax with opacity or no animation. Never use motion to block keyboard access or hide content.

## Visual Constraints

Accessibility supports clear architecture: hard-edged controls, 1px rules, solid surfaces, strong contrast, and no clutter. Do not weaken usability with decorative effects.
