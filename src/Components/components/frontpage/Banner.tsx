

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../ui/button";
import bannerImg from "/public/frontpage/cards.png";
import { IoMdCheckmark } from "react-icons/io";

const Banner = () => {
  return (
    <section className="bg-[#E8F2EE] min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-start items-center gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Banking <br /> starts here.
          </h1>
          <p className="text-xl text-gray-900 leading-tight mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-7 h-7 rounded-full bg-[#5BB5A2] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>{" "}
              Instant Transfer
            </div>
            <p className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#5BB5A2] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>{" "}
              Payments worldwide
            </p>
            <p className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#5BB5A2] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>{" "}
              Saving accounts
            </p>
            <p className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#5BB5A2] flex items-center justify-center">
                <IoMdCheckmark className="text-white" />
              </div>{" "}
              100% mobile banking
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button>Open Account</Button>
            <button className="text-[#5bb5a2] flex items-center gap-2">
              Compare Cards ➝
            </button>
          </div>
        </div>

        {/* Right Content - Single Image */}
        <div className="flex justify-center">
          <Image src={bannerImg} width={350} height={200} alt="Bank Card" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
