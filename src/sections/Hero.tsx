"use client";

import { motion } from "framer-motion";
import useMounted from "@/hooks/useMounted";

export default function Hero() {
  const mounted = useMounted();
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface)_0%,_#0a0a0a_70%)]" />
      <motion.div
        initial={false}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-4xl flex-col items-center gap-8"
      >
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
      </motion.div>
    </section>
  );
}
