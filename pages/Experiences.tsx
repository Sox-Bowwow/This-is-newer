
import React from 'react';
import { Search, Filter, Coffee, Users, Scissors, Camera, Music, Sparkles, Home, Star, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ title, provider, price, category, img, tags, description }: any) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
    <div className="h-64 overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-6 left-6 bg-howzit-red text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
        {category}
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-black text-2xl leading-tight group-hover:text-howzit-red transition-colors">{title}</h3>
      </div>
      <p className="text-gray-400 text-xs font-bold mb-4 uppercase tracking-widest">Provider: <span className="text-howzit-dark">{provider}</span></p>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((t: string, i: number) => (
          <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-gray-50 text-gray-400 px-3 py-1.5 rounded-lg border border-gray-100">{t}</span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
         <span className="text-xl font-black text-howzit-dark">{price}</span>
         <button className="bg-howzit-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-howzit-red transition-all">
           View Details
         </button>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const experiences = [
    { 
      title: 'Home Visit & Family Cooking', 
      provider: 'Howzit Japan Exclusive', 
      price: '¥15,000', 
      category: 'AUTHENTIC', 
      img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80', 
      tags: ['Home Meal', 'Cultural Exchange'],
      description: 'Enter a real Japanese home, learn traditional family recipes, and share stories over a dining table. The most intimate way to experience Japan.'
    },
    { 
      title: 'Zen Tea Ceremony Session', 
      provider: 'Traditional Partner', 
      price: '¥8,500', 
      category: 'SPIRITUAL', 
      img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80', 
      tags: ['Matcha', 'Zen Gardens'],
      description: 'A quiet, meditative session in a secluded Kyoto garden. Learn the art of tea preparation from a certified master.'
    },
    { 
      title: 'Washi Paper Making Workshop', 
      provider: 'Echizen Craft Guild', 
      price: '¥6,800', 
      category: 'CRAFT', 
      img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80', 
      tags: ['Handmade', 'Washi'],
      description: 'Create your own traditional paper using ancient techniques. A tactile connection to Japan’s artisanal history.'
    },
    { 
      title: 'Kabuki Theater & Workshop', 
      provider: 'Local Arts Foundation', 
      price: '¥18,000', 
      category: 'PERFORMANCE', 
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80', 
      tags: ['Arts', 'Backstage'],
      description: 'Go behind the scenes of Japans iconic theater style. Learn about the makeup, costumes, and the rigorous training of actors.'
    },
  ];

  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">Cultural<br/><span className="text-howzit-red">Experiences.</span></h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
            Real immersion isn't found in books. We connect you with local masters, families, and artists for deep, personal discovery.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 overflow-x-auto pb-12 no-scrollbar">
           {[
             { name: 'All Experiences', icon: Sparkles },
             { name: 'Home Living', icon: Home },
             { name: 'Traditional Arts', icon: Scissors },
             { name: 'Spiritual', icon: Coffee },
             { name: 'Performance', icon: Music },
           ].map((cat, i) => (
             <button key={i} className={`flex items-center gap-3 px-8 py-4 rounded-full font-black whitespace-nowrap transition-all border ${i === 0 ? 'bg-howzit-red text-white border-howzit-red shadow-xl shadow-howzit-red/20' : 'bg-white text-gray-400 border-gray-100 hover:border-howzit-red hover:text-howzit-red'}`}>
                <cat.icon size={20} /> {cat.name}
             </button>
           ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
           {experiences.map((exp, i) => (
             <ExperienceCard key={i} {...exp} />
           ))}
        </div>

        {/* Custom Sourcing Section */}
        <div className="mt-24 p-12 md:p-24 bg-howzit-dark text-white rounded-[4rem] text-center relative overflow-hidden border-b-8 border-howzit-red">
           <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black mb-8">Looking for something specific?</h3>
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">We specialize in sourcing specialized masters or niche workshops across Japan. From knife making to high-end pottery tours.</p>
              <button className="bg-howzit-red text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-howzit-red/30">
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
