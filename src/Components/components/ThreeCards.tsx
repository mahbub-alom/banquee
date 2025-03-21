import Image from "next/image";
import React from "react";
import grid from "/public/image/grid.png";
import grid1 from "/public/image/grid1.png";
import grid2 from "/public/image/grid2.png";

const ThreeCards = () => {
  return (
    <div className="px-8 pb-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="card bg-[#F8F8F8] md:w-1/2 h-96">
          <div className="card-body px-10">
            <h2 className="text-2xl font-semibold leading-snug">Easy <br />
            integration</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="pb-6">
            <Image src={grid} alt="app image 5" />
          </div>
        </div>
        <div className="card bg-[#F8F8F8] md:w-1/2 h-96 pl-8 pb-8">
          <div className="card-body pl-[-10]">
            <h2 className="text-2xl font-semibold leading-snug">Saving <br />
            accounts 
           </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="pb-6">
            <Image src={grid1} alt="app image 5" />
          </div>
        </div>
        <div className="card bg-[#F8F8F8] md:w-1/2 h-96 pl-8 pb-8">
          <div className="card-body pl-[-10]">
            <h2 className="text-2xl font-semibold leading-snug">Saving <br />
            accounts 
           </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="pb-6">
            <Image src={grid2} alt="app image 5" className="h-3/4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
