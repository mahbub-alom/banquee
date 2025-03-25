import Image from "next/image";
import React from "react";
import grid from "/public/image/grid.png";
import grid1 from "/public/image/grid1.png";
import grid1group from "/public/image/grid-1group.png";
import grid2 from "/public/image/grid2.png";

const ThreeCards = () => {
  return (
  <section className="bg-white">
      <div className="px-8 pb-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="card bg-[#F8F8F8]  md:w-1/2 h-96 rounded-lg shadow-md">
          <div className="card-body px-10">
            <h2 className="text-2xl font-semibold leading-snug text-gray-900">
              Easy <br /> integration
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="pb-6">
            <Image src={grid} alt="app image 5" />
          </div>
        </div>
        <div className="card bg-[#F8F8F8]  md:w-1/2 h-96 pl-8 pb-8 rounded-lg shadow-md">
          <div className="card-body">
            <h2 className="text-2xl font-semibold leading-snug text-gray-900 ">
              Saving <br /> accounts
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="flex gap-3 justify-end pb-10">
            <div className="h-36">
              <Image className="w-full h-full" src={grid1} alt="app image 5" />
              <h4 className="font-bold pt-2">New Laptop</h4>
              <p className="text-gray-400">400$</p>
            </div>
            <div className="h-36">
              <Image
                className="w-full h-full"
                src={grid1group}
                alt="app image 5"
              />
              <h4 className="font-bold pt-2">Dream Bike</h4>
              <p className="text-gray-400">200$</p>
            </div>
          </div>
        </div>
        <div className="card bg-[#F8F8F8]  md:w-1/2 h-96 pl-8 pb-8 rounded-lg shadow-md">
          <div className="card-body">
            <h2 className="text-2xl font-semibold leading-snug text-gray-900 ">
              Investment <br /> plans
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="pb-6">
            <Image src={grid2} alt="app image 5" className="h-3/4" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ThreeCards;
