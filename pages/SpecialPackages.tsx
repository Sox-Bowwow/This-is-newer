
import React from 'react';
import { Search, Filter, Calendar, MapPin, Tag, ChevronRight, Clock } from 'lucide-react';

const PackageCard = ({ title, duration, price, location, img, type }: any) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all hover:border-howzit-red/30">
    <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 flex-grow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-howzit-red/10 text-howzit-red text-[10px] font-black rounded-full uppercase tracking-wider">{type}</span>
          <span className="text-sm font-bold text-gray-400 flex items-center gap-1"><MapPin size={14} /> {location}</span>
        </div>
        <h3 className="text-2xl font-black mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">A curated experience blending major highlights with local secrets.</p>
        <div className="flex gap-4 text-sm font-medium text-gray-700">
           <span className="flex items-center gap-1"><Clock size={16} className="text-howzit-red" /> {duration}</span>
           <span className="flex items-center gap-1"><Tag size={16} className="text-howzit-red" /> Custom Options</span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div>
           <span className="text-gray-400 text-xs block font-bold uppercase">Starting from</span>
           <span className="text-xl font-black text-howzit-dark">{price}</span>
        </div>
        <button className="bg-howzit-red text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-md shadow-howzit-red/20">
           View Details
        </button>
      </div>
    </div>
  </div>
);

const SpecialPackages = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4"><span className="text-howzit-red">Special</span> Packages</h1>
          <p className="text-gray-600 font-medium">Curated itineraries ready to go.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <h3 className="font-black text-xl mb-6">Refine Search</h3>
               <div className="space-y-6">
                  <div>
                    <label className="text-xs font-black uppercase text-gray-400 mb-3 block tracking-widest">Duration</label>
                    <div className="space-y-2">
                       {['Full Day', 'Multi-day', 'Seasonal Specials'].map((opt, i) => (
                         <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-howzit-red focus:ring-howzit-red" />
                            <span className="text-sm font-medium text-gray-600 group-hover:text-howzit-red transition-colors">{opt}</span>
                         </label>
                       ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-gray-400 mb-3 block tracking-widest">Region</label>
                    <div className="space-y-2">
                       {['Tokyo Area', 'Kyoto & Nara', 'Hokkaido', 'Kyushu'].map((opt, i) => (
                         <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-howzit-red focus:ring-howzit-red" />
                            <span className="text-sm font-medium text-gray-600 group-hover:text-howzit-red transition-colors">{opt}</span>
                         </label>
                       ))}
                    </div>
                  </div>
                  <button className="w-full py-4 bg-howzit-red text-white rounded-2xl font-black mt-4 hover:shadow-lg hover:shadow-howzit-red/30 transition-all">
                    APPLY FILTERS
                  </button>
               </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            <PackageCard 
              title="Cherry Blossom Special 2025"
              duration="7 Days"
              price="¥240,000"
              location="Tokyo & Kyoto"
              img="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80"
              type="Seasonal"
            />
            <PackageCard 
              title="The Culinary Soul of Osaka"
              duration="Full Day"
              price="¥25,000"
              location="Osaka"
              img="https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80"
              type="Experience"
            />
            <PackageCard 
              title="Snowy Hokkaido Escapade"
              duration="10 Days"
              price="¥450,000"
              location="Hokkaido"
              img="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80"
              type="Multi-Day"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPackages;
