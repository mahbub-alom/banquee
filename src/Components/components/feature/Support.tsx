import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";

const SupportPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-8 items-center">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Need help?</h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FaPhoneAlt className="text-[#5bb5a2] text-[16px]" />
              </div>
              <div>
                <p className="text-[16px] font-bold text-gray-900">+49 176 123 456</p>
                <h6 className="text-[14px] text-gray-600">Support Hotline</h6>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <IoMailUnreadOutline className="text-[#5bb5a2] text-[24px]" />
              </div>
              <div>
                <p className="text-[16px] font-bold text-gray-900 ">help@banquee.com</p>
                <h6 className="text-[14px] text-gray-600">Support Email</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-white border border-gray-300 ">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-gray-900">
              How do I open a Bank account?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              You can open an account by visiting our website and following the instructions.
            </div>
          </div>
          <div className="collapse collapse-plus bg-white border border-gray-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-900 ">
              How do I order a new card?
            </div>
            <div className="collapse-content text-sm text-gray-600 ">
              Order a new card via your online banking dashboard.
            </div>
          </div>
          <div className="collapse collapse-plus bg-white  border border-gray-300 ">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-900 ">
              How to change my account limits?
            </div>
            <div className="collapse-content text-sm text-gray-600 ">
              Modify your account limits in the settings section of your online banking.
            </div>
          </div>
          <div className="collapse collapse-plus bg-white border border-gray-300 ">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-900 ">
              How does Bank Premium work?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="collapse collapse-plus bg-white  border border-gray-300 ">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-900 ">
              Can I have two Bank accounts?
            </div>
            <div className="collapse-content text-sm text-gray-600 ">
              Yes, you can open multiple accounts under the same user ID.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
