
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle2, MapPin, Sparkles, ArrowRight, Train, Compass, Languages, AlertCircle, Play, Users } from 'lucide-react';

const InstagramPost = ({ city, img, desc, location }: { city: string, img: string, desc: string, location: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-md mx-auto w-full">
    {/* Post Header */}
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-gray-200 p-0.5">
          <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80" alt="Howzit" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-black text-howzit-dark leading-none">howzit_japan</span>
          <span className="text-[10px] text-gray-500 flex items-center gap-0.5"><MapPin size={8} className="text-howzit-red" /> {location}</span>
        </div>
      </div>
      <MoreHorizontal size={18} className="text-gray-400" />
    </div>

    {/* Post Media */}
    <div className="aspect-square overflow-hidden bg-gray-100">
      <img src={img} alt={city} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>

    {/* Post Actions */}
    <div className="p-3">
      <div className="flex justify-between mb-3">
        <div className="flex gap-4">
          <Heart size={24} className="hover:text-howzit-red cursor-pointer transition-colors" />
          <MessageCircle size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
          <Send size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
        </div>
        <Bookmark size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
      </div>

      {/* Post Content */}
      <div className="space-y-1">
        <p className="text-sm">
          <span className="font-black mr-2 text-howzit-dark">howzit_japan</span>
          <span className="text-gray-800 leading-relaxed font-medium">
            Discover the magic of <span className="text-howzit-red font-bold">#{city}</span>. {desc}
          </span>
        </p>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-2">Tap to see route</p>
      </div>
    </div>
  </div>
);

const VideoCard = ({ title, videoId, category }: { title: string, videoId: string, category: string }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group">
    <div className="aspect-video relative overflow-hidden bg-black">
      <iframe 
        className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`} 
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-8">
      <span className="text-[10px] font-black text-howzit-red uppercase tracking-widest mb-2 block">{category}</span>
      <h4 className="text-xl font-black text-howzit-dark leading-tight">{title}</h4>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400">
        <Play size={14} className="text-howzit-red" /> Experience the flow
      </div>
    </div>
  </div>
);

const IndividualTour = () => {
  const problemSolutions = [
    { 
      q: 'Complex trains & subways', 
      a: 'Travel with your guide',
      icon: Train,
    },
    { 
      q: 'Too many places to visit', 
      a: 'Efficient itinerary design',
      icon: Compass,
    },
    { 
      q: 'Language barrier concerns', 
      a: 'Translation & context support',
      icon: Languages,
    },
    { 
      q: 'Want local insider info', 
      a: "Resident's perspective",
      icon: Sparkles,
    },
    { 
      q: 'Traveling with kids/seniors', 
      a: 'Pace-adjusted tours',
      icon: Users,
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-16 px-4 bg-howzit-dark overflow-hidden text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tight leading-tight">
            Enjoy Japan Like a Local<br/>With Locals<span className="text-howzit-red">.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-black aspect-video relative group mb-12">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ssh71hePR8Q?autoplay=0&controls=1&rel=0" 
              title="Individual Customized Tour Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 2. Compact Upgrade Cards - All English, zero bottom padding */}
      <section className="pt-10 pb-0 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-black text-howzit-dark mb-1">Common Worries <span className="text-howzit-red">×</span> Howzit Solutions</h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest italic">Professional guides make your journey stress-free</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {problemSolutions.map((item, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                {/* Challenge Section */}
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 mb-1 text-gray-400">
                    <AlertCircle size={10} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Common Worry</span>
                  </div>
                  <p className="text-xs font-bold text-gray-400 group-hover:text-gray-500 transition-colors leading-tight">
                    {item.q}
                  </p>
                </div>

                {/* Compact Divider */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px bg-gray-100 flex-grow"></div>
                  <ArrowRight size={10} className="text-howzit-red/40" />
                  <div className="h-px bg-gray-100 flex-grow"></div>
                </div>

                {/* Solution Section */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-howzit-red flex items-center justify-center text-white shadow-md shadow-howzit-red/10 group-hover:scale-105 transition-transform shrink-0">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <span className="text-[8px] font-black text-howzit-red uppercase tracking-widest leading-none block mb-0.5">Howzit Fix</span>
                      <h4 className="text-sm font-black text-howzit-dark leading-none">
                        {item.a}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Concept Paragraph - Specific text colored in red */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-2xl font-black text-howzit-dark leading-snug">
            <span className="text-howzit-red">Howzit Japan offers a fully private</span> and customized travel experience designed to connect you with the heart of the country. 
            By building a bespoke itinerary alongside a local guide, you’ll explore Tokyo, Kyoto, or Osaka through the lens of a resident, utilizing public transport to capture the authentic pace of daily life. 
            We move beyond mere sightseeing to immerse you in the culture, history, and local atmosphere, providing dedicated support so you can maximize every moment of your journey with complete peace of mind.
          </p>
          <div className="w-20 h-1 bg-howzit-red mx-auto rounded-full mt-10"></div>
        </div>
      </section>

      {/* 4. City Selection (Instagram Feed Style) */}
      <section className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">City Selection</h2>
            <p className="text-gray-500 font-bold">Curated experiences from our local feed.</p>
         </div>
         
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InstagramPost 
              city="Tokyo"
              location="Tokyo, Shibuya & Shinjuku"
              img="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80"
              desc="From the neon chaos of Shibuya to the quiet backstreets of Yanaka. We show you the city that never sleeps, through the eyes of those who live here."
            />
            <InstagramPost 
              city="Kyoto"
              location="Kyoto, Arashiyama & Gion"
              img="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80"
              desc="Step back in time. Discover hidden Zen gardens and witness the living history of the Gion district without the usual crowds."
            />
            <InstagramPost 
              city="Osaka"
              location="Osaka, Dotonbori & Shinsekai"
              img="https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80"
              desc="Eat your way through Japan's kitchen. Deep dives into street food culture and the warmest local hospitality you'll ever find."
            />
         </div>
      </section>

      {/* 5. Sample Tour Videos */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Local Vlogs & Tours</h2>
          <p className="text-gray-500 font-bold">See exactly what a day with Howzit looks like.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <VideoCard 
            title="A Day in Retro Tokyo: Yanaka & Ueno" 
            videoId="Ssh71hePR8Q" 
            category="LOCAL VIBE" 
          />
          <VideoCard 
            title="The Perfect Kyoto Morning: Gion District" 
            videoId="Ssh71hePR8Q" 
            category="CULTURAL IMMERSION" 
          />
        </div>

        {/* 6. More Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-4 bg-howzit-red text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-howzit-red/20 active:scale-95 group"
          >
            SEE MORE STORIES
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Explore our full local blog</p>
        </div>
      </section>
    </div>
  );
};

export default IndividualTour;
