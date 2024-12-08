import React from 'react';
import Image from 'next/image';
import { PickUpSection } from '../pickup-section/PickUpSection';
import Link from 'next/link';

const CarDetail = () => {
  const recommendedCars = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: "Rolls Royce",
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
      id: 4,
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
      id: 5,
      name: "CR - V",
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
      id: 6,
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
  ];

  return (
    <div className="container mx-auto pl-0 pr-4 -ml-[20px]">
      <div className="flex gap-8">
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
          <div className="bg-[#F6F7F9] min-h-screen p-8">
            {/* Main Car Details Section */}
            <div className="bg-white rounded-[10px] p-6">
              <div className="flex gap-8">
                {/* Left Side - Image and Description */}
                <div className="flex-1">
                  <div className="bg-[#54A6FF] rounded-[10px] p-6 mb-4">
                    <h2 className="text-white text-2xl font-semibold mb-2">
                      Sports car with the best<br/> design and acceleration
                    </h2>
                    <p className="text-white/80 text-sm">
                      Safety and comfort while driving a futuristic and elegant sports car
                    </p>
                    <div className="relative h-[200px] mt-4">
                      <Image
                        src="/images/hero-car-2.png"
                        alt="Nissan GT-R"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="relative w-[150px] h-[85px] rounded-[10px] overflow-hidden cursor-pointer">
                      <Image
                        src="/images/view-1.png"
                        alt="Nissan GT-R"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[150px] h-[85px] rounded-[10px] overflow-hidden cursor-pointer">
                      <Image
                        src="/images/view-2.png"
                        alt="Nissan GT-R Interior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-[150px] h-[85px] rounded-[10px] overflow-hidden cursor-pointer">
                      <Image
                        src="/images/view-3.png"
                        alt="Nissan GT-R Interior"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="w-[400px]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-[32px] font-bold text-secondary-500 mb-2">Nissan GT-R</h1>
                      <div className="flex items-center gap-1">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-[#FBB040]">{star}</span>
                        ))}
                        <span className="text-secondary-300 text-sm ml-2">440+ Reviewer</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-secondary-100 rounded-full transition-colors">
                      <Image
                        src="/images/heart-icon-red.png"
                        alt="Like"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>

                  <p className="text-secondary-300 mb-8">
                    NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    <div>
                      <div className="text-secondary-300 mb-2">Type Car</div>
                      <div className="text-secondary-500 font-semibold">Sport</div>
                    </div>
                    <div>
                      <div className="text-secondary-300 mb-2">Capacity</div>
                      <div className="text-secondary-500 font-semibold">2 Person</div>
                    </div>
                    <div>
                      <div className="text-secondary-300 mb-2">Steering</div>
                      <div className="text-secondary-500 font-semibold">Manual</div>
                    </div>
                    <div>
                      <div className="text-secondary-300 mb-2">Gasoline</div>
                      <div className="text-secondary-500 font-semibold">70L</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[32px] font-bold text-secondary-500">
                        $80.00/<span className="text-secondary-300 text-lg">days</span>
                      </div>
                      <div className="text-secondary-300 line-through">$100.00</div>
                    </div>
                    <Link href="/rent">
                      <button className="bg-primary-500 text-white px-8 py-3 rounded-[4px] font-semibold hover:bg-primary-600 transition-colors">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-[10px] p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[20px] font-semibold text-secondary-500 font-jakarta">
                  Reviews
                </h2>
                <button className="text-[16px] text-primary-500 font-jakarta">
                  View All
                </button>
              </div>
              <div className="space-y-6">
                {[
                  {
                    name: 'Alex Stanton',
                    date: '21 July 2022',
                    rating: 4,
                    comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
                  },
                  {
                    name: 'Skylar Dias',
                    date: '20 July 2022',
                    rating: 4,
                    comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
                  },
                ].map((review, index) => (
                  <div key={index} className="border-t border-gray-100 pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={`/images/profile-icon.png`}
                          alt={review.name}
                          width={56}
                          height={56}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta">
                            {review.name}
                          </h3>
                          <p className="text-[14px] text-secondary-300 font-jakarta">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        
                          <Image
                            
                            src="/images/stars.png"
                            alt="Star"
                            width={100}
                            height={100}
                          />
                       
                      </div>
                    </div>
                    <p className="text-[16px] text-secondary-300 font-jakarta">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Cars */}
            <section className="w-full mt-8">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">
                  Recent Cars
                </h2>
                <Link
                  href="/catalog"
                  className="text-[14px] font-semibold text-primary-500 font-jakarta hover:text-primary-600"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {recommendedCars.slice(0, 3).map((car) => (
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

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[16px] font-semibold text-secondary-500 font-jakarta">
                          ${car.price.toFixed(2)}/day
                        </p>
                        {car.originalPrice && (
                          <p className="text-[14px] text-secondary-300 line-through">
                            ${car.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                      <Link href="/rent">
                        <button className="bg-primary-500 text-white px-4 py-2 rounded-[10px] text-[14px] font-semibold hover:bg-primary-600 transition-colors">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Cars */}
            <section className="w-full mt-8">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">
                  Recommendation Car
                </h2>
                <Link
                  href="/catalog"
                  className="text-[14px] font-semibold text-primary-500 font-jakarta hover:text-primary-600"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {recommendedCars.slice(3).map((car) => (
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

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[16px] font-semibold text-secondary-500 font-jakarta">
                          ${car.price.toFixed(2)}/day
                        </p>
                        {car.originalPrice && (
                          <p className="text-[14px] text-secondary-300 line-through">
                            ${car.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                      <Link href="/rent">
                        <button className="bg-primary-500 text-white px-4 py-2 rounded-[10px] text-[14px] font-semibold hover:bg-primary-600 transition-colors">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
