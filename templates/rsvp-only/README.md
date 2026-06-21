# RSVP Only (Wedding)

## What this is
Single-purpose digital reply card — attendance, meal, dietary, song request. Feels like the enclosure in a wedding invitation envelope. Elliot & Mara sample content.

## Files
- `index.html` — reply card form
- `reply.css` — centred card layout
- `print.css` — hides submit button for paper backup
- `js/reply.js` — builds `mailto:` query string on submit
- `assets/monogram.svg` — small E·M monogram
- `design-notes.txt` — reply card format

## How to edit
- Couple names and deadline: `.card-head`
- Form fields and meal options: `.reply-form`
- Email recipient: `action` on form and `reply.js` (`rsvp@example.com`)
- Fallback copy: `.card-fallback`
- Links to registry and schedule: bottom of card

## How to use
Open `index.html` and share the URL. Submit opens the visitor’s email client with pre-filled body (demo). Replace with a form backend (Formspree, etc.) for production.

## Customisation notes
No nav, hero, marketing sections, script fonts, or pill CTAs. Keep the single centred card.

## Accessibility / print / mobile notes
Native form controls with legends and labels. Required fields marked. Print stylesheet shows form without submit button. Works without JS via plain `mailto:` POST (less polished).
