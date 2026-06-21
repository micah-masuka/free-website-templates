# Ember & Oak (Restaurant)

## What this is
Bistro menu sheet — cover image, dot-leader menu, kitchen note, hours. Dark sheet over hearth cover; phone reservation only.

## Files
- `index.html` — menu sections and hours
- `css/site.css` — cover, mast, dot leaders
- `assets/hearth-line.svg` — hearth cover placeholder
- `design-notes.txt` — menu insert format

## How to edit
- Restaurant name, city, phone: `.mast` in `index.html`
- Menu items and prices: `.menu` sections — keep dot-leader markup
- Cover photo: replace `assets/hearth-line.svg`
- Hours and kitchen note: `#hours`, `#kitchen`
- Colours: dark `#1a1816` sheet variables in CSS

## How to use
Open `index.html` locally or deploy statically. `tel:` link for reservations. Jump links scroll to menu sections.

## Customisation notes
No sticky nav bar or online ordering widget. The overlapping sheet on the cover is intentional — do not flatten into a generic restaurant homepage.

## Accessibility / print / mobile notes
Skip link to menu. Phone link is primary action. Cover image needs meaningful `alt` when replaced. Menu readable on small screens; no hamburger. No print CSS (menu could be added if needed).
