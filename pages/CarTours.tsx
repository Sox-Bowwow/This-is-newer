
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Search, Filter, Clock, Users, ChevronRight, Navigation } from 'lucide-react';

const TOURS_DATA = [
  {
    id: 1,
    title: "Mt. Fuji & Hakone Expedition",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    price: "¥130,000",
    description: "Experience Japan's most iconic mountain and the relaxing hot spring town of Hakone in a single, seamless private journey.",
    highlights: ['Lake Ashi Cruise', 'Owakudani Volcanic Valley', 'Mt. Fuji 5th Station'],
    location: "Mt. Fuji",
    departure: "Tokyo",
    link: "/fuji-tour"
  },
  {
    id: 2,
    title: "Kyoto Tea & Zen Gardens",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    price: "¥75,000",
    description: "A deep dive into the spiritual heart of Kyoto. Visit hidden temples and enjoy a private tea ceremony in a secluded garden.",
    highlights: ['Daitoku-ji Temples', 'Private Tea Ceremony', 'Arashiyama Bamboo Forest'],
    location: "Kyoto",
    departure: "Kyoto",
    link: "/car-tours"
  },
  {
    id: 3,
    title: "Nikko Heritage Luxury Tour",
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
    price: "¥95,000",
    description: "Deep dive into Japan's history at Nikko Toshogu Shrine. Visit stunning waterfalls and serene lakes in the mountains.",
    highlights: ['Toshogu Shrine (UNESCO)', 'Kegon Falls', 'Lake Chuzenji'],
    location: "Nikko",
    departure: "Tokyo",
    link: "/car-tours"
  },
  {
    id: 4,
    title: "Nara Deer & Great Buddha",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80",
    price: "¥65,000",
    description: "Explore the ancient capital of Nara. Feed the friendly deer and stand in awe before the giant bronze Buddha.",
    highlights: ['Todai-ji Temple', 'Nara Park', 'Kasuga Taisha'],
    location: "Nara",
    departure: "Kyoto",
    link: "/car-tours"
  },
  {
    id: 5,
    title: "Kamakura & Enoshima Coastline",
    img: "https://images.unsplash.com/photo-1590559899731-397e79477e32?auto=format&fit=crop&q=80",
    price: "¥75,000",
    description: "The 'Kyoto of the East'. Explore ancient shrines and the beautiful Shonan coastline in a private van.",
    highlights: ['Great Buddha', 'Hasedera Temple', 'Enoshima Island'],
    location: "Kamakura",
    departure: "Tokyo",
    link: "/car-tours"
  }
];

// Use React.FC to ensure built-in props like 'key' are correctly recognized by TypeScript in JSX
const TourCard: React.FC<{ tour: typeof TOURS_DATA[0] }> = ({ tour }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
    <div className="h-64 overflow-hidden relative shrink-0">
      <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-6 left-6 bg-howzit-red/90 text-white backdrop-blur px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
        <Car size={14} /> Private Car
      </div>
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] font-bold">
        {tour.location}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3">
        <Navigation size={12} className="text-howzit-red" />
        From {tour.departure}
      </div>
      <h3 className="text-2xl font-black mb-4 group-hover:text-howzit-red transition-colors">{tour.title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{tour.description}</p>
      
      <div className="space-y-2 mb-8 mt-auto">
        {tour.highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-howzit-red shrink-0"></div>
            {h}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
        <div>
          <span className="text-gray-400 text-[10px] block uppercase font-black tracking-widest mb-0.5">Price / Day</span>
          <span className="text-xl font-black text-howzit-dark">{tour.price}</span>
        </div>
        <Link to={tour.link} className="bg-howzit-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-howzit-red transition-all shadow-md active:scale-95">
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
  const departures = ['All', 'Tokyo', 'Kyoto']; // Explicitly set as requested

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
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Car Private <span className="text-howzit-red">Tours</span></h1>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Discover a side of Japan only accessible by car.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            {/* Location Selector */}
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

            {/* Departing Selector */}
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

            {/* Search Results Summary */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
            <Car size={48} className="mx-auto text-gray-200 mb-4" />
            <h3 className="text-xl font-black text-gray-400">No tours matching your selection</h3>
            <p className="text-gray-400 text-sm mt-2">Try changing your filters or contact us for a custom route!</p>
          </div>
        )}

        {/* Future Tours Footer */}
        <div className="mt-24 p-12 bg-howzit-dark text-white rounded-[3rem] text-center border-b-8 border-howzit-red shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-howzit-red/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="text-3xl font-black mb-4">Coming Soon to Car Tours</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">We're expanding our fleet and routes! Stay tuned for more premium experiences departing from Osaka and other regions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kyoto Zen Heritage', 'Osaka Night Drive', 'Shirakawa-go Express'].map((item, i) => (
              <div key={i} className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-wider">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTours;
