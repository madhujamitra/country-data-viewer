import React from "react"
import Image from "next/image"
import { Map } from "lucide-react"

import { Sidebar } from "@/components/SideBar/SideBar"
import { CountryInfoCard } from "@/components/CountryInfoCard/country-info-card"

import "../../../styles/pages/country-page.scss"
// This would typically come from an API or database
const countryData = {
  name: "China",
  description: "A short description about China",
  flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  population: "1,411,000,000",
  capital: "Beijing",
  language: "Mandarin",
  currency: "Chinese Yuan",
}

export default function CountryPage() {
  const user = {
    name: "Brian Johnson",
    image: "/placeholder.svg?height=80&width=80",
    initials: "BJ",
  }

  const navigationItems = [
    {
      title: "Countries",
      href: "/countries",
      icon: <Map className="lucide-icon" />, 
    },
  ]

  return (
    <div className="country-page">
      {/* Sidebar */}
      <Sidebar user={user} items={navigationItems} />

      {/* Main Section */}
      <main className="country-page__main">
        <div className="country-page__content">
          {/* Header */}
          <header className="country-page__header">
            <h1 className="country-page__title">{countryData.name}</h1>
            <p className="country-page__description">{countryData.description}</p>
          </header>

          {/* Grid of Info Cards */}
          <div className="country-page__grid">
            <CountryInfoCard
              label="Country Flag"
              value={
                <div className="country-page__flag">
                  <Image
                    src={countryData.flag || "/placeholder.svg"}
                    alt={`Flag of ${countryData.name}`}
                    fill
                    className="country-page__flag-image"
                  />
                </div>
              }
            />
            <CountryInfoCard label="Population" value={countryData.population} />
            <CountryInfoCard label="Capital" value={countryData.capital} />
            <CountryInfoCard label="Language" value={countryData.language} />
            <CountryInfoCard label="Currency" value={countryData.currency} />
          </div>
        </div>
      </main>
    </div>
  )
}
