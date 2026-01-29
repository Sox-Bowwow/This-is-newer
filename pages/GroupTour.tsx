
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, GraduationCap, Camera, Check, X, Sparkles, Globe, Trophy, Users2, Heart, ArrowRight, MessageSquare, Briefcase, CameraIcon } from 'lucide-react';

const ExampleCard = ({ title, category, description, pax }: any) => (
  <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-howzit-red/10 text-howzit-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
        {category}
      </div>
      <div className="flex items-center gap-1.5 text-gray-400 font-bold text-sm">
        <Users size={16} /> {pax}
      </div>
    </div>
    <h3 className="text-2xl font-black mb-4 text-howzit-dark leading-tight group-hover:text-howzit-red transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const GroupTour = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - YouTube Embed */}
      <section className="pt-32 pb-16 px-4 bg-howzit-dark overflow-hidden text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-12 tracking-tighter leading-tight">
            Together,<span className="text-howzit-red">Better.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-black aspect-video relative group mb-12">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ssh71hePR8Q?autoplay=0&controls=1&rel=0" 
              title="Howzit Group Experiences"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 2. Concept Section - Updated with requested simplified content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight font-heading uppercase">
              Bespoke <span className="text-howzit-red">Group Missions</span>
            </h2>
            <div className="space-y-8 text-lg md:text-2xl font-bold text-howzit-dark leading-relaxed">
              <p>
                Howzit Japan is a travel agency offering <span className="text-howzit-red">fully tailor-made private group tours</span> for eight or more people.
              </p>
              <p>
                From school programs to corporate visits, and sports teams, each tour is <span className="italic">flexibly designed</span> to suit the group’s purpose and composition.
              </p>
              <p>
                Centering on cities such as <span className="text-howzit-red">Tokyo, Kyoto, and Osaka</span>, we create itineraries from scratch—covering sightseeing, learning, cultural exchange, experiences, and PR—while enabling groups to connect with locals and enjoy a truly unique journey in Japan.
              </p>
            </div>
          </div>
          <div className="w-20 h-1 bg-howzit-red mx-auto rounded-full mt-16"></div>
        </div>
      </section>

      {/* 3. Past Examples (What We've Done) */}
      <section className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-howzit-red font-black uppercase tracking-widest text-[10px] mb-2 block">Our Track Record</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">What We’ve Done</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExampleCard 
              category="Family"
              pax="~10 pax"
              title="Extended Family Adventure"
              description="Guided Tokyo city tour covering major sights and local eats with total support for transport and dining logistics."
            />
            <ExampleCard 
              category="Education"
              pax="Student Group"
              title="School Cultural Exchange"
              description="Arrangement of school visits, cultural workshops, and guided tours of local hidden spots for students."
            />
            <ExampleCard 
              category="Sports"
              pax="Team + Staff"
              title="Univ Golf Club Tour"
              description="Tourism mixed with smooth transport support and team-building elements designed for athletic groups."
            />
            <ExampleCard 
              category="Corporate"
              pax="~10 pax"
              title="Business + Culture Mix"
              description="A full-day custom Tokyo tour blending professional objectives with high-end cultural experiences."
            />
            <ExampleCard 
              category="Media/PR"
              pax="~15 pax"
              title="Global Brand PR Tour"
              description="Accepting creators/staff for specialized shoots, local sushi shop filming, and SNS-focused location scouting."
            />
            <div className="bg-howzit-red rounded-[2rem] p-8 flex flex-col justify-center text-white shadow-xl shadow-howzit-red/20">
              <Sparkles className="mb-4" size={40} />
              <h3 className="text-2xl font-black mb-4 leading-tight">Your Custom Mission?</h3>
              <p className="text-white/80 text-sm mb-6">Every group has a unique goal. Let's build yours from scratch.</p>
              <button className="bg-white text-howzit-red font-black py-3 rounded-full text-sm hover:scale-105 transition-transform">
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">Value for <span className="text-howzit-red">Groups</span></h2>
          <p className="text-gray-500 font-bold max-w-xl mx-auto italic">Professional coordination makes the difference at scale.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {[
            { icon: Users2, title: "Local Guide System", desc: "Expert guides structured to handle larger group dynamics safely." },
            { icon: Sparkles, title: "Bespoke Design", desc: "Itineraries built around your specific purpose and age demographics." },
            { icon: Globe, title: "Flexible Itineraries", desc: "The perfect mix of sightseeing, hands-on experiences, and local meals." },
            { icon: Heart, title: "Pace Control", desc: "Routes carefully designed for kids, students, pros, or seniors." },
            { icon: Trophy, title: "Smooth Logistics", desc: "Expert time management and movement coordination for large teams." },
            { icon: CameraIcon, title: "Photo Support", desc: "Assistance with group photos and video content for memories or PR." },
            { icon: MessageSquare, title: "Site Coordination", desc: "On-the-ground negotiation and adjustments with local facilities." },
            { icon: Briefcase, title: "PR & Media Ready", desc: "Ready to support specialized filming and event-based tour routes." },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-howzit-red mb-6 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                <v.icon size={32} />
              </div>
              <h4 className="text-lg font-black text-howzit-dark mb-3 uppercase tracking-tight">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Included / Not Included (Side by Side) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white"><Check size={24} /></div>
                What’s Included
              </h3>
              <ul className="space-y-4">
                {[
                  "Fully custom itinerary creation",
                  "Consultation & pre-trip planning",
                  "Dedicated guides (Multiple assigned for scale)",
                  "Guided sightseeing & local gems",
                  "Cultural experience arrangements",
                  "Group photo support",
                  "Facility introductions & adjustments",
                  "SNS/PR workflow support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-gray-700">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-howzit-red rounded-xl flex items-center justify-center text-white"><X size={24} /></div>
                Not Included
              </h3>
              <ul className="space-y-4">
                {[
                  "Hotel & Accommodation bookings",
                  "Transport bookings (Bus, Shinkansen, etc.)",
                  "Private dedicated vehicles (External recommended)",
                  "Meals & Entrance fees (Paid on-site by guests)",
                  "Travel Insurance",
                  "International Airfare",
                  "Visa processing fees"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-gray-400 italic">
                    <div className="w-1.5 h-1.5 bg-howzit-red rounded-full mt-2 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center leading-relaxed">
                  *External dedicated vehicle services can be introduced upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight uppercase">Perfect For...</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            "Company Retreats", "Global MBA / Study Trips", "Sports Team Training",
            "Big Family Vacations", "Graduation Journeys", "PR & Media Shoots"
          ].map((use, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 rounded-[2rem] text-center font-black uppercase text-xs md:text-sm tracking-widest hover:border-howzit-red transition-colors shadow-sm">
              {use}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-5xl mx-auto bg-howzit-dark text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border-b-8 border-howzit-red">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Start Your Group <br/><span className="text-howzit-red">Mission in Japan.</span></h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Complex logistics? Specific goals? We thrive on the details. Let us handle the friction while you enjoy the connection.
            </p>
            <Link 
              to="/individual-tour" 
              className="inline-flex items-center gap-4 bg-howzit-red text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-howzit-red/20 active:scale-95"
            >
              REQUEST GROUP QUOTE
              <ArrowRight size={24} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-howzit-red/5 -mr-40 rounded-l-full pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};

export default GroupTour;
