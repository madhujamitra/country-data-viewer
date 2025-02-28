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

import "../../styles/pages/countries-page.scss";

export default function CountriesPage() {
  const [selectedContinent, setSelectedContinent] = useState("All Continents");
  const [searchQuery, setSearchQuery] = useState("");

  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all countries
        const fetchedCountries = await getAllCountries();
        setCountries(fetchedCountries);

        // Fetch all unique regions
        const fetchedRegions = await getAllRegions();
        // Insert "All Continents" at the top of the list
        setRegions(["All Continents", ...fetchedRegions]);
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

  // Filter countries based on search & region
  const filteredCountries = countries.filter((country) => {
    const name = country.name.common.toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase());

    const isAll = selectedContinent === "All Continents";
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
      </aside>

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
            <Dropdown
              options={regions}
              value={selectedContinent}
              onChange={setSelectedContinent}
            />
            <SearchInput
              value={searchQuery}
              onSearch={(val) => setSearchQuery(val)}
              placeholder="Search"
            />
          </div>

          {/* Countries List */}
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
