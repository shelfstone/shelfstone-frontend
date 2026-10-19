import { CopyButton } from "../../components/CopyButton";
import { Placeholder } from "../../components/Placeholder";
import { Section } from "../../components/Section";
import { site } from "../../content/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <Section id="about" number={5} label="About us">
      <p className={styles.statement}>
        Shelfstone is a small, independent sourcing company. We are building a network of
        distributors and wholesalers who hold American products around the world, and we buy from
        them directly.
      </p>
      <p className={styles.text}>
        We keep the process simple: one person you can reach, written offers, and terms agreed
        before anything ships.
      </p>

      <div className={styles.contact} id="contact">
        <p className={`label ${styles.writeTo}`}>
          Write to {site.founder.firstName}{" "}
          <Placeholder value={site.founder.lastName} label="Last name" />, founder
        </p>
        <div className={styles.emailRow}>
          <a className={styles.email} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <CopyButton text={site.email} label={`Copy ${site.email}`} />
        </div>
        <dl className={styles.facts}>
          <div>
            <dt className="label">Reply time</dt>
            <dd>{site.replyTime}</dd>
          </div>
          <div>
            <dt className="label">Company</dt>
            <dd>
              <Placeholder value={site.company.legalName} label="Registered company name" />
            </dd>
          </div>
          <div>
            <dt className="label">Address</dt>
            <dd>
              <Placeholder value={site.company.address} label="Business address" />
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
