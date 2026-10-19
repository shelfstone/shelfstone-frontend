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

/** Files in public/, prefixed with the base path the site is served from. */
const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const templateFiles = {
  xlsx: publicFile("files/shelfstone-stock-list.xlsx"),
  csv: publicFile("files/shelfstone-stock-list.csv"),
} as const;

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
