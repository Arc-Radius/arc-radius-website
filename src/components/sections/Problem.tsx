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
          title="Policy, Information, and Trust"
          subtitle="LGBTQ+ young adults in the U.S. are navigating a rapidly evolving and often hostile policy landscape without accessible ways to see how legislation affects their rights and daily lives. Survey data still paints a stark wellbeing picture — The Trevor Project’s 2024 National Survey of 18,000+ youth ages 13–24 is one window into that harm."
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
                Information about bills exists, but it is scattered, written in technical legal language, and hard to
                connect to your situation. It is difficult to know what is reliable, whether a measure affects you
                personally, and what actions — if any — make sense. Arc Radius exists to move people from confusion and
                uncertainty toward understanding and informed civic action, with crisis and resources available when
                support matters as much as policy clarity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                icon: Heart,
                color: '#FDB515',
                title: 'Healthcare stress',
                desc: '84% want mental health care, but only half can access it — policy and access barriers stack on top of politics',
              },
              {
                icon: Scale,
                color: '#001d3a',
                title: 'Legislative volume',
                desc: '600+ anti-LGBTQ+ bills introduced in state legislatures in 2025 (ACLU); bills touch healthcare, schools, IDs, public life, and more',
              },
              {
                icon: AlertTriangle,
                color: '#FDB515',
                title: 'Hostile climate',
                desc: '60% faced discrimination based on identity — daily safety and dignity are on the line',
              },
              {
                icon: Users,
                color: '#001d3a',
                title: 'Family decisions',
                desc: '45% of trans/nonbinary youth families have considered relocating because of anti-LGBTQ+ policy',
              },
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
