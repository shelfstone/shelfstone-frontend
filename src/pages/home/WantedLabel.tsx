import { Link } from "react-router";
import { Barcode } from "../../components/Barcode";
import { allWantedItems, wantedUpdated } from "../../content/wanted";
import styles from "./WantedLabel.module.css";

/** The foil stock label: the items we are buying now, with a moving scanner line. */
export function WantedLabel() {
  return (
    <aside className={styles.label} aria-labelledby="wanted-label-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <strong id="wanted-label-title">Wanted now</strong>
          <span className={styles.live}>Updated {wantedUpdated}</span>
        </div>
        <table className={styles.items}>
          <tbody>
            {allWantedItems.map((item) => (
              <tr key={item.upc}>
                <td className="mono">{item.upc}</td>
                <td>
                  {item.product}, {item.size}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.foot}>
          <Barcode className={styles.barcode} />
          <Link to="/wanted">
            Full wanted list{" "}
            <span className="mono" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
