import { useState } from 'react';
import {
  Play,
  Scale,
  PenLine,
  Phone,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

const DEMO_HIGHLIGHTS = [
  {
    icon: Scale,
    time: '0:00',
    title: 'Policy Navigator',
    desc: 'Browse bills by state, view stance predictions, and ask questions about legislation.',
    color: '#001d3a',
  },
  {
    icon: PenLine,
    time: '2:15',
    title: 'Letter Generation',
    desc: 'Generate advocacy emails, info cards, and flyers grounded in bill context.',
    color: '#001d3a',
  },
  {
    icon: Phone,
    time: '4:30',
    title: 'Crisis Connect',
    desc: 'One-tap access to Trevor Project, Trans Lifeline, 988, and Crisis Text Line.',
    color: '#FDB515',
  },
];

export default function DemoPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ═══ Page Header ═══ */}
      <section className="pt-32 pb-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: '#FDB51520', color: '#b8860b' }}
          >
            Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001d3a] mb-4">
            See Arc Radius in Action
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-lg">
            A walkthrough of the platform — from tracking legislation to
            generating advocacy content.
          </p>
        </div>
      </section>

      {/* ═══ Video Container ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#001d3a] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20">
            {/* 16:9 aspect ratio container */}
            <div
              className="relative w-full"
              style={{ paddingBottom: '56.25%' }}
            >
              {/*
                Replace this placeholder with your actual video embed:
                
                Option A — YouTube/Vimeo:
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                Option B — Self-hosted MP4:
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  poster="/demo-poster.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                </video>
              */}

              {/* Placeholder — remove when you add the real video */}
              {!videoPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />

                  {/* Play button */}
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="relative group"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: '#FDB515' }}
                    >
                      <Play
                        size={32}
                        className="text-[#001d3a] ml-1 fill-current"
                      />
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute -inset-3 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: '#FDB515' }}
                    />
                  </button>

                  <p className="text-white/40 text-sm mt-6 font-medium">
                    Watch the 5-minute demo
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/30 text-sm">
                    Video embed goes here — replace placeholder in code
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Video caption */}
          <p className="text-center text-xs text-slate-400 mt-4">
            Arc Radius Demo · Spring 2026 · UC Berkeley MIDS W210 Capstone
          </p>
        </div>
      </section>

      {/* ═══ Demo Highlights ═══ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#001d3a] mb-2 text-center">
            What You'll See
          </h2>
          <p className="text-slate-400 text-sm text-center mb-10">
            Key features demonstrated in the walkthrough
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {DEMO_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}
                  >
                    {item.time}
                  </span>
                </div>
                <h3 className="font-semibold text-[#001d3a] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Try It / Prototype CTA ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ backgroundColor: '#001d3a' }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Try the Prototype
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Explore the interactive prototype — browse bills, generate
              advocacy content, and see the full experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/prototype"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:brightness-110 text-[#001d3a]"
                style={{ backgroundColor: '#FDB515' }}
              >
                Launch Prototype
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3 rounded-full text-sm font-semibold border border-white/25 hover:bg-white/15 transition-all"
              >
                View Source
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
