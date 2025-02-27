"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import "../Input/Input.scss"

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type = "text", label, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const isPasswordType = type === "password"

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className={`input-field ${isFocused ? "input-field--focused" : ""}`}>
        <input
          type={isPasswordType && showPassword ? "text" : type}
          className="input-field__input"
          placeholder={label}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="input-field__password-toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    )
  },
)

InputField.displayName = "InputField"

export { InputField }
