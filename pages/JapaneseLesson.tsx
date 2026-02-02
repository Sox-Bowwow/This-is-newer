
import React from 'react';
import { ChevronLeft, Check, Sparkles, User, Calendar, Clock, Globe, MessageSquare, ShieldCheck, Star, Users, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseTable = () => (
  <div className="overflow-x-auto bg-white rounded-[2rem] border border-gray-100 shadow-xl mb-12">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-howzit-dark text-white">
          <th className="p-6 text-[10px] font-black uppercase tracking-widest border-r border-white/10">Course</th>
          <th className="p-6 text-[10px] font-black uppercase tracking-widest border-r border-white/10">Schedule</th>
          <th className="p-6 text-[10px] font-black uppercase tracking-widest border-r border-white/10">Lessons</th>
          <th className="p-6 text-[10px] font-black uppercase tracking-widest border-r border-white/10">Duration</th>
          <th className="p-6 text-[10px] font-black uppercase tracking-widest">Price</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 font-bold text-sm">
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
          <td className="p-6 border-r border-gray-100 font-black text-howzit-dark">Survival Japanese – Basic</td>
          <td className="p-6 border-r border-gray-100">Mon or Tue<br/>10:00 AM (JST)</td>
          <td className="p-6 border-r border-gray-100">5 lessons</td>
          <td className="p-6 border-r border-gray-100">1h</td>
          <td className="p-6 text-howzit-red">$175 (¥26,000) / person</td>
        </tr>
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
          <td className="p-6 border-r border-gray-100 font-black text-howzit-dark">Practical Japanese – Standard</td>
          <td className="p-6 border-r border-gray-100">Mon or Tue<br/>10:00 AM (JST)</td>
          <td className="p-6 border-r border-gray-100">10 lessons</td>
          <td className="p-6 border-r border-gray-100">1h</td>
          <td className="p-6 text-howzit-red">$350 (¥52,000) / person</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="p-6 border-r border-gray-100 font-black text-howzit-dark">Private Group Option</td>
          <td className="p-6 border-r border-gray-100">Custom schedule</td>
          <td className="p-6 border-r border-gray-100">5 or 10 lessons</td>
          <td className="p-6 border-r border-gray-100">1h</td>
          <td className="p-6 text-howzit-red">$700 / $1,400 per group</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const LessonSchedule = ({ title, price, subtitle, color, lessons }: any) => (
  <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden mb-12">
    <div className={`${color} p-8 text-white`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-black font-heading uppercase tracking-tight mb-2">{title}</h3>
          <p className="text-sm opacity-90 font-bold italic">{subtitle}</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
          <span className="text-xl font-black">{price}</span> <span className="text-[10px] font-bold uppercase tracking-widest">/ person</span>
        </div>
      </div>
    </div>
    
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-16">No.</th>
              <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-32">Date</th>
              <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Contents (1h)</th>
            </tr>
          </thead>
          <tbody className="text-sm font-bold text-howzit-dark">
            {lessons.map((lesson: any, i: number) => (
              <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 font-black text-gray-300">{lesson.no}</td>
                <td className="py-4 text-gray-500">{lesson.date}</td>
                <td className="py-4 italic">{lesson.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const JapaneseLesson = () => {
  const survivalLessons = [
    { no: 1, date: 'Mar 2', content: 'Greetings & Self-introduction & Numbers' },
    { no: 2, date: 'Mar 9', content: 'Likes & Dislikes & Japanese Writing System' },
    { no: 3, date: 'Mar 16', content: 'Restaurant Ordering' },
    { no: 4, date: 'Mar 23', content: 'Convenience Store & Coffee Shop' },
    { no: 5, date: 'Mar 30', content: 'Train Stations & Taxis' },
  ];

  const practicalLessons = [
    { no: 1, date: 'Mar 2', content: 'Greetings & Self-introduction & Numbers' },
    { no: 2, date: 'Mar 9', content: 'Likes & Dislikes & Japanese Writing System' },
    { no: 3, date: 'Mar 16', content: 'Ordering Food at Restaurants' },
    { no: 4, date: 'Mar 23', content: 'Basic Verb Patterns (〜を〜ます)' },
    { no: 5, date: 'Mar 30', content: 'Convenience Store & Coffee Shop' },
    { no: 6, date: 'Apr 6', content: 'Clothing & Shoe Stores' },
    { no: 7, date: 'Apr 13', content: 'Expressing What You Want (〜たいです)' },
    { no: 8, date: 'Apr 20', content: 'Trains & Taxis' },
    { no: 9, date: 'Apr 27', content: 'Expressing What You Want (〜たいです)' },
    { no: 10, date: 'May 4', content: 'Survival Role-play (Final Review)' },
  ];

  const features = [
    { title: 'Made for travelers', icon: MapPin },
    { title: 'Fixed schedule', icon: Calendar },
    { title: 'Small group', icon: Users },
    { title: 'Real local teacher', icon: User },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Japan Local Scene"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase font-heading italic leading-none drop-shadow-2xl">
            Learn Japanese<span className="text-howzit-red">.</span><br/>Travel Like a Local.
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 font-bold max-w-3xl mx-auto leading-relaxed italic drop-shadow-lg opacity-100">
            A fun, travel-first way to prepare for Japan and enjoy it like a local.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Unified "What is & Why" Section - Updated with provided English content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-1.5 bg-howzit-red mb-8 rounded-full mx-auto"></div>
            <h2 className="text-4xl md:text-6xl font-black text-howzit-dark tracking-tighter leading-none uppercase font-heading mb-8 italic">
              What is <span className="text-howzit-red">“Howzit Japanese”?</span>
            </h2>
          </div>

          <div className="bg-gray-50 p-10 md:p-20 rounded-[4rem] border border-gray-100 shadow-sm">
            <div className="max-w-5xl mx-auto">
              {/* Core Narrative */}
              <div className="space-y-12 mb-20 text-lg md:text-xl font-medium text-gray-700 leading-relaxed italic border-b border-gray-200 pb-20">
                <p className="text-2xl md:text-4xl font-black text-howzit-dark leading-tight not-italic mb-12 text-center">
                  "Howzit Japanese" is not a traditional Japanese class. It’s a <span className="text-howzit-red">travel-focused Japanese experience</span> designed specifically for people visiting Japan.
                </p>
                
                <p>
                  Instead of memorizing dry textbook grammar or lists of vocabulary you'll never use, we focus exclusively on the high-impact language you’ll actually need from the moment you land. You’ll master what to say with confidence in restaurants, hidden cafés, and busy train stations, learning the natural, living Japanese that locals really use every day.
                </p>
                
                <p>
                  Our curriculum goes beyond just words; it’s packed with cultural insights and insider tips that make your trip smoother, more respectful, and infinitely more fun. We believe that knowing how to navigate social nuances is just as important as the language itself.
                </p>

                <p>
                  To ensure the highest quality experience, all lessons are conducted online via Zoom in intimate small groups of 2 to 10 people. Each session is taught by a professional Japanese teacher who also works as a local guide—someone who spends their days showing travelers the real Japan and knows exactly where visitors struggle most. It’s the perfect blend of linguistic expertise and real-world travel wisdom.
                </p>
              </div>

              {/* Pillars (Integrated Why points) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-howzit-red shadow-sm mb-4 group-hover:scale-110 transition-all border border-gray-100">
                      <feature.icon size={28} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-howzit-dark leading-tight italic">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Intro */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-4 font-heading uppercase italic tracking-tighter leading-none">Course <span className="text-howzit-red">Introduction</span></h2>
            <p className="text-gray-500 font-bold italic text-lg">Choose the path that fits your travel style.</p>
          </div>
          
          <CourseTable />

          <div className="grid grid-cols-1 gap-12">
            <LessonSchedule 
              title="🟢 Survival Japanese – Basic" 
              price="$175" 
              subtitle="Perfect for first-timers with zero Japanese and an upcoming trip." 
              color="bg-green-600" 
              lessons={survivalLessons}
            />
            
            <LessonSchedule 
              title="🔵 Practical Japanese – Standard" 
              price="$350" 
              subtitle="For longer stays and real conversations. More time before traveling." 
              color="bg-blue-600" 
              lessons={practicalLessons}
            />

            <div className="bg-orange-600 rounded-[3rem] p-10 text-white shadow-xl flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-[2rem] flex items-center justify-center border border-white/20">
                  <Users size={40} />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black font-heading uppercase italic tracking-tighter mb-4">🟠 Private Group Option</h3>
                <p className="text-lg opacity-90 font-bold italic mb-6">For families & groups (4+ people). Custom schedule available.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-white/20 px-6 py-3 rounded-2xl border border-white/10"><span className="text-[10px] font-black uppercase tracking-widest block mb-1">Basic (5)</span><span className="font-black">$700 / group</span></div>
                  <div className="bg-white/20 px-6 py-3 rounded-2xl border border-white/10"><span className="text-[10px] font-black uppercase tracking-widest block mb-1">Standard (10)</span><span className="font-black">$1400 / group</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-howzit-dark rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          <div className="md:w-2/5 relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Yohei Takaba"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-howzit-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-black text-white font-heading uppercase italic">Yohei Takaba</h3>
              <p className="text-howzit-red font-black text-[10px] uppercase tracking-widest">Japanese Teacher & Local Guide</p>
            </div>
          </div>
          
          <div className="md:w-3/5 p-12 md:p-20 text-white flex flex-col justify-center">
            <span className="text-howzit-red font-black text-[10px] uppercase tracking-[0.4em] mb-6 block italic">Meet Your Guide</span>
            <p className="text-xl md:text-2xl font-black leading-tight mb-8 italic">
              Yohei is a professional Japanese teacher who also works as a local guide in Tokyo. He knows exactly what travelers struggle with in Japan.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                <Check size={20} className="text-howzit-red shrink-0" /> Clear, easy-to-understand Japanese
              </div>
              <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                <Check size={20} className="text-howzit-red shrink-0" /> Real-life situations you’ll face
              </div>
              <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                <Check size={20} className="text-howzit-red shrink-0" /> Relaxed, supportive atmosphere
              </div>
            </div>
            <p className="text-2xl font-heading text-white italic border-l-4 border-howzit-red pl-6 py-2">
              “My goal is simple — to help you enjoy Japan with confidence.”
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-howzit-dark mb-8 font-heading uppercase italic tracking-tighter leading-none">
            Ready to Speak <br/><span className="text-howzit-red">Like a Local?</span>
          </h2>
          <p className="text-lg text-gray-500 font-bold italic mb-12">
            Join our next cohort and get ready for the trip of a lifetime. Limited spots available for small group sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-howzit-red text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-howzit-red/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Book a Lesson <Send size={18} />
            </Link>
            <Link to="/contact" className="bg-howzit-dark text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              Inquire Now <MessageSquare size={18} className="text-howzit-red" />
            </Link>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-gray-100 flex justify-center">
          <Link to="/" className="group flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-howzit-red group-hover:text-white group-hover:border-howzit-red transition-all">
               <ChevronLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Return to Our Services</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JapaneseLesson;
