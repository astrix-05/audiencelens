import React from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { ExpressMockup } from './ExpressMockup';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Ambient background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-600/20 via-amber-600/15 to-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge: Built for Adobe Express */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/90 border border-orange-500/30 shadow-lg text-xs font-semibold text-slate-200 backdrop-blur-md hover:border-orange-500/50 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 font-bold">New</span>
            <span className="text-slate-600">|</span>
            <span>AI-Powered Adobe Express Add-on</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
          </div>
        </div>

        {/* Main Headline & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Know if your design speaks to the <span className="text-gradient-orange">right audience</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            AudienceLens analyzes colors, typography, copy, and imagery inside Adobe Express to determine whether your design resonates with your target audience—before you publish.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-orange-gradient text-white font-bold text-base shadow-xl shadow-orange-600/30 hover:shadow-2xl hover:shadow-orange-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>Coming Soon — Join Waitlist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-200 font-semibold text-base shadow-md hover:bg-slate-800 hover:border-orange-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Learn More</span>
            </a>
          </div>

          {/* Social Proof Trust Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Seamless Adobe Express Integration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> 100% Privacy Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Real-time 1-Click Fixes
            </span>
          </div>
        </div>

        {/* Dashboard Mockup Section Container */}
        <div id="demo" className="mt-14 sm:mt-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-700/50">
              Interactive Add-On Demo
            </span>
            <p className="text-sm text-slate-400 mt-2">
              Try toggling target audiences below to watch AudienceLens evaluate resonance in real-time.
            </p>
          </div>

          <ExpressMockup />
        </div>

      </div>
    </section>
  );
};
