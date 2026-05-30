import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Catalogs', hasDropdown: true },
  { label: 'Editions', hasDropdown: false },
  { label: 'Hub', hasDropdown: false },
  { label: 'Info', hasDropdown: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 py-5 md:px-12 text-[#f5f1ea]">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="nav-mark" aria-hidden="true" />
        <div className="text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "'Lawrence W00 Regular', Georgia, serif" }}>Foliom</div>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 text-sm text-white/85">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href="#"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop right */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#" className="text-white/85 hover:text-white transition-colors">
          Join us
        </a>
        <a
          href="#"
          className="bg-[#f5f1ea] text-[#0a0a0a] px-5 py-2.5 rounded-full font-medium hover:bg-white transition-colors"
        >
          Build Your List
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden flex flex-col p-6 gap-4 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="text-white/85 text-lg py-2 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <a href="#" className="text-white/85 py-2">Join us</a>
          <a
            href="#"
            className="bg-[#f5f1ea] text-[#0a0a0a] px-5 py-3 rounded-full font-medium text-center"
          >
            Build Your List
          </a>
        </div>
      )}
    </nav>
  );
}
