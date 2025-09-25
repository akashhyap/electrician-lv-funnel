"use client";

export default function BonusesInfo() {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16 xl:py-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-gray-500">
        Get Free <span className="bg-[#ffc107] px-2 text-white">Installation Guides</span>
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-4 md:mb-6">
        Expert resources to maximize your EV charging installation
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Bonus Card 1 */}
        <div className="border border-gray-200 rounded-lg p-3 md:p-4 text-center relative">
          <div className="font-bold text-xl md:text-2xl mb-1 md:mb-2">$39</div>
          <div className="mb-3 md:mb-4">
            <div className="inline-block bg-gray-800 rounded-full p-2 md:p-3 mb-1 md:mb-2">
              <span className="text-gray-500 text-sm md:text-base">I</span>
            </div>
            <h3 className="font-bold text-sm md:text-base">Installation Preparation Guide</h3>
          </div>
          <ul className="text-gray-600 text-left space-y-1 md:space-y-2 mb-2 md:mb-4 text-xs md:text-sm">
            <li>• Pre-installation home electrical assessment checklist</li>
            <li>• Optimal charger placement planning templates</li>
            <li>• Required permits and documentation overview</li>
          </ul>
        </div>
        
        {/* Bonus Card 2 */}
        <div className="border border-gray-200 rounded-lg p-3 md:p-4 text-center relative bg-[#fffaeb]">
          <div className="font-bold text-xl md:text-2xl mb-1 md:mb-2">$89</div>
          <div className="mb-3 md:mb-4">
            <div className="inline-block bg-[#ffc107] rounded-full p-2 md:p-3 mb-1 md:mb-2">
              <span className="text-white text-sm md:text-base">O</span>
            </div>
            <h3 className="font-bold text-sm md:text-base">Optimization & Maintenance Kit</h3>
          </div>
          <ul className="text-gray-600 text-left space-y-1 md:space-y-2 mb-2 md:mb-4 text-xs md:text-sm">
            <li>• Home electrical load balancing configuration</li>
            <li>• Smart charging setup with mobile app integration</li>
            <li>• Seasonal maintenance schedule for optimal performance</li>
            <li>• Troubleshooting guide for common installation issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
