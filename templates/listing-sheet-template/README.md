# Listing Sheet (Property)

## What this is
Estate agent particulars for a residential sale — address, stats strip, description, vertical image stack, room table, and fixed agent card.

## Files
- `index.html` — property content
- `listing.css` — layout and stats strip
- `assets/*.svg` — line-drawn plan and elevation placeholders
- `design-notes.txt` — format reference

## How to edit
- Address, price, stats: header and `.stats-strip`
- Description and room table: `#description`, `#rooms`
- Images: replace SVGs in `assets/` or swap `src` paths
- Agent card: `.agent-card` sidebar (desktop)
- Viewing mailto: agent links with subject line

## How to use
Open `index.html` locally or deploy statically. Agent card appears on wide screens; mobile users use footer contact.

## Customisation notes
Data-first layout — no hero CTA or mortgage widgets. Keep the stats strip tabular.

## Accessibility / print / mobile notes
Skip link, semantic `dl` for stats, table headers for rooms. Agent card hidden on narrow viewports — footer has contact. No print CSS.
