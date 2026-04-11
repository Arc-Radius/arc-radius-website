import { AlertTriangle, Heart, Scale, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { STATS } from '../../data';

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="The Problem"
          tagBg="#FDB51520"
          tagColor="#b8860b"
          title="A Mental Health Crisis"
          subtitle="LGBTQ+ youth in the United States face a mental health crisis of unprecedented proportions. Data from The Trevor Project's 2024 National Survey of 18,000+ youth ages 13-24 paints a stark picture."
        />

        {/* Stat cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                stat.highlight ? 'text-white' : 'bg-white border border-slate-200/60'
              }`}
              style={stat.highlight ? { backgroundColor: '#001d3a' } : undefined}
            >
              <div
                className="text-3xl font-semibold tracking-tight mb-1"
                style={stat.highlight ? { color: '#FDB515' } : { color: '#001d3a' }}
              >
                {stat.value}
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  stat.highlight ? 'text-white/60' : 'text-slate-500'
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core problem card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/60">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#FDB51520' }}
            >
              <AlertTriangle style={{ color: '#b8860b' }} size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#001d3a] mb-2">
                The Core Problem
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                LGBTQ+ youth lack a unified, intelligent platform that combines
                local resource discovery with real-time policy awareness and
                crisis support connections. Current solutions are fragmented
                across multiple apps, websites, and organizations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: Heart, color: '#FDB515', title: 'Healthcare Gap', desc: '84% want care, but only half can access it' },
              { icon: Scale, color: '#001d3a', title: 'Policy Chaos', desc: '375+ active anti-LGBTQ bills across 43+ states' },
              { icon: AlertTriangle, color: '#FDB515', title: 'Discrimination', desc: '60% faced discrimination based on identity' },
              { icon: Users, color: '#001d3a', title: 'Family Impact', desc: '45% of trans youth families considered relocating' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="shrink-0 mt-0.5" size={18} style={{ color: item.color }} />
                <div>
                  <div className="font-semibold text-sm mb-1">{item.title}</div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
