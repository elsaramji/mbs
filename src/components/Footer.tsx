import React from 'react';
import { Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-mbs-navy-dark/90 backdrop-blur-md mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-mbs-navy-card border border-mbs-cyan/30 flex items-center justify-center p-1.5">
              <img
                src="./mbs_logo_dark_theme.svg"
                alt="MBS Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-wider">MBS</span>
              <p className="text-xs text-mbs-slate-light">Multi Business Services</p>
            </div>
          </div>

          {/* Founder Contact Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 text-mbs-slate-light hover:text-mbs-cyan transition"
            >
              <Mail className="w-4 h-4 text-mbs-cyan" />
              <span>mahmoudelsaramegy@gmail.com</span>
            </button>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <span className="text-slate-400 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-mbs-cyan" />
              <span>Global Enterprise Scope</span>
            </span>
          </div>

          {/* Back to top */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-mbs-cyan hover:text-mbs-navy-dark text-slate-400 text-xs font-semibold transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-6 gap-2">
          <p>© {new Date().getFullYear()} MBS (Multi Business Services). All rights reserved.</p>
          <p>Founded & Directed by Mahmoud Elsaramegy</p>
        </div>
      </div>
    </footer>
  );
};

