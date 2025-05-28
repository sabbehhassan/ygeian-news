// src/pages/ArticlePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../components/articalCard";
import { useSelector } from "react-redux";

const ArticlePage = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.news.items);

  // Safely find article by ID
  const article = articles?.find((item) => item.id?.toString() === id?.toString());

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
