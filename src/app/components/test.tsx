  {/* Subscription Information Section */}
        <div className="w-full mb-8">
          <div className="text-xl font-bold mb-6">
            Subscription order <span className="text-2xl ml-1">£4.49</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-4 rounded-lg">
            <div className="space-y-4 flex-1">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white rounded-full p-2 mt-1">
                  <span className="text-center block w-5 h-5">E</span>
                </div>
                <div>
                  <p className="text-gray-600">Ensure you never worry about your EV charger maintenance</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white rounded-full p-2 mt-1">
                  <span className="text-center block w-5 h-5">O</span>
                </div>
                <div>
                  <p className="text-gray-600">Our technicians will be available for service within 24-48 hours after booking</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white rounded-full p-2 mt-1">
                  <span className="text-center block w-5 h-5">P</span>
                </div>
                <div>
                  <p className="text-gray-600">Premium quality parts and certified technicians for your EV charger</p>
                </div>
              </div>
            </div>
            
            {/* Product Image */}
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              <div className="absolute -right-4 -top-4 bg-[#ffc107] rounded-full w-20 h-20 flex items-center justify-center z-10">
                <span className="font-bold text-center text-sm">Best Value</span>
              </div>
              <div className="relative h-full min-h-[200px] w-full bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/ev-technician.svg"
                  alt="EV Charger Technician"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-500">Get Free <span className="bg-[#ffc107] px-2 text-white">Bonuses</span></h2>
          <p className="text-center text-gray-600 mb-6">
            Bonuses can be accessed when the first subscription has been shipped
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Bonus Card 1 */}
            <div className="border border-gray-200 rounded-lg p-4 text-center relative">
              <div className="font-bold text-2xl mb-2">£39</div>
              <div className="mb-4">
                <div className="inline-block bg-gray-800 rounded-full p-3 mb-2">
                  <span className="text-gray-500">B</span>
                </div>
                <h3 className="font-bold">Free Bonus Training</h3>
              </div>
              <ul className="text-gray-600 text-left space-y-2 mb-4">
                <li>• Easy 5-minute guide on how to keep your EV charger in top condition</li>
                <li>• Tips for maximizing charging efficiency</li>
              </ul>
            </div>
            
            {/* Bonus Card 2 */}
            <div className="border border-gray-200 rounded-lg p-4 text-center relative bg-[#fffaeb]">
              <div className="font-bold text-2xl mb-2">£89</div>
              <div className="mb-4">
                <div className="inline-block bg-[#ffc107] rounded-full p-3 mb-2">
                  <span className="text-white">H</span>
                </div>
                <h3 className="font-bold">High Intensity Training</h3>
              </div>
              <ul className="text-gray-600 text-left space-y-2 mb-4">
                <li>• How to build efficient home EV charging setups</li>
                <li>• Smart charging features explained</li>
                <li>• EV battery health optimization guide</li>
                <li>• Troubleshooting common charger issues</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">Many courses are added continuously</p>
        </div>