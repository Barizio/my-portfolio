# Design System — Adebare Adesokan Portfolio

> Design language distilled from the reference build at
> `https://leke-portfolio.vercel.app/` and adapted for this site. This file is
> the single source of truth for the **look**; `data.js` is the single source of
> truth for the **content**. Read both before making changes.

---

## 1. Design philosophy

A dark, editorial, "engineer's terminal" aesthetic. Big confident display
type, a lot of negative space, hairline borders instead of heavy boxes, one
electric-blue accent used sparingly, and monospace used as a labelling device
(section numbers, tech tags, metadata). Motion is quiet: fade-and-rise on
scroll, subtle hover nudges. The vibe is *precise, senior, shipped-real-things*
— not flashy.

Priorities, in order: **legibility → hierarchy → restraint → personality.**

---

## 2. Color tokens

All colors are CSS custom properties on `:root` (dark, default) with a
`[data-theme="light"]` override. Never hard-code a hex in a component — add or
reuse a token.

### Dark (default)

| Token            | Value                     | Use                                    |
|------------------|---------------------------|----------------------------------------|
| `--bg`           | `#080808`                 | Page background                        |
| `--bg2`          | `#0f0f0f`                 | Raised surfaces (cards, nav)           |
| `--bg3`          | `#151515`                 | Code block / deepest inset             |
| `--text`         | `#efefef`                 | Primary text                           |
| `--text-dim`     | `#a3a3a3`                 | Body copy, descriptions                |
| `--muted`        | `#6b6b6b`                 | Metadata, tags, section chrome         |
| `--border`       | `rgba(255,255,255,0.08)`  | Hairline dividers & card edges         |
| `--accent`       | `#60a5fa`                 | The one blue — links, arrows, highlights |
| `--accent-dim`   | `rgba(96,165,250,0.13)`   | Accent fills / hover washes            |
| `--accent-line`  | `rgba(96,165,250,0.30)`   | Accent borders                         |

### Light (`[data-theme="light"]`)

| Token          | Value                    |
|----------------|--------------------------|
| `--bg`         | `#ffffff`                |
| `--bg2`        | `#fafafa`                |
| `--bg3`        | `#f4f4f5`                |
| `--text`       | `#0a0a0a`                |
| `--text-dim`   | `#3f3f46`                |
| `--muted`      | `#71717a`                |
| `--border`     | `rgba(0,0,0,0.10)`       |
| `--accent`     | `#2563eb`                |
| `--accent-dim` | `rgba(37,99,235,0.10)`   |
| `--accent-line`| `rgba(37,99,235,0.30)`   |

Dark is the primary experience and should be tuned first; light must stay
readable but need not be pixel-perfect against dark.

---

## 3. Typography

Three families, loaded from Google Fonts:

| Role     | Family           | Weights   | Where                                   |
|----------|------------------|-----------|-----------------------------------------|
| Display  | **Syne**         | 700, 800  | Hero name, big section titles, contact  |
| Body     | **Space Grotesk**| 400, 500, 700 | Everything readable                 |
| Mono     | **JetBrains Mono**| 400, 500 | Section numbers, tech tags, dates, code |

### Scale

| Element             | Size (desktop)        | Weight | Notes                              |
|---------------------|-----------------------|--------|------------------------------------|
| Hero name           | `clamp(2.75rem, 9vw, 5.6rem)` | 800 (Syne) | line-height ~0.88, letter-spacing -0.02em, UPPERCASE |
| Contact headline    | `clamp(2.5rem, 8vw, 5rem)`    | 800 (Syne) |                                     |
| Section title (`h2`)| `clamp(1.6rem, 3vw, 2.4rem)`  | 700 (Syne) | The big label under the number      |
| Card title (`h3`)   | `1.15rem`             | 500 (Space Grotesk) |                            |
| Body                | `1rem` / `1.05rem`    | 400    | `--text-dim`, line-height 1.65      |
| Section number      | `0.8rem`              | 500 mono | e.g. `// 01 — ABOUT`, `--muted`, letterspaced |
| Tech tag / meta     | `0.72rem`             | 400 mono | uppercase-ish, `--muted`            |

---

## 4. Layout & spacing

- **Content max-width:** `1120px`, centered, `padding: 0 clamp(20px, 5vw, 48px)`.
- **Vertical rhythm:** sections separated by `clamp(80px, 12vh, 140px)` of space;
  a full-width hairline (`--border`) can sit between major sections.
- **Grid:** projects and stats use CSS grid with
  `repeat(auto-fit, minmax(...))` so they reflow without media queries.
- **Breakpoint:** single meaningful breakpoint at `720px` — below it, multi-column
  grids collapse to one column, the hero name shrinks via `clamp`, nav condenses.

---

## 5. Components

### Top nav (sticky)
Logo (`leke.dev`-style wordmark → here `adebare.dev`) on the left; anchor links
(`about · skills · projects · experience · contact`) + a `resume →` action and a
theme toggle on the right. Background `--bg2` with a bottom hairline and a slight
`backdrop-filter: blur`. Links are `--muted`, hover → `--text`, active → `--text`.

### Section header
Two stacked lines:
1. Mono kicker: `// 01 — ABOUT` in `--muted`.
2. Display title (`h2`) in Syne.

Numbers are zero-padded and drive the "table of contents" feel. When you add a
section, renumber sequentially.

### Stat tile
Grid of 3–4 tiles. Big Syne number (`--accent` or `--text`) over a small
`--muted` label. Hairline top border, generous padding.

### Project card
`--bg2`, hairline border, hover raises border to `--accent-line` and lifts 2px.
Contents: mono index (`_01`), title (with optional `🏆`/`🔒` inline badge),
one-line description in `--text-dim`, a row of square mono **tech tags**
(transparent bg, `--border`, no radius), and a trailing `↗` link to source/live.

### Experience row
Mono date range on the left column (or above on mobile), role in `--text`,
company in `--muted`, description in `--text-dim`. Separated by hairlines, no
cards — reads like a changelog.

### Certification row
Small `--muted` issuer label (e.g. `Anthropic`, `BCG / Forage`), cert name in
`--text`, mono date, trailing `↗` verify link. Tag pills optional.

### Tech tag
`font: 0.72rem JetBrains Mono`, `padding: 4px 10px`, `border: 1px solid
--border`, **square** (no radius), `color: --muted`, transparent background.

### Buttons
- Primary: `--accent` text on transparent with `--accent-line` border; hover
  fills `--accent-dim`.
- Ghost/secondary: `--muted` text, `--border`, hover → `--text`.
- All buttons are mono, small, with an arrow glyph (`↓ → ↗`).

---

## 6. Page sections (order)

`index.html` is a single scrolling page:

1. **Hero** — kicker, giant name, role line, one-line pitch, stack line, CTAs.
2. **01 — About** — bio (2–3 paragraphs) + stat tiles.
3. **02 — Skills** — grouped tech tag clusters.
4. **03 — Projects** — selected engineering projects (cards).
5. **04 — Showcase** — front-end showcase (Aurora / MONOLITH / Atelier).
6. **05 — Experience** — timeline of roles + education.
7. **06 — Certifications** — Anthropic + BCG/Forage.
8. **07 — Contact** — huge headline + email/social CTAs.
9. **Footer** — copyright + repeated links.

`about.html` is the long-form version (full experience bullets, achievements,
community service, extended skills) rendered from the same `data.js`.

---

## 7. Motion

- **Reveal on scroll:** elements start `opacity:0; translateY(14px)`, ease in when
  entering the viewport, with a small staggered `transition-delay`.
- **Hover:** cards lift 2px + border brightens; arrow links nudge `translateX(4px)`;
  theme icon spins slightly.
- **Hero:** optional blinking mono caret after the name.
- **Always** honor `@media (prefers-reduced-motion: reduce)`: no transforms, nothing
  left hidden.

---

## 8. Architecture — why updates are easy

The site is **static (no build step)** but **data-driven**:

```
data.js      ← ALL content lives here (one global `PORTFOLIO` object)
render.js    ← pure functions that turn data into DOM, injected into pages
main.js      ← theme toggle + scroll-reveal (behavior only)
styles.css   ← the design system in this doc (tokens + components)
index.html   ← empty section shells with mount points; render.js fills them
about.html   ← same, long-form
```

### To make a common change

| I want to…                     | Edit                                             |
|--------------------------------|--------------------------------------------------|
| Add/edit a project             | `PORTFOLIO.projects` in `data.js`                |
| Add a certification            | `PORTFOLIO.certifications` in `data.js`          |
| Add a job / update a bullet    | `PORTFOLIO.experience` in `data.js`              |
| Change a skill cluster         | `PORTFOLIO.skills` in `data.js`                  |
| Update bio, stats, links       | `PORTFOLIO.profile` / `PORTFOLIO.stats`          |
| Recolor / restyle              | tokens at the top of `styles.css` (§2)           |
| Add a whole new section        | add data + a render function + a mount `<div>`   |

No HTML surgery for routine updates: content is described once as data and
rendered consistently everywhere. Keep `data.js` ordered the way it should
appear on the page; renderers preserve array order.

---

## 9. Accessibility & quality bar

- Contrast: body text ≥ 4.5:1 in both themes (`--text-dim` on `--bg` passes).
- Every interactive element is a real `<a>`/`<button>` with a visible focus ring.
- `alt` text on images; `aria-label` on icon-only buttons.
- Respect reduced motion.
- No layout shift: reserve space; fonts use `display=swap`.
