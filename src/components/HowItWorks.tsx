import React from 'react';
import { Layers, Target, Cpu, Zap, ArrowRight, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Open AudienceLens in Adobe Express",
      desc: "Launch the add-on directly within your active Adobe Express workspace with one click from the Add-ons side panel.",
      icon: Layers,
      highlight: "Seamless Extension",
      color: "from-orange-500 to-amber-600"
    },
    {
      num: "02",
      title: "Define Target Audience Profile",
      desc: "Select target age range, publication platform (Instagram, LinkedIn, Web), industry sector, and core campaign goal.",
      icon: Target,
      highlight: "Precision Profiling",
      color: "from-amber-500 to-red-600"
    },
    {
      num: "03",
      title: "AI Analyzes Your Current Design",
      desc: "Our neural engine scans visual elements, text contrast, color psychology, and tone in under 3 seconds.",
      icon: Cpu,
      highlight: "Neural Vision Scan",
      color: "from-red-500 to-orange-600"
    },
    {
      num: "04",
      title: "Apply Supported Fixes Instantly",
      desc: "Review your Audience Fit Score, read plain-English AI recommendations, and click to auto-apply design fixes.",
      icon: Zap,
      highlight: "1-Click Auto Fix",
      color: "from-orange-600 to-amber-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#0A0A0E] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Simple 4-Step Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How AudienceLens works inside <span className="text-gradient-orange">Adobe Express</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            No complicated context switching or exporting PNGs. Validate and improve your designs right where you build them.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D14] rounded-3xl p-6 border border-slate-800/90 hover:border-orange-500/40 transition-all duration-300 shadow-xl hover:shadow-orange-950/20 group flex flex-col justify-between relative"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-orange-400 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg shadow-orange-950/40`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-orange-300 border border-orange-500/30 mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-orange-500 hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
