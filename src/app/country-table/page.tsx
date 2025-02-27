import React from "react"
import { ListItem } from "@/components/ListItem/ListItem"
import "../../styles/pages/country-table.scss"

interface Country {
  id: string
  name: string
  continent: string
  flag?: string
}

interface CountryTableProps {
  countries: Country[]
  className?: string
}

export function CountryTable({ countries, className }: CountryTableProps) {
  return (
    <div className={`country-table ${className || ""}`}>
      {/* Table Headers */}
      <div className="country-table__header-row">
        <div className="country-table__header-cell">Country Identifier</div>
        <div className="country-table__header-cell">Country</div>
        <div className="country-table__header-cell">Continent</div>
      </div>

      {/* Table Body */}
      <div className="country-table__body">
        {countries.map((country) => (
          <ListItem
            key={country.id}
            id={country.id}
            title={country.name}
            subtitle={country.continent}
            iconUrl={country.flag}
          />
        ))}
      </div>
    </div>
  )
}

// Dummy data for demonstration; replace with your real data
const dummyCountries: Country[] = [
  { id: "1", name: "Canada", continent: "North America", flag: "https://flagcdn.com/ca.svg" },
  { id: "2", name: "France", continent: "Europe", flag: "https://flagcdn.com/fr.svg" },
  { id: "3", name: "Japan", continent: "Asia", flag: "https://flagcdn.com/jp.svg" },
]

// Default export for Next.js page
export default function CountryTablePage() {
  return <CountryTable countries={dummyCountries} />
}
