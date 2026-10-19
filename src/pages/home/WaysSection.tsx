import { ButtonLink } from "../../components/ButtonLink";
import { templateFiles } from "../../content/site";
import styles from "./WaysSection.module.css";

export function WaysSection() {
  return (
    <section className="section" id="ways">
      <div className="wrap">
        <p className="eyebrow">Working with us</p>
        <h2>Two ways to start</h2>
        <div className={styles.ways}>
          <article className={styles.way}>
            <span className={styles.tag}>You have stock</span>
            <h3>Send us your list</h3>
            <p>
              Share your catalog or current stock list of US products, in any format. We read every
              list and reply within two working days with the items we want and an offer.
            </p>
            <div className="actions">
              <ButtonLink to="/#send">What to include</ButtonLink>
              <ButtonLink href={templateFiles.xlsx} download variant="ghost">
                Download the template
              </ButtonLink>
            </div>
          </article>
          <article className={styles.way}>
            <span className={styles.tag}>We have a list</span>
            <h3>Check our wanted list</h3>
            <p>
              We publish the exact items we are buying, by UPC. If you hold any of them, tell us the
              quantity, price and best-before date.
            </p>
            <div className="actions">
              <ButtonLink to="/wanted">See the wanted list</ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
