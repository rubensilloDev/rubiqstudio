# Home Specification

## Purpose

RubiqStudio Home is a single-page B2B conversion funnel in vanilla HTML5+CSS3+JS. Every section drives visitors toward WhatsApp contact at `wa.me/34692037526`.

## Requirements

### R1: Hero Banner

The hero MUST render a full-width radial gradient, badge "DISEÑO WEB EN CÓRDOBA", H2 subtitle, body text, two CTAs (navy pill + outline), and a laptop mockup below.

- **Happy path**: GIVEN a 1400px viewport, WHEN the page loads, THEN the badge MUST be visible, the H2 MUST read "¿QUIERES UNA WEB QUE TE GENERE CLIENTES EN AUTOMÁTICO?", AND both CTAs MUST target `wa.me/34692037526`.
- **Edge**: GIVEN a 320px viewport, WHEN the hero renders, THEN the mockup MUST scale proportionally without overflow AND CTAs MUST stack vertically.

### R2: Value Proposition

The problem section MUST render on navy (`#0A192F`) background with accent label, H2, body, and a white CTA to WhatsApp.

- **Happy path**: GIVEN the problem section scrolls into view, WHEN AOS triggers, THEN the CTA MUST link to the WhatsApp URL.
- **Edge**: GIVEN a 320px viewport, WHEN the section renders, THEN content MUST fit without horizontal scroll.

### R3: Benefits Grid

The system MUST render a 2-column section: left column with H2 + body + CTA, right column with 4 stacked cards (Estrategia, Rendimiento, Transparencia, Enfoque en ventas). Each card MUST display an icon, Anton title, and description.

- **Happy path**: GIVEN a desktop viewport, WHEN the benefits section loads, THEN cards MUST display in a single right column beside the text.
- **Edge**: GIVEN a mobile viewport, WHEN the section renders, THEN cards MUST stack below the text in a single column.

### R4: Service Pricing

The system MUST render 3 pricing cards on navy bg: Landing (~~300€~~→200€), Web Corporativa (350€ with "MÁS ELEGIDO" badge), Rediseño Web. Mantenimiento mention MUST appear below cards.

- **Happy path**: GIVEN the pricing section is visible, WHEN inspecting the Corporativa card, THEN it MUST display the badge AND visually differ (accent border or scale).
- **Edge**: GIVEN 320px viewport, WHEN cards render, THEN they MUST stack vertically AND prices MUST remain legible.

### R5: Methodology Timeline

The system MUST render a 5-step numbered process: Auditoría, Estructura y diseño, Copywriting, Desarrollo Técnico, Lanzamiento y Soporte. Each step SHALL show a numbered badge, title, and description with a connecting line.

- **Happy path**: GIVEN a desktop viewport, WHEN the section scrolls in, THEN all 5 steps MUST be visible in sequence with connecting line.
- **Edge**: GIVEN a mobile viewport, WHEN the timeline renders, THEN steps MUST stack vertically AND the line MUST remain visible.

### R6: FAQ Accordion

The system MUST render a single-open accordion with 10 items. Clicking an item SHALL expand it with smooth height transition; clicking another SHALL collapse the previous.

- **Happy path**: GIVEN 10 items visible, WHEN user clicks item 3, THEN it expands smoothly. WHEN user clicks item 5, THEN item 3 collapses AND item 5 expands.
- **Edge**: GIVEN no item is open, WHEN user clicks an item, THEN it MUST expand (no toggle-off when alone).

### R7: WhatsApp CTA

All CTAs MUST link to `wa.me/34692037526` with pre-filled message parameter. The contact form MUST trigger WhatsApp on submit, not server-side POST.

- **Happy path**: GIVEN any CTA button, WHEN clicked, THEN the browser MUST open `wa.me/34692037526?text={encoded-message}`.
- **Edge**: GIVEN the contact form, WHEN submitted, THEN it MUST open the WhatsApp URL (no backend submission).

## Navigation

The sticky header MUST render Inicio, Servicios ▼ (dropdown with items), Agencia, Contacto links and a "HABLEMOS por whatsapp" CTA button. The header SHALL remain fixed on scroll.

## Tech Constraints

- Zero inline `style` attributes
- All colors from `:root` CSS variables
- Mobile-first: 320 / 576 / 768 / 1024 / 1200 / 1400px
- Google Fonts: Anton + Inter (CDN)
- Font Awesome 6 (CDN)
- AOS 2.3.4+ (CDN)
