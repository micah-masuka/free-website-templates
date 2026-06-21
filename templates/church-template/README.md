# Riverside Fellowship (Church)

## What this is
Community church bulletin — pin note, polaroid hero, full-width gathering bands, and visit information. Photography-led but uses a line-drawn placeholder until real photos are supplied.

## Files
- `index.html` — page content
- `css/site.css` — banner, bands, polaroid, events
- `js/sheet.js` — mobile menu sheet toggle
- `assets/congregation-line.svg` — sanctuary placeholder illustration
- `design-notes.txt` — bulletin format notes

## How to edit
- Church name, service times, pin note: header and `.pin-note`
- Hero image: replace `assets/congregation-line.svg` with a photo (keep polaroid frame CSS)
- Events and gatherings: `#events`, `#gatherings`
- Visit / directions: `#visit`
- Colours: warm neutrals in `css/site.css`

## How to use
Open `index.html` locally or deploy the folder statically. One page; anchor links for sections.

## Customisation notes
Do not add a SaaS-style hero with CTA pill. Keep the bulletin rhythm: pin → photo → intro → bands. Banner menu is intentional for mobile, not a generic hamburger component library.

## Accessibility / print / mobile notes
Skip link, semantic landmarks, `tel:` links for contact. Menu button toggles `aria-expanded`. Images need meaningful `alt` when replaced. No print stylesheet.
