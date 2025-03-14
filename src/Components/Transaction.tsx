import Image from "next/image";
import React from "react";
import appImage from "/public/image/app1.png";
import { IoMdCheckmark } from "react-icons/io";

const Transaction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-gray-500 uppercase text-sm tracking-wide">
          Transactions
        </h3>
        <h2 className="text-3xl font-semibold leading-snug">
          Send & receive <br /> money instantly
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        {/* Bullet Points */}
        <div className="space-y-4">
          <p className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]"/>
            </div>
            <span>Malesuada Ipsum</span>
          </p>
          <p className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]"/>
            </div>
            <span>Vestibulum</span>
          </p>
          <p className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <IoMdCheckmark className="text-[#5BB5A2]"/>
            </div>
            <span>Parturient Lorem</span>
          </p>
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

export default Transaction;
