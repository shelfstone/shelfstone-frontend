import { Link } from "react-router";
import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { Section } from "../../components/Section";
import { mailto, templateFiles } from "../../content/site";
import { wantedGroups, wantedUpdated } from "../../content/wanted";
import styles from "./WantedSection.module.css";

export function WantedSection() {
  return (
    <Section
      id="wanted"
      tone="dark"
      number={3}
      label="Wanted list"
      aside={<p>Updated {wantedUpdated}</p>}
      title="What we are buying now"
    >
      <p className={styles.lede}>
        US-market packs only, matched by UPC. If you hold any of these items, email us the UPC,
        quantity, case pack, price, best-before date and where the stock is held.
      </p>

      {wantedGroups.map((group) => (
        <div key={group.title} className={styles.group}>
          <div className={styles.groupHead}>
            <h3 className={`label ${styles.groupTitle}`}>{group.title}</h3>
            <p className={styles.groupNote}>{group.note}</p>
          </div>
          <table className={styles.table}>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">UPC</th>
                <th scope="col">Product</th>
                <th scope="col">Size</th>
              </tr>
            </thead>
            <tbody>
              {group.items.map((item) => (
                <tr key={item.upc}>
                  <td className={`num ${styles.upc}`}>{item.upc}</td>
                  <td className={styles.product}>{item.product}</td>
                  <td className={`num ${styles.size}`}>{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className={`actions ${styles.actions}`}>
        <ButtonLink href={mailto("Offer for your wanted list")}>
          Offer these items <Arrow />
        </ButtonLink>
        <a className={styles.link} href={templateFiles.xlsx} download>
          Download the template
        </a>
      </div>
      <p className={styles.notListed}>
        Not on the list?{" "}
        <Link className={styles.link} to="/#send">
          Send your full catalog
        </Link>
        .
      </p>
    </Section>
  );
}
