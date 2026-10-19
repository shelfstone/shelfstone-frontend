import { Link } from "react-router";
import { ButtonLink } from "../../components/ButtonLink";
import { CropMarks } from "../../components/CropMarks";
import { SectionHeading } from "../../components/SectionHeading";
import { mailto, templateFiles } from "../../content/site";
import { wantedGroups, wantedUpdated } from "../../content/wanted";
import styles from "./WantedSection.module.css";

export function WantedSection() {
  return (
    <section className="section" id="wanted">
      <div className="wrap">
        <SectionHeading
          number={4}
          label={`Wanted list · updated ${wantedUpdated}`}
          title="What we are buying now"
        >
          <p className="lede">
            US-market packs only, matched by UPC. If you hold any of these items, email us the UPC,
            quantity, case pack, price, best-before date and where the stock is held.
          </p>
          <div className="actions">
            <ButtonLink href={mailto("Offer for your wanted list")}>Offer these items</ButtonLink>
            <ButtonLink href={templateFiles.xlsx} download variant="secondary">
              Download the template
            </ButtonLink>
          </div>
          <p className={`lede ${styles.notListed}`}>
            Not on the list? We also review full catalogs of US products.{" "}
            <Link to="/#send">Send us your list</Link> and we will tell you what we can use.
          </p>
        </SectionHeading>

        {wantedGroups.map((group) => (
          <div key={group.title} className={`frame ${styles.group}`}>
            <CropMarks />
            <div className={styles.groupHead}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <p className={styles.groupNote}>{group.note}</p>
            </div>
            <div className="table-scroll">
              <table className={`data-table ${styles.table}`}>
                <thead>
                  <tr>
                    <th scope="col">UPC</th>
                    <th scope="col">Product</th>
                    <th scope="col" className={styles.size}>
                      Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.upc}>
                      <td className={`num ${styles.upc}`}>{item.upc}</td>
                      <td>{item.product}</td>
                      <td className={`num ${styles.size}`}>{item.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
