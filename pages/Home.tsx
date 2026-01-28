
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Grid, Play, Users, MapPin, Star, ChevronRight, Camera, Coffee, Car, ShieldCheck, Clock, Check, Compass } from 'lucide-react';

const StoryHighlight = ({ title, img }: { title: string, img: string }) => (
  <div className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-default">
    <div className="story-ring transition-transform group-hover:scale-105">
      <div className="story-inner">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <span className="text-[11px] font-bold text-gray-700 tracking-tight">{title}</span>
  </div>
);

const FeedPost = ({ img, title, category, link, isHighlight, features }: any) => (
  <Link to={link} className={`flex flex-col bg-white border ${isHighlight ? 'border-howzit-red shadow-lg ring-1 ring-howzit-red/20' : 'border-gray-200'} rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 h-full`}>
    {/* Post Header - Replaced metadata with large Category Title */}
    <div className="flex items-center justify-between p-4 shrink-0 border-b border-gray-50 bg-gray-50/30">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-howzit-red flex items-center justify-center text-white font-black text-[10px] shadow-sm italic shrink-0">H</div>
        <h3 className="text-sm md:text-base font-black text-howzit-dark uppercase tracking-tight truncate">
          {category}
        </h3>
      </div>
      <MoreHorizontal size={18} className="text-gray-300" />
    </div>
    
    {/* Post Media */}
    <div className="aspect-square overflow-hidden relative shrink-0">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      {isHighlight && (
        <div className="absolute top-3 right-3 bg-howzit-red shadow-lg text-white p-1.5 rounded-full">
          <Star size={12} fill="currentColor" />
        </div>
      )}
    </div>
    
    {/* Post Content */}
    <div className="p-4 flex flex-col flex-grow">
      {/* Action Bar */}
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <Heart size={24} className={`${isHighlight ? 'text-howzit-red' : 'hover:text-howzit-red'} transition-colors cursor-pointer active:scale-125 transition-transform`} fill={isHighlight ? "currentColor" : "none"} />
          <MessageCircle size={24} className="hover:text-gray-500 cursor-pointer" />
          <Send size={24} className="hover:text-gray-500 cursor-pointer" />
        </div>
        <Bookmark size={24} className="hover:text-gray-500 cursor-pointer" />
      </div>

      {/* Benefits / Features Badges */}
      {features && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.map((f: string, idx: number) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Check size={10} className="text-howzit-red" /> {f}
            </span>
          ))}
        </div>
      )}

      <div className="leading-tight mb-2">
        <span className="text-sm font-bold mr-2 text-howzit-red">Howzit Japan</span>
        <span className="text-sm text-gray-800 line-clamp-3 leading-relaxed">{title}</span>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-50">
        <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Tap to explore details</span>
      </div>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* 1. Story Highlights - Centered, Non-clickable */}
      <section className="relative mb-8 border-b border-gray-100">
        <div className="flex gap-4 md:gap-8 justify-center flex-wrap pb-8 px-4">
          <StoryHighlight title="Family" img="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80" />
          <StoryHighlight title="Friend" img="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" />
          <StoryHighlight title="Couple" img="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80" />
          <StoryHighlight title="Solo" img="https://images.unsplash.com/photo-1517646281694-27da33895e6f?auto=format&fit=crop&q=80" />
          <StoryHighlight title="School" img="https://images.unsplash.com/photo-152305085306e-8c3d3e7d4f1a?auto=format&fit=crop&q=80" />
          <StoryHighlight title="Internship" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" />
          <StoryHighlight title="Corporate" img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" />
        </div>
      </section>

      {/* 2. Profile Section (Hero) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start px-4 max-w-4xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-gray-200 p-1.5 flex items-center justify-center bg-white shadow-sm overflow-hidden">
             <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80" alt="Howzit Logo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <h1 className="text-2xl font-light tracking-tight text-howzit-dark">howzit_japan</h1>
            <div className="flex gap-2 justify-center">
              <Link to="/individual-tour" className="px-6 py-1.5 bg-howzit-red text-white font-bold rounded-lg text-sm hover:bg-red-600 transition-colors">Book Tour</Link>
              <Link to="/previous-works" className="px-6 py-1.5 bg-gray-100 text-gray-800 font-bold rounded-lg text-sm hover:bg-gray-200 transition-colors">Message</Link>
            </div>
          </div>
          
          <div className="flex gap-8 justify-center md:justify-start mb-6">
            <div className="flex flex-col md:flex-row items-center md:gap-1 text-howzit-dark"><span className="font-bold">84</span> <span className="text-gray-500 md:text-gray-800 text-[13px] md:text-base">posts</span></div>
            <div className="flex flex-col md:flex-row items-center md:gap-1 text-howzit-dark"><span className="font-bold">5.2k</span> <span className="text-gray-500 md:text-gray-800 text-[13px] md:text-base">guests</span></div>
            <div className="flex flex-col md:flex-row items-center md:gap-1 text-howzit-dark"><span className="font-bold">4.9</span> <span className="text-gray-500 md:text-gray-800 text-[13px] md:text-base">rating</span></div>
          </div>

          <div className="space-y-1 text-[14px] md:text-[15px] leading-snug">
            <p className="font-bold">Howzit Japan | Your Local Bestie</p>
            <p className="text-gray-600 font-medium">🇯🇵 Personalized travel partner in Japan</p>
            <p className="text-gray-600 font-medium">✨ Skip the guidebooks, feel the local vibe</p>
            <p className="text-gray-600 font-medium">📍 Tokyo • Kyoto • Osaka • Mt. Fuji</p>
            <p className="font-bold text-howzit-red mt-3 flex items-center justify-center md:justify-start gap-1">
               <ChevronRight size={16} /> <a href="#feed" className="hover:underline">See what we do</a>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feed Tabs */}
      <div id="feed" className="flex justify-center border-t border-gray-200 mb-8 px-4">
        <div className="flex gap-6 md:gap-12 -mt-px">
          <Link to="/" className="flex items-center gap-2 py-4 border-t border-black text-[11px] md:text-xs font-bold uppercase tracking-widest text-howzit-red">
            <Grid size={16} /> What We Do
          </Link>
          <Link to="/previous-works" className="flex items-center gap-2 py-4 text-gray-400 text-[11px] md:text-xs font-bold uppercase tracking-widest hover:text-black transition-colors">
            <Play size={16} /> Why Howzit?
          </Link>
          <Link to="/japan-guide" className="flex items-center gap-2 py-4 text-gray-400 text-[11px] md:text-xs font-bold uppercase tracking-widest hover:text-black transition-colors">
            <Compass size={16} /> Japan Guide
          </Link>
        </div>
      </div>

      {/* 4. Service Feed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 px-4">
        <FeedPost 
          img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
          title="The ultimate hidden alley tour in Shibuya. No megaphone guides, just local vibes and the best gyoza. 🥟"
          category="Individual Tour"
          link="/individual-tour"
          features={["100% Private", "Bespoke Route", "Local Guide"]}
        />
        <FeedPost 
          img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
          title="Skip the train transfers! 🚐 Premium door-to-door transport for your Mt. Fuji or Hakone getaway. Ideal for families and ultimate comfort. 🗻✨"
          category="Private Car Tour"
          link="/car-tours"
          features={["Door-to-Door", "No Luggage Stress", "Luxury Van"]}
        />
        <FeedPost 
          img="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
          title="Real connection. Learn traditional home cooking from a Japanese family. Heartwarming memories over a dining table. ❤️"
          category="Cultural Experience"
          link="/experiences"
          features={["Home Cooking", "Cultural Exchange", "Authentic"]}
        />
        <FeedPost 
          img="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80"
          title="Zero stress, deep discovery. We plan your entire 14-day trip from landing to take-off. Every hotel, every meal, perfectly curated. 🎋"
          category="Full Trip Planning"
          link="/trip-planning"
          features={["24/7 Support", "Logistics Handled", "Premium"]}
        />
        <FeedPost 
          img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
          title="Big crew? No problem. From corporate retreats to school internships, we make large group travel feel personal. 🎒"
          category="Custom Group Tour"
          link="/group-tour"
          features={["Coach Buses", "Group Rates", "Industry Visits"]}
        />
        <FeedPost 
          img="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80"
          title="Seasonal Magic! Our 2025 Cherry Blossom & Autumn Leaf packages are now open for early booking. 🌸"
          category="Seasonal Special"
          link="/japan-guide"
          features={["Limited Time", "Peak Season", "Photo Ready"]}
        />
      </div>
    </div>
  );
};

export default Home;
