import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { ArcRadiusLogoSmall } from '../ui/ArcRadiusLogo';

const PRODUCT_URL = 'https://arcradius.netlify.app';

const NAV_LINKS = [
  { to: '/', label: 'Brief' },
  { to: '/journey', label: 'Journey' },
  { to: '/solution', label: 'Solution' },
  { to: '/team', label: 'Team' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#001d3a] shadow-lg'
          : 'bg-[#001d3a]/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5">
          <ArcRadiusLogoSmall size={32} />
          <span className="font-semibold text-lg tracking-tight text-white">
            Arc Radius
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors pb-0.5 ${
                isActive(link.to)
                  ? 'text-white font-semibold border-b-2 border-white'
                  : 'hover:text-white border-b-2 border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white border border-white/25 hover:bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          >
            Product
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-4 text-sm font-medium text-white/70">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 ${
                  isActive(link.to)
                    ? 'text-white font-semibold border-l-2 border-white pl-3'
                    : 'hover:text-white pl-3'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white/10 text-white border border-white/25 px-4 py-2 rounded-lg text-center"
            >
              View Product
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
