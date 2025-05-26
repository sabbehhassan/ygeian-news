import React from 'react';
import { FaBrain, FaRegFileAlt, FaRegBookmark, FaStethoscope } from 'react-icons/fa';

const Unique = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Makes Us Unique</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full">
          <FaBrain size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Specialty-Focused News Feed</h3>
          <p className="text-gray-600">Stay up-to-date with articles tailored to your field.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full">
          <FaRegFileAlt size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Summarization & Key Points</h3>
          <p className="text-gray-600">Get concise summaries and actionable insights on any article.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full">
          <FaRegBookmark size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Save & Share Articles</h3>
          <p className="text-gray-600">Bookmark your favorites or share with colleagues.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full">
          <FaStethoscope size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multi-Specialty Insights</h3>
          <p className="text-gray-600">Expand your knowledge by following additional specialties.</p>
        </div>
      </div>
    </div>
  );
};

export default Unique;
