"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    let isDark = document.documentElement.dataset.theme === "dark";
    try {
      isDark = window.localStorage.getItem("theme") === "dark";
    } catch {
      isDark = false;
    }
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const nextDark = dark !== true;
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    try {
      window.localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // Theme still applies for the current session if storage is unavailable.
    }
    setDark(nextDark);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark === true ? "light" : "dark"} theme`}>
      <span aria-hidden="true">{dark === true ? "☼" : "◐"}</span>
      {dark === true ? "Light" : "Dark"}
    </button>
  );
}
