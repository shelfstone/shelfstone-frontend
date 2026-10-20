import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & (
  { to: string; href?: never; download?: never } | { href: string; to?: never; download?: boolean }
);

/** A link styled as a button: `to` for pages on this site, `href` for files and email. */
export function ButtonLink({
  variant = "primary",
  children,
  className,
  onClick,
  ...target
}: Props) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");

  if (target.to !== undefined) {
    return (
      <Link className={classes} to={target.to} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a
      className={classes}
      href={target.href}
      download={target.download || undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
