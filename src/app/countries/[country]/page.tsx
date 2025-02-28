// app/country/page.tsx (for example)



import React from "react"
import Image from "next/image"
import { Map } from "lucide-react"
import { getCountriesByName, Country } from "@/services/countryService"
import { notFound } from "next/navigation"

import { Sidebar } from "@/components/SideBar/SideBar"
import { CountryInfoCard } from "@/components/CountryInfoCard/country-info-card"

import "../../../styles/pages/country-page.scss"

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const resolvedParams = await params;
  const countryName = decodeURIComponent(resolvedParams.country);

  // 1) Fetch the data from the service
  const results: Country[] = await getCountriesByName(countryName)
  if (!results || !results.length) {
    notFound() // Renders Next.js 404 page
  }

  // 2) Extract the first country from results
  const country = results[0]

  // 3) Prepare the data for display
  const countryData = {
    name: country.name.common,
    description: `A short description about ${country.name.common}`,
    flag: country.flags?.svg || "",
    population: country.population?.toLocaleString() || "Unknown",
    capital: country.capital?.[0] || "Unknown",
    language: Object.values(country.languages || {})[0] || "N/A",
    currency: Object.values(country.currencies || {})[0]?.name || "N/A",
  }

  // 4) A user object for your Sidebar
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
            <div className="country-page__background country-page__background--bg" />
      <div className="country-page__background country-page__background--light" />

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
          
            <CountryInfoCard label="Language" value={countryData.language} />
            <CountryInfoCard label="Capital" value={countryData.capital} />
            <CountryInfoCard label="Currency" value={countryData.currency} />
          </div>
        </div>
      </main>
    </div>
  )
}
