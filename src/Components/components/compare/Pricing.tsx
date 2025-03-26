import Image from "next/image";
import React from "react";
import card from "/public/image/card.png";
import card1 from "/public/image/card1.png";
import card2 from "/public/image/card2.png";

const Pricing = () => {
  return (
    <section className="bg-white">
      <div className="">
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl ml-auto mx-24">
        {/* Basic Card */}
        <div className="bg-white p-6 rounded-xl">
          <div className="text-center">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 inline-flex items-center justify-center">
              Basic
              <span className="badge bg-[#E8F2EE] text-[#5BB5A2] ml-2 font-light px-2 py-1 text-xs sm:text-sm">
                Popular
              </span>
            </h4>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 text-gray-900">
              Free
            </h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-2 md:mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="mt-6 w-full">
            <Image
              src={card}
              alt="Basic Card"
              className="rounded-lg w-full h-auto"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6 border-none">
            Get started
          </button>
        </div>

        {/* Premium Card */}
        <div className="bg-white p-6 rounded-xl">
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            Premium
          </h4>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 text-gray-900">
            $5
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-500 ml-1">
              per month
            </span>
          </h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-2 md:mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6 w-full">
            <Image
              src={card1}
              alt="Premium Card"
              className="rounded-lg w-full h-auto"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6 border-none">
            Get started
          </button>
        </div>

        {/* Gold Card */}
        <div className="bg-white p-6 rounded-xl">
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            gold
          </h4>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 text-gray-900">
            $10
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-500 ml-1">
              per month
            </span>
          </h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-2 md:mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6 w-full">
            <Image
              src={card2}
              alt="Gold Card"
              className="rounded-lg w-full h-auto"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6 border-none">
            Get started
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Pricing;
