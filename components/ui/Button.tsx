import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:scale-[0.99]";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5",
    secondary:
      "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-charcoal",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
