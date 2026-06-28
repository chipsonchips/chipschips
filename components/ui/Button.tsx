"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "gold", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-orbitron tracking-wider";

    const variants = {
      gold: "bg-amber-500 hover:bg-amber-400 text-black shadow-lg hover:shadow-amber-500/30 hover:shadow-xl active:scale-[0.98]",
      outline:
        "border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 active:scale-[0.98]",
      ghost: "text-gray-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      danger: "bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-7 py-3.5",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
