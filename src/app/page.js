import CarTypes from "./components/CarTypes";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PopularDestinations from "./components/PopularDestinations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PopularDestinations />
      <CarTypes />
      <HowItWorks />
      <Footer />
    </div>
  );
}

// Header/Navigation - Fixed or sticky header
// Hero Section - "Find the best car rental deals" with search form
// Features Section - 3 feature cards with icons
// Popular Destinations - Cards for Marrakech, Agadir, Tangier, etc.
// Car Categories - Mini, Economy, Premium, etc.
// How It Works - 3-step process (Search, Compare, Book)
// Trust Signals - Partner companies logos
// Footer - Links and company info