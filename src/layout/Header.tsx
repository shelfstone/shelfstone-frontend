import { Link } from "react-router";
import { Icon } from "../components/Icon";
import { Logo } from "../components/Logo";
import { sections, type SectionId } from "../content/sections";
import { site } from "../content/site";
import { wantedUpdated } from "../content/wanted";
import styles from "./Header.module.css";

/** The catalog's running header: name, edition stamp, contact and the current page number. */
export function Header({ active }: { active: SectionId | null }) {
  const page = sections.findIndex((section) => section.id === active);

  return (
    <header className={styles.header}>
      <div className="wrap">
        <div className={styles.bar}>
          <Link className={styles.brand} to="/#top">
            <Logo className={styles.logo} />
            <span>{site.name}</span>
          </Link>
          <p className={`label ${styles.edition}`}>
            <span className={styles.list}>Buying list · </span>Edition{" "}
            <span className={styles.date}>{wantedUpdated}</span>
          </p>
          <div className={styles.end}>
            <a className={styles.email} href={`mailto:${site.email}`}>
              {site.email} <Icon name="arrow-up-right" />
            </a>
            {page >= 0 && (
              <span className={`label ${styles.page}`}>p. {String(page + 1).padStart(2, "0")}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
