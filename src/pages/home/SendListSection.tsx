import { Arrow, ButtonLink } from "../../components/ButtonLink";
import { listFields } from "../../content/home";
import { mailto, templateFiles } from "../../content/site";
import styles from "./SendListSection.module.css";

export function SendListSection() {
  return (
    <section className="section" id="send">
      <div className="wrap">
        <p className="eyebrow">Send your list</p>
        <h2>What to put in your list</h2>
        <p className={`lede ${styles.intro}`}>
          Any format works: Excel, PDF or a photo of your stock sheet. These details let us reply
          with a firm offer instead of more questions.
        </p>

        <div className={`table-wrap ${styles.tableWrap}`}>
          <table className={`data-table ${styles.fields}`}>
            <thead>
              <tr>
                <th scope="col">Field</th>
                <th scope="col">Why we ask</th>
                <th scope="col">Example</th>
              </tr>
            </thead>
            <tbody>
              {listFields.map((row) => (
                <tr key={row.field}>
                  <th scope="row">{row.field}</th>
                  <td>{row.why}</td>
                  <td className={`mono ${styles.example}`}>{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="note">
          The example row is illustrative. Our template has these columns ready:{" "}
          <a href={templateFiles.xlsx} download>
            Excel
          </a>{" "}
          or{" "}
          <a href={templateFiles.csv} download>
            CSV
          </a>
          .
        </p>
        <div className={`actions ${styles.cta}`}>
          <ButtonLink href={mailto("Stock list for Shelfstone")}>
            Email your list <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
