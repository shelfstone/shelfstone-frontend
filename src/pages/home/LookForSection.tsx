import { Section } from "../../components/Section";
import { categories, criteria } from "../../content/home";
import styles from "./LookForSection.module.css";

export function LookForSection() {
  return (
    <Section
      id="look-for"
      number="02"
      label="What we look for"
      title={
        <>
          <span className="line">US-market packs,</span>{" "}
          <span className="line">identified by UPC</span>
        </>
      }
    >
      <p className={styles.lede}>
        We buy the version of a product made for American shelves: US labelling and a US barcode.
        Where an item was made matters to us too, so tell us the country of origin printed on the
        pack.
      </p>

      <dl className={styles.spec}>
        {criteria.map((item) => (
          <div key={item.label} className={styles.row}>
            <dt className="label">{item.label}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
        <div className={styles.row}>
          <dt className="label">Categories</dt>
          <dd>
            <ul className={styles.categories}>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
