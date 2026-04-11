import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Impact from '../components/sections/Impact';
import Solution from '../components/sections/Solution';

export default function Landing() {
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Bridge from dark hero to light content */}
      <div
        className="h-20"
        style={{ background: 'linear-gradient(to bottom, #001d3a, #f8fafc)' }}
      />
      <Problem />
      <Impact />
      <Solution />
      <Footer />
    </div>
  );
}
