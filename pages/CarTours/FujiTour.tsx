
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, Car, Clock, Users, ChevronDown, MessageCircle, Info, Check, X, Sparkles, Star, CreditCard, ArrowRight, Heart, Send, Bookmark, MoreHorizontal, Calendar, Coffee, User, ChevronLeft } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-start text-left group gap-4"
      >
        <span className="font-black text-lg text-howzit-dark group-hover:text-howzit-red transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-gray-400 transition-transform mt-1 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="text-gray-600 font-medium leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
};

const CourseTimeline = ({ course }: { course: any }) => (
  <div className="relative py-8">
    {/* Center Vertical Axis (Hidden on Mobile) */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>
    
    <div className="space-y-12 md:space-y-16 relative">
      {course.schedule.map((item: any, idx: number) => {
        const isDescriptionLeft = idx % 2 !== 0;

        return (
          <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isDescriptionLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            
            {/* Description Side */}
            <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
              <div className={`inline-flex items-center gap-2 mb-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 text-[9px] font-black uppercase tracking-widest text-howzit-red`}>
                <Sparkles size={10} /> Step {idx + 1}
              </div>
              <h4 className="font-black text-xl md:text-2xl text-howzit-dark mb-2 font-heading uppercase">{item.location}</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 max-w-sm mx-auto md:mx-0">{item.desc}</p>
              {item.fact && (
                 <div className="inline-block bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 text-[10px] font-bold text-gray-400 italic">
                   {item.fact}
                 </div>
              )}
            </div>

            {/* Central Node (The Dot on the Axis) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-howzit-red text-white shadow-lg z-10 transition-transform hover:scale-110">
               <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 px-4 md:px-12">
              {item.img ? (
                <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[21/9] md:aspect-[16/7] group relative max-w-md mx-auto md:mx-0">
                  <img 
                    src={item.img} 
                    alt={item.location} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-center h-24 border-2 border-dashed border-gray-100 rounded-[2rem] max-w-md">
                   <Car size={32} className="text-gray-100" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const InstagramRecommendation = () => {
  const recommendations = [
    { title: "First-time visitors to Japan", desc: "Expert guidance to the best spots." },
    { title: "Families with young children", desc: "Door-to-door comfort for the kids." },
    { title: "Groups with seniors", desc: "Minimize walking, maximize views." },
    { title: "Time Savers", desc: "Skip the train crowds." },
    { title: "Luxury Seekers", desc: "Premium Alphard & Hiace experience." }
  ];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-md mx-auto">
      <div className="flex items-center justify-between p-4 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="story-ring p-[2px]">
            <div className="bg-white rounded-full p-[2px]">
              <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full object-cover" />
            </div>
          </div>
          <span className="text-sm font-black text-howzit-dark font-heading">howzit_japan</span>
        </div>
        <MoreHorizontal size={20} className="text-gray-400" />
      </div>

      <div className="aspect-[16/10] relative overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80" 
          alt="Luxury Van with Japanese Scenery" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
           <Car size={12} /> Private Luxury Van
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Heart size={24} className="text-howzit-red" fill="currentColor" />
            <MessageCircle size={24} className="text-howzit-dark" />
            <Send size={24} className="text-howzit-dark" />
          </div>
          <Bookmark size={24} className="text-howzit-dark" />
        </div>
        
        <div>
          <p className="text-sm font-black text-howzit-dark font-heading">542 likes</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-howzit-dark">
            <span className="font-black mr-2">howzit_japan</span>
            Who is our Mt. Fuji Private Tour for? 🗻✨
          </p>
          <ul className="space-y-1 mt-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="text-sm text-gray-700">
                <span className="text-howzit-red font-black mr-2">✓</span>
                <span className="font-bold">{rec.title}</span>: {rec.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FujiTour = () => {
  const [activeCourse, setActiveCourse] = useState(0);

  const courses = [
    {
      title: "Classic Fuji Route",
      schedule: [
        { location: "Tokyo Departure", desc: "Pickup from your hotel in Tokyo." },
        { location: "Arakurayama Sengen Park", desc: "The iconic five-story pagoda overlooking Mt. Fuji.", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80", fact: "398 steps to the top" },
        { location: "Lake Kawaguchi & Oishi Park", desc: "Walk through seasonal flowers with a stunning backdrop.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80" },
        { location: "Oshino Hakkai", desc: "Sacred ponds fed by Mt. Fuji's snowmelt.", img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80" },
        { location: "Yamanakako Viewpoint", desc: "Magnificent panoramic perspective of the mountain.", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" },
        { location: "Tokyo Arrival", desc: "Return safely to your accommodation." }
      ]
    },
    {
      title: "Fuji & Hakone Grand Tour",
      schedule: [
        { location: "Tokyo Departure", desc: "Start your comprehensive nature exploration." },
        { location: "Lake Ashi Pirate Ship", desc: "Navigate the volcanic lake on a legendary vessel.", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80" },
        { location: "Lake Ashi × Fuji View", desc: "Iconic red torii gate and Fuji reflection.", img: "https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80" },
        { location: "Oshino Hakkai", desc: "Crystal clear ponds with pure volcanic water.", img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80" },
        { location: "Lake Kawaguchi", desc: "Final highlight by the iconic lake shore.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80" },
        { location: "Tokyo Arrival", desc: "Safe return to city center." }
      ]
    },
    {
      title: "Hakone & Gotemba Outlet",
      schedule: [
        { location: "Tokyo Departure", desc: "Combining nature with premium shopping therapy." },
        { location: "Lake Ashi Pirate Ship", desc: "Scenic cruise through the Hakone caldera.", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80" },
        { location: "Owakudani", desc: "Active volcanic valley with sulfur vents.", img: "https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80" },
        { location: "Gotemba Outlets", desc: "Premium shopping with direct Fuji views (3 hours).", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80" },
        { location: "Tokyo Arrival", desc: "Return with your finds." }
      ]
    },
    {
      title: "Classic Hakone Route",
      schedule: [
        { location: "Tokyo Departure", desc: "Escape to the spiritual shrines of Hakone." },
        { location: "Lake Ashi Pirate Ship", desc: "Refreshing cruise across the caldera lake.", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80" },
        { location: "Owakudani", desc: "Witness the raw power of geothermal activity.", img: "https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80" },
        { location: "Hakone Shrine", desc: "Ancient shrine with floating torii gate.", img: "https://images.unsplash.com/photo-1590559899731-397e79477e32?auto=format&fit=crop&q=80" },
        { location: "Daikan-yama Viewpoint", desc: "Breathtaking overlook of Lake Ashi and Mt. Fuji.", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" },
        { location: "Tokyo Arrival", desc: "Smooth ride back home." }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-howzit-dark overflow-hidden text-center">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 mb-8 text-left">
           <Link to="/car-tours" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-howzit-red transition-all group">
             <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Car Tours
           </Link>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight font-heading uppercase italic">
            Mt.Fuji & Hakone <span className="text-howzit-red">Private Tour</span>
          </h1>
          
          <div className="max-w-4xl mx-auto rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-black aspect-video relative group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ssh71hePR8Q?autoplay=0&controls=1&rel=0" 
              title="Mt Fuji Private Car Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Merged Overview & IG-Style Recommendations Section */}
      <section className="py-16 bg-gray-50 px-4">
         <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               {/* Left Column: Facts & Pricing */}
               <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-3 font-heading uppercase">
                     <Clock className="text-howzit-red" size={24} /> Tour Overview
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                     {[
                       { label: 'Duration', val: 'Approx. 10 Hours', icon: Clock },
                       { label: 'Departure', val: 'Tokyo 23 Wards', icon: MapPin },
                       { label: 'Group Size', val: 'Up to 8 Guests', icon: Users },
                       { label: 'Language', val: 'English Support', icon: MessageCircle },
                     ].map((fact, i) => (
                       <div key={i} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-howzit-red shrink-0 border border-gray-100">
                             <fact.icon size={20} />
                          </div>
                          <div>
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">{fact.label}</span>
                             <span className="text-sm font-black text-howzit-dark leading-tight">{fact.val}</span>
                          </div>
                       </div>
                     ))}
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-8 bg-howzit-red/5 p-6 rounded-[2rem] border border-howzit-red/10 relative overflow-hidden group">
                     <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                           <CreditCard size={16} className="text-howzit-red" />
                           <span className="text-[9px] font-black uppercase tracking-[0.2em] text-howzit-red">Transparent Pricing</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                           <span className="text-3xl font-black text-howzit-dark font-heading">¥130,000〜</span>
                           <span className="text-xs font-bold text-gray-400">(per group)</span>
                        </div>
                        <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-1">
                          Rates vary based on guest count and specific course content.
                        </p>
                        <p className="text-[11px] font-bold text-gray-500 leading-relaxed italic">
                          A precise quote will be provided after your inquiry. There are no additional fees beyond the displayed price.
                        </p>
                     </div>
                  </div>

                  {/* Included / Not Included columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-base font-black text-howzit-dark border-b border-gray-100 pb-1 font-heading uppercase">What's Included</h3>
                      <ul className="space-y-1 text-xs font-medium text-gray-600">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Full Private Tour (per group)</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div> English-speaking Private Guide</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Professional Driver</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Vehicle, Fuel, and Toll Fees</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Tokyo 23 Wards Hotel Pickup</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-black text-howzit-dark border-b border-gray-100 pb-1 font-heading uppercase">Not Included</h3>
                      <p className="text-[10px] text-gray-400 font-bold mb-1 leading-tight">*Guest is responsible for on-site costs:</p>
                      <ul className="space-y-1 text-xs font-medium text-gray-600">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> Guest Meals & Drinks</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> Entrance Fees & Activities</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> Guide's Meals & Entrances</li>
                      </ul>
                    </div>
                  </div>
               </div>

               {/* Right Column: Instagram Recommendations */}
               <div className="p-8 md:p-12 bg-gray-50/30 flex flex-col items-center justify-center">
                  <InstagramRecommendation />
               </div>
            </div>
         </div>
      </section>

      {/* Model Courses Timelines */}
      <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter font-heading uppercase">Standard Courses</h2>
          <p className="text-gray-500 font-medium italic text-xs md:text-sm">Experience-driven itineraries crafted for perfection.</p>
        </div>

        {/* Course Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {courses.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCourse(i)}
              className={`px-6 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all text-center leading-relaxed border-2 ${activeCourse === i ? 'bg-howzit-red text-white border-howzit-red shadow-xl shadow-howzit-red/20 scale-105' : 'bg-white text-gray-400 border-gray-100 hover:border-howzit-red hover:text-howzit-red'}`}
            >
              Course {i + 1}<br/>{c.title}
            </button>
          ))}
        </div>

        {/* Zig-Zag Timeline */}
        <div className="max-w-6xl mx-auto">
             <CourseTimeline course={courses[activeCourse]} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2 font-heading uppercase">FAQ</h2>
            <p className="text-gray-500 font-medium text-sm">Common questions about our Fuji private tours.</p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100">
            <FAQItem 
              question="Will the tour proceed on rainy days?" 
              answer="Yes. We flexibly adjust the route based on weather to ensure the best possible experience."
            />
            <FAQItem 
              question="Can we change the course on the day?" 
              answer="We will accommodate changes as much as possible to fit your mood or the day's conditions."
            />
            <FAQItem 
              question="Cancellation & Payment Policy" 
              answer="15+ days before: Full 100% refund. Within 15 days: Non-refundable."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FujiTour;
