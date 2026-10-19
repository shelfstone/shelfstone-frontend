import { PageHeader } from "../components/PageHeader";
import { Placeholder } from "../components/Placeholder";
import { site } from "../content/site";
import styles from "./PrivacyPage.module.css";

const LAST_UPDATED = "19 Oct 2026";

export function PrivacyPage() {
  const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

  return (
    <>
      <PageHeader
        eyebrow={`Privacy · last updated ${LAST_UPDATED}`}
        title="How we use contact details"
        intro="Shelfstone contacts businesses about buying their stock. This page explains which details we hold, why, and how to stop hearing from us."
      />
      <section className={styles.body}>
        <div className="wrap">
          <div className={styles.prose}>
            <h2>What we hold</h2>
            <ul>
              <li>
                Business contact details that companies publish themselves, for example on their own
                website or a brand's list of distributors: company name, country, website, business
                email and phone.
              </li>
              <li>What you send us: stock lists, prices, photos and our email conversations.</li>
            </ul>

            <h2>Why we hold it</h2>
            <p>
              To contact businesses that may hold US-market products, and to make and manage offers.
              This is our legitimate business interest. We do not sell or share these details, and
              we do not use them for anything else.
            </p>

            <h2>How to stop hearing from us</h2>
            <p>
              Reply "no thanks" to any email from us, or write to {email}. We will stop contacting
              you and remove your details, keeping only a note not to contact you again.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Contact details for as long as we may do business together, and records of completed
              orders for as long as tax law requires.
            </p>

            <h2>Who we are</h2>
            <p>
              <Placeholder value={site.company.legalName} label="Registered company name" />,{" "}
              <Placeholder value={site.company.address} label="Business address" />. Email: {email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
