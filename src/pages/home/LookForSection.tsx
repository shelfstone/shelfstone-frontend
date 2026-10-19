import { SectionHeading } from "../../components/SectionHeading";
import { categories, criteria } from "../../content/home";
import styles from "./LookForSection.module.css";

export function LookForSection() {
  return (
    <section className="section" id="look-for">
      <div className="wrap">
        <SectionHeading
          number={2}
          label="What we look for"
          title="US-market packs, identified by UPC"
        >
          <p className="lede">
            We buy the version of a product made for American shelves: US labelling and a US
            barcode. Where an item was made matters to us too, so tell us the country of origin
            printed on the pack.
          </p>
        </SectionHeading>

        <h3 className={`label ${styles.categoriesTitle}`}>Categories</h3>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>

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
