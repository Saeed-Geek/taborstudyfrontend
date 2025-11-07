"use client";

import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: boolean;
}

export default function Checkbox({
  disabled = false,
  error = false,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`
        inline-flex items-center justify-center w-3 h-3 cursor-pointer select-none
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {/* Wrapper for checkbox visuals */}
      <span className="relative flex items-center justify-center w-3 h-3">
        
       {/* Input */}
  <input
    type="checkbox"
    disabled={disabled}
    className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer rounded z-30"
    {...props}
  />

  {/* Visual box */}
  <span
    className={`
      absolute inset-0 rounded-sm outline outline-1 outline-[var(--color-Border-border-primary)]
      transition-all duration-200 z-0
      ${disabled
        ? "bg-[var(--color-Background-bg-disabled)] outline-[var(--color-Border-border-disabled)]"
        : error
        ? "outline-orange-500"
        : "bg-[var(--color-Background-bg-secondary)]"
      }
      peer-checked:bg-[#804EEC]
      peer-checked:border-t
      peer-checked:border-[#683FC0]
      peer-checked:outline-none
      peer-checked:shadow-[inset_0px_2px_2px_0px_rgba(22,38,100,0.32)]

      /* Hover when unchecked */
      peer-hover:peer-checked:bg-[#683FC0] 
      peer-hover:shadow-[none]
      peer-hover:peer-checked:border-[#4F3094]

      /* Hover when checked */
      peer-checked:hover:bg-[#804EEC]
      peer-checked:hover:shadow-[none]
      peer-checked:hover:border-[#4F3094]
    `}
  ></span>


        {/* Check icon */}
        <Check
          size={12}
          className="
             absolute text-white opacity-0 z-20
            peer-checked:opacity-100
             disabled:peer-checked:opacity-70
            transition-opacity duration-150
          "
        />
      </span>
    </label>
  );
}
