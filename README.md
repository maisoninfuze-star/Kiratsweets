# Kirat Sweets & Snacks — Website

Bilingual (FR/EN) website for **Kirat Sweets & Snacks** (*Sucreries et Collations Kirat*), an authentic Indian sweets (mithai) & snacks shop in Chomedey, Laval, QC.

🍬 4,8★ on Google · Fresh handmade mithai, samosas, namkeen & festive gift boxes.

## Business

- **Address:** 3477 Bd Cartier O, Laval, QC H7V 3T4 (Chomedey)
- **Phone:** (450) 682-7774
- **Email:** kirat.sucrerie.collation@gmail.com
- **Hours:** Every day · 10 h – 20 h 30
- **Social:** [Facebook](https://www.facebook.com/p/Sucreries-et-Collations-Kirat-61559003906691/) · [Instagram](https://www.instagram.com/sweetc_kirat/)

## Stack

Static site — no build step.

- Vanilla HTML / CSS / JS
- [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll + IntersectionObserver reveals
- Bilingual FR/EN via a JS dictionary (`js/i18n.js`), French default, persisted in `localStorage`
- Fonts: Fraunces + Hanken Grotesk (Google Fonts)
- Imagery generated with fal.ai (`generate_images.py`, flux/dev) → `assets/img/`

## Run locally

```bash
node server.mjs
# → http://localhost:8251/
```

Add `?nolenis` to the URL to disable smooth scroll while debugging.

## Structure

```
index.html          # single-page site (hero, story, menu, catering, visit)
css/styles.css      # design system + responsive layout
js/i18n.js          # FR/EN dictionary + language toggle
js/main.js          # smooth scroll, reveals, nav, menu tabs
assets/img/         # fal.ai-generated dish photography
generate_images.py  # image generation script (needs FAL_KEY env var)
RESEARCH.md         # business/brand research brief
```

## Notes

Menu items are structured with **placeholder prices** (marked *"Prix indicatifs"*) pending the client's actual menu and pricing. Logo and real product photos to be swapped in when provided.
