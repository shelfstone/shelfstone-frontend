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
| `src/components/`       | Small reusable pieces: crop marks, button links, numbered sections, logo, copy button                         |
| `src/styles/tokens.css` | Colours, fonts and type scale                                                                                 |
| `src/styles/global.css` | Base styles and the few shared classes (`.wrap`, `.btn`, `.label`, `.frame`, tables)                          |
| `public/files/`         | The stock list template suppliers download (Excel and CSV)                                                    |

Each component keeps its own styles in a `*.module.css` file next to it. Fonts (Barlow and
Barlow Condensed) are self-hosted from npm, so no requests go to Google Fonts.

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

- Live at https://shelfstone.github.io/ (the repo is named `shelfstone.github.io`, so GitHub
  serves it from the root).
- To move to a custom domain such as shelfstone.com: add the domain in the repo's Settings →
  Pages and point its DNS at GitHub Pages. No code change is needed.
- `dist/404.html` is a copy of `index.html`, so direct visits to `/privacy` work, and the old
  `/wanted` link redirects to the wanted list on the home page.
