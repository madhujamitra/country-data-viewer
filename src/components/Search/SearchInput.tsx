"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { Search } from "lucide-react"
import "../Search/SearchInput.scss"

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({onSearch, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`search-input ${isFocused ? "search-input--focused" : ""}`}>
      <div className="search-input__icon">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        className="search-input__input"
        placeholder="Search"
        ref={ref}
        onChange={(e) => onSearch?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  )
})

SearchInput.displayName = "SearchInput"

export { SearchInput }
