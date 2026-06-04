"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Globe2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-7 py-16 shadow-premium sm:px-14 sm:py-20">
            {/* décor */}
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-red/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-brand-navy/60 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                <Target className="size-4" /> Notre Vision
              </span>

              <h2 className="mt-7 font-heading text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
                Devenir l&apos;entreprise de{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">référence</span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-red/60" />
                </span>{" "}
                des multiservices
              </h2>

              <p className="mx-auto mt-7 max-w-2xl font-serif text-lg italic leading-relaxed text-white/85 sm:text-xl">
                « Devenir une entreprise de référence dans le secteur des
                multiservices en {siteConfig.country} en offrant des prestations
                innovantes et à forte valeur ajoutée. »
              </p>

              <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
                {[
                  { icon: TrendingUp, label: "Innovation continue" },
                  { icon: Globe2, label: "Rayonnement national & international" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur"
                  >
                    <item.icon className="size-5 shrink-0 text-white" />
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
