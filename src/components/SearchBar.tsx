import type React from "react";
import { useCountryContext } from "../context/CountryContext";
import { Search, ChevronDown } from "lucide-react";

const SearchBar: React.FC = () => {
  const { searchTerm, sortOrder, updateSearchTerm, updateSortOrder } =
    useCountryContext();

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <div className="relative w-full sm:w-auto flex-grow">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="relative w-full sm:w-[220px]">
        <select
          value={sortOrder || "no-sort"}
          onChange={(e) =>
            updateSortOrder(
              e.target.value === "no-sort"
                ? null
                : (e.target.value as "asc" | "desc")
            )
          }
          className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="no-sort">Sort by population</option>
          <option value="asc">Population (Low to High)</option>
          <option value="desc">Population (High to Low)</option>
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
