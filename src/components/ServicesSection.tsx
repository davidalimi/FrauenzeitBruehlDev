import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Maximize2, 
  X, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake,
  ShieldCheck
} from 'lucide-react';
import { CherryBlossomFlower, CottonSprig } from './BotanicalDecorations';

interface ServiceItem {
  id: string;
  category: 'vorsorge' | 'schwangerschaft' | 'spezial';
  categoryName: string;
  title: string;
  image: string;
  alt: string;
  quote?: string;
  description: string;
  items: string[];
  forWhom: string;
}

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vorsorge' | 'schwangerschaft' | 'spezial'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxService, setLightboxService] = useState<ServiceItem | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'schwangerschaft',
      category: 'schwangerschaft',
      categoryName: 'Schwangerschaft',
      title: 'Schwangerschaftsbegleitung',
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Einfühlsame und geborgene Begleitung während der Schwangerschaft',
      quote: '„Mit Ihrer Schwangerschaft beginnt ein neuer Lebensabschnitt – voller Vorfreude, Veränderungen und einzigartiger Momente.“',
      description: 'Umfassende und einfühlsame Begleitung von Beginn des Kinderwunsches, durch alle Trimester der Schwangerschaft bis hin zum Wochenbett.',
      items: [
        'Mutterschaftsvorsorge nach gesetzlichen Richtlinien',
        'Regelmäßige Ultraschallkontrollen des kindlichen Wachstums',
        'CTG-Überwachung (Herztöne & Wehentätigkeit)',
        'Gestationsdiabetes- & Infektionsscreening',
      ],
      forWhom: 'Vom positiven Schwangerschaftstest bis zur Nachsorge',
    },
    {
      id: 'ersttrimester',
      category: 'schwangerschaft',
      categoryName: 'Pränataldiagnostik',
      title: 'Ersttrimester-Screening (DEGUM I)',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
      alt: 'Einfühlsame, warme ärztliche Betreuung und Pränataldiagnostik',
      quote: '„Modernste Pränataldiagnostik gibt Ihnen Sicherheit, Vertrauen und Klarheit in den frühen Wochen.“',
      description: 'Spezialisierte Ultraschall- und Risikodiagnostik in der 11. bis 14. Schwangerschaftswoche durch Dr. Birkenfeld (DEGUM I) in ruhiger und herzlicher Atmosphäre.',
      items: [
        'Nackentransparenzmessung (NT-Messung)',
        'Präeklampsie-Screening (Früherkennung Schwangerschaftsbluthochdruck)',
        'Feindiagnostische Beurteilung früher kindlicher Organanlagen',
        'Einfühlsame Beratung zu NIPT-Bluttests (Trisomie 21, 18, 13)',
      ],
      forWhom: 'Zwischen 11+0 und 13+6 Schwangerschaftswochen',
    },
    {
      id: 'ernaehrung',
      category: 'spezial',
      categoryName: 'Ernährungsmedizin',
      title: 'Ernährungsmedizin',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ganzheitliche, gesunde Ernährung und Vitalstoffe',
      quote: '„Eine ausgewogene, gesunde Ernährung ist ein wesentlicher Baustein für unsere Gesundheit und unser Wohlbefinden.“',
      description: 'Ganzheitliche, wissenschaftlich fundierte Ernährungstherapie – beide Fachärztinnen befinden sich in qualifizierter Weiterbildung.',
      items: [
        'Ernährungstherapie bei Endometriose & chronischen Schmerzen',
        'Unterstützung bei PCO-Syndrom, Zyklusstörungen & Kinderwunsch',
        'Ernährungskonzepte im Klimakterium & bei Gewichtsproblemen',
        'Mikronährstoff- & Vitalstoffberatung in der Schwangerschaft',
      ],
      forWhom: 'Ganzheitliche Unterstützung für Vitalität & Gesundheit',
    },
    {
      id: 'hormone',
      category: 'spezial',
      categoryName: 'Spezialsprechstunde',
      title: 'Hormonsprechstunde',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
      alt: 'Innere Balance, Energie und hormonelles Wohlbefinden im Querformat',
      quote: '„Hormone beeinflussen den weiblichen Körper in jeder Lebensphase.“',
      description: 'Spezialisierte Sprechstunde zur genauen Diagnostik und einfühlsamen Behandlung hormoneller Dysbalancen für mehr Energie und Wohlbefinden.',
      items: [
        'Zyklusunregelmäßigkeiten & schmerzhafte Regelblutungen',
        'PCOS (Polyzystisches Ovarialsyndrom)',
        'Hormonelle Hautveränderungen & Akne',
        'Prämenstruelles Syndrom (PMS)',
      ],
      forWhom: 'Bei allen hormonellen Beschwerden und Dysbalancen',
    },
    {
      id: 'menopause',
      category: 'spezial',
      categoryName: 'Spezialsprechstunde',
      title: 'Menopausensprechstunde',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Strahlende, vitale Frau in warmer natürlicher Umgebung',
      quote: '„Mit den Wechseljahren beginnt ein ganz natürlicher Wandel, den jede Frau unterschiedlich erlebt.“',
      description: 'Individuelle Begleitung durch die Wechseljahre mit modernen, sicheren Therapiekonzepten, bioidentischen Hormonen und viel Zeit für Ihre Fragen.',
      items: [
        'Ausführliche Beratung zu Hitzewallungen & Schlafproblemen',
        'Therapie mit bioidentischen Hormonen',
        'Pflanzliche Alternativen & Phytotherapie',
        'Knochendichteschutz (Osteoporose-Prävention)',
      ],
      forWhom: 'Für Frauen in der Perimenopause und Postmenopause',
    },
    {
      id: 'betterpelvi',
      category: 'spezial',
      categoryName: 'Beckenbodengesundheit',
      title: 'BetterPelvi®-Therapie',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sanfte und effektive Beckenbodentherapie',
      quote: '„Der Beckenboden spielt eine zentrale Rolle für Kontinenz, Stabilität und unser körperliches Wohlbefinden.“',
      description: 'Innovative, schonende und wirksame Magnetstimulation zur gezielten Kräftigung des Beckenbodens – diskret, bekleidet und schmerzfrei.',
      items: [
        'Nicht-invasive Stärkung der Beckenbodenmuskulatur',
        'Behandlung von Belastungs- & Dranginkontinenz',
        'Linderung von Senkungsbeschwerden',
        'Effektive postpartale Rückbildung nach Geburten',
      ],
      forWhom: 'Nach Geburten, bei Inkontinenz & im Klimakterium',
    },
    {
      id: 'krebsvorsorge',
      category: 'vorsorge',
      categoryName: 'Gynäkologie & Vorsorge',
      title: 'Krebsfrüherkennung & Vorsorge',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      alt: 'Vertrauensvolle und beruhigende ärztliche Fürsorge',
      quote: '„Regelmäßige Früherkennung schenkt Sicherheit, Geborgenheit und schützt Ihre Gesundheit nachhaltig.“',
      description: 'Einfühlsame und beruhigende Vorsorgeuntersuchung nach neuesten medizinischen Richtlinien in entspannter, vertrauensvoller Atmosphäre.',
      items: [
        'Zytologischer Pap-Abstrich & HPV-Testung',
        'Behutsame Tastuntersuchung von Gebärmutter & Eierstöcken',
        'Gynäkologischer Ultraschall der Beckenorgane',
        'Stuhltests zur Darmkrebsfrüherkennung ab 50',
      ],
      forWhom: 'Empfohlen für alle Frauen ab dem 20. Lebensjahr',
    },
    {
      id: 'brust',
      category: 'vorsorge',
      categoryName: 'Brustgesundheit',
      title: 'Brustsprechstunde & Ultraschall',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      alt: 'Präzise und strahlenfreie Brustuntersuchung',
      quote: '„Hochauflösender Ultraschall ermöglicht eine strahlenfreie, präzise und schonende Gewebsbeurteilung.“',
      description: 'Schonende Früherkennung und Abklärung von Brustgewebeveränderungen mit modernster Mammasonographie.',
      items: [
        'Klinische Tastuntersuchung der Brustdrüsen & Lymphknoten',
        'Hochfrequente Mammasonographie (Brustultraschall)',
        'Anleitung zur regelmäßigen Selbstuntersuchung',
        'Einfühlsame Abklärung von Schmerzen oder Tastbefunden',
      ],
      forWhom: 'Als jährliche Vorsorgeerweiterung & bei Beschwerden',
    },
    {
      id: 'teenager',
      category: 'spezial',
      categoryName: 'Mädchensprechstunde',
      title: 'Teenager- & Mädchensprechstunde',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      alt: 'Verständnisvolle und lockere Beratung für junge Mädchen',
      quote: '„Ein geschützter Raum für alle Fragen – ganz ohne Angst und auf Wunsch ohne Untersuchung.“',
      description: 'Einfühlsames Kennenlernen für junge Mädchen, gerne auch in Begleitung der besten Freundin oder der Mutter.',
      items: [
        'Kennenlerngespräch ohne Untersuchungszwang',
        'Aufklärung zu Zyklus, Menstruation & Körperwissen',
        'Individuelle Verhütungsberatung für Jugendliche',
        'HPV-Impfung & Impfpasskontrolle',
      ],
      forWhom: 'Für Mädchen und junge Frauen ab ca. 12 Jahren',
    },
    {
      id: 'igel',
      category: 'vorsorge',
      categoryName: 'Wahlleistungen',
      title: 'Wahlleistungen (IGeL)',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80',
      alt: 'Vertrauensvolle und persönliche ärztliche Beratung zu individueller Vorsorge',
      quote: '„Wir bieten Ihnen neben den Kassenleistungen ein ausgewähltes Spektrum sinnvoller Zusatzleistungen an.“',
      description: 'Sinnvolle Ergänzungsuntersuchungen für ein Höchstmaß an persönlicher Vorsorge, Früherkennung und individueller Gesundheitssicherheit.',
      items: [
        'Dünnschichtzytologie (ThinPrep) für höhere Abstrichpräzision',
        'Erweiterte Ultraschallvorsorge der Gebärmutter & Eierstöcke',
        'Mammasonographie (Brustultraschall) als Frühergänzung',
        'Immunologische Darmkrebs- und Blasenkrebsschnelltests',
      ],
      forWhom: 'Individuell wählbare medizinische Vorsorgeplusleistungen',
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  // Ensure currentIndex stays within bounds when filtering
  const safeIndex = currentIndex >= filteredServices.length ? 0 : currentIndex;
  const currentService = filteredServices[safeIndex] || filteredServices[0];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || filteredServices.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredServices.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, filteredServices.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredServices.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % filteredServices.length);
  };

  const handleSelect = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleCategoryChange = (cat: 'all' | 'vorsorge' | 'schwangerschaft' | 'spezial') => {
    setIsAutoPlaying(false);
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <section id="leistungen" className="relative overflow-hidden py-16 sm:py-20 border-b border-[#F0E6E8] bg-[#FAF5F6]/40 scroll-mt-20">
      {/* Subtle Botanical Watermark */}
      <div className="absolute -top-10 -left-10 pointer-events-none select-none opacity-15 hidden lg:block">
        <CottonSprig className="w-64 h-64 text-[#CFB6BC]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
              <CherryBlossomFlower className="h-3.5 w-3.5 text-pink-500 shrink-0" />
              <span>Ganzheitliches Leistungsspektrum · 10 Schwerpunkte</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl">
              Unsere medizinischen Leistungen
            </h2>
            <p className="mt-2 text-sm text-[#5C4A4F] leading-relaxed">
              Vorsorge, Schwangerschaftsbegleitung und spezialisierte Sprechstunden – modern, gründlich und einfühlsam auf Ihre individuellen Bedürfnisse abgestimmt.
            </p>

            {/* Category Filter positioned below the title */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-pink-700 text-white font-semibold shadow-xs'
                    : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] shadow-2xs hover:bg-[#FAF5F6]'
                }`}
              >
                Alle ({services.length})
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange('vorsorge')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'vorsorge'
                    ? 'bg-pink-700 text-white font-semibold shadow-xs'
                    : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] shadow-2xs hover:bg-[#FAF5F6]'
                }`}
              >
                Vorsorge & Gyn ({services.filter((s) => s.category === 'vorsorge').length})
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange('schwangerschaft')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'schwangerschaft'
                    ? 'bg-pink-700 text-white font-semibold shadow-xs'
                    : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] shadow-2xs hover:bg-[#FAF5F6]'
                }`}
              >
                Schwangerschaft ({services.filter((s) => s.category === 'schwangerschaft').length})
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange('spezial')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === 'spezial'
                    ? 'bg-pink-700 text-white font-semibold shadow-xs'
                    : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] shadow-2xs hover:bg-[#FAF5F6]'
                }`}
              >
                Spezial & BetterPelvi® ({services.filter((s) => s.category === 'spezial').length})
              </button>
            </div>
          </div>

          {/* Stepper Controls: Slide Indicator & Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#735F64] bg-white px-3 py-1.5 rounded-xl border border-[#F0E6E8] shadow-2xs">
              <span className="text-pink-700 font-bold">{String(safeIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(filteredServices.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Vorherige Leistung"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Nächste Leistung"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="overflow-hidden rounded-2xl border border-[#E8D2D7] bg-white shadow-sm mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photo Area (7 cols on lg) */}
            <div 
              className="relative lg:col-span-7 aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:min-h-[480px] bg-neutral-900 group/stage overflow-hidden cursor-pointer"
              onClick={() => setLightboxService(currentService)}
              title="Klicken für Vollbildansicht"
            >
              <img
                src={currentService.image}
                alt={currentService.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover/stage:scale-[1.03]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

              {/* Tag / Category Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-pink-700 shadow-sm border border-[#E8D2D7]">
                  <Sparkles className="h-3 w-3" />
                  {currentService.categoryName}
                </span>
              </div>

              {/* Reassurance Badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/65 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-pink-300" />
                  <span>Einfühlsame & vertrauensvolle Betreuung</span>
                </span>
              </div>

              {/* Zoom Trigger Button Overlay */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxService(currentService);
                  }}
                  className="flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-[#2B2326] shadow-md hover:bg-white hover:text-pink-700 transition-colors cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Vollbild</span>
                </button>
              </div>
            </div>

            {/* Service Details & Feature Panel (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-pink-700">
                    Leistung {String(safeIndex + 1).padStart(2, '0')} / {String(filteredServices.length).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium text-[#735F64] bg-[#FAF5F6] px-2.5 py-0.5 rounded-md border border-[#F0E6E8]">
                    {currentService.categoryName}
                  </span>
                </div>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#2B2326] leading-tight">
                  {currentService.title}
                </h3>

                <p className="mt-3 text-sm text-[#5C4A4F] leading-relaxed">
                  {currentService.description}
                </p>

                {/* Quote Block */}
                {currentService.quote && (
                  <div className="mt-4 rounded-xl border border-[#F0E6E8] bg-[#FAF5F6] p-3 text-xs italic text-[#4D3F43] leading-relaxed">
                    {currentService.quote}
                  </div>
                )}

                {/* Highlights List */}
                <div className="mt-5 pt-4 border-t border-[#F0E6E8]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#735F64] mb-2.5">
                    Umfasst u.a.:
                  </h4>
                  <div className="space-y-2">
                    {currentService.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#4D3F43]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* For whom hint */}
                <div className="mt-4 rounded-lg bg-[#FAF5F6] p-2.5 text-xs text-[#735F64] border border-[#F0E6E8]/70">
                  <strong className="text-[#2B2326]">Zielgruppe:</strong> {currentService.forWhom}
                </div>
              </div>

              {/* Bottom Atmosphere Note (Clean reassurance, no redundant booking button) */}
              <div className="mt-6 pt-4 border-t border-[#F0E6E8] flex items-center gap-2 text-xs text-[#735F64]">
                <HeartHandshake className="h-4 w-4 text-pink-700 shrink-0" />
                <span>Individuelle Beratung & ausreichend Zeit für Ihr Anliegen</span>
              </div>
            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip (Synchronized Navigation) */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-2.5">
          {filteredServices.map((service, idx) => (
            <button
              key={service.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`group relative overflow-hidden rounded-xl border p-1.5 text-left transition-all cursor-pointer ${
                safeIndex === idx
                  ? 'border-pink-700 bg-white ring-2 ring-pink-700/25 shadow-xs'
                  : 'border-[#F0E6E8] bg-white/70 hover:bg-white hover:border-[#E8D2D7]'
              }`}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`h-full w-full object-cover transition-transform duration-300 ${
                    safeIndex === idx ? 'scale-105' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                  }`}
                  loading="lazy"
                />
                {safeIndex === idx && (
                  <div className="absolute inset-0 bg-pink-700/10 border-2 border-pink-700 rounded-lg pointer-events-none" />
                )}
              </div>
              <div className="mt-1.5 truncate px-0.5">
                <p className={`text-[11px] font-semibold truncate ${
                  safeIndex === idx ? 'text-pink-700' : 'text-[#2B2326]'
                }`}>
                  {service.title}
                </p>
                <p className="text-[9px] text-[#735F64] truncate">
                  {service.categoryName}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setLightboxService(null)}
        >
          <div 
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#F0E6E8] p-4 text-left animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E6E8]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-700">
                  {lightboxService.categoryName}
                </span>
                <h4 className="text-base font-bold text-[#2B2326]">{lightboxService.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxService(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-[#2B2326] hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="mt-3 overflow-hidden rounded-xl border border-[#E8D2D7] bg-neutral-900 aspect-16/10 w-full max-h-[65vh]">
              <img
                src={lightboxService.image}
                alt={lightboxService.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C4A4F]">
              <p className="leading-relaxed">{lightboxService.description}</p>
              <button
                type="button"
                onClick={() => setLightboxService(null)}
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
