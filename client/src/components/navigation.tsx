import { useState } from "react";
import { Menu, X, Heart, Users } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold campaign-blue">
              Jerry Trudell <span className="campaign-red">2025</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-campaign-text hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-campaign-text hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Jerry
              </button>
              <button 
                onClick={() => scrollToSection('issues')}
                className="text-campaign-text hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Issues
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-campaign-text hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <button className="bg-campaign-red hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <Heart className="w-4 h-4 mr-2 inline" />
                Donate
              </button>
              <button className="bg-campaign-blue hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <Users className="w-4 h-4 mr-2 inline" />
                Volunteer
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-campaign-text hover:text-[#1E3A8A] focus:outline-none focus:text-[#1E3A8A]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-campaign-text hover:text-[#1E3A8A] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-campaign-text hover:text-[#1E3A8A] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About Jerry
            </button>
            <button 
              onClick={() => scrollToSection('issues')}
              className="text-campaign-text hover:text-[#1E3A8A] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Issues
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-campaign-text hover:text-[#1E3A8A] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
            <div className="flex space-x-2 px-3 pt-2">
              <button className="bg-campaign-red hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium flex-1">
                <Heart className="w-4 h-4 mr-2 inline" />
                Donate
              </button>
              <button className="bg-campaign-blue hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium flex-1">
                <Users className="w-4 h-4 mr-2 inline" />
                Volunteer
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
