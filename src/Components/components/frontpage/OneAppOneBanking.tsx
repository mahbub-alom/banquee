'use client';

import Image from 'next/image';
import vector from '/public/icons/Vector.png';
import vector1 from '/public/icons/Vector1.png';
import vector2 from '/public/icons/Vector2.png';
import vector3 from '/public/icons/Vector3.png';
import vector4 from '/public/icons/Vector4.png';
import vector5 from '/public/icons/Vector5.png';

export default function BankingAppPage() {
  const features = [
    { title: 'Instant transactions', icon: vector },
    { title: 'Saving accounts', icon: vector1 },
    { title: 'Mobile banking', icon: vector2 },
    { title: 'Advanced statistics', icon: vector3 },
    { title: 'Virtual cards', icon: vector4 },
    { title: 'Contactless payments', icon: vector5 },
  ];

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            One app. <br /> One banking.
          </h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="border p-8 space-y-2 rounded-xl h-56">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E8F2EE]">
                  <Image src={item.icon} width={24} height={24} alt={item.title} />
                </div>
                <h2 className="font-medium text-gray-900">{item.title}</h2>
                <p className="text-gray-900 text-sm">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Mobile Banking UI */}
        <div className="flex justify-center w-full max-w-xs flex-shrink-0">
          <Image src="/image/app1.png" width={300} height={600} alt="Banking App UI"  />
        </div>
      </div>
    </section>
  );
}
