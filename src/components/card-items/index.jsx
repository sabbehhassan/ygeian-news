import React from "react";
import NewsCard from "../card/index.jsx";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const CardItems = ({ data }) => {
  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Top controls aligned with card grid */}
        <div className="flex justify-between items-center mb-4">
          {/* Filters Button shifted slightly right */}
          <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 ml-6">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </button>

          {/* Sort by shifted slightly left */}
          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer mr-6">
            Sort by: Most Recent
            <ChevronDown className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Divider Line exactly under the top controls/cards */}
        <div className="border-t border-gray-200 mb-6 mx-6" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data?.map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItems;
