"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const variantStyles = {
  primary:
    "bg-[#2233FF] text-white hover:bg-[#3344FF] shadow-[0_0_20px_rgba(34,51,255,0.3)] hover:shadow-[0_0_30px_rgba(34,51,255,0.5)] focus-ring",
  secondary:
    "bg-[#8855FF] text-white hover:bg-[#7744EE] shadow-[0_0_20px_rgba(136,85,255,0.3)] focus-ring",
  outline:
    "bg-transparent border border-[#1E1E45] text-[#9BA3D4] hover:bg-[#1E1E45] hover:text-[#F0F0FF] focus-ring",
  ghost:
    "bg-transparent text-[#9BA3D4] hover:bg-[#12122E] hover:text-[#F0F0FF] focus-ring",
  danger:
    "bg-red-600 text-white hover:bg-red-500 shadow-soft-sm hover:shadow-soft focus-ring",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-lg",
  md: "h-9 px-4 text-sm gap-2 rounded-xl",
  lg: "h-11 px-5 text-sm gap-2 rounded-xl",
  xl: "h-12 px-6 text-base gap-2.5 rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      asChild: _asChild,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || loading}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {loading ? (
          <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
