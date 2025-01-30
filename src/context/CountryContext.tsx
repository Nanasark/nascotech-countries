import type React from "react";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import type { Country, CountriesState } from "../types";

const CountryContext = createContext<CountriesState | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch countries. Please try again later.");
        console.error(error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const filteredAndSortedCountries = useMemo(() => {
    let result = countries;

    // Filter countries based on search term
    if (searchTerm) {
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort countries based on sortOrder
    if (sortOrder) {
      result = [...result].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
    }

    return result;
  }, [countries, searchTerm, sortOrder]);

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  const updateSortOrder = (order: "asc" | "desc" | null) => {
    setSortOrder(order);
  };

  return (
    <CountryContext.Provider
      value={{
        countries: filteredAndSortedCountries,
        loading,
        error,
        searchTerm,
        sortOrder,
        updateSearchTerm,
        updateSortOrder,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
