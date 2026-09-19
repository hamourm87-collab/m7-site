# Michel Salon Manama — review-only preview

Static client preview for **Michel Salon (ميشيل صالون)** in Manama, Bahrain.

This folder is a **review-only** mock. It is not published, has no backend, and has **no forms that send data**. The WhatsApp number `+973 0000 0000` is a labeled **PLACEHOLDER**. Hours are an example of common Bahrain salon hours and must be confirmed.

## Open locally

From this folder:

```bash
# Option 1 — open the file directly
open index.html
# Windows: start index.html
# Linux: xdg-open index.html
```

Or serve the folder (useful if a browser blocks some local font requests):

```bash
python3 -m http.server 8080
```

Then open:

`http://localhost:8080/`

Files:

- `index.html` — page structure (Arabic RTL primary)
- `styles.css` — Soft UI Evolution styles
- `app.js` — language toggle, mobile menu, WhatsApp message text

## What to review

- Arabic RTL layout (default), optional English toggle in the header
- Mobile-first sections: Hero, Services, Gallery placeholders, Team placeholders, WhatsApp booking CTA, Location & contact
- Map control opens a search for **Michel Salon Manama**
- Touch targets, focus rings, and `prefers-reduced-motion` are included

Do not treat this preview as a live booking site.
