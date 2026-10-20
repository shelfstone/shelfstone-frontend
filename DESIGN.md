---
name: Shelfstone
description: The printed buying catalog of a buyer of US-market consumer goods, matched by UPC.
colors:
  stock: "#ffffff"
  ink: "#111214"
  body: "#2f3236"
  muted: "#5a5f66"
  rule: "#c9cdd2"
  spot: "#005eb8"
  spot-deep: "#00468a"
  spot-tint: "#e8eff8"
  on-spot: "#ffffff"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, min(1rem + 5.2vw, 11vh), 6rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 2.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  code:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.6vw, 1.625rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 68"
    fontFeature: "'tnum'"
  lede:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  label:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
  small:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  row: "2.5rem"
  row-half: "1.25rem"
  row-1-5: "3.75rem"
  row-2: "5rem"
  gutter: "clamp(1rem, 4vw, 4rem)"
  rail: "clamp(9.5rem, 13vw, 12.5rem)"
  wrap: "80rem"
  header-h: "2.75rem"
  tabs: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.on-spot}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.spot-deep}"
    textColor: "{colors.on-spot}"
  button-secondary:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "3.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  button-text:
    textColor: "{colors.spot}"
    padding: "0"
  copy-button:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  copy-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  order-slip:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.on-spot}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.5rem 1.4rem"
  thumb-tab:
    backgroundColor: "{colors.spot-tint}"
    textColor: "{colors.ink}"
    width: "{spacing.tabs}"
  thumb-tab-hover:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.spot}"
  thumb-tab-active:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.on-spot}"
  table-row:
    textColor: "{colors.ink}"
    height: "{spacing.row}"
    padding: "0.55rem 1.25rem 0.55rem 0"
  placeholder-chip:
    backgroundColor: "{colors.spot-tint}"
    textColor: "{colors.spot-deep}"
    rounded: "{rounded.none}"
    padding: "0.1em 0.5em"
---

# Design System: Shelfstone

## Overview

**Creative North Star: "The Edition-Dated Buying Catalog"**

Shelfstone reads as a printed wholesale trade catalog: white coated stock, near-black ink and a single spot blue, laid out as numbered pages under a running header that carries the edition date and the page number. Each page is ruled and tabular. Information is set in item tables, spec sheets and procedure columns, never in floating cards. The visitor turns the pages with the thumb-index tabs fixed to the edge of the screen.

Density is that of a working price list: compact rows on one row unit, tabular figures, condensed uppercase display type set tight, and a workhorse grotesk for running text. Decoration is limited to what print uses: heavy rules, hairlines, solid ink borders, one solid block of spot colour, and an empty plate marked with crossed hairlines where a photograph has not yet been supplied. There are no shadows, no rounded corners and no gradients except the plate's diagonals.

The system turns PRODUCT.md's "specific over vague" and "honest gaps" commitments into visual rules. Codes are the most prominent thing on the page after the headline. Unknown facts appear as tinted placeholder chips and empty plates, and are never replaced with invented content.

**Key Characteristics:**

- White stock, near-black ink, one spot blue, which marks only things a visitor can act on and the codes we want.
- Archivo variable throughout: condensed (wdth 68) heavy uppercase for display and codes, normal width for text.
- Every page sits on one off-centre rail: a left column carrying the folio (page number and name), with all content registered to the rule beside it.
- One row unit (2.5rem) governs table rows, gaps and section rhythm.
- Ruled tables: a 4px ink rule over the block, a 1px ink rule under the head, 1px hairlines between rows.
- Square everything: zero radius, 2px ink borders, no shadows.
- The thumb-index is the signature: tabs fixed to the edge that track scroll, with the current tab filled in spot.

## Colors

A printer's three-ink world: paper, black, and one spot blue held back for action and codes.

### Primary

- **Catalog Spot Blue** (spot): Links, primary buttons, the order slip, the active thumb tab, wanted UPCs, the edition date, the short top bar of the logo, text selection and focus rings. It is the only chromatic ink.
- **Pressed Spot** (spot-deep): The hover state of spot links and buttons, and the text of placeholder chips.
- **Spot Tint** (spot-tint): A 10% screen of spot used as a flat ground: inactive thumb tabs, the wanted-list table head, and placeholder chips. Never used for text.
- **Reversed White** (on-spot): Text, rules and focus outlines inside solid spot areas.

### Neutral

- **Coated Stock** (stock): The page. Every surface is stock; there are no grey panels.
- **Press Black** (ink): Headlines, codes in the folio, all structural rules and borders (2px and 4px), and secondary button outlines.
- **Body Ink** (body): Running text in ledes, step text, footer summary and prose.
- **Quiet Ink** (muted): Asides, footnotes, field names in fact rows, step numbers and category separators.
- **Hairline** (rule): The 1px rules between table rows, steps, fact cells and the plate diagonals.

### Named Rules

**The Spot Means Act Rule.** Spot blue appears only on what a visitor can click or copy (links, buttons, the slip, the email), on wanted codes, and on the edition date. The logo's short bar is the one brand-fixed exception. Body copy, decorative fills and illustration never take spot.

**The One Solid Block Rule.** A page carries at most one solid area of spot: the order slip. Everything else in spot is type, rules or a tab.

## Typography

**Display Font:** Archivo Variable at condensed width (font-stretch 68%), with Archivo, Helvetica Neue and Arial as fallbacks
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** No mono. Codes use condensed Archivo with tabular figures (body-wide `tabular-nums`).

**Character:** One grotesk family pulled to two widths: a condensed, extra-bold uppercase that reads like catalog section heads and price codes, and a plain workhorse width for text that a second-language reader can scan.

### Hierarchy

- **Display** (display): The page's h1 only, set uppercase with each line a deliberate break. Its size also stops growing on short screens (11vh cap).
- **Headline** (headline): Section titles (h2), uppercase and balanced, at most two set lines.
- **Title** (title): Step names, wanted-list group titles and prose subheads.
- **Code** (code): UPCs and other wanted codes in spot, never wrapped.
- **Lede** (lede): The opening paragraph under a title, capped at about 38 to 44rem.
- **Body** (body): Running text, capped at 68ch.
- **Label** (label): Uppercase, letter-spaced: table heads, folio names, field names, the running header, figure captions.
- **Small** (small): Asides, notes and footnotes, usually in quiet ink.

Folio numbers (01 to 05) use condensed 800 at clamp(3rem, 2rem + 2.6vw, 4.5rem) with 0.8 line height; on phones they drop to 2.5rem.

### Named Rules

**The Two Widths Rule.** Condensed 800 uppercase is for headings, codes, buttons, folio numbers and the email address set large. Everything a visitor reads as sentences is normal width at 400 to 500. Do not mix the widths within a line.

**The Tabular Figures Rule.** Figures are tabular everywhere, so codes, sizes and dates line up in columns.

## Layout

The page is a centred wrap (80rem plus gutters of clamp(1rem, 4vw, 4rem)) that leaves room for the thumb-index: 3.5rem down the right edge on wide screens, a 3.25rem bar along the bottom at 900px and below.

Each catalog page is a two-column grid: the rail (clamp(9.5rem, 13vw, 12.5rem)) and the content, separated by a 2px ink rule, under a 2px ink rule across the top. The rail holds the folio: page number, page name and optional aside (an edition stamp, template downloads). Content starts clamp(1.25rem, 2.5vw, 2.5rem) after the rail rule. Inner pages register their prose to the same rail offset, so every page shares one vertical line.

The running header is sticky, 2.75rem tall, a three-part grid (logo and name, edition stamp, email and page number) over a 2px ink rule. Below 1100px the email drops out; below 600px only the logo and the edition remain.

Vertical rhythm uses the row unit (2.5rem): table rows are 1 row (wanted-list rows 1.4), section padding 1 row on top and 2 rows below, blocks separated by 1 to 1.5 rows. Inside blocks the steps are 0.6, 0.75, 1.25 and 1.5rem.

Below 900px the rail becomes a line above the content (a wrapping row of folio items over a hairline), and the side rule goes. Multi-column structures fall back in stages: steps go 4 to 2 to 1, footer columns 4 to 2 to 1, fact rows 3 to 1, and data tables rewrite each row as a stacked grid block rather than scrolling sideways. The cover's action (the order slip) moves before its proof (the table) once the two stack.

## Elevation & Depth

The system is completely flat. Depth is made by ink only: rule weight (4px block rule, 2px structural rule, 1px hairline), solid fills (the slip, the active tab) and tint grounds. The sticky header and the thumb-index sit above the page on a stock background with an ink rule, not a shadow.

### Named Rules

**The Ink Not Light Rule.** No box-shadow, no blur, no translucency. If something must stand forward, give it a heavier rule or a solid fill.

## Shapes

Every corner is square (0px); there is no border-radius anywhere. Borders come in three weights with fixed jobs: a 4px ink rule opens a block (tables, spec sheets, step rows, contact card, footer); a 2px ink rule frames structure (header, page top, rail edge, thumb-index edge, plate, outlined buttons, the edition stamp); a 1px hairline in rule separates rows and cells. The one cut silhouette is the active thumb tab, which projects past the page edge by 0.5rem (0.375rem on the bottom bar) like a cut index tab.

Icons are square-capped line SVGs (arrow right, arrow down, arrow up-right) at a 2.25 stroke, sized 1em to the text and coloured by currentColor.

### Named Rules

**The Three Rules Rule.** 4px opens, 2px frames, 1px separates. Do not add a fourth weight or use a weight outside its job.

## Components

### Buttons

Square, condensed and uppercase, like stamped labels.

- **Shape:** Square corners (0px), 2px border, minimum height 3.25rem.
- **Primary:** Spot fill with reversed white text, condensed 800 at clamp(1.125rem, 1rem + 0.4vw, 1.375rem), letter-spacing 0.02em.
- **Hover / Focus:** Primary deepens to spot-deep; secondary inverts to an ink fill with stock text. Colour transitions take 0.15s ease-out, and press nudges down 1px. Focus is a 2px spot outline offset 3px (reversed white inside the slip).
- **Secondary:** A 2px ink outline on stock, inverting on hover.
- **Text:** A spot label with no box, used beside a primary button (for example "Download the template").
- **Copy:** A small outlined ink button (2.5rem high, condensed 800 at 1rem) beside the email address, inverting on hover.

### Ruled Tables

The catalog's item list.

- **Structure:** A caption or block title over a 4px ink rule, uppercase label heads over a 1px ink rule, rows 1 row unit tall separated by hairlines, the last column right-aligned.
- **Codes:** The UPC column is set in the code style in spot.
- **Wanted variant:** The head row sits on spot tint, rows grow to 1.4 rows with lede-size text, and cells get a 0.75rem inset.
- **Phones:** The head is hidden and each row becomes a grid block (code and size on top, product below).

### Spec Sheet and Fact Rows

A 4px rule over label/value rows: a label column (minimum 8rem) and a value column, with hairlines between rows. Fact rows split into three cells divided by hairlines and stack below 640px.

### Order Slip (signature)

The page's one solid block of spot: a condensed slip title, a short note, the email address set large over a 2px reversed rule with a trailing arrow, and template download links. Selection and focus reverse inside it. The arrow slides 4px on hover (0.2s, cubic-bezier(0.16, 1, 0.3, 1)).

### Navigation: Running Header

Sticky stock bar over a 2px ink rule: the bar logo with the name in letter-spaced uppercase (0.16em), the "Buying list · Edition <date>" stamp with the date in spot, the email with an up-right arrow, and the page number "p. 0N" in label type.

### Navigation: Thumb-Index (signature)

Six tabs (Cover and pages 01 to 05) fixed to the right edge, set vertically, divided by 1px ink rules behind a 2px ink edge. Inactive tabs sit on spot tint; hover turns them stock with spot text; the current tab fills spot with reversed text and projects past the edge. The switch is instant, like a printed tab, with no transition. On short or narrow screens only numbers remain, and at 900px and below the index becomes a bottom bar.

### Edition Stamp

A 2px ink box in the rail carrying a label ("Updated") over the date in condensed 800 at 1.375rem.

### Placeholders

- **Placeholder chip:** An unknown fact (founder's last name, company name, address) shown as a square spot-tint chip with spot-deep text at 0.85em, weight 600.
- **Empty plate:** A 2px ink frame (16:5 on desktop, 4:3 on phones) crossed by two hairline diagonals, with a "Photo — <description>" note in quiet ink on a stock patch, and a "Fig. NN" label caption underneath.

## Do's and Don'ts

### Do:

- **Do** keep spot for clickable things, wanted codes and the edition date, with at most one solid spot block per page.
- **Do** put every page on the rail grid with a folio (number and page name) in the rail, under a 2px ink rule.
- **Do** set lists as ruled tables or spec sheets: 4px opening rule, 1px ink rule under heads, hairlines between rows, rows on the 2.5rem row unit.
- **Do** use condensed Archivo 800 uppercase for headings, codes and buttons, and normal-width Archivo for sentences, with tabular figures throughout.
- **Do** show unknown facts as placeholder chips and missing photographs as empty crossed plates.
- **Do** rewrite tables as stacked row blocks on phones instead of scrolling them sideways.

### Don't:

- **Don't** round corners, add shadows, blurs or gradient fills; depth comes from rule weight and solid ink.
- **Don't** introduce a second accent hue or tint the page background; every surface is white stock.
- **Don't** set content in floating cards or a feature-card grid; use ruled columns under one heavy rule.
- **Don't** put stock photography or invented logos, clients or figures into a plate or chip.
- **Don't** animate the thumb-index tab change; it switches instantly.
