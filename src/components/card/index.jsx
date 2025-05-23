import React from "react";
import {
  MessageCircle,
  ThumbsUp,
  Bookmark,
  Share2,
  FileDown,
} from "lucide-react";
import Mfavicon from "../../assets/Favicons/Micon.png";

const NewsCard = ({ image, title, time, comments, likes }) => {
  return (
    <div className="w-[346px] h-[475px] rounded-[16px] border border-gray-200 shadow-sm bg-white flex flex-col p-3">
      {/* Image Section with spacing from card border */}
      <div className="rounded-[10px] overflow-hidden mb-3">
        <img
          src={image}
          alt="Card"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Source Header */}
        <div className="flex items-center space-x-2 ">
          <img src={Mfavicon} alt="M" className="w-5 h-5" />
          <span className="text-sm text-gray-500 font-medium">Medscape</span>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 leading-snug mb-1">
          {title}
        </h2>

        {/* Time */}
        <span className="text-sm text-gray-400 mb-10">{time}</span>

        {/* Icons Footer */}
        <div className="pt-2  border-gray-200 flex justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <MessageCircle className="w-6 h-6" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-6 h-6" />
            <span>{likes}</span>
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
          <Share2 className="w-6 h-6 cursor-pointer" />
          <FileDown className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
