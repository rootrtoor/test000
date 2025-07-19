import { Check, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-campaign-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://www.img2link.com/images/2025/07/02/d58512bd5a73b1ed3c65f92aed9def90.jpg" 
              alt="Jerry Trudell - About" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold campaign-blue mb-6">
              Meet Jerry Trudell
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over 15 years, Jerry Trudell has been a dedicated public servant and business leader in Albuquerque. 
              As a former city council member and small business owner, he understands the challenges facing our community.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-campaign-blue rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-blue">City Council Member (2016-2022)</h4>
                  <p className="text-gray-600">Led initiatives for affordable housing and public safety improvements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-campaign-green rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-green">Small Business Owner</h4>
                  <p className="text-gray-600">Founded and grew a local construction company, creating 50+ jobs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-campaign-gold rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-gold">Community Advocate</h4>
                  <p className="text-gray-600">Board member of Albuquerque Chamber of Commerce and United Way</p>
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-[#1E3A8A] pl-6 italic text-lg text-gray-700 mb-6">
              "I'm running for mayor because I believe Albuquerque's best days are ahead of us. 
              With your support, we'll tackle our challenges head-on and build the future our city deserves."
            </blockquote>
            
            <button className="bg-campaign-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <User className="w-4 h-4 mr-2 inline" />
              Read Full Biography
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
