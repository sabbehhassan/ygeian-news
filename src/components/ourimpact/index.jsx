import React from "react";
import { useNavigate } from "react-router-dom";

const ImpactSection = () => {
     const navigate = useNavigate();
  return (
    <div className="bg-[#F8F9FC]">
      {/* Top Impact Stats */}
      <div className="py-12 px-4 text-center max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">Our Impact at a Glance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-[#43B3E5] text-3xl font-bold mb-2">10,000+</h2>
            <p className="text-gray-600">
              articles aggregated daily from trusted medical sources.
            </p>
          </div>
          <div>
            <h2 className="text-[#43B3E5] text-3xl font-bold mb-2">50+</h2>
            <p className="text-gray-600">
              specialties covered for personalized news feeds.
            </p>
          </div>
          <div>
            <h2 className="text-[#43B3E5] text-3xl font-bold mb-2">97%</h2>
            <p className="text-gray-600">
              faster article review time with AI summaries.
            </p>
          </div>
          <div>
            <h2 className="text-[#43B3E5] text-3xl font-bold mb-2">1,000+</h2>
            <p className="text-gray-600">
              medical professionals already saving time with Ygeian Focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
