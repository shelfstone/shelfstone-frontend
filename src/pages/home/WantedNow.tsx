import { Link } from "react-router";
import { CropMarks } from "../../components/CropMarks";
import { allWantedItems, wantedUpdated } from "../../content/wanted";
import styles from "./WantedNow.module.css";

/** The short wanted list under the hero, linking to the full list in section 04. */
export function WantedNow() {
  return (
    <aside className={`frame ${styles.box}`} aria-labelledby="wanted-now-title">
      <CropMarks />
      <div className={styles.head}>
        <h2 id="wanted-now-title" className={`label ${styles.title}`}>
          Wanted now
        </h2>
        <p className={`label ${styles.updated}`}>Upd. {wantedUpdated}</p>
      </div>
      <ul className={styles.items}>
        {allWantedItems.map((item) => (
          <li key={item.upc} className={styles.item}>
            <span className={`num ${styles.upc}`}>{item.upc}</span>
            <span>
              {item.product}, {item.size}
            </span>
          </li>
        ))}
      </ul>
      <Link className={styles.more} to="/#wanted">
        Full wanted list <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
