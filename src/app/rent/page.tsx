import Image from "next/image";
import Link from "next/link";

export default function RentPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex gap-8">
        {/* Left Side - Form */}
        <div className="flex-1">
          {/* Billing Info */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">Billing Info</h2>
                <p className="text-[12px] text-secondary-300">Please enter your billing info</p>
              </div>
              <p className="text-[12px] text-secondary-300">Step 1 of 4</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] text-secondary-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-[12px] text-secondary-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-[12px] text-secondary-300 mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-[12px] text-secondary-300 mb-2">Town/City</label>
                <input
                  type="text"
                  placeholder="Town or city"
                  className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">Rental Info</h2>
                <p className="text-[12px] text-secondary-300">Please select your rental date</p>
              </div>
              <p className="text-[12px] text-secondary-300">Step 2 of 4</p>
            </div>
            <div className="space-y-4">
              {/* Pick-Up */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <span className="text-[14px] text-secondary-500">Pick - Up</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Locations</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Date</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your date</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Time</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Drop-Off */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <span className="text-[14px] text-secondary-500">Drop - Off</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Locations</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Date</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your date</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Time</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 text-secondary-300 focus:outline-none focus:border-primary-500 appearance-none bg-[url('/images/chevron-down.png')] bg-no-repeat bg-right-4 bg-16">
                      <option value="">Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">Payment Method</h2>
                <p className="text-[12px] text-secondary-300">Please enter your payment method</p>
              </div>
              <p className="text-[12px] text-secondary-300">Step 3 of 4</p>
            </div>
            <div className="space-y-4">
              {/* Credit Card */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <span className="text-[14px] text-secondary-500">Credit Card</span>
                  <div className="flex gap-2 ml-auto">
                    <Image src="/images/visa.png" alt="Visa" width={100} height={24} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-[12px] text-secondary-300 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY/YY"
                      className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">Card Holder</label>
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-secondary-300 mb-2">CVC</label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-secondary-300 flex items-center justify-center"></div>
                  <span className="text-[14px] text-secondary-500">PayPal</span>
                  <Image src="/images/paypal.png" alt="PayPal" width={100} height={20} className="ml-auto" />
                </div>
              </div>

              {/* Bitcoin */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-secondary-300 flex items-center justify-center"></div>
                  <span className="text-[14px] text-secondary-500">Bitcoin</span>
                  <Image src="/images/bitcoin.png" alt="Bitcoin" width={100} height={20} className="ml-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta">Confirmation</h2>
                <p className="text-[12px] text-secondary-300">We are getting to the end. Just few clicks and your rental is ready!</p>
              </div>
              <p className="text-[12px] text-secondary-300">Step 4 of 4</p>
            </div>
            <div className="space-y-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-[12px] text-secondary-300">I agree with sending an Marketing and newsletter emails. No spam, promised!</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-[12px] text-secondary-300">I agree with our terms and conditions and privacy policy.</span>
              </label>
            </div>
          </div>

          <button className="bg-primary-500 text-white w-[140px] h-[50px] rounded-[10px] font-semibold hover:bg-primary-600 transition-colors">
            Rent Now
          </button>

          <div className="flex items-center gap-2 mt-6">
            <Image src="/images/shield-icon.png" alt="Security" width={32} height={32} />
            <div>
              <p className="text-[12px] text-secondary-500 font-semibold">All your data are safe</p>
              <p className="text-[12px] text-secondary-300">We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Rental Summary */}
        <div className="w-[400px]">
          <div className="bg-white rounded-[10px] p-6">
            <h2 className="text-[16px] font-semibold text-secondary-500 font-jakarta mb-2">Rental Summary</h2>
            <p className="text-[12px] text-secondary-300 mb-4">Prices may change depending on the length of the rental and the price of your rental car.</p>

            <div className="flex gap-4 mb-6">
              <div className="w-[116px] h-[80px] bg-primary-100 rounded-[10px] relative">
                <Image src="/images/hero-car-2.png" alt="Nissan GT-R" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta">Nissan GT-R</h3>
                <div className="flex items-center gap-1">
                  <div className="flex">
                   
                      <Image
                        
                        src="/images/stars.png"
                        alt="Star"
                        width={80}
                        height={10}
                      />
                  
                   
                  </div>
                  <span className="text-[12px] text-secondary-300">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-secondary-200 py-6 space-y-4 mb-6">
              <div className="flex justify-between">
                <p className="text-[14px] text-secondary-300">Subtotal</p>
                <p className="text-[14px] text-secondary-500 font-semibold">$80.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] text-secondary-300">Tax</p>
                <p className="text-[14px] text-secondary-500 font-semibold">$0</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="flex-1 px-4 py-3 rounded-[10px] border border-secondary-200 placeholder:text-secondary-300 focus:outline-none focus:border-primary-500 text-[12px]"
              />
              <button className="bg-primary-500 text-white px-4 py-3 rounded-[10px] text-[12px] font-semibold hover:bg-primary-600 transition-colors">
                Apply now
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[14px] text-secondary-300">Total Rental Price</p>
                <p className="text-[12px] text-secondary-300">Overall price and includes rental discount</p>
              </div>
              <p className="text-[20px] font-bold text-secondary-500">$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
