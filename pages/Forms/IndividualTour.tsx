
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle2, MapPin, Sparkles, ArrowRight, Train, Compass, Languages, AlertCircle, Play, Users, Mail, User, MessageSquare, Calendar } from 'lucide-react';

const InstagramPost = ({ city, img, desc, location, path }: { city: string, img: string, desc: string, location: string, path: string }) => (
  <Link to={path} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02] max-w-md mx-auto w-full group">
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

    <div className="aspect-square overflow-hidden bg-gray-100">
      <img src={img} alt={city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>

    <div className="p-3">
      <div className="flex justify-between mb-3">
        <div className="flex gap-4">
          <Heart size={24} className="hover:text-howzit-red cursor-pointer transition-colors" />
          <MessageCircle size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
          <Send size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
        </div>
        <Bookmark size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
      </div>

      <div className="space-y-1">
        <p className="text-sm">
          <span className="font-black mr-2 text-howzit-dark">howzit_japan</span>
          <span className="text-gray-800 leading-relaxed font-medium">
            Discover the magic of <span className="text-howzit-red font-bold">#{city}</span>. {desc}
          </span>
        </p>
        <p className="text-[10px] font-bold text-howzit-red uppercase tracking-widest pt-2 flex items-center gap-1">
          Tap to see route <ArrowRight size={10} />
        </p>
      </div>
    </div>
  </Link>
);

const IndividualTour = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const problemSolutions = [
    { q: 'Complex trains & subways', a: 'Travel with your guide', icon: Train },
    { q: 'Too many places to visit', a: 'Efficient itinerary design', icon: Compass },
    { q: 'Language barrier concerns', a: 'Translation & context support', icon: Languages },
    { q: 'Want local insider info', a: "Resident's perspective", icon: Sparkles },
    { q: 'Traveling with kids/seniors', a: 'Pace-adjusted tours', icon: Users },
  ];

  return (
    <div className="bg-white relative">
      <button 
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 z-40 bg-howzit-red text-white px-6 py-4 rounded-full font-black text-sm shadow-2xl shadow-howzit-red/30 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group border-2 border-white/20 backdrop-blur-sm"
      >
        <MessageSquare size={20} className="group-hover:animate-bounce" />
        <span className="hidden md:inline uppercase tracking-widest">Start a Conversation</span>
        <span className="md:hidden uppercase tracking-widest">Inquire</span>
      </button>

      <section className="pt-20 pb-8 px-4 bg-howzit-dark overflow-hidden text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight leading-none uppercase italic">
            Enjoy Japan Like a Local With Locals<span className="text-howzit-red">.</span>
          </h1>
          <div className="max-w-3xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video relative group">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/Ssh71hePR8Q" title="Custom Tour Experience" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-0 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-black text-howzit-dark mb-1 font-heading uppercase italic">Common Worries <span className="text-howzit-red">×</span> Howzit Solutions</h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest italic">Professional guides make your journey stress-free</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {problemSolutions.map((item, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 mb-1 text-gray-400"><AlertCircle size={10} /><span className="text-[8px] font-black uppercase tracking-widest">Common Worry</span></div>
                  <p className="text-xs font-bold text-gray-400 group-hover:text-gray-500 transition-colors leading-tight">{item.q}</p>
                </div>
                <div className="flex items-center gap-2 mb-2"><div className="h-px bg-gray-100 flex-grow"></div><ArrowRight size={10} className="text-howzit-red/40" /><div className="h-px bg-gray-100 flex-grow"></div></div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-howzit-red flex items-center justify-center text-white shadow-md shadow-howzit-red/10 group-hover:scale-105 transition-transform shrink-0"><item.icon size={14} /></div>
                    <div><span className="text-[8px] font-black text-howzit-red uppercase tracking-widest leading-none block mb-0.5">Howzit Fix</span><h4 className="text-sm font-black text-howzit-dark font-heading leading-none">{item.a}</h4></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <div className="shrink-0 md:w-1/4">
            <div className="w-12 h-1.5 bg-howzit-red mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-howzit-dark tracking-tighter leading-none uppercase font-heading">The<br/><span className="text-howzit-red">Heart</span><br/>of Travel.</h2>
          </div>
          <div className="flex-grow">
            <p className="text-xl md:text-2xl font-black text-howzit-dark leading-snug mb-8"><span className="text-howzit-red">Howzit Japan offers a fully private</span> and customized travel experience designed to connect you with the heart of the country.</p>
            <div className="space-y-6 text-gray-600 font-bold text-sm md:text-lg leading-relaxed">
              <p>By building a bespoke itinerary alongside a local guide, you’ll explore Tokyo, Kyoto, or Osaka through the lens of a resident, utilizing public transport to capture the authentic pace of daily life.</p>
              <p>We move beyond mere sightseeing to immerse you in the culture, history, and local atmosphere, providing dedicated support so you can maximize every moment of your journey with complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4 shadow-inner">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-heading">City Selection</h2>
            <p className="text-gray-500 font-bold">Curated experiences from our local feed.</p>
         </div>
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InstagramPost city="Tokyo" location="Tokyo, Shibuya & Shinjuku" img="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80" desc="From the neon chaos of Shibuya to the quiet backstreets of Yanaka. We show you the city that never sleeps, through resident eyes." path="/tours/tokyo" />
            <InstagramPost city="Kyoto" location="Kyoto, Arashiyama & Gion" img="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80" desc="Step back in time. Discover hidden Zen gardens and witness the living history of the Gion district without the usual crowds." path="/tours/kyoto" />
            <InstagramPost city="Osaka" location="Osaka, Dotonbori & Shinseki" img="https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80" desc="Eat your way through Japan's kitchen. Deep dives into street food culture and the warmest local hospitality you'll ever find." path="/tours/osaka" />
         </div>
      </section>

      <section ref={formRef} className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4 mb-24 mt-24">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-20 animate-in fade-in duration-700">
              <div className="w-20 h-20 bg-howzit-red/10 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-howzit-red" /></div>
              <h2 className="text-3xl font-black mb-4 font-heading italic uppercase">Request Received<span className="text-howzit-red">.</span></h2>
              <p className="text-gray-500 font-bold mb-8">We'll reach out to your team within 24 hours to discuss your dream journey.</p>
              <button onClick={() => setSubmitted(false)} className="text-xs font-black text-howzit-red uppercase tracking-widest hover:underline">Send another request</button>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <span className="text-howzit-red font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Let's chat about your trip</span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase font-heading">Start a Conversation</h2>
                <p className="text-gray-500 font-bold max-w-xl mx-auto">Tell us about your plans, dates, and what makes you curious. Let's design something unique together.</p>
              </div>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><User size={14} className="text-howzit-red" /> Full Name</label><input required type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Mail size={14} className="text-howzit-red" /> Email Address</label><input required type="email" placeholder="hello@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Calendar size={14} className="text-howzit-red" /> Travel Dates</label><input type="text" placeholder="e.g. Oct 2025" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Users size={14} className="text-howzit-red" /> Guests</label><input type="number" min="1" placeholder="2" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                </div>
                <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><MessageSquare size={14} className="text-howzit-red" /> Your Dream Journey</label><textarea rows={5} placeholder="What interests you most? Specific cities, food, or experiences..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-sm leading-relaxed" /></div>
                <div className="pt-4"><button type="submit" className="w-full bg-howzit-red text-white py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-howzit-red/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group">Send Inquiry<Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button><p className="text-center mt-6 text-[9px] font-black text-gray-300 uppercase tracking-widest">No commitment required. Let's start the dialogue.</p></div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndividualTour;
