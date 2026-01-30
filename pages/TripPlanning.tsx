
import React, { useState, useRef } from 'react';
import { 
  Clock, MapPin, ShieldCheck, Star, ChevronDown, 
  Check, X, Sparkles, CreditCard, Coffee, 
  User, Mail, MessageSquare, Calendar, Users, 
  ArrowRight, Heart, Send, Navigation, Search,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-start text-left group gap-4"
      >
        <span className="font-black text-lg text-howzit-dark group-hover:text-howzit-red transition-colors font-heading uppercase italic tracking-tight">{question}</span>
        <ChevronDown size={20} className={`text-gray-400 transition-transform mt-1 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="text-gray-600 font-medium leading-relaxed italic">{answer}</div>
        </div>
      )}
    </div>
  );
};

// Fixed: Added React.FC to handle the reserved 'key' prop when used in a map function
const JourneyStep: React.FC<{ step: any; idx: number }> = ({ step, idx }) => (
  <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0 mb-16 last:mb-0">
    <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
      <div className="inline-flex items-center gap-2 mb-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 text-[9px] font-black uppercase tracking-widest text-howzit-red">
        <Sparkles size={10} /> {step.days}
      </div>
      <h4 className="font-black text-2xl md:text-4xl text-howzit-dark mb-4 font-heading uppercase italic tracking-tighter">{step.city}<span className="text-howzit-red">.</span></h4>
      <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6 italic max-w-sm mx-auto md:mx-0">"{step.tagline}"</p>
      <div className="space-y-2 text-left max-w-sm mx-auto md:mx-0">
        {step.highlights.map((h: string, i: number) => (
          <div key={i} className="flex items-start gap-2 text-xs font-bold text-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-howzit-red shrink-0 mt-1.5"></div>
            {h}
          </div>
        ))}
      </div>
    </div>
    
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-howzit-red text-white shadow-lg z-10">
      <div className="w-2 h-2 bg-white rounded-full" />
    </div>

    <div className="w-full md:w-1/2 px-4 md:px-12">
      <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] group relative max-w-lg mx-auto md:mx-0">
        <img 
          src={step.img} 
          alt={step.city} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </div>
);

const TripPlanning = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const journey = [
    {
      days: "Day 1-4",
      city: "Tokyo",
      tagline: "Modern Pulse & Private Sanctuaries",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
      highlights: ["Luxury high-rise stay with Fuji views", "Private Tsukiji breakfast with local chef", "Bespoke Ginza craftsmanship tour"]
    },
    {
      days: "Day 5-7",
      city: "Hakone",
      tagline: "Nature's Silence & Thermal Healing",
      img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80",
      highlights: ["Top-tier Ryokan with private Onsen", "Chauffeur-driven Fuji Five Lakes tour", "Private Lake Ashi twilight cruise"]
    },
    {
      days: "Day 8-12",
      city: "Kyoto",
      tagline: "The Eternal Soul of Tradition",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
      highlights: ["Private Zen meditation with a head monk", "Exclusive tea ceremony in hidden gardens", "Geisha district walk with academic guide"]
    },
    {
      days: "Day 13-14",
      city: "Departure",
      tagline: "A Seamless Farewell",
      img: "https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80",
      highlights: ["First-class Shinkansen to Osaka/Tokyo", "VIP lounge airport transfers", "Personal shopping concierge for final gifts"]
    }
  ];

  return (
    <div className="bg-white relative">
      {/* Floating Action Button */}
      <button 
        onClick={scrollToForm}
        className="fixed bottom-8 right-8 z-40 bg-howzit-dark text-white px-8 py-5 rounded-full font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border-2 border-howzit-red group"
      >
        <MessageSquare size={22} className="text-howzit-red" />
        <span className="uppercase tracking-[0.2em]">Start a Conversation</span>
      </button>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-howzit-dark">
        <img 
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover brightness-50 opacity-80"
          alt="Luxury Japan Scene"
        />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="flex justify-center gap-2 mb-6">
            {[1,2,3].map(i => <Star key={i} size={16} fill="#EB2429" className="text-howzit-red" />)}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85] font-heading italic">
            Full Planning <br/><span className="text-howzit-red">Concierge.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed opacity-90 italic">
            The ultimate private journey. From arrival to departure, every detail is orchestrated for absolute comfort and discovery.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Details Section (Structural Mirror of Tour Pages) */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-[4rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Facts & Pricing */}
            <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-3xl font-black mb-10 flex items-center gap-3 font-heading uppercase italic tracking-tight">
                <Navigation className="text-howzit-red" size={32} /> Planning Standards
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                {[
                  { label: 'Service Level', val: 'Fully Tailor-made Concierge', icon: ShieldCheck },
                  { label: 'Transportation', val: 'Private Chauffeur & VIP Rail', icon: Navigation },
                  { label: 'Guests', val: 'Middle-aged & Senior Focused', icon: Users },
                  { label: 'Duration', val: 'Recommended 7 - 14 Days', icon: Clock },
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-howzit-red shrink-0 border border-gray-100">
                      <fact.icon size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{fact.label}</span>
                      <span className="text-base font-black text-howzit-dark leading-tight italic">{fact.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Luxury Pricing Box */}
              <div className="bg-howzit-dark p-10 rounded-[3rem] border-b-8 border-howzit-red shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard size={18} className="text-howzit-red" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Starting Investment</span>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-white font-heading italic">¥800,000〜</span>
                  <span className="text-xs font-bold text-gray-400 italic">/ Per Couple</span>
                </div>
                <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider italic">
                  *Rate varies based on accommodation tier and seasonal demand. A bespoke quote follows your initial consultation.
                </p>
              </div>
            </div>

            {/* Right: Inclusions/Exclusions */}
            <div className="p-10 md:p-16 bg-gray-50/30">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black text-howzit-dark mb-8 flex items-center gap-4 uppercase font-heading italic tracking-tight">
                    <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center text-white"><Check size={24} /></div>
                    Premium Inclusions
                  </h3>
                  <ul className="space-y-4 text-sm font-bold text-gray-600 italic">
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Dedicated senior travel director for design</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Private premium vehicle (Alphard/Hiace)</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Luxury Ryokan & Boutique Hotel curation</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> All inter-city first-class Shinkansen tickets</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> 24/7 Priority support hotline in Japan</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div> Private workshop and dining reservations</li>
                  </ul>
                </div>

                <div className="pt-10 border-t border-gray-200">
                  <h3 className="text-xl font-black text-howzit-dark mb-8 flex items-center gap-4 uppercase font-heading italic tracking-tight">
                    <div className="w-10 h-10 bg-howzit-red rounded-2xl flex items-center justify-center text-white"><X size={24} /></div>
                    Handled Separately
                  </h3>
                  <ul className="space-y-4 text-sm font-bold text-gray-400 italic">
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> International Airfare</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> Direct meal costs & entrance fees</li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-howzit-red shrink-0 mt-1.5"></div> Travel insurance (Mandatory)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Journey Timeline */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase font-heading italic leading-none">The Signature Journey<span className="text-howzit-red">.</span></h2>
             <p className="text-gray-400 font-bold text-lg italic">A perfectly balanced 14-day sample route.</p>
             <div className="w-24 h-1.5 bg-howzit-red mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="relative">
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>
             {journey.map((step, idx) => (
               <JourneyStep key={idx} step={step} idx={idx} />
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading uppercase italic tracking-tighter">Concierge FAQ</h2>
            <p className="text-gray-500 font-bold italic">Details on our premium planning process.</p>
          </div>
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
            <FAQItem 
              question="How far in advance should we book?" 
              answer="For luxury Ryokans and high-end restaurants, we recommend starting the design process 4-6 months prior. However, we thrive on last-minute missions and can often secure exclusive spots via our private network."
            />
            <FAQItem 
              question="Can we accommodate mobility requirements?" 
              answer="Absolutely. We specialize in accessible travel. Every route is vetted for comfort, including barrier-free access, elevators, and vehicles equipped with support if needed. Your comfort is our absolute priority."
            />
            <FAQItem 
              question="Is the guide with us every single day?" 
              answer="This is your choice. We typically recommend a hybrid approach—dedicated guiding for complex cultural cities like Kyoto, and 'concierge standby' for relaxed shopping days in Tokyo. We design the balance to fit your energy."
            />
          </div>
        </div>
      </section>

      {/* Integrated Form Section */}
      <section ref={formRef} className="py-24 px-4 bg-howzit-dark rounded-t-[5rem] mt-24">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-24 animate-in fade-in duration-700">
              <div className="w-24 h-24 bg-howzit-red/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check size={48} className="text-howzit-red" />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 font-heading italic uppercase tracking-tighter">Request Received<span className="text-howzit-red">.</span></h2>
              <p className="text-gray-400 font-bold mb-12 text-xl max-w-lg mx-auto leading-relaxed italic">Our senior director will review your vision and reach out within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline">Start another design</button>
            </div>
          ) : (
            <>
              <div className="text-center mb-20">
                <span className="text-howzit-red font-black text-[10px] uppercase tracking-[0.4em] mb-6 block italic">The First Step to Perfection</span>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase font-heading italic leading-none">Consult With Us<span className="text-howzit-red">.</span></h2>
                <p className="text-xl text-gray-400 font-bold max-w-xl mx-auto italic">Private, luxurious, and completely yours. Tell us your vision.</p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                      <User size={14} className="text-howzit-red" /> Lead Traveler
                    </label>
                    <input required type="text" placeholder="Full Name" className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-lg italic" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                      <Mail size={14} className="text-howzit-red" /> Email
                    </label>
                    <input required type="email" placeholder="email@luxury.com" className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-lg italic" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                      <Calendar size={14} className="text-howzit-red" /> Dates
                    </label>
                    <input type="text" placeholder="e.g. Autumn 2025" className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-lg italic" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                      <Users size={14} className="text-howzit-red" /> Guests
                    </label>
                    <select className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-lg cursor-pointer appearance-none italic">
                      <option>1-2 Guests</option>
                      <option>3-5 Guests (Family)</option>
                      <option>Private Group</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] flex items-center gap-2 px-1">
                    <MessageSquare size={14} className="text-howzit-red" /> Vision
                  </label>
                  <textarea rows={6} placeholder="What are your priorities? Culture, Culinary, Relaxation, or Celebration?" className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-lg leading-relaxed italic" />
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-howzit-dark text-white py-6 rounded-full font-black text-lg uppercase tracking-[0.3em] shadow-2xl hover:bg-howzit-red hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group border-b-4 border-howzit-red">
                    Submit Concierge Request
                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-howzit-red" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default TripPlanning;
