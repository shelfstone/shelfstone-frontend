/** The catalog's pages, in order. The thumb-index and the running header read from this. */
export const sections = [
  { id: "top", number: null, label: "Cover", tab: "Cover" },
  { id: "how", number: "01", label: "How it works", tab: "How" },
  { id: "look-for", number: "02", label: "What we look for", tab: "Look for" },
  { id: "wanted", number: "03", label: "Wanted list", tab: "Wanted" },
  { id: "send", number: "04", label: "Send your list", tab: "Send" },
  { id: "about", number: "05", label: "About us", tab: "About" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
