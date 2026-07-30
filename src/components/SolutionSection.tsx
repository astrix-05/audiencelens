import React from 'react';
import { Palette, Type, MessageSquare, BookOpen, Image as ImageIcon, Layout, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      title: "Color Psychology",
      desc: "Analyzes hue emotion, contrast ratios, and industry-specific brand alignment to trigger the intended psychological reaction.",
      icon: Palette,
      gradient: "from-orange-500 to-amber-600",
      accent: "bg-orange-950/80 text-orange-300 border-orange-800/60"
    },
    {
      title: "Typography Readability",
      desc: "Evaluates font pairing, leading, kerning, x-height, and size accessibility across various screen dimensions and age demographics.",
      icon: Type,
      gradient: "from-amber-500 to-red-600",
      accent: "bg-amber-950/80 text-amber-300 border-amber-800/60"
    },
    {
      title: "Tone of Voice",
      desc: "Scans headline and body copy for formal, casual, energetic, or authoritative sentiment matching your target buyer persona.",
      icon: MessageSquare,
      gradient: "from-orange-600 to-rose-600",
      accent: "bg-orange-950/80 text-orange-300 border-orange-800/60"
    },
    {
      title: "Reading Level & Clarity",
      desc: "Calculates Flesch-Kincaid grade level to ensure message complexity aligns with target audience comprehension preferences.",
      icon: BookOpen,
      gradient: "from-red-500 to-orange-600",
      accent: "bg-red-950/80 text-red-300 border-red-800/60"
    },
    {
      title: "Image & Visual Relevance",
      desc: "AI computer vision inspects subject matter, diversity, mood, and context relevance relative to your campaign goals.",
      icon: ImageIcon,
      gradient: "from-amber-500 to-yellow-600",
      accent: "bg-amber-950/80 text-amber-300 border-amber-800/60"
    },
    {
      title: "Layout & Visual Hierarchy",
      desc: "Simulates human eye-tracking heatmaps to ensure the call-to-action (CTA) commands immediate visual priority.",
      icon: Layout,
      gradient: "from-orange-500 to-red-600",
      accent: "bg-orange-950/80 text-orange-300 border-orange-800/60"
    },
    {
      title: "Audience Alignment Engine",
      desc: "Cross-references your design against thousands of proven communication standards trained on real audience conversion data.",
      icon: UserCheck,
      gradient: "from-amber-600 to-orange-500",
      accent: "bg-amber-950/80 text-amber-300 border-amber-800/60"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#08080C] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>The AudienceLens Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Multi-layer AI validation trained on <span className="text-gradient-orange">communication science</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            AudienceLens doesn't just check if your design looks pretty. It evaluates 7 critical dimensions of visual communication directly inside Adobe Express.
          </p>
        </div>

        {/* 7 Solution Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D14] rounded-3xl p-6 sm:p-7 border border-slate-800/90 shadow-xl hover:shadow-orange-950/30 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-lg shadow-orange-950/40 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${pillar.accent}`}>
                      Layer {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-orange-400" />
                  <span>Real-time Express Scan</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
