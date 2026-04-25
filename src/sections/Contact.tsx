"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const schema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
  phone: z.string().min(6, "Telefonnummer erforderlich"),
  vehicle: z.string().min(2, "Fahrzeugtyp erforderlich"),
  service: z
    .string()
    .refine((val) => ["design", "fullservice", "unsure"].includes(val), {
      message: "Bitte wählen Sie einen Service",
    }),
  message: z.string().min(10, "Nachricht mindestens 10 Zeichen"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Bereit für Ihr neues Fahrzeug-Design?"
          subtitle="Ob reines Design oder Full-Service — wir beraten Sie gerne persönlich."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Kontaktieren Sie uns
            </h3>
            <p className="mt-4 text-muted">
              Füllen Sie das Formular aus oder erreichen Sie uns direkt. Wir
              melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:+491234567890"
                className="flex items-center gap-4 rounded-xl border border-surface-light bg-surface p-4 transition-colors hover:border-gold/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Telefon</p>
                  <p className="text-sm font-medium text-foreground">
                    +49 123 456 7890
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@autofolierung.de"
                className="flex items-center gap-4 rounded-xl border border-surface-light bg-surface p-4 transition-colors hover:border-gold/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">E-Mail</p>
                  <p className="text-sm font-medium text-foreground">
                    info@autofolierung.de
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-surface-light bg-surface p-10 text-center">
                <CheckCircle className="text-gold" size={48} />
                <h4 className="mt-4 text-xl font-semibold text-foreground">
                  Anfrage gesendet!
                </h4>
                <p className="mt-2 text-muted">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 rounded-xl border border-surface-light bg-surface p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                      placeholder="Max Mustermann"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      E-Mail
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                      placeholder="max@beispiel.de"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      Telefon
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                      placeholder="+49 123 456789"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      Fahrzeugtyp
                    </label>
                    <input
                      {...register("vehicle")}
                      className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                      placeholder="z.B. BMW M4"
                    />
                    {errors.vehicle && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.vehicle.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-foreground">
                    Gewünschter Service
                  </label>
                  <select
                    {...register("service")}
                    className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="design">Pure Design</option>
                    <option value="fullservice">Full Service</option>
                    <option value="unsure">Noch unsicher / Beratung</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-foreground">
                    Nachricht
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full rounded-md border border-surface-light bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-background transition-colors hover:bg-gold-light"
                >
                  <Send size={16} />
                  Anfrage senden
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
