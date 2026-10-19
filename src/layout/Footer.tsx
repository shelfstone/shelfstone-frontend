import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { Placeholder } from "../components/Placeholder";
import { site, templateFiles } from "../content/site";
import { wantedTrademarks } from "../content/wanted";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.columns}>
          <div className={styles.about}>
            <Link className={styles.brand} to="/">
              <Logo className={styles.logo} />
              <span>{site.name}</span>
            </Link>
            <p className={styles.summary}>
              We buy US-market consumer goods by UPC from distributors, wholesalers and importers
              worldwide.
            </p>
          </div>

          <nav className={styles.column} aria-labelledby="footer-company">
            <h2 id="footer-company" className={`label ${styles.heading}`}>
              Company
            </h2>
            <Link to="/#how">How it works</Link>
            <Link to="/#look-for">What we look for</Link>
            <Link to="/#about">About</Link>
          </nav>

          <nav className={styles.column} aria-labelledby="footer-suppliers">
            <h2 id="footer-suppliers" className={`label ${styles.heading}`}>
              Suppliers
            </h2>
            <Link to="/#wanted">Wanted list</Link>
            <Link to="/#send">Send your list</Link>
            <a href={templateFiles.xlsx} download>
              Template (Excel)
            </a>
            <a href={templateFiles.csv} download>
              Template (CSV)
            </a>
          </nav>

          <div className={`${styles.column} ${styles.contact}`}>
            <h2 className={`label ${styles.heading}`}>Contact</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p className={styles.muted}>Reply {site.replyTime.toLowerCase()}</p>
            <p>
              <Placeholder value={site.company.address} label="Business address" />
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {site.year} {site.name} ·{" "}
            <Placeholder value={site.company.legalName} label="Registered company name" />
          </p>
          <Link to="/privacy">Privacy</Link>
        </div>

        <p className={styles.fine}>
          {wantedTrademarks} Brand names and trademarks on this site belong to their owners.{" "}
          <span className="line">
            {site.name} is an independent buyer and is not affiliated with, or endorsed by, the
            brands whose products it buys.
          </span>
        </p>
      </div>
    </footer>
  );
}
