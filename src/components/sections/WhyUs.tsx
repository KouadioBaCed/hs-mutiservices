"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Timer,
  CalendarClock,
  ThumbsUp,
  Puzzle,
  Headphones,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const reasons = [
  { icon: UserCheck, title: "Équipe qualifiée", text: "Des professionnels formés et expérimentés pour chaque mission." },
  { icon: Timer, title: "Intervention rapide", text: "Une réactivité qui fait la différence quand vous en avez besoin." },
  { icon: CalendarClock, title: "Respect des délais", text: "Nous tenons nos engagements, du devis à la livraison." },
  { icon: ThumbsUp, title: "Satisfaction client", text: "Un taux de satisfaction élevé et des clients fidèles." },
  { icon: Puzzle, title: "Solutions adaptées", text: "Des prestations sur mesure, alignées sur vos besoins réels." },
  { icon: Headphones, title: "Accompagnement personnalisé", text: "Un interlocuteur dédié, à l'écoute tout au long du projet." },
];

export function WhyUs() {
  return (
    <section
      id="pourquoi-nous"
      className="relative scroll-mt-24 overflow-hidden bg-brand-offwhite py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="container-tight relative">
        <SectionHeader
          eyebrow="Pourquoi nous choisir"
          title={
            <>
              De bonnes raisons de nous{" "}
              <span className="text-tricolor">faire confiance</span>
            </>
          }
        />

        <div className="relative mt-12 sm:mt-16">
          {/* ligne verticale : à gauche sur mobile, centrée sur desktop */}
          <div className="absolute left-[22px] top-2 bottom-2 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-blue via-brand-red to-brand-blue lg:left-1/2" />

          <ol className="space-y-7 lg:space-y-12">
            {reasons.map((r, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={r.title}
                  className="relative pl-14 sm:pl-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={[
                      "glass rounded-2xl p-5 transition-shadow hover:shadow-card sm:p-6 lg:max-w-md",
                      isLeft ? "lg:col-start-1" : "lg:col-start-2 lg:ml-auto",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-soft sm:size-12">
                        <r.icon className="size-5 text-white sm:size-6" />
                      </div>
                      <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-brand-navy sm:text-lg">
                        {r.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {r.text}
                    </p>
                  </motion.div>

                  {/* connecteur horizontal vers la ligne */}
                  <span
                    className={[
                      "absolute top-9 h-[3px] -translate-y-1/2 bg-gradient-to-r from-brand-blue/50 to-brand-red/50 sm:top-10",
                      "left-[22px] w-9 sm:w-10", // mobile : du rail vers la carte
                      isLeft
                        ? "lg:left-auto lg:right-1/2 lg:top-12 lg:w-12"
                        : "lg:left-1/2 lg:top-12 lg:w-12",
                    ].join(" ")}
                  />

                  {/* pastille numérotée sur la ligne */}
                  <span className="absolute left-[22px] top-9 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white shadow-[0_0_0_4px_#fff,0_6px_16px_-4px_rgba(13,45,107,0.5)] sm:top-10 sm:size-9 lg:left-1/2 lg:top-12">
                    {i + 1}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
