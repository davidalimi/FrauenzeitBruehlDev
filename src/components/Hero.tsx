import { Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { CherryBlossomBranch, CottonSprig } from './BotanicalDecorations';

export function Hero() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';
  const teamPhotoUrl = `${import.meta.env.BASE_URL}assets/aistudio/team.png`;

  return (
    <section className="relative overflow-hidden border-b border-[#F0E6E8] bg-gradient-to-b from-[#FAF5F6] via-white to-[#FCFBF9] py-12 sm:py-16 lg:py-20">
      {/* Subtle Botanical Watermarks (Non-intrusive organic corner accents) */}
      <div className="absolute -top-6 -right-6 pointer-events-none select-none opacity-25 hidden md:block">
        <CherryBlossomBranch className="w-80 h-80 text-pink-300" />
      </div>
      <div className="absolute -bottom-10 -left-6 pointer-events-none select-none opacity-20 hidden sm:block">
        <CottonSprig className="w-64 h-64 text-[#CDB4BA]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Grid: Text Left, Team Photo Right on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Leitmotiv & Direct Actions */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF5F6] px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-pink-700 border border-[#F0E6E8] mb-4 shadow-2xs">
              <span>Ganzheitlich · Individuell · Stärkend</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#2B2326] leading-tight" style={{ textWrap: 'balance' }}>
              Frauenzeit<span className="text-pink-700">Brühl</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-medium text-pink-700 tracking-tight leading-snug">
              Zeit für Frauen. <br className="hidden sm:inline" />
              Zeit für Gesundheit. <br className="hidden sm:inline" />
              Zeit für Sie.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5C4A4F] max-w-xl">
              Wir begleiten Sie in jeder Lebensphase mit Kompetenz, Herz und einem ganzheitlichen Blick auf Ihre Gesundheit in unserer modernen Praxis im Herzen von Brühl.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Termin online vereinbaren</span>
              </a>

              <a
                href="tel:0223243545"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-white px-6 py-3.5 text-sm font-semibold text-pink-700 shadow-2xs hover:bg-[#FAF5F6] active:scale-[0.98] transition-all"
              >
                <Phone className="h-4 w-4 text-pink-700" />
                <span>02232/43545</span>
              </a>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-[#F0E6E8] flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#735F64]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0" />
                <span>Fachärztinnen für Frauenheilkunde</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0" />
                <span>Zentrale Lage in Brühl</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Showcase Team Photograph */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#F0E6E8] bg-white p-2.5 sm:p-3 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#F7EFF1]">
                <img
                  src={teamPhotoUrl}
                  alt="Das Team der Praxis Frauenzeit Brühl"
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public/')) {
                      target.src = './public/assets/aistudio/team.png';
                    }
                  }}
                />
              </div>

              {/* Clean, Subtle Caption below the photo */}
              <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs text-[#735F64] bg-[#FAF5F6]/70 rounded-xl mt-2.5">
                <span className="font-semibold text-[#2B2326]">
                  Ihr Praxisteam FrauenzeitBrühl
                </span>
                <span className="text-[11px] text-pink-700 font-medium inline-flex items-center gap-1">
                  Gemeinsam für Ihre Gesundheit
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
