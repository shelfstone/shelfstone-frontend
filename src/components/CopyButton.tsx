import { useEffect, useState } from "react";
import styles from "./CopyButton.module.css";

const RESET_AFTER_MS = 1800;

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), RESET_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <button className={styles.button} type="button" onClick={copy} aria-label={label}>
      {state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : "Copy"}
      <span className="visually-hidden" aria-live="polite">
        {state === "copied" ? `${text} copied` : ""}
      </span>
    </button>
  );
}
