
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, MapPin, Grid, Compass, ShieldCheck, ArrowRight, MessageSquare, Lock, Send, ChevronDown, User, Users, Car, Sparkles, BookOpen, Clock, ChevronRight } from 'lucide-react';
import Home from './pages/Home';
import IndividualTour from './pages/Forms/IndividualTour';
import GroupTour from './pages/Forms/GroupTour';
import CarTours from './pages/CarTours/index';
import FujiTour from './pages/CarTours/FujiTour';
import TokyoTour from './pages/Tours/TokyoTour';
import KyotoTour from './pages/Tours/KyotoTour';
import OsakaTour from './pages/Tours/OsakaTour';
import Experiences from './pages/Experiences';
import JapanGuide from './pages/JapanGuide';
import SpecialPackages from './pages/SpecialPackages';
import TripPlanning from './pages/Forms/TripPlanning';
import PreviousWorks from './pages/PreviousWorks';
import Blog from './pages/Blog';
import KyotoAutumn from './pages/blog/KyotoAutumn';
import TokyoCulinary from './pages/blog/TokyoCulinary';
import InternalBlogManager from './pages/InternalBlogManager';
import ContactUs from './pages/Forms/ContactUs';
import JapaneseLesson from './pages/Forms/JapaneseLesson';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ServiceMegaMenu: React.FC<{ isActive: boolean; menuData: any }> = ({ isActive, menuData }) => {
  const [selectedCategory, setSelectedCategory] = useState<'tours' | 'experiences' | 'lessons'>('tours');

  const categories = [
    { id: 'tours', name: 'Tours', icon: Compass, color: 'text-howzit-red', bg: 'bg-howzit-red/5' },
    { id: 'experiences', name: 'Experiences', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'lessons', name: 'Lessons', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
  ] as const;

  return (
    <div className="relative group h-full flex items-center">
      <button className={`flex items-center gap-1.5 text-[13px] font-black uppercase tracking-[0.15em] transition-all py-8 ${isActive ? 'text-howzit-red' : 'text-gray-500 hover:text-howzit-dark'}`}>
        Our Services
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      {/* Centered Mega Dropdown Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white border border-gray-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 z-[100] flex min-h-[380px]">
        
        {/* Left Pane: Categories Navigation (Vertical) */}
        <div className="w-[240px] bg-gray-50/80 border-r border-gray-100 p-8 flex flex-col gap-3">
          <div className="mb-4">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] px-2">Discovery</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              onMouseEnter={() => setSelectedCategory(cat.id)}
              className={`flex items-center justify-between px-5 py-5 rounded-[1.5rem] transition-all group/cat ${selectedCategory === cat.id ? 'bg-white shadow-xl shadow-gray-200/50 text-howzit-dark' : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${selectedCategory === cat.id ? cat.bg + ' ' + cat.color : 'bg-gray-100 text-gray-300'}`}>
                  <cat.icon size={18} strokeWidth={selectedCategory === cat.id ? 2.5 : 2} />
                </div>
                <span className={`text-xs font-black uppercase tracking-widest ${selectedCategory === cat.id ? 'opacity-100' : 'opacity-70'}`}>{cat.name}</span>
              </div>
              {selectedCategory === cat.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-howzit-red animate-pulse" />
              )}
            </button>
          ))}

          <div className="mt-auto pt-6 border-t border-gray-100 italic">
            <p className="text-[10px] text-gray-400 font-bold leading-relaxed px-2">
              Select a category to explore our personalized offerings.
            </p>
          </div>
        </div>

        {/* Right Pane: Content Display */}
        <div className="flex-grow p-10 bg-white relative overflow-hidden">
          <div key={selectedCategory} className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-howzit-dark uppercase tracking-tighter font-heading italic">
                {selectedCategory}<span className="text-howzit-red">.</span>
              </h4>
              <div className="h-px bg-gray-100 flex-grow" />
            </div>

            <div className="grid grid-cols-1 gap-2">
              {menuData[selectedCategory].map((link: any) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all group/item border border-transparent hover:border-gray-100"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-gray-50 group-hover/item:bg-white group-hover/item:shadow-lg flex items-center justify-center text-gray-400 group-hover/item:text-howzit-red transition-all shrink-0">
                      <link.icon size={22} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-howzit-dark uppercase tracking-widest leading-none mb-1.5 group-hover/item:text-howzit-red transition-colors">
                        {link.name}
                      </span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">View detailed itinerary & plan</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-200 group-hover/item:text-howzit-red group-hover/item:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative Background Icon */}
          <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none transform rotate-12 scale-150">
            {selectedCategory === 'tours' && <Compass size={200} className="text-howzit-red" />}
            {selectedCategory === 'experiences' && <Sparkles size={200} className="text-howzit-red" />}
            {selectedCategory === 'lessons' && <BookOpen size={200} className="text-howzit-red" />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubSection, setExpandedSubSection] = useState<string | null>(null);
  const location = useLocation();

  const menuData = {
    tours: [
      { name: 'Custom Individual Tour', path: '/individual-tour', icon: User },
      { name: 'Custom Group Tour', path: '/group-tour', icon: Users },
      { name: 'Private Car Tour', path: '/car-tours', icon: Car },
      { name: 'Full Trip Planning', path: '/trip-planning', icon: MapPin },
    ],
    experiences: [
      { name: 'Cultural Experiences', path: '/experiences', icon: Sparkles },
      { name: 'Special Packages', path: '/special-packages', icon: Grid },
    ],
    lessons: [
      { name: 'Howzit Japanese Lesson', path: '/japanese-lesson', icon: BookOpen },
    ]
  };

  const navLinks = [
    { name: 'Our Services', type: 'mega' },
    { name: 'OUR LOCAL GUIDE', path: '/japan-guide', icon: Compass },
    { name: 'CONTACT US', path: '/contact', icon: MessageSquare },
  ];

  const isServicesActive = () => {
    const allPaths = [...menuData.tours, ...menuData.experiences, ...menuData.lessons].map(l => l.path);
    return allPaths.includes(location.pathname);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tight text-howzit-dark italic font-heading">
                Howzit<span className="text-howzit-red">.</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12 h-full">
            {navLinks.map((link) => (
              link.type === 'mega' ? (
                <ServiceMegaMenu 
                  key={link.name}
                  menuData={menuData}
                  isActive={isServicesActive()}
                />
              ) : (
                <Link
                  key={link.name}
                  to={link.path!}
                  className={`text-[13px] font-black uppercase tracking-[0.15em] transition-colors py-8 ${location.pathname === link.path ? 'text-howzit-red underline underline-offset-8 decoration-2' : 'text-gray-500 hover:text-howzit-dark'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-howzit-dark p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 absolute w-full shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top duration-300 text-left">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.type === 'mega' ? (
                  <div className="border-b border-gray-50 last:border-0">
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 'services' ? null : 'services')}
                      className="w-full flex justify-between items-center py-4 text-sm font-black uppercase tracking-widest text-howzit-dark"
                    >
                      Our Services
                      <ChevronDown size={18} className={`transition-transform duration-300 ${expandedSection === 'services' ? 'rotate-180 text-howzit-red' : 'text-gray-300'}`} />
                    </button>
                    
                    {expandedSection === 'services' && (
                      <div className="pl-4 pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
                        {/* Nested Sections */}
                        {Object.entries(menuData).map(([key, items]) => (
                          <div key={key}>
                            <button 
                              onClick={() => setExpandedSubSection(expandedSubSection === key ? null : key)}
                              className="w-full flex justify-between items-center py-2 text-[11px] font-black uppercase tracking-widest text-gray-400"
                            >
                              {key}
                              <ChevronDown size={14} className={expandedSubSection === key ? 'rotate-180 text-howzit-red' : ''} />
                            </button>
                            {expandedSubSection === key && (
                              <div className="pl-4 space-y-1 mt-1">
                                {(items as any[]).map(sub => (
                                  <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-2.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                    <sub.icon size={14} className="text-howzit-red" /> {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path!}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-sm font-black uppercase tracking-widest border-b border-gray-50 last:border-0 ${location.pathname === link.path ? 'text-howzit-red' : 'text-howzit-dark'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-howzit-dark text-white pt-24 pb-12 text-left">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black italic font-heading">Howzit<span className="text-howzit-red">.</span></Link>
            <p className="text-gray-400 text-sm leading-relaxed">
               Your personal travel partner for authentic Japan. We connect curiosity with tradition, guiding you through the heartbeat of local life.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-howzit-red transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-howzit-red transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-howzit-red">Philosophy</h4>
             <ul className="space-y-3">
                <li><Link to="/previous-works" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Our Mission</Link></li>
                <li><Link to="/previous-works" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Local Besties</Link></li>
                <li><Link to="/experiences" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Partners</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-howzit-red">Tours</h4>
             <ul className="space-y-3">
                <li><Link to="/individual-tour" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Private Tours</Link></li>
                <li><Link to="/car-tours" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Car Logistics</Link></li>
                <li><Link to="/trip-planning" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Full Concierge</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-howzit-red">Explore</h4>
             <ul className="space-y-3">
                <li><Link to="/japan-guide" className="text-gray-400 hover:text-white text-sm font-bold transition-all">Stories & Guide</Link></li>
                <li><Link to="/internal-blog-manager" className="text-gray-500 hover:text-howzit-red text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all"><Lock size={12} /> Studio Login</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
              © 2024 HOWZIT JAPAN.
           </p>
           <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
             <a href="#" className="hover:text-howzit-red transition-colors">Privacy</a>
             <a href="#" className="hover:text-howzit-red transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const AppInner = () => {
  const location = useLocation();
  const isTourDetail = (location.pathname.startsWith('/car-tours/') && location.pathname !== '/car-tours') || 
                       (location.pathname.startsWith('/tours/'));

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-x-hidden">
      <ScrollToTop />
      <Header />
      
      {isTourDetail && (
        <Link 
          to="/contact" 
          className="fixed bottom-8 right-8 z-[60] bg-howzit-red text-white px-8 py-4 rounded-full font-black text-sm shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 border-2 border-white/20"
        >
          <span>PLAN NOW</span>
          <ArrowRight size={20} />
        </Link>
      )}

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual-tour" element={<IndividualTour />} />
          <Route path="/group-tour" element={<GroupTour />} />
          <Route path="/car-tours" element={<CarTours />} />
          <Route path="/car-tours/fuji" element={<FujiTour />} />
          <Route path="/tours/tokyo" element={<TokyoTour />} />
          <Route path="/tours/kyoto" element={<KyotoTour />} />
          <Route path="/tours/osaka" element={<OsakaTour />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/japan-guide" element={<JapanGuide />} />
          <Route path="/special-packages" element={<SpecialPackages />} />
          <Route path="/trip-planning" element={<TripPlanning />} />
          <Route path="/previous-works" element={<PreviousWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/kyoto-autumn" element={<KyotoAutumn />} />
          <Route path="/blog/tokyo-culinary-journey" element={<TokyoCulinary />} />
          <Route path="/internal-blog-manager" element={<InternalBlogManager />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/japanese-lesson" element={<JapaneseLesson />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}
