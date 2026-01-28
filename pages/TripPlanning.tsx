
import React from 'react';
import { Calendar, Compass, MapPin, Coffee, ShieldCheck, Heart, ChevronRight, Star } from 'lucide-react';

const TripPlanning = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-howzit-dark py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-howzit-red/10 rounded-l-[10rem] -mr-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-howzit-red font-black uppercase tracking-widest text-sm mb-6 block">Premium Concierge</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9]">Full Trip <br/><span className="text-howzit-red">Planning.</span></h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              For the traveler who wants zero stress and maximum discovery. From the moment you land to your final departure, we curate every second.
            </p>
            <button className="bg-howzit-red text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg shadow-howzit-red/30">
              START PLANNING
            </button>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80" className="rounded-3xl h-64 object-cover border-b-4 border-howzit-red" />
             <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80" className="rounded-3xl h-48 mt-16 object-cover" />
             <img src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" className="rounded-3xl h-48 -mt-16 object-cover" />
             <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80" className="rounded-3xl h-64 object-cover border-t-4 border-howzit-red" />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-8">Who It's For</h2>
            <div className="space-y-8">
              {[
                { title: 'First-Timers', desc: 'Navigating Japan can be daunting. We take away the guesswork.' },
                { title: 'Celebrations', desc: 'Honeymoons, anniversaries, or birthdays that deserve perfection.' },
                { title: 'Busy Professionals', desc: 'You have the budget but not the time. We handle the logistics.' },
                { title: 'Deep Seekers', desc: 'Travelers wanting to go beyond the Golden Route into rural Japan.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-howzit-red rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-howzit-red/20">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-24 px-4">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Logistics & Transport', icon: Compass, items: ['Airport Transfers', 'Shinkansen Bookings', 'Private Drivers', 'Pocket Wi-Fi Setup'] },
                 { title: 'Lodging & Dining', icon: Coffee, items: ['Boutique Hotel Curation', 'Ryokan Reservations', 'Michelin-star Bookings', 'Hidden Izakayas'] },
                 { title: '24/7 Concierge', icon: ShieldCheck, items: ['Emergency Support', 'Live Translation Help', 'On-trip Changes', 'Restaurant Re-booking'] },
               ].map((box, i) => (
                 <div key={i} className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group hover:border-howzit-red/30">
                    <div className="w-16 h-16 bg-howzit-red/10 rounded-2xl flex items-center justify-center text-howzit-red mb-8 group-hover:bg-howzit-red group-hover:text-white transition-all shadow-sm">
                      <box.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-black mb-6">{box.title}</h4>
                    <ul className="space-y-4">
                      {box.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600 font-medium">
                          <div className="w-1.5 h-1.5 bg-howzit-red rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Sample Trip */}
      <section className="py-24 px-4 bg-howzit-dark text-white rounded-[4rem] mx-4 mb-24 border-t-8 border-howzit-red">
         <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
               <h2 className="text-4xl font-black">Sample 14-Day Trip</h2>
               <span className="bg-howzit-red px-6 py-2 rounded-full font-bold">The Great Connection Tour</span>
            </div>
            <div className="space-y-6">
               {[
                 { days: 'Days 1-4', city: 'Tokyo', activities: 'Neon nights, food lab in Shinjuku, fashion in Harajuku.' },
                 { days: 'Days 5-7', city: 'Hakone & Mt. Fuji', activities: 'Private Ryokan with onsen, lake cruise, cable car views.' },
                 { days: 'Days 8-11', city: 'Kyoto & Nara', activities: 'Morning meditation, tea with a master, forest hike with deers.' },
                 { days: 'Days 12-14', city: 'Osaka & Departure', activities: 'Street food final feast, souvenir shopping in Namba.' },
               ].map((step, i) => (
                 <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors hover:border-howzit-red/50">
                    <div className="md:w-32 font-black text-howzit-red text-xl">{step.days}</div>
                    <div className="flex-grow">
                       <h4 className="text-2xl font-bold mb-2">{step.city}</h4>
                       <p className="text-gray-400">{step.activities}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default TripPlanning;
