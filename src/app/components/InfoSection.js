export default function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative bg-slate-800 rounded-2xl overflow-hidden mb-16">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-90"></div>
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Making cities for people, not cars.
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                By sharing our knowledge of the industry and real-time data we're helping to improve our cities.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Our Mission
              </button>
            </div>
          </div>
        </div>

        {/* How to find section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to find the best car rental deal
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We're frequently named the most trusted travel search site out there. We're free to use and we'll do the hard work for you by searching hundreds of car rental companies, so you can instantly compare prices and then book. Here's how to get the most out of your car rental search.
          </p>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book now, cancel later</h3>
                <p className="text-gray-600">
                  There are many car and van rental options with flexible booking policies and free cancellation. So you can score the best deal with total flexibility to change your plans last-minute if you need to.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rent a car in Fes for a whole month</h3>
                <p className="text-gray-600">
                  Want to rent a car for almost a month? Often, car rental companies avoid costly admin in between pickups by renting out cars for longer periods. So see if a monthly car rental is cheaper than the three weeks you need it for by selecting 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare fuel policies</h3>
                <p className="text-gray-600">
                  To save money on topping up the tank before you take off, look out for deals with a "full-to-full" fuel tank policy.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skip the lines</h3>
                <p className="text-gray-600">
                  We call out keyless or self-service pick-up when you search with us. No keys to pick up or paperwork to fill in means no queues. Just head to your preferred car rental location, hop in and hit the road.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Go greener</h3>
                <p className="text-gray-600">
                  Limit your impact on this beautiful planet while you explore it. Filter by electric vehicles, which will be charged up and ready to go when you pick them up, meaning no worries about fuel policies either.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Look further afield</h3>
                <p className="text-gray-600">
                  If you're on a budget, it's often cheaper to hop on public transportation to a car rental pick-up location a little farther away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
