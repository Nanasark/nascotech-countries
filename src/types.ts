export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3?: string;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  languages: { [key: string]: string };
  flags: {
    svg: string;
    png: string;
  };
  maps?: {
    googleMaps: string;
    openStreetMaps: string;
  };
}

export interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortOrder: "asc" | "desc" | null;
  updateSearchTerm: (term: string) => void;
  updateSortOrder: (order: "asc" | "desc" | null) => void;
}

export interface CountryCardProps {
  name: string;
  population: number;
  flag: string;
  region: string;
}
