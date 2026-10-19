import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { WantedLabel } from "./WantedLabel";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`dot-field ${styles.hero}`}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Sourcing US-market consumer goods</p>
          <h1>
            American products, <em className={`holo-text ${styles.accent}`}>wherever</em> they are
            stocked.
          </h1>
          <p className="lede">
            Shelfstone buys US-market consumer goods from distributors, wholesalers and importers
            around the world, including the US. Send us what you carry, or check the items we are
            buying right now.
          </p>
          <div className="actions">
            <ButtonLink to="/#send">
              Send us your list <Arrow />
            </ButtonLink>
            <ButtonLink to="/wanted" variant="ghost">
              See what we're buying
            </ButtonLink>
          </div>
        </div>
        <WantedLabel />
      </div>
    </section>
  );
}
