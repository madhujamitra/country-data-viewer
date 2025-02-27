import React from "react"
import "./country-info-card.scss" // Import the SCSS file

interface CountryInfoCardProps {
  label: string
  value: string | number | React.ReactNode
  className?: string
}

export function CountryInfoCard({ label, value, className }: CountryInfoCardProps) {
  return (
    <div className={`country-info-card ${className || ""}`}>
      <div className="country-info-card__label">{label}</div>
      <div className="country-info-card__value">{value}</div>
    </div>
  )
}
