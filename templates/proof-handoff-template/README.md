# Proof Handoff (Photography)

## What this is
Client proof delivery page — cover letter, password-gated download demo, contact-sheet grid, favourites table. For photographers, not a marketing portfolio.

## Files
- `index.html` — letter, grid, favourites
- `handoff.css` — envelope layout
- `js/proof.js` — password unlock demo (`nair-0503`)
- `assets/thumb.svg` — proof thumbnail placeholder
- `design-notes.txt` — delivery envelope format

## How to edit
- Client names and shoot details: `.letter`
- Password and download URL: `proof.js` and `#download-link`
- Grid filenames: `.grid` list items
- Favourites table: `.fav-table` rows

## How to use
Open `index.html`. Enter demo password to reveal download link. Replace zip URL and password logic with your gallery host (Pixieset, etc.).

## Customisation notes
Not a portfolio — no hero gallery or pricing. Letter tone is direct and contractual.

## Accessibility / print / mobile notes
Skip link, labelled form for password. Table stacks on mobile. Thumbnails are decorative placeholders — add real `alt` if using photos.
