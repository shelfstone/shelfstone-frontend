import { allWantedItems } from "../../content/wanted";
import styles from "./Ticker.module.css";

/** A scrolling strip of the UPCs we are buying. The list is drawn twice so the loop is
 * seamless; the copy is hidden from screen readers. */
export function Ticker() {
  const entries = (hidden: boolean) =>
    allWantedItems.map((item) => (
      <span
        key={`${item.upc}-${hidden}`}
        className={styles.entry}
        aria-hidden={hidden || undefined}
      >
        <b className="holo-text">{item.upc}</b> {item.product} {item.size}
      </span>
    ));

  return (
    <div className={styles.ticker} role="marquee" aria-label="Items we are buying now">
      <div className={styles.track}>
        {entries(false)}
        {entries(true)}
      </div>
    </div>
  );
}
