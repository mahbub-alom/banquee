import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import laptop from "/public/organize/laptop.png";
import bike from "/public/organize/bike.png";
import plane from "/public/organize/plane.png";
import camera from "/public/organize/camera.png";
import plus from "/public/organize/plus.png";

const Organize = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading Section */}
        <div className="text-left max-w-lg">
          <h3 className="text-gray-900 text-sm">Savings Account</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Organize your <br /> money the right way
          </h1>
        </div>

        {/* Description & Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6">
          <p className="text-gray-900 md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="text-[#5bb5a2] flex items-center justify-center gap-2 mt-4 md:mt-0">
            All Features <FaArrowRight />
          </button>
        </div>

        {/* Savings Goal Items (Responsive Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {[
            { image: laptop, title: "New Laptop", amount: "$400", bg: "bg-[#E8F2EE]" },
            { image: bike, title: "Dream Bike", amount: "$200", bg: "bg-[#F1DFDF]" },
            { image: plane, title: "Holiday", amount: "$14000", bg: "bg-[#DFE1F1]" },
            { image: camera, title: "Camera", amount: "$100", bg: "bg-[#DFEBF1]" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className={`${item.bg} h-36 w-36 sm:h-40 sm:w-40 rounded-lg flex items-center justify-center mb-4`}>
                <Image src={item.image} alt={item.title} width={70} height={70} className="w-auto h-auto" />
              </div>
              <h3 className="text-black">{item.title}</h3>
              <h4 className="text-gray-400">{item.amount}</h4>
            </div>
          ))}

          {/* Add New Goal Button */}
          <div className="flex flex-col items-center">
            <div className="bg-[#F8F8F8] h-36 w-36 sm:h-40 sm:w-40 rounded-lg flex items-center justify-center mb-4">
              <Image src={plus} alt="plus" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organize;
