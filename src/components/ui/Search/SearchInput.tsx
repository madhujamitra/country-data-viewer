"use client"

import React, { useState, forwardRef } from "react"
import Image from "next/image"
import { ICONS } from "@/constants/constants"
import "./SearchInput.scss"

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSearch?: (value: string) => void
  value?: string
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

 
    const iconSrc = isFocused ? ICONS.searchDark : ICONS.searchLight

    return (
      <div className={`search-input ${isFocused ? "search-input--focused" : ""}`}>
        <div className="search-input__icon">
          <Image src={iconSrc} alt="Search Icon" width={20} height={20} />
        </div>
        <input
          type="text"
          className="search-input__input"
          ref={ref}
          value={value} // controlled value
          onChange={(e) => onSearch?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export { SearchInput }
