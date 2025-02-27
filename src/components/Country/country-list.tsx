import React from "react"
import "./country-list.scss" // Import the SCSS file

interface Country {
  id: number
  name: string
  continent: string
  flag: string
}

interface CountryListProps {
  countries: Country[]
}

export function CountryList({ countries }: CountryListProps) {
  return (
    <div className="country-list">
      {/* Header Row */}
      <div className="country-list__header-row">
        <div className="country-list__header-cell">Country Identifier</div>
        <div className="country-list__header-cell">Country</div>
        <div className="country-list__header-cell">Continent</div>
      </div>

      {/* Rows */}
      <div className="country-list__rows">
        {countries.map((country) => (
          <div key={country.id} className="country-list__row">
            <div className="country-list__cell">
              {/* Avatar or placeholder for identifier */}
              <div className="country-list__identifier-avatar" />
            </div>
            <div className="country-list__cell">{country.name}</div>
            <div className="country-list__cell">{country.continent}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
