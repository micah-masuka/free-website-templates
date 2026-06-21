# Elliot & Mara (Registry)

## What this is
Wedding gift catalogue — ruled rows, featured items, numbered experiences, honeymoon fund tiers, and charity block. Pairs with Weekend Itinerary and RSVP Only (same couple, different formats).

## Files
- `index.html` — gift list and couple note
- `details.html` — ceremony, travel, stay, RSVP pointer
- `registry.css` — catalogue layout, margin index
- `print.css` — print-friendly gift list
- `js/reserve.js` — demo “Reserve” toggle on two items
- `assets/` — monogram and line-drawn object SVGs
- `design-notes.txt` — stationery catalogue reference

## How to edit
- Couple names, date, note: masthead and `#note` in `index.html`
- Gifts: add `.catalogue-row` or `.featured-gift` entries per category
- Reserve demo: `data-reserve` on action links (lamp and plates by default)
- Honeymoon tiers and charities: `#honeymoon`, `#charities`
- Links to RSVP and schedule: footer and `details.html`
- Shipping address: `<details>` in `.enclosure`

## How to use
Open `index.html` for the registry; `details.html` for ceremony info. Link guests to `../rsvp-only/index.html` for replies and `../weekend-itinerary/index.html` for the full schedule.

## Customisation notes
Keep the catalogue row format — no ecommerce product grid or glossy thumbnails. Use quiet SVG placeholders or none. Only 1–2 reserved-state examples.

## Accessibility / print / mobile notes
Skip link, semantic sections. Margin index on desktop; text strip on mobile. `print.css` hides nav chrome. Reserve toggle is JS-enhanced; links still work without it.
