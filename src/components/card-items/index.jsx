import React from "react";
import NewsCard from "../card/index.jsx";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSingleArticle } from "../../features/news/news.slice.js";

const CardItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.news.items);

  const handleCardClick = (item) => {
    dispatch(setSingleArticle(item));
    navigate("/article", { state: item });
  };

  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-500">No articles found.</p>;
  }

  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Filters and Sort UI */}
        {/* ... your existing UI ... */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {(articles || []).slice(0, 18).map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer"
            >
              <NewsCard article={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItems;