import Image from "next/image";

export function PickUpSection() {
  return (
    <section className="w-full grid grid-cols-[1fr,auto,1fr] items-center gap-8">
      {/* Pick-Up Section */}
      <div className="bg-white rounded-[10px] p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary-500" />
          <span className="text-[16px] font-semibold text-secondary-400 font-jakarta">
            Pick-Up
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Locations
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your city</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Date
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your date</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Time
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Switch Button */}
      <button className="w-[60px] h-[60px] bg-primary-500 rounded-[10px] flex items-center justify-center">
        <Image
          src="/images/switch-icon.png"
          alt="Switch"
          width={24}
          height={24}
        />
      </button>

      {/* Drop-Off Section */}
      <div className="bg-white rounded-[10px] p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#54A6FF]" />
          <span className="text-[16px] font-semibold text-secondary-400 font-jakarta">
            Drop-Off
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Locations
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your city</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Date
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your date</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-[12px] font-medium text-secondary-300 mb-2 font-jakarta">
              Time
            </label>
            <select className="w-full h-[44px] px-4 bg-white border border-secondary-200 rounded-[4px] text-[14px] text-secondary-400 font-jakarta focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
