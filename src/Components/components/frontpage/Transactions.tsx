"use client";

import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import transactions from "/public/frontpage/transactions.png";

export default function BankingAppPage() {
  const features = ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"];

  return (
    <section className="bg-[#E8F2EE] flex px-4 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 w-full pt-20">
        
        {/* Left Content */}
        <div className="text-left max-w-lg flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Send & receive <br /> money instantly
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#5BB5A2] flex items-center justify-center">
                  <IoMdCheckmark className="text-white" />
                </div>
                <span className="text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Transactions Image */}
        <div className="flex justify-center w-full max-w-lg flex-1 relative">
          <div className="flex items-end">
            <Image
              src={transactions}
              width={300}
              height={600}
              alt="Banking Transactions"
            //   className="w-auto h-screen object-bottom" 
            className="object-bottom "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
