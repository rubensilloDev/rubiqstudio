# Design: RubiqStudio Home

## Technical Approach

Single `index.html` B2B conversion funnel in vanilla HTML5+CSS3+JS. Two-layer CSS: `global.css` for cross-page shared styles (variables, reset, header, footer, CTAs, reusable components), `index.css` for Home-specific layout. Two-layer JS: `global.js` for shared behavior (scroll header, hamburger, dropdown), `index.js` for Home-specific interactivity (FAQ accordion, AOS init). Mobile-first from 320px to 1400px. All files under `Desarrollo de la web/`. Zero inline styles — all design tokens via `:root` custom properties.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|-------------|----------|
| CSS split | `global.css` (shared) + `index.css` (Home-specific) | 5-file modular split | User preference: global styles that repeat across pages in one file, page-specific in another. Cleaner for future pages |
| JS split | `global.js` (shared) + `index.js` (Home-specific) | 3-file split | Same principle: shared behavior vs page-specific. AOS init + FAQ accordion are Home-only → `index.js` |
| File root | All files under `Desarrollo de la web/` | Project root | User preference: keeps development files contained in one directory |
| CSS naming | `[section]-[element]` (e.g. `.hero-title`) | BEM / SMACSS | Matches project convention for vanilla CSS without preprocessor overhead |
| Breakpoints | 320px / 768px / 1024px / 1400px | 576px / 1200px | Aligns to spec edge cases (320px mobile, 1400px Figma) with pragmatic tablet/desktop cuts |
| CTA routing | All CTAs → `wa.me/34692037526?text=...` | Mailto / contact form POST | R7 spec: no server-side submission, WhatsApp as sole conversion channel |
| Accordion behavior | Single-open, no toggle-off when alone | Multi-open / toggle-off | R6 edge case: clicking the same open item does NOT collapse it |
| Image references | Relative from `../Desarrollo de la web/img/` or `img/` | Copy elsewhere | Images stay in their existing location |
| AOS animation | `data-aos` attributes per element, per-section stagger | JS-driven reveal / IntersectionObserver | Zero JS config beyond init; all timing and effects in HTML attributes |

## CSS Variable Structure

```css
:root {
  /* Colors */
  --navy: #0A192F;
  --accent: #2DD4BF;
  --azul: #204F95;
  --white: #FFFFFF;
  --text-dark: #D1D5DB;
  --text-light: #6B7280;
  --navy-dark: #000D24;
  --navy-mid: #163A6F;

  /* Typography */
  --font-heading: 'Anton', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --section-padding: 5rem 1rem;
  --container-max: 1200px;
  --card-gap: 1.5rem;

  /* Gradients */
  --bg-gradient: radial-gradient(circle, #163A6F 0%, #000D24 85%);
}
```

## Responsive Breakpoints Strategy

| Breakpoint | Context | Layout Changes |
|------------|---------|----------------|
| 320px (base) | Mobile-first default | Single column, stacked CTAs, hamburger nav, reduced heading sizes |
| 768px | Tablet portrait | 2-column grids enabled (benefits, footer), hero mockup scales up |
| 1024px | Tablet landscape / small desktop | 3-column pricing cards side-by-side, full header nav visible |
| 1400px | Figma reference | Max container width, full Figma layout fidelity |

## Project Structure

```
Desarrollo de la web/
├── index.html                 # Home page — 9 sections + header + footer
├── css/
│   ├── global.css             # Shared: :root vars, reset, header, footer, CTAs, cards, FAQ
│   └── index.css              # Home-specific: hero, problem, benefits, services, etc.
├── js/
│   ├── global.js              # Shared: scroll header, hamburger toggle, dropdown
│   └── index.js               # Home-specific: FAQ accordion, AOS init
└── img/                       # Images (logo-rubiqstudio.png, mockups, etc.)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `Desarrollo de la web/index.html` | Create | 9 sections + sticky header + footer, deferred AOS/FA CDN |
| `Desarrollo de la web/css/global.css` | Create | :root variables, CSS reset, typography, header/footer styles, CTA variants, cards, FAQ accordion |
| `Desarrollo de la web/css/index.css` | Create | Home section-specific: hero, problem section, benefits grid, services/pricing, methodology timeline, FAQ, final CTA |
| `Desarrollo de la web/js/global.js` | Create | Scroll-based header opacity, hamburger menu toggle, Services dropdown (hover/tap) |
| `Desarrollo de la web/js/index.js` | Create | FAQ accordion (single-open), AOS initialization with per-section config |

### Implementation Order

Per user preference:
1. **Phase A — HTML**: Write the complete `index.html` with all 9 sections + header + footer using semantic HTML5, including all copy from copy.md
2. **Phase B — CSS global**: `global.css` — :root variables, reset, header, footer, CTA variants, cards, FAQ accordion styles
3. **Phase C — CSS Home**: `index.css` — section-specific layout for hero, problem, benefits, services, methodology, FAQ, final CTA
4. **Phase D — JS**: `global.js` + `index.js` — interactivity
5. **Phase E — Polish**: Responsive tuning, AOS attributes, final audit

### CTA Variants (global.css)

| Variant | Class | Style |
|---------|-------|-------|
| Primary (navy pill) | `.cta-primary` | Navy bg, white text, border-radius: 9999px, Inter 700 uppercase |
| Outline (ghost) | `.cta-outline` | Transparent bg, navy border, navy text, border-radius: 9999px |
| White | `.cta-white` | White bg, navy text, border-radius: 20px |

All CTAs: `href="https://wa.me/34692037526"`, `target="_blank"`, `rel="noopener noreferrer"`.

### Cards (global.css)

Benefits cards — `.benefits-card` white bg, 12px radius, #0A192F border, accent icon, Anton title, Inter body.

Pricing cards — `.pricing-card` on navy bg. Featured `.pricing-card--featured` with accent border and "MÁS ELEGIDO" badge. Price with `.price-original` (line-through) + `.price-current`.

### FAQ Accordion (global.css + index.js)

`.faq-item` → `.faq-header` (clickable) + `.faq-body` (hidden via `max-height` transition). Single-open via tracked `currentOpen` index. Smooth expand/collapse via `max-height` + `overflow: hidden` + `transition`.

## Open Questions

- None — all decisions derive directly from spec requirements and stated constraints.

## Data Flow

```
User click (CTA) ──→ window.open("wa.me/34692037526", "_blank")
User scroll ──→ global.js header shrink + AOS triggers
User click hamburger ──→ global.js nav toggle
User hover Servicios ──→ global.js dropdown show
User click FAQ ──→ index.js accordion toggle ──→ CSS max-height transition
```
