// src/pages/ArticlePage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/articalCard";

const ArticlePage = () => {
  const { state: article } = useLocation();

  if (!article) {
    return <div className="text-red-500 text-center py-10">Article not found</div>;
  }

  return (
    <div className="px-4 py-8">
      <ArticleCard article={article} />
    </div>
  );
};

export default ArticlePage;
