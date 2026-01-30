
import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, ChevronRight, Search, X, Filter, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    type: 'blog',
    title: "Kyoto’s Fiery Autumn: A Zen Journey",
    excerpt: 'Avoid the crowds and find peace in the secluded temples of Kyoto during the peak foliage season. A guide to the most spiritual autumn experience.',
    date: 'Nov 15, 2024',
    category: 'Culture',
    location: 'Kyoto',
    season: 'Autumn',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
    path: '/blog/kyoto-autumn'
  },
  {
    type: 'blog',
    title: 'Tokyo Culinary Journey: Shibuya’s Hidden Alleys',
    excerpt: 'Discover the secret gyoza spots and local izakayas tucked away from the Shibuya scramble. A late-night dive into Tokyo’s food soul.',
    date: 'Oct 12, 2024',
    category: 'Food',
    location: 'Tokyo',
    season: 'Summer',
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80',
    path: '/blog/tokyo-culinary-journey'
  }
];

// Fixed: Using React.FC to properly handle the reserved 'key' prop when this component is used in a map function.
const BlogCard: React.FC<{ post: typeof BLOG_POSTS[0] }> = ({ post }) => (
  <Link to={post.path} className="group block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
      <img 
        src={post.img} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute top-4 left-4">
        <span className="bg-howzit-red text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          {post.category}
        </span>
      </div>
    </div>
    <div className="px-1">
      <div className="flex items-center gap-3 text-gray-400 text-[9px] font-black uppercase tracking-widest mb-3">
        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-howzit-red" /> {post.date}</span>
        <span className="flex items-center gap-1.5"><MapPin size={12} className="text-howzit-red" /> {post.location}</span>
      </div>
      <h2 className="text-xl md:text-2xl font-black text-howzit-dark mb-3 leading-tight group-hover:text-howzit-red transition-colors uppercase tracking-tight">
        {post.title}
      </h2>
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed mb-5 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-howzit-dark group-hover:gap-3 transition-all">
        Read Story <ChevronRight size={14} className="text-howzit-red" />
      </div>
    </div>
  </Link>
);

const JapanGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [genreFilter, setGenreFilter] = useState('All');

  const locations = ['All', 'Tokyo', 'Kyoto', 'Osaka', 'Mt. Fuji'];
  const seasons = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];
  const genres = ['All', 'Food', 'Culture', 'Guide', 'Nature'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === 'All' || post.location === locationFilter;
      const matchesSeason = seasonFilter === 'All' || post.season === seasonFilter;
      const matchesGenre = genreFilter === 'All' || post.category === genreFilter;
      
      return matchesSearch && matchesLocation && matchesSeason && matchesGenre;
    });
  }, [searchTerm, locationFilter, seasonFilter, genreFilter]);

  return (
    <div className="py-12 bg-white min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85] text-howzit-dark">
            Our Japan<br/><span className="text-howzit-red">Stories.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Local insights, travel tips, and real stories from the heart of Japan. 
            Discover the unseen.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-12 bg-gray-50/50 p-6 md:p-8 rounded-[2.5rem] border border-gray-100 flex flex-col gap-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Search Bar */}
            <div className="lg:col-span-1 space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Search size={14} className="text-howzit-red" /> Keyword
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="Sushi, Zen..."
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
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            {/* Season Filter */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Calendar size={14} className="text-howzit-red" /> Season
              </label>
              <select 
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer shadow-sm appearance-none text-sm"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}
              >
                {seasons.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Genre Filter */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1">
                <Tag size={14} className="text-howzit-red" /> Genre
              </label>
              <select 
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-howzit-red focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark cursor-pointer shadow-sm appearance-none text-sm"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}
              >
                {genres.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 px-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Story' : 'Stories'} found
          </span>
          {(searchTerm || locationFilter !== 'All' || seasonFilter !== 'All' || genreFilter !== 'All') && (
            <button 
              onClick={() => { setSearchTerm(''); setLocationFilter('All'); setSeasonFilter('All'); setGenreFilter('All'); }}
              className="text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Grid Container */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {filteredPosts.map((post, i) => (
              <BlogCard key={i} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-gray-50/30 rounded-[3rem] border border-dashed border-gray-200">
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm mx-auto text-gray-200">
                <Search size={32} />
             </div>
             <h3 className="text-2xl font-black text-gray-400 uppercase tracking-tight">No stories found</h3>
             <p className="text-gray-400 font-bold mt-2 text-sm">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JapanGuide;
