import { Home, Leaf, GraduationCap, Heart, ArrowRight } from "lucide-react";

export default function IssuesSection() {
  return (
    <section id="issues" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold campaign-blue mb-4">
            Issues That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plans to address Albuquerque's most pressing challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-campaign-bg rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-campaign-blue rounded-lg flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold campaign-blue">Affordable Housing</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Increase affordable housing options through public-private partnerships, 
              streamline permitting processes, and protect renters from exploitation.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-blue mt-1 mr-3 flex-shrink-0" />
                <span>Build 2,000 new affordable housing units in 4 years</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-blue mt-1 mr-3 flex-shrink-0" />
                <span>Establish first-time homebuyer assistance program</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-blue mt-1 mr-3 flex-shrink-0" />
                <span>Strengthen tenant protection ordinances</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-campaign-bg rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-campaign-green rounded-lg flex items-center justify-center mr-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold campaign-green">Environmental Sustainability</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Transition to clean energy, improve air quality, and protect our natural resources 
              while creating green jobs for our workforce.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-green mt-1 mr-3 flex-shrink-0" />
                <span>Achieve carbon neutrality by 2030</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-green mt-1 mr-3 flex-shrink-0" />
                <span>Expand solar energy incentives for residents</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-green mt-1 mr-3 flex-shrink-0" />
                <span>Improve recycling and waste reduction programs</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-campaign-bg rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-campaign-red rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold campaign-red">Education Excellence</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Support our schools, expand early childhood education, and create pathways 
              from education to careers in growing industries.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-red mt-1 mr-3 flex-shrink-0" />
                <span>Universal pre-K for all 4-year-olds</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-red mt-1 mr-3 flex-shrink-0" />
                <span>Expand vocational training partnerships</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-red mt-1 mr-3 flex-shrink-0" />
                <span>Increase teacher retention through better compensation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-campaign-bg rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-campaign-gold rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold campaign-gold">Healthcare Access</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Expand community health centers, address mental health needs, 
              and ensure every resident has access to quality, affordable healthcare.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-gold mt-1 mr-3 flex-shrink-0" />
                <span>Open 3 new community health clinics</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-gold mt-1 mr-3 flex-shrink-0" />
                <span>Expand mental health crisis intervention</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 campaign-gold mt-1 mr-3 flex-shrink-0" />
                <span>Support addiction treatment and recovery programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
