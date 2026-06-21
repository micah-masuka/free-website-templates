# Relay (Landing Page)

## What this is
Hardware product waitlist letter — single-column editorial layout for a field recorder aimed at technicians. Format is a product brief, not a SaaS landing page.

## Files
- `index.html` — letter sections, comparison table, FAQ, waitlist form
- `styles.css` — typography and device figure styling
- `js/waitlist.js` — waitlist form demo handler
- `assets/device-outline.svg` — wireframe product placeholder
- `design-notes.txt` — launch letter format

## How to edit
- Product name, serial line, headline: `.letter` header in `index.html`
- Spec list and comparison table: sections `01`–`03`
- FAQ: `<details>` blocks near the bottom
- Waitlist form: `#waitlist` — point `action` to your backend or keep as demo
- Device image: swap `assets/device-outline.svg` for product photography

## How to use
Open `index.html` or host statically. Primary CTA scrolls to `#waitlist`. Share as a single URL.

## Customisation notes
Avoid feature icon cards, gradient heroes, and fake social proof. The numbered chunks and comparison table are the structure — keep them.

## Accessibility / print / mobile notes
Skip link, semantic article/sections. FAQ uses native `<details>`. Form fields are labelled. No dedicated print CSS. Mobile: single column, readable 17px body.
