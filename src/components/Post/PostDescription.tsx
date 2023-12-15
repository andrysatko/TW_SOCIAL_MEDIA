"use client"
import { useState } from 'react';

const CommentDescription = ({ text }:{text:string}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTruncated = text.length > 200;
  const truncatedText = isTruncated ? text.substring(0, 300) : text;

  return (
    <div className="relative flex flex-col">
      <div className={`relative overflow-hidden ${isExpanded ? 'h-auto' : 'h-28'} px-3 pt-3`}>
        <p className={`${!isExpanded && isTruncated && 'bg-clip-text text-transparent bg-gradient-to-t from-current to-gray-700'}`}>{isExpanded ? text : truncatedText}</p>
      </div>
      {isTruncated && (
        <button 
          className=" left-0 bottom-0 bg-transparent text-orange-500 font-medium py-2 px-4 rounded"
          onClick={(e) => {setIsExpanded(!isExpanded);e.preventDefault()}}
        >
          {isExpanded ? 'Show Less' : 'Show Full'}
        </button>
      )}
    </div>
  );
};

export default CommentDescription;