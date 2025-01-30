import type React from "react";

const CountryCardSkeleton: React.FC = () => {
  return (
    <div className="w-full h-[120px] flex items-center p-4 gap-5 bg-white shadow-md rounded-lg border border-gray-200 animate-pulse">
      <div className="rounded-full w-[80px] h-[80px] bg-gray-300"></div>
      <div className="flex-grow">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
