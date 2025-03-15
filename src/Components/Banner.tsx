"use client";

import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bannerImg from "/public/image/cards.png";

const Banner = () => {
  return (
    <section className="bg-[#E8F2EE] text-center h-[50vh] md:h-[89vh] flex flex-col  relative overflow-hidden">
      <div className="max-w-xl px-6 md:px-0 mx-auto text-center flex-grow flex flex-col pt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">All in one card.</h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Senectus et netus et malesuada fames ac turpis.
          <br className="hidden md:block" /> Sagittis vitae et leo duis ut diam.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <Button title="Open Account" />
          <button className="text-[#5bb5a2] font-bold flex items-center justify-center gap-2">
            Compare Cards <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full absolute bottom-0 flex justify-center">
        <Image 
          src={bannerImg} 
          alt="banner image" 
          className="w-[90%] md:w-auto max-w-lg md:max-w-2xl lg:max-w-4xl"
        />
      </div>
    </section>
  );
};

export default Banner;
