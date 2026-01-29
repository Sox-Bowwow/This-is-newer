
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, MapPin, Users, Car, Coffee, Heart, Star, ChevronRight, Send, Search, Filter, Calendar, Home as HomeIcon, Grid, PlaySquare, Compass, ShieldCheck, ArrowRight, BookOpen, MessageSquare, Lock } from 'lucide-react';
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

// ページ遷移時にスクロール位置をトップに戻すコンポーネント
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
    { name: 'Our Service', path: '/', icon: Grid },
    { name: 'Our Japan Guide', path: '/japan-guide', icon: Compass },
    { name: 'Contact Us', path: '/contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tight text-howzit-dark italic font-heading">Howzit<span className="text-howzit-red">.</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-black uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-howzit-red' : 'text-gray-500 hover:text-howzit-red'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-3 py-4 text-lg font-bold border-b border-gray-50 ${location.pathname === link.path ? 'text-howzit-red' : 'text-gray-700 hover:text-howzit-red'}`}
              >
                <link.icon size={24} />
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
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black italic text-howzit-dark">Howzit<span className="text-howzit-red">.</span></Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
               A personal travel partner guiding tourists to experience the "daily life, culture, and connections" of Japan.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-2 bg-gray-100 rounded-full text-howzit-dark hover:bg-howzit-red hover:text-white transition-all"><Instagram size={20} /></a>
               <a href="#" className="p-2 bg-gray-100 rounded-full text-howzit-dark hover:bg-howzit-red hover:text-white transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">About Us</h4>
             <ul className="space-y-3">
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Mission & Philosophy</Link></li>
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Team & Guides</Link></li>
                <li><Link to="/experiences" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Cultural Partners</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">Services</h4>
             <ul className="space-y-3">
                <li><Link to="/individual-tour" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Private Tours</Link></li>
                <li><Link to="/car-tours" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Car Tours</Link></li>
                <li><Link to="/special-packages" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Special Packages</Link></li>
                <li><Link to="/trip-planning" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Full Planning</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">Legal & Admin</h4>
             <ul className="space-y-3">
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">All Reviews</Link></li>
                <li><Link to="/internal-blog-manager" className="text-gray-400 hover:text-howzit-red text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all"><Lock size={12} /> Internal Login</Link></li>
             </ul>
             <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300">
                <ShieldCheck size={14} /> 100% Secure Payment
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
              © 2024 HOWZIT JAPAN. ALL RIGHTS RESERVED. FROM TOKYO WITH LOVE.
           </p>
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
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] bg-howzit-red text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-sm md:text-lg shadow-[0_20px_50px_rgba(235,36,41,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center gap-3 border-2 border-white/20 group backdrop-blur-sm"
        >
          <span>BOOK NOW</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      )}

      <main className="pt-16">
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
