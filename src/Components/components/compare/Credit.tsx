import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import physical from "/public/compare/icons/physical.png";
import virtual from "/public/compare/icons/virtual.png";
import contractless from "/public/compare/icons/contractless.png";
import mobile from "/public/compare/icons/mobile.png";

const CreditCardTable = () => {
  return (
    <section className="bg-white pt-12">
      <div className="max-w-6xl mx-auto p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Credit Card</h2>
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
                    <Image src={physical} alt="physical" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Physical Card
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4 text-gray-900">Optional</td>
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
                    <Image src={virtual} alt="virtual" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Virtual Card
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4 text-gray-900">-</td>
              <td className="p-3 text-center w-1/4 text-gray-900">Up to 2</td>
              <td className="p-3 text-center w-1/4 text-gray-900">Unlimited</td>
            </tr>

            {/* Contactless Payments */}
            <tr className="border-b border-t border-gray-200">
              <td className="py-6 w-1/4">
                <div className="flex items-center space-x-3">
                  {/* Icon Div (Left) */}
                  <div className="w-14 h-14 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                    {/* <FaPhoneAlt className="text-[#5bb5a2] text-[16px]" /> */}
                    <Image src={contractless} alt="contractless" />
                  </div>
                  {/* Text Div (Right) */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Contractless Payments
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4">  <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div></td>
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

            {/* Mobile Payments */}
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
                      Mobile Payments
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diam in arcu cursus euismod
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center w-1/4">  <div className="w-7 h-7 rounded-full bg-[#E8F2EE] flex items-center justify-center mx-auto">
                  <IoMdCheckmark className="text-[#5BB5A2]" />
                </div></td>
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

export default CreditCardTable;
