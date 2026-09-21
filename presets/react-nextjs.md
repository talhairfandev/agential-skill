# Preset: React and Next.js — Editorial Implementation

## Server Components

Default to React Server Components. Add `'use client'` only where event handlers, browser APIs, or state are required. Keep motion and interactive components at the leaves.

## Images

Use `next/image` for local or remote media. Give every image a meaningful `alt`, use `priority` only for the first viewport, use lazy loading elsewhere, and preserve a deliberate rectangular ratio with `object-cover`.

## Tailwind Tokens

```css
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-sans: Arial, Helvetica, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  --color-ink: #000000;
  --color-obsidian: #080808;
  --color-paper: #ffffff;
  --color-cream: #f5f2ea;
  --color-vermilion: #f0442e;
}
```

For Tailwind v3, define the same fonts and colors. Do not add soft geometry tokens.

## Editorial Patterns

```tsx
export function IndexRow({ index, title, spec }: { index: string; title: string; spec: string }) {
  return (
    <a href="#work" className="grid grid-cols-12 border-t border-white/20 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0442E]">
      <span className="col-span-2 font-mono text-[10px] tracking-[.18em] text-white/60">[ {index} ]</span>
      <span className="col-span-6 text-xl text-white">{title}</span>
      <span className="col-span-3 font-mono text-[10px] tracking-[.18em] text-white/60">{spec}</span>
      <span className="col-span-1 text-right text-white">→</span>
    </a>
  );
}

export function EditorialImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover" />;
}
```

Use split stages, image/title plates, visible rules, image strips, and index rows. Do not create cards, bento grids, glass panels, shadows, pills, generic feature sections, or centered SaaS heroes. Use concise copy, real state, semantic HTML, square focus outlines, and linear reduced-motion-safe transitions.
