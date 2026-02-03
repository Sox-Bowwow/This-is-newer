
import React, { useState, useRef } from 'react';
import { ChevronLeft, Check, Sparkles, User, Calendar, Clock, Globe, MessageSquare, ShieldCheck, Star, Users, MapPin, Send, AlertCircle, ArrowRight, ChevronDown, ChevronUp, Mail, CheckCircle, Flag, BookOpen, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseAccordionItem = ({ course, lessons, isOpen, onClick }: any) => {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm mb-4 overflow-hidden transition-all hover:shadow-md">
      <button 
        onClick={onClick}
        className={`w-full text-left p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8 transition-colors ${isOpen ? 'bg-gray-50' : 'bg-white'}`}
      >
        <div className="flex-grow lg:max-w-[70%]">
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-3 h-3 rounded-full ${course.bulletColor}`}></span>
            <h3 className="text-xl md:text-3xl font-black text-howzit-dark font-heading uppercase italic tracking-tight">
              {course.title} <span className="text-gray-300 font-normal not-italic text-lg ml-2">({course.lessonCount})</span>
            </h3>
          </div>

          <div>
            <span className="text-[10px] font-black text-howzit-red uppercase tracking-[0.2em] mb-3 block italic">Perfect if:</span>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {course.perfectIf.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-500 italic">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${course.bulletColor} text-white`}>
                    <Check size={10} strokeWidth={4} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-100 min-w-[200px]">
          <div className="text-left lg:text-right">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Price</span>
            <span className="text-xl md:text-2xl font-black text-howzit-dark font-heading italic">{course.price}</span>
          </div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-100 text-gray-300 transition-all ${isOpen ? 'rotate-180 bg-howzit-dark text-white border-howzit-dark shadow-lg' : 'hover:border-howzit-red hover:text-howzit-red'}`}>
            <ChevronDown size={24} />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="p-6 md:p-10 border-t border-gray-100 bg-white animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 pb-8 border-b border-gray-50">
            <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
              <Clock size={14} className="text-howzit-red" /> {course.schedule}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
              <Globe size={14} className="text-howzit-red" /> {course.duration} per lesson
            </div>
          </div>

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
                    <td className="py-5 font-black text-howzit-red">#{lesson.no}</td>
                    <td className="py-5 text-gray-400">{lesson.date}</td>
                    <td className="py-5 italic text-howzit-dark">{lesson.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const JapaneseLesson = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedCancel, setAgreedCancel] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const isFormValid = agreedTerms && agreedCancel && agreedPrivacy;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
    if (formRef.current) formRef.current.reset();
  };

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

  const courseData = [
    {
      title: "Survival Japanese – Basic",
      lessonCount: "5 Lessons",
      price: "$175 / person",
      perfectIf: ["First time in Japan", "Almost zero Japanese", "Trip is coming soon"],
      schedule: "Mon or Tue 10:00 AM (JST)",
      duration: "1h",
      bulletColor: "bg-green-600",
      lessons: survivalLessons
    },
    {
      title: "Practical Japanese – Standard",
      lessonCount: "10 Lessons",
      price: "$350 / person",
      perfectIf: ["Longer stay in Japan", "Want real conversations", "More time before traveling"],
      schedule: "Mon or Tue 10:00 AM (JST)",
      duration: "1h",
      bulletColor: "bg-blue-600",
      lessons: practicalLessons
    }
  ];

  const problemSolutions = [
    { 
      q: "Standard textbooks are boring/irrelevant.", 
      a: "Made for travelers", 
      icon: MapPin,
      desc: "Focus on high-impact language you'll use from the moment you land."
    },
    { 
      q: "I can't find a regular time to study.", 
      a: "Fixed schedule", 
      icon: Calendar,
      desc: "Live online Zoom sessions that keep you committed and on track."
    },
    { 
      q: "I'm shy and get lost in big classes.", 
      a: "Small group", 
      icon: Users,
      desc: "Intimate groups of 2-10 people ensuring personal attention."
    },
    { 
      q: "I want to speak naturally, not like a robot.", 
      a: "Real local teacher", 
      icon: User,
      desc: "Pro instructors who are also local guides in modern Japan."
    }
  ];

  const choiceCardStyle = "flex items-center justify-center p-4 rounded-2xl bg-gray-50 border-2 border-transparent cursor-pointer hover:bg-white hover:border-howzit-red/30 has-[:checked]:bg-white has-[:checked]:border-howzit-red has-[:checked]:shadow-[0_20px_50px_-12px_rgba(235,36,41,0.25)] has-[:checked]:ring-4 has-[:checked]:ring-howzit-red/5 has-[:checked]:scale-[1.02] transition-all text-center";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Japan Local Scene"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase font-heading italic leading-[0.9]">
            Learn Japanese<span className="text-howzit-red">.</span><br/>Travel Japan Like a Local.
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-bold max-w-2xl mx-auto leading-relaxed italic drop-shadow-lg opacity-100">
            A fun, travel-first way to prepare for Japan and enjoy it like a local.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Information Section */}
      <section className="py-12 px-6 md:px-12 bg-white relative border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
            <div className="shrink-0 md:w-1/4">
              <div className="w-12 h-1 bg-howzit-red mb-4 rounded-full"></div>
              <h2 className="text-2xl md:text-4xl font-black text-howzit-dark tracking-tighter leading-none uppercase font-heading">
                What is <br/>
                <span className="text-howzit-red">“Howzit Japanese”?</span>
              </h2>
            </div>
            <div className="flex-grow">
              <div className="space-y-4 text-gray-600 font-bold text-sm md:text-base leading-relaxed italic">
                <p className="text-lg md:text-2xl font-black text-howzit-dark not-italic leading-tight">
                  "Howzit Japanese" is not a traditional Japanese class. It’s a <span className="text-howzit-red font-heading">travel-focused Japanese experience</span> designed specifically for people visiting Japan.
                </p>
                <p>
                  Instead of memorizing dry textbook grammar or lists of vocabulary you'll never use, we focus exclusively on the high-impact language you’ll actually need from the moment you land. You’ll master what to say with confidence in restaurants, hidden cafés, and busy train stations, learning the natural, living Japanese that locals really use every day.
                </p>
                <div className="bg-howzit-dark text-white p-6 md:p-8 rounded-[2rem] not-italic shadow-lg text-sm md:text-lg flex items-center gap-6">
                   <div className="shrink-0 w-12 h-12 bg-howzit-red/20 rounded-full flex items-center justify-center text-howzit-red">
                      <Users size={24} />
                   </div>
                   <p className="font-bold">To ensure the highest quality experience, all lessons are conducted online via Zoom in intimate small groups of 2 to 10 people taught by professional local guides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Intro */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-4 font-heading uppercase italic tracking-tighter leading-none">
              Course <span className="text-howzit-red underline decoration-4 underline-offset-8">Introduction</span>
            </h2>
            <p className="text-gray-500 font-bold italic text-lg mt-6">Choose the path that fits your travel style. Click a course to see the full lesson schedule.</p>
          </div>
          
          <div className="space-y-4">
            {courseData.map((course, idx) => (
              <CourseAccordionItem 
                key={idx}
                course={course}
                lessons={course.lessons}
                isOpen={openAccordion === idx}
                onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
              />
            ))}

            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-grow lg:max-w-[70%]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <h3 className="text-xl md:text-3xl font-black text-howzit-dark font-heading uppercase italic tracking-tight">
                    Private Group Option
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-sm md:text-base font-bold text-gray-600 italic leading-relaxed">
                    For families & groups (4+ people). Custom schedule available. Perfect for creating shared travel memories together.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-100">
                      Basic (5 lessons): $700 / group
                    </span>
                    <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-100">
                      Standard (10 lessons): $1400 / group
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-100 min-w-[200px]">
                <div className="text-left lg:text-right">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Price</span>
                  <span className="text-xl md:text-2xl font-black text-howzit-dark font-heading italic">$700 / $1,400 per group</span>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-100 text-howzit-red">
                  <Users size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-howzit-dark rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
            <div className="md:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                alt="Yohei Takaba"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-howzit-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-4xl font-black text-white font-heading uppercase italic tracking-tighter">Yohei Takaba</h3>
                <p className="text-howzit-red font-black text-[10px] uppercase tracking-[0.4em] bg-white px-3 py-1 inline-block mt-2">Professional Instructor</p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-12 md:p-24 text-white flex flex-col justify-center">
              <span className="text-howzit-red font-black text-[11px] uppercase tracking-[0.4em] mb-8 block italic">Meet Your Guide</span>
              <p className="text-2xl md:text-3xl font-black leading-tight mb-12 italic">
                Yohei is a professional Japanese teacher who also works as a local guide in Tokyo. He knows exactly what travelers struggle with in Japan.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                  <Check size={24} className="text-howzit-red shrink-0" /> Clear, easy-to-understand Japanese
                </div>
                <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                  <Check size={24} className="text-howzit-red shrink-0" /> Real-life situations you’ll face
                </div>
              </div>
              
              <p className="text-2xl font-heading text-white italic border-l-8 border-howzit-red pl-8 py-4 bg-white/5 rounded-r-3xl">
                “My goal is simple — to help you enjoy Japan with confidence.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Inquiry Form */}
      <section className="py-32 px-6 bg-gray-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-howzit-dark mb-6 font-heading uppercase italic tracking-tighter leading-none">
            Contact <span className="text-howzit-red">Us.</span>
          </h2>
          <p className="text-2xl text-gray-500 font-bold italic mb-16 max-w-2xl mx-auto">
            Ready to start your Japanese journey? Reach out to us with your details and we'll help you find the best path for your trip.
          </p>
          
          <div className="max-w-5xl mx-auto">
            {submitted ? (
              <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-howzit-dark mb-4 font-heading uppercase italic">Inquiry Sent!</h3>
                <p className="text-gray-500 font-bold italic leading-relaxed text-lg">
                  Thank you for your message. Our team will contact you within 24 hours with details about our next cohort and course options.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setAgreedTerms(false);
                    setAgreedCancel(false);
                    setAgreedPrivacy(false);
                  }}
                  className="mt-10 text-[10px] font-black text-howzit-red uppercase tracking-widest hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 space-y-12 text-left"
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <User size={24} className="text-howzit-red" />
                    <h3 className="text-xl font-black text-howzit-dark font-heading uppercase italic">1. Basic Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Full Name (English)</label>
                      <input required type="text" placeholder="e.g. John Smith" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Email Address</label>
                      <input required type="email" placeholder="hello@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1 flex items-center gap-2">Nationality / Timezone</label>
                      <div className="relative">
                        <Flag size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-howzit-red" />
                        <input required type="text" placeholder="e.g. USA / PST" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Age Group</label>
                      <select required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-bold text-howzit-dark text-sm cursor-pointer appearance-none shadow-sm" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EB2429' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '0.9rem' }}>
                        <option value="">Select your age...</option>
                        <option value="18-24">18–24</option>
                        <option value="25-34">25–34</option>
                        <option value="35-44">35–44</option>
                        <option value="45+">45+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <BookOpen size={24} className="text-howzit-red" />
                    <h3 className="text-xl font-black text-howzit-dark font-heading uppercase italic">2. Language Background</h3>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Japanese Level (Self-assessment)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {['Beginner', 'Elementary', 'Intermediate', 'Advanced'].map(level => (
                        <label key={level} className={choiceCardStyle}>
                          <input type="radio" name="japaneseLevel" value={level} className="hidden" />
                          <span className="text-xs font-black text-howzit-dark uppercase tracking-tight">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Hiragana / Katakana Literacy</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Can Read', 'A little', 'Barely'].map(option => (
                        <label key={option} className={choiceCardStyle}>
                          <input type="radio" name="kanaLevel" value={option} className="hidden" />
                          <span className="text-xs font-black text-howzit-dark uppercase tracking-tight">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Learning Experience</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {['First Time', 'Self-taught', 'At School', 'Via Apps'].map(exp => (
                        <label key={exp} className={choiceCardStyle}>
                          <input type="radio" name="experience" value={exp} className="hidden" />
                          <span className="text-xs font-black text-howzit-dark uppercase tracking-tight leading-tight">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <Heart size={24} className="text-howzit-red" />
                    <h3 className="text-xl font-black text-howzit-dark font-heading uppercase italic">3. Goals & Interests</h3>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Purpose (Multiple selection)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Order at restaurants', 'Basic everyday conversation', 'Smooth shopping experience', 'Connect with locals'].map(goal => (
                        <label key={goal} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border-2 border-transparent cursor-pointer hover:bg-white hover:border-howzit-red/30 has-[:checked]:bg-white has-[:checked]:border-howzit-red has-[:checked]:shadow-[0_20px_50px_-12px_rgba(235,36,41,0.25)] has-[:checked]:ring-4 has-[:checked]:ring-howzit-red/5 has-[:checked]:scale-[1.02] transition-all">
                          <input type="checkbox" name="purpose" value={goal} className="w-5 h-5 accent-howzit-red rounded" />
                          <span className="text-xs font-bold text-howzit-dark">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Topics of Interest (Multiple selection)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {[{ label: 'Food 🍣', val: 'Food' }, { label: 'Izakaya 🍺', val: 'Izakaya' }, { label: 'Travel 🗼', val: 'Travel' }, { label: 'Daily Life', val: 'Daily' }, { label: 'Business', val: 'Business' }].map(topic => (
                        <label key={topic.val} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 border-2 border-transparent cursor-pointer hover:bg-white hover:border-howzit-red/30 has-[:checked]:bg-white has-[:checked]:border-howzit-red has-[:checked]:shadow-[0_20px_50px_-12px_rgba(235,36,41,0.25)] has-[:checked]:ring-4 has-[:checked]:ring-howzit-red/5 has-[:checked]:scale-[1.02] transition-all text-center">
                          <input type="checkbox" name="topics" value={topic.val} className="hidden" />
                          <span className="text-[10px] font-black uppercase tracking-tighter leading-tight">{topic.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Other Questions or specific requests</label>
                    <textarea rows={4} placeholder="When are you traveling? What do you want to achieve most?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-4 focus:ring-howzit-red/10 focus:outline-none transition-all font-medium text-gray-600 text-sm leading-relaxed" />
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 px-1 cursor-pointer group">
                      <input type="checkbox" checked={agreedTerms} onChange={(e) => setAgreedTerms(e.target.checked)} className="w-4 h-4 accent-howzit-red" />
                      <span className="text-[11px] font-bold text-gray-500 group-hover:text-howzit-dark transition-colors">I agree to the Terms of Use <span className="text-howzit-red">*</span></span>
                    </label>
                    <label className="flex items-center gap-3 px-1 cursor-pointer group">
                      <input type="checkbox" checked={agreedCancel} onChange={(e) => setAgreedCancel(e.target.checked)} className="w-4 h-4 accent-howzit-red" />
                      <span className="text-[11px] font-bold text-gray-500 group-hover:text-howzit-dark transition-colors">I acknowledge the Cancellation Policy <span className="text-howzit-red">*</span></span>
                    </label>
                    <label className="flex items-center gap-3 px-1 cursor-pointer group">
                      <input type="checkbox" checked={agreedPrivacy} onChange={(e) => setAgreedPrivacy(e.target.checked)} className="w-4 h-4 accent-howzit-red" />
                      <span className="text-[11px] font-bold text-gray-500 group-hover:text-howzit-dark transition-colors">I agree to the handling of Personal Information <span className="text-howzit-red">*</span></span>
                    </label>
                  </div>
                  <div className="pt-6">
                    <button type="submit" disabled={!isFormValid} className={`w-full py-6 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-4 group ${isFormValid ? "bg-howzit-red text-white shadow-2xl shadow-howzit-red/20 hover:scale-[1.02] active:scale-95 cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed grayscale opacity-70"}`}>
                      Send <Send size={18} className={isFormValid ? "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" : ""} />
                    </button>
                    <p className="text-center mt-6 text-[9px] font-black text-gray-300 uppercase tracking-widest flex items-center justify-center gap-2">
                      <Info size={12} /> We'll get back to you with lesson details via email.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-24 pt-16 border-t border-gray-200 flex justify-center">
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
