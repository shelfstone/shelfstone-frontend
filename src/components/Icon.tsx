const paths = {
  "arrow-right": "M3 12h17M14 6l6 6-6 6",
  "arrow-down": "M12 3v17M6 14l6 6 6-6",
  "arrow-up-right": "M6 18 18 6M8 6h10v10",
} as const;

export type IconName = keyof typeof paths;

/** Square-capped line icons, one stroke weight, sized to the surrounding text. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
