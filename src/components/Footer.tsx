import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-light bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight text-foreground">
              <span className="text-gold">A</span>utoFolierung
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Premium-Autofolierung aus einer Hand. Design, Abholung, Folierung
              und Rücklieferung — für Unternehmen und Privatkunden.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Kontakt
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+491234567890"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Phone size={16} />
                  +49 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@autofolierung.de"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail size={16} />
                  info@autofolierung.de
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={16} />
                  Musterstraße 1, 12345 Musterstadt
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Rechtliches
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-gold">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-gold">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-gold">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-light pt-8 text-center text-xs text-muted" suppressHydrationWarning>
          © 2026 AutoFolierung. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
