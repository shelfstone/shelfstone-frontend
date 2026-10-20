import { Link } from "react-router";
import { Icon } from "../../components/Icon";
import { heroFigure } from "../../content/home";
import { site, templateFiles } from "../../content/site";
import { allWantedItems } from "../../content/wanted";
import styles from "./Hero.module.css";

const COVER_ITEMS = 3;

/** The catalog cover: who we are, the first wanted codes and the order slip. */
export function Hero() {
  return (
    <section id="top" className={styles.cover}>
      <div className="wrap">
        <div className={styles.page}>
          <div className={styles.rail}>
            <p className="label">Buyer of US‑market consumer goods</p>
            <p className="label">Sourcing worldwide</p>
            <p className={styles.upc}>
              <span className="label">Matched by</span>
              <span className={styles.upcBig}>UPC</span>
            </p>
          </div>

          <div className={styles.body}>
            <h1>
              <span className="line">American products,</span>{" "}
              <span className="line">wherever they</span>{" "}
              <span className="line">
                are <span className={styles.accent}>stocked.</span>
              </span>
            </h1>

            <p className={styles.lede}>
              Shelfstone buys from distributors, wholesalers and importers around the world,
              including the US. Send us what you carry, or check the items we are buying right now.
            </p>

            <div className={styles.order}>
              <div className={styles.buying}>
                <table className="data-table">
                  <caption className={styles.caption}>
                    <span className={styles.letter}>B</span> We have a list
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">UPC</th>
                      <th scope="col">Product</th>
                      <th scope="col" className="end">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allWantedItems.slice(0, COVER_ITEMS).map((item) => (
                      <tr key={item.upc}>
                        <td className="code">{item.upc}</td>
                        <td>{item.product}</td>
                        <td className="end">{item.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link className={styles.more} to="/#wanted">
                  See what we buy <Icon name="arrow-right" />
                </Link>
              </div>

              <div className={styles.slip}>
                <h2 className={styles.slipTitle}>
                  <span className={styles.letter}>A</span> Send your list
                </h2>
                <p className={styles.slipNote}>
                  You have stock. Reply {site.replyTime.toLowerCase()}.
                </p>
                <a className={styles.mail} href={`mailto:${site.email}`}>
                  {site.email} <Icon name="arrow-right" />
                </a>
                <p className={styles.files}>
                  <a href={templateFiles.xlsx} download>
                    Template — Excel <Icon name="arrow-down" />
                  </a>
                  <a href={templateFiles.csv} download>
                    Template — CSV <Icon name="arrow-down" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={styles.plate}>
            {heroFigure.src ? (
              <img src={heroFigure.src} alt={heroFigure.alt} />
            ) : (
              <p className={styles.placeholder}>Photo — {heroFigure.alt}</p>
            )}
          </div>
          <figcaption className={`label ${styles.figCaption}`}>
            <span>Fig. 01</span>
            <span>{heroFigure.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
