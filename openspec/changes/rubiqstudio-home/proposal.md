# Proposal: rubiqstudio-home

## Intent

Build the Home page (index.html) for RubiqStudio — a web development agency in Córdoba, Spain — as a B2B conversion funnel. Every section drives visitors toward WhatsApp contact (+34 692 03 75 26). The page must communicate authority, transparency, and a sales-engine approach vs. "pretty websites."

## Scope

### In Scope
- `index.html` with 9 sections + sticky header + footer
- Modular CSS (vanilla, mobile-first, zero inline styles)
- JS for: hamburger menu, dropdown hover, FAQ accordion, AOS init, smooth scroll
- Responsive: 320px – 1400px
- WhatsApp-driven CTAs on all buttons

### Out of Scope
- Inner pages (Agencia, Contacto, Servicios, Mantenimiento)
- Form backend/validation logic
- Blog or CMS integration

## Capabilities

### New Capabilities
- `hero-banner`: Full-viewport hero with radial gradient bg, badge, H1, subtitle, 2 CTAs, mockup image below
- `value-proposition`: Navy section — problem statement + white CTA
- `benefits-grid`: 2-column layout — text left, 4 stacked white cards right with accent icons
- `service-pricing`: 3 pricing cards (navy bg) with featured badge on Corporativa, tachado effect on prices
- `methodology-timeline`: 5-step numbered timeline with left border + numbered badges
- `faq-accordion`: 10-item single-open accordion with smooth height transition
- `whatsapp-cta`: Final CTA section with laptop mockup image + WhatsApp link

### Modified Capabilities
None — this is a new build, no existing specs.

## Approach

Vanilla HTML5 + CSS3 + JS with zero external frameworks. Modular CSS: `variables.css`, `base.css`, `header.css`, `hero.css`, `sections.css`, `footer.css`, `responsive.css`. AOS for scroll-triggered animations. Font Awesome for icons. Google Fonts: Anton (titles) + Inter (body). All colors from `:root` CSS custom properties. Mobile-first with breakpoints at 576px, 768px, 1024px, 1200px.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` | New | Full home page with 9 sections |
| `css/variables.css` | New | :root variables for colors, fonts, spacing |
| `css/base.css` | New | Reset, typography, utility classes |
| `css/header.css` | New | Sticky nav, hamburger, dropdown |
| `css/hero.css` | New | Radial gradient, badge, H1, mockup |
| `css/sections.css` | New | Problem, benefits, services, methodology, FAQ, CTA |
| `css/footer.css` | New | 3-column footer, legal bar |
| `css/responsive.css` | New | All media queries |
| `js/main.js` | New | Menu toggle, dropdown, accordion, AOS init |
| `img/` | Uses existing | 4 images from `Desarrollo de la web/img/` |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Figma is desktop-only, mobile extrapolation needed | Med | Mobile-first approach; review at 320px/576px/768px |
| 10 FAQ items = scroll-heavy section | Low | accordion keeps it compact; position near bottom |
| Radial gradient CSS warning in Figma | Low | Use standard gradient syntax; test in Chrome/Firefox |

## Rollback Plan

This is a new file deployment. Rollback = delete `index.html`, all new `css/` and `js/` files. Site returns to blank state.

## Dependencies

- Font Awesome 6 (CDN)
- AOS 2.3.4+ (CDN)
- Google Fonts: Anton + Inter (CDN)
- Existing images in `Desarrollo de la web/img/`

## Success Criteria

- [ ] All CTAs link to `wa.me/34692037526` with pre-filled message
- [ ] No inline `style` attributes anywhere in HTML
- [ ] Every color uses a `var(--*)` from `:root`
- [ ] AOS animations trigger correctly on scroll
- [ ] Fully responsive: tested at 320px, 576px, 768px, 1024px, 1200px, 1400px
- [ ] Lighthouse score ≥ 90 for Performance and Accessibility (desktop)
