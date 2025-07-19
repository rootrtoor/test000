import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import IssuesSection from "@/components/issues-section";
import TestimonialsSection from "@/components/testimonials-section";
import GetInvolvedSection from "@/components/get-involved-section";
import ContactSection from "@/components/contact-section-simple";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="space-y-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold campaign-blue mb-4">
                Our Priorities for Albuquerque
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real solutions for the challenges facing our city today
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-campaign-bg rounded-xl p-8 text-center border-l-4 border-[#1E3A8A] hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-campaign-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold campaign-blue mb-4">Public Safety</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strengthen community policing, invest in crime prevention, and ensure every neighborhood feels safe and secure.
                </p>
              </div>
              
              <div className="bg-campaign-bg rounded-xl p-8 text-center border-l-4 border-[#059669] hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-campaign-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold campaign-green mb-4">Economic Growth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create good-paying jobs, support local businesses, and attract new industries to diversify our economy.
                </p>
              </div>
              
              <div className="bg-campaign-bg rounded-xl p-8 text-center border-l-4 border-[#F59E0B] hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-campaign-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold campaign-gold mb-4">Infrastructure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fix our roads, improve public transit, and modernize utilities for a 21st-century Albuquerque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <IssuesSection />
        <TestimonialsSection />
        <GetInvolvedSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
