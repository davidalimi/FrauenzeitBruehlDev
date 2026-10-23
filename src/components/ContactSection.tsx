import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export function ContactSection() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';

  return (
    <section id="sprechzeiten" className="py-16 sm:py-24 bg-[#FAF5F6] border-b border-[#F0E6E8] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Practice Details & Address */}
          <div id="kontakt" className="lg:col-span-6 text-left space-y-6 scroll-mt-24">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-700">
                Kontakt & Anfahrt
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl">
                Wir freuen uns auf Ihren Besuch
              </h2>
              <p className="mt-2 text-sm text-[#5C4A4F]">
                Unsere Praxis liegt gut erreichbar im Herzen von Brühl in der Mühlenstrasse 37.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-[#F0E6E8] shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <a href="https://maps.app.goo.gl/jpkhX3wU7SzwhnGX6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer block">
                <MapPin className="h-5 w-5 text-pink-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm text-[#2B2326]">FrauenzeitBrühl</div>
                  <div className="text-xs text-[#5C4A4F] mt-0.5">Mühlenstrasse 37 · 50321 Brühl</div>
                </div>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#F0E6E8] text-xs">
                <div>
                  <span className="text-[#826970] block font-medium">Telefon</span>
                  <a href="tel:0223243545" className="font-bold text-pink-700 text-sm hover:underline">
                    02232/43545
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#826970] block font-medium">E-Mail</span>
                  <a href="mailto:praxis@frauenzeit-bruehl.de" className="font-medium text-pink-700 hover:underline">
                    praxis@frauenzeit-bruehl.de
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency note */}
            <div className="rounded-xl border border-[#F0D8DE] bg-[#FCF8F9] p-4 text-xs text-[#5C4A4F] space-y-1">
              <span className="font-bold text-pink-700 block">Ärztlicher Notdienst:</span>
              <p>
                In dringenden Notfällen außerhalb der Sprechzeiten erreichen Sie den ärztlichen Bereitschaftsdienst unter der bundesweiten Telefonnummer <strong className="text-[#2B2326]">116 117</strong>.
              </p>
            </div>
          </div>

          {/* Sprechzeiten & Appointment CTA Box */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-white p-6 sm:p-8 border border-[#F0E6E8] shadow-xs text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-700">
              <Clock className="h-4 w-4" />
              <span>Sprechzeiten</span>
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#2B2326]">
              Öffnungszeiten der Praxis
            </h3>
            
            {/* Hours Table */}
            <div className="mt-5 space-y-2 text-xs border-y border-[#F0E6E8] py-4">
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5F6]">
                <span className="font-semibold text-[#2B2326]">Montag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5F6]">
                <span className="font-semibold text-[#2B2326]">Dienstag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5F6]">
                <span className="font-semibold text-[#2B2326]">Mittwoch</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5F6]">
                <span className="font-semibold text-[#2B2326]">Donnerstag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-semibold text-[#2B2326]">Freitag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums">08:30 – 14:00 Uhr</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-pink-800 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Termin online buchen</span>
              </a>

              <a
                href="tel:0223243545"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] px-5 py-3 text-xs sm:text-sm font-semibold text-pink-700 hover:bg-[#FAF5F6] transition-all"
              >
                <Phone className="h-4 w-4 text-pink-700" />
                <span>02232/43545</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
