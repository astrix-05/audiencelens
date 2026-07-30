import React from 'react';
import { Check, X, Sparkles, Zap } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const criteria = [
    {
      feature: "Audience-specific AI Validation",
      lens: true,
      trad: false,
      desc: "Simulates exact demographic reactions (Gen Z, Seniors, Healthcare B2B) before publishing."
    },
    {
      feature: "Communication Effectiveness Evaluation",
      lens: true,
      trad: false,
      desc: "Measures whether your headline copy & visual hierarchy actually deliver your intended message."
    },
    {
      feature: "Typography & Readability Analysis",
      lens: true,
      trad: false,
      desc: "Calculates WCAG AAA contrast, x-height legibility, and mobile scaling automatically."
    },
    {
      feature: "Color Psychology & Emotion Mapping",
      lens: true,
      trad: false,
      desc: "Evaluates palette emotional triggers (Trust, Urgency, Calming, Luxury) for your target sector."
    },
    {
      feature: "Platform-Specific Channel Recommendations",
      lens: true,
      trad: false,
      desc: "Optimizes contrast, font scale, and composition specifically for Instagram, LinkedIn, or Web."
    },
    {
      feature: "Explainable AI Design Suggestions",
      lens: true,
      trad: false,
      desc: "Provides clear, human-readable rationale for why changes improve audience conversion."
    },
    {
      feature: "1-Click Direct Adobe Express Fixes",
      lens: true,
      trad: false,
      desc: "Auto-applies color adjustments, typography updates, and spacing directly inside Express."
    },
    {
      feature: "Basic Canvas Editing & Object Placement",
      lens: true,
      trad: true,
      desc: "Standard drag-and-drop layer manipulation."
    }
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#0A0A0E] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>Why AudienceLens Is Different</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Beyond traditional <span className="text-gradient-orange">editing tools</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Traditional design tools only help you arrange pixels. AudienceLens tells you if those pixels will actually connect with real human beings.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-[#0D0D14] rounded-3xl border border-orange-500/30 shadow-2xl overflow-hidden max-w-5xl mx-auto glow-orange">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#060608] text-white">
                  <th className="p-5 sm:p-6 text-sm font-bold text-slate-200 w-1/2">
                    Core Design Capability
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-orange-400 text-center w-1/4 bg-orange-950/60 border-x border-orange-800/40">
                    <div className="flex items-center justify-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      <span>AudienceLens</span>
                    </div>
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-bold text-slate-400 text-center w-1/4">
                    Traditional Design Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {criteria.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-5 sm:p-6">
                      <div className="font-bold text-white text-sm sm:text-base">{row.feature}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{row.desc}</div>
                    </td>
                    
                    {/* AudienceLens Column */}
                    <td className="p-5 sm:p-6 text-center bg-orange-950/20 border-x border-orange-900/30">
                      {row.lens ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-950 text-orange-400 border border-orange-700/60 font-bold shadow-md">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-950 text-rose-400 border border-rose-800/60">
                          <X className="w-5 h-5 stroke-[3]" />
                        </div>
                      )}
                    </td>

                    {/* Traditional Tools Column */}
                    <td className="p-5 sm:p-6 text-center">
                      {row.trad ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-slate-400 border border-slate-800 font-bold">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-950/60 text-rose-400 border border-rose-800/60">
                          <X className="w-5 h-5 stroke-[3]" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-950 text-center text-xs text-slate-400 font-medium border-t border-slate-800">
            ✓ AudienceLens is built to seamlessly extend Adobe Express via the official Adobe Add-on SDK.
          </div>
        </div>

      </div>
    </section>
  );
};
