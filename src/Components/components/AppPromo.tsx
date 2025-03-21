import Image from "next/image";
import React from "react";
import apple from "/public/image/Apple Store.png";
import google from "/public/image/Google Store.png";
import app from "/public/image/app.png";
import { IoMdCheckmark } from "react-icons/io";

const AppPromo = () => {
  return (
    <div className="bg-[#5AB3A7] py-12 px-6 md:px-16 rounded-xl flex flex-col md:flex-row items-center md:items-stretch max-w-6xl mx-auto min-h-[80vh] md:gap-16">
      {/* Left Side - Text Content */}
      <div className="text-white md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          One app. <br className="hidden md:block" /> One banking.
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

        {/* App Store & Play Store Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <Image src={apple} alt="App Store" width={150} height={50} />
          <Image src={google} alt="Google Play" width={150} height={50} />
        </div>
      </div>

      {/* Right Side - Mobile App Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <Image
          src={app}
          alt="App Preview"
          width={300}
          height={500}
          className="w-3/4 md:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default AppPromo;
