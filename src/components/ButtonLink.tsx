import type { ReactNode } from "react";
import { Link } from "react-router";
import { CropMarks } from "./CropMarks";

type Props = {
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & (
  { to: string; href?: never; download?: never } | { href: string; to?: never; download?: boolean }
);

/** A link styled as a button: `to` for pages on this site, `href` for files and email.
 * Primary buttons carry crop marks. */
export function ButtonLink({
  variant = "primary",
  children,
  className,
  onClick,
  ...target
}: Props) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
  const content = (
    <>
      {children}
      {variant === "primary" && <CropMarks />}
    </>
  );

  if (target.to !== undefined) {
    return (
      <Link className={classes} to={target.to} onClick={onClick}>
        {content}
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
      {content}
    </a>
  );
}

export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return <span aria-hidden="true">{direction === "right" ? "→" : "↓"}</span>;
}
