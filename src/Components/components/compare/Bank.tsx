import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import free from "/public/compare/icons/free.png";
import freeatm from "/public/compare/icons/freeatm.png";
import mobile from "/public/compare/icons/mobile.png";

const Bank = () => {
  return (
    <section className="bg-white pt-12">
      <div className="max-w-6xl mx-auto p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Bank Account
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="">
              <th className=" w-1/4"></th>
              <th className=" w-1/4"></th>
              <th className=" w-1/4"></th>
              <th className=" w-1/4"></th>
            </tr>
          </thead>
          <tbody>
            {/* Physical Card */}
            <tr className="border-b border-t border-gray-200">
              <td className="py-6 w-1/4">
                <div className="flex items-center space-x-3">
                  {/* Icon Div (Left) */}
                  <div className="w-14 h-14 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                    {/* <FaPhoneAlt className="text-[#5bb5a2] text-[16px]" /> */}
                    <Image src={free} alt="free" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Free Payments Worldwide
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4 text-gray-900">-</td>
              <td className="p-3 text-center w-1/4">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
              </td>

              <td className="p-3 text-center w-1/4">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
              </td>
            </tr>

            {/* Virtual Card */}
            <tr className="border-b border-t border-gray-200">
              <td className="py-6 w-1/4">
                <div className="flex items-center space-x-3">
                  {/* Icon Div (Left) */}
                  <div className="w-14 h-14 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                    {/* <FaPhoneAlt className="text-[#5bb5a2] text-[16px]" /> */}
                    <Image src={freeatm} alt="freeatm" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Free ATM withdrawls
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4 text-gray-900">2</td>
              <td className="p-3 text-center w-1/4 text-gray-900">5</td>
              <td className="p-3 text-center w-1/4 text-gray-900">10</td>
            </tr>

            {/* Contactless Payments */}
            <tr className="border-b border-t border-gray-200">
              <td className="py-6 w-1/4">
                <div className="flex items-center space-x-3">
                  {/* Icon Div (Left) */}
                  <div className="w-14 h-14 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                    {/* <FaPhoneAlt className="text-[#5bb5a2] text-[16px]" /> */}
                    <Image src={mobile} alt="mobile" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Mobile Banking
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4">
                {" "}
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
              </td>
              <td className="p-3 text-center w-1/4">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
              </td>

              <td className="p-3 text-center w-1/4">
                <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bank;
