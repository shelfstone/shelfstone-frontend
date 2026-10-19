import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
  variant?: "holo" | "ghost";
  children: ReactNode;
  className?: string;
} & (
  { to: string; href?: never; download?: never } | { href: string; to?: never; download?: boolean }
);

/** A link styled as a button: `to` for pages on this site, `href` for files and email. */
export function ButtonLink({ variant = "holo", children, className, ...target }: Props) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");

  if (target.to !== undefined) {
    return (
      <Link className={classes} to={target.to}>
        {children}
      </Link>
    );
  }
  return (
    <a className={classes} href={target.href} download={target.download || undefined}>
      {children}
    </a>
  );
}

export function Arrow() {
  return (
    <span className="mono" aria-hidden="true">
      →
    </span>
  );
}
