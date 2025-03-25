"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../ui/button";
import bannerImg from "/public/image/cards.png";

const Banner = () => {
  return (
    <section className="bg-[#E8F2EE] text-center h-[50vh] md:h-[100vh] flex flex-col  relative overflow-hidden">
      <div className="max-w-lg md:max-w-xl xl:max-w-1/2 px-4 md:px-0 mx-auto text-center flex-grow flex flex-col pt-16 md:pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-gray-900">
          All in one card.
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-loose">
          Senectus et netus et malesuada fames ac turpis.
          <br className="hidden md:block" /> Sagittis vitae et leo duis ut diam.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
          <Button className="px-6 py-3 text-sm sm:text-base md:text-lg">
            Open Account
          </Button>
          <button className="text-[#5bb5a2] flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
            Compare Cards <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <Image
          src={bannerImg}
          alt="banner image"
          layout="responsive"
          width={1920}
          height={800}
          className="w-full max-w-none"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
