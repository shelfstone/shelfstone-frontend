import { Link } from "react-router";
import { CropMarks } from "../../components/CropMarks";
import { heroFigure } from "../../content/home";
import styles from "./Hero.module.css";

const paths = [
  { to: "/#send", label: "A — You have stock", title: "Send your list" },
  { to: "/#wanted", label: "B — We have a list", title: "See what we buy" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.kickers}>
          <p className="label">Buyer of US-market consumer goods</p>
          <p className="label">Sourcing worldwide · Matched by UPC</p>
        </div>

        <h1 className={styles.title}>
          <span className="line">American products,</span>{" "}
          <span className="line">wherever they</span>{" "}
          <span className="line">
            are <span className={styles.accent}>stocked.</span>
          </span>
        </h1>

        <p className={styles.lede}>
          Shelfstone buys from distributors, wholesalers and importers around the world, including
          the US. Send us what you carry, or check the items we are buying right now.
        </p>

        <nav className={styles.paths} aria-label="Start here">
          {paths.map((path) => (
            <Link key={path.to} className={styles.path} to={path.to}>
              <span className={`label ${styles.pathLabel}`}>{path.label}</span>
              <span className={styles.pathTitle}>{path.title}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </nav>

        <figure className={styles.figure}>
          <div className={styles.photo}>
            {heroFigure.src ? (
              <img src={heroFigure.src} alt={heroFigure.alt} />
            ) : (
              <p className={styles.placeholder}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                Photo — {heroFigure.alt}
              </p>
            )}
            <CropMarks />
          </div>
          <figcaption className={`label ${styles.caption}`}>
            <span>Fig. 01</span>
            <span>{heroFigure.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
