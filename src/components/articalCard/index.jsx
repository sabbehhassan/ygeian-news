// src/components/article-card/index.jsx
import React from "react";
import { useSelector } from "react-redux";
import facebook from "../../assets/icons/fblogo.png";
import twitter from "../../assets/icons/xlogo.png";
import linkedin from "../../assets/icons/linkedinlogo.png";
import copy from "../../assets/icons/copy.png";

const ArticleCard = () => {
  const article = useSelector((state) => state.news.singleArticle);

  if (!article) {
    return (
      <div className="text-center text-gray-500 mt-10 text-lg">
        No article selected.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px] w-full max-w-[1080px] mx-auto px-4">
      {/* Category and Reading Time */}
      <div className="flex items-center gap-3 text-[14px] text-[#375E6C]">
        <span className="bg-[#E5F4F9] text-[#43B3E5] px-3 py-1 rounded-full font-semibold">
          Cardiology
        </span>
        <span className="text-[#96A7AD]">3 min read</span>
      </div>

      {/* Article Title */}
      <h1 className="text-[28px] sm:text-[36px] font-[700] text-[#002A3C] leading-[130%]">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-[#375E6C] text-[16px]">
        {article.description ||
          "Recent immunotherapy breakthroughs harness the immune system, offering hope for more effective cancer treatments beyond traditional chemotherapy and radiation."}
      </p>

      {/* Article Image */}
      {article.image && (
        <img
          src={article.image}
          alt="Article"
          className="w-full h-[240px] sm:h-[340px] md:h-[440px] object-cover rounded-[16px]"
        />
      )}

      {/* Mobile Social + Copy Link */}
      <div className="flex justify-between items-center lg:hidden">
        <div className="flex gap-4">
          {[facebook, twitter, linkedin].map((icon, idx) => (
            <div
              key={idx}
              className="w-[40px] h-[40px] bg-white flex justify-center items-center border border-[#D6E0E4] rounded-[8px]"
            >
              <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
        <button className="flex gap-2 items-center border border-[#D6E0E4] px-4 py-2 rounded-[8px] text-[14px] font-medium">
          <img src={copy} alt="copy icon" className="w-[20px] h-[20px]" />
          Copy link
        </button>
      </div>

      {/* Author Details & Socials (Desktop Only) */}
      <div className="hidden lg:flex justify-between items-center py-4">
        <div className="flex gap-16">
          <div>
            <p className="text-[14px] text-[#96A7AD] font-[600]">Written by</p>
            <p className="text-[16px] text-[#002A3C] font-[400]">
              Dr. Emily Johnson, MD, <br /> Oncology Specialist
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#96A7AD] font-[600]">Published by</p>
            <p className="text-[16px] text-[#002A3C] font-[400]">
              {article.publishedBy || "Health Times"}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#96A7AD] font-[600]">
              Date of publication
            </p>
            <p className="text-[16px] text-[#002A3C] font-[400]">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-row-reverse gap-2 items-center">
          {[facebook, twitter, linkedin].map((icon, idx) => (
            <div
              key={idx}
              className="w-[40px] h-[40px] bg-white flex justify-center items-center border border-[#D6E0E4] rounded-[8px]"
            >
              <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
            </div>
          ))}
          <button className="flex gap-2 items-center border border-[#D6E0E4] px-3 py-2 rounded-[8px] text-[14px] font-medium">
            <img src={copy} alt="copy icon" className="w-[20px] h-[20px]" />
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
