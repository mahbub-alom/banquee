import Image from "next/image";
import React from "react";
import webflow from "/public/sponsor/webflow.png";
import shopify from "/public/sponsor/shopify.png";
import zapier from "/public/sponsor/zapier.png";
import bitcoin from "/public/sponsor/bitcoin.png";
import paypal from "/public/sponsor/paypal.png";
import master from "/public/sponsor/master.png";
import visa from "/public/sponsor/visa.png";
import googlepay from "/public/sponsor/googlepay.png";
import applepay from "/public/sponsor/applepay.png";
import amazon from "/public/sponsor/amazon.png";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Sponsor = () => {
  const features = [
    "Secure and encrypted integration",
    "Fully API interface",
    "Payments worldwide",
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* sponsor section here  */}
        <div className="space-y-2 mb-10">
          <div className="flex gap-3">
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={webflow} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={shopify} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={zapier} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={bitcoin} alt="webflow" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={paypal} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={master} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={visa} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={googlepay} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={applepay} alt="webflow" />
            </div>
            <div className="bg-[#F8F8F8] py-3 px-6 rounded-lg flex items-center justify-center">
              <Image src={amazon} alt="webflow" />
            </div>
          </div>
        </div>

        {/* content  */}
        <div className="flex">
          <div className="text-left lg:max-w-2/3">
            <h3 className="text-gray-900 text-sm">Tools</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight my-2">
              Seemless <br />
              integration
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6">
              <p className="text-gray-900 md:w-2/3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
          <div className="space-y-3 mt-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
                <span className="text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
