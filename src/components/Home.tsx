import { useCountryContext } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";
import CountryCardSkeleton from "./skeleton/CountryCardSkeleton";
import "../App.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Loader } from "lucide-react";

function Home() {
  const { countries, loading } = useCountryContext();

  return (
    <main className="pl-[10px] pr-[10px] pt-10 pb-10 flex flex-col gap-5 bg-gray-100 items-center text-black w-full min-h-[700px]">
      <h1 className="font-bol text-4xl text-cyan-900">Countries List</h1>
      <div>
        <SearchBar />
      </div>

      {loading ? (
        <>
          <Loader className="animate-spin h-10 w-10 text-blue-500 mb-4" />
          <p className="text-gray-600">Loading countries...</p>
          <div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-3 w-full">
            {[...Array(12)].map((_, index) => (
              <CountryCardSkeleton key={index} />
            ))}
          </div>
        </>
      ) : (
        <section className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-3 w-full">
          {countries.length > 0
            ? countries.map((country) => (
                <Link
                  key={country.name.common}
                  to={`/country/${country.name.common}`}
                >
                  <CountryCard
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                  />
                </Link>
              ))
            : [...Array(9)].map((_, index) => (
                <CountryCardSkeleton key={index} />
              ))}
        </section>
      )}
    </main>
  );
}

export default Home;
