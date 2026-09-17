# Accessibility & Inclusive Design Standards
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

All interfaces generated under Agential Skill must meet WCAG 2.1 Level AA conformance. Visual elegance must never compromise accessibility.

---

## 1. Contrast Ratios

Ensure text and interactive surfaces meet strict contrast thresholds against their backgrounds:

| Element | Minimum Ratio | Recommended Pairings |
|:---|:---|:---|
| Normal text (< 18pt / < 14pt bold) | 4.5:1 | Obsidian `#0a0a0c` + `#f8fafc` (17.5:1)<br>Slate `#0b0f17` + `#f1f5f9` (15.2:1)<br>White `#ffffff` + `#0f172a` (16.1:1) |
| Large text (>= 18pt / >= 14pt bold) | 3.0:1 | Secondary text `#a1a1aa` on `#0a0a0c` (7.1:1) |
| UI components & active borders | 3.0:1 | Card borders `rgba(255,255,255,0.15)` on hover<br>Input active border `#3b82f6` on `#0a0a0c` (5.8:1) |

> **Audit Rule:** Never use faint zinc text (`text-zinc-600` or lower) on dark backgrounds for informative copy. Use `text-zinc-400` minimum for muted labels, and `text-zinc-200` or `text-white` for primary body copy.

---

## 2. Keyboard Navigation & Focus Indicators

Every interactive element must be reachable, operable, and clearly indicated using a keyboard alone.

### 2.1 Visible Focus Rings
Do not suppress default browser outlines without providing an accessible alternative:

```tsx
// Compliant focus styling pattern
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
```

### 2.2 Logical Tab Order
- Ensure DOM sequence matches visual reading order.
- Modal dialogs must trap focus while open and restore focus to the trigger on close.
- Provide a hidden skip-link at the very beginning of the document:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md"
>
  Skip to content
</a>
```

---

## 3. Screen Reader Semantics & ARIA

Use semantic HTML elements natively where available. Augment with ARIA attributes when building custom controls.

### 3.1 Landmark Elements
Wrap layouts in semantic containers:
- `<header>` for global navigation
- `<nav aria-label="Main Navigation">` for primary links
- `<main id="main-content">` for page content
- `<section aria-labelledby="section-heading-id">` for page stages
- `<footer>` for colophon and legal

### 3.2 Icon-Only Buttons
Interactive elements containing only icons must have explicit textual alternatives:

```tsx
// Incorrect
<button onClick={toggleMenu}><MenuIcon /></button>

// Correct
<button
  type="button"
  onClick={toggleMenu}
  aria-label="Toggle navigation menu"
  aria-expanded={isOpen}
  className="p-2 rounded-md focus-visible:ring-2 ..."
>
  <MenuIcon aria-hidden="true" />
</button>
```

### 3.3 Dynamic Announcements
Use `aria-live="polite"` for asynchronous updates (toasts, validation feedback, cart updates) that do not interrupt user focus:

```tsx
<div role="status" aria-live="polite" className="sr-only">
  {statusMessage}
</div>
```

---

## 4. Reduced Motion Support

All decorative transitions and animations must respect user OS-level motion preferences:

### 4.1 CSS & Tailwind
Use the `motion-reduce:` variant for all animation classes:

```tsx
<div className="transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
  {content}
</div>
```

### 4.2 Framer Motion
Integrate the `useReducedMotion` hook to gracefully collapse animations:

```tsx
import { motion, useReducedMotion } from "framer-motion";

export function SectionReveal({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 5. Verification Checklist

Before reporting code as complete, verify:
- [ ] No contrast violations in dark/light themes (`text-zinc-400` minimum for metadata).
- [ ] All clickable elements are interactive `<button>` or `<a>` elements (never bare `<div>`).
- [ ] Focus rings are clearly visible via Tab navigation.
- [ ] Icon buttons have descriptive `aria-label` tags.
- [ ] Animated elements include `motion-reduce` fallbacks.
- [ ] Forms pair every `<input>` with an explicit `<label>`.
