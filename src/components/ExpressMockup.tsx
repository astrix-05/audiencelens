import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, Wand2, Eye, ShieldCheck, ArrowRight, Zap, Layers, Type, Palette, UserCheck } from 'lucide-react';

export const ExpressMockup: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<'genz' | 'healthcare' | 'b2b'>('genz');
  const [fixesApplied, setFixesApplied] = useState<{ [key: string]: boolean }>({});

  const toggleFix = (key: string) => {
    setFixesApplied(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Audience Profiles Configuration
  const audienceProfiles = {
    genz: {
      name: 'Gen Z Mobile Creators',
      desc: 'Ages 18-26 • Instagram & TikTok • Energetic & Bold',
      baseScore: 88,
      canvasTitle: 'SUMMER DROP 2026',
      canvasCopy: 'Level up your streetwear drip with 50% off limited items.',
      canvasFont: fixesApplied['genz-font'] ? 'font-sans tracking-wide font-black' : 'font-serif tracking-tight font-normal',
      canvasBg: fixesApplied['genz-bg'] ? 'bg-gradient-to-tr from-orange-600 via-amber-600 to-red-600' : 'bg-slate-950',
      canvasColor: 'text-white',
      suggestions: [
        {
          id: 'genz-bg',
          type: 'Color Psychology',
          icon: Palette,
          warning: 'Dark muted background lowers Gen Z click-through by 32%.',
          fixText: 'Apply Electric Orange Flame Preset',
          appliedText: 'Electric Orange Gradient Active',
          impact: '+12% Match'
        },
        {
          id: 'genz-font',
          type: 'Typography',
          icon: Type,
          warning: 'Serif font feels too formal for streetwear drop.',
          fixText: 'Switch to Bold Sans Display font',
          appliedText: 'Bold Sans Display Applied',
          impact: '+8% Legibility'
        }
      ]
    },
    healthcare: {
      name: 'Healthcare & Wellness',
      desc: 'Patients 35-60 • Patient Trust & Clarity • High Contrast',
      baseScore: 68,
      canvasTitle: 'COMPLETE HEART CARE',
      canvasCopy: 'Compassionate medical care designed around your family needs.',
      canvasFont: fixesApplied['hc-font'] ? 'font-sans text-xl font-bold' : 'font-sans text-sm font-normal',
      canvasBg: fixesApplied['hc-bg'] ? 'bg-gradient-to-r from-emerald-800 to-teal-900' : 'bg-gradient-to-r from-red-600 to-amber-600',
      canvasColor: 'text-white',
      suggestions: [
        {
          id: 'hc-bg',
          type: 'Brand Trust',
          icon: ShieldCheck,
          warning: 'Red hue triggers emergency anxiety in clinical contexts.',
          fixText: 'Apply Trust Teal & Emerald Palette',
          appliedText: 'Trust Teal Applied',
          impact: '+18% Trust'
        },
        {
          id: 'hc-font',
          type: 'Accessibility',
          icon: Eye,
          warning: 'Font size 12px fails WCAG 2.1 for 50+ age demographic.',
          fixText: 'Enlarge Body Text to 18px',
          appliedText: 'Text Enlarged to 18px',
          impact: '+8% Readability'
        }
      ]
    },
    b2b: {
      name: 'Executive B2B Tech',
      desc: 'C-Suite Decision Makers • Professional & Clear • High ROI',
      baseScore: 74,
      canvasTitle: 'ENTERPRISE AI ANALYTICS',
      canvasCopy: fixesApplied['b2b-copy'] ? 'Scale operational throughput by 40% with predictive data models.' : 'Supercharge your biz hype with insane AI rocket power! 🔥🚀',
      canvasFont: 'font-sans font-bold',
      canvasBg: 'bg-slate-950 border border-orange-500/20',
      canvasColor: 'text-slate-100',
      suggestions: [
        {
          id: 'b2b-copy',
          type: 'Tone of Voice',
          icon: Wand2,
          warning: 'Casual slang & emojis reduce executive conversion by 45%.',
          fixText: 'Refine Copy for Enterprise ROI',
          appliedText: 'Enterprise Tone Applied',
          impact: '+18% Credibility'
        }
      ]
    }
  };

  const current = audienceProfiles[activeAudience];
  const appliedCount = Object.keys(fixesApplied).filter(k => k.startsWith(activeAudience.substring(0, 2)) && fixesApplied[k]).length;
  const currentScore = appliedCount > 0 ? Math.min(98, current.baseScore + (appliedCount * 8)) : current.baseScore;

  return (
    <div className="w-full bg-[#0D0D12] rounded-3xl p-3 sm:p-5 shadow-2xl border border-orange-500/30 text-slate-100 overflow-hidden glow-orange">
      {/* Top Header of Adobe Express Simulation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80 px-2">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
            Ex
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-slate-200">Adobe Express</span>
              <span className="text-slate-600">/</span>
              <span className="text-xs text-orange-400 font-medium bg-orange-950/80 px-2 py-0.5 rounded border border-orange-700/50 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-400" /> AudienceLens Add-on
              </span>
            </div>
          </div>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <span className="text-xs text-slate-400 px-2 hidden lg:inline font-mono">Target:</span>
          {(['genz', 'healthcare', 'b2b'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveAudience(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeAudience === key
                  ? 'bg-orange-gradient text-white shadow-md shadow-orange-900/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {key === 'genz' ? 'Gen Z D2C' : key === 'healthcare' ? 'Healthcare B2C' : 'Tech B2B'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Canvas Simulator + Right AI Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Adobe Express Editor Canvas */}
        <div className="lg:col-span-7 bg-[#07070A] rounded-2xl border border-slate-800/80 p-4 flex flex-col justify-between relative min-h-[380px] sm:min-h-[420px] overflow-hidden group">
          
          {/* Canvas Toolbar Simulation */}
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800/50">
            <div className="flex items-center space-x-3">
              <span className="bg-slate-900 px-2 py-1 rounded text-[11px] font-mono text-orange-400 border border-orange-500/20">1080 x 1350px</span>
              <span>100% Zoom</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              <span className="text-orange-400 font-medium text-[11px]">Live AI Analysis Active</span>
            </div>
          </div>

          {/* Rendered Design Artwork */}
          <div className={`my-4 p-8 sm:p-10 rounded-2xl ${current.canvasBg} transition-all duration-500 flex flex-col justify-center items-center text-center shadow-2xl relative`}>
            
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,136,0,0.2),transparent)] rounded-2xl pointer-events-none" />

            <div className="space-y-4 max-w-md relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-orange-300 border border-orange-500/30">
                {activeAudience === 'genz' ? '🔥 Limited Drop' : activeAudience === 'healthcare' ? '❤️ Health Priority' : '⚡ AI Platform'}
              </span>

              <h2 className={`text-2xl sm:text-3xl ${current.canvasFont} ${current.canvasColor} leading-tight transition-all duration-300`}>
                {current.canvasTitle}
              </h2>

              <p className={`text-sm sm:text-base ${current.canvasColor} opacity-90 transition-all duration-300 leading-relaxed font-medium`}>
                {current.canvasCopy}
              </p>

              <div className="pt-2">
                <button className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Footer bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-900">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-orange-400" /> Layer 3: Typography & Color
            </span>
            <span className="text-orange-400 font-mono text-[11px]">AudienceLens v2.4 Active</span>
          </div>
        </div>

        {/* Right: AudienceLens AI Add-On Sidebar */}
        <div className="lg:col-span-5 bg-[#08080C] rounded-2xl border border-orange-500/40 p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-xl relative">
          
          {/* Subtle top glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Sidebar Top Title */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-lg bg-orange-950/80 text-orange-400 border border-orange-700/50">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-100">AudienceLens Analysis</h3>
                  <p className="text-[11px] text-slate-400">{current.name}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-mono border border-orange-500/30">
                AI Engine 4.2
              </span>
            </div>

            {/* Score Ring / Gauge Header */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Audience Resonance Fit</span>
                <div className="flex items-baseline space-x-2 mt-0.5">
                  <span className={`text-3xl font-extrabold ${currentScore >= 90 ? 'text-orange-400' : currentScore >= 75 ? 'text-amber-400' : 'text-rose-400'}`}>
                    {currentScore}%
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ 100% target</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="text-right">
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                  currentScore >= 90 ? 'bg-orange-950 text-orange-300 border border-orange-700/60' : 'bg-amber-950 text-amber-300 border border-amber-800/60'
                }`}>
                  {currentScore >= 90 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Ready to Publish
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Action Needed
                    </>
                  )}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">Updated 1s ago</p>
              </div>
            </div>
          </div>

          {/* Actionable AI Suggestions List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Wand2 className="w-3.5 h-3.5 text-orange-400" /> Recommended Improvements
              </span>
              <span className="text-[11px] text-slate-500">{current.suggestions.length} items</span>
            </div>

            {current.suggestions.map((sug) => {
              const isApplied = fixesApplied[sug.id];
              const IconComp = sug.icon;

              return (
                <div
                  key={sug.id}
                  className={`p-3 rounded-xl border transition-all ${
                    isApplied
                      ? 'bg-orange-950/40 border-orange-500/50 text-orange-200'
                      : 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-orange-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start space-x-2.5">
                      <div className={`p-1.5 rounded-lg mt-0.5 ${isApplied ? 'bg-orange-900/60 text-orange-300' : 'bg-orange-950 text-orange-400'}`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-200">{sug.type}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-950 text-orange-300 font-mono border border-orange-800/50">
                            {sug.impact}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                          {isApplied ? sug.appliedText : sug.warning}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Fix Button */}
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Express Auto-Fix</span>
                    <button
                      onClick={() => toggleFix(sug.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isApplied
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900'
                          : 'bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-900/40'
                      }`}
                    >
                      {isApplied ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Applied
                        </>
                      ) : (
                        <>
                          <Zap className="w-3 h-3 text-amber-300 fill-amber-300" /> {sug.fixText}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Footer Info */}
          <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-orange-400" /> Verified with 10k+ audience data points
            </span>
            <button className="text-orange-400 hover:underline flex items-center gap-0.5 font-medium">
              Full Report <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
