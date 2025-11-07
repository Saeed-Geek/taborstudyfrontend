"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  optional?: boolean;
}

export default function InputField({
  label,
  helperText,
  leftIcon,
  rightIcon,
  error = false,
  disabled = false,
  optional = false,
  className = "",
  type = "text",
  ...props
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  return (
    <div className={`inline-flex flex-col gap-1 w-full ${className}`}>
      {/* Label */}
      {label && (
        <label
          className={`inline-flex items-center gap-0.5 text-sm font-medium font-['Host_Grotesk'] leading-4 ${
            disabled ? "text-Text-disabled" : "text-Text-primary"
          }`}
        >
          {label}
          {optional && !disabled && (
            <span className="text-Text-secondary text-xs font-normal">(optional)</span>
          )}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`
          flex items-center justify-between gap-2 px-3 py-2 rounded-lg
          shadow-[0px_1px_2px_0px_rgba(9,15,13,0.10)]
          outline outline-1 outline-offset-[-1px]
          
          transition-all
          ${
            disabled
              ? "bg-[var(--color-Background-bg-disabled)] outline-[var(--color-Border-border-disabled)] cursor-not-allowed opacity-60"
              : error
              ? "bg-[var(--color-Badge-orange-shade)] outline-orange-500"
              : "bg-[var(--color-Background-bg-secondary)] outline-[var(--color-Border-border-primary)] focus-within:bg-[var(--color-Background-bg-primary)] focus-within:outline-[var(--color-Border-border-secondary)] "
          }
        `}
      >
        {/* Left icon */}
        {leftIcon && (
          <span
            className={`w-6 h-6 flex items-center justify-center ${
              disabled
                ? "text-Icon-disabled"
                
                : "text-Icon-secondary"
            }`}
          >
            {leftIcon}
          </span>
        )}

        {/* Input field */}
        <input
          {...props}
          type={inputType}
          disabled={disabled}
          className={`
            flex-1 bg-transparent border-none outline-none
            text-base font-normal font-['Host_Grotesk'] leading-5
            placeholder-[var(--color-Text-text-secondary)]
            ${disabled ? "text-Text-disabled cursor-not-allowed" : "text-Text-primary"}
          `}
        />

        {/* Right icon / password toggle */}
        {isPassword ? (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((p) => !p)}
            disabled={disabled}
            className={`w-5 h-5 flex items-center justify-center transition-colors ${
              disabled
                ? "text-Icon-disabled cursor-not-allowed"
                : error
                ? "text-orange-500"
                : "text-Icon-secondary hover:text-Icon-primary"
            }`}
          >
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        ) : (
          rightIcon && (
            <span
              className={`w-5 h-5 flex items-center justify-center ${
                disabled
                  ? "text-Icon-disabled"
                  : error
                  ? "text-orange-500"
                  : "text-Icon-secondary"
              }`}
            >
              {rightIcon}
            </span>
          )
        )}
      </div>

      {/* Helper text */}
      {helperText && (
        <div
          className={`inline-flex items-center gap-1 text-sm leading-4 font-['Host_Grotesk'] ${
            disabled
              ? "text-Text-disabled"
              : error
              ? "text-orange-500"
              : "text-Text-secondary"
          }`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}
