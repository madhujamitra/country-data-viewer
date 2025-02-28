"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import "./Dropdown.scss"

interface DropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

export function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`dropdown ${isOpen ? "dropdown--open" : ""}`} ref={dropdownRef}>
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {value}
        <ChevronDown className="dropdown__icon" />
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown__option"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
