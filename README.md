# Ether Building Chemical (EBC) product showcase

A responsive, Arabic-first bilingual (Arabic/English) static HTML/CSS/JavaScript site that can be uploaded to a standard web host. Visitors can use the language switch in the header; the preference is remembered in their browser.

## Files

- `index.html` — page content and product catalog
- `styles.css` — responsive layout, visual design and motion
- `script.js` — bilingual product data and per-product option lists, mobile navigation, live catalog search/filters, cart and email request flow
- `assets/ebc-logo.png` — supplied EBC logo
- `assets/products/` — eight product posters supplied for the catalog

## Before publishing

1. Product cards are populated in the `products` array in `script.js`; update the names, descriptions and image filenames there when the catalog changes. The displayed technical details were transcribed from the supplied posters and should be checked against current product datasheets before publication.
2. Add confirmed `colors` and `sizes` arrays only on the product entries that offer those choices. Each card stores its own selected options, and checkout includes them with the requested quantity. The Oxifloor FC200 color swatches are sample shade preferences; EBC should confirm the final color chart/availability.
3. Set `ORDER_EMAIL` and `EBC_EMAIL` in `script.js` to the company inboxes that should receive product requests and general enquiries. Checkout opens a prefilled email draft in the customer's mail app; it does not silently send mail or collect payment. A server-side service can replace this prototype later.
4. Replace the tutorial spotlight with a real video URL when available.
5. Check the location wording and contact details you want displayed. The current page uses Ramadi, Iraq, as provided in the request.
6. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder together to your web host.

The page uses Google Fonts when online and falls back to system fonts. No build step is required.

Product code note: the supplied waterproofing poster heading reads `OXIPROOF HB`, while the bucket label appears to read `OXIPROOF HP`. The site uses the poster heading; confirm the exact name before publication. OXI product descriptions link to Al Majara/Oxichemicals product information where available; the DASH BOND and fiberglass mesh tape details are based on the supplied posters.
