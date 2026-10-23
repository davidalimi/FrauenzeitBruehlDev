import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Maximize2, 
  X, 
  Sparkles,
  CheckCircle2,
  Camera,
  HeartHandshake
} from 'lucide-react';

interface PraxisRoom {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export function PraxisSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxRoom, setLightboxRoom] = useState<PraxisRoom | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const rooms: PraxisRoom[] = [
    {
      id: 'empfang',
      title: 'Empfang & Willkommensbereich',
      category: 'Anmeldung',
      description: 'Ein herzliches Willkommen in entspannter Atmosphäre. Hier nimmt unser MFA-Team Sie in Empfang, koordiniert Termine und beantwortet Ihre organisatorischen Fragen.',
      highlights: ['Diskreter Anmeldebereich', 'Kurze Wartezeiten', 'Barrierearmer Praxiseingang', 'Herzliche Betreuung'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Moderner, heller Empfangsbereich der Praxis Frauenzeit Brühl'
    },
    {
      id: 'wartebereich',
      title: 'Wartebereich & Lounge',
      category: 'Wartezone',
      description: 'Keine Hektik, kein Krankenhausflair: Unser Wartebereich bietet bequeme Sitzgelegenheiten, sanfte Farben und eine ruhige Umgebung zum Ankommen und Durchatmen.',
      highlights: ['Ruhiges Ambiente', 'Aktuelle Zeitschriften & Infomaterial', 'Kostenfreies Wasser', 'Entspannte Wohlfühlatmosphäre'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Gemütlicher und heller Wartebereich'
    },
    {
      id: 'sprechzimmer',
      title: 'Ärztliches Beratungszimmer',
      category: 'Sprechstunde',
      description: 'Hier ist Raum für Ihre Anliegen. In privater und vertrauensvoller Gesprächsatmosphäre nehmen sich Dr. Birkenfeld und Dr. Ledwig ausreichend Zeit für Ihre Fragen.',
      highlights: ['Schallgeschützte Privatsphäre', 'Ausführliche Beratung', 'Ganzheitliche Begleitung', 'Digital vernetzter Arbeitsplatz'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      alt: 'Vertrauensvolles ärztliches Sprechzimmer für persönliche Beratung'
    },
    {
      id: 'ultraschall',
      title: 'Ultraschall & Pränataldiagnostik',
      category: 'Diagnostik',
      description: 'Ausgestattet mit hochmoderner Sonographietechnik für präzise Pränatal- und Brustdiagnostik. Mit großem Zusatzmonitor, damit Sie Ihr Baby live miterleben können.',
      highlights: ['Hochauflösender 3D/4D-Ultraschall', 'Zweitmonitor für werdende Eltern', 'Angenehm temperiertes Kontaktgel', 'Ersttrimesterscreening'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
      alt: 'Moderner Untersuchungs- und Ultraschallraum mit Spezialgeräten'
    },
    {
      id: 'labor',
      title: 'Praxislabor & Vorsorgebereich',
      category: 'Labor',
      description: 'Präzision und Fürsorge: Hier führen unsere qualifizierten Fachkräfte Blutentnahmen, Abstriche, Schnelltests sowie Impfungen behutsam und zügig durch.',
      highlights: ['Einfühlsame Blutentnahme', 'Schnelle Basislaborwerte vor Ort', 'Impfberatung & Verabreichung', 'Höchste Hygienestandards'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      alt: 'Helles Praxislabor für Diagnostik und Blutanalysen'
    },
    {
      id: 'betterpelvi',
      title: 'BetterPelvi® & Beckenbodentherapie',
      category: 'Spezialtherapie',
      description: 'Unser separater Therapieraum für die innovative BetterPelvi® Magnetstimulation zur gezielten Kräftigung des Beckenbodens – diskret, bekleidet und schmerzfrei.',
      highlights: ['Vollständig bekleidete Behandlung', 'Stärkung bei Blasenschwäche', 'Rückbildung nach der Geburt', 'Entspannte Behandlungsdauer'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ruhiger Behandlungsraum für Beckenbodentherapie'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rooms.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, rooms.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const handleSelect = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentRoom = rooms[currentIndex];

  return (
    <section id="praxis" className="py-16 sm:py-20 border-b border-[#F0E6E8] bg-[#FAF5F6]/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
              <Building2 className="h-3.5 w-3.5" />
              <span>Praxisräume · Mühlenstrasse 37 · 50321 Brühl</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl">
              Unsere Praxisräume
            </h2>
            <p className="mt-2 text-sm text-[#5C4A4F] leading-relaxed">
              Lichtdurchflutet, modern und einladend gestaltet. Wir legen großen Wert auf eine Umgebung, in der Sie sich von der ersten Minute an sicher, diskret betreut und wohlfühlen können.
            </p>
          </div>

          {/* Top Controls: Slide Indicator & Navigation Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#735F64] bg-white px-3 py-1.5 rounded-xl border border-[#F0E6E8] shadow-2xs">
              <span className="text-pink-700 font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(rooms.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="overflow-hidden rounded-2xl border border-[#E8D2D7] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photo Area (7 cols on lg) */}
            <div 
              className="relative lg:col-span-7 aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:min-h-[460px] bg-neutral-900 group/stage overflow-hidden cursor-pointer"
              onClick={() => setLightboxRoom(currentRoom)}
              title="Klicken für Vollbildansicht"
            >
              <img
                src={currentRoom.image}
                alt={currentRoom.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover/stage:scale-[1.03]"
                onError={(e) => {
                  // Fallback in case of network issues
                  const target = e.currentTarget;
                  target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

              {/* Tag / Category Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-pink-700 shadow-sm border border-[#E8D2D7]">
                  <Sparkles className="h-3 w-3" />
                  {currentRoom.category}
                </span>
              </div>

              {/* Placeholder Note Badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/65 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                  <Camera className="h-3 w-3 text-pink-300" />
                  <span>Beispielfoto · Eigene Praxisaufnahmen folgen</span>
                </span>
              </div>

              {/* Zoom Trigger Button Overlay */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxRoom(currentRoom);
                  }}
                  className="flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-[#2B2326] shadow-md hover:bg-white hover:text-pink-700 transition-colors"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Vollbild</span>
                </button>
              </div>
            </div>

            {/* Room Details & Feature Panel (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-pink-700">
                    Bereich {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium text-[#735F64]">
                    Praxis Frauenzeit Brühl
                  </span>
                </div>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#2B2326] leading-tight">
                  {currentRoom.title}
                </h3>

                <p className="mt-3 text-sm text-[#5C4A4F] leading-relaxed">
                  {currentRoom.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-[#F0E6E8]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#735F64] mb-3">
                    Ausstattung & Merkmale:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentRoom.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#4D3F43]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Atmosphere Note */}
              <div className="mt-8 pt-5 border-t border-[#F0E6E8] flex items-center gap-2 text-xs text-[#735F64]">
                <HeartHandshake className="h-4 w-4 text-pink-700" />
                <span>Persönliche und geschützte Atmosphäre vor Ort</span>
              </div>
            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`group relative overflow-hidden rounded-xl border p-2 text-left transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-pink-700 bg-white ring-2 ring-pink-700/20 shadow-xs'
                  : 'border-[#F0E6E8] bg-white/70 hover:bg-white hover:border-[#E8D2D7]'
              }`}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={room.image}
                  alt={room.title}
                  className={`h-full w-full object-cover transition-transform duration-300 ${
                    currentIndex === idx ? 'scale-105' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                  }`}
                />
                {currentIndex === idx && (
                  <div className="absolute inset-0 bg-pink-700/10 border-2 border-pink-700 rounded-lg pointer-events-none" />
                )}
              </div>
              <div className="mt-2 truncate">
                <p className={`text-xs font-semibold truncate ${
                  currentIndex === idx ? 'text-pink-700' : 'text-[#2B2326]'
                }`}>
                  {room.title}
                </p>
                <p className="text-[10px] text-[#735F64] truncate">
                  {room.category}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxRoom && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setLightboxRoom(null)}
        >
          <div 
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#F0E6E8] p-4 text-left animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E6E8]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-700">
                  {lightboxRoom.category}
                </span>
                <h4 className="text-base font-bold text-[#2B2326]">{lightboxRoom.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxRoom(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-[#2B2326] hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="mt-3 overflow-hidden rounded-xl border border-[#E8D2D7] bg-neutral-900 aspect-16/10 w-full max-h-[65vh]">
              <img
                src={lightboxRoom.image}
                alt={lightboxRoom.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C4A4F]">
              <p className="leading-relaxed">{lightboxRoom.description}</p>
              <button
                type="button"
                onClick={() => setLightboxRoom(null)}
                className="self-end sm:self-auto shrink-0 rounded-lg bg-[#2B2326] px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
