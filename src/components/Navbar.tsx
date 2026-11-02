import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-mbs-navy-dark/70 border-b border-mbs-cyan/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-mbs-cyan to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-12 h-12 rounded-xl bg-mbs-navy-card border border-mbs-cyan/30 flex items-center justify-center p-1.5 shadow-md">
              <img
                src="./mbs_logo_dark_theme.svg"
                alt="MBS Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-wider text-white">MBS</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-mbs-cyan/10 text-mbs-cyan border border-mbs-cyan/25">
                <span className="w-1.5 h-1.5 rounded-full bg-mbs-cyan animate-pulse"></span>
                Coming Soon
              </span>
            </div>
            <p className="text-xs text-mbs-slate-light tracking-widest uppercase font-medium">
              Multi Business Services
            </p>
          </div>
        </div>

        {/* Right Action: Status & Inquiries */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-300 px-3 py-1.5 rounded-lg bg-mbs-navy/40 border border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5 text-mbs-cyan animate-spin" style={{ animationDuration: '8s' }} />
            <span>Platform v1.0 Launching Soon</span>
          </div>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-mbs-cyan/15 hover:bg-mbs-cyan text-mbs-cyan hover:text-mbs-navy-dark border border-mbs-cyan/40 hover:border-mbs-cyan transition-all duration-300 shadow-sm hover:shadow-glow-cyan"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Founder</span>
          </button>
        </div>
      </div>
    </header>
  );
};

