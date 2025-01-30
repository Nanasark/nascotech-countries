import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";
import DetailsCard from "./DetailsCard";
import { ArrowLeft } from "lucide-react";
import DetailsCardSkeleton from "./skeleton/DetailsCardSkeleton";

export default function CountryDetail() {
  const { name } = useParams<{ name: string }>();
  const { countries, loading } = useCountryContext();
  const country = countries.find((c) => c.name.common === name);
  if (!country) {
    return <div className="text-center mt-10">Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-green-700 hover:text-green-900 mb-6 transition-colors duration-200 ease-in-out"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to all countries
        </Link>
        {loading ? (
          <DetailsCardSkeleton />
        ) : (
          <DetailsCard
            area={country.area}
            capital={country.capital}
            flags={country.flags}
            languages={country.languages}
            name={country.name}
            population={country.population}
            subregion={country.subregion}
            region={country.region}
          />
        )}
      </div>
    </div>
  );
}
