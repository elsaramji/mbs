import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <div className="relative text-center pt-12 pb-6 px-4 max-w-4xl mx-auto">
      {/* Upper Status Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mbs-navy-card/80 border border-mbs-cyan/30 text-slate-200 text-xs font-medium mb-6 shadow-glow-cyan/10">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mbs-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-mbs-cyan"></span>
        </span>
        <span className="text-slate-300">Engineering the Future of Enterprise Solutions</span>
        <Sparkles className="w-3.5 h-3.5 text-mbs-cyan ml-1" />
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Next-Generation <br className="hidden sm:inline" />
        <span className="text-gradient-cyan">Multi Business Services</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-base sm:text-xl text-mbs-slate-light max-w-2xl mx-auto leading-relaxed mb-8">
        MBS is engineering an integrated ecosystem bridging <span className="text-white font-medium">digital transformation</span>, <span className="text-white font-medium">operational optimization</span>, and <span className="text-white font-medium">strategic corporate growth</span>.
      </p>

      {/* Action CTA buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#notify"
          className="px-6 py-3 rounded-xl bg-mbs-cyan hover:bg-mbs-cyan-light text-mbs-navy-dark font-bold text-sm shadow-glow-cyan hover:shadow-glow-cyan-lg transition-all duration-300 flex items-center gap-2"
        >
          <span>Join VIP Waitlist</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

        <button
          onClick={onOpenContact}
          className="px-6 py-3 rounded-xl bg-mbs-navy-card/90 hover:bg-mbs-navy border border-slate-700 hover:border-mbs-cyan text-white text-sm font-semibold transition-all duration-300"
        >
          Partner Inquiries
        </button>
      </div>
    </div>
  );
};

