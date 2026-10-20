# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Sales, purchasing and export staff at distributors, wholesalers and importers who hold US-market consumer goods, anywhere in the world including the US. Two arrival paths matter equally:

- They receive a cold email from George and open the site to check that Shelfstone is a real buyer before replying.
- They find the site on their own (search, LinkedIn) with no prior contact.

They are B2B trade people judging a counterparty, often reading in a second language, on desktop at work or on a phone between tasks.

## Product Purpose

Shelfstone buys US-market consumer goods (US labelling, US barcode) by UPC from suppliers worldwide, for resale in the US. The site exists so a supplier will:

1. Trust Shelfstone enough to reply.
2. Offer items from the published wanted list (UPC, quantity, case pack, price, best-before date, stock location).
3. Send their full catalog or stock list of US products.

Success is a supplier email with a stock list or an offer.

## Positioning

A small, independent buyer that matches stock by UPC and publishes exactly what it is buying now. One named person to deal with, written offers within two working days, terms agreed in writing before anything ships.

## Operating Context

- Suppliers send lists in any format: Excel, CSV, PDF or a photo of a stock sheet. Templates are offered at `/files/shelfstone-stock-list.xlsx` and `.csv`.
- Contact is by email only (george@shelfstone.com). There are no forms, accounts or logins.
- The wanted list changes over time and carries an "updated" date (`src/content/wanted.ts`).
- Categories: coffee and food, supplements and sports nutrition, pet food and pet care, household cleaning, personal care, confectionery.

## Capabilities and Constraints

- Static React + Vite site on GitHub Pages at https://shelfstone.com/ (domain on Cloudflare DNS). Main is protected; changes go through pull requests with CI.
- Content lives in `src/content/` (site facts, wanted list, home copy).
- Undecided or unknown: George's last name, registered company name, business address. They show as visible placeholders until filled; never invent them.

## Brand Commitments

- Name: Shelfstone. Neutral, international, not tied to one country.
- Voice: plain, factual, trade-like. Not "surplus" or "liquidation" language, nothing that sounds suspicious or salesy.
- Nescafé and Taster's Choice are trademarks of Société des Produits Nestlé S.A.; the site states that Shelfstone is not affiliated with the brands it buys.

## Evidence on Hand

None yet: no real photos of stock or warehouses, no registered company details, no past deals, clients, testimonials or references. Future work must not fabricate any of these, and must not use stock photos presented as Shelfstone's own.

## Product Principles

1. Legitimacy first: every page should answer "is this a real buyer?" with concrete, checkable facts, not claims.
2. Specific over vague: UPCs, sizes, fields and dates beat adjectives.
3. One easy action: email us, with exactly what to include.
4. Honest gaps: unknown facts stay visibly unknown rather than faked.
