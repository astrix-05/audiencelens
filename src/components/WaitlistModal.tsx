import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Copy, Check, ShieldCheck } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Marketer');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://audiencelens.ai/vip?ref=${encodeURIComponent(name || 'creator')}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0D0D14] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-orange-500/40 shadow-2xl relative overflow-hidden text-white glow-orange">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950 text-orange-400 text-xs font-bold border border-orange-700/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Early VIP Access
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Early Access to AudienceLens
            </h3>

            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Join 4,500+ creators and marketers validating their Adobe Express designs before publishing.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Work or Personal Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Primary Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-white text-sm transition-all"
                >
                  <option value="Marketer">Marketing Manager / Lead</option>
                  <option value="Creator">Social Media Creator</option>
                  <option value="Freelancer">Freelance Designer</option>
                  <option value="Agency">Agency Owner / Director</option>
                  <option value="Small Business">Small Business Owner</option>
                  <option value="Educator">Educator / Instructional</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-orange-gradient text-white font-bold text-sm shadow-xl shadow-orange-600/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve My Spot & Free 100 Scans</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>Zero Spam. Unsubscribe at any time.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-orange-950 text-orange-400 border border-orange-700/60 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">You're on the VIP List! 🎉</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              Thanks <span className="font-bold text-white">{name || 'there'}</span>! We've sent a confirmation email to <span className="font-semibold text-orange-400">{email}</span>.
            </p>

            {/* Referral Link Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-orange-500/30 text-left space-y-2">
              <span className="text-xs font-bold text-orange-300 block">Move up the waitlist (Share your invite link):</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={`https://audiencelens.ai/vip?ref=${encodeURIComponent(name || 'creator')}`}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
