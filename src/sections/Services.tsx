"use client";

import { motion } from "framer-motion";
import { PenTool, Package } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Unsere Leistungen"
          subtitle="Wählen Sie zwischen reinem Design oder unserem Premium Full-Service."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Pure Design */}
          <motion.div
            variants={item}
            className="flex flex-col rounded-xl border border-surface-light bg-surface p-8 transition-transform hover:-translate-y-1"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-light text-gold">
              <PenTool size={24} />
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
          </motion.div>

          {/* Full Service */}
          <motion.div
            variants={item}
            className="relative flex flex-col rounded-xl border border-gold/30 bg-surface p-8 shadow-[0_0_40px_-12px_rgba(192,160,98,0.15)] transition-transform hover:-translate-y-1"
          >
            <div className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-background">
              Beliebt
            </div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <Package size={24} />
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
