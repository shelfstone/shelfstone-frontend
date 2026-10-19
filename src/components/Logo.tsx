/** Three stacked bars, a shelf of stock: a short accent bar on two full ones. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 36" aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="22" height="9" fill="var(--accent)" />
      <rect x="0" y="13" width="40" height="9" fill="currentColor" />
      <rect x="0" y="26" width="40" height="9" fill="currentColor" />
    </svg>
  );
}
