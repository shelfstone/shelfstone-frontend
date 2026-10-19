import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonLink } from "../components/ButtonLink";
import { Logo } from "../components/Logo";
import { site } from "../content/site";
import styles from "./Header.module.css";

const links = [
  { to: "/#how", label: "How it works" },
  { to: "/#wanted", label: "Wanted list" },
  { to: "/#about", label: "About" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link className={styles.brand} to="/" onClick={close}>
          <Logo className={styles.logo} />
          <span>{site.name}</span>
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={styles.menuIcon} data-open={menuOpen} aria-hidden="true" />
        </button>

        <nav id="site-nav" className={styles.nav} data-open={menuOpen} aria-label="Main">
          {links.map((link) => (
            <Link key={link.to} className={styles.navLink} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
          <ButtonLink className={styles.cta} to="/#send" onClick={close}>
            Send your list
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
