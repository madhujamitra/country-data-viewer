"use client"

import React, { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import Image from "next/image"
import { Map } from "lucide-react"
import { getCountriesByName, Country } from "@/services/countryService"

import { Sidebar } from "@/components/SideBar/SideBar"
import { CountryInfoCard } from "@/components/CountryInfoCard/country-info-card"
import { COUNTRY_PAGE_CONTENT } from "@/constants/constants"
import "../../../styles/pages/country-page.scss"

export default function CountryPage() {
  const [countryData, setCountryData] = useState<{
    name: string;
    description: string;
    flag: string;
    population: string;
    capital: string;
    language: string;
    currency: string;
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const params = useParams() as { country: string };
  console.log(params,"ghsdfjshdf");

 
  useEffect(() => {
    async function fetchCountry() {
      try {
        const results: Country[] = await getCountriesByName(params.country)
        if (!results || !results.length) {
          setError("Country not found")
          return
        }
        const country = results[0]
        setCountryData({
          name: country.name.common,
          description: `${COUNTRY_PAGE_CONTENT.descriptionPrefix}${country.name.common}`,
          flag: country.flags?.svg || "",
          population: country.population?.toLocaleString() || "Unknown",
          capital: country.capital?.[0] || "Unknown",
          language: Object.values(country.languages || {})[0] || "N/A",
          currency: Object.values(country.currencies || {})[0]?.name || "N/A",
        })
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Error fetching data")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchCountry()
  }, [params])

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>
  if (loading || !countryData) return <div>Loading...</div>

  const user = COUNTRY_PAGE_CONTENT.sidebar.user
  const navigationItems = [
    {
      title: COUNTRY_PAGE_CONTENT.sidebar.items[0].title,
      href: COUNTRY_PAGE_CONTENT.sidebar.items[0].href,
      icon: <Map className="lucide-icon" />,
    },
  ]

  return (
    <div className="country-page">
      <div className="country-page__background country-page__background--bg" />
      <div className="country-page__background country-page__background--light" />

      <Sidebar user={user} items={navigationItems} />

      <main className="country-page__main">
        <div className="country-page__content">
          <header className="country-page__header">
            <h1 className="country-page__title">{countryData.name}</h1>
            <p className="country-page__description">{countryData.description}</p>
          </header>

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
