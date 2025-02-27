"use client"

import React, { useState } from "react"
import { Map } from "lucide-react"

import { Sidebar } from "@/components/SideBar/SideBar"
//import { Dropdown } from "@/components/ui/dropdown"
import { SearchInput } from "@/components/ui/Search/SearchInput"
import { CountryList } from "@/components/Country/country-list"

import "../../styles/pages/countries-page.scss" // <-- Import the SCSS file

// Sample data - in a real app this would come from an API
const countries = [
  { id: 1, name: "Romania", continent: "Europe", flag: "/placeholder.svg" },
  { id: 2, name: "Russia", continent: "Europe/Asia", flag: "/placeholder.svg" },
  { id: 3, name: "Rwanda", continent: "Africa", flag: "/placeholder.svg" },
]

const continents = [
  "All Continents",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
  "Antarctica",
]

export default function CountriesPage() {
  const [selectedContinent, setSelectedContinent] = useState("All Continents")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter countries based on search and continent
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesContinent =
      selectedContinent === "All Continents" || country.continent === selectedContinent
    return matchesSearch && matchesContinent
  })

  return (
    <div className="countries-page">
      <Sidebar
        user={{
          name: "Brian Johnson",
          image: "/placeholder.svg",
          initials: "BJ",
        }}
        items={[
          {
            title: "Countries",
            href: "/countries",
            icon: <Map className="lucide-icon" />,
          },
        ]}
      />

      <main className="countries-page__main">
        <div className="countries-page__content">
          {/* Header */}
          <div className="countries-page__header">
            <h1 className="countries-page__title">Countries</h1>
            <p className="countries-page__description">
              A database of the countries of the world
            </p>
          </div>

          {/* Filters */}
          <div className="countries-page__filters">
            {/* <Dropdown
              options={continents}
              value={selectedContinent}
              onChange={setSelectedContinent}
            /> */}
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search countries"
            />
          </div>

          {/* Countries List */}
          <CountryList countries={filteredCountries} />
        </div>
      </main>
    </div>
  )
}
