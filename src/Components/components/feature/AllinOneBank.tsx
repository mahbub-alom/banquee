import React from "react";
import appImage5 from "/public/image/app5.png";
import appImage6 from "/public/image/app6.png";
import Image from "next/image";

const AllinOneBank = () => {
  return (
    <section className="bg-white">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-gray-900">
            All in one bank. Really.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
            Senectus et netus et malesuada fames ac turpis.{" "}
            <br className="hidden md:block" />
            Sagittis vitae et leo duis ut diam.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="card bg-[#F8F8F8] md:w-1/2 text-center px-20 pt-6 mr-3 rounded-lg ">
            <div className="card-body mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-snug text-gray-900">
                Statistics
              </h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur{" "}
                <br className="hidden md:block" />
                adipiscing elit, sed do.
              </p>
            </div>

            <div>
              <Image src={appImage5} alt="app image 5" />
            </div>
          </div>
          <div className="card bg-[#F8F8F8] md:w-1/2 text-center pt-6 rounded-lg ml-5">
            <div className="card-body mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-snug text-gray-900">
                Cards
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
                Lorem ipsum dolor sit amet, consectetur{" "}
                <br className="hidden md:block" />
                adipiscing elit, sed do.
              </p>
            </div>

            <figure>
              <Image src={appImage6} alt="app image 6" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllinOneBank;
