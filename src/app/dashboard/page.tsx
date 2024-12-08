import Image from 'next/image';
import { RentalDetails } from '@/components/dashboard/RentalDetails';
import { TopCarRental } from '@/components/dashboard/TopCarRental';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 bg-[#F6F7F9] flex-1">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Map and Rental Details */}
          <div className="col-span-7">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold text-[#1A202C]">Details Rental</h2>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <span className="text-xl">⋮</span>
              </button>
            </div>
            
            

            {/* Rental Details Section */}
            <div className="bg-white rounded-lg">
              <RentalDetails />
            </div>
          </div>

          {/* Right side - Top 5 Car Rental and Recent Transactions */}
          <div className="col-span-5 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#1A202C]">Top 5 Car Rental</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                  <span className="text-xl">⋮</span>
                </button>
              </div>
              <TopCarRental />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-[#1A202C]">Recent Transaction</h2>
                <a href="#" className="text-[#3563E9] text-sm font-medium hover:underline">View All</a>
              </div>
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
