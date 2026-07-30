import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "AudienceLens caught a contrast and typography flaw in our healthcare social campaign that would have rendered our posts illegible for our senior patient demographic. It saved us from a costly re-launch.",
      author: "Elena Rostova",
      role: "Head of Growth Marketing",
      company: "HealthPulse Global",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      verified: "Verified Adobe Express Creator"
    },
    {
      quote: "As a freelance designer, convincing clients why a specific color palette or font scale works used to take endless emails. AudienceLens provides instant AI reports that prove design choices backed by data.",
      author: "Marcus Chen",
      role: "Senior Brand Designer",
      company: "Studio Apex",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      verified: "Adobe Community Ambassador"
    },
    {
      quote: "Our team creates over 100 social assets per month inside Adobe Express. Having an instant Audience Fit Score directly in the side panel ensures our brand tone stays consistent across 5 global regions.",
      author: "Sarah Jenkins",
      role: "Creative Operations Lead",
      company: "Verve D2C Brands",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      verified: "Enterprise Adobe User"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700/60 text-xs font-bold text-orange-400">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Loved By Creators & Marketers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by creators who demand <span className="text-gradient-orange">high conversion</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how creative leaders use AudienceLens to publish with 100% confidence.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D14] rounded-3xl p-7 border border-slate-800/90 shadow-xl hover:shadow-orange-950/30 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic relative">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-900 flex items-center space-x-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/40"
                />
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-400">{rev.role} • <span className="font-semibold text-slate-200">{rev.company}</span></p>
                  <div className="flex items-center gap-1 text-[10px] text-orange-400 font-semibold mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-orange-400" /> {rev.verified}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
