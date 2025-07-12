export default function RentalProviders() {
  const providers = [
    {
      name: "autoEuropa",
      rating: 4.9,
      reviews: "Excellent",
      reviewCount: null,
      logo: "🏢",
      price: 43,
      categories: [
        { name: "Car condition", rating: "/5" },
        { name: "Car cleanliness", rating: "/5" },
        { name: "Customer service", rating: "/5" }, 
        { name: "Easy collection", rating: "/5" }
      ]
    },
    {
      name: "Europcar",
      rating: 4.8,
      reviews: "Good",
      reviewCount: "3 reviews",
      logo: "🟢",
      price: 77,
      categories: [
        { name: "Car condition", rating: "/5" },
        { name: "Car cleanliness", rating: "/5" },
        { name: "Customer service", rating: "/5" },
        { name: "Easy collection", rating: "/5" }
      ]
    },
    {
      name: "Budget",
      rating: 4.7,
      reviews: "Good", 
      reviewCount: "4 reviews",
      logo: "🔵",
      price: 27,
      categories: [
        { name: "Car condition", rating: "/5" },
        { name: "Car cleanliness", rating: "/5" },
        { name: "Customer service", rating: "/5" },
        { name: "Easy collection", rating: "/5" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The best car rental providers in Fes right now
          </h2>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              
              {/* Provider Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">{provider.logo}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 mr-2">{provider.rating}</span>
                <div className="text-sm">
                  <div className="text-gray-600">{provider.reviews}</div>
                  {provider.reviewCount && (
                    <div className="text-gray-500">{provider.reviewCount}</div>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-2 mb-6">
                {provider.categories.map((category, catIndex) => (
                  <div key={catIndex} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{category.name}</span>
                    <span className="text-gray-400">{category.rating}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <span className="text-sm text-gray-500">From</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">{provider.price} €</span>
                    <span className="text-sm text-gray-500 ml-1">per day</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  View deals →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
