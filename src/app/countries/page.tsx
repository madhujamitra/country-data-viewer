"use client";

import React, { useEffect, useState } from "react";
import { Map } from "lucide-react";

import { Sidebar } from "@/components/SideBar/SideBar";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { SearchInput } from "@/components/ui/Search/SearchInput";
import { CountryList } from "@/components/Country/country-list";

import {
  getAllCountries,
  getAllRegions,
  Country,
} from "@/services/countryService";

import { COUNTRIES_PAGE_CONTENT } from "@/constants/constants";

import "../../styles/pages/countries-page.scss";

export default function CountriesPage() {
  const [selectedContinent, setSelectedContinent] = useState(COUNTRIES_PAGE_CONTENT.defaultContinent);
  const [searchQuery, setSearchQuery] = useState("");

  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const fetchedCountries = await getAllCountries();
        setCountries(fetchedCountries);
        const fetchedRegions = await getAllRegions();
        setRegions([COUNTRIES_PAGE_CONTENT.defaultContinent, ...fetchedRegions]);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error fetching data");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const name = country.name.common.toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase());
    const isAll = selectedContinent === COUNTRIES_PAGE_CONTENT.defaultContinent;
    const matchesRegion = isAll || country.region === selectedContinent;
    return matchesSearch && matchesRegion;
  });

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="countries-page">
      <div className="countries-page__background countries-page__background--bg" />
      <div className="countries-page__background countries-page__background--light" />

      <aside>
        <Sidebar
          user={COUNTRIES_PAGE_CONTENT.sidebar.user}
          items={[
            {
              title: COUNTRIES_PAGE_CONTENT.sidebar.items[0].title,
              href: COUNTRIES_PAGE_CONTENT.sidebar.items[0].href,
              icon: <Map className="lucide-icon" />,
            },
          ]}
        />
      </aside>

      <main className="countries-page__main">
        <div className="countries-page__content">
          <div className="countries-page__header">
            <h1 className="countries-page__title">{COUNTRIES_PAGE_CONTENT.header.title}</h1>
            <p className="countries-page__description">
              {COUNTRIES_PAGE_CONTENT.header.description}
            </p>
          </div>

          <div className="countries-page__filters">
            <Dropdown
              options={regions}
              value={selectedContinent}
              onChange={setSelectedContinent}
            />
            <SearchInput
              value={searchQuery}
              onSearch={(val) => setSearchQuery(val)}
              placeholder={COUNTRIES_PAGE_CONTENT.searchPlaceholder}
            />
          </div>

          <CountryList
            countries={filteredCountries.map((country, idx) => ({
              id: idx,
              name: country.name.common,
              continent: country.region,
              flag: country.flags?.svg || "",
            }))}
          />
        </div>
      </main>
    </div>
  );
}
