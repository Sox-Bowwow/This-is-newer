
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Sparkles, Home, Coffee, Scissors, Music, X, Tag, ChevronRight, Star } from 'lucide-react';

const EXPERIENCES_DATA = [
  {
    id: 1,
    title: 'Home Visit & Family Cooking',
    provider: 'Howzit Japan Exclusive',
    price: '¥15,000',
    category: 'Authentic',
    location: 'Tokyo',
    img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80',
    tags: ['Home Meal', 'Cultural Exchange'],
    description: 'Enter a real Japanese home, learn traditional family recipes, and share stories over a dining table.'
  },
  {
    id: 2,
    title: 'Zen Tea Ceremony Session',
    provider: 'Traditional Partner',
    price: '¥8,500',
    category: 'Spiritual',
    location: 'Kyoto',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
    tags: ['Matcha', 'Zen Gardens'],
    description: 'A quiet, meditative session in a secluded Kyoto garden. Learn the art of tea preparation from a certified master.'
  },
  {
    id: 3,
    title: 'Washi Paper Making Workshop',
    provider: 'Echizen Craft Guild',
    price: '¥6,800',
    category: 'Craft',
    location: 'Osaka',
    img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80',
    tags: ['Handmade', 'Washi'],
    description: 'Create your own traditional paper using ancient techniques. A tactile connection to Japan’s history.'
  },
  {
    id: 4,
    title: 'Kabuki Theater & Workshop',
    provider: 'Local Arts Foundation',
    price: '¥18,000',
    category: 'Performance',
    location: 'Tokyo',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80',
    tags: ['Arts', 'Backstage'],
    description: 'Go behind the scenes of Japan’s iconic theater style. Learn about makeup, costumes, and training.'
  },
  {
    id: 5,
    title: 'Knife Forging Masterclass',
    provider: 'Sakai Blades',
    price: '¥35,000',
    category: 'Craft',
    location: 'Osaka',
    img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80',
    tags: ['Artisan', 'Sakai'],
    description: 'Work with a master blacksmith to learn the secrets of forging world-class Japanese steel.'
  }
];

// Fixed: Using React.FC to properly handle the reserved 'key' prop when this component is used in a map function.
const ExperienceCard: React.FC<{ exp: typeof EXPERIENCES_DATA[0] }> = ({ exp }) => (
  <div className="group block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100">
      <img 
        src={exp.img} 
        alt={exp.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute top-4 left-4">
        <span className="bg-howzit-red text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          {exp.category}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 bg-howzit-dark/80 backdrop-blur text-white px-3 py-1.5 rounded-xl font-black text-[11px] shadow-lg">
        {exp.price}
      </div>
    </div>
    <div className="px-1">
      <div className="flex items-center gap-3 text-gray-400 text-[9px] font-black uppercase tracking-widest mb-3">
        <span className="flex items-center gap-1.5"><MapPin size={12} className="text-howzit-red" /> {exp.location}</span>
        <span className="flex items-center gap-1.5"><Home size={12} className="text-howzit-red" /> {exp.provider}</span>
      </div>
      <h2 className="text-xl md:text-2xl font-black text-howzit-dark mb-3 leading-tight group-hover:text-howzit-red transition-colors uppercase tracking-tight font-heading">
        {exp.title}
      </h2>
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed mb-5 line-clamp-2">
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {exp.tags.map((tag, i) => (
          <span key={i} className="text-[8px] font-black uppercase tracking-widest bg-gray-50 text-gray-400 px-2 py-1 rounded-md border border-gray-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-howzit-dark group-hover:gap-3 transition-all">
        Explore Experience <ChevronRight size={14} className="text-howzit-red" />
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const locations = ['All', 'Tokyo', 'Kyoto', 'Osaka'];
  const categories = ['All', 'Authentic', 'Spiritual', 'Craft', 'Performance'];

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES_DATA.filter(exp => {
      const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           exp.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === 'All' || exp.location === locationFilter;
      const matchesCategory = categoryFilter === 'All' || exp.category === categoryFilter;
      
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchTerm, locationFilter, categoryFilter]);

  return (
    <div className="py-12 bg-white min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85] text-howzit-dark font-heading">
            Cultural<br/><span className="text-howzit-red">Experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Real immersion isn't found in books. Connect with local masters, families, and artists for a deep, personal discovery of Japan.
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
                  placeholder="Tea, Sushi, Craft..."
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

            {/* Category Filter */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Tag size={14} className="text-howzit-red" /> Category
              </label>
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer shadow-sm appearance-none text-sm"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 px-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {filteredExperiences.length} {filteredExperiences.length === 1 ? 'Experience' : 'Experiences'} found
          </span>
          {(searchTerm || locationFilter !== 'All' || categoryFilter !== 'All') && (
            <button 
              onClick={() => { setSearchTerm(''); setLocationFilter('All'); setCategoryFilter('All'); }}
              className="text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Grid Container */}
        {filteredExperiences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {filteredExperiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-gray-50/30 rounded-[3rem] border border-dashed border-gray-200">
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm mx-auto text-gray-200">
                <Search size={32} />
             </div>
             <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight">No experiences found</h3>
             <p className="text-gray-400 font-bold mt-2 text-sm">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Custom Sourcing Section */}
        <div className="mt-24 p-12 md:p-20 bg-howzit-dark text-white rounded-[4rem] text-center relative overflow-hidden border-b-8 border-howzit-red shadow-2xl">
           <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black mb-6 font-heading uppercase">Looking for more?</h3>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                We specialize in sourcing specialized masters or niche workshops across Japan. From knife making to high-end pottery tours.
              </p>
              <button className="bg-howzit-red text-white px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-2xl shadow-howzit-red/30">
                ASK FOR A SPECIALIST
              </button>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <Sparkles size={400} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
