import React, { useState } from 'react';
import { Gauge, Cpu, Eye, MessageSquare, Monitor, ShieldCheck, Palette, Type, Zap, CheckCircle2, Sparkles, Filter } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'accessibility' | 'optimization'>('all');

  const features = [
    {
      id: "score",
      title: "Audience Fit Score",
      category: "ai",
      desc: "Instant 0-100% composite rating indicating how strongly your design appeals to selected target demographics.",
      icon: Gauge,
      badge: "Real-time Rating"
    },
    {
      id: "analysis",
      title: "AI Design Analysis",
      category: "ai",
      desc: "Deep neural network evaluation trained on over 500,000 successful visual marketing campaigns across 24 industries.",
      icon: Cpu,
      badge: "Deep Neural Scan"
    },
    {
      id: "readability",
      title: "Readability Checker",
      category: "accessibility",
      desc: "Scans font sizes, contrast ratios, and line heights against WCAG AAA standards for effortless reading.",
      icon: Eye,
      badge: "WCAG AAA Ready"
    },
    {
      id: "tone",
      title: "Brand Tone Detection",
      category: "ai",
      desc: "Categorizes copy tone into formal, casual, energetic, or authoritative, preventing off-brand messaging.",
      icon: MessageSquare,
      badge: "Sentiment NLP"
    },
    {
      id: "platform",
      title: "Platform Optimization",
      category: "optimization",
      desc: "Tailors recommendations specifically for Instagram Stories, LinkedIn Posts, Pinterest Pins, or Web Banners.",
      icon: Monitor,
      badge: "Channel Tailored"
    },
    {
      id: "accessibility",
      title: "Accessibility Insights",
      category: "accessibility",
      desc: "Colorblindness simulation (Deuteranopia, Protanopia) and contrast ratio checks ensuring inclusive design for all.",
      icon: ShieldCheck,
      badge: "Inclusive Design"
    },
    {
      id: "color",
      title: "Color Psychology Analysis",
      category: "optimization",
      desc: "Maps your color palette against emotional triggers (Trust, Urgency, Calming, Premium) based on audience profiles.",
      icon: Palette,
      badge: "Emotional Mapping"
    },
    {
      id: "typography",
      title: "Smart Typography Review",
      category: "optimization",
      desc: "Checks font pairing harmony, hierarchy weight balance, and mobile scale rendering.",
      icon: Type,
      badge: "Font Pair AI"
    },
    {
      id: "oneclick",
      title: "One-click Improvements",
      category: "ai",
      desc: "Automatically apply suggested color palette shifts, text size adjustments, and layout spacing directly in Express.",
      icon: Zap,
      badge: "Automated Fixes"
    },
    {
      id: "export",
      title: "Export-ready Validation",
      category: "optimization",
      desc: "Generates an official AudienceLens Quality Badge certifying your design meets high-converting communication standards.",
      icon: CheckCircle2,
      badge: "Certified Quality"
    }
  ];

  const filteredFeatures = filter === 'all' ? features : features.filter(f => f.category === filter);

  return (
    <section id="features" className="py-20 md:py-28 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Add-On Capability</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              10 powerful AI validation tools in <span className="text-gradient-orange">one panel</span>.
            </h2>
            <p className="text-slate-400 text-base">
              Everything you need to ensure your visual communication converts before launching campaigns.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            <Filter className="w-4 h-4 text-slate-500 mr-1 hidden sm:block" />
            {(['all', 'ai', 'accessibility', 'optimization'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-orange-gradient text-white shadow-md shadow-orange-950/50'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Features (10)' : cat === 'ai' ? 'AI Intelligence' : cat === 'accessibility' ? 'Accessibility & Compliance' : 'Channel Optimization'}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-[#0D0D14] rounded-3xl p-6 border border-slate-800/90 shadow-xl hover:shadow-orange-950/30 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-orange-950/80 text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-md border border-orange-800/50">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-orange-400 border border-orange-500/30 font-mono">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Available in Express Panel</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
