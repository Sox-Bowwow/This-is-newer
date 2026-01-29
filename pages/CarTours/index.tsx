
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Search, Filter, Clock, Users, ChevronRight, Navigation } from 'lucide-react';

const TOURS_DATA = [
  {
    id: 1,
    title: "Mt. Fuji & Hakone Expedition",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    price: "¥130,000~",
    description: "Experience Japan's most iconic mountain and the relaxing hot spring town of Hakone in a single, seamless private journey.",
    highlights: ['Lake Ashi Cruise', 'Owakudani Volcanic Valley', 'Mt. Fuji 5th Station'],
    location: "Mt. Fuji",
    departure: "Tokyo",
    link: "/car-tours/fuji"
  }
];

const TourCard: React.FC<{ tour: typeof TOURS_DATA[0] }> = ({ tour }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-300 flex flex-col h-full max-w-sm mx-auto">
    <div className="h-44 overflow-hidden relative shrink-0">
      <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-howzit-red/90 text-white backdrop-blur px-3 py-1.5 rounded-full font-bold text-[9px] uppercase tracking-widest flex items-center gap-1.5">
        <Car size={12} /> Private Car
      </div>
      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur text-white px-2.5 py-1 rounded-full text-[9px] font-bold">
        {tour.location}
      </div>
    </div>
    
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-gray-400 text-[9px] font-black uppercase tracking-widest mb-2">
        <Navigation size={10} className="text-howzit-red" />
        From {tour.departure}
      </div>
      
      <h3 className="text-xl font-black mb-2 group-hover:text-howzit-red transition-colors leading-tight">{tour.title}</h3>
      <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">{tour.description}</p>
      
      <div className="space-y-1.5 mb-5 mt-auto">
        {tour.highlights.slice(0, 3).map((h, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-700">
            <div className="w-1 h-1 rounded-full bg-howzit-red shrink-0"></div>
            {h}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
        <div>
          <span className="text-gray-400 text-[9px] block uppercase font-black tracking-widest mb-0.5">Price</span>
          <span className="text-lg font-black text-howzit-dark">{tour.price}</span>
        </div>
        <Link to={tour.link} className="bg-howzit-dark text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-howzit-red transition-all shadow-md active:scale-95">
          View
        </Link>
      </div>
    </div>
  </div>
);

const CarTours = () => {
  const [locationFilter, setLocationFilter] = useState('All');
  const [departureFilter, setDepartureFilter] = useState('All');

  const locations = ['All', ...new Set(TOURS_DATA.map(t => t.location))];
  const departures = ['All', 'Tokyo', 'Kyoto']; 

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter(t => {
      const matchLoc = locationFilter === 'All' || t.location === locationFilter;
      const matchDep = departureFilter === 'All' || t.departure === departureFilter;
      return matchLoc && matchDep;
    });
  }, [locationFilter, departureFilter]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight font-heading uppercase italic">Car Private <span className="text-howzit-red">Tours</span></h1>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Discover a side of Japan only accessible by car. Comfortable, private, and tailored to you.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <MapPin size={14} className="text-howzit-red" /> Destination Location
              </label>
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-howzit-red focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer appearance-none shadow-sm"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc === 'All' ? 'All Destinations' : loc}</option>)}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Navigation size={14} className="text-howzit-red" /> Departing From
              </label>
              <select 
                value={departureFilter}
                onChange={(e) => setDepartureFilter(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-howzit-red focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer appearance-none shadow-sm"
              >
                {departures.map(dep => <option key={dep} value={dep}>{dep === 'All' ? 'All Departure Points' : dep.toUpperCase()}</option>)}
              </select>
            </div>

            <div className="flex items-center justify-between pb-1 px-1">
              <div className="flex flex-col">
                <span className="text-howzit-red font-black text-2xl">{filteredTours.length}</span>
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none">Available Tours</span>
              </div>
              <button 
                onClick={() => { setLocationFilter('All'); setDepartureFilter('All'); }}
                className="text-gray-400 hover:text-howzit-red text-xs font-bold transition-colors underline decoration-dotted"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200 mb-32">
            <Car size={48} className="mx-auto text-gray-200 mb-4" />
            <h3 className="text-xl font-black text-gray-400 uppercase">No matches found</h3>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or contact us for a custom route!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarTours;
