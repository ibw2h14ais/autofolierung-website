"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "Wie lange dauert der Full-Service?",
    answer:
      "In der Regel 5–10 Werktage, je nach Umfang der Folierung und aktueller Auslastung. Wir nennen Ihnen vorab einen verbindlichen Zeitrahmen.",
  },
  {
    question: "Ist mein Fahrzeug während des Transports versichert?",
    answer:
      "Ja. Der Transport ist vollkasko-versichert. Zusätzlich dokumentieren wir den Zustand bei Abholung und Rücklieferung fotografisch.",
  },
  {
    question: "Kann ich auch nur das Design buchen?",
    answer:
      "Absolut. Mit 'Pure Design' erhalten Sie druckfertige Vorlagen und können die Folierung bei einem Partner Ihrer Wahl umsetzen lassen.",
  },
  {
    question: "Welche Folien werden verwendet?",
    answer:
      "Wir arbeiten ausschließlich mit Premium-Marken wie 3M, Avery Dennison und Oracal. Die Wahl hängt vom gewünschten Effekt und Budget ab.",
  },
  {
    question: "Was kostet eine Folierung?",
    answer:
      "Die Kosten hängen stark von Fahrzeugtyp, Folienfläche und Material ab. Kontaktieren Sie uns für ein unverbindliches Angebot.",
  },
  {
    question: "Wie pflege ich die Folie nach der Beklebung?",
    answer:
      "Wir empfehlen handwaschen ohne Hochdruckreiniger. Bei Übergabe erhalten Sie eine detaillierte Pflegeanleitung mit Garantiebedingungen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Häufig gestellte Fragen" />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-surface-light bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 shrink-0 text-muted"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
