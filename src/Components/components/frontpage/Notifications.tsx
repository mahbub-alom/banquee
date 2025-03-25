import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Notifications = () => {
  const features = ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="text-left lg:max-w-3xl">
          <h3 className="text-gray-900 text-sm">Notifications</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight my-2">
            Stay notified
          </h1>
          <p className="text-gray-900 md:w-3/4">
            Notifications Banko. Stay notified You payment of 49€ has been
            processed! Banko. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit.
          </p>
          <div className="my-6 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
                <span className="text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
          <button className="text-[#5bb5a2] flex items-center justify-start gap-2 mt-4">
            Compare Cards <FaArrowRight />
          </button>
        </div>

        {/* Right Section - Notifications List */}
        <div className="w-full flex flex-col gap-4">
          {[
            { message: "You payment of 49€ has been processed!" },
            { message: "You got a new support message!" },
            { message: "Your payment was declined!" },
            { message: "Please verify your payment of 99€!" },
            { message: "New account statistics are available!" },
          ].map((notif, index) => (
            <div key={index} className="flex p-3 items-center gap-3 bg-[#F8F8F8] dark:bg-gray-800 rounded-md">
            <div className="w-12 h-12 bg-[#5BB5A2] rounded-lg flex items-center justify-center text-4xl text-white">
              b.
            </div>
            <div>
              <h2 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                Banko.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{notif.message}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
