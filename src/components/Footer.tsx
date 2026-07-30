import React from 'react';
import { Mail, Globe, Share2, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-orange-gradient flex items-center justify-center shadow-lg shadow-orange-950/50">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-black flex items-center justify-center bg-black/20">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Audience<span className="text-gradient-orange">Lens</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The AI-powered Adobe Express add-on that evaluates color psychology, typography legibility, and brand tone before you hit publish.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-xs font-semibold text-orange-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Built for Adobe Express Ecosystem
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Features Grid</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#demo" className="hover:text-orange-400 transition-colors">Interactive Demo</a></li>
              <li><a href="#target-users" className="hover:text-orange-400 transition-colors">Target Personas</a></li>
              <li><a href="#comparison" className="hover:text-orange-400 transition-colors">Comparison</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://express.adobe.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Adobe Express Marketplace</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Documentation & FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Color Psychology Guide</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">WCAG Contrast Standard</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Release Notes</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Connect & Legal</h4>
            <div className="space-y-2 text-xs">
              <a href="mailto:hello@audiencelens.ai" className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors">
                <Mail className="w-3.5 h-3.5" /> hello@audiencelens.ai
              </a>
              <div className="flex items-center space-x-3 pt-2">
                <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-orange-400 hover:bg-orange-950/40 border border-slate-800 transition-colors" aria-label="Website">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-orange-400 hover:bg-orange-950/40 border border-slate-800 transition-colors" aria-label="Community">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-orange-400 hover:bg-orange-950/40 border border-slate-800 transition-colors" aria-label="Share">
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AudienceLens Inc. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
