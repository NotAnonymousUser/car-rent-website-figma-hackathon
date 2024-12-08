export const RentalDetails = () => {
  return (
    <div className="bg-white rounded-[10px] p-6">
      {/* Map Section */}
      <div className="h-[240px] bg-[#F6F7F9] rounded-[10px] mb-6 overflow-hidden">
        {/* Add your map implementation here */}
        <div className="w-full h-full rounded-[10px] bg-[#F6F7F9]"></div>
      </div>

      {/* Car Details */}
      <div className="flex gap-4 mb-8">
        <div className="w-[130px] h-[80px] bg-[#F6F7F9] rounded-[8px] flex items-center justify-center">
          <img 
            src="/images/cars/nissan-gtr.png" 
            alt="Nissan GT-R" 
            className="w-[110px] h-[60px] object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A202C]">Nissan GT - R</h3>
          <p className="text-[#90A3BF] text-sm mt-1">Sport Car</p>
          <p className="text-[#90A3BF] text-xs mt-2">#9761</p>
        </div>
      </div>

      {/* Pick-up and Drop-off Details */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]"></div>
            <h4 className="font-semibold text-[#1A202C]">Pick - Up</h4>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Locations</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>Kota Semarang</option>
              </select>
            </div>
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Date</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>20 July 2022</option>
              </select>
            </div>
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Time</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>07:00</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#54A6FF]"></div>
            <h4 className="font-semibold text-[#1A202C]">Drop - Off</h4>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Locations</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>Kota Semarang</option>
              </select>
            </div>
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Date</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>21 July 2022</option>
              </select>
            </div>
            <div>
              <p className="text-[#90A3BF] text-xs mb-2">Time</p>
              <select className="w-full p-3 border border-[#C3D4E9] rounded-lg text-sm text-[#1A202C] focus:outline-none focus:border-[#3563E9]">
                <option>01:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-8 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-lg text-[#1A202C]">Total Rental Price</h4>
          <p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
        </div>
        <div className="text-2xl font-bold text-[#1A202C]">$80.00</div>
      </div>
    </div>
  );
};
