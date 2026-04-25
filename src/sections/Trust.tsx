"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Truck, value: "500+", label: "Fahrzeuge foliert" },
  { icon: Users, value: "98%", label: "Kundenzufriedenheit" },
  { icon: ShieldCheck, value: "0", label: "Transportschäden" },
  { icon: Award, value: "100%", label: "Zertifizierte Partner" },
];

const testimonials = [
  {
    quote:
      "Die komplette Flotte wurde professionell beklebt — vom Design bis zur Abwicklung lief alles reibungslos.",
    author: "Markus Schneider",
    role: "Flottenleiter, Bauunternehmen Schneider GmbH",
  },
  {
    quote:
      "Endlich jemand, der das Auto abholt und wiederbringt. Das Ergebnis ist perfekt, ich bin begeistert!",
    author: "Julia Weber",
    role: "Privatkundin",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Warum uns vertrauen?"
          subtitle="Zahlen, Referenzen und Partnerschaften, die überzeugen."
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-surface-light bg-surface p-6 text-center"
            >
              <s.icon className="mb-3 text-gold" size={28} />
              <span className="text-2xl font-bold text-foreground">{s.value}</span>
              <span className="mt-1 text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-xl border border-surface-light bg-surface p-8"
            >
              <p className="text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gold">{t.author}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
