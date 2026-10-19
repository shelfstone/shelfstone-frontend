import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { CropMarks } from "../../components/CropMarks";
import { SectionHeading } from "../../components/SectionHeading";
import { templateFiles } from "../../content/site";
import styles from "./WaysSection.module.css";

export function WaysSection() {
  return (
    <section className="section" id="ways">
      <div className="wrap">
        <SectionHeading number={1} label="Working with us" title="Two ways to start" />
        <div className={styles.ways}>
          <article className={`frame ${styles.way}`}>
            <CropMarks />
            <p className={`label ${styles.tag}`}>A · You have stock</p>
            <h3>Send us your list</h3>
            <p className={styles.text}>
              Share your catalog or current stock list of US products, in any format. We read every
              list and reply within two working days with the items we want and an offer.
            </p>
            <div className="actions">
              <ButtonLink to="/#send" variant="secondary">
                What to include
              </ButtonLink>
              <ButtonLink href={templateFiles.xlsx} download variant="text">
                Download the template <Arrow direction="down" />
              </ButtonLink>
            </div>
          </article>
          <article className={`frame ${styles.way}`}>
            <CropMarks />
            <p className={`label ${styles.tag}`}>B · We have a list</p>
            <h3>Check our wanted list</h3>
            <p className={styles.text}>
              We publish the exact items we are buying, by UPC. If you hold any of them, tell us the
              quantity, price and best-before date.
            </p>
            <div className="actions">
              <ButtonLink to="/#wanted" variant="secondary">
                See the wanted list
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
