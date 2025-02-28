import React from "react"
import "./country-list.scss" // Import the SCSS file
import Image from "next/image"
import { useRouter } from "next/navigation"

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
  const router = useRouter()

  function handleCountryClick(countryName: string) {
    router.push(`/countries/${encodeURIComponent(countryName)}`)
  }
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
        {countries.map((country) => {
const hasFlag = Boolean(country.flag)
          return (
            <div key={country.id} className="country-list__row"   onClick={() => handleCountryClick(country.name)}
          style={{ cursor: "pointer" }}>
            <div className="country-list__cell">
            {hasFlag ? (
                  <Image
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                    width={32}
                    height={32}
                    className="country-list__flag"
                  />
                ) : (
                  // If no flag, show the placeholder div
                  <div className="country-list__identifier-avatar" />
                )}
            </div>
            <div className="country-list__cell">{country.name}</div>
            <div className="country-list__cell">{country.continent}</div>
          </div>
          )

        }
          
          
        )}
      </div>
    </div>
  )
}
