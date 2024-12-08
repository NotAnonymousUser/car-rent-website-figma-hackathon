import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full grid grid-cols-2 gap-8 py-[10px]">
      {/* Left Card */}
      <div className="relative w-full h-[360px] bg-[#54A6FF] rounded-[10px] p-6 overflow-hidden">
        {/* Circular/Spiral Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border-[40px] border-white/20 -rotate-45" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full border-[30px] border-white/20 -rotate-45" />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h1 className="text-[32px] font-semibold text-white leading-[120%] max-w-[300px] font-jakarta">
              The Best Platform for Car Rental
            </h1>
            <p className="mt-4 text-[16px] font-medium text-white/70 leading-[150%] max-w-[284px] font-jakarta">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="w-[116px] h-[44px] bg-[#3563E9] text-white rounded-[4px] text-[16px] font-semibold mt-5 font-jakarta">
              Rental Car
            </button>
          </div>
        </div>
        <div className="absolute right-[24px] bottom-[24px] w-[300px]">
          <Image
            src="/images/hero-car-1.png"
            alt="White Sports Car"
            width={300}
            height={125}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Card */}
      <div className="relative w-full h-[360px] bg-[#3563E9] rounded-[10px] p-6 overflow-hidden">
        {/* Arrow/Angular Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-50px] right-[-50px] w-[400px] h-[400px] rotate-[30deg]">
            <div className="w-full h-full border-[40px] border-white/20 skew-x-[30deg]" />
            <div className="absolute top-[80px] left-[80px] w-full h-full border-[40px] border-white/20 skew-x-[30deg]" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h1 className="text-[32px] font-semibold text-white leading-[120%] max-w-[300px] font-jakarta">
              Easy way to rent a car at a low price
            </h1>
            <p className="mt-4 text-[16px] font-medium text-white/70 leading-[150%] max-w-[284px] font-jakarta">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="w-[116px] h-[44px] bg-[#54A6FF] text-white rounded-[4px] text-[16px] font-semibold mt-5 font-jakarta">
              Rental Car
            </button>
          </div>
        </div>
        <div className="absolute right-[24px] bottom-[24px] w-[260px]">
          <Image
            src="/images/hero-car-2.png"
            alt="Silver Sports Car"
            width={260}
            height={108}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
