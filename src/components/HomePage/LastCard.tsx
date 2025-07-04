/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: any;
}

const LastCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" text-white rounded-lg shadow-lg p-2 md:p-4 md:w-full w-80 flex flex-col items-center hover:scale-110 transition-all duration-300">
      {/* Image */}
      <div className="w-72 h-32 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-[#F74270] mb-2 text-center">
        {title}
      </h2>

      {/* Description */}
      <p className="text-center text-sm text-[#C4C4C4]">{description}</p>
    </div>
  );
};

export default LastCard;
