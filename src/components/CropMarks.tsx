import styles from "./CropMarks.module.css";

/** Printer's crop marks on the four corners of the nearest positioned parent. */
export function CropMarks() {
  return (
    <>
      <span className={`${styles.mark} ${styles.topLeft}`} aria-hidden="true" />
      <span className={`${styles.mark} ${styles.topRight}`} aria-hidden="true" />
      <span className={`${styles.mark} ${styles.bottomLeft}`} aria-hidden="true" />
      <span className={`${styles.mark} ${styles.bottomRight}`} aria-hidden="true" />
    </>
  );
}
