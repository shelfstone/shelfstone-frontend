# Shelfstone website

Static site (plain HTML + CSS, no build step) for Shelfstone: we buy US-market consumer
goods by UPC from distributors, wholesalers and importers worldwide.

| File | What it is |
|---|---|
| `index.html` | Home: what we buy, two ways to work with us, how it works, what to send, about/contact |
| `wanted.html` | The current wanted list, by UPC |
| `privacy.html` | How we use business contact details (needed for outreach in the EU/UK) |
| `assets/styles.css` | All styles; colours and fonts are tokens at the top (light and dark mode) |
| `assets/files/shelfstone-stock-list.xlsx` / `.csv` | Stock list template suppliers can fill in |

## Before launch
- Fill the highlighted placeholders (yellow): George's last name, registered company name,
  business address (index.html About card and privacy.html). Then delete the `.todo` rule.
- Confirm the email address (`george@shelfstone.com`) once the mailbox exists.
- Confirm promises in the copy: "reply within two working days", "from a few cases to full pallets".
- Update the wanted list (`wanted.html` and the "Wanted now" card on `index.html`) and its date.

## Preview locally
    python3 -m http.server 8765    # then open http://localhost:8765

## Hosting
Cloudflare Pages (free): connect the GitHub repo, no build command, output directory `/`,
then add the custom domain shelfstone.com.
