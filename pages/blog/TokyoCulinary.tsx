
import React from 'react';
import { ChevronLeft, Calendar, MapPin, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const TokyoCulinary = () => {
  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link to="/japan-guide" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-howzit-red transition-colors">
          <ChevronLeft size={16} /> Back to Our Japan Guide
        </Link>
      </div>

      {/* Hero Section (Video/Image) */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl border border-gray-100">
           <img 
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80" 
              alt="Tokyo Food Scene" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-howzit-red mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Oct 12, 2024</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Shibuya, Tokyo</span>
            <span className="bg-howzit-red/10 text-howzit-red px-3 py-1 rounded-full">Food</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-howzit-dark tracking-tighter uppercase leading-[0.9] mb-8">
            Shibuya’s Hidden<br/><span className="text-howzit-red">Culinary Alleys.</span>
          </h1>
          
          <div className="w-16 h-1 bg-howzit-red rounded-full mb-12"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl md:text-2xl font-black text-howzit-dark leading-tight mb-8">
            Discover the secret gyoza spots and local izakayas tucked away from the Shibuya scramble. A late-night dive into Tokyo’s food soul.
          </p>
          
          <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed">
            <p>
              Shibuya is world-famous for its scramble crossing, but just three minutes away down a flight of narrow stairs lies a gyoza stall with only eight seats. There is no English menu, only a handwritten card and the smell of sizzling pork and garlic. This is where we start our "Local Bestie" tours.
            </p>
            <p>
              Our culinary journeys aren't about Michelin stars. They're about the "B-grade gourmet" — the food that locals eat after a long shift. Standing bars, paper-walled izakayas, and the best highballs in the city.
            </p>
            <p>
              The night ends at a hidden jazz bar in Nonbei Yokocho (Drunkard's Alley). It's a tiny space, barely bigger than a walk-in closet, but filled with a thousand vinyl records and the spirit of a Tokyo that hasn't changed in fifty years. 
            </p>
          </div>
        </div>
        
        {/* Footer Link back */}
        <div className="mt-20 pt-12 border-t border-gray-100 flex justify-center">
          <Link 
            to="/japan-guide" 
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-howzit-red group-hover:text-white group-hover:border-howzit-red transition-all">
               <ChevronLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Return to Our Japan Guide</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokyoCulinary;
