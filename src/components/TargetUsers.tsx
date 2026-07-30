import React from 'react';
import { Users, Store, Sparkles, Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export const TargetUsers: React.FC = () => {
  const personas = [
    {
      title: "Marketing Teams",
      desc: "Ensure every social asset, campaign banner, and digital ad aligns strictly with brand guidelines and target persona expectations.",
      icon: Users,
      badge: "Enterprise & Growth",
      color: "from-orange-500 to-amber-600",
      benefit: "Reduce campaign iteration cycles by 60%"
    },
    {
      title: "Small Businesses",
      desc: "Create high-converting promotional flyers and announcements with the confidence of an in-house consumer research team.",
      icon: Store,
      badge: "Local & E-Commerce",
      color: "from-amber-500 to-red-600",
      benefit: "Maximize return on local ad spend"
    },
    {
      title: "Content Creators",
      desc: "Validate thumbnail legibility, color emotion, and hook text across Instagram, YouTube Shorts, and TikTok before publishing.",
      icon: Sparkles,
      badge: "Social & Digital",
      color: "from-red-500 to-orange-600",
      benefit: "Boost average view-through rate by 35%"
    },
    {
      title: "Freelance Designers",
      desc: "Deliver client-ready designs with instant AI verification reports that prove why your design choices will convert.",
      icon: Briefcase,
      badge: "Design Professionals",
      color: "from-orange-600 to-yellow-600",
      benefit: "Win client approvals on the first draft"
    },
    {
      title: "Agencies & Studios",
      desc: "Standardize quality control across dozens of client accounts and ensure brand voice consistency across global teams.",
      icon: Building2,
      badge: "Multi-Client Scale",
      color: "from-amber-600 to-orange-500",
      benefit: "Scale monthly asset production 3x"
    },
    {
      title: "Educators & Nonprofits",
      desc: "Craft accessible, high-contrast infographics and learning slide decks that maximize student engagement and readability.",
      icon: GraduationCap,
      badge: "Education & Impact",
      color: "from-red-600 to-amber-600",
      benefit: "Ensure WCAG 2.1 AAA accessibility compliance"
    }
  ];

  return (
    <section id="target-users" className="py-20 md:py-28 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Users className="w-3.5 h-3.5 text-orange-400" />
            <span>Built For Modern Creators & Teams</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for anyone who creates in <span className="text-gradient-orange">Adobe Express</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you are scaling a solo creator brand or managing multi-million dollar corporate campaigns.
          </p>
        </div>

        {/* 6 Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D14] rounded-3xl p-6 sm:p-7 border border-slate-800/90 shadow-xl hover:shadow-orange-950/30 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-lg shadow-orange-950/40 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-900 text-orange-400 border border-orange-500/30 font-mono">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center text-xs font-bold text-orange-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-orange-400" />
                  <span>{p.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
