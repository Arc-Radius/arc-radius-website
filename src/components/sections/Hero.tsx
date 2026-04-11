import { useState, useEffect } from 'react';
import { ArrowRight, Play, PenLine, Scale, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArcRadiusLogo } from '../ui/ArcRadiusLogo';

const ROTATING_STATS = [
  { value: '39%', text: 'of LGBTQ+ youth seriously considered suicide last year' },
  { value: '530+', text: 'anti-LGBTQ+ bills proposed in 2024 alone' },
  { value: '50%', text: 'unable to access desired mental health care' },
  { value: '90%', text: 'report negative impact from anti-LGBTQ+ politics' },
];

const FEATURE_PREVIEWS = [
  { icon: Scale, title: 'Policy Navigator', desc: 'Track legislation across all 50 states in real-time', color: '#001d3a', to: '/solution' },
  { icon: PenLine, title: 'Letter Generation', desc: 'Create advocacy emails, info cards, and flyers', color: '#001d3a', to: '/solution' },
  { icon: Phone, title: 'Crisis Connect', desc: 'One-tap access to LGBTQ+ crisis resources', color: '#FDB515', to: '/solution' },
];

export default function Hero() {
  const [statIndex, setStatIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStatIndex((prev) => (prev + 1) % ROTATING_STATS.length);
        setFade(true);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stat = ROTATING_STATS[statIndex];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6"
      style={{ backgroundColor: '#001d3a' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a5694, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FDB515, transparent 70%)' }}
      />

      {/* Split layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-28 pb-20">
        {/* LEFT — Logo with animated arcs */}
        <div className="relative shrink-0 flex items-center justify-center w-[320px] h-[320px] lg:w-[420px] lg:h-[420px]">
          {/* Outer arc ring — slow clockwise */}
          <svg className="absolute inset-0 w-full h-full arc-spin" viewBox="0 0 420 420">
            <circle
              cx="210" cy="210" r="200"
              fill="none" stroke="#FDB515" strokeWidth="2"
              strokeDasharray="180 1080" strokeLinecap="round" opacity="0.5"
            />
          </svg>

          {/* Inner arc ring — slower counter-clockwise */}
          <svg className="absolute inset-0 w-full h-full arc-spin-reverse" viewBox="0 0 420 420">
            <circle
              cx="210" cy="210" r="190"
              fill="none" stroke="#ffffff" strokeWidth="1.5"
              strokeDasharray="120 1080" strokeLinecap="round" opacity="0.15"
            />
          </svg>

          {/* Tiny dot accent ring */}
          <svg className="absolute inset-0 w-full h-full arc-spin-slow" viewBox="0 0 420 420">
            <circle
              cx="210" cy="210" r="180"
              fill="none" stroke="#FDB515" strokeWidth="3"
              strokeDasharray="4 200" strokeLinecap="round" opacity="0.35"
            />
          </svg>

          {/* Conic glow */}
          <div
            className="absolute w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, #001d3a, #1a5694, #FDB515, #e6a200, #001d3a)',
            }}
          />

          <ArcRadiusLogo size={280} className="relative z-10 hidden lg:block" />
          <ArcRadiusLogo size={220} className="relative z-10 lg:hidden" />
        </div>

        {/* RIGHT — Content */}
        <div className="flex-1 text-center lg:text-left min-w-0">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/70 mb-8">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#FDB515' }} />
            UC Berkeley · School of Information · Spring 2026 Capstone
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
            Arc Radius
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Navigating rights, resources, and support for LGBTQ+ young adults — understand how legislation affects you and get the tools to respond.
          </p>

          {/* Stat ticker */}
          <div className="mb-10">
            <div
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              <span className="text-xl md:text-2xl font-bold shrink-0" style={{ color: '#FDB515' }}>
                {stat.value}
              </span>
              <span className="text-sm text-white/50 text-left">{stat.text}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            <Link
              to="/solution"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:brightness-110 text-[#001d3a]"
              style={{ backgroundColor: '#FDB515' }}
            >
              Explore Solution
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3 rounded-full text-sm font-semibold border border-white/25 hover:bg-white/15 backdrop-blur-sm transition-all"
            >
              <Play size={14} className="fill-current" />
              View Demo
            </Link>
          </div>

          {/* Source */}
          <p className="text-xs text-white/30 mt-2">
            Source:{' '}
            <a
              href="https://www.thetrevorproject.org/survey-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50 transition-colors"
            >
              The Trevor Project 2024 National Survey
            </a>
          </p>
        </div>
      </div>

      {/* Feature tease cards — overlapping into next section */}
      <div className="relative z-20 max-w-4xl mx-auto w-full px-6 -mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURE_PREVIEWS.map((feature) => (
            <Link
              key={feature.title}
              to={feature.to}
              className="group bg-white rounded-2xl p-6 shadow-xl shadow-black/10 border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-[#001d3a] text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-500">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
