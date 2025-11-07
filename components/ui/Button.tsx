"use client";

import  Link  from "next/link";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" |  "lg";
  disabled?: boolean;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label: string;
  href?:string
}

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  icon,
  disabled = false,
  leftIcon,
  rightIcon,
  label,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center mt-[24px] w-full overflow-hidden rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed gap-[8px] cursor-pointer ";

  const variants = {
    primary: "bg-gradient-to-b from-[#976FEE] to-[#804EEC] hover:bg-[var(--color-primary-hover)] button-button text-white outline outline-1 outline-offset-[-1px] outline-white/32 shadow-[0px_0px_0px_1px_rgba(108,47,236,1.00)]",
    secondary: "bg-[var(--color-Background-bg-secondary)] text-black border border-[var(--color-Border-border-primary)] hover:bg-[var(--color-border)]/30 button-button-s",
  
  };

  const sizes = "px-[12px] py-[8px] text-lg"
 
  const content  = (
    <>
    {leftIcon && (
        <span className="relative overflow-hidden flex items-center justify-center">
          {leftIcon}
        </span>
      )}

      <span className="line-clamp-1">{label}</span>

      {rightIcon && (
        <span className=" relative overflow-hidden flex items-center justify-center">
          {rightIcon}
        </span>
      )}
      </>
    
  );
  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      // External link → use <a>
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${variants[variant]} ${sizes} ${className}`}
        >
          {content}
        </a>
      );
    }

    // Internal link → use Next.js <Link>
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${sizes} ${className}`}
      >
        {content}
      </Link>
    );
  }
  return (
    <button type="submit"
      className={`${base} ${variants[variant]} ${sizes} ${className}`}
      disabled={disabled}
      {...props}
    >
     {content}
    </button>
  );
}
