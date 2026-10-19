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
| `src/pages/`            | One component per page; the home page's sections are in `src/pages/home/`                                     |
| `src/layout/`           | Header (with the phone menu), footer and the shared page layout                                               |
| `src/components/`       | Small reusable pieces: logo, barcode, button links, copy button, page header                                  |
| `src/styles/tokens.css` | Colours, fonts and type scale for the dark (default) and light themes                                         |
| `src/styles/global.css` | Base styles and the few shared classes (`.wrap`, `.btn`, `.eyebrow`, tables)                                  |
| `public/files/`         | The stock list template suppliers download (Excel and CSV)                                                    |

Each component keeps its own styles in a `*.module.css` file next to it. Fonts (Unbounded,
Geist, Geist Mono) are self-hosted from npm, so no requests go to Google Fonts.

## Common edits

- **Wanted list:** edit `src/content/wanted.ts` and update `wantedUpdated`. The home page label,
  the ticker and the wanted page all read from it.
- **Company details:** fill `lastName`, `legalName` and `address` in `src/content/site.ts`. While
  they are `null` the site shows yellow placeholders.
- **Email address:** `email` in `src/content/site.ts`.

## Before launch

- Fill the placeholders in `src/content/site.ts` (George's last name, registered company name,
  business address).
- Make sure the `george@shelfstone.com` mailbox exists.
- Confirm the promises in the copy: "reply within two working days", "from a few cases to full
  pallets".

## Hosting (Cloudflare Pages)

Connect this repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git:

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `20` (or newer)

Then add the custom domain `shelfstone.com`. Pages serves `index.html` for every path, so the
`/wanted` and `/privacy` routes work on direct visits too.
