import { CopyButton } from "../../components/CopyButton";
import { CropMarks } from "../../components/CropMarks";
import { Placeholder } from "../../components/Placeholder";
import { SectionHeading } from "../../components/SectionHeading";
import { site } from "../../content/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeading number={6} label="About us" title="Who we are">
          <div className={styles.text}>
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
        </SectionHeading>

        <div className={`frame ${styles.card}`} id="contact">
          <CropMarks />
          <h3 className={`label ${styles.title}`}>Contact</h3>
          <div className={styles.person}>
            <p className={styles.name}>
              <strong>{site.founder.firstName}</strong>{" "}
              <Placeholder value={site.founder.lastName} label="Last name" />, founder
            </p>
            <div className={styles.emailRow}>
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <CopyButton text={site.email} label={`Copy ${site.email}`} />
            </div>
          </div>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Reply time</dt>
              <dd>{site.replyTime}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Company</dt>
              <dd>
                <Placeholder value={site.company.legalName} label="Registered company name" />
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Address</dt>
              <dd>
                <Placeholder value={site.company.address} label="Business address" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
