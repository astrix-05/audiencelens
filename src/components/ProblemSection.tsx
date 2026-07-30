import React from 'react';
import { AlertCircle, XCircle, EyeOff, ShieldAlert, MessageSquareX } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Great for Gen Z, but not C-Suite Professionals",
      tag: "Demographic Disconnect",
      icon: EyeOff,
      badgeColor: "bg-rose-950/80 text-rose-300 border-rose-800/60",
      description: "Neon vaporwave gradients and chaotic layouts boost TikTok engagement, but cause enterprise executives to dismiss key sales proposals as uncredible.",
      visualMockup: (
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 p-4 rounded-xl text-white text-center shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded">Hype Drop ⚡</span>
          <h4 className="text-lg font-black tracking-tighter mt-1">DISRUPT OR DIE BOOMER</h4>
          <p className="text-xs opacity-90">Send 5 ETH to sync node now lol</p>
        </div>
      ),
      reason: "78% of B2B decision makers abandon proposals with overly casual aesthetics."
    },
    {
      title: "Font Too Small for Older Audiences",
      tag: "Accessibility Barrier",
      icon: AlertCircle,
      badgeColor: "bg-amber-950/80 text-amber-300 border-amber-800/60",
      description: "Sleek 9px ultra-light typography looks gorgeous on retina laptops, but is completely unreadable for audiences aged 50+ on mobile screens.",
      visualMockup: (
        <div className="bg-slate-950 p-4 rounded-xl text-slate-400 text-left shadow-sm font-sans border border-slate-800">
          <h4 className="text-[9px] font-extralight text-slate-500 tracking-tight">Terms & Conditions of Healthcare Plan</h4>
          <p className="text-[7px] text-slate-600 font-extralight leading-none mt-1">
            Please ensure you bring all 14 physical documents prior to your consultation. Failure to do so incurs an automatic $250 administrative re-processing fee.
          </p>
        </div>
      ),
      reason: "Font sizes below 14px reduce 55+ demographic reading comprehension by 64%."
    },
    {
      title: "Colors Don't Match Healthcare Trust Branding",
      tag: "Color Psychology Misalignment",
      icon: ShieldAlert,
      badgeColor: "bg-orange-950/80 text-orange-300 border-orange-800/60",
      description: "High-contrast aggressive crimson red palette used for a wellness clinic flyer triggers emergency alarm instincts instead of calm, reassuring care.",
      visualMockup: (
        <div className="bg-red-700 p-4 rounded-xl text-white text-center shadow-sm">
          <span className="text-[10px] uppercase font-bold tracking-widest bg-black/30 px-2 py-0.5 rounded">Urgent Notice</span>
          <h4 className="text-base font-bold mt-1">SERENE FAMILY CLINIC</h4>
          <p className="text-xs text-red-100">Schedule your relaxing health checkup today.</p>
        </div>
      ),
      reason: "Unbalanced red triggers physiological stress response instead of medical reassurance."
    },
    {
      title: "Copy Feels Too Casual for B2B Enterprise",
      tag: "Tone & Voice Mismatch",
      icon: MessageSquareX,
      badgeColor: "bg-blue-950/80 text-blue-300 border-blue-800/60",
      description: "Using trendy emojis and informal slang in a multi-million dollar SaaS pitch deck diminishes perceived product reliability and security compliance.",
      visualMockup: (
        <div className="bg-slate-900 p-4 rounded-xl text-slate-100 text-center shadow-sm border border-slate-800">
          <h4 className="text-sm font-bold text-white">Yo Boss! Ready for gains? 🚀🔥</h4>
          <p className="text-xs text-slate-400 mt-1">Our AI algorithm is straight fire, no cap fr fr!</p>
        </div>
      ),
      reason: "Informal tone in enterprise collateral leads to 3x longer sales approval cycles."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0E]/90 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/60 text-xs font-bold text-rose-300">
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>The Silent Marketing Problem</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Beautiful design isn't always <span className="text-gradient-orange">effective design</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            You can spend hours crafting pixel-perfect layouts in Adobe Express, but if the color psychology, typography, or tone doesn't match your target audience, your engagement drops to zero.
          </p>
        </div>

        {/* 4 Example Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((prob, idx) => {
            const IconComponent = prob.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D14] rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-orange-500/40 transition-all duration-300 shadow-xl hover:shadow-orange-950/20 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${prob.badgeColor}`}>
                      {prob.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 shadow-sm border border-slate-800 text-slate-400 group-hover:text-rose-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {prob.description}
                  </p>

                  {/* Visual Mockup Preview */}
                  <div className="mt-5 p-3 rounded-2xl bg-[#07070A] border border-slate-800 shadow-inner">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <XCircle className="w-3 h-3 text-rose-400" /> Flawed Output Sample
                    </div>
                    {prob.visualMockup}
                  </div>
                </div>

                {/* Bottom Reason Callout */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start space-x-2 text-xs font-medium text-slate-300">
                  <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/60 font-bold text-[10px]">WHY IT FAILS</span>
                  <span>{prob.reason}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
