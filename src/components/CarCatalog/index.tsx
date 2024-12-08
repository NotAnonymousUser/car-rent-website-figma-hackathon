import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { PickUpSection } from '@/components/pickup-section/PickUpSection';

const popularCars = [
  {
    id: 'car-1',
    name: "Koenigsegg",
    category: "Sport",
    image: "/images/hero-car-1.png",
    specs: {
      gas: "90L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 99.0,
    isLiked: true,
  },
  {
    id: 'car-2',
    name: "Nissan GT-R",
    category: "Sport",
    image: "/images/hero-car-2.png",
    specs: {
      gas: "80L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 80.0,
    originalPrice: 100.0,
    isLiked: false,
  },
  {
    id: 'car-3',
    name: "Rolls-Royce",
    category: "Sport",
    image: "/images/rolls-royce.png",
    specs: {
      gas: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 96.0,
    isLiked: false,
  },
  {
    id: 'car-4',
    name: "All New Rush",
    category: "SUV",
    image: "/images/rush.png",
    specs: {
      gas: "70L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 72.0,
    originalPrice: 80.0,
    isLiked: false,
  },
  {
    id: 'car-5',
    name: "CR-V",
    category: "SUV",
    image: "/images/cr-v.png",
    specs: {
      gas: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.0,
    isLiked: true,
  },
  {
    id: 'car-6',
    name: "All New Terios",
    category: "SUV",
    image: "/images/terios.png",
    specs: {
      gas: "90L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 74.0,
    isLiked: false,
  },
  {
    id: 'car-7',
    name: "MG ZX Exclusice",
    category: "Hatchback",
    image: "/images/mg-zx.png",
    specs: {
      gas: "70L",
      transmission: "Electric",
      capacity: "4 People",
    },
    price: 76.0,
    originalPrice: 80.0,
    isLiked: false,
  },
  {
    id: 'car-8',
    name: "New MG ZS",
    category: "SUV",
    image: "/images/mg-zs.png",
    specs: {
      gas: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.0,
    isLiked: false,
  },
  {
    id: 'car-9',
    name: "MG ZX Excite",
    category: "Hatchback",
    image: "/images/mg-zx.png",
    specs: {
      gas: "90L",
      transmission: "Electric",
      capacity: "4 People",
    },
    price: 74.0,
    isLiked: true,
  },
];

const CarCatalog = () => {
  return (
    <div className="container mx-auto pl-0 pr-4 -ml-[20px]">
      <div className="flex gap-8 ">
        {/* Filter Sidebar */}
        <div className="w-[360px] flex-shrink-0">
          <div className="bg-white rounded-[10px] p-6 sticky top-[72px]">
            {/* TYPE Section */}
            <div className="mb-8">
              <h3 className="text-[16px] font-semibold text-secondary-500 font-jakarta mb-4">
                TYPE
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Sport', count: 10 },
                  { label: 'SUV', count: 12 },
                  { label: 'MPV', count: 16 },
                  { label: 'Sedan', count: 20 },
                  { label: 'Coupe', count: 14 },
                  { label: 'Hatchback', count: 14 },
                ].map((type) => (
                  <label key={type.label} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-secondary-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-[14px] font-medium text-secondary-400 font-jakarta flex-1">
                      {type.label}
                    </span>
                    <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                      ({type.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* CAPACITY Section */}
            <div className="mb-8">
              <h3 className="text-[16px] font-semibold text-secondary-500 font-jakarta mb-4">
                CAPACITY
              </h3>
              <div className="space-y-4">
                {[
                  { label: '2 Person', count: 10 },
                  { label: '4 Person', count: 14 },
                  { label: '6 Person', count: 12 },
                  { label: '8 or More', count: 16 },
                ].map((capacity) => (
                  <label key={capacity.label} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-secondary-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-[14px] font-medium text-secondary-400 font-jakarta flex-1">
                      {capacity.label}
                    </span>
                    <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                      ({capacity.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* PRICE Section */}
            <div>
              <h3 className="text-[16px] font-semibold text-secondary-500 font-jakarta mb-4">
                PRICE
              </h3>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="w-full h-2 bg-secondary-100 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="mt-2 text-[14px] font-medium text-secondary-400 font-jakarta">
                Max. $100.00
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Section with Pickup */}
          <div className="bg-[#F6F7F9] min-h-screen">
            <PickUpSection />

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {popularCars.map((car) => (
                <div key={car.id} className="bg-white p-4 pb-3 rounded-[10px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta">
                        {car.name}
                      </h3>
                      <p className="text-[14px] font-medium text-secondary-300 font-jakarta">
                        {car.category}
                      </p>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src={
                          car.isLiked
                            ? "/images/heart-icon-red.png"
                            : "/images/heart-icon-clear.png"
                        }
                        alt="Like"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>

                  {/* Car Image */}
                  <Link href="/car-detail">
                    <div className="relative w-full h-[120px] mb-8 cursor-pointer">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/gas-icon.png"
                        alt="Gas"
                        width={14}
                        height={14}
                      />
                      <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                        {car.specs.gas}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/manual-icon.png"
                        alt="Manual"
                        width={14}
                        height={14}
                      />
                      <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                        {car.specs.transmission}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/capacity-icon.png"
                        alt="Capacity"
                        width={14}
                        height={14}
                      />
                      <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                        {car.specs.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div>
                        <span className="text-[20px] font-semibold text-secondary-500 font-jakarta">
                          ${car.price.toFixed(2)}/
                        </span>
                        <span className="text-[14px] font-medium text-secondary-300 font-jakarta">
                          day
                        </span>
                      </div>
                      {car.originalPrice && (
                        <span className="block text-[14px] font-medium text-secondary-300 font-jakarta line-through mt-1">
                          ${car.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-[4px] text-[14px] font-semibold font-jakarta hover:bg-primary-600">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Section */}
      <div className="w-full relative mt-[60px]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <span className="text-[12px] font-medium text-secondary-300 font-jakarta">
            120 Car
          </span>
        </div>
        <div className="flex justify-center">
        
          <button className="bg-primary-500 text-white px-[20px] py-[10px] rounded-[4px] text-[16px] font-semibold font-jakarta hover:bg-primary-600 transition-colors">
            Show more car
          </button>
        
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCatalog;
