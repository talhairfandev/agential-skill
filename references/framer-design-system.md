# Design System & Motion Specification
**Standard:** Swiss Architectural Editorial & Brutalist Luxury

A complete design and motion specification for AI agents building web applications. Defines every visual, interactive, and Framer Motion standard.

---

## 1. Border Radius — The Anti-Card & Zero-Radius Law

| Component | Standard | Tailwind | Prohibited |
|:---|:---|:---|:---|
| Buttons & CTAs | `0px` | `rounded-none` | `rounded-full` / `rounded-md` / pills |
| Containers & Modals | `0px` | `rounded-none` | `rounded-lg` / `rounded-xl` / bubble corners |
| Badges & Status Tags | `0px` | `rounded-none` | Pill capsules / rounded badges |
| Inputs & Textareas | `0px` | `rounded-none` | Rounded inputs |
| Media & Images | `0px` | `rounded-none` | Rounded corners |

```css
/* Universal Architectural Standard */
.btn-action {
  border-radius: 0;
  padding: 12px 24px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.btn-action:hover {
  background: #000000;
  color: #ffffff;
}
```

---

## 2. Navbar & Hero Stage

### Navbar Checklist
- Position: sticky/fixed at `top: 0`, `z-index: 50`.
- Surface: `#080808` (dark) or `#ffffff` (light) with 1px hairline border (`border-b border-white/10` or `border-neutral-200`).
- No pill buttons. Use sharp rectangular buttons (`rounded-none px-5 py-2.5 font-mono text-xs uppercase tracking-widest`).
- Links: Small caps/uppercase with micro-index numbers (`[ 01 ] OVERVIEW`).

### Hero Stage Checklist
- Structure: Full-bleed edge-to-edge `w-full min-h-[100dvh]` with generous vertical padding (`py-28 md:py-36`).
- Colossal Typographic Scale: 80px–140px (`text-7xl` to `text-9xl`), tight tracking (`tracking-[-0.05em]`), line-height `leading-[0.9]`.
- Low Text, High Fidelity: Cut 70% of copy. Headings 3–6 words max. Subtitles 1 single sentence max (under 15 words). NO text walls.
- Surgical Telemetry: Subtle marks only (`[ 01 ]`, `®`). Max 1–2 per section. Strictly forbid cluttering the canvas with fake coordinates, endless chips, or status tags.
- Strict Color Law: Subtitles and paragraphs must NEVER be blue, cyan, or purple. Strictly neutral (`text-zinc-400` on dark, `text-zinc-600` on light).
- Centerpiece: Locked aspect ratio (`aspect-[16/9]`, `aspect-[4/5]`, `aspect-[3/4]`), `object-cover`, `rounded-none`, framed by 1px hairlines.

---

## 3. The Ledger System (Banning Floating Cards)

Replace 3-column floating card grids with horizontal archival ledger rows:

```tsx
// Architectural Ledger Row
<div className="w-full border-t border-white/10 py-6 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors rounded-none">
  <div className="flex items-center gap-6">
    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">[ 01 ]</span>
    <h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">
      Mach 2.2 Cohesion Dynamics™
    </h3>
  </div>
  <div className="flex items-center gap-8">
    <span className="text-xs font-mono tracking-wider text-zinc-400">TELEMETRY / ACTIVE</span>
    <span className="text-sm font-mono text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
  </div>
</div>
```

---

## 4. Color System & Stark Monolithic Contrast

**Banned:** Multicolor rainbow gradients, pastel blobs, wavy dividers.
**Required:** Clean `#FFFFFF` light sections crashing directly into pitch-black `#080808` monolith sections.

| Surface | Background | Border (1px) | Primary Text | Secondary Metadata | Accent Dot |
|:---|:---|:---|:---|:---|:---|
| Pitch Monolith | `#080808` | `rgba(255,255,255,0.10)` | `#ffffff` | `#a1a1aa` (zinc-400) | `#c084fc` / `#38bdf8` |
| Deep Obsidian | `#0c0c0e` | `rgba(255,255,255,0.08)` | `#f4f4f5` | `#71717a` (zinc-500) | `#10b981` |
| Swiss Paper | `#ffffff` | `rgba(0,0,0,0.12)` | `#000000` | `#52525b` (zinc-600) | `#000000` |
| Archival Warm | `#faf9f5` | `rgba(0,0,0,0.08)` | `#18181b` | `#71717a` (zinc-500) | `#d97706` |

---

## 5. Typography Standards

### Font Hierarchy
- **Display / Colossal Headings:** Space Grotesk, PP Neue Montreal, Syne, or Helvetica Neue. Tight tracking (`tracking-[-0.04em]` to `tracking-[-0.06em]`).
- **Body Text:** Plus Jakarta Sans or Inter. Clean leading, neutral tone (`text-zinc-400`).
- **Technical Specs & Utility Labels:** Space Mono, Cascadia Mono, JetBrains Mono. Monospaced, uppercase, wide letter spacing (`tracking-[0.15em]` to `tracking-[0.25em]`).

---

## 6. Framer Motion Architecture

Motion is structural, cinematic, and linear. NEVER bouncy, springy, or cartoonish.

### Core Easing Curves
- **Linear Architectural Easing:** `[0.16, 1, 0.3, 1]` (cubic-bezier)
- **High-Velocity Reveal:** `[0.25, 1, 0.5, 1]`

### 1. Colossal Headline Reveal
```tsx
import { motion } from "framer-motion";

export function EditorialHeroTitle({ title }: { title: string }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="text-7xl md:text-9xl font-light tracking-[-0.05em] leading-[0.88] text-white"
      >
        {title}
      </motion.h1>
    </div>
  );
}
```

### 2. Staggered Ledger Feed
```tsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

export function LedgerSection({ items }: { items: Array<{ id: string; title: string; spec: string }> }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full border-b border-white/10"
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          variants={rowVariants}
          className="w-full border-t border-white/10 py-6 px-4 flex items-center justify-between group hover:bg-white/[0.02] rounded-none transition-colors"
        >
          <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em]">[ 0{idx + 1} ]</span>
          <h3 className="text-xl md:text-2xl text-white font-normal">{item.title}</h3>
          <span className="font-mono text-xs text-zinc-400">{item.spec}</span>
          <span className="font-mono text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### 3. Rolling Text Component (`RollText`)
```tsx
export function RollText({ text }: { text: string }) {
  return (
    <span className="relative inline-block overflow-hidden h-[1.25em] font-mono text-xs uppercase tracking-widest group align-middle">
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full text-zinc-400"
      >
        {text}
      </span>
    </span>
  );
}
```

### 4. Accessibility & Reduced Motion
```tsx
import { useReducedMotion } from "framer-motion";

export function useMotionConfig() {
  const shouldReduce = useReducedMotion();
  return {
    initial: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: shouldReduce ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }
  };
}
```

---

## 7. Tailwind CSS Configuration

### v4 (CSS-First)
```css
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --font-mono: "Space Mono", monospace;
  --color-monolith: #080808;
  --color-paper: #ffffff;
  --radius: 0px;
}
```

### v3 (Config-First)
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
      },
      colors: {
        monolith: '#080808',
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
};
export default config;
```
