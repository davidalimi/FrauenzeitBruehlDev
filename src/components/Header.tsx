import { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal?: () => void;
  activeNav?: string;
  onNavClick?: (nav: string) => void;
}

export function Header({ 
  onOpenAppointmentModal, 
  activeNav = 'start', 
  onNavClick 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logo asset URL supporting Vite base path (both local dev and GitHub Pages /DeltaStudio/)
  const logoUrl = `${import.meta.env.BASE_URL}assets/aistudio/logo.png`;

  const handleNavClick = (sectionId: string) => {
    if (onNavClick) onNavClick(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#F0E6E8] shadow-xs">
      {/* Main Navigation Bar (Clean 3-Zone Contract) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          
          {/* Zone 1: Brand & Logo */}
          <a 
            href="#start" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('start');
            }}
            className="flex items-center gap-3.5 text-left whitespace-nowrap shrink-0"
          >
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full p-0.5 border border-[#E8D2D7] bg-[#FCF8F9] shadow-xs shrink-0 overflow-hidden">
              <img 
                src={logoUrl} 
                alt="Frauenzeit Brühl Logo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback in case of local path variation
                  const target = e.currentTarget;
                  if (!target.src.includes('public/')) {
                    target.src = './public/assets/aistudio/logo.png';
                  }
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2B2326] font-sans">
                Frauenzeit<span className="text-pink-700">Brühl</span>
              </span>
              <span className="text-xs font-medium text-[#826970] tracking-wide">
                Gynäkologie & Geburtshilfe
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4D3F43]">
            <button
              type="button"
              onClick={() => handleNavClick('start')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'start' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Startseite
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'team' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Praxisteam
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'praxis' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Praxisräume
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('leistungen')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'leistungen' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Leistungen
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('sprechzeiten')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'sprechzeiten' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Sprechzeiten
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className={`transition-colors py-1 hover:text-pink-700 whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === 'kontakt' ? 'text-pink-700 font-semibold border-b-2 border-pink-700' : ''
              }`}
            >
              Kontakt & Anfahrt
            </button>
          </nav>

          {/* Zone 3: Primary Action (Termin vereinbaren via Doctolib) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-700 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-pink-800 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin online buchen</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden rounded-lg bg-pink-700 p-2 text-white"
              title="Termin buchen"
            >
              <Calendar className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#4D3F43] hover:bg-[#FAF5F6] transition-colors"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#F0E6E8] bg-white px-4 py-6 lg:hidden shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#2B2326]">
            <button
              type="button"
              onClick={() => handleNavClick('start')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Startseite</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Praxisteam</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Praxisräume</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('leistungen')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Leistungen</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('sprechzeiten')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Sprechzeiten</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Kontakt & Anfahrt</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
          </nav>

          {/* Mobile Direct Action Block */}
          <div className="mt-6 pt-5 border-t border-[#F0E6E8] space-y-3">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-pink-700 py-3 text-sm font-semibold text-white shadow-xs"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin online buchen</span>
            </a>

            <a
              href="tel:0223243545"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E8D2D7] bg-[#FCF8F9] py-3 text-sm font-semibold text-pink-700"
            >
              <Phone className="h-4 w-4" />
              <span>(02232) 43545</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
