
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Grid, MapPin, Star, ChevronRight, Check, Compass, Users, Sparkles, ArrowRight, Camera, Coffee, ShieldCheck, Instagram, Youtube, BookOpen, UserPlus, ChevronDown } from 'lucide-react';

const StoryHighlight = ({ title, img }: { title: string, img: string }) => (
  <div className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-default">
    <div className="story-ring transition-transform group-hover:scale-105 shadow-sm">
      <div className="story-inner">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <span className="text-[9px] font-black text-howzit-dark tracking-tight uppercase tracking-[0.15em]">{title}</span>
  </div>
);

const FeedPost = ({ img, title, category, link, isHighlight, features }: any) => (
  <Link to={link} className={`flex flex-col bg-white border ${isHighlight ? 'border-howzit-red shadow-lg' : 'border-gray-200'} rounded-xl overflow-hidden group hover:shadow-md transition-all h-full`}>
    <div className="flex items-center justify-between p-3 border-b border-gray-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-howzit-dark flex items-center justify-center text-white font-black text-[8px] italic">H</div>
        <span className="text-[11px] font-black text-howzit-dark uppercase tracking-tight truncate">{category}</span>
      </div>
      <MoreHorizontal size={16} className="text-gray-400" />
    </div>
    
    <div className="aspect-square overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {isHighlight && (
        <div className="absolute top-2 right-2 bg-howzit-red text-white p-1.5 rounded-full shadow-md">
          <Star size={10} fill="currentColor" />
        </div>
      )}
    </div>
    
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <Heart size={24} className="text-howzit-dark hover:text-howzit-red transition-colors" />
          <MessageCircle size={24} className="text-howzit-dark hover:text-gray-400" />
          <Send size={24} className="text-howzit-dark hover:text-gray-400" />
        </div>
        <div className="flex gap-4">
          <Bookmark size={24} className="text-howzit-dark hover:text-gray-400" />
        </div>
      </div>

      <div className="leading-relaxed mb-6">
        <span className="text-sm font-black mr-2 text-howzit-dark italic font-heading lowercase">howzit_japan</span>
        <span className="text-[15px] text-gray-800 font-bold leading-snug">{title}</span>
      </div>

      {features && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-50">
          {features.map((f: string, idx: number) => (
            <span key={idx} className="bg-gray-50 text-gray-500 text-[9px] font-black px-2 py-1 rounded flex items-center gap-1 uppercase tracking-tighter border border-gray-100">
              <Check size={10} className="text-howzit-red" /> {f}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
);

const LessonCard = ({ title, jp, romaji, en, img, category, link }: any) => (
  <Link to={link || '#'} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all h-full">
    <div className="flex items-center justify-between p-3 border-b border-gray-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-howzit-red flex items-center justify-center text-white font-black text-[8px]">あ</div>
        <span className="text-[11px] font-black text-howzit-dark uppercase tracking-tight truncate">{category}</span>
      </div>
      <MoreHorizontal size={16} className="text-gray-400" />
    </div>
    
    <div className="aspect-square relative overflow-hidden bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <img src={img} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Background" />
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-black text-howzit-dark mb-4 font-heading">{jp}</h3>
        <p className="text-xs font-bold text-howzit-red uppercase tracking-[0.2em] mb-1">{romaji}</p>
        <p className="text-sm font-medium text-gray-600 leading-relaxed px-4">{en}</p>
      </div>
    </div>
    
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <Heart size={24} className="text-howzit-dark hover:text-howzit-red transition-colors" />
          <MessageCircle size={24} className="text-howzit-dark hover:text-gray-400" />
          <Send size={24} className="text-howzit-dark hover:text-gray-400" />
        </div>
        <Bookmark size={24} className="text-howzit-dark hover:text-gray-400" />
      </div>

      <div className="leading-relaxed">
        <span className="text-sm font-black mr-2 text-howzit-dark italic font-heading lowercase">howzit_japanese</span>
        <span className="text-[15px] text-gray-800 font-bold leading-snug">{title}</span>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState<'tours' | 'experiences' | 'lessons'>('tours');

  const sharedJourneysImages = [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516423225212-984443685f09?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa8087?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80"
  ];

  const lessons = [
    {
      title: "Howzit Japanese Lesson 🌸",
      jp: "こんにちは！",
      romaji: "Konnichiwa",
      en: "A fun, travel-first way to prepare for Japan and enjoy it like a local.",
      img: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80",
      category: "Japanese Lesson",
      link: "/japanese-lesson"
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto py-8 px-4 md:px-8 lg:px-12">
        {/* 1. Story Highlights */}
        <section className="mb-12 overflow-hidden">
          <div className="flex gap-4 md:gap-10 overflow-x-auto no-scrollbar pb-4 snap-x md:justify-center">
            <div className="snap-center">
              <StoryHighlight title="Solo" img="https://images.unsplash.com/photo-1516423225212-984443685f09?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="Couple" img="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="Family" img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="Friend" img="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="Group" img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="School" img="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80" />
            </div>
            <div className="snap-center">
              <StoryHighlight title="Company" img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" />
            </div>
          </div>
        </section>

        {/* 2. Instagram Profile Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-4 items-start">
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-24 h-24 md:w-44 md:h-44 rounded-full border border-gray-100 p-1 flex items-center justify-center bg-white shadow-sm overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80" alt="Howzit Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 w-full justify-center md:justify-start">
              <h1 className="text-xl md:text-2xl font-normal text-howzit-dark font-heading">howzit_japan</h1>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://instagram.com/howzit_japan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-howzit-red text-white p-2 rounded-lg hover:bg-howzit-red/90 transition-all flex items-center justify-center active:scale-95 shadow-sm"
                  aria-label="Follow on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://youtube.com/@howzit_japan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 text-howzit-dark p-2 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center active:scale-95 shadow-sm"
                  aria-label="Message via YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex gap-10 justify-center md:justify-start mb-6 border-y md:border-y-0 border-gray-100 py-4 md:py-0 w-full md:w-auto">
              <div className="text-sm md:text-base"><span className="font-bold text-howzit-dark">177</span> <span className="text-gray-500">posts</span></div>
              <div className="text-sm md:text-base"><span className="font-bold text-howzit-dark">Over 500</span> <span className="text-gray-500">travelers</span></div>
              <div className="text-sm md:text-base"><span className="font-bold text-howzit-dark">6.2k</span> <span className="text-gray-500">followers</span></div>
            </div>

            <div className="text-sm md:text-base text-howzit-dark leading-relaxed space-y-1 w-full text-center md:text-left">
              <h2 className="font-black text-howzit-dark">Enjoy Japan like a local with locals.</h2>
              <p className="text-gray-400 font-medium">Travel Agency</p>
              
              <div className="pt-2 text-gray-700 font-medium">
                <p>Howzit is a travel agency creating fully customized journeys across Japan, designed to connect travelers with local people and culture 🇯🇵🤝</p>
                <p>Instead of fixed routes, we craft warm, authentic experiences based on who you travel with and what you want to discover 🌸🗾</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Navigation Tabs */}
        <div className="border-t border-gray-200 mb-8 flex justify-center">
          <div className="flex gap-10 md:gap-16 -mt-px">
            <button 
              onClick={() => setActiveTab('tours')}
              className={`flex items-center gap-2 py-5 border-t-2 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'tours' ? 'border-howzit-dark text-howzit-dark' : 'border-transparent text-gray-400 hover:text-howzit-dark'}`}
            >
              <Compass size={16} /> Tours
            </button>
            <button 
              onClick={() => setActiveTab('experiences')}
              className={`flex items-center gap-2 py-5 border-t-2 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'experiences' ? 'border-howzit-dark text-howzit-dark' : 'border-transparent text-gray-400 hover:text-howzit-dark'}`}
            >
              <Sparkles size={16} /> Experiences
            </button>
            <button 
              onClick={() => setActiveTab('lessons')}
              className={`flex items-center gap-2 py-5 border-t-2 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'lessons' ? 'border-howzit-dark text-howzit-dark' : 'border-transparent text-gray-400 hover:text-howzit-dark'}`}
            >
              <BookOpen size={16} /> Lessons
            </button>
          </div>
        </div>

        {/* 4. Grid Container */}
        <div className="pb-20">
          {activeTab === 'tours' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              <FeedPost 
                img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
                title="Bespoke one-of-a-kind journeys just for you 🌸🗾"
                category="CUSTOM INDIVIDUAL TOUR"
                link="/individual-tour"
                features={["Bespoke Itinerary", "Local Guides", "Any City"]}
              />
              <FeedPost 
                img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
                title="Goal-driven group trips for schools and teams ✨🇯🇵"
                category="CUSTOM GROUP TOUR"
                link="/group-tour"
                features={["Logistics", "Large Groups", "Missions"]}
              />
              <FeedPost 
                img="https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80"
                title="🚐 Door-to-door rides to Japan’s iconic landmarks ✨"
                category="PRIVATE CAR TOUR"
                link="/car-tours"
                features={["Luxury Vans", "Door-to-Door", "Comfort"]}
              />
              <FeedPost 
                img="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
                title="💎 The ultimate end-to-end concierge for a seamless Japan journey ✨"
                category="FULL TRIP PLANNING"
                link="/trip-planning"
                features={["Concierge", "End-to-End", "Luxury Ryokan"]}
              />
            </div>
          )}

          {activeTab === 'experiences' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              <FeedPost 
                img="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
                title="Learn and experience local life with Japanese families ❤️"
                category="Cultural Experience"
                link="/experiences"
                features={["Home Visits", "Family Cooking", "Local Life"]}
              />
              <FeedPost 
                img="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80"
                title="Seasonal magic and multi-day Packages 🌸"
                category="Special Packages"
                link="/special-packages"
                features={["Seasonal Gems", "Multi-day", "Exclusives"]}
              />
            </div>
          )}

          {activeTab === 'lessons' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {lessons.map((lesson, idx) => (
                <LessonCard key={idx} {...lesson} />
              ))}
            </div>
          )}
        </div>

        {/* 5. Journeys We’ve Shared Section */}
        <section className="pt-12 pb-24 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-howzit-dark font-heading lowercase tracking-tight">
              Journeys We’ve Shared<span className="text-howzit-red">.</span>
            </h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-3">Authentic moments captured by our travelers & local besties</p>
          </div>

          <div className="marquee-container -mx-4 md:-mx-8 lg:-mx-12">
            <div className="marquee-content gap-6 flex py-6">
              {sharedJourneysImages.map((img, i) => (
                <div key={`journey-1-${i}`} className="w-72 md:w-96 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                  <img src={img} className="w-full h-full object-cover" alt={`Journey ${i}`} />
                </div>
              ))}
              {sharedJourneysImages.map((img, i) => (
                <div key={`journey-2-${i}`} className="w-72 md:w-96 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                  <img src={img} className="w-full h-full object-cover" alt={`Journey ${i} duplicate`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
