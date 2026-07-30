import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl shadow-orange-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Adobe Express Partnership Badge */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-orange-gradient flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center bg-black/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  Audience<span className="text-gradient-orange">Lens</span>
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-xs font-semibold text-orange-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Official Adobe Express Partner
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a>
            <a href="#demo" className="hover:text-orange-400 transition-colors">Live Demo</a>
            <a href="#target-users" className="hover:text-orange-400 transition-colors">Use Cases</a>
            <a href="#comparison" className="hover:text-orange-400 transition-colors">Why AudienceLens</a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenWaitlist}
              className="text-sm font-semibold text-slate-300 hover:text-orange-400 px-3 py-2 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onOpenWaitlist}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl group bg-orange-gradient hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 text-white rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenWaitlist}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-orange-600 text-white shadow-md shadow-orange-900/40"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-950/95 rounded-2xl border border-orange-500/30 shadow-2xl space-y-3 backdrop-blur-xl">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              How It Works
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              Live Demo
            </a>
            <a
              href="#target-users"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              Use Cases
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              Why AudienceLens
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-orange-950/40 hover:text-orange-400"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-slate-900 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-3 rounded-xl bg-orange-gradient text-white text-sm font-bold shadow-lg flex items-center justify-center gap-2"
              >
                Join the Waitlist
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
