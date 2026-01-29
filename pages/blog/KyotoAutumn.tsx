
import React from 'react';
import { ChevronLeft, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const KyotoAutumn = () => {
  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link to="/japan-guide" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-howzit-red transition-colors">
          <ChevronLeft size={16} /> Back to Our Japan Guide
        </Link>
      </div>

      {/* Hero Section (Video) */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-gray-100">
           <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ssh71hePR8Q?autoplay=0&controls=1&rel=0" 
              title="Kyoto Autumn Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-howzit-red mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Nov 15, 2024</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Arashiyama, Kyoto</span>
            <span className="bg-howzit-red/10 text-howzit-red px-3 py-1 rounded-full">Culture</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-howzit-dark tracking-tighter uppercase leading-[0.9] mb-8">
            Kyoto’s Fiery<br/><span className="text-howzit-red">Autumn Journey.</span>
          </h1>
          
          <div className="w-16 h-1 bg-howzit-red rounded-full mb-12"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl md:text-2xl font-black text-howzit-dark leading-tight mb-8">
            Avoid the crowds and find peace in the secluded temples of Kyoto during the peak foliage season. A guide to the most spiritual autumn experience.
          </p>
          
          <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed">
            <p>
              Most tourists flock to Kinkaku-ji or Kiyomizu-dera, but the true magic of Kyoto's autumn is found in the smaller, quieter temples of the northern hills. Places like Enrian or Gio-ji offer a scale of intimacy where you can truly hear the silence between the falling leaves.
            </p>
            <p>
              Imagine sitting on the veranda of a wooden temple, the air crisp and cooling, holding a warm bowl of matcha. This is the "Howzit experience." It's not about checking boxes; it's about checking in with yourself and the environment.
            </p>
            <p>
              Our local guides know the exact week each garden hits its peak. We time our visits to avoid the midday rush, ensuring you have the moss gardens and stone bridges nearly to yourself.
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

export default KyotoAutumn;
