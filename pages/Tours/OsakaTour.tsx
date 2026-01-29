
import React, { useState } from 'react';
import { Clock, Users, ChevronDown, Sparkles, CreditCard, Check, X, Search, Heart, MapPin } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-start text-left group gap-4">
        <span className="font-black text-lg text-howzit-dark group-hover:text-howzit-red transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-gray-400 transition-transform mt-1 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
          <div className="text-gray-600 font-medium leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
};

const CourseTimeline = ({ course }: { course: any }) => (
  <div className="relative py-8">
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>
    <div className="space-y-12 md:space-y-16 relative">
      {course.schedule.map((item: any, idx: number) => {
        const isDescriptionLeft = idx % 2 !== 0;
        return (
          <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isDescriptionLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
              <div className={`inline-flex items-center gap-2 mb-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 text-[9px] font-black uppercase tracking-widest text-howzit-red`}>
                <Sparkles size={10} /> Step {idx + 1}
              </div>
              <h4 className="font-black text-xl md:text-2xl text-howzit-dark mb-2 font-heading">{item.location}</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 max-w-sm mx-auto md:mx-0">{item.desc}</p>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-howzit-red text-white shadow-lg z-10"><div className="w-2 h-2 bg-white rounded-full" /></div>
            <div className="w-full md:w-1/2 px-4 md:px-12">
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[21/9] md:aspect-[16/7] group relative max-w-md mx-auto md:mx-0">
                <img src={item.img} alt={item.location} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const OsakaTour = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const courses = [
    {
      title: "Street Food & Kitchen",
      schedule: [
        { location: "Kuromon Ichiba Market", desc: "Known as 'Osaka's Kitchen'. Sample fresh seafood and wagyu.", img: "https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80" },
        { location: "Dotonbori Neon Walk", desc: "Explore the bustling canal-side alleys and iconic Glico Man.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" },
        { location: "Sennichimae Doguyasuji", desc: "Kitchenware street filled with professional tools and plastic food samples.", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80" }
      ]
    },
    {
      title: "Osaka Soul & Castle",
      schedule: [
        { location: "Osaka Castle Park", desc: "Visit the grand castle and its expansive gardens.", img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80" },
        { location: "Shinsekai Retro District", desc: "Step back into 20th-century Japan with retro eateries and Tsutenkaku Tower.", img: "https://images.unsplash.com/photo-1480796275477-9df146772724?auto=format&fit=crop&q=80" },
        { location: "Kushikatsu Feast", desc: "Deep-fried skewers - the local soul food of Osaka.", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-16 px-4 bg-howzit-dark overflow-hidden text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight font-heading">Osaka <span className="text-howzit-red">Street Vibes</span></h1>
          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-black aspect-video relative">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/Ssh71hePR8Q" title="Osaka Tour" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 font-heading"><Clock className="text-howzit-red" size={28} /> Tour Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {[
                  { label: 'Duration', val: '4 / 6 / 8 Hours (Adjustable)', icon: Clock },
                  { label: 'Customization', val: 'Fully Tailor-made Itinerary', icon: Search },
                  { label: 'Guests', val: 'Families, Couples, Solo Travelers', icon: Users },
                  { label: 'Flexibility', val: 'On-the-day plan adjustments', icon: Sparkles },
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-howzit-red shrink-0 border border-gray-100"><fact.icon size={20} /></div>
                    <div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">{fact.label}</span>
                      <span className="text-sm font-black text-howzit-dark leading-tight">{fact.val}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-howzit-red/5 p-8 rounded-[2.5rem] border border-howzit-red/10">
                <div className="flex items-center gap-2 mb-2"><CreditCard size={18} className="text-howzit-red" /><span className="text-[10px] font-black uppercase tracking-widest text-howzit-red">Professional Guiding</span></div>
                <div className="flex items-baseline gap-2"><span className="text-4xl font-black text-howzit-dark font-heading">¥40,000〜</span><span className="text-sm font-bold text-gray-400">(per group)</span></div>
                <p className="text-[10px] text-gray-400 font-bold mt-4 uppercase tracking-widest italic leading-relaxed">
                  *Rate covers the guide's professional fee. <br/> Actual travel costs for guests are not included.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-gray-50/30">
              <div className="space-y-10">
                {/* What's Included */}
                <div>
                  <h3 className="text-lg font-black text-howzit-dark mb-6 flex items-center gap-3 uppercase tracking-tight">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white"><Check size={18} /></div>
                    What’s Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-[13px] font-bold text-gray-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Fully private tour (English)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Pre-trip itinerary customization</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Hotel pickup</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Guiding via public transport</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Photo & Video support</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Translation & Cultural insights</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Crowd avoidance & Optimal routing</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5"></div> Flexible on-day plan adjustments</li>
                  </ul>
                </div>

                {/* What's Not Included */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-black text-howzit-dark mb-6 flex items-center gap-3 uppercase tracking-tight">
                    <div className="w-8 h-8 bg-howzit-red rounded-lg flex items-center justify-center text-white"><X size={18} /></div>
                    What’s Not Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-[13px] font-bold text-gray-400 italic">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Activity bookings (Kimono, etc.)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Private car / Taxi arrangements</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Accommodation bookings</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Meals & Drinks (incl. guide's)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Entrance fees (incl. guide's)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Transportation costs</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-howzit-red rounded-full shrink-0 mt-1.5"></div> Service ends on-site (no drop-off)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter font-heading">Osaka Courses</h2>
          <div className="flex justify-center gap-3 mt-8">
            {courses.map((c, i) => (
              <button key={i} onClick={() => setActiveCourse(i)} className={`px-6 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all border-2 ${activeCourse === i ? 'bg-howzit-red text-white border-howzit-red shadow-xl shadow-howzit-red/20' : 'bg-white text-gray-400 border-gray-100 hover:border-howzit-red hover:text-howzit-red'}`}>Course {i+1}: {c.title}</button>
            ))}
          </div>
        </div>
        <CourseTimeline course={courses[activeCourse]} />
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2 font-heading">Osaka Walk FAQ</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100">
            <FAQItem question="How much should we budget for food?" answer="Osaka is reasonably priced. Sampling street food at Kuromon or Dotonbori usually costs ¥3,000-¥5,000 per person for a full experience." />
            <FAQItem question="Is this tour suitable for vegetarians?" answer="Yes! Osaka has a reputation for meat and seafood, but we can curate a route focusing on seasonal vegetable dishes, street-side desserts, and specialized eateries." />
            <FAQItem question="What if we want to stay longer in Dotonbori?" answer="We can conclude the tour at a specific spot of your choice if you'd like to continue exploring or dining on your own." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OsakaTour;
