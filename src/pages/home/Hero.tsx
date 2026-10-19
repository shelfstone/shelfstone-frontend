import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { WantedNow } from "./WantedNow";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h1 className={styles.title}>
            <span className={styles.line}>American products,</span>{" "}
            <span className={styles.line}>wherever they</span>{" "}
            <span className={`${styles.line} ${styles.accent}`}>are stocked.</span>
          </h1>
          <p className={`lede ${styles.lede}`}>
            Shelfstone buys US-market consumer goods from distributors, wholesalers and importers
            around the world, including the US. Send us what you carry, or check the items we are
            buying right now.
          </p>
          <div className="actions">
            <ButtonLink to="/#send">
              Send us your list <Arrow />
            </ButtonLink>
            <ButtonLink to="/#wanted" variant="secondary">
              See what we're buying
            </ButtonLink>
          </div>
        </div>
        <WantedNow />
      </div>
    </section>
  );
}
