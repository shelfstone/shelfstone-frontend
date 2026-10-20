import { Icon } from "../../components/Icon";
import { Section } from "../../components/Section";
import { listFields } from "../../content/home";
import { templateFiles } from "../../content/site";
import styles from "./SendListSection.module.css";

export function SendListSection() {
  return (
    <Section
      id="send"
      number="04"
      label="Send your list"
      aside={
        <>
          <a className={styles.download} href={templateFiles.xlsx} download>
            Template — Excel <Icon name="arrow-down" />
          </a>
          <a className={styles.download} href={templateFiles.csv} download>
            Template — CSV <Icon name="arrow-down" />
          </a>
        </>
      }
      title="What to put in your list"
    >
      <p className={styles.lede}>
        Any format works: Excel, PDF or a photo of your stock sheet. These details let us reply with
        a firm offer instead of more questions.
      </p>

      <div className={`table-scroll ${styles.box}`}>
        <table className={`data-table ${styles.fields}`}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Field</th>
              <th scope="col">Why we ask</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            {listFields.map((row, index) => (
              <tr key={row.field}>
                <td className={styles.number}>{String(index + 1).padStart(2, "0")}</td>
                <th scope="row">{row.field}</th>
                <td className={styles.why}>{row.why}</td>
                <td className={styles.example}>{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.footnote}>The example column is illustrative.</p>
    </Section>
  );
}
