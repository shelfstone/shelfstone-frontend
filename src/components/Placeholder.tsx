import styles from "./Placeholder.module.css";

/** Shows `value`, or a highlighted label while the fact is still unknown. */
export function Placeholder({ value, label }: { value: string | null; label: string }) {
  return value ?? <span className={styles.todo}>{label}</span>;
}
