import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { site } from "../content/site";
import styles from "./Footer.module.css";

/** `note` adds page-specific fine print, such as trademark notices for the brands listed. */
export function Footer({ note }: { note?: string }) {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.row}>
          <Link className={styles.brand} to="/">
            <Logo className={styles.logo} />
            <span>{site.name}</span>
          </Link>
          <nav className={styles.nav} aria-label="Footer">
            <Link to="/wanted">Wanted list</Link>
            <Link to="/#send">Send your list</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </div>
        <p className={styles.fine}>
          {note && `${note} `}
          Brand names and trademarks on this site belong to their owners. {site.name} is an
          independent buyer and is not affiliated with, or endorsed by, the brands whose products it
          buys. © {site.year} {site.name}.
        </p>
      </div>
    </footer>
  );
}
