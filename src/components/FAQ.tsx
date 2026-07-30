import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does AudienceLens integrate into Adobe Express?",
      a: "AudienceLens is built on the official Adobe Express Add-on SDK. Once installed from the Adobe Express Add-ons marketplace, it appears in your side panel right alongside your layers, assets, and templates."
    },
    {
      q: "How is my design data and privacy handled?",
      a: "Your privacy is paramount. AudienceLens analyzes visual canvas tokens and text copy in real-time solely to compute audience resonance metrics. We never store, sell, or train public AI models on your proprietary brand assets or unreleased campaign collateral."
    },
    {
      q: "Which target audience profiles are supported?",
      a: "AudienceLens includes over 50 pre-built target audience personas across age demographics (Gen Z, Millennials, Gen X, Seniors), publication platforms (Instagram, TikTok, LinkedIn, Web, Print), and industries (Healthcare, B2B Tech, Luxury D2C, Education, Finance)."
    },
    {
      q: "Can AudienceLens automatically apply fixes inside Express?",
      a: "Yes! For supported design parameters—such as color palette adjustments, contrast ratio enhancements, font size scaling, and line spacing—you can simply click 'Apply Fix' in the add-on panel to update your canvas instantly."
    },
    {
      q: "What features are coming on the roadmap?",
      a: "Upcoming updates include A/B Split-Testing Simulation, Automated Brand Style Guide Compliance Enforcement, Localization & Cultural Sensitivity Checking, and Custom Enterprise Persona Training."
    },
    {
      q: "Is there a free tier for individual creators?",
      a: "Yes! Early waitlist members will receive 100 free AI audience validation scans per month, along with exclusive access to our beta release."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0A0A0E] border-y border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently asked <span className="text-gradient-orange">questions</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about AudienceLens and our Adobe Express integration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'bg-[#0D0D14] border-orange-500/50 shadow-xl shadow-orange-950/20' : 'bg-slate-950/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-orange-400 font-mono text-sm">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-orange-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
