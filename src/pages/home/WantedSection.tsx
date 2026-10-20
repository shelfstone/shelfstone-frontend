import { Link } from "react-router";
import { ButtonLink } from "../../components/ButtonLink";
import { Icon } from "../../components/Icon";
import { Section } from "../../components/Section";
import { mailto, templateFiles } from "../../content/site";
import { wantedGroups, wantedUpdated } from "../../content/wanted";
import styles from "./WantedSection.module.css";

export function WantedSection() {
  return (
    <Section
      id="wanted"
      number="03"
      label="Wanted list"
      aside={
        <p className={styles.stamp}>
          <span className="label">Updated</span>
          <span className={styles.date}>{wantedUpdated}</span>
        </p>
      }
      title="What we are buying now"
    >
      <p className={styles.lede}>
        US-market packs only, matched by UPC. If you hold any of these items, email us the UPC,
        quantity, case pack, price, best-before date and where the stock is held.
      </p>

      {wantedGroups.map((group) => (
        <div key={group.title} className={`table-scroll ${styles.group}`}>
          <table className={`data-table ${styles.table}`}>
            <caption>
              <span className={styles.groupTitle}>{group.title}</span>
              <span className={styles.groupNote}>{group.note}</span>
            </caption>
            <thead>
              <tr>
                <th scope="col">UPC</th>
                <th scope="col">Product</th>
                <th scope="col" className="end">
                  Size
                </th>
              </tr>
            </thead>
            <tbody>
              {group.items.map((item) => (
                <tr key={item.upc}>
                  <td className="code">{item.upc}</td>
                  <td>{item.product}</td>
                  <td className="end">{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className={`actions ${styles.actions}`}>
        <ButtonLink href={mailto("Offer for your wanted list")}>
          Offer these items <Icon name="arrow-right" />
        </ButtonLink>
        <a href={templateFiles.xlsx} download>
          Download the template
        </a>
      </div>
      <p className={styles.notListed}>
        Not on the list? <Link to="/#send">Send your full catalog</Link>.
      </p>
    </Section>
  );
}
