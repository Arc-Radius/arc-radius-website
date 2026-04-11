import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Prototype from './pages/Prototype';
import {
  MapPin,
  Scale,
  Phone,
  Heart,
  Users,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Check,
  X,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Navigation,
  Stethoscope,
  Zap,
  Menu,
} from 'lucide-react';

// Custom Arc Radius Logo Component - Warped topographic style with pindrop
const ArcRadiusLogo = ({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) => (
  <div
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    {/* Rainbow ring background */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
    >
      <defs>
        <filter
          id="topological-warp-large"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g
        filter="url(#topological-warp-large)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#E40303"
          strokeDasharray="48 240"
          strokeDashoffset="0"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#FF8C00"
          strokeDasharray="48 240"
          strokeDashoffset="-48"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#FFED00"
          strokeDasharray="48 240"
          strokeDashoffset="-96"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#008026"
          strokeDasharray="48 240"
          strokeDashoffset="-144"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#24408E"
          strokeDasharray="48 240"
          strokeDashoffset="-192"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#732982"
          strokeDasharray="48 240"
          strokeDashoffset="-240"
        />
      </g>
    </svg>
    {/* Lucide MapPin (pindrop) icon with circle */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <MapPin
          size={size * 0.5}
          className="text-slate-800"
          strokeWidth={2.5}
          fill="currentColor"
        />
        {/* Circle in the middle of the pin */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-slate-800"
          style={{
            width: `${size * 0.18}px`,
            height: `${size * 0.18}px`,
            marginTop: `-${size * 0.05}px`,
          }}
        />
      </div>
    </div>
  </div>
);

// Smaller logo variant for nav - Warped topographic style with pindrop
const ArcRadiusLogoSmall = ({
  size = 32,
  dark = false,
}: {
  size?: number;
  dark?: boolean;
}) => (
  <div className="relative" style={{ width: size, height: size }}>
    {/* Rainbow ring background */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
    >
      <defs>
        <filter
          id="topological-warp-small"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g
        filter="url(#topological-warp-small)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#E40303"
          strokeDasharray="48 240"
          strokeDashoffset="0"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#FF8C00"
          strokeDasharray="48 240"
          strokeDashoffset="-48"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#FFED00"
          strokeDasharray="48 240"
          strokeDashoffset="-96"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#008026"
          strokeDasharray="48 240"
          strokeDashoffset="-144"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#24408E"
          strokeDasharray="48 240"
          strokeDashoffset="-192"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#732982"
          strokeDasharray="48 240"
          strokeDashoffset="-240"
        />
      </g>
    </svg>
    {/* Lucide MapPin (pindrop) icon with circle */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <MapPin
          size={size * 0.5}
          className={dark ? 'text-white' : 'text-slate-800'}
          strokeWidth={2.5}
          fill="currentColor"
        />
        {/* Circle in the middle of the pin */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            dark ? 'bg-slate-900 border-white' : 'bg-white border-slate-800'
          }`}
          style={{
            width: `${dark ? size * 0.28 : size * 0.24}px`,
            height: `${dark ? size * 0.28 : size * 0.24}px`,
            marginTop: `-${size * 0.05}px`,
          }}
        />
      </div>
    </div>
  </div>
);

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  tech: string;
};

type Stat = {
  value: string;
  label: string;
  highlight: boolean;
};

type Competitor = {
  name: string;
  resources: boolean;
  policy: boolean;
  crisis: boolean;
  highlight?: boolean;
};

type MarketPlayer = {
  name: string;
  stage: 'Startup' | 'Nonprofit' | 'Enterprise';
  product: string;
  customer: string;
  gap: string;
  relationship?: string;
};

function ArcRadiusShowcase(): React.ReactElement {
  const [scrollY, setScrollY] = useState<number>(0);
  const [_activeFeature, setActiveFeature] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats: Stat[] = [
    {
      value: '39%',
      label:
        'seriously considered suicide in the past year (46% among trans/nonbinary youth)',
      highlight: true,
    },
    {
      value: '12%',
      label: 'attempted suicide in the past year',
      highlight: true,
    },
    {
      value: '50%',
      label:
        'unable to access desired mental health care despite 84% wanting it',
      highlight: false,
    },
    {
      value: '90%',
      label: 'report negative well-being impacts from anti-LGBTQ+ politics',
      highlight: false,
    },
    {
      value: '530+',
      label: 'anti-LGBTQ+ bills proposed in 2024 alone',
      highlight: false,
    },
    {
      value: '28%',
      label: 'of youth mental health facilities offer LGBTQ-specific services',
      highlight: true,
    },
  ];

  const features: Feature[] = [
    {
      icon: MapPin,
      title: 'Resource Locator',
      description:
        'Find LGBTQ+-affirming clinics, support groups, and community centers near you. Each resource includes NLP-extracted services, review summaries, and an AI chatbot that answers practical questions about transportation, costs, privacy, and more.',
      color: 'from-rose-400 to-orange-400',
      tech: 'Geospatial k-NN • NLP Service Extraction • RAG Q&A',
    },
    {
      icon: Scale,
      title: 'Policy Navigator',
      description:
        'Interactive state policy scorecard with bill-level analysis. AI classifies bills as Supportive/Neutral/Harmful, extracts key provisions, links to peer-reviewed research, and shows what similar states look like. Includes tools to draft advocacy letters and understand your legal rights.',
      color: 'from-teal-400 to-cyan-400',
      tech: 'LegalBERT • Cross-State Comparison • Legal Rights RAG',
    },
    {
      icon: Phone,
      title: 'Crisis Connect',
      description:
        'One-tap access to LGBTQ+-specific crisis lines (Trevor Project, Trans Lifeline) and general resources (988, Crisis Text Line). Includes privacy guidance—Trans Lifeline never contacts authorities without consent.',
      color: 'from-amber-400 to-yellow-400',
      tech: 'Curated Resource Database • Privacy-First Design',
    },
  ];

  const techniques: { name: string; desc: string; area: string }[] = [
    {
      name: 'LegalBERT Classification',
      desc: 'Classifies bills as Supportive/Neutral/Harmful, extracts key provisions via NER, generates impact scores (-5 to +5)',
      area: 'Policy Navigator',
    },
    {
      name: 'Bill Passage Prediction',
      desc: 'XGBoost + Cox survival analysis predicts passage probability and timeline based on sponsor party, committee, and state history',
      area: 'Policy Navigator',
    },
    {
      name: 'Bill Similarity Network',
      desc: 'BERT embeddings + cosine similarity detect "copycat" template bills spreading across state legislatures',
      area: 'Policy Navigator',
    },
    {
      name: 'Cross-State Comparison',
      desc: 'Descriptive analysis comparing resource availability across states grouped by policy environment—correlation, not causation',
      area: 'Policy Navigator',
    },
    {
      name: 'Legal Rights RAG',
      desc: 'Retrieval-augmented generation over legal FAQ corpus (Lambda Legal, TLC, ACLU) for personalized rights Q&A',
      area: 'Policy Navigator',
    },
    {
      name: 'Geospatial k-NN Search',
      desc: 'Haversine distance calculations find resources within configurable radius; R-tree indexing for fast queries',
      area: 'Resource Locator',
    },
    {
      name: 'NLP Service Extraction',
      desc: 'Extracts services, accessibility info, and key findings from resource descriptions and reviews',
      area: 'Resource Locator',
    },
    {
      name: 'Advocacy Letter Generation',
      desc: 'GPT-4 drafts personalized support/oppose letters using bill analysis and research evidence',
      area: 'Take Action',
    },
  ];

  const competitors: Competitor[] = [
    { name: 'Trevor Project', resources: false, policy: false, crisis: true },
    { name: 'Findhelp', resources: true, policy: false, crisis: false },
    { name: 'MAP', resources: false, policy: true, crisis: false },
    {
      name: 'Everywhere Is Queer',
      resources: true,
      policy: false,
      crisis: false,
    },
    { name: 'QLIST', resources: true, policy: false, crisis: false },
    { name: 'Voda', resources: false, policy: false, crisis: false },
    {
      name: 'Arc Radius',
      resources: true,
      policy: true,
      crisis: true,
      highlight: true,
    },
  ];

  const startups: MarketPlayer[] = [
    {
      name: 'Everywhere Is Queer',
      stage: 'Startup',
      product:
        'Directory of 20K+ queer-owned businesses; 250K+ downloads since Feb 2024',
      customer: 'LGBTQ+ adults seeking businesses',
      gap: 'No healthcare/services focus; no policy tracking; not youth-specific',
    },
    {
      name: 'QLIST',
      stage: 'Startup',
      product: 'Global LGBTQ+ venue guide with 6K+ locations; crowd-sourced',
      customer: 'LGBTQ+ travelers',
      gap: 'Nightlife/travel focus; no healthcare, policy, or crisis support',
    },
    {
      name: 'Voda',
      stage: 'Startup',
      product:
        'AI mental health companion with queer-led meditations and journaling',
      customer: 'LGBTQ+ adults seeking wellness',
      gap: 'Self-help only; no resource locator or policy tracking',
    },
  ];

  const establishedPlayers: MarketPlayer[] = [
    {
      name: 'Trevor Project',
      stage: 'Nonprofit',
      product:
        'Crisis hotline, chat, text; TrevorSpace community for ages 13-24',
      customer: 'LGBTQ+ youth in crisis',
      gap: 'Crisis-focused; no local resource discovery or policy info',
      relationship: 'Integration Partner',
    },
    {
      name: 'Findhelp',
      stage: 'Enterprise',
      product:
        'Largest US social care network; B2B platform for healthcare/govt',
      customer: 'Healthcare systems, government',
      gap: 'B2B only; not LGBTQ-specific; no direct consumer app',
      relationship: 'API Partner',
    },
    {
      name: 'Movement Advancement Project',
      stage: 'Nonprofit',
      product:
        'Tracks 50+ LGBTQ policies across all states; static maps and reports',
      customer: 'Researchers, advocates, policymakers',
      gap: 'Reference tool; no AI Q&A; no resource locator',
      relationship: 'Data Source',
    },
  ];

  const techStack: { category: string; items: string[] }[] = [
    {
      category: 'Data Sources',
      items: ['LegiScan', 'SAMHSA', 'MAP', 'Findhelp', 'PubMed'],
    },
    {
      category: 'ML / NLP',
      items: ['LegalBERT', 'BioBERT', 'XGBoost', 'GPT-4'],
    },
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      category: 'Backend',
      items: ['FastAPI', 'PostgreSQL', 'pgvector'],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-orange-50 via-rose-50 to-sky-50 min-h-screen text-slate-800 overflow-x-hidden">
      {/* Navigation - Fixed: proper structure with scroll-based styling */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrollY > 50 || mobileMenuOpen
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ArcRadiusLogoSmall size={36} />
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Arc Radius
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a
              href="#problem"
              className="hover:text-slate-900 transition-colors"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="hover:text-slate-900 transition-colors"
            >
              Solution
            </a>
            <a href="#tech" className="hover:text-slate-900 transition-colors">
              Technology
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <Link
              to="/prototype"
              className="hover:text-slate-900 transition-colors"
            >
              Prototype
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              <a
                href="#problem"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-slate-900 transition-colors py-2"
              >
                Problem
              </a>
              <a
                href="#solution"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-slate-900 transition-colors py-2"
              >
                Solution
              </a>
              <a
                href="#tech"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-slate-900 transition-colors py-2"
              >
                Technology
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-slate-900 transition-colors py-2"
              >
                About
              </a>
              <Link
                to="/prototype"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 rounded-lg text-center hover:shadow-lg transition-all"
              >
                View Prototype →
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Restored animated background */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            UC Berkeley MIDS • W210 Capstone Project
          </div>

          {/* Large centered logo */}
          <div className="mb-8 flex justify-center">
            <ArcRadiusLogo size={140} className="drop-shadow-2xl" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Arc Radius
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            An AI-powered platform helping LGBTQ+ youth discover affirming
            resources, understand their rights, and connect to crisis support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#solution"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
            >
              Explore Solution
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#tech"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View Tech Stack
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'NLP',
              'LegalBERT',
              'RAG',
              'Geospatial',
              'FastAPI',
              'React Native',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-600 border border-slate-200/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-slate-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Mental Health Crisis
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              LGBTQ+ youth in the United States face a mental health crisis of
              unprecedented proportions. Data from The Trevor Project's 2024
              National Survey of 18,000+ youth ages 13-24 paints a stark
              picture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default ${
                  stat.highlight
                    ? 'bg-gradient-to-br from-rose-500 to-orange-500 text-white'
                    : 'bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 ${
                    stat.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {stat.value}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    stat.highlight ? 'text-white/90' : 'text-slate-600'
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Core Problem</h3>
                <p className="text-slate-600 leading-relaxed">
                  LGBTQ+ youth lack a unified, intelligent platform that
                  combines local resource discovery with real-time policy
                  awareness and crisis support connections. Current solutions
                  are fragmented across multiple apps, websites, and
                  organizations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Heart className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Healthcare Gap</div>
                  <p className="text-sm text-slate-600">
                    84% want care, but only half can access it
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Policy Chaos</div>
                  <p className="text-sm text-slate-600">
                    375+ active anti-LGBTQ bills across 43+ states
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="text-orange-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold mb-1">Discrimination</div>
                  <p className="text-sm text-slate-600">
                    60% faced discrimination based on identity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users
                  className="text-amber-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <div className="font-semibold mb-1">Family Impact</div>
                  <p className="text-sm text-slate-600">
                    45% of trans youth families considered relocating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Why It Matters
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Impact of Solving This
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Addressing these challenges isn't just about convenience—it's
              about saving lives and empowering families navigating an
              increasingly complex landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-rose-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-rose-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Life-Saving Potential
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Research shows LGBTQ+ youth in accepting communities have
                    significantly lower suicide attempt rates. Connecting youth
                    to affirming spaces directly addresses the leading cause of
                    death in this population.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Navigation className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Information Gap</h3>
                  <p className="text-slate-600 leading-relaxed">
                    45% of trans/nonbinary youth families have considered moving
                    states due to anti-LGBTQ+ policies. These families need
                    accessible, accurate information about laws and protections
                    across jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Stethoscope className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Healthcare Access Crisis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    50% of LGBTQ+ youth who wanted mental health care couldn't
                    access it. Cost, parental permission, and geography are
                    major barriers that better resource discovery can address.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Rapidly Changing Landscape
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    With hundreds of bills introduced annually affecting LGBTQ+
                    rights, static resources become outdated quickly. AI-powered
                    systems can track and synthesize legislative changes in
                    real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        className="py-24 px-6 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing Arc Radius
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three integrated tools—Resource Locator, Policy Navigator, and
              Crisis Connect—powered by NLP, geospatial analysis, and
              evidence-based health research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-slate-400">
                  {feature.tech}
                </div>
              </div>
            ))}
          </div>

          {/* Market Landscape */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Market Landscape</h3>
              <p className="text-slate-600">
                Understanding the competitive environment and partnership
                opportunities
              </p>
            </div>

            {/* Startups */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Emerging Startups
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {startups.map((player, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg">{player.name}</h4>
                      <span className="bg-violet-50 text-violet-600 px-2 py-0.5 rounded text-xs font-medium">
                        {player.stage}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {player.product}
                    </p>
                    <div className="text-xs text-slate-500 mb-3">
                      <span className="font-semibold">Target:</span>{' '}
                      {player.customer}
                    </div>
                    <div className="bg-rose-50 rounded-lg p-3">
                      <div className="text-xs font-semibold text-rose-700 mb-1">
                        Gap vs. Arc Radius
                      </div>
                      <p className="text-xs text-rose-600">{player.gap}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Established Players */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Established Players
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {establishedPlayers.map((player, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-slate-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg">{player.name}</h4>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          player.stage === 'Nonprofit'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {player.stage}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {player.product}
                    </p>
                    <div className="text-xs text-slate-500 mb-3">
                      <span className="font-semibold">Target:</span>{' '}
                      {player.customer}
                    </div>
                    <div className="bg-rose-50 rounded-lg p-3 mb-3">
                      <div className="text-xs font-semibold text-rose-700 mb-1">
                        Gap vs. Arc Radius
                      </div>
                      <p className="text-xs text-rose-600">{player.gap}</p>
                    </div>
                    {player.relationship && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-xs font-semibold text-emerald-700">
                          {player.relationship}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Summary Table */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-center">
                Feature Comparison
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-3 font-semibold text-slate-600">
                        Platform
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-slate-600">
                        Resource Discovery
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-slate-600">
                        Policy Tracking
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-slate-600">
                        Crisis Support
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, i) => (
                      <tr
                        key={i}
                        className={`border-b border-slate-100 ${
                          comp.highlight
                            ? 'bg-gradient-to-r from-rose-50 to-orange-50'
                            : ''
                        }`}
                      >
                        <td
                          className={`py-3 px-3 font-semibold ${
                            comp.highlight ? 'text-rose-600' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {comp.highlight && <ArcRadiusLogoSmall size={20} />}
                            <span>{comp.name}</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-3">
                          {comp.resources ? (
                            <Check
                              className="inline text-emerald-500"
                              size={18}
                            />
                          ) : (
                            <X className="inline text-slate-300" size={18} />
                          )}
                        </td>
                        <td className="text-center py-3 px-3">
                          {comp.policy ? (
                            <Check
                              className="inline text-emerald-500"
                              size={18}
                            />
                          ) : (
                            <X className="inline text-slate-300" size={18} />
                          )}
                        </td>
                        <td className="text-center py-3 px-3">
                          {comp.crisis ? (
                            <Check
                              className="inline text-emerald-500"
                              size={18}
                            />
                          ) : (
                            <X className="inline text-slate-300" size={18} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-slate-500 mt-6 text-sm">
                Arc Radius is the{' '}
                <span className="font-semibold">only platform</span> combining
                all three critical functions in a unified, youth-focused
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Data Science Techniques
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From bill classification to resource discovery—ML models trained
              on LegiScan, SAMHSA, MAP, and academic literature to power every
              feature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {techniques.map((tech, i) => {
              const areaColors: Record<string, string> = {
                'Policy Navigator': 'bg-purple-100 text-purple-700',
                'Resource Locator': 'bg-blue-100 text-blue-700',
                'Evidence & Research': 'bg-emerald-100 text-emerald-700',
                'Take Action': 'bg-amber-100 text-amber-700',
              };
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-3 ${
                      areaColors[tech.area] || 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tech.area}
                  </span>
                  <h4 className="font-bold mb-2 text-slate-800">{tech.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Technical Architecture
            </h3>
            <p className="text-slate-400 text-center text-sm mb-8">
              Feature-specific data pipelines
            </p>

            {/* Feature Pipelines */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                {
                  feature: 'Bill Classification',
                  color: 'purple',
                  flow: 'LegiScan → LegalBERT → Impact Score → UI Labels',
                },
                {
                  feature: 'Resource Discovery',
                  color: 'blue',
                  flow: 'Zipcode → Geocode → k-NN Search → NLP Enrichment',
                },
                {
                  feature: 'Legal Rights Q&A',
                  color: 'emerald',
                  flow: 'Bill Context → Legal FAQ Retrieval → Personalized Answer',
                },
                {
                  feature: 'State Comparison',
                  color: 'violet',
                  flow: 'Policy Grouping → Resource Counts → Per-Capita Rates',
                },
              ].map((pipe) => (
                <div
                  key={pipe.feature}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <span
                    className={`text-xs font-semibold ${
                      pipe.color === 'purple'
                        ? 'text-purple-400'
                        : pipe.color === 'blue'
                        ? 'text-blue-400'
                        : pipe.color === 'emerald'
                        ? 'text-emerald-400'
                        : 'text-violet-400'
                    }`}
                  >
                    {pipe.feature}
                  </span>
                  <p className="text-xs text-slate-300 mt-1 font-mono">
                    {pipe.flow}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, i) => (
                <div key={i}>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Builder
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-rose-400 via-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold text-white">AQ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ambro Quach</h3>
                <p className="text-slate-600 mb-4">
                  UC Berkeley MIDS Candidate
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  CS graduate from UCSD with experience as a SWE at Shell Green
                  Energy. Background in full-stack development, DevOps, and
                  machine learning at scale. Passionate about projects
                  integrating AI applications with social impact and ethical
                  safeguards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Algorithmic Fairness',
                    'Privacy by Design',
                    'Legal AI',
                    'Bias Detection',
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-slate-600"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Github size={20} className="text-slate-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Linkedin size={20} className="text-slate-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <Mail size={20} className="text-slate-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>
              Relevant Coursework: W231 Behind the Data: Humans and Values •
              W255 ML Systems Engineering • W261 ML at Scale
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ArcRadiusLogoSmall size={32} dark={true} />
              <span className="font-bold">Arc Radius</span>
            </div>
            <p className="text-slate-400 text-sm">
              UC Berkeley MIDS W210 Capstone Project • 2025
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/spring26-mids-capstone">
      <Routes>
        <Route path="/" element={<ArcRadiusShowcase />} />
        <Route path="/prototype" element={<Prototype />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('app')!).render(<App />);
