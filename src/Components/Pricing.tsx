import Image from "next/image";
import React from "react";
import card from "/public/image/card.png";
import card1 from "/public/image/card1.png";
import card2 from "/public/image/card2.png";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Heading Section */}
      <h3 className="text-gray-500 uppercase text-sm tracking-wide">
        Accounts
      </h3>
      <h2 className="text-4xl font-bold mt-2">Choose your card.</h2>
      <p className="text-gray-600 mt-3">
        Senectus et netus et malesuada fames ac turpis. <br />
        Sagittis vitae et leo duis ut diam.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Basic Card */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h4 className="text-lg font-semibold">
            Basic <span className="badge bg-[#E8F2EE] text-[#5BB5A2] ml-2 font-light">Popular</span>
          </h4>
          <h3 className="text-2xl font-bold mt-2">Free</h3>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6">
            <Image
              src={card}
              alt="Basic Card"
              width={300}
              height={180}
              className="rounded-lg"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6">
            Get started
          </button>
        </div>

        {/* Premium Card */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h4 className="text-lg font-semibold">Premium</h4>
          <h3 className="text-2xl font-bold mt-2">
            $5{" "}
            <span className="text-sm font-medium text-gray-500">per month</span>
          </h3>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6">
            <Image
              src={card1}
              alt="Premium Card"
              width={300}
              height={180}
              className="rounded-lg"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6">
            Get started
          </button>
        </div>

        {/* Gold Card */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h4 className="text-lg font-semibold">Gold</h4>
          <h3 className="text-2xl font-bold mt-2">
            $10{" "}
            <span className="text-sm font-medium text-gray-500">per month</span>
          </h3>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6">
            <Image
              src={card2}
              alt="Gold Card"
              width={300}
              height={180}
              className="rounded-lg"
            />
          </div>

          <button className="btn btn-active bg-[#5bb5a2] text-white font-light w-full mt-6">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
