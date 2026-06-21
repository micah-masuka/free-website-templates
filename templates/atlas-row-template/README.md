# Atlas Row (Architecture)

## What this is
Architecture studio project archive — code index grid and horizontal scroll strips per project with mono dimensions.

## Files
- `index.html` — projects and code index
- `atlas.css` — grid, scroll-snap rows, fixed studio mark
- `assets/project-*.svg` — drawing placeholders
- `design-notes.txt` — monograph format notes

## How to edit
- Studio name: `.studio-mark` and footer
- Project codes and copy: each `.project-row`
- Images: add to `.project-scroll` per project
- Dimensions: `.dims` dl blocks

## How to use
Open `index.html`. Code index anchors jump to projects. Scroll horizontally within each project strip (keyboard-focusable).

## Customisation notes
Horizontal scroll is the primary axis — do not replace with a masonry grid. One text-only project row (D-04) shows format without images.

## Accessibility / print / mobile notes
Skip link, labelled scroll regions, alt text on drawings. Studio mark is decorative. No hamburger nav.
