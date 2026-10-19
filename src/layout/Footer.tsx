import { Link } from "react-router";
import { site } from "../content/site";
import { wantedTrademarks } from "../content/wanted";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.row}>
          <Link className={styles.brand} to="/">
            {site.name}
          </Link>
          <nav className={styles.nav} aria-label="Footer">
            <Link to="/#wanted">Wanted list</Link>
            <Link to="/#send">Send your list</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </div>
        <p className={styles.fine}>
          {wantedTrademarks} Brand names and trademarks on this site belong to their owners.{" "}
          {site.name} is an independent buyer and is not affiliated with, or endorsed by, the brands
          whose products it buys. © {site.year} {site.name}.
        </p>
      </div>
    </footer>
  );
}
