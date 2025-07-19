import { Megaphone, Users, Heart, Calendar } from "lucide-react";

export default function GetInvolvedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold campaign-blue mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your voice and involvement make all the difference. Join our movement for positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-campaign-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold campaign-red mb-3">Spread the Word</h3>
            <p className="text-gray-600 mb-4">Share our message on social media and with your friends</p>
            <button className="bg-campaign-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full">
              Share Now
            </button>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-campaign-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold campaign-blue mb-3">Volunteer</h3>
            <p className="text-gray-600 mb-4">Help with phone calls, canvassing, and events</p>
            <button className="bg-campaign-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full">
              Sign Up
            </button>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-campaign-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold campaign-green mb-3">Donate</h3>
            <p className="text-gray-600 mb-4">Support our campaign with a financial contribution</p>
            <button className="bg-campaign-green hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full">
              Donate
            </button>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-campaign-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold campaign-gold mb-3">Attend Events</h3>
            <p className="text-gray-600 mb-4">Join us at rallies, town halls, and community forums</p>
            <button className="bg-campaign-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full">
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
