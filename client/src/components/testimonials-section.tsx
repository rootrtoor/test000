export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People Are Saying
          </h2>
          <p className="text-xl text-blue-100">
            Voices from across our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Maria Rodriguez" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Maria Rodriguez</h4>
                <p className="text-blue-200 text-sm">Small Business Owner</p>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "Jerry helped us navigate city regulations when we opened our restaurant. 
              He truly understands what small businesses need to succeed."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="David Chen" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">David Chen</h4>
                <p className="text-blue-200 text-sm">Public School Teacher</p>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "As an educator, I've seen Jerry's commitment to our schools firsthand. 
              He's the leader our children's future deserves."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Sarah Thompson" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Sarah Thompson</h4>
                <p className="text-blue-200 text-sm">Neighborhood Watch Coordinator</p>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "Jerry listens to our community concerns and takes action. 
              He's already making our neighborhoods safer and stronger."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
