import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import { Check, X } from 'lucide-react';
import { ArcRadiusLogoSmall } from '../components/ui/ArcRadiusLogo';
import {
  FEATURES,
  TECHNIQUES,
  TECH_STACK,
  PIPELINES,
  COMPETITORS,
  STARTUPS,
  ESTABLISHED_PLAYERS,
  AREA_COLORS,
  FEATURE_ICON_COLORS,
} from '../data';
import type { MarketPlayer } from '../types';

function StartupCard({ player }: { player: MarketPlayer }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold">{player.name}</h4>
        <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}>{player.stage}</span>
      </div>
      <p className="text-sm text-slate-500 mb-3">{player.product}</p>
      <div className="text-xs text-slate-400 mb-3"><span className="font-semibold text-slate-500">Target:</span> {player.customer}</div>
      <div className="rounded-lg p-3" style={{ backgroundColor: '#FDB51515' }}>
        <div className="text-xs font-semibold mb-1" style={{ color: '#b8860b' }}>Gap vs. Arc Radius</div>
        <p className="text-xs" style={{ color: '#9a7209' }}>{player.gap}</p>
      </div>
    </div>
  );
}

function EstablishedCard({ player }: { player: MarketPlayer }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold">{player.name}</h4>
        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">{player.stage}</span>
      </div>
      <p className="text-sm text-slate-500 mb-3">{player.product}</p>
      <div className="text-xs text-slate-400 mb-3"><span className="font-semibold text-slate-500">Target:</span> {player.customer}</div>
      <div className="rounded-lg p-3 mb-3" style={{ backgroundColor: '#FDB51515' }}>
        <div className="text-xs font-semibold mb-1" style={{ color: '#b8860b' }}>Gap vs. Arc Radius</div>
        <p className="text-xs" style={{ color: '#9a7209' }}>{player.gap}</p>
      </div>
      {player.relationship && (
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#001d3a' }} />
          <span className="text-xs font-semibold" style={{ color: '#001d3a' }}>{player.relationship}</span>
        </div>
      )}
    </div>
  );
}

export default function SolutionPage() {
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ═══ Page Hero ═══ */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}>
            The Solution
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001d3a] mb-4">
            How Arc Radius Works
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
            Navigate rights, resources, and support — understand how legislation affects LGBTQ+ young adults and get the tools to respond.
          </p>
        </div>
      </section>

      {/* ═══ Features Deep Dive ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-start`}
            >
              {/* Icon + number */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: FEATURE_ICON_COLORS[i] }}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-300">0{i + 1}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#001d3a] mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.split(' · ').map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Technical Architecture ═══ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="Architecture"
            tagBg="#FDB51520"
            tagColor="#b8860b"
            title="Technical Deep Dive"
            subtitle="From bill classification to knowledge graph — the full pipeline powering Arc Radius."
          />

          {/* Pipeline steps */}
          <div className="rounded-2xl p-8 md:p-12 text-white mb-12" style={{ backgroundColor: '#001d3a' }}>
            <h3 className="text-xl font-semibold mb-2 text-center">Data Pipeline</h3>
            <p className="text-white/50 text-center text-sm mb-8">Feature-specific data flows</p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {PIPELINES.map((pipe) => (
                <div key={pipe.feature} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <span className="text-xs font-semibold" style={{ color: '#FDB515' }}>{pipe.feature}</span>
                  <p className="text-xs text-white/40 mt-1 font-mono">{pipe.flow}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TECH_STACK.map((stack, i) => (
                <div key={i}>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">{stack.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span key={item} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/70">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques grid */}
          <h3 className="text-xl font-semibold text-[#001d3a] mb-6 text-center">Data Science Techniques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNIQUES.map((tech, i) => {
              const ac = AREA_COLORS[tech.area] || { bg: '#f1f5f9', color: '#475569' };
              return (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 hover:border-slate-300 transition-all">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3" style={{ backgroundColor: ac.bg, color: ac.color }}>{tech.area}</span>
                  <h4 className="font-semibold text-sm text-[#001d3a] mb-2">{tech.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Market Landscape ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeader
            tag="Market"
            tagBg="#f1f5f9"
            tagColor="#475569"
            title="Market Landscape"
            subtitle="Understanding the competitive environment and partnership opportunities."
          />

          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}>Emerging Startups</span>
            <div className="grid md:grid-cols-3 gap-4">{STARTUPS.map((p, i) => <StartupCard key={i} player={p} />)}</div>
          </div>

          <div>
            <span className="inline-block text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundColor: '#001d3a' }}>Established Players</span>
            <div className="grid md:grid-cols-3 gap-4">{ESTABLISHED_PLAYERS.map((p, i) => <EstablishedCard key={i} player={p} />)}</div>
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/60">
            <h4 className="text-lg font-semibold text-[#001d3a] mb-6 text-center">Feature Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    {['Platform', 'Resource Discovery', 'Policy Tracking', 'Crisis Support'].map((h) => (
                      <th key={h} className={`py-3 px-3 font-semibold text-slate-500 text-xs uppercase tracking-wider ${h === 'Platform' ? 'text-left' : 'text-center'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((comp, i) => (
                    <tr key={i} className={`border-b border-slate-100 ${comp.highlight ? 'bg-[#001d3a08]' : ''}`}>
                      <td className={`py-3 px-3 font-semibold ${comp.highlight ? 'text-[#001d3a]' : 'text-slate-700'}`}>
                        <div className="flex items-center gap-2">
                          {comp.highlight && <ArcRadiusLogoSmall size={20} />}
                          <span>{comp.name}</span>
                        </div>
                      </td>
                      {[comp.resources, comp.policy, comp.crisis].map((val, j) => (
                        <td key={j} className="text-center py-3 px-3">
                          {val ? <Check className="inline" size={18} style={{ color: '#001d3a' }} /> : <X className="inline text-slate-300" size={18} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm">
              Arc Radius is the <span className="font-semibold text-[#001d3a]">only platform</span> combining all three critical functions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
