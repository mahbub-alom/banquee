import React from "react";
import bannerImage from "/public/compare/cards.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#E8F2EE]">
      <div className="max-w-6xl mx-auto flex justify-between items-center pt-20">
        <div className="w-1/4">
          <h3 className="text-gray-900 text-xl font-semibold">Compare Cards</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight my-2">
          The ideal
          card for you
          </h1>
        </div>
        <div>
          <Image src={bannerImage} alt="banner image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
