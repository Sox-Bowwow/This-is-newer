
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, Check, X, Sparkles, Globe, Users2, ArrowRight, MessageSquare, CameraIcon, MapPin, MoreHorizontal, Heart as HeartIcon, Send, Bookmark, AlertCircle, Train, ChevronRight, Mail, User, Info, Building2, GraduationCap } from 'lucide-react';

const InstagramPost = ({ title, category, img, desc, location }: { title: string, category: string, img: string, desc: string, location: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02] max-w-md mx-auto w-full group">
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
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>

    <div className="p-3">
      <div className="flex justify-between mb-3">
        <div className="flex gap-4">
          <HeartIcon size={24} className="hover:text-howzit-red cursor-pointer transition-colors" />
          <MessageSquare size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
          <Send size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
        </div>
        <Bookmark size={24} className="hover:text-gray-400 cursor-pointer transition-colors" />
      </div>

      <div className="space-y-1">
        <div className="bg-howzit-red/10 inline-block px-2 py-0.5 rounded text-[8px] font-black text-howzit-red uppercase mb-1">{category}</div>
        <p className="text-sm">
          <span className="font-black mr-2 text-howzit-dark">howzit_japan</span>
          <span className="text-gray-800 leading-relaxed font-medium">
            <span className="text-howzit-red font-bold">#{title}</span>. {desc}
          </span>
        </p>
      </div>
    </div>
  </div>
);

const GroupTour = () => {
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
    { q: 'Coordinating 10+ people movement', a: 'Expert Group Logistics Control', icon: Users2 },
    { q: 'Finding restaurants for large groups', a: 'Group-friendly Dining Curation', icon: MessageSquare },
    { q: 'Private bus vs. Train logistics', a: 'Optimized Fleet Sourcing', icon: Train },
    { q: 'Keeping diverse ages engaged', a: "Flexible Multi-Guide System", icon: Sparkles },
    { q: 'PR/Brand filming requirements', a: 'Media-Ready Location Support', icon: CameraIcon },
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
            Together, Better<span className="text-howzit-red">.</span> Bespoke Group Missions.
          </h1>
          <div className="max-w-3xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video relative">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/Ssh71hePR8Q" title="Group Experience" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-0 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-black text-howzit-dark mb-1 font-heading uppercase italic">Group Worries <span className="text-howzit-red">×</span> Howzit Solutions</h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest italic">Professional coordination at scale</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {problemSolutions.map((item, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 mb-1 text-gray-400"><AlertCircle size={10} /><span className="text-[8px] font-black uppercase tracking-widest">Group Worry</span></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-howzit-dark tracking-tighter leading-none uppercase font-heading">Bespoke<br/><span className="text-howzit-red">Group</span><br/>Design.</h2>
          </div>
          <div className="flex-grow">
            <p className="text-xl md:text-2xl font-black text-howzit-dark leading-snug mb-8">Howzit Japan is a travel agency offering <span className="text-howzit-red font-heading">fully tailor-made private group tours</span> for eight or more people.</p>
            <div className="space-y-6 text-gray-600 font-bold text-sm md:text-lg leading-relaxed">
              <p>From school programs to corporate visits, and sports teams, each tour is flexibly designed to suit the group’s purpose and composition.</p>
              <p>Centering on cities such as Tokyo, Kyoto, and Osaka, we create itineraries from scratch—covering sightseeing, learning, cultural exchange, and PR—while enabling groups to connect with locals and enjoy a truly unique journey in Japan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4 shadow-inner">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-heading">Real Experiences</h2>
            <p className="text-gray-500 font-bold">Successful missions curated by our team.</p>
         </div>
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InstagramPost title="Corporate Mission" category="Corporate" location="Tokyo" img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" desc="Corporate group (approx. 10 people). A 1-day fully custom tour in Tokyo, perfectly blending business objectives with authentic sightseeing." />
            <InstagramPost title="Academic Exchange" category="School" location="Kyoto" img="https://images.unsplash.com/photo-152305085306e-8c3d3e7d4f1a?auto=crop&w=800&q=80" desc="School visit arrangements. Immersive Japanese cultural experiences and curated introductions to local secret spots for students." />
            <InstagramPost title="Global Brand PR" category="Media/PR" location="Osaka" img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" desc="Brand PR tour (approx. 15 people). Hosting creators and staff with dedicated filming support at local sushi shops and SNS-ready location scouting." />
         </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 font-heading uppercase"><div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white"><Check size={24} /></div>What’s Included</h3>
              <ul className="space-y-4">
                {["Fully custom itinerary creation", "Dedicated guides (Multiple assigned)", "Guided sightseeing & local gems", "Cultural experience arrangements", "Group photo support", "SNS/PR workflow support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 font-heading uppercase"><div className="w-10 h-10 bg-howzit-red rounded-xl flex items-center justify-center text-white"><X size={24} /></div>Not Included</h3>
              <ul className="space-y-4">
                {["Hotel & Accommodation bookings", "Transport bookings (Bus, Shinkansen)", "Meals & Entrance fees (Paid on-site)", "Travel Insurance", "International Airfare"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-gray-400 italic"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full mt-2 shrink-0"></div>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-24 px-4 bg-gray-50 rounded-[4rem] mx-4 mb-24">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-20 animate-in fade-in duration-700">
              <div className="w-20 h-20 bg-howzit-red/10 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={40} className="text-howzit-red" /></div>
              <h2 className="text-3xl font-black mb-4 font-heading italic uppercase">Request Received<span className="text-howzit-red">.</span></h2>
              <p className="text-gray-500 font-bold mb-8">We'll reach out to your team within 24 hours to discuss the details.</p>
              <button onClick={() => setSubmitted(false)} className="text-xs font-black text-howzit-red uppercase tracking-widest hover:underline">Send another request</button>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <span className="text-howzit-red font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Let's chat about your mission</span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase font-heading">Start a Conversation</h2>
                <p className="text-gray-500 font-bold max-w-xl mx-auto">Tell us about your group size, goals, and dates. Let's design something legendary together.</p>
              </div>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><User size={14} className="text-howzit-red" /> Contact Person</label><input required type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Mail size={14} className="text-howzit-red" /> Work Email</label><input required type="email" placeholder="team@company.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Users size={14} className="text-howzit-red" /> Approx Group Size</label><select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm cursor-pointer appearance-none"><option>8-15 People</option><option>16-30 People</option><option>31-50 People</option><option>50+ People</option></select></div>
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><Train size={14} className="text-howzit-red" /> Target Cities</label><input type="text" placeholder="e.g. Tokyo, Kyoto" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" /></div>
                </div>
                <div className="space-y-2"><label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 px-1"><MessageSquare size={14} className="text-howzit-red" /> Mission Details</label><textarea rows={5} placeholder="Describe your group's goal, dates, or specific requirements..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-sm leading-relaxed" /></div>
                <div className="pt-4"><button type="submit" className="w-full bg-howzit-red text-white py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-howzit-red/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group">Send Inquiry<Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button><p className="text-center mt-6 text-[9px] font-black text-gray-300 uppercase tracking-widest">No commitment required. Let's just start talking.</p></div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default GroupTour;
