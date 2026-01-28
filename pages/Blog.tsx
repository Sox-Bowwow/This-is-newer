
import React from 'react';
import { BookOpen, Calendar, User, ChevronRight } from 'lucide-react';

const BlogPost = ({ title, excerpt, date, category, img }: any) => (
  <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
    <div className="aspect-video overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-howzit-red bg-howzit-red/5 px-3 py-1 rounded-full">{category}</span>
        <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1"><Calendar size={12} /> {date}</span>
      </div>
      <h3 className="text-2xl font-black mb-4 text-howzit-dark leading-tight group-hover:text-howzit-red transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{excerpt}</p>
      <button className="flex items-center gap-2 text-sm font-black text-howzit-dark group-hover:gap-4 transition-all">
        READ STORY <ChevronRight size={16} className="text-howzit-red" />
      </button>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">Howzit <span className="text-howzit-red">Stories.</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Local insights, travel tips, and real stories from the heart of Japan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogPost 
            title="Finding the Best Gyoza in Shibuya's Back Alleys"
            excerpt="Beyond the neon lights of the scramble crossing lies a world of culinary secrets. We explore three spots you won't find in guidebooks."
            date="Oct 12, 2024"
            category="FOOD"
            img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
          />
          <BlogPost 
            title="The Art of Slow Travel in Kyoto"
            excerpt="Why rushing through temples is the wrong way to see Kyoto. How to connect with Zen gardens through the lens of a local resident."
            date="Oct 08, 2024"
            category="CULTURE"
            img="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80"
          />
          <BlogPost 
            title="Navigating Tokyo's Subways Like a Pro"
            excerpt="Everything you need to know about the Yamanote line, Suica cards, and why the Shinjuku station is actually a labyrinth."
            date="Sep 25, 2024"
            category="GUIDE"
            img="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
