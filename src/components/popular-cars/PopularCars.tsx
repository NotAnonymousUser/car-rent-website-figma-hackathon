import Image from "next/image";
import Link from "next/link";

const popularCars = [
  {
    id: 'pop-1',
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
    id: 'pop-2',
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
    id: 'pop-3',
    name: "Rolls-Royce",
    category: "Sedan",
    image: "/images/rolls-royce.png",
    specs: {
      gas: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 96.0,
    isLiked: true,
  },
  {
    id: 'pop-4',
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
];

export function PopularCars() {
  return (
    <section className="w-full mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">
          Popular Car
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
              <button className="bg-primary-500 text-white px-4 py-2 rounded-[4px] text-[14px] font-semibold font-jakarta hover:bg-primary-600">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
