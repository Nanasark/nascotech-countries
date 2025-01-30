import type { Country } from "../types";
import {
  MapPin,
  Users,
  Globe,
  LanguagesIcon as Language,
  Square,
} from "lucide-react";
import type React from "react";

export default function DetailsCard({
  name,
  subregion,
  population,
  flags,
  languages,
  area,
  capital,
  region,
}: Country) {
  return (
    <section className="text-gray-800 flex flex-col p-5 rounded-lg w-full bg-white shadow-lg min-h-screen">
      <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
        <img
          src={flags.svg || "/placeholder.svg"}
          alt={`Flag of ${name.official}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-3xl font-bold">{name.official}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoItem icon={<MapPin />} label="Capital" value={capital || "N/A"} />
        <InfoItem icon={<Users />} label="Region" value={region} />
        <InfoItem
          icon={<Globe />}
          label="Subregion"
          value={subregion || "N/A"}
        />
        <InfoItem
          icon={<Users />}
          label="Population"
          value={population.toLocaleString()}
        />
        <InfoItem
          icon={<Language />}
          label="Languages"
          value={Object.values(languages || {}).join(", ")}
        />
        <InfoItem
          icon={<Square />}
          label="Area"
          value={`${area?.toLocaleString() || "N/A"} km²`}
        />
      </div>
      ={" "}
      {/* <div className="mt-6">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          title={`Map of ${name.official}`}
        ></iframe>
      </div> */}
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string[] | string;
}) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
