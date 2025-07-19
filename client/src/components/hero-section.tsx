import { Flag, Info } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#1E3A8A] to-blue-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A New Vision for <span className="text-[#F59E0B]">Albuquerque</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
              Together, we'll build a stronger, more prosperous future for every neighborhood, every family, every dreamer in our great city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-campaign-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <Flag className="w-5 h-5 mr-3 inline" />
                Join Our Campaign
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E3A8A] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                <Info className="w-5 h-5 mr-3 inline" />
                Learn More
              </button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://www.img2link.com/images/2025/07/02/d87d6ae84e5cae41f643a2a29b82181c.jpg" 
              alt="Jerry Trudell for Mayor" 
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto border-4 border-white"
            />
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-[#F59E0B] font-semibold text-lg">"Building Bridges, Creating Opportunities"</p>
              <p className="text-blue-100 mt-2">- Jerry Trudell</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
