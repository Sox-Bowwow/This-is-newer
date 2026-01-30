
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Tag, ChevronRight, X, Sparkles, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PACKAGES_DATA = [
  {
    id: 1,
    title: "Cherry Blossom Special 2025",
    excerpt: "The ultimate Sakura experience. We guide you through the best viewing spots in Tokyo and Kyoto, timed perfectly with the bloom.",
    duration: "7 Days",
    price: "¥240,000",
    location: "Tokyo & Kyoto",
    season: "Spring",
    type: "Seasonal",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80",
    tags: ['Sakura', 'Photo Tour', 'Cultural']
  },
  {
    id: 2,
    title: "Autumn Foliage & Zen Retreat",
    excerpt: "Experience Japan’s fiery red maple leaves in the secluded temples of Kyoto and the peaceful hills of Nara.",
    duration: "5 Days",
    price: "¥180,000",
    location: "Kyoto & Nara",
    season: "Autumn",
    type: "Seasonal",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    tags: ['Momiji', 'Zen', 'Nature']
  },
  {
    id: 3,
    title: "Snowy Hokkaido Escapade",
    excerpt: "A winter wonderland journey. Skiing, high-end seafood, and private onsens in Japan's wild north.",
    duration: "10 Days",
    price: "¥450,000",
    location: "Hokkaido",
    season: "Winter",
    type: "Luxury",
    img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80",
    tags: ['Ski', 'Onsen', 'Food']
  },
  {
    id: 4,
    title: "The Culinary Soul of Osaka",
    excerpt: "A deep dive into Japan's kitchen. Markets, street food hidden gems, and cooking with local families.",
    duration: "Full Day",
    price: "¥25,000",
    location: "Osaka",
    season: "All Year",
    type: "Experience",
    img: "https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80",
    tags: ['Street Food', 'Market', 'Family']
  },
  {
    id: 5,
    title: "Kyoto Heritage & Craft",
    excerpt: "Exclusive access to traditional workshops and historic shrines. Meet the artisans of the old capital.",
    duration: "3 Days",
    price: "¥120,000",
    location: "Kyoto",
    season: "All Year",
    type: "Bespoke",
    img: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80",
    tags: ['Craft', 'History', 'Exclusive']
  }
];

// Fixed: Using React.FC to properly handle the reserved 'key' prop when this component is used in a map function.
const PackageCard: React.FC<{ pkg: typeof PACKAGES_DATA[0] }> = ({ pkg }) => (
  <div className="group block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100">
      <img 
        src={pkg.img} 
        alt={pkg.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute top-4 left-4">
        <span className="bg-howzit-red text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          {pkg.type}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 bg-howzit-dark/80 backdrop-blur text-white px-3 py-1.5 rounded-xl font-black text-[11px] shadow-lg">
        {pkg.price}
      </div>
    </div>
    <div className="px-1">
      <div className="flex items-center gap-3 text-gray-400 text-[9px] font-black uppercase tracking-widest mb-3">
        <span className="flex items-center gap-1.5"><Clock size={12} className="text-howzit-red" /> {pkg.duration}</span>
        <span className="flex items-center gap-1.5"><MapPin size={12} className="text-howzit-red" /> {pkg.location}</span>
      </div>
      <h2 className="text-xl md:text-2xl font-black text-howzit-dark mb-3 leading-tight group-hover:text-howzit-red transition-colors uppercase tracking-tight font-heading">
        {pkg.title}
      </h2>
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed mb-5 line-clamp-2">
        {pkg.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {pkg.tags.map((tag, i) => (
          <span key={i} className="text-[8px] font-black uppercase tracking-widest bg-gray-50 text-gray-400 px-2 py-1 rounded-md border border-gray-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-howzit-dark group-hover:gap-3 transition-all">
        Explore Package <ChevronRight size={14} className="text-howzit-red" />
      </div>
    </div>
  </div>
);

const SpecialPackages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const locations = ['All', 'Tokyo', 'Kyoto', 'Osaka', 'Hokkaido', 'Nara'];
  const types = ['All', 'Seasonal', 'Luxury', 'Experience', 'Bespoke'];

  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter(pkg => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           pkg.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === 'All' || pkg.location.includes(locationFilter);
      const matchesType = typeFilter === 'All' || pkg.type === typeFilter;
      
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, locationFilter, typeFilter]);

  return (
    <div className="py-12 bg-white min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85] text-howzit-dark font-heading">
            Special<br/><span className="text-howzit-red">Packages.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Curated journeys designed for the most iconic seasons and high-end experiences across Japan. 
            Ready-to-go excellence.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-12 bg-gray-50/50 p-6 md:p-8 rounded-[2.5rem] border border-gray-100 flex flex-col gap-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            {/* Search Bar */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Search size={14} className="text-howzit-red" /> Keyword
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="Sakura, Onsen, Food..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark shadow-sm text-sm"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-howzit-red transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Location Filter */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <MapPin size={14} className="text-howzit-red" /> Location
              </label>
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer shadow-sm appearance-none text-sm"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>)}
              </select>
            </div>

            {/* Type Filter */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Tag size={14} className="text-howzit-red" /> Package Type
              </label>
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer shadow-sm appearance-none text-sm"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}
              >
                {types.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Types' : cat}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 px-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'} found
          </span>
          {(searchTerm || locationFilter !== 'All' || typeFilter !== 'All') && (
            <button 
              onClick={() => { setSearchTerm(''); setLocationFilter('All'); setTypeFilter('All'); }}
              className="text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Grid Container */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 pb-24">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-gray-50/30 rounded-[3rem] border border-dashed border-gray-200 mb-24">
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm mx-auto text-gray-200">
                <Search size={32} />
             </div>
             <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight">No packages found</h3>
             <p className="text-gray-400 font-bold mt-2 text-sm">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialPackages;
