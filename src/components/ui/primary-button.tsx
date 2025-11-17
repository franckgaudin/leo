"use client";

import type { ButtonHTMLAttributes } from "react";

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<PrimaryButtonProps["variant"]>, string> = {
  default: "bg-slate-100 text-slate-900 hover:bg-white/90 focus-visible:outline-white",
  ghost: "border border-white/30 bg-transparent text-white hover:border-white/60 focus-visible:outline-white",
};

export function PrimaryButton({
  variant = "default",
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props} />
  );
}
