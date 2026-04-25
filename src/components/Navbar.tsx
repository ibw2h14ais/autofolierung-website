"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useMounted from "@/hooks/useMounted";

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#process", label: "Ablauf" },
  { href: "#gallery", label: "Galerie" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-light/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          <span className="text-gold">A</span>utoFolierung
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+491234567890"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-gold-light"
          >
            <Phone size={16} />
            Anrufen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-surface-light bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+491234567890"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-medium text-background"
              >
                <Phone size={16} />
                Anrufen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
