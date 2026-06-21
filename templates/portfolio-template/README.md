# Tariro Moyo (Portfolio)

## What this is
Editorial designer portfolio — fixed left rail, asymmetric project blocks, wireframe stills. Case-study tone without fake metrics. Sample client based in Harare.

## Files
- `index.html` — masthead and three project entries
- `css/site.css` — rail, grid, frame styling
- `js/rail.js` — mobile Index drawer
- `assets/frame-*.svg` — project-specific UI wireframe placeholders
- `design-notes.txt` — editorial layout notes

## How to edit
- Name and discipline: `.mast` in `index.html`
- Each project: title, year, copy, and image in `.project--a/b/c`
- Replace SVGs with real case stills; keep the 2px inset frame
- Email link: `rail-links` and drawer
- Spacing and type: `css/site.css`

## How to use
Open `index.html` locally or deploy statically. Rail anchors jump to `#projects` and `#info`.

## Customisation notes
Do not add a hero grid of logos or testimonial sliders. Projects should stay asymmetric — not three equal cards.

## Accessibility / print / mobile notes
Skip link. Rail drawer uses `aria-expanded`. Project images need descriptive `alt` when swapped for photos. No print stylesheet.
