"use client"

import type React from "react"
import { forwardRef } from "react"
import "../Button/Button.scss"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
  }
  
  const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={`custom-button ${className}`} {...props}>
        {children}
      </button>
    )
  })
  
  Button.displayName = "Button"
  
  export { Button }

