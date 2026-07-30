import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="py-20 md:py-28 bg-[#08080C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0D0D14] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden border border-orange-500/40 shadow-2xl glow-orange">
          
          {/* Subtle background glow circles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/30 via-amber-600/20 to-red-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950 text-orange-300 text-xs font-bold border border-orange-700/80">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Official Adobe Express Partner</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Create designs your audience <span className="text-gradient-orange">actually connects with</span>.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Stop guessing if your color scheme, font scale, or tone will resonate. Validate inside Adobe Express in seconds.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-orange-gradient text-white font-bold text-base shadow-xl shadow-orange-600/40 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Join the Waitlist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" /> Free 100 Scans for Beta Users
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" /> No Credit Card Required
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
