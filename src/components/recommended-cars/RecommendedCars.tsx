import Image from "next/image";
import Link from "next/link";

const recommendedCars = [
  {
    id: 'rec-1',
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
    id: 'rec-2',
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
    id: 'rec-3',
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
    id: 'rec-4',
    name: "CR - V",
    category: "SUV",
    image: "/images/cr-v-black.png",
    specs: {
      gas: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.0,
    isLiked: true,
  },
  {
    id: 'rec-5',
    name: "MG ZX Exclusice",
    category: "Hatchback",
    image: "/images/mg-zx.png",
    specs: {
      gas: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 76.0,
    originalPrice: 85.0,
    isLiked: true,
  },
  {
    id: 'rec-6',
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
    id: 'rec-7',
    name: "MG ZX Excite",
    category: "Hatchback",
    image: "/images/mg-zx.png",
    specs: {
      gas: "90L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 74.0,
    isLiked: true,
  },
  {
    id: 'rec-8',
    name: "New MG ZS",
    category: "SUV",
    image: "/images/mg-zs-grey.png",
    specs: {
      gas: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.0,
    isLiked: false,
  },
];

export function RecommendedCars() {
  return (
    <section className="w-full mt-8">
      {/* Header */}
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

      {/* Car Grid */}
      <div className="grid grid-cols-4 gap-8">
        {recommendedCars.map((car) => (
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
            <div
              className={`flex justify-between items-start ${
                !car.originalPrice ? "mt-4" : ""
              }`}
            >
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
              <Link href="/rent">
                <button className="bg-primary-500 text-white px-4 py-2 rounded-[10px] text-[14px] font-semibold hover:bg-primary-600 transition-colors">
                  Rent Now
                </button>
              </Link>
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
          <Link
            href="/catalog"
            className="text-[14px] font-semibold text-primary-500 font-jakarta hover:text-primary-600"
          >
            <button className="bg-primary-500 text-white px-[20px] py-[10px] rounded-[4px] text-[16px] font-semibold font-jakarta hover:bg-primary-600 transition-colors">
              Show more car
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
