# Weekend Itinerary (Wedding)

## What this is
Guest-facing wedding weekend guide — folded schedule / train timetable format with Fri–Sat–Sun tables, travel and dress notes, and a line map. Elliot & Mara sample content pairs with Registry.

## Files
- `index.html` — schedule tables and notes
- `itinerary.css` — sheet layout, day rail, responsive tables
- `print.css` — print layout (hides nav chrome)
- `assets/map-route.svg` — simple route placeholder
- `design-notes.txt` — timetable format reference

## How to edit
- Couple names and dates: `.mast` and each `.day-title`
- Schedule rows: `<table class="schedule">` per day
- Travel, dress, planner contact: `.note-block` sections
- Cross-links: footer and guest note point to registry, RSVP, details
- Map: replace `assets/map-route.svg` or embed a real map image

## How to use
Open `index.html` or host statically. Share as the weekend link in invitations. Print via browser — `print.css` is linked.

## Customisation notes
No hero image, countdown, icon cards, or hamburger nav. Desktop day rail and mobile text strip are the navigation model.

## Accessibility / print / mobile notes
Skip link. Tables collapse to stacked rows on narrow screens. `<time>` elements on schedule times. Print stylesheet removes rail/strip. No JavaScript required.
