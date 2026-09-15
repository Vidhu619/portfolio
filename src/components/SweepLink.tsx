import type { AnchorHTMLAttributes, ReactNode } from "react";

type SweepLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "pill";
};

export default function SweepLink({
  children,
  variant = "outline",
  className = "",
  ...props
}: SweepLinkProps) {
  const base =
    variant === "solid"
      ? "border border-line-strong text-ink"
      : variant === "pill"
        ? "rounded-full bg-ink/5 text-ink-soft px-5 py-3 text-sm uppercase tracking-[0.15em]"
        : "border border-line text-ink-soft hover:border-ink";

  return (
    <a
      {...props}
      className={`group relative overflow-hidden transition-colors ${variant === "pill" ? "" : "px-6 py-3"} ${base} ${className}`}
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
      <span className="relative transition-colors duration-300 group-hover:text-paper">
        {children}
      </span>
    </a>
  );
}
