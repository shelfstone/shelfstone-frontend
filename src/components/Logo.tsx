import { useId } from "react";

/** Three stacked stones on a shelf; the top stone and the shelf carry the foil. */
export function Logo({ className }: { className?: string }) {
  const foilId = useId();
  const foil = `url(#${CSS.escape(foilId)})`;

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={foilId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7af2e0" />
          <stop offset="0.4" stopColor="#a99cff" />
          <stop offset="0.7" stopColor="#ffc3e6" />
          <stop offset="1" stopColor="#ffe6a3" />
        </linearGradient>
      </defs>
      <rect x="7" y="3.5" width="10" height="6" rx="3" fill={foil} />
      <rect x="5" y="11" width="16" height="7" rx="3.5" fill="currentColor" />
      <rect x="3" y="19.5" width="22" height="6" rx="3" fill="currentColor" />
      <rect x="1" y="27.5" width="30" height="2.4" rx="1.2" fill={foil} />
    </svg>
  );
}
