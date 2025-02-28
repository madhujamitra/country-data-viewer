// src/services/countryService.ts
export interface CurrencyDetails {
  name: string;
  symbol: string;
}
export interface Country {
    currencies: Record<string, CurrencyDetails>;
    languages: string
    name: {
      common: string
      official: string
   
    }
    population: number
    region: string
    capital?: string[]
    flags?: {
      svg?: string
      png?: string
    }

  }
  
  /**
   * Fetches all countries from the REST Countries API
   */
  export async function getAllCountries(): Promise<Country[]> {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all")
      if (!res.ok) {
        throw new Error(`Failed to fetch countries: ${res.status}`)
      }
      const data = await res.json()
      return data
    } catch (err) {
      console.error("Error in getAllCountries:", err)
      return []
    }
  }
  
  /**
   * Fetch countries by name (for search)
   */
  export async function getCountriesByName(name: string): Promise<Country[]> {
    if (!name) return []
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error searching countries by name "${name}":`, error)
      return []
    }
  }
  
  /**
   * Fetch countries by region (continent)
   */
  export async function getCountriesByRegion(region: string): Promise<Country[]> {
    if (!region) return []
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching countries by region "${region}":`, error)
      return []
    }
  }
  
  /**
   * Fetch a single country (for detail page) – e.g., by name or code
   */
  export async function getCountryByName(name: string): Promise<Country | null> {
    const results = await getCountriesByName(name)
    if (results.length > 0) {
      return results[0]
    }
    return null
  }
  
  /**
   * Collect unique regions from all countries
   */
  export async function getAllRegions(): Promise<string[]> {
    try {
      const countries = await getAllCountries()
  

      const regionSet = new Set<string>()
  
      for (const country of countries) {
   
        if (country.region) {
          regionSet.add(country.region)
        }
      }
  
  
      const uniqueRegions = Array.from(regionSet).sort()
  
      return uniqueRegions
    } catch (error) {
      console.error("Error in getAllRegions:", error)
      return []
    }
  }
  