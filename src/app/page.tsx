import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";
import SubscriptionInfo from "./components/SubscriptionInfo";
import BonusesInfo from "./components/BonusesInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Notification Banner */}
      <div className="w-full bg-[#fef9e7] text-center py-2 px-4 flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
        <span className="text-gray-600 hidden md:inline">•</span>
        <p>Free EV charging consultation - Schedule yours today!</p>
        <span className="text-gray-600 hidden md:inline">•</span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl w-full px-3 sm:px-6 py-4 md:py-8 flex flex-col items-center">
        {/* Multi-Step Form Section */}
        <div className="w-full mb-8">
          <MultiStepForm />
        </div>

        {/* Subscription Info Component */}
        <SubscriptionInfo />

        {/* Bonuses Info Component */}
        <BonusesInfo />

        {/* Call to Action Button */}
        {/* <div className="w-full text-center mb-8">
          <button className="bg-[#4CAF50] hover:bg-green-700 text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 mx-auto">
            Yes, upgrade 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <p className="text-sm mt-2">Subscription costs £9.99</p>
        </div> */}

       

        {/* Bottom Section - Additional Product */}
        <div className="w-full py-8 md:py-16 border-t border-gray-200">
          {/* <h3 className="text-xl font-bold text-center mb-4 text-gray-300">Introducing</h3> */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 px-2 md:px-0">
              <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-5 text-gray-500 text-center md:text-left">
                "EMPOWER YOUR EV CHARGING, THE ULTIMATE DAILY MONITORING TRACKER"
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                A full companion app that helps you optimize your charging schedule, track energy usage, and maintain your EV charger for maximum efficiency and the health and lifespan you want the most.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-80 mt-6 md:mt-0">
              <div className="relative h-full w-full">
                <Image 
                  src="/ev-app-mockup.svg"
                  alt="EV Charging App Mockup"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Terms Text */}
       <div className="w-full text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2 mb-8 md:mb-12 px-4 md:px-0">
          <p className="text-center">
            By submitting your information, you agree to receive communications about EV charging solutions.
          </p>
          <p className="text-center">
            We value your privacy and will never share your details with third parties.
          </p>
          <p className="text-center text-[8px] md:text-[10px]">
            (You can unsubscribe anytime by clicking the link in our emails)
          </p>
        </div>

      {/* Footer */}
      <footer className="w-full bg-[#1f2937] text-white text-[10px] md:text-xs py-3 md:py-4 text-center mt-auto">
        <p>2025 © Copyright by .., All Rights Reserved</p>
      </footer>
    </div>
  );
}
