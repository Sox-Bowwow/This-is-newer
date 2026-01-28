
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, MapPin, Users, Car, Coffee, Heart, Star, ChevronRight, Send, Search, Filter, Calendar, Home as HomeIcon, Grid, PlaySquare, Compass, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import Home from './pages/Home';
import IndividualTour from './pages/IndividualTour';
import GroupTour from './pages/GroupTour';
import CarTours from './pages/CarTours/index';
import FujiTour from './pages/CarTours/FujiTour';
import Experiences from './pages/Experiences';
import JapanGuide from './pages/JapanGuide';
import TripPlanning from './pages/TripPlanning';
import PreviousWorks from './pages/PreviousWorks';
import Blog from './pages/Blog';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Feed', path: '/', icon: HomeIcon },
    { name: 'Private', path: '/individual-tour', icon: Users },
    { name: 'Car', path: '/car-tours', icon: Car },
    { name: 'Guide', path: '/japan-guide', icon: Compass },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Why Howzit?', path: '/previous-works', icon: PlaySquare },
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
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-100 border-none rounded-lg py-1.5 px-10 text-sm focus:ring-1 focus:ring-gray-300 w-64"
              />
              <Search className="absolute left-3 top-2 text-gray-400" size={16} />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                title={link.name}
                className={`text-gray-800 transition-colors p-1 ${location.pathname === link.path ? 'text-howzit-red' : 'hover:text-howzit-red'}`}
              >
                <link.icon size={24} />
              </Link>
            ))}
            <Link
              to="/individual-tour"
              className="bg-howzit-red text-white px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-red-600 transition-all"
            >
              Book Now
            </Link>
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
                className="flex items-center gap-4 px-3 py-4 text-lg font-bold text-gray-700 hover:text-howzit-red border-b border-gray-50"
              >
                <link.icon size={24} />
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/individual-tour"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-howzit-red text-white px-6 py-4 rounded-xl font-black shadow-lg shadow-howzit-red/20"
              >
                GET STARTED
              </Link>
            </div>
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
          {/* Column 1: Brand */}
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

          {/* Column 2: About Us */}
          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">About Us</h4>
             <ul className="space-y-3">
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Mission & Philosophy</Link></li>
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Team & Guides</Link></li>
                <li><Link to="/experiences" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Cultural Partners</Link></li>
             </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">Services</h4>
             <ul className="space-y-3">
                <li><Link to="/individual-tour" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Private Tours</Link></li>
                <li><Link to="/car-tours" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Car Tours</Link></li>
                <li><Link to="/group-tour" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Group Tours</Link></li>
                <li><Link to="/trip-planning" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Full Planning</Link></li>
             </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-howzit-red">Legal & Reviews</h4>
             <ul className="space-y-3">
                <li><Link to="/previous-works" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">All Reviews</Link></li>
                <li><Link to="/" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Privacy Policy</Link></li>
                <li><Link to="/" className="text-gray-500 hover:text-howzit-dark text-sm font-bold transition-all">Terms of Service</Link></li>
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
  
  // Show the floating button only on car tour detail pages (e.g., /car-tours/fuji)
  const isCarTourDetail = location.pathname.startsWith('/car-tours/') && location.pathname !== '/car-tours';

  return (
    <div className="min-h-screen bg-[#fafafa] relative">
      <Header />
      
      {/* Conditional Floating 'Book Now' Button */}
      {isCarTourDetail && (
        <Link 
          to="/individual-tour" 
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
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/japan-guide" element={<JapanGuide />} />
          <Route path="/trip-planning" element={<TripPlanning />} />
          <Route path="/previous-works" element={<PreviousWorks />} />
          <Route path="/blog" element={<Blog />} />
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
