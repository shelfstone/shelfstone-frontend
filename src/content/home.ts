/** The photo under the hero. Until `src` is set, the site shows a marked-out space for it. */
export const heroFigure = {
  src: null as string | null,
  alt: "pallets or shelved US goods in a warehouse",
  caption: "From a few cases to full pallets",
};

export const categories = [
  "Coffee and food",
  "Supplements and sports nutrition",
  "Pet food and pet care",
  "Household cleaning",
  "Personal care",
  "Confectionery",
];

export const criteria = [
  { label: "Barcode", text: "The UPC on the pack matches the US-market product." },
  { label: "Labels", text: "Original US labels in English, sealed and undamaged." },
  {
    label: "Dates",
    text: "A clear best-before or expiry date. Short-dated stock is welcome if the date is stated.",
  },
  { label: "Quantity", text: "From a few cases to full pallets." },
  {
    label: "Location",
    text: "Anywhere in the world, including the US. We agree collection or shipping for each order.",
  },
];

export const steps = [
  { title: "You send a list", text: "Your catalog, a stock sheet, or a reply to our wanted list." },
  {
    title: "We make an offer",
    text: "Within two working days: the items we want, quantities and price.",
  },
  {
    title: "We agree terms",
    text: "Price, payment and shipping are confirmed in writing before anything moves.",
  },
  { title: "Goods move", text: "Stock is collected or shipped and paid for as agreed." },
];

/** What a supplier's stock list should contain. The example row is illustrative. */
export const listFields = [
  { field: "UPC", why: "Identifies the exact US-market item", example: "2800055360" },
  {
    field: "Product and size",
    why: "Checks the UPC against the pack",
    example: "Taster's Choice French Roast 7\u00a0oz",
  },
  { field: "Case pack", why: "Units per case", example: "12 jars" },
  { field: "Quantity", why: "How much is available now", example: "40 cases" },
  { field: "Price", why: "Per case, with currency", example: "USD 54.00 / case" },
  { field: "Best-before date", why: "Shelf life left on the stock", example: "03/2027" },
  { field: "Stock location", why: "Where the goods are held", example: "Rotterdam, NL" },
  { field: "Country of origin", why: "As printed on the pack", example: "Made in USA" },
  { field: "Photos", why: "Front and back of one pack", example: "2 photos" },
];
