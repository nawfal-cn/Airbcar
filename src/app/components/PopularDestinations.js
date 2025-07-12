export default function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular car rental destinations
          </h2>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Marrakech Card */}
          <div className="relative bg-blue-600 rounded-lg overflow-hidden h-64 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Marrakech</h3>
              <p className="text-sm opacity-90">Most popular car type: Economy</p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold transition-colors">
                Get More
              </button>
            </div>
            {/* Background pattern/color representing Marrakech */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-80"></div>
          </div>

          {/* Agadir Card */}
          <div className="relative bg-blue-500 rounded-lg overflow-hidden h-64 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Agadir</h3>
              <p className="text-sm opacity-90">Most popular car type: Economy</p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold transition-colors">
                Get More
              </button>
            </div>
            {/* Background representing Agadir */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
          </div>

          {/* Tangier Card */}
          <div className="relative bg-teal-500 rounded-lg overflow-hidden h-64 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Tangier</h3>
              <p className="text-sm opacity-90">Most popular car type: Economy</p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold transition-colors">
                Get More
              </button>
            </div>
            {/* Background representing Tangier */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 opacity-80"></div>
          </div>

          {/* Casablanca Card */}
          <div className="relative bg-purple-500 rounded-lg overflow-hidden h-64 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Casablanca</h3>
              <p className="text-sm opacity-90">Most popular car type: Economy</p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold transition-colors">
                Get More
              </button>
            </div>
            {/* Background representing Casablanca */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-80"></div>
          </div>

        </div>
      </div>
    </section>
  );
}