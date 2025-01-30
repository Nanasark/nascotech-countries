import type { CountryCardProps } from "../types";
import { Users, Globe, Flag } from "lucide-react";
import "../App.css";

const CountryCard = ({ name, flag, region, population }: CountryCardProps) => {
  const getPopulationColor = (pop: number): string => {
    if (pop <= 1000000) return "text-blue-600";
    if (pop <= 100000000) return "text-green-600";
    return "text-red-600";
  };

  return (
    <div className="w-full text-[16px] h-[120px] flex items-center p-4 gap-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <img
        src={flag || "/placeholder.svg"}
        alt={`Flag of ${name}`}
        className="rounded-full w-[80px] h-[80px] object-cover border-2 border-gray-300"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Flag className="w-4 h-4" /> {name}
        </h2>
        <p className="text-gray-600 flex items-center gap-2">
          <Globe className="w-4 h-4" /> {region}
        </p>
        <p
          className={`flex items-center gap-2 ${getPopulationColor(
            population
          )}`}
        >
          <Users className="w-4 h-4" />
          Population: {population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
