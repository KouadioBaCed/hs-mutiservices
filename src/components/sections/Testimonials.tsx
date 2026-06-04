"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Konan A.",
    role: "Directeur — PME industrielle",
    text: "VH Multiservices assure l'entretien de nos locaux depuis un an. Réactivité, sérieux et un résultat toujours impeccable. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Aminata D.",
    role: "Gérante de commerce",
    text: "Une équipe professionnelle et à l'écoute. Les délais sont respectés et la qualité est au rendez-vous. Un vrai partenaire de confiance.",
    rating: 5,
  },
  {
    name: "Yao K.",
    role: "Responsable administratif",
    text: "De la maintenance à la fourniture de matériel, tout est géré avec rigueur. Leur accompagnement nous fait gagner un temps précieux.",
    rating: 5,
  },
  {
    name: "Fatou S.",
    role: "Particulier",
    text: "Service rapide et soigné, du premier contact jusqu'à la fin de la prestation. Je fais désormais appel à eux régulièrement.",
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const go = React.useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <section
      id="temoignages"
      className="relative scroll-mt-24 overflow-hidden bg-brand-offwhite py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.06] blur-3xl" />
      <div className="container-tight relative">
        <SectionHeader
          eyebrow="Témoignages"
          title={
            <>
              Ils nous font <span className="text-tricolor">confiance</span>
            </>
          }
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-strong rounded-3xl p-8 text-center sm:p-12"
              >
                <Quote className="mx-auto size-10 text-brand-red" />
                <div className="mt-4 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-slate-700 sm:text-xl">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-heading text-base font-semibold uppercase tracking-wide text-brand-navy">
                    {t.name}
                  </div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-soft transition-colors hover:border-brand-blue/40 hover:bg-slate-50"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-8 bg-brand-red" : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-soft transition-colors hover:border-brand-blue/40 hover:bg-slate-50"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
