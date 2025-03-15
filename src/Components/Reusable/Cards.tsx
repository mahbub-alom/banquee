import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

// Define Props Type
interface CardProps {
  title: string;
  heading1st: string;
  headinglst: string;
  details: string;
  point1: string;
  point2: string;
  point3: string;
  appImage: string;
}

const Cards: React.FC<CardProps> = ({
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
          {[point1, point2, point3].map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                <IoMdCheckmark className="text-[#5BB5A2]" />
              </div>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src={appImage}
          alt="App Image"
          width={400}
          height={400}
          className="w-[300px] md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Cards;
