import Image from "next/image";
import React from "react";
import card from "/public/frontpage/3card.png";
import { Button } from "@/Components/ui/button";

const Account = () => {
  return (
    <section className="bg-white flex justify-center items-center py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl w-full text-center">
        {/* Section Heading */}
        <h3 className="text-gray-900 text-sm md:text-base">Accounts</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight my-2">
          Perfect card <br /> for your needs.
        </h1>
        <p className="text-gray-900 mt-4 text-lg md:text-xl md:w-2/3 mx-auto">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>

        {/* Image Section */}
        <div className="flex justify-center my-8">
          <Image 
            src={card} 
            alt="Banking Card" 
            className="w-full max-w-md h-auto" 
            priority 
          />
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button >Open Account</Button>
          <Button variant="outline" className="text-black dark:border dark:border-gray-200">
            Compare Cards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Account;
