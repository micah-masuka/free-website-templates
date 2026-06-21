# Vantage Strategic Advisors (Business)

## What this is
Institutional consulting memo for a mid-market advisory firm. Single-page document with table of contents, practice areas, and inquiry form — not a marketing landing page.

## Files
- `index.html` — all content and structure
- `styles.css` — layout, typography, memo styling
- `js/inquiry.js` — mobile menu toggle and form demo behaviour
- `assets/firm-mark.svg` — small seal placeholder in the masthead
- `design-notes.txt` — layout and format notes

## How to edit
- Firm name, kicker, and lede: `#opening` in `index.html`
- Practice areas: `#practices` sections
- Partner bios: `#team`
- Inquiry form action and fields: `#inquiry`
- Colours and type: `styles.css` (`--ink`, `--paper`, etc.)

## How to use
Open `index.html` in a browser, or serve the folder locally (`python3 -m http.server` from the template directory). Share the file URL or deploy as static hosting.

## Customisation notes
Keep the memo/document format — avoid hero images, stat strips, or testimonial cards. The TOC sidebar is part of the format; do not replace with a sticky marketing header.

## Accessibility / print / mobile notes
Skip link to main content. Mobile collapses TOC into a Menu button (template-specific, not shared nav script). Form uses native labels. Print: browser default; no dedicated print stylesheet.
