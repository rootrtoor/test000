import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-campaign-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                Jerry Trudell <span className="campaign-red">2025</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building a stronger, more prosperous Albuquerque for every family, 
              every neighborhood, and every dreamer in our great city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-campaign-blue hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-campaign-blue hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-campaign-blue hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-campaign-blue hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Jerry</a></li>
              <li><a href="#issues" className="text-gray-300 hover:text-white transition-colors">Issues</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Endorsements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Yard Signs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Host an Event</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spread the Word</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>
                Paid for by Friends of Jerry Trudell. 
                Not authorized by any candidate or candidate's committee.
              </p>
            </div>
            <div className="text-right">
              <p>
                © 2025 Jerry Trudell for Mayor. All rights reserved. | 
                <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-white transition-colors ml-1">Terms of Use</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}