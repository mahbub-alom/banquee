import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SupportSection = () => {
  return (
   <section className="bg-white py-5">
     <section className="bg-[#5BB5A2] rounded-lg p-6 max-w-3xl mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Text */}
        <div className="text-white">
          <h3 className="text-lg font-semibold">Still have questions?</h3>
          <p className="text-sm opacity-90">We are here to help.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Phone */}
          <div className="flex items-center space-x-3 text-white">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-white text-sm" />
            </div>
            <div>
              <p className="text-sm font-medium">+49 176 123 456</p>
              <p className="text-xs opacity-80">Support Hotline</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 text-white">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-white text-sm" />
            </div>
            <div>
              <p className="text-sm font-medium">help@bank.com</p>
              <p className="text-xs opacity-80">Support Email</p>
            </div>
          </div>
        </div>

        {/* Chat Button */}
        <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium">
          Chat with us
        </button>
      </div>
    </section>
   </section>
  );
};

export default SupportSection;
