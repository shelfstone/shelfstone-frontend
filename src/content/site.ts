/** Company facts used across the site. Fields set to `null` are not known yet: the site shows
 * them as highlighted placeholders, so they are easy to spot before launch. */
export const site = {
  name: "Shelfstone",
  email: "george@shelfstone.com",
  founder: { firstName: "George", lastName: null as string | null },
  company: { legalName: null as string | null, address: null as string | null },
  replyTime: "Within two working days",
  year: 2026,
} as const;

export const templateFiles = {
  xlsx: "/files/shelfstone-stock-list.xlsx",
  csv: "/files/shelfstone-stock-list.csv",
} as const;

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
