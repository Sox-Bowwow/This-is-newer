
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, MapPin, Grid, Compass, ShieldCheck, ArrowRight, MessageSquare, Lock, Send } from 'lucide-react';
import Home from './pages/Home';
import IndividualTour from './pages/IndividualTour';
import GroupTour from './pages/GroupTour';
import CarTours from './pages/CarTours/index';
import FujiTour from './pages/CarTours/FujiTour';
import TokyoTour from './pages/Tours/TokyoTour';
import KyotoTour from './pages/Tours/KyotoTour';
import OsakaTour from './pages/Tours/OsakaTour';
import Experiences from './pages/Experiences';
import JapanGuide from './pages/JapanGuide';
import SpecialPackages from './pages/SpecialPackages';
import TripPlanning from './pages/TripPlanning';
import PreviousWorks from './pages/PreviousWorks';
import Blog from './pages/Blog';
import KyotoAutumn from './pages/blog/KyotoAutumn';
import TokyoCulinary from './pages/blog/TokyoCulinary';
import InternalBlogManager from './pages/InternalBlogManager';
import ContactUs from './pages/ContactUs';
import JapaneseLesson from './pages/JapaneseLesson';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Our Services', path: '/', icon: Grid },
    { name: 'Japan Guide', path: '/japan-guide', icon: Compass },
    { name: 'Contact Us', path: '/contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tight text-howzit-dark italic font-heading">
                Howzit<span className="text-howzit-red">.</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-black uppercase tracking-[0.15em] transition-colors ${location.pathname === link.path ? 'text-howzit-red underline underline-offset-8 decoration-2' : 'text-gray-500 hover:text-howzit-dark'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-howzit-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-5 text-sm font-black uppercase tracking-widest border-b border-gray-50 last:border-0 ${location.pathname === link.path ? 'text-howzit-red' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-howzit-dark text-white pt-24 pb-12">
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
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-howzit-red">Services</h4>
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
    <div className="min-h-screen bg-[#fafafa] relative">
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
