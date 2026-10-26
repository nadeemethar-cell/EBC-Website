# EBC public website

A static, Arabic-first bilingual catalog for Ether Building Chemical in Ramadi, Iraq. It uses plain HTML, CSS and JavaScript and can be deployed to ordinary static hosting without a build step. It is the public website application within the EBC Programs repository.

## Site files

- `index.html` — page structure, Arabic-first metadata and organization schema
- `styles.css` — responsive visual system, RTL rules, reduced-motion support and product detail dialog
- `script.js` — bilingual product catalog, search and category filters, per-product options, request cart and email-draft flow
- `assets/ebc-logo.png` — supplied EBC logo
- `assets/products/` — eight supplied product posters

## Before publishing

1. **Set the company inboxes.** Add the real receiving addresses to `ORDER_EMAIL` and `EBC_EMAIL` near the top of the contact/cart logic in `script.js`. Product requests and contact enquiries open the visitor's email application with a prefilled draft; visitors must review and send it. The site does not transmit email, accept payment or store customer details on a server.
2. **Confirm the public contacts.** Verify the Facebook page, phone/WhatsApp numbers, company name spelling, location wording and any contact links before launch. The current page only shows Ramadi, Iraq, as supplied by the owner.
3. **Review product claims.** Product descriptions are based on the supplied posters and linked manufacturer information where available. Confirm them against current technical data sheets and local stock before treating them as final instructions or availability.
4. **Resolve product label mismatches.** The supplied waterproofing poster heading says `OXIPROOF HB`, while the bucket appears to say `OXIPROOF HP`. Confirm the exact product code. DASH BOND and fiberglass mesh tape details come from the supplied posters.
5. **Confirm variants.** The Oxifloor FC200 gray swatches represent shade requests, not confirmed inventory. Confirm color chart and sizes with EBC. Remove or update any option that is not orderable.
6. **Add an official domain.** Replace the social metadata image URL with an absolute URL on the published domain. Add a canonical URL and submit the domain sitemap to search engines after DNS and HTTPS are configured.
7. **Add verified media.** Replace the tutorial placeholder with a real EBC product video and only publish project photos/testimonials approved for public use.
8. Deploy this folder's `index.html`, `styles.css`, `script.js` and full `assets` folder together. Google Fonts are optional; local fallbacks are included.

## Later commerce upgrade

For automatic email delivery and customer confirmations, connect a server-side form/order service or backend. Do not put email provider credentials or secret API keys in these front-end files.
