import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { CropMarks } from "../../components/CropMarks";
import { SectionHeading } from "../../components/SectionHeading";
import { listFields } from "../../content/home";
import { mailto, templateFiles } from "../../content/site";
import styles from "./SendListSection.module.css";

export function SendListSection() {
  return (
    <section className="section" id="send">
      <div className="wrap">
        <SectionHeading number={5} label="Send your list" title="What to put in your list">
          <div className={styles.intro}>
            <p className="lede">
              Any format works: Excel, PDF or a photo of your stock sheet. These details let us
              reply with a firm offer instead of more questions.
            </p>
            <ButtonLink href={mailto("Stock list for Shelfstone")}>
              Email your list <Arrow />
            </ButtonLink>
          </div>
        </SectionHeading>

        <div className={`frame ${styles.box}`}>
          <CropMarks />
          <div className={styles.head}>
            <h3 className={`label ${styles.title}`}>Stock list · Field reference</h3>
            <a className={`label ${styles.download}`} href={templateFiles.xlsx} download>
              Template · Excel <Arrow direction="down" />
            </a>
            <a className={`label ${styles.download}`} href={templateFiles.csv} download>
              CSV <Arrow direction="down" />
            </a>
          </div>
          <div className="table-scroll">
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
                    <td className={`num ${styles.number}`}>{String(index + 1).padStart(2, "0")}</td>
                    <th scope="row">{row.field}</th>
                    <td className={styles.why}>{row.why}</td>
                    <td>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.footnote}>
            The example column is illustrative. The template has these columns ready.
          </p>
        </div>
      </div>
    </section>
  );
}
