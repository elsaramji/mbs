import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';

export const ReadinessRoadmap: React.FC = () => {
  const milestones = [
    { label: 'Core Infrastructure & Architecture', status: 'completed', icon: CheckCircle2 },
    { label: 'Brand Identity & Ecosystem Design', status: 'completed', icon: CheckCircle2 },
    { label: 'Service Framework & Client Portal', status: 'in-progress', icon: Clock },
    { label: 'Security Auditing & Public Unveiling', status: 'upcoming', icon: Zap },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-mbs-cyan font-bold">
                Platform Development Status
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                On Track
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              85% Readiness Completed
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-mbs-slate-light bg-mbs-navy-dark/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-mbs-cyan" />
            <span>Target Launch: Q1 2027</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 rounded-full h-3 p-0.5 overflow-hidden mb-6 border border-slate-800">
          <div
            className="bg-gradient-to-r from-mbs-cyan via-blue-500 to-cyan-400 h-full rounded-full transition-all duration-1000 shadow-glow-cyan"
            style={{ width: '85%' }}
          ></div>
        </div>

        {/* Milestone Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, index) => {
            const Icon = m.icon;
            const isCompleted = m.status === 'completed';
            const isInProgress = m.status === 'in-progress';

            return (
              <div
                key={index}
                className={`p-3.5 rounded-xl border transition-all ${
                  isCompleted
                    ? 'bg-mbs-navy-card/40 border-mbs-cyan/30 text-white'
                    : isInProgress
                    ? 'bg-mbs-cyan/10 border-mbs-cyan text-mbs-cyan animate-pulse-slow'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`w-4 h-4 ${
                      isCompleted
                        ? 'text-mbs-cyan'
                        : isInProgress
                        ? 'text-mbs-cyan'
                        : 'text-slate-600'
                    }`}
                  />
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    {isCompleted ? 'Phase Complete' : isInProgress ? 'Active Development' : 'Upcoming'}
                  </span>
                </div>
                <p className="text-xs font-medium leading-snug">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

