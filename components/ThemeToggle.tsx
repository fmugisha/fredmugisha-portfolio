"use client";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    // Read the effective scheme so it also works when following the OS setting.
    const isDark = getComputedStyle(root).colorScheme.includes("dark");
    const next: Theme = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode etc.); the toggle still works for this visit.
    }
  }

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label="Toggle theme">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
      </svg>
    </button>
  );
}
