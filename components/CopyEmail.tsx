"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CopyEmail.module.css";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  function flash() {
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  // Fallback: select the address so the visitor can copy it manually.
  function selectEmail() {
    const node = emailRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    flash();
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash();
    } catch {
      selectEmail();
    }
  }

  return (
    <div className={styles.pill}>
      <code ref={emailRef}>{email}</code>
      <button type="button" className={`${styles.copy} ${copied ? styles.ok : ""}`} onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
