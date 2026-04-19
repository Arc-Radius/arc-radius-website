import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import { Check, ExternalLink, Play } from 'lucide-react';
import { ArcRadiusLogoSmall } from '../components/ui/ArcRadiusLogo';
import {
  FEATURES,
  TECHNIQUES,
  TECH_STACK,
  PIPELINES,
  MARKET_LANDSCAPE_COLUMNS,
  MARKET_LANDSCAPE_FEATURES,
  ESTABLISHED_PLAYERS,
  AREA_COLORS,
  FEATURE_ICON_COLORS,
} from '../data';
import type { MarketPlayer } from '../types';

const PRODUCT_URL = 'https://arcradi.us';

/** Muted gold for matrix checks & Arc Radius column — similar visual weight to slate-400 labels */
const MARKET_MATRIX_GOLD = '#b8860b';

function EstablishedCard({ player }: { player: MarketPlayer }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold">{player.name}</h4>
        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">
          {player.stage}
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-3">{player.product}</p>
      <div className="text-xs text-slate-400 mb-3">
        <span className="font-semibold text-slate-500">Target:</span>{' '}
        {player.customer}
      </div>
      <div
        className="rounded-lg p-3 mb-3"
        style={{ backgroundColor: '#FDB51515' }}
      >
        <div
          className="text-xs font-semibold mb-1"
          style={{ color: '#b8860b' }}
        >
          Gap vs. Arc Radius
        </div>
        <p className="text-xs" style={{ color: '#9a7209' }}>
          {player.gap}
        </p>
      </div>
      {player.relationship && (
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#001d3a' }}
          />
          <span className="text-xs font-semibold" style={{ color: '#001d3a' }}>
            {player.relationship}
          </span>
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
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}
          >
            The Solution
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001d3a] mb-4">
            How Arc Radius Works
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
            A data-driven path from bills to meaning to action: classification,
            explanations from the knowledge graph, and grounded advocacy
            generation — plus crisis support info.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              to="/demo"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:brightness-110 text-[#001d3a]"
              style={{ backgroundColor: '#FDB515' }}
            >
              <Play size={14} className="fill-current shrink-0" />
              View Demo
            </Link>
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-slate-50 text-[#001d3a] px-7 py-3 rounded-full text-sm font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all"
            >
              Open Product
              <ExternalLink
                size={14}
                className="text-slate-500 group-hover:text-[#001d3a] transition-colors shrink-0"
              />
            </a>
          </div>
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
                <span className="text-xs font-semibold text-slate-300">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-2xl font-semibold text-[#001d3a] leading-tight">
                    {feature.title}
                  </h3>
                  {feature.product && (
                    <p className="text-lg font-medium text-slate-500 mt-1">
                      {feature.product}
                    </p>
                  )}
                </div>
                <p className="text-slate-500 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.split(' · ').map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-medium"
                    >
                      {t}
                    </span>
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
          <div
            className="rounded-2xl p-8 md:p-12 text-white mb-12"
            style={{ backgroundColor: '#001d3a' }}
          >
            <h3 className="text-xl font-semibold mb-2 text-center">
              Data Pipeline
            </h3>
            <p className="text-white/50 text-center text-sm mb-8">
              Feature-specific data flows
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {PIPELINES.map((pipe) => (
                <div
                  key={pipe.feature}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <span
                    className="text-xs font-semibold"
                    style={{ color: '#FDB515' }}
                  >
                    {pipe.feature}
                  </span>
                  <p className="text-xs text-white/40 mt-1 font-mono">
                    {pipe.flow}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {TECH_STACK.map((stack, i) => (
                <div key={i}>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques grid */}
          <h3 className="text-xl font-semibold text-[#001d3a] mb-6 text-center">
            Data Science Techniques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNIQUES.map((tech, i) => {
              const ac = AREA_COLORS[tech.area] || {
                bg: '#f1f5f9',
                color: '#475569',
              };
              return (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 hover:border-slate-300 transition-all"
                >
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
                    style={{ backgroundColor: ac.bg, color: ac.color }}
                  >
                    {tech.area}
                  </span>
                  <h4 className="font-semibold text-sm text-[#001d3a] mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Market Landscape ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: '#f1f5f9', color: '#475569' }}
            >
              Market Gap
            </span>
            <h2 className="text-2xl font-semibold text-[#001d3a] mb-4 max-w-4xl mx-auto leading-tight">
              No platform connects{' '}
              <span style={{ color: '#b8860b' }}>
                explanation, impact, and action.
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Existing tools cover one or two pieces of the puzzle — none
              combine clear explanation, personal impact, and a path to action
              under one roof. Arc Radius integrates classification,
              GraphRAG-reasoning explanations, and advocacy generation so users
              can understand legislation, interpret consequences, and respond
              with confidence.
            </p>
          </div>

          <div>
            <span
              className="inline-block text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: '#001d3a' }}
            >
              Established Players
            </span>
            <div className="grid md:grid-cols-3 gap-4">
              {ESTABLISHED_PLAYERS.map((p, i) => (
                <EstablishedCard key={i} player={p} />
              ))}
            </div>
          </div>

          {/* Comparison matrix */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60">
            <h4 className="text-lg font-semibold text-[#001d3a] mb-2 text-center">
              Where Arc Radius fits
            </h4>
            <p className="text-center text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              Compared to reference organizations across policy, crisis, and
              civic engagement — only Arc Radius covers the full path from bills
              to meaning to action for LGBTQ+ young adults.
            </p>
            <div className="-mx-2 px-2">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[720px] border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 px-2 text-left align-bottom w-[28%] border-b border-slate-200" />
                      {MARKET_LANDSCAPE_COLUMNS.map((col) => (
                        <th
                          key={col.name}
                          className={`py-3 px-2 text-center align-bottom border-b border-slate-200 ${
                            col.highlight ? 'bg-[#FDB51518] rounded-t-lg' : ''
                          }`}
                        >
                          <div
                            className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${
                              col.highlight ? '' : 'text-slate-400'
                            }`}
                            style={
                              col.highlight
                                ? { color: MARKET_MATRIX_GOLD }
                                : undefined
                            }
                          >
                            {col.category}
                          </div>
                          <div
                            className={`font-semibold text-xs leading-snug ${
                              col.highlight ? '' : 'text-slate-700'
                            }`}
                            style={
                              col.highlight
                                ? { color: MARKET_MATRIX_GOLD }
                                : undefined
                            }
                          >
                            {col.highlight ? (
                              <div className="flex flex-col items-center gap-1.5">
                                <ArcRadiusLogoSmall size={22} />
                                <span>{col.name}</span>
                              </div>
                            ) : (
                              col.name
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MARKET_LANDSCAPE_FEATURES.map((row) => (
                      <tr
                        key={row.num}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <td className="py-4 pr-3 align-top">
                          <div className="font-mono text-xs text-[#b8860b] mb-0.5">
                            {row.num}
                          </div>
                          <div className="font-semibold text-[#001d3a] text-sm mb-1">
                            {row.title}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {row.description}
                          </p>
                        </td>
                        {row.values.map((val, j) => {
                          const highlight =
                            MARKET_LANDSCAPE_COLUMNS[j]?.highlight;
                          return (
                            <td
                              key={j}
                              className={`text-center align-middle py-3 px-2 ${highlight ? 'bg-[#FDB51512]' : ''}`}
                            >
                              {val ? (
                                <Check
                                  className="inline"
                                  size={18}
                                  style={{
                                    color: highlight
                                      ? MARKET_MATRIX_GOLD
                                      : '#001d3a',
                                  }}
                                  aria-label="Yes"
                                />
                              ) : (
                                <span
                                  className="text-slate-300 font-light text-lg"
                                  aria-label="No"
                                >
                                  —
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 w-full flex flex-col sm:flex-row items-start gap-3 text-left">
                <span className="shrink-0 mt-0.5 inline-flex">
                  <ArcRadiusLogoSmall size={28} />
                </span>
                <p className="min-w-0 w-full text-slate-500 text-sm leading-relaxed sm:flex-1">
                  <span className="font-semibold text-[#001d3a]">
                    Arc Radius
                  </span>{' '}
                  is the only platform that unites legislative tracking,
                  plain-language interpretation, and direct ways to take action
                  — from advocacy tools to support pathways — into a single
                  experience for LGBTQ+ young adults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
