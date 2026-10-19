import { categories, criteria } from "../../content/home";
import styles from "./LookForSection.module.css";

export function LookForSection() {
  return (
    <section className="section" id="look-for">
      <div className={`wrap ${styles.split}`}>
        <div className="stack">
          <p className="eyebrow">What we look for</p>
          <h2>US-market packs, identified by UPC</h2>
          <p className="lede">
            We buy the version of a product made for American shelves: US labelling and a US
            barcode. Where an item was made matters to us too, so tell us the country of origin
            printed on the pack.
          </p>
          <ul className={styles.categories} aria-label="Categories">
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <dl className={styles.criteria}>
          {criteria.map((item) => (
            <div key={item.label} className={styles.criterion}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
