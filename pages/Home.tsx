
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Grid, MapPin, Star, ChevronRight, Check, Compass, Users, Sparkles, ArrowRight, Camera, Coffee, ShieldCheck, Instagram, Youtube, BookOpen } from 'lucide-react';

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
    
    <div className="p-3 flex flex-col flex-grow">
      <div className="flex justify-between mb-3">
        <div className="flex gap-3">
          <Heart size={22} className="text-howzit-dark hover:text-howzit-red transition-colors" />
          <MessageCircle size={22} className="text-howzit-dark hover:text-gray-400" />
          <Send size={22} className="text-howzit-dark hover:text-gray-400" />
        </div>
        <div className="flex gap-3">
          <Bookmark size={22} className="text-howzit-dark hover:text-gray-400" />
        </div>
      </div>

      <div className="leading-relaxed mb-4">
        <span className="text-xs font-black mr-2 text-howzit-dark italic font-heading lowercase">howzit_japan</span>
        <span className="text-xs text-gray-700 font-medium leading-relaxed">{title}</span>
      </div>

      {features && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-50">
          {features.map((f: string, idx: number) => (
            <span key={idx} className="bg-gray-50 text-gray-400 text-[8px] font-bold px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-tighter">
              <Check size={8} className="text-howzit-red" /> {f}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
);

const LessonCard = ({ title, jp, romaji, en, img, category }: any) => (
  <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all h-full">
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
        <p className="text-sm font-medium text-gray-600">{en}</p>
      </div>
    </div>
    
    <div className="p-3">
      <div className="flex justify-between mb-3">
        <div className="flex gap-3">
          <Heart size={22} className="text-howzit-dark hover:text-howzit-red transition-colors" />
          <MessageCircle size={22} className="text-howzit-dark hover:text-gray-400" />
          <Send size={22} className="text-howzit-dark hover:text-gray-400" />
        </div>
        <Bookmark size={22} className="text-howzit-dark hover:text-gray-400" />
      </div>

      <div className="leading-relaxed">
        <span className="text-xs font-black mr-2 text-howzit-dark italic font-heading lowercase">howzit_japanese</span>
        <span className="text-xs text-gray-700 font-medium leading-relaxed">{title}</span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'locations'>('services');

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
      title: "Essential for ordering at Izakaya! 🍺",
      jp: "すみません！",
      romaji: "sumimasen",
      en: "Excuse me / I'm sorry",
      img: "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?auto=format&fit=crop&q=80",
      category: "Daily Life"
    },
    {
      title: "Use this to say something is delicious! 🍱",
      jp: "美味しい！",
      romaji: "oishii",
      en: "Delicious / Tasty",
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80",
      category: "Food & Drink"
    },
    {
      title: "When you leave a shop with gratitude 🌸",
      jp: "ありがとう！",
      romaji: "arigatou",
      en: "Thank you",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
      category: "Etiquette"
    }
  ];

  return (
    <div className="bg-white">
      {/* Container width expanded from max-w-4xl to max-w-[1400px] to reduce side margins by approx 70% */}
      <div className="max-w-[1400px] mx-auto py-10 px-4 md:px-8 lg:px-12">
        {/* 1. Story Highlights */}
        <section className="mb-14 overflow-hidden">
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

        {/* 2. Profile Section - Expanded for wider layout */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-gray-100 p-1.5 flex items-center justify-center bg-white shadow-md overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80" alt="Howzit Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6 justify-center md:justify-start">
              <h1 className="text-3xl font-light tracking-tight text-howzit-dark font-heading lowercase">howzit_japan</h1>
              <div className="flex gap-3 justify-center">
                <a 
                  href="https://instagram.com/howzit_japan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-gray-50 text-howzit-dark border border-gray-200 rounded-xl hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://youtube.com/@howzit_japan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-gray-50 text-howzit-dark border border-gray-200 rounded-xl hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex gap-10 justify-center md:justify-start mb-8 border-y border-gray-50 py-5">
              <div className="text-base"><span className="font-bold text-howzit-dark">177</span> <span className="text-gray-500">posts</span></div>
              <div className="text-base"><span className="font-bold text-howzit-dark">Over 500</span> <span className="text-gray-500">travelers</span></div>
              <div className="text-base"><span className="font-bold text-howzit-dark">6.2k</span> <span className="text-gray-500">followers</span></div>
            </div>

            <div className="space-y-4 text-base md:text-[17px] text-howzit-dark leading-relaxed">
              <p className="font-bold uppercase tracking-widest text-xs flex items-center gap-2 justify-center md:justify-start text-howzit-red">Enjoy Japan like a local with locals.</p>
              
              <div className="space-y-4">
                <p className="text-gray-600 font-medium">
                  Howzit is a travel agency creating fully customized journeys across Japan, designed to connect travelers with local people and culture 🇯🇵🤝
                </p>
                <p className="text-gray-600 font-medium">
                  Instead of fixed routes, we craft warm, authentic experiences based on who you travel with and what you want to discover 🌸🗾
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Navigation Tabs */}
        <div className="border-t border-gray-200 mb-12 flex justify-center">
          <div className="flex gap-16 -mt-px">
            <button 
              onClick={() => setActiveTab('services')}
              className={`flex items-center gap-2 py-5 border-t-2 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'services' ? 'border-howzit-dark text-howzit-dark' : 'border-transparent text-gray-400 hover:text-howzit-dark'}`}
            >
              <Grid size={16} /> Services
            </button>
            <button 
              onClick={() => setActiveTab('locations')}
              className={`flex items-center gap-2 py-5 border-t-2 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'locations' ? 'border-howzit-dark text-howzit-dark' : 'border-transparent text-gray-400 hover:text-howzit-dark'}`}
            >
              <BookOpen size={16} /> Lessons
            </button>
          </div>
        </div>

        {/* 4. Grid Container - Wider layout uses 3 or 4 columns on large screens */}
        {activeTab === 'services' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-20 animate-in fade-in duration-500">
            <FeedPost 
              img="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
              title="For solo travelers, couples, families, and friends, we design one-of-a-kind Japan journeys just for you 🌸🗾"
              category="Individual Custom Tour"
              link="/individual-tour"
              features={["Bespoke Itinerary", "Local Guides", "Any City"]}
            />
            <FeedPost 
              img="https://images.unsplash.com/photo-1570116494159-02d9f212bc0b?auto=format&fit=crop&q=80"
              title="Skip the train transfers! 🚐 Door-to-door rides to Japan’s iconic landmarks—travel comfortably with the people who matter most ✨"
              category="Private Car Tour"
              link="/car-tours"
              features={["Luxury Vans", "Door-to-Door", "No Crowds"]}
            />
            <FeedPost 
              img="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
              title="Learn and experience local life with Japanese families, creating heartwarming memories together ❤️"
              category="Cultural Experience"
              link="/experiences"
              features={["Home Visits", "Family Cooking", "Local Life"]}
            />
            <FeedPost 
              img="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80"
              title="Seamless Japan discovery. We handle every detail from hotels to dinner reservations for a stress-free trip 🎋"
              category="Full Trip Planning"
              link="/trip-planning"
              features={["Concierge", "24/7 Support", "End-to-End"]}
            />
            <FeedPost 
              img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
              title="From travel agencies to schools and teams, we create goal-driven group trips for an unforgettable Japan experience ✨🇯🇵"
              category="Custom Group Tour"
              link="/group-tour"
              features={["Logistics", "Large Groups", "Missions"]}
            />
            <FeedPost 
              img="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80"
              title="Seasonal magic awaits 🌸 Explore Japan with our Seasonal Tours, Multi-day Packages, and Regional Specials."
              category="Special Packages"
              link="/special-packages"
              features={["Seasonal Gems", "Multi-day", "Exclusives"]}
            />
          </div>
        ) : (
          /* Locations/Lessons Tab Content */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-20 animate-in fade-in duration-500">
            {lessons.map((lesson, idx) => (
              <LessonCard key={idx} {...lesson} />
            ))}
            <div className="flex flex-col bg-gray-50 border border-dashed border-gray-200 rounded-xl overflow-hidden p-12 items-center justify-center text-center">
              <Sparkles className="text-howzit-red mb-6" size={40} />
              <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">Coming Soon</p>
              <p className="text-sm font-bold text-gray-500 mt-3">More interactive lessons from our local guides.</p>
            </div>
          </div>
        )}

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
              {/* First half for the marquee */}
              {sharedJourneysImages.map((img, i) => (
                <div key={`journey-1-${i}`} className="w-72 md:w-96 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                  <img src={img} className="w-full h-full object-cover" alt={`Journey ${i}`} />
                </div>
              ))}
              {/* Second half to create a seamless loop */}
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
