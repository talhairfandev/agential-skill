# Framer-Level Portfolio Blueprints
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

The definitive blueprint for building portfolio websites at the quality level of top Framer showcase templates and award-winning designer/studio portfolios. Covers the two design modes, full page architecture, the project grid + hover systems, the case-study detail page, and the six signature Framer interactions.

Read this file **before** building any portfolio, personal site, designer/developer/studio site, case study, or "selected works" page.

---

## 0. Design Modes — Pick One First

Framer-level portfolios split into two dominant aesthetic camps. Confirm the mode during onboarding, record it in `context.md`, and apply its rules consistently. **Never mix radii or palettes across modes within one site.**

| | **Mode A — Brutalist Editorial** | **Mode B — Soft Premium** |
|:---|:---|:---|
| **Vibe** | Architectural, monochrome, print-magazine, technical | Warm, tactile, refined, gallery-like |
| **Radius** | `rounded-none` everywhere (zero-radius law applies) | Large radii: media `rounded-2xl`/`rounded-3xl`, buttons `rounded-full` allowed |
| **Palette** | Pure `#FFFFFF` ↔ `#080808` monolithic contrast | Warm off-white `#f5f3ee` / cream `#faf9f5`, ink `#1a1a1a`, soft neutrals |
| **Type** | Space Grotesk / PP Neue Montreal + mono labels | Big grotesk or serif display (Instrument Serif, Fraunces, Editorial New) + clean sans body |
| **Dividers** | 1px hairlines (`border-white/12`, `border-neutral-200`) | Soft or none; whitespace does the separating |
| **Media** | Chiaroscuro, desaturated, locked aspect ratios | Warm, filmic grain, rounded corners, generous padding |
| **Motion** | Linear, structural, `ease [0.16, 1, 0.3, 1]` | Smooth with gentle overshoot allowed, `ease [0.22, 1, 0.36, 1]` |
| **Best for** | Design studios, developers, technical/experimental brands | Designers, photographers, art directors, creative freelancers |

Both modes share: colossal display typography, low text / high fidelity, strong scroll motion, WCAG 2.1 AA, and the same page architecture below.

> **Conflict resolution note:** The global zero-radius "Anti-Card Law" and "Ledger System" from `SKILL.md`/`DESIGN.md` apply to **Mode A only**. In a portfolio context, project **thumbnail grids are explicitly allowed and expected** in both modes — a portfolio without a visual work grid is not a portfolio. Mode A styles those thumbnails with `rounded-none` + hairline frames; Mode B styles them with large radii + soft shadows.

---

## 1. Portfolio Page Architecture

A Framer-level portfolio is a **two-level system**: the index (home) and the case-study detail page.

### 1.1 Index / Home page section order

```
[ NAV ]            Minimal. Name/logo left, 2–4 links + availability pill right.
[ HERO ]           Colossal statement of who you are + what you do. 3–6 words.
[ SELECTED WORKS ] The centerpiece. 3–8 projects as large clickable media tiles.
[ ABOUT ]          Short bio, portrait, philosophy. 1–2 sentences, not a resume.
[ SERVICES ]       What you offer. Ledger rows (Mode A) or soft list (Mode B).
[ MARQUEE ]        Scrolling ticker: client names, "available for work", or tools.
[ RECOGNITION ]    Awards, features, or logos. Optional. One row.
[ CONTACT / CTA ]  Oversized "Let's work together" + email + socials.
[ FOOTER ]         Local time, location, back-to-top, colophon.
```

Not every portfolio needs all sections. Minimum viable Framer portfolio = **Nav + Hero + Selected Works + Contact/Footer**. Add About/Services/Marquee based on onboarding.

### 1.2 Hero patterns

The hero states identity, not features. Keep copy razor-sharp.

```tsx
// Mode-agnostic hero shell — swap tokens per mode
export function PortfolioHero({
  name, role, availability, mode = "A",
}: { name: string; role: string; availability?: string; mode?: "A" | "B" }) {
  const isSoft = mode === "B";
  return (
    <section className={`w-full min-h-[92dvh] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 ${
      isSoft ? "bg-[#f5f3ee] text-[#1a1a1a]" : "bg-[#080808] text-white"
    }`}>
      {availability && (
        <div className="mb-8 flex items-center gap-2">
          <span className={`h-2 w-2 ${isSoft ? "rounded-full" : "rounded-none"} bg-emerald-500 animate-pulse`} />
          <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-70">{availability}</span>
        </div>
      )}
      <h1 className={`font-display leading-[0.9] tracking-[-0.04em] ${
        isSoft ? "text-6xl md:text-8xl lg:text-[9rem] font-medium" : "text-6xl md:text-8xl lg:text-9xl font-light"
      }`}>
        {role}
      </h1>
      <p className="mt-6 max-w-md text-base md:text-lg opacity-60">
        {name}
      </p>
    </section>
  );
}
```

---

## 2. Selected Works — The Project Grid System

This is the heart of a portfolio. Three proven layouts. Choose based on project count and media strength.

### 2.1 Layout options

| Layout | Best for | Structure |
|:---|:---|:---|
| **Alternating full-width** | 3–6 hero projects, strong imagery | One project per row, image + meta alternate left/right |
| **Two-column staggered** | 6–10 projects, editorial feel | 2 cols with vertical offset (masonry-lite) |
| **Interactive index list** | 8+ projects, minimal, text-forward | Text rows; hovering a row previews its image |

### 2.2 Project tile with hover reveal (alternating full-width)

```tsx
'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectTile({
  project, index, mode = "A",
}: {
  project: { slug: string; title: string; category: string; year: string; image: string };
  index: number;
  mode?: "A" | "B";
}) {
  const isSoft = mode === "B";
  const radius = isSoft ? "rounded-3xl" : "rounded-none";
  return (
    <Link href={`/work/${project.slug}`} className="group block w-full">
      <div className={`relative overflow-hidden ${radius} ${isSoft ? "" : "border border-neutral-200 dark:border-white/12"}`}>
        <div className="aspect-[16/10] w-full overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Hover overlay: "View Project" */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] ${
            isSoft ? "rounded-full bg-white/90 text-black backdrop-blur" : "rounded-none bg-white text-black"
          }`}>
            View Project
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl md:text-4xl font-display tracking-[-0.02em]">
          <span className="mr-3 text-sm align-super opacity-40 font-mono">0{index + 1}</span>
          {project.title}
        </h3>
        <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-50">
          {project.category} — {project.year}
        </span>
      </div>
    </Link>
  );
}
```

### 2.3 Interactive index list (hover previews image)

For text-forward portfolios. Hovering a project row reveals a floating preview image that follows the cursor.

```tsx
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WorkIndex({ projects }: { projects: Array<{ slug: string; title: string; year: string; image: string }> }) {
  const [active, setActive] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const current = projects.find((p) => p.slug === active);

  return (
    <div
      className="relative w-full"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {projects.map((p) => (
        <a
          key={p.slug}
          href={`/work/${p.slug}`}
          onMouseEnter={() => setActive(p.slug)}
          onMouseLeave={() => setActive(null)}
          className="group flex items-center justify-between border-t border-neutral-200 dark:border-white/12 py-6 md:py-8 last:border-b transition-colors hover:opacity-100 opacity-70"
        >
          <h3 className="text-3xl md:text-6xl font-display tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-4">
            {p.title}
          </h3>
          <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-50">{p.year}</span>
        </a>
      ))}

      {/* Floating cursor preview */}
      <AnimatePresence>
        {current && (
          <motion.img
            key={current.slug}
            src={current.image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: pos.x + 24, top: pos.y - 120 }}
            className="pointer-events-none fixed z-50 hidden h-64 w-80 rounded-2xl object-cover shadow-2xl md:block"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
```

> Accessibility: the floating preview is decorative (`aria-hidden`), disabled on touch/mobile (`hidden md:block`), and the underlying `<a>` remains fully keyboard-navigable. Gate the parallax/preview behind `useReducedMotion()`.

---

## 3. The Case-Study Detail Page

Clicking a project opens its case study. Structure:

```
[ BACK ]          Persistent "← All Work" link.
[ TITLE BLOCK ]   Project title (colossal) + one-line summary.
[ META BAR ]      Role · Client · Year · Services. Hairline-separated columns.
[ HERO MEDIA ]    Full-bleed cover image/video with scroll parallax.
[ OVERVIEW ]      2–3 short paragraphs. The only place longer copy is allowed.
[ MEDIA STACK ]   Alternating full-bleed and paired images. The visual bulk.
[ RESULTS ]       Optional metrics or outcome, big numbers.
[ NEXT PROJECT ]  Large link to the next case study (keeps users in the flow).
```

```tsx
export function CaseStudyMeta({
  role, client, year, services,
}: { role: string; client: string; year: string; services: string[] }) {
  const items = [
    { label: "Role", value: role },
    { label: "Client", value: client },
    { label: "Year", value: year },
    { label: "Services", value: services.join(", ") },
  ];
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-neutral-200 dark:border-white/12">
      {items.map((it) => (
        <div key={it.label} className="border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200 dark:border-white/12 p-5">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">{it.label}</dt>
          <dd className="mt-2 text-sm md:text-base">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
```

The **Next Project** link is non-negotiable for Framer-level feel — it turns a portfolio into a continuous browsing experience:

```tsx
import Link from "next/link";

export function NextProject({ next }: { next: { slug: string; title: string; image: string } }) {
  return (
    <Link href={`/work/${next.slug}`} className="group relative block w-full overflow-hidden">
      <img src={next.image} alt="" aria-hidden="true"
        className="h-[60vh] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
        <span className="text-xs font-mono uppercase tracking-[0.25em] opacity-70">Next Project</span>
        <span className="mt-3 text-4xl md:text-7xl font-display tracking-[-0.03em]">{next.title}</span>
      </div>
    </Link>
  );
}
```

---

## 4. Six Signature Framer Interactions

These are what separate a "nice site" from a "Framer-level" one. Every one respects `useReducedMotion()`.

### 4.1 Scroll-linked image parallax

Image drifts slower than scroll, creating depth.

```tsx
'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  return (
    <div ref={ref} className="relative h-[70vh] w-full overflow-hidden">
      <motion.img src={src} alt={alt} style={{ y }} className="absolute inset-0 h-[120%] w-full object-cover" />
    </div>
  );
}
```

### 4.2 Sticky project title over scrolling media

The project title pins while its image gallery scrolls past.

```tsx
export function StickyTitleSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-10 py-24">
      <div className="md:col-span-4">
        <h2 className="md:sticky md:top-24 text-4xl md:text-6xl font-display tracking-[-0.03em] leading-[0.95]">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8 space-y-6">{children}</div>
    </section>
  );
}
```

### 4.3 Infinite marquee / ticker

Continuous horizontal scroll of client names, skills, or an "available for work" statement.

```tsx
'use client';
import { motion, useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="w-full overflow-hidden border-y border-neutral-200 dark:border-white/12 py-6">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i} className="text-3xl md:text-6xl font-display tracking-[-0.02em] opacity-80">
            {item} <span className="opacity-30 mx-4">✱</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
```

### 4.4 Cursor-following "View Project" bubble

A custom cursor that morphs into a label when hovering a project (desktop only).

```tsx
'use client';
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CursorBubble() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const enter = (e: Event) => setLabel((e.currentTarget as HTMLElement).dataset.cursor || "View");
    const leave = () => setLabel(null);
    window.addEventListener("mousemove", move);
    document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[100] hidden md:flex items-center justify-center rounded-full bg-white text-black text-xs font-mono uppercase tracking-widest"
      animate={{ x: pos.x, y: pos.y, width: label ? 96 : 12, height: label ? 96 : 12, opacity: label ? 1 : 0.6 }}
      transition={{ type: "tween", duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ translateX: "-50%", translateY: "-50%" }}
    >
      {label}
    </motion.div>
  );
}
```

Usage: add `data-cursor="View Project"` to any project tile. Hide the native cursor on interactive areas with `cursor-none` only when the custom cursor is active, and always keep keyboard focus states.

### 4.5 Image reveal mask on scroll

Media wipes into view via a clip/scale mask rather than a plain fade.

```tsx
'use client';
import { motion } from "framer-motion";

export function RevealMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src} alt={alt}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full object-cover"
      />
    </motion.div>
  );
}
```

### 4.6 Page transition overlay

A full-screen panel wipes across during route changes — the signature Framer "template" feel. Next.js App Router example using `framer-motion`:

```tsx
'use client';
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

// Overlay wipe (mount once at layout root)
export function TransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-black pointer-events-none"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top" }}
    />
  );
}
```

---

## 5. Footer / Contact CTA

The closing statement. Oversized, direct, one action.

```tsx
export function ContactCTA({ email, socials, mode = "A" }: {
  email: string; socials: Array<{ label: string; href: string }>; mode?: "A" | "B";
}) {
  const isSoft = mode === "B";
  return (
    <footer className={`w-full px-6 md:px-10 py-24 md:py-36 ${isSoft ? "bg-[#f5f3ee] text-[#1a1a1a]" : "bg-[#080808] text-white"}`}>
      <p className="text-xs font-mono uppercase tracking-[0.25em] opacity-50">Get in touch</p>
      <a href={`mailto:${email}`} className="mt-6 block text-5xl md:text-8xl font-display tracking-[-0.04em] leading-[0.95] hover:opacity-60 transition-opacity">
        Let&rsquo;s work together
      </a>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-current/10 pt-8">
        <span className="text-sm">{email}</span>
        <nav className="flex gap-6">
          {socials.map((s) => (
            <a key={s.href} href={s.href} className="text-xs font-mono uppercase tracking-[0.15em] hover:opacity-60 transition-opacity">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
```

---

## 6. Portfolio Build Checklist

Before reporting a portfolio complete, verify:

- [ ] Design mode (A or B) chosen and applied consistently — no mixed radii/palettes.
- [ ] Hero states identity in 3–6 words, not a paragraph.
- [ ] Selected Works uses one of the three grid layouts with working hover reveals.
- [ ] Each project links to a real case-study route (`/work/[slug]`).
- [ ] Case study has meta bar, media stack, and a **Next Project** link.
- [ ] At least 2 signature interactions applied (parallax, sticky title, marquee, cursor, reveal, transition).
- [ ] Contact CTA is oversized with a single clear action (email).
- [ ] Footer shows location/local time or colophon.
- [ ] All motion respects `useReducedMotion()`; custom cursor and cursor-preview disabled on mobile.
- [ ] WCAG 2.1 AA: keyboard-navigable project links, visible focus rings, 4.5:1 text contrast, `alt`/`aria-hidden` correct on media.
- [ ] Copy discipline: no walls of text outside the case-study overview.

---

*Related references: [framer-design-system.md](./framer-design-system.md) · [premium-section-benchmarks.md](./premium-section-benchmarks.md) · [accessibility-standards.md](./accessibility-standards.md) · [questioning-framework.md](./questioning-framework.md)*
