"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

type Category = "all" | "b2b" | "b2c";

interface Project {
  id: number;
  category: Category;
  title: string;
  vehicle: string;
  src: string;
}

const projects: Project[] = [
  { id: 1, category: "b2b", title: "Flottenbeklebung", vehicle: "VW Transporter", src: "/images/.gitkeep" },
  { id: 2, category: "b2c", title: "Vollfolierung Chrom-Schwarz", vehicle: "BMW M4", src: "/images/.gitkeep" },
  { id: 3, category: "b2b", title: "Baustellen-Fahrzeug", vehicle: "Mercedes Sprinter", src: "/images/.gitkeep" },
  { id: 4, category: "b2c", title: "Lackschutzfolierung", vehicle: "Porsche 911", src: "/images/.gitkeep" },
  { id: 5, category: "b2c", title: "Matte Military Green", vehicle: "Audi RS6", src: "/images/.gitkeep" },
  { id: 6, category: "b2b", title: "Komplett-Flotte", vehicle: " diverse Nutzfahrzeuge", src: "/images/.gitkeep" },
];

const filters: { label: string; value: Category }[] = [
  { label: "Alle", value: "all" },
  { label: "B2B / Flotten", value: "b2b" },
  { label: "B2C / Privat", value: "b2c" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("all");
  const filtered = projects.filter((p) => (active === "all" ? true : p.category === active));

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Galerie"
          subtitle="Ein Auszug unserer realisierten Projekte."
        />

        {/* Filter */}
        <div className="mb-12 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === f.value
                  ? "bg-gold text-background"
                  : "border border-surface-light text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-xl border border-surface-light bg-surface"
              >
                <div className="relative aspect-[4/3] bg-surface-light">
                  <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                    <span className="rounded-full border border-surface-light px-3 py-1">
                      {project.vehicle}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    {project.category === "b2b" ? "B2B / Flotte" : "B2C / Privat"}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-foreground">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
