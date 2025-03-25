import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between mb-10">
          <div className="text-left lg:max-w-2/3">
            <h3 className="text-gray-600 text-sm">Testimonials</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              People all over the <br /> world use banko.
            </h1>
          </div>
          <div className="space-y-3 mt-auto">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E8F2EE] flex items-center justify-center">
                <FaStar className="text-[#5BB5A2]" />
              </div>
              <p className="text-gray-800 font-semibold">
                Rated <span className="text-[#5bb5a2]">4.8/5</span> from over
                1000 users
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-min">
          <div className="border border-gray-200 rounded-md p-6 space-y-4 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Sunt qui esse pariatur duis deserunt mollit{" "}
            </h2>
            <p className="text-gray-800 ">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Cody Fisher</h2>
              <p className="text-gray-600 font-sm">Medical Assistant</p>
            </div>
          </div>
          {/* 2nd  */}
          <div className="border border-gray-200 rounded-md p-6 space-y-4 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              At lectus urna duis convallis tellus
            </h2>
            <p className="text-gray-800 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
              <br /> <br />
              In nibh mauris cursus mattis. At lectus urna duis convallis
              convallis tellus. Enim blandit volutpat maecenas volutpat.
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Jenny Wilson</h2>
              <p className="text-gray-600 font-sm">Nursing Assistant</p>
            </div>
          </div>
          {/* 3nd */}
          <div className="border border-gray-200 rounded-md p-6 space-y-4 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Elit aute irure tempor cupidatat incididunt
            </h2>
            <p className="text-gray-800 ">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Guy Hawkins</h2>
              <p className="text-gray-600 font-sm">President of Sales</p>
            </div>
          </div>
          {/* 4th */}
          <div className="border border-gray-200 rounded-md p-6 space-y-4 -mt-24 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Sunt qui esse pariatur duis deserunt mollit{" "}
            </h2>
            <p className="text-gray-800 ">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Cody Fisher</h2>
              <p className="text-gray-600 font-sm">Medical Assistant</p>
            </div>
          </div>
          {/* 5h */}
          <div className="border border-gray-200 rounded-md p-6 space-y-4 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Donec et fringilla neque
            </h2>
            <p className="text-gray-800 ">
              Etiam accumsan porta neque in viverra. Proin eleifend, eros in
              tristique hendrerit, nisi purus cursus sapien, id ultrices nunc
              tellus a ipsum. Donec et fringilla neque. Aenean consequat purus
              quis lectus maximus fermentum.
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Darlene Robertson</h2>
              <p className="text-gray-600 font-sm">Dog Trainer</p>
            </div>
          </div>
          {/* 6th */}
          <div className="border border-gray-200 rounded-md p-6 space-y-4 -mt-12 h-min">
            <p className="flex gap-2 text-[#5BB5A2]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Etiam accumsan porta neque eros
            </h2>
            <p className="text-gray-800 ">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
            <div>
              <h2 className="text-gray-900 font-semibold">Dianne Russell</h2>
              <p className="text-gray-600 font-sm">Medical Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
