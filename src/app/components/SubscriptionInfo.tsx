"use client";

import Image from 'next/image';

export default function SubscriptionInfo() {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16 xl:py-20">
     
      <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-3 md:p-4 rounded-lg">
        <div className="space-y-3 md:space-y-4 flex-1">
          {/* Feature 1 */}
          <div className="flex items-start gap-2 md:gap-3">
            <div className="bg-black text-white rounded-full p-1 md:p-2 mt-1">
              <span className="text-center block w-4 h-4 md:w-5 md:h-5 text-xs md:text-sm">E</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base">Ensure you never worry about your EV charger maintenance</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-start gap-2 md:gap-3">
            <div className="bg-black text-white rounded-full p-1 md:p-2 mt-1">
              <span className="text-center block w-4 h-4 md:w-5 md:h-5 text-xs md:text-sm">O</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base">Our technicians will be available for service within 24-48 hours after booking</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-start gap-2 md:gap-3">
            <div className="bg-black text-white rounded-full p-1 md:p-2 mt-1">
              <span className="text-center block w-4 h-4 md:w-5 md:h-5 text-xs md:text-sm">P</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base">Premium quality parts and certified technicians for your EV charger</p>
            </div>
          </div>
        </div>
        
        {/* Product Image */}
        <div className="relative w-full md:w-1/3 h-40 sm:h-48 md:h-auto mt-4 md:mt-0">
          <div className="absolute -right-2 -top-2 md:-right-4 md:-top-4 bg-[#ffc107] rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center z-10">
            <span className="font-bold text-center text-xs md:text-sm">Best Value</span>
          </div>
          <div className="relative h-full min-h-[160px] md:min-h-[200px] w-full bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="/ev-technician.svg"
              alt="EV Charger Technician"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
