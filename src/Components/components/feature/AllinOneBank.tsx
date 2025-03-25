import React from "react";
import appImage5 from "/public/image/app5.png";
import appImage6 from "/public/image/app6.png";
import Image from "next/image";

const AllinOneBank = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-15">
        <h2 className="text-3xl font-semibold leading-snug text-gray-900 dark:text-gray-100">
          All in one bank. Really.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae
          et leo duis ut diam.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="card bg-[#F8F8F8] dark:bg-gray-800 md:w-1/2 text-center px-20 py-6 rounded-lg shadow-md">
          <div className="card-body mb-10">
            <h2 className="text-2xl font-semibold leading-snug text-gray-900 dark:text-gray-100">Statistics</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <div>
            <Image src={appImage5} alt="app image 5" />
          </div>
        </div>
        <div className="card bg-[#F8F8F8] dark:bg-gray-800 md:w-1/2 text-center py-6 rounded-lg shadow-md">
          <div className="card-body mb-10">
            <h2 className="text-2xl font-semibold leading-snug text-gray-900 dark:text-gray-100">Cards</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
          <figure>
            <Image src={appImage6} alt="app image 6" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllinOneBank;
