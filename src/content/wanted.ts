export type WantedItem = {
  upc: string;
  product: string;
  size: string;
};

export type WantedGroup = {
  title: string;
  note: string;
  items: WantedItem[];
};

/** The wanted list. Update `wantedUpdated` whenever the items change. */
export const wantedUpdated = "19 Oct 2026";

export const wantedGroups: WantedGroup[] = [
  {
    title: "Instant coffee · Nescafé and Taster's Choice",
    note: "Glass jars, US labels",
    items: [
      { upc: "2800066678", product: "Nescafé Gold Espresso", size: "3.5 oz" },
      { upc: "2800018429", product: "Nescafé Colombia", size: "6 oz" },
      { upc: "2800046631", product: "Nescafé Clásico", size: "7 oz" },
      { upc: "2800055360", product: "Taster's Choice French Roast", size: "7 oz" },
      { upc: "2800059393", product: "Taster's Choice House Blend", size: "7 oz" },
    ],
  },
];

export const allWantedItems: WantedItem[] = wantedGroups.flatMap((group) => group.items);

/** Trademark notices for the brands on the wanted list, shown in the footer. */
export const wantedTrademarks =
  "Nescafé and Taster's Choice are trademarks of Société des Produits Nestlé S.A.";
