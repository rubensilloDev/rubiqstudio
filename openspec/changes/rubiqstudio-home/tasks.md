# Tasks: rubiqstudio-home

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1400 (5 files, 4 new + 1 new) |
| 400-line budget risk | High |
| Chained PRs recommended | No |
| Suggested split | Single PR (size:exception accepted) |
| Delivery strategy | exception-ok |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: High

## Phase A — HTML (~550 lines)

- [x] A.1 Create `index.html` with `<!DOCTYPE html>`, `<head>` (meta viewport, title, Google Fonts Anton+Inter preconnect, CSS links, deferred Font Awesome + AOS), and `<body>` skeleton
- [x] A.2 Build MainHeader: sticky nav with logo, 4 links, Servicios dropdown, "HABLEMOS" CTA button
- [x] A.3 Build HeroSection: badge, H1, paragraph, 2 CTAs (primary + outline), hero mockup img
- [x] A.4 Build ProblemSection: label, H2, paragraph, white CTA
- [x] A.5 Build BenefitsSection: 2-column layout — H2+body+CTA left, 4 benefit cards right (icon, title, body)
- [x] A.6 Build ServicesSection: 3 pricing cards (Landing 200€ / Web Corporativa 350€ featured / Rediseño)
- [x] A.7 Build MethodologySection: 5-step numbered timeline (Auditoría → Estructura y diseño → Copywriting → Desarrollo Técnico → Lanzamiento y Soporte)
- [x] A.8 Build FAQSection: 10 accordion items with data-aos attributes
- [x] A.9 Build FinalCTASection + Footer: WhatsApp CTA; 3-col footer + copyright + legal bar

## Phase B — CSS Global (~400 lines)

- [x] B.1 Write `css/global.css`: `:root` variables (colors, fonts, spacing, gradients), CSS reset, body/base typography
- [x] B.2 Add header styles: sticky nav `.main-header`, flex layout, logo, nav links, dropdown `.nav-dropdown`, hamburger `.nav-hamburger`
- [x] B.3 Add footer styles: 3-column grid `.footer-container`, brand/links columns, legal bar
- [x] B.4 Add CTA component variants: `.cta-primary` (navy pill), `.cta-outline` (navy border), `.cta-white` (white bg)
- [x] B.5 Add card component styles: `.benefits-card` (white card, icon, title, text), `.services-card` (navy bg, badge, pricing)
- [x] B.6 Add FAQ accordion styles: `.faq-item`, `.faq-question` (clickable + chevron), `.faq-answer` (max-height transition)
- [x] B.7 Typography fixes: h1 `line-height: 90%`, h2 `line-height: 90%` + `color: var(--white)`

## Phase C — CSS Home (~350 lines)

- [ ] C.1 Write `css/index.css`: section imports/namespacing, mobile-first base
- [ ] C.2 Style HeroSection: `.hero` radial gradient, badge pill, H2 large, CTA row, mockup responsive
- [ ] C.3 Style ProblemSection: `.problem` navy bg, label accent, white CTA
- [x] C.4 Style BenefitsSection: `.benefits` 2-col grid (text left, 4 cards right), mobile stack
- [ ] C.5 Style ServicesSection: `.services` 3-card grid, featured badge on Corporativa, tachado on original prices
- [x] C.6 Style MethodologySection: `.methodology` 5-step timeline with left border + numbered badges
- [x] C.7 Style FAQSection: `.faq` spacing, accordion open/close states
- [ ] C.8 Style FinalCTASection + Footer responsive stacking
- [ ] C.9 Add responsive breakpoints: 320px (base), 768px (tablet grids), 1024px (desktop), 1400px (max)

## Phase D — JavaScript (~120 lines)

- [ ] D.1 Write `js/global.js`: scroll-based header shrink, hamburger toggle, dropdown hover, smooth scroll for nav links
- [ ] D.2 Write `js/index.js`: FAQ single-open accordion (10 items, smooth max-height transition, no toggle-off), AOS initialization

## Phase E — Polish (~30 lines)

- [ ] E.1 Verify `data-aos` attributes on all animated elements (hero, problem, benefits cards, pricing, timeline steps, FAQ)
- [ ] E.2 Add per-section `data-aos-delay` stagger values for sequential entrance
- [ ] E.3 Verify all CTAs target `wa.me/34692037526?text=...` with pre-filled message
- [ ] E.4 Final audit: zero inline styles, all colors via `var(--*)`, no broken links, responsive at 4 breakpoints
