import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Logo } from "../components/Logo";
import { site } from "../content/site";
import styles from "./Header.module.css";

const links = [
  { to: "/#how", label: "How it works" },
  { to: "/wanted", label: "Wanted list" },
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
          {links.map((link) => {
            // Section links (/#how) would always look "active" on the home page, so only
            // whole pages get NavLink's current-page state.
            const LinkComponent = link.to.includes("#") ? Link : NavLink;
            return (
              <LinkComponent key={link.to} className={styles.navLink} to={link.to} onClick={close}>
                {link.label}
              </LinkComponent>
            );
          })}
          <Link className={`btn btn-holo ${styles.cta}`} to="/#send" onClick={close}>
            Send your list
          </Link>
        </nav>
      </div>
    </header>
  );
}
