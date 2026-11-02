import React from 'react';
import { Cpu, TrendingUp, Compass, Layers, ArrowUpRight } from 'lucide-react';

interface Pillar {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

export const CorePillars: React.FC = () => {
  const pillars: Pillar[] = [
    {
      title: 'Digital & Cloud Transformation',
      tagline: 'Modern Enterprise Tech',
      description: 'Building resilient cloud infrastructure, custom software architecture, and modernizing legacy enterprise systems.',
      icon: Cpu,
      badge: 'Technology',
    },
    {
      title: 'Operational Excellence & AI',
      tagline: 'Streamlined Workflows',
      description: 'Re-engineering critical processes with smart automation, workflow efficiency, and intelligent data intelligence.',
      icon: TrendingUp,
      badge: 'Operations',
    },
    {
      title: 'Strategic Corporate Advisory',
      tagline: 'Sustainable Growth',
      description: 'High-level business consulting, organizational design, capital efficiency, and market expansion advisory.',
      icon: Compass,
      badge: 'Strategy',
    },
    {
      title: 'Integrated Multi-Business Services',
      tagline: 'End-to-End Scale',
      description: 'Unifying multi-discipline corporate services under one cohesive, client-centric umbrella for seamless scaling.',
      icon: Layers,
      badge: 'Ecosystem',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs uppercase tracking-widest text-mbs-cyan font-bold mb-2">
          What We're Building
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Four Pillars of Multi-Business Impact
        </h3>
        <p className="text-sm text-mbs-slate-light mt-3">
          MBS combines strategic intellect with technological craftsmanship to empower modern enterprises from the ground up.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden border border-slate-800/80 hover:border-mbs-cyan/50"
            >
              {/* Background ambient gradient glow on hover */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-mbs-cyan/10 rounded-full blur-2xl group-hover:bg-mbs-cyan/25 transition-all duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-mbs-navy-card border border-mbs-cyan/30 flex items-center justify-center text-mbs-cyan group-hover:scale-110 group-hover:text-white group-hover:bg-mbs-cyan/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-mbs-slate-light border border-slate-700/50">
                    {pillar.badge}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-mbs-cyan tracking-wider uppercase mb-1">
                  {pillar.tagline}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-mbs-cyan transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-mbs-slate-light group-hover:text-mbs-cyan transition-colors">
                <span>Explore Pillar</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

