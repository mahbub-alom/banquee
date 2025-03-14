"use client";

import Link from "next/link";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bannerImg from "../../public/image/cards.png";

const Banner = () => {
  return (
    <section className="bg-[#E8F2EE] text-center py-20 h-[89vh] mb-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">All in one card.</h1>
        <p className="mt-4 text-gray-600">
          Senectus et netus et malesuada fames ac turpis.
          <br /> Sagittis vitae et leo duis ut diam.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Button title="Open Account" />
          <button className="text-[#5bb5a2] font-bold flex items-center gap-2">
            Compare Cards{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="pt-20">
        <Image src={bannerImg} alt="banner image" />
      </div>
    </section>
  );
};

export default Banner;
