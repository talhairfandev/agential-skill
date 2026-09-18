# Onboarding Question Framework

A guide for asking clarifying questions that any user — especially non-developers — can understand and answer.

---

## Principles

1. **Use everyday language.** Never ask about SSR, state hydration, web workers, or debouncing. Ask about what the user sees on screen.
2. **Offer 2–3 simple choices.** Mark one as **(Recommended)** so the user can reply with a single number.
3. **Limit to 1–3 questions.** Focus on the most important decisions first.

---

## Translation Guide

| Technical (do not ask) | Plain English (use this) |
|:---|:---|
| "Should we use Client-Side Routing or MPA architecture?" | "When navigating between pages, should the screen transition instantly without a reload, or load as standard pages?" |
| "Do you want optimistic UI updates or an async spinner?" | "When someone submits a form, should the change appear immediately, or show a loading spinner until saved?" |
| "Should animations run on requestAnimationFrame or CSS keyframes?" | "Would you prefer smooth, lightweight animations that won't lag on older devices?" |
| "What color theme and design tokens?" | "What visual style: (A) Modern dark mode with subtle accents, or (B) Clean, bright minimalist light mode?" |
| "How should the search input query the backend?" | "Should search results update as the user types, or only after pressing Enter?" |

---

## Question Format

> **Question 1: [Feature Name]**
> *One plain sentence explaining what this controls.*
> - **Option 1 (Recommended)**: [Simple description of the default]
> - **Option 2**: [Alternative for specific use cases]

---

## Portfolio Onboarding Set

When the request is a **portfolio, personal site, designer/developer/studio site, or "selected works" page**, ask this specialized 4-question set instead of the generic one. First read [`framer-portfolio-blueprints.md`](./framer-portfolio-blueprints.md), then ask:

> **Question 1: Who is this portfolio for?**
> *This drives layout, tone, and how much text vs. imagery to use.*
> - **Designer / Art Director** — image-heavy, large project tiles (Recommended for visual work)
> - **Developer / Engineer** — balanced, can include a text-forward work index
> - **Photographer / Studio** — full-bleed media, minimal text

> **Question 2: Which look?**
> *Both are Framer-level; they just feel different.*
> - **Mode A — Brutalist Editorial** — black/white, sharp corners, technical, mono labels
> - **Mode B — Soft Premium** — warm cream tones, rounded media, elegant serif/grotesk display (Recommended for designers/photographers)

> **Question 3: How should the work be shown?**
> *This is the centerpiece of the site.*
> - **Alternating full-width tiles** — big images, one project per row (Recommended for 3–6 projects)
> - **Two-column staggered grid** — editorial, 6–10 projects
> - **Interactive index list** — text rows that preview an image on hover (8+ projects, minimal)

> **Question 4: Which sections do you want beyond the essentials?**
> *Essentials are always included: Nav, Hero, Selected Works, Contact/Footer.*
> - Add any of: **About**, **Services**, **Marquee/ticker**, **Awards/Recognition**
> - Confirm whether each project needs a full **case-study detail page** (Recommended — it's what makes it feel Framer-level).

Record the answers (portfolio type, mode, work layout, sections) in `context.md` before building. Then start with **Nav + Hero** as the first chunk.
