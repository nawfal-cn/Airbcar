export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-gray-900">Aircar</h1>
          </div>
          
          {/* Navigation - Center */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm underline">
              Become a Partner
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm underline">
              Our mission
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm underline">
              My Booking
            </a>
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            {/* Search icon */}
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Heart icon */}
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            
            {/* Profile icon */}
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* Menu icon */}
            <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}