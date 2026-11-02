import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Save to localStorage simulation
      const currentList = JSON.parse(localStorage.getItem('mbs_waitlist') || '[]');
      currentList.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('mbs_waitlist', JSON.stringify(currentList));

      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#13B5CE', '#38d8f0', '#FFFFFF', '#0B2A4A'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8 px-4">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-mbs-cyan/30 shadow-glow-cyan/20">
        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Get Early VIP Access
              </h3>
              <p className="text-sm text-mbs-slate-light">
                Join founders, enterprise leaders, and partners on our exclusive launch list.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-mbs-navy-dark/80 border border-slate-700 focus:border-mbs-cyan text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-mbs-cyan/30 transition-all"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-mbs-cyan to-blue-600 hover:from-mbs-cyan-light hover:to-blue-500 text-mbs-navy-dark font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-mbs-cyan/25 hover:shadow-glow-cyan transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-mbs-navy-dark border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <p className="text-xs text-rose-400 text-left mt-1 pl-1">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-mbs-cyan" />
                <span>Zero spam. Strict enterprise privacy. Unsubscribe anytime.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3 animate-fade-in">
            <div className="inline-flex p-3 rounded-full bg-mbs-cyan/15 text-mbs-cyan mb-1">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">You're on the VIP Launch List!</h4>
            <p className="text-sm text-mbs-slate-light max-w-sm mx-auto">
              Thank you for connecting with <span className="text-white font-medium">MBS</span>. We will notify you immediately upon platform release with private preview access.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
              }}
              className="text-xs text-mbs-cyan hover:underline inline-flex items-center gap-1 pt-2"
            >
              Register another email <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

