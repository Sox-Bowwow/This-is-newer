
import React from 'react';
import { Users, Layout, MapPin, CheckCircle, ChevronRight, Calendar, MessageSquare, Briefcase, GraduationCap, Building2, Check, X, ShieldCheck, Globe } from 'lucide-react';

const GroupTour = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-howzit-dark text-white overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <span className="text-howzit-red font-black uppercase tracking-[0.3em] text-xs mb-6 block">Beyond Private</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">Together,<br/><span className="text-howzit-red">Better.</span></h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed">
               Customized group logistics for corporate retreats, universities, and multi-family journeys.
            </p>
         </div>
      </section>

      {/* Concept & Past Examples */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl font-black mb-8">Personalized at Scale</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                 Managing a group of 10, 20, or 50 people in Japan requires precision. We ensure that despite the size, the experience remains personal, flexible, and authentic.
              </p>
              <div className="space-y-6">
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex gap-4">
                    <Globe className="text-howzit-red shrink-0" size={24} />
                    <div>
                       <h4 className="font-bold text-howzit-dark">Global Standards</h4>
                       <p className="text-gray-400 text-sm">Experience in hosting Silicon Valley tech giants and European academic delegations.</p>
                    </div>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex gap-4">
                    <Layout className="text-howzit-red shrink-0" size={24} />
                    <div>
                       <h4 className="font-bold text-howzit-dark">Complex Logistics</h4>
                       <p className="text-gray-400 text-sm">Bespoke coach booking, multi-restaurant banquet coordination, and private event sourcing.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="bg-howzit-red/5 p-10 rounded-[4rem] border-2 border-howzit-red/10">
              <h3 className="text-2xl font-black mb-6">Past Examples</h3>
              <div className="space-y-4">
                 {[
                   { title: 'Tech HQ Team-Building', info: '35 pax | Zen retreat & Workshop' },
                   { title: 'Global MBA Study Trip', info: '25 pax | Industry visits & Culture' },
                   { title: 'Extended Family Reunion', info: '14 pax | Private Coach & Luxury Dining' }
                 ].map((ex, i) => (
                   <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-howzit-red transition-all cursor-default">
                      <p className="text-xs font-black text-howzit-red uppercase tracking-widest mb-1">Case Story {i+1}</p>
                      <h4 className="font-bold text-howzit-dark text-lg">{ex.title}</h4>
                      <p className="text-gray-400 text-sm">{ex.info}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Included/Not Included */}
      <section className="py-24 bg-gray-50 px-4">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">Group Service Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-white p-12 rounded-[3.5rem] shadow-xl">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                     <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white"><Check size={24} /></div>
                     What’s Included
                  </h3>
                  <ul className="space-y-4">
                     {[
                       'Private dedicated group coordinator',
                       'Large-scale transport (Coach/Buses)',
                       'Group-rate entry & activities',
                       'Custom meeting room/event sourcing',
                       'Bilingual guide support (Multiple if needed)',
                       'Full itinerary management 24/7'
                     ].map((item, i) => (
                       <li key={i} className="text-sm font-bold text-gray-500 flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-white p-12 rounded-[3.5rem] shadow-xl">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                     <div className="w-10 h-10 bg-howzit-red rounded-xl flex items-center justify-center text-white"><X size={24} /></div>
                     Limitations
                  </h3>
                  <ul className="space-y-4">
                     {[
                       'Individual flexible splits (if not pre-planned)',
                       'Same-day massive itinerary shifts',
                       'Last-minute restaurant changes (Large groups)',
                       'Airfare & Visa processing'
                     ].map((item, i) => (
                       <li key={i} className="text-sm font-bold text-gray-500 flex items-center gap-3">
                          <div className="w-2 h-2 bg-howzit-red rounded-full shrink-0"></div>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
         <h2 className="text-4xl font-black mb-16">Group Use Cases</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Corporate', desc: 'Rewarding retreats, mission-driven team building, and client hosting.' },
              { icon: GraduationCap, title: 'Educational', desc: 'Study tours, university internships, and cultural exchange programs.' },
              { icon: Users, title: 'Gatherings', desc: 'Large family reunions, wedding parties, and group of friends.' }
            ].map((use, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all group hover:border-howzit-red/20">
                 <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-howzit-red mb-8 group-hover:bg-howzit-red group-hover:text-white transition-all">
                    <use.icon size={32} />
                 </div>
                 <h4 className="text-2xl font-black mb-4">{use.title}</h4>
                 <p className="text-gray-500 font-medium leading-relaxed">{use.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Inquiry Card */}
      <section id="group-inquiry" className="py-24 px-4">
         <div className="max-w-7xl mx-auto bg-howzit-red text-white rounded-[4rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black mb-8">Plan Your Group Mission</h2>
               <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">Let us handle the complexity while you enjoy the connection.</p>
               <button className="bg-howzit-dark text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                  REQUEST GROUP QUOTE
               </button>
            </div>
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <ShieldCheck size={200} />
            </div>
         </div>
      </section>
    </div>
  );
};

export default GroupTour;
