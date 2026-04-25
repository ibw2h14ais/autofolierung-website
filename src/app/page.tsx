export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface)_0%,_#0a0a0a_70%)]" />
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Premium-Autofolierung.
            <br />
            <span className="text-gold">Design &amp; Service aus einer Hand.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Vom digitalen Layout bis zur fertigen Beklebung — inklusive Abholung,
            Transport und Rücklieferung Ihres Fahrzeugs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-8 text-sm font-medium text-background transition-colors hover:bg-gold-light"
            >
              Jetzt Design-Check buchen
            </a>
            <a
              href="#process"
              className="inline-flex h-12 items-center justify-center rounded-md border border-surface-light px-8 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              So funktioniert&apos;s
            </a>
          </div>
        </div>
      </section>

      {/* Services: Pure Design vs Full Service */}
      <section id="services" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-4 text-muted">
              Wählen Sie zwischen reinem Design oder unserem Premium Full-Service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Pure Design */}
            <div className="flex flex-col rounded-xl border border-surface-light bg-surface p-8 transition-transform hover:-translate-y-1">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-light text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Pure Design</h3>
              <p className="mt-2 text-muted">
                Das perfekte digitale Design — bereit für die Umsetzung.
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  3D-Fahrzeug-Templating &amp; digitale Druckvorlagen
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Professionelles Layout &amp; Farbabstimmung
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Druckfertige Daten für jeden Folierer
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Mehrere Design-Revisionen inklusive
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gold px-6 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-background"
                >
                  Design anfragen
                </a>
              </div>
            </div>

            {/* Full Service */}
            <div className="relative flex flex-col rounded-xl border border-gold/30 bg-surface p-8 shadow-[0_0_40px_-12px_rgba(192,160,98,0.15)] transition-transform hover:-translate-y-1">
              <div className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-background">
                Beliebt
              </div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="16" height="13" x="4" y="5" rx="2" />
                  <path d="m16 2-4 4-4-4" />
                  <path d="M7 18v3h10v-3" />
                  <path d="M12 13v.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Full Service</h3>
              <p className="mt-2 text-muted">
                End-to-End: Von der Idee bis zur Rücklieferung.
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Inklusive allem aus „Pure Design"
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Abholung des Fahrzeugs beim Kunden
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Transport zum zertifizierten Partner-Folierer
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Qualitätskontrolle nach definierten Standards
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold">●</span>
                  Rücklieferung zum Wunschort
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-medium text-background transition-colors hover:bg-gold-light"
                >
                  Full-Service-Beratung buchen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              So funktioniert unser Service
            </h2>
            <p className="mt-4 text-muted">
              Ihr Fahrzeug ist bei uns in guten Händen — von der Abholung bis zur Rücklieferung.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-surface-light md:left-1/2" />
            {[
              {
                step: "01",
                title: "Terminvereinbarung & Design-Abstimmung",
                text: "Persönliches Gespräch (Vor-Ort, Video oder Telefon). Festlegung des Designs und des Leistungsumfangs.",
              },
              {
                step: "02",
                title: "Sichere Abholung Ihres Fahrzeugs",
                text: "Abholung durch spezialisierten Fahrzeugtransport. Digitale Zustandsdokumentation mit Fotos und Übergabeprotokoll.",
              },
              {
                step: "03",
                title: "Transport zum Partner-Folierer",
                text: "Transport durch lizenzierte und versicherte Fahrer. Optional: Live-Status-Updates via WhatsApp oder E-Mail.",
              },
              {
                step: "04",
                title: "Folierung & Qualitätskontrolle",
                text: "Umsetzung durch zertifizierte Partner. Mehrstufige Qualitätskontrolle: Sichtprüfung, Haltbarkeit, Abnahme-Check.",
              },
              {
                step: "05",
                title: "Rücktransport & Rücklieferung",
                text: "Sicherer Transport zurück zum Kunden. Erneute Zustandsdokumentation, Einweisung in Pflege & Garantie.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`relative mb-12 flex flex-col gap-4 md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1" />
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-xs font-bold text-background md:left-1/2">
                  {item.step}
                </div>
                <div className="flex-1 pl-12 md:pl-0">
                  <div
                    className={`rounded-xl border border-surface-light bg-surface p-6 ${
                      idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-surface px-4 py-2 text-xs font-medium text-gold">
              Vollkasko-versicherter Transport
            </span>
            <span className="rounded-full bg-surface px-4 py-2 text-xs font-medium text-gold">
              Zertifizierte Partner-Folierer
            </span>
            <span className="rounded-full bg-surface px-4 py-2 text-xs font-medium text-gold">
              Zustandsdokumentation bei jeder Übergabe
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-surface-light bg-surface p-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Bereit für Ihr neues Fahrzeug-Design?
          </h2>
          <p className="mt-4 text-muted">
            Ob reines Design oder Full-Service — wir beraten Sie gerne persönlich.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@autofolierung.de?subject=Design-Check%20buchen"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-8 text-sm font-medium text-background transition-colors hover:bg-gold-light"
            >
              Jetzt Design-Check buchen
            </a>
            <a
              href="tel:+491234567890"
              className="inline-flex h-12 items-center justify-center rounded-md border border-surface-light px-8 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Kostenloses Beratungsgespräch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
