import { Link } from "react-router";
import { ButtonLink } from "../components/ButtonLink";
import { PageHeader } from "../components/PageHeader";
import { mailto, templateFiles } from "../content/site";
import { wantedGroups, wantedUpdated } from "../content/wanted";
import styles from "./WantedPage.module.css";

export function WantedPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Wanted list · updated ${wantedUpdated}`}
        title="What we are buying now"
        intro="US-market packs only, matched by UPC. If you hold any of these items, email us the UPC, quantity, case pack, price, best-before date and where the stock is held."
      >
        <div className="actions">
          <ButtonLink href={mailto("Offer for your wanted list")}>Offer these items</ButtonLink>
          <ButtonLink href={templateFiles.xlsx} download variant="ghost">
            Download the template
          </ButtonLink>
        </div>
      </PageHeader>

      <section className={styles.body}>
        <div className="wrap">
          {wantedGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h2>{group.title}</h2>
              <p className={styles.groupNote}>{group.note}</p>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th scope="col">UPC</th>
                      <th scope="col">Product</th>
                      <th scope="col">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.upc}>
                        <td className={`mono ${styles.nowrap}`}>{item.upc}</td>
                        <td>{item.product}</td>
                        <td className={`mono ${styles.nowrap}`}>{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className={styles.group}>
            <h2>Not on the list?</h2>
            <p>
              We also review full catalogs of US products.{" "}
              <Link to="/#send">Send us your list</Link> and we will tell you what we can use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
