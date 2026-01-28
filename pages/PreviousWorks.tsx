
import React from 'react';
import { Play, Star, ChevronRight, Video, Camera, Users, Car } from 'lucide-react';

const WorkCard = ({ type, title, description, img, tags }: any) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:border-howzit-red/20">
    <div className="aspect-video overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-howzit-red text-white backdrop-blur px-4 py-2 rounded-full font-bold text-xs shadow-sm">
        {type}
      </div>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="w-16 h-16 bg-howzit-red text-white rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-howzit-red/40">
            <Play size={24} fill="currentColor" />
         </div>
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t: string, i: number) => (
          <span key={i} className="text-[10px] font-black uppercase tracking-widest text-howzit-red bg-howzit-red/5 px-3 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const PreviousWorks = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">Why <span className="text-howzit-red">Howzit?</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">See how we've helped travelers, companies, and creators experience the real Japan through our case stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <WorkCard 
            type="Private Tour"
            title="The 10-Day Family Adventure"
            description="Helping a family of five navigate Japan's busy cities and rural gems with a focus on kid-friendly spots and high-end dining."
            img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
            tags={['Customized', 'Family', 'Tokyo', 'Kyoto']}
          />
          <WorkCard 
            type="Media Project"
            title="Street Food Series with YouTuber"
            description="Providing logistics and local sourcing for a major food travel vlog focusing on the unseen alleys of Osaka."
            img="https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80"
            tags={['Video Production', 'Logistics', 'Osaka']}
          />
          <WorkCard 
            type="Group Tour"
            title="Silicon Valley Tech Retreat"
            description="Planning a culturally immersive off-site for a tech team, including Zen meditation and team-building at a traditional theater."
            img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
            tags={['Corporate', 'Immersion', 'Tech']}
          />
          <WorkCard 
            type="PR Project"
            title="Rural Japan Tourism Campaign"
            description="Bringing international influencers to explore hidden craft villages and documenting the experience for local governments."
            img="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80"
            tags={['Marketing', 'PR', 'Rural']}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviousWorks;
