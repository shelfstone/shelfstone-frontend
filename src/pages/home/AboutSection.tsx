import { CopyButton } from "../../components/CopyButton";
import { Placeholder } from "../../components/Placeholder";
import { site } from "../../content/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className={`wrap ${styles.about}`}>
        <div className="stack">
          <p className="eyebrow">About us</p>
          <h2>Who we are</h2>
          <p className="lede">
            Shelfstone is a small, independent sourcing company. We are building a network of
            distributors and wholesalers who hold American products around the world, and we buy
            from them directly.
          </p>
          <p className="lede">
            We keep the process simple: one person you can reach, written offers, and terms agreed
            before anything ships.
          </p>
        </div>

        <div className={styles.card} id="contact">
          <div className={styles.cardInner}>
            <p className="eyebrow">Contact</p>
            <p>
              <strong>
                {site.founder.firstName}{" "}
                <Placeholder value={site.founder.lastName} label="Last name" />
              </strong>
              , founder
            </p>
            <div className={styles.contactRow}>
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <CopyButton text={site.email} label={`Copy ${site.email}`} />
            </div>
            <dl className={styles.facts}>
              <dt>Reply time</dt>
              <dd>{site.replyTime}</dd>
              <dt>Company</dt>
              <dd>
                <Placeholder value={site.company.legalName} label="Registered company name" />
              </dd>
              <dt>Address</dt>
              <dd>
                <Placeholder value={site.company.address} label="Business address" />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
