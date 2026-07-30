import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, Wand2, Palette, Type, Award } from 'lucide-react';

export const InteractiveDashboard: React.FC = () => {
  const [expandedRec, setExpandedRec] = useState<number | null>(0);

  const metrics = [
    { label: "Color Compatibility", score: 95, color: "bg-orange-500", text: "text-orange-400" },
    { label: "Typography Score", score: 88, color: "bg-amber-500", text: "text-amber-400" },
    { label: "Readability", score: 91, color: "bg-orange-400", text: "text-orange-300" },
    { label: "Emotional Tone", score: 94, color: "bg-red-500", text: "text-red-400" },
    { label: "Brand Professionalism", score: 92, color: "bg-amber-600", text: "text-amber-300" },
    { label: "Platform Optimization", score: 90, color: "bg-orange-600", text: "text-orange-400" }
  ];

  const recommendations = [
    {
      id: 0,
      title: "Enhance Subheading Contrast Ratio (+4% Readability)",
      category: "Typography & Contrast",
      confidence: "99% AI Confidence",
      impact: "High Impact",
      icon: Type,
      summary: "Current text color #64748B achieves a 3.8:1 contrast ratio against the background. Adjusting to #F8FAFC elevates contrast to 14.2:1 (WCAG AAA standard).",
      actionText: "Auto-Apply Contrast Fix"
    },
    {
      id: 1,
      title: "Adjust Secondary Accent Color to Warm Amber (+6% Trust)",
      category: "Color Psychology",
      confidence: "97% AI Confidence",
      impact: "Medium Impact",
      icon: Palette,
      summary: "For healthcare and wellness campaigns, switching from aggressive red accents to warm amber (#FF9900) increases perceived patient trust by 22% in clinical testing.",
      actionText: "Swap Accent Palette"
    },
    {
      id: 2,
      title: "Refine CTA Copy from 'Submit' to 'Get My Custom Plan'",
      category: "Tone & Conversion",
      confidence: "95% AI Confidence",
      impact: "High Impact",
      icon: Wand2,
      summary: "Generic single-word CTAs underperform action-oriented benefit verbs by 34% for decision-making professionals.",
      actionText: "Update CTA Text"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0E] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive Analytics Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Detailed breakdown of your <span className="text-gradient-orange">audience fit</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            AudienceLens generates an in-depth analytics report with sub-scores and actionable AI suggestions for every design.
          </p>
        </div>

        {/* Analytics Card UI Container */}
        <div className="bg-[#0D0D14] rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl max-w-5xl mx-auto glow-orange">
          
          {/* Top Score Gauge Banner */}
          <div className="bg-[#060608] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center space-x-6 z-10">
              {/* Circular Gauge Simulation */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-orange-gradient p-1 flex items-center justify-center shadow-lg shadow-orange-600/40">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">92%</span>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-mono">Match</span>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-950 text-orange-300 text-xs font-bold border border-orange-700/80 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> High Resonance Score
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Overall Audience Match</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  Evaluated against 12,500+ top-performing marketing campaigns in Healthcare B2B.
                </p>
              </div>
            </div>

            {/* Quick Export Certification Badge */}
            <div className="z-10 flex flex-col items-end gap-2 text-center md:text-right">
              <span className="px-3 py-1.5 rounded-xl bg-orange-950/90 border border-orange-700/60 text-orange-200 text-xs font-mono font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-orange-400" /> Express Validation Certified
              </span>
              <span className="text-[11px] text-slate-500">Scan ID: #AL-9982-EXPRESS</span>
            </div>

            {/* Glowing background circle */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl" />
          </div>

          {/* 6 Sub-Score Progress Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                  <span>{m.label}</span>
                  <span className={`font-mono ${m.text}`}>{m.score}%</span>
                </div>

                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div className={`h-full rounded-full ${m.color} transition-all duration-1000`} style={{ width: `${m.score}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Expandable AI Recommendations Accordion */}
          <div className="mt-10 space-y-4">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-orange-400" /> AI Recommendations ({recommendations.length})
            </h4>

            {recommendations.map((rec) => {
              const isExpanded = expandedRec === rec.id;
              const IconComponent = rec.icon;

              return (
                <div
                  key={rec.id}
                  className={`bg-slate-950 rounded-2xl border transition-all overflow-hidden ${
                    isExpanded ? 'border-orange-500/50 shadow-lg' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedRec(isExpanded ? null : rec.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 rounded-xl bg-orange-950 text-orange-400 border border-orange-800/50">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{rec.category}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-orange-950 text-orange-300 font-mono font-bold border border-orange-800/60">
                            {rec.confidence}
                          </span>
                        </div>
                        <h5 className="text-base font-bold text-white mt-0.5">
                          {rec.title}
                        </h5>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-950 text-orange-300 border border-orange-800/50 hidden sm:inline-block">
                        {rec.impact}
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-orange-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                    </div>
                  </button>

                  {/* Expanded Content Body */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 bg-slate-900/50 space-y-3 text-xs sm:text-sm text-slate-300">
                      <p className="leading-relaxed">{rec.summary}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-slate-500 font-mono">Adobe Express Plugin Engine v4.2</span>
                        <button className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> {rec.actionText}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
