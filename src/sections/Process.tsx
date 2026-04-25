"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const steps = [
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
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="So funktioniert unser Service"
          subtitle="Ihr Fahrzeug ist bei uns in guten Händen — von der Abholung bis zur Rücklieferung."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-surface-light md:left-1/2" />
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`relative mb-12 flex flex-col gap-4 md:flex-row ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-xs font-bold text-background md:left-1/2"
              >
                {item.step}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 pl-12 md:pl-0"
              >
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
              </motion.div>
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
  );
}
