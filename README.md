# Shelfstone website

The website for Shelfstone: we buy US-market consumer goods by UPC from distributors,
wholesalers and importers worldwide. React + TypeScript, built with Vite.

## Run it

```bash
npm install
npm run dev        # local dev server with hot reload
npm run build      # type-check and build into dist/
npm run preview    # serve the built site from dist/
npm run lint       # ESLint
npm run format     # Prettier
```

Node 20 or newer.

## Where things are

| Path                    | What it is                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `src/content/`          | All site text and data: company facts (`site.ts`), the wanted list (`wanted.ts`), home page lists (`home.ts`) |
| `src/pages/`            | The home page (one page: the hero, then sections 01–05, in `src/pages/home/`), privacy and 404                |
| `src/layout/`           | Header (with the phone menu), footer and the shared page layout                                               |
| `src/components/`       | Small reusable pieces: icons, button links, numbered sections, logo, copy button                              |
| `src/styles/tokens.css` | Colours, fonts and type scale                                                                                 |
| `src/styles/global.css` | Base styles and the few shared classes (`.wrap`, `.btn`, `.label`, `.code`, tables)                           |
| `public/files/`         | The stock list template suppliers download (Excel and CSV)                                                    |

Each component keeps its own styles in a `*.module.css` file next to it. The font (Archivo, with
its width axis for the condensed headings) is self-hosted from npm, so no requests go to Google
Fonts.

The look is a printed buying catalog: white stock, black ink and one spot blue used only for
things a visitor can act on and the UPCs we want. The section list in `src/content/sections.ts`
drives the thumb-index tabs and the page number in the running header. `PRODUCT.md`, `DESIGN.md`
and `.impeccable/` hold the design context used by the Impeccable design skill.

## Common edits

- **Wanted list:** edit `src/content/wanted.ts` and update `wantedUpdated`. Section 03 reads from
  it.
- **Hero photo:** put the image in `public/images/` and set `heroFigure.src` in
  `src/content/home.ts` (for example `"/images/warehouse.jpg"`). Until then the site shows a marked-out
  space for it.
- **Company details:** fill `lastName`, `legalName` and `address` in `src/content/site.ts`. While
  they are `null` the site shows highlighted placeholders.
- **Email address:** `email` in `src/content/site.ts`.

## Before launch

- Fill the placeholders in `src/content/site.ts` (George's last name, registered company name,
  business address).
- Add the hero photo (see Common edits).
- Make sure the `george@shelfstone.com` mailbox exists.
- Confirm the promises in the copy: "reply within two working days", "from a few cases to full
  pallets".

## Hosting (GitHub Pages)

Every push to `main` is published by `.github/workflows/deploy.yml`. CI
(`.github/workflows/ci.yml`: lint, format check, type-check, build) runs on every pull request
and on `main`; `main` is protected and only accepts changes through pull requests that pass CI.
New issues are assigned automatically (`.github/workflows/auto-assign.yml`).

- Live at https://shelfstone.com/, with HTTPS enforced. The custom domain is set in the repo's
  Settings → Pages; https://shelfstone.github.io/ and www.shelfstone.com redirect to it.
- DNS is on Cloudflare: four `A` records for `shelfstone.com` (185.199.108.153, .109, .110,
  .111) and a `www` `CNAME` to `shelfstone.github.io`, all **DNS only** (not proxied), so
  GitHub can issue and renew the certificate.
- `dist/404.html` is a copy of `index.html`, so direct visits to `/privacy` work, and the old
  `/wanted` link redirects to the wanted list on the home page.
