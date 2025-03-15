import Image from "next/image";
import React from "react";
import apple from "/public/image/Apple Store.png";
import google from "/public/image/Google Store.png";
import app from "/public/image/app.png";
import { IoMdCheckmark } from "react-icons/io";

const AppPromo = () => {
  return (
    <div className="bg-[#5AB3A7] py-16 px-6 md:px-12 rounded-xl flex flex-col md:flex-row  md:items-stretch max-w-6xl mx-auto h-[87.5vh] mb-20 md:gap-30">
      {/* Left Side - Text Content */}
      <div className="text-white md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold leading-tight">
          One app. <br /> One banking.
        </h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ffffff33] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>
              <p>Instant transactions</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ffffff33] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>
              <p>Payment Worldwide</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-15">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ffffff33] flex items-center justify-center">
                  <IoMdCheckmark className="text-white" />
                </div>
                <p>Savings Account</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ffffff33] flex items-center justify-center">
                  <IoMdCheckmark className="text-white" />
                </div>
                <p>100% mobile banking</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Store & Play Store Buttons */}
        <div className="mt-6 flex gap-4">
          <Image src={apple} alt="App Store" width={150} height={50} />
          <Image src={google} alt="Google Play" width={150} height={50} />
        </div>
      </div>

      {/* Right Side - Mobile App Image (Perfectly Bottom-Aligned) */}
      <div className="md:w-1/2 mt-10">
        <Image
          src={app}
          alt="App Preview"
          width={350}
          height={500}
          className="self-end"
        />
      </div>
    </div>
  );
};

export default AppPromo;
