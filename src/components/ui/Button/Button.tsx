import React, { forwardRef } from "react"
import "./Button.scss"


type Variant = "default" | "outline" | "social"
type Size = "sm" | "default" | "lg"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      isLoading,
      icon,
      fullWidth,
      className = "",
      ...props
    },
    ref,
  ) => {
    // Build BEM-friendly class names
    const classes = [
      "button",
      `button--${variant}`,
      `button--size-${size}`,
      fullWidth ? "button--full-width" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="button__icon">{icon}</span>}
        {children}
        {isLoading && (
          <svg className="button__spinner" viewBox="0 0 24 24">
            <circle
              className="button__spinner-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="button__spinner-path"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 
              5.29A7.96 7.96 0 014 12H0c0 3.04 1.14 5.82 3 
              7.94l3-2.65z"
            />
          </svg>
        )}
      </button>
    )
  },
)

Button.displayName = "Button"
