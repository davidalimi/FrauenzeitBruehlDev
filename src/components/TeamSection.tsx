import { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles,
  Users,
  X,
  ZoomIn
} from 'lucide-react';

interface TeamMember {
  id: string;
  type: 'doctor' | 'manager' | 'mfa';
  name: string;
  role: string;
  badge: string;
  image?: string;
  bio: string;
  points: string[];
  quote: string;
}

export function TeamSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; name: string; role: string } | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 'birkenfeld',
      type: 'doctor',
      name: 'Dr. med. Anika Birkenfeld',
      role: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
      badge: 'Ärztliche Leitung',
      image: `${import.meta.env.BASE_URL}assets/aistudio/anika-birkenfeld.png`,
      bio: 'Ehemalige Oberärztin am Marienhospital Brühl. Besondere Schwerpunkte in der Pränataldiagnostik, onkologischen Nachsorge und Ernährungsmedizin.',
      points: [
        'Schwangerschaftsbetreuung & Pränatalmedizin',
        'Gynäkologische Onkologie & Nachsorge',
        'Ultraschalldiagnostik & Brustsprechstunde',
        'Weiterbildung zur Ernährungsmedizinerin',
      ],
      quote: '„Wir begleiten Sie in Ihren wichtigsten Lebensphasen mit Gründlichkeit, Ruhe und Herz.“',
    },
    {
      id: 'ledwig',
      type: 'doctor',
      name: 'Dr. med. Corinna Ledwig',
      role: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
      badge: 'Ärztliche Leitung',
      image: `${import.meta.env.BASE_URL}assets/aistudio/corinna-ledwig.png`,
      bio: 'Spezialisiert auf ganzheitliche Frauengesundheit, Teenager-Sprechstunde, Wechseljahresberatung sowie innovative Beckenbodentherapie (BetterPelvi®).',
      points: [
        'Ganzheitliche Gynäkologie & Prävention',
        'Wechseljahre & Hormonberatung',
        'Einfühlsame Teenager-Sprechstunde',
        'BetterPelvi® Beckenbodentherapie',
      ],
      quote: '„Jede Frau ist einzigartig. Vertrauen und individuelle Beratung stehen bei uns an erster Stelle.“',
    },
    {
      id: 'engels',
      type: 'manager',
      name: 'Janine Engels',
      role: 'Praxismanagerin',
      badge: 'Praxisleitung',
      image: `${import.meta.env.BASE_URL}assets/aistudio/janine-engels.png`,
      bio: 'Als Praxismanagerin leitet und koordiniert Janine Engels die Praxisorganisation, Abläufe und Qualitätsstandards mit Weitblick und Herzlichkeit.',
      points: [
        'Praxismanagement & Praxisorganisation',
        'Koordination der Sprechstunden & Abläufe',
        'Qualitätsmanagement & Patientinnenservice',
        'Begleitung der Schwangerschaftsvorsorge & CTG',
      ],
      quote: '„Ein reibungsloser Praxisablauf und eine herzliche Atmosphäre schaffen Raum für das Wesentliche: Ihre Gesundheit.“',
    },
    {
      id: 'dittrich',
      type: 'mfa',
      name: 'Saskia Dittrich',
      role: 'Medizinische Fachangestellte (MFA)',
      badge: 'Praxisteam',
      image: `${import.meta.env.BASE_URL}assets/aistudio/saskia-dittrich.jpg`,
      bio: 'Mit Herzlichkeit, Organisationstalent und einem offenen Ohr sorgt sie für eine verlässliche Koordination und kurze Wartezeiten am Empfang.',
      points: [
        'Patientinnenbetreuung & Erstaufnahme',
        'Terminkoordination & Sprechstundenassistenz',
        'Rezept- & Überweisungsmanagement',
        'Telefonische Beratung & Service',
      ],
      quote: '„Ein herzliches Lächeln und ein reibungsloser Ablauf geben Ihnen Sicherheit bei jedem Besuch.“',
    },
    {
      id: 'graefen',
      type: 'mfa',
      name: 'Melissa Graefen',
      role: 'Medizinische Fachangestellte (MFA)',
      badge: 'Praxisteam',
      image: `${import.meta.env.BASE_URL}assets/aistudio/melissa-graefen.jpg`,
      bio: 'Verantwortlich für das Praxislabor und diagnostische Vorbereitungen mit höchster Präzision und empathischer Fürsorge.',
      points: [
        'Blutentnahmen & Laboranalysen',
        'Vorbereitung gynäkologischer Abstriche',
        'Impfberatung & Impfpasskontrolle',
        'Hygienemanagement & Qualitätssicherung',
      ],
      quote: '„Einfühlsamkeit und Genauigkeit im Labor schaffen die verlässliche Basis für Ihre Diagnose.“',
    },
    {
      id: 'greger',
      type: 'mfa',
      name: 'Nina Greger',
      role: 'Medizinische Fachangestellte (MFA)',
      badge: 'Praxisteam',
      image: `${import.meta.env.BASE_URL}assets/aistudio/nina-greger.jpg`,
      bio: 'Unterstützt bei gynäkologischen Untersuchungen, Vorsorgen und Behandlungen mit Ruhe, Erfahrung und menschlicher Wärme.',
      points: [
        'Assistenz bei Krebsfrüherkennungsuntersuchungen',
        'Begleitung bei Spiraleneinlagen',
        'Patientinnenbetreuung vor & nach Behandlungen',
        'Geräteaufbereitung & Qualitätssicherung',
      ],
      quote: '„Wir möchten, dass Sie sich von der ersten bis zur letzten Minute gut aufgehoben fühlen.“',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 border-b border-[#F0E6E8] bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
            <Users className="h-3.5 w-3.5" />
            <span>Praxisteam Frauenzeit Brühl · 6 Teammitglieder</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl">
            Unser Praxisteam
          </h2>
          <p className="mt-2 text-sm text-[#5C4A4F] leading-relaxed">
            Mit Fachkompetenz, Empathie und moderner Medizin begleiten wir Sie durch jede Lebensphase. Lernen Sie das gesamte Praxisteam kennen.
          </p>
        </div>

        {/* Team Members Grid: Pure Responsive Raster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-2xl border border-[#F0E6E8] bg-[#FCF8F9] p-6 text-left shadow-xs transition-all hover:border-[#E8D2D7] hover:shadow-sm"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs font-semibold text-pink-700">
                  {member.badge}
                </span>
                <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                  member.type === 'doctor' 
                    ? 'bg-pink-700 text-white' 
                    : member.type === 'manager'
                    ? 'bg-[#8F2342] text-white'
                    : 'bg-[#FAF0F3] text-pink-700 border border-[#E8D2D7]'
                }`}>
                  {member.type === 'doctor' ? 'Fachärztin' : member.type === 'manager' ? 'Praxismanagerin' : 'MFA'}
                </span>
              </div>

              {/* Portrait Photo */}
              {member.image ? (
                <div 
                  className="mt-4 overflow-hidden rounded-xl border border-[#E8D2D7] bg-white aspect-4/5 w-full shadow-2xs group/img cursor-pointer relative"
                  onClick={() => setSelectedPhoto({ src: member.image!, name: member.name, role: member.role })}
                  title="Klicken zum Vergrößern"
                >
                  <img
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.02]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const imgSrc = member.image;
                      if (imgSrc && !target.src.includes('public/')) {
                        const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                        target.src = `./public/${rel}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-end justify-end p-2.5">
                    <span className="rounded-lg bg-white/90 p-1.5 text-[#2B2326] shadow-xs backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-dashed border-[#E8D2D7] bg-[#FAF5F6] aspect-4/5 w-full text-center p-4">
                  <div className="h-16 w-16 rounded-full bg-white border border-[#E8D2D7] flex items-center justify-center text-pink-700 font-bold text-lg shadow-2xs">
                    {member.name
                      .split(' ')
                      .filter((n) => !n.startsWith('Dr.') && !n.startsWith('med.'))
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="mt-3 text-xs font-semibold text-[#2B2326]">{member.name}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-pink-700 mt-1 rounded-full bg-pink-50 px-2.5 py-0.5 border border-pink-100">
                    <Sparkles className="h-3 w-3" />
                    Porträtfoto folgt
                  </span>
                </div>
              )}

              {/* Name & Role */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#2B2326] leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-pink-700 mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* Bio summary */}
              <p className="mt-3 text-xs text-[#5C4A4F] leading-relaxed">
                {member.bio}
              </p>

              {/* Quote */}
              <div className="mt-4 rounded-xl border border-[#F0E6E8] bg-white p-3 text-[11px] italic text-[#4D3F43]">
                {member.quote}
              </div>

              {/* Key Tasks / Focus points */}
              <div className="mt-4 pt-4 border-t border-[#F0E6E8] space-y-1.5 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#735F64] block mb-1">
                  Schwerpunkte:
                </span>
                {member.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-1.5 text-[11px] text-[#5C4A4F]">
                    <CheckCircle2 className="h-3 w-3 text-pink-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-sm sm:max-w-md w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#F0E6E8] p-4 text-left animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E6E8]">
              <div>
                <h4 className="text-base font-bold text-[#2B2326]">{selectedPhoto.name}</h4>
                <p className="text-xs text-pink-700 font-medium">{selectedPhoto.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-[#2B2326] hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] aspect-3/4 w-full">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-3 text-right">
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="rounded-lg bg-[#2B2326] px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors cursor-pointer"
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
