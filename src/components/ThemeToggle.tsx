"use client";

function toggle() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {}
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
    >
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </button>
  );
}
