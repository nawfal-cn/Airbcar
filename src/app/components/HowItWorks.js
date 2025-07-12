export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1: Search",
      title: "Search",
      description: "Enter your location and see what's available. From family-friendly SUVs to luxury convertibles, you'll get a great price on every type of car rental.",
      icon: "🔍",
      bgColor: "bg-cyan-100",
      iconBg: "bg-cyan-400"
    },
    {
      step: "Step 2: Compare", 
      title: "Compare",
      description: "Compare rental cars on fuel policy, mileage, provider rating, flexible booking, cleanliness, customer service and more.",
      icon: "⚖️",
      bgColor: "bg-pink-100", 
      iconBg: "bg-pink-400"
    },
    {
      step: "Step 3: Book",
      title: "Book", 
      description: "We compare car rental prices on hundreds of sites for you, so once you've found your ride, you'll be redirected to book with the provider, with no extra fees.",
      icon: "✅",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-400"
    }
  ];

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book a car rental in three simple steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              
              {/* Step Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-24 h-24 ${step.bgColor} rounded-full flex items-center justify-center relative`}>
                  <div className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="max-w-sm mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.step}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}