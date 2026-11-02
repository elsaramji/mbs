import React, { useState } from 'react';
import { X, Mail, Copy, Check, Send, User, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const founderEmail = 'mahmoudelsaramegy@gmail.com';
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;

    setLoading(true);

    // Create mailto link as fallback / direct option or simulate local transmission
    const mailtoUrl = `mailto:${founderEmail}?subject=MBS Early Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(mailtoUrl, '_blank');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-mbs-cyan/40 shadow-glow-cyan-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-mbs-cyan/20 border border-mbs-cyan/40 flex items-center justify-center text-mbs-cyan">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Direct Founder Inquiry</h3>
            <p className="text-xs text-mbs-slate-light">
              Connect directly with the founder of MBS
            </p>
          </div>
        </div>

        {/* Quick Email Copy Bar */}
        <div className="mb-6 p-3 rounded-xl bg-mbs-navy-dark/90 border border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs text-slate-400">Email:</span>
            <span className="text-sm font-mono text-mbs-cyan truncate select-all">
              {founderEmail}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {!sent ? (
          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-mbs-navy-dark/80 border border-slate-700 focus:border-mbs-cyan text-white text-sm focus:outline-none focus:ring-1 focus:ring-mbs-cyan"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-mbs-navy-dark/80 border border-slate-700 focus:border-mbs-cyan text-white text-sm focus:outline-none focus:ring-1 focus:ring-mbs-cyan"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Message / Partnership Proposal
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your organization or inquiry..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-mbs-navy-dark/80 border border-slate-700 focus:border-mbs-cyan text-white text-sm focus:outline-none focus:ring-1 focus:ring-mbs-cyan resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-mbs-cyan to-blue-600 hover:from-mbs-cyan-light hover:to-blue-500 text-mbs-navy-dark font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-mbs-cyan/20 hover:shadow-glow-cyan transition duration-200"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-mbs-navy-dark border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Inquiry Initialized</h4>
            <p className="text-xs text-slate-300">
              Your default email client has been prepared with your message to{' '}
              <span className="text-mbs-cyan font-mono">{founderEmail}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

