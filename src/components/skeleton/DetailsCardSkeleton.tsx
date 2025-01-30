import type React from "react";

const DetailsCardSkeleton: React.FC = () => {
  return (
    <section className="text-gray-800 flex flex-col p-5 rounded-lg w-full bg-white shadow-lg min-h-screen animate-pulse">
      <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden bg-gray-300"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg"
          >
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="flex-grow">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailsCardSkeleton;
