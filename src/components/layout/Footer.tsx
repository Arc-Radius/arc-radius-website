import { ArcRadiusLogoSmall } from '../ui/ArcRadiusLogo';

const FOOTER_LINKS = [
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <ArcRadiusLogoSmall size={22} />
          <span className="text-sm font-medium text-[#001d3a]">Arc Radius</span>
        </div>
        <p className="text-xs text-slate-400">
          UC Berkeley · School of Information · Spring 2026 Capstone
        </p>
        <div className="flex gap-5 text-xs text-slate-400">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#001d3a] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
