import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Cards = ({
  title,
  heading1st,
  headinglst,
  details,
  point1,
  point2,
  point3,
  appImage,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-gray-500 uppercase text-sm tracking-wide">
          {title}
        </h3>
        <h2 className="text-3xl font-semibold leading-snug">
          {heading1st} <br /> {headinglst}
        </h2>
        <p className="text-gray-600 leading-relaxed">{details}</p>

        {/* Bullet Points */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]" />
            </div>
            <span>{point1}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]" />
            </div>
            <span>{point2}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]" />
            </div>
            <span>{point3}</span>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src={appImage}
          alt="App Image"
          className="w-[300px] md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Cards;
