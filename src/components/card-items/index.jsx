// src/components/card-items/index.jsx
import React from "react";
import NewsCard from "../card/index.jsx";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardItems = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate("/article", { state: item }); 
  };

  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 ml-6">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </button>
          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer mr-6">
            Sort by:
            <ChevronDown className="w-4 h-4 ml-2" />
          </div>
        </div>

        <div className="border-t border-gray-200 mb-6 mx-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data?.map((item, idx) => (
            <div key={idx} onClick={() => handleCardClick(item)} className="cursor-pointer">
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItems;
