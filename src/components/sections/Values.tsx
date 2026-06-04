"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap, BadgeCheck, Smile } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const values = [
  { icon: Award, title: "Professionnalisme", text: "L'excellence dans chaque intervention." },
  { icon: ShieldCheck, title: "Intégrité", text: "Honnêteté et transparence en toute circonstance." },
  { icon: Zap, title: "Réactivité", text: "Des réponses et interventions rapides." },
  { icon: BadgeCheck, title: "Qualité de service", text: "Un standard élevé, sans compromis." },
  { icon: Smile, title: "Satisfaction client", text: "Votre satisfaction, notre priorité absolue." },
];

export function Values() {
  return (
    <section id="valeurs" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Nos valeurs"
          title={
            <>
              Ce qui nous <span className="text-tricolor">anime</span>
            </>
          }
          description="Des principes forts qui guident chacune de nos décisions et de nos prestations."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft transition-all hover:border-brand-red/40 hover:shadow-card"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-brand-red/[0.06] to-transparent transition-transform duration-500 group-hover:translate-y-0" />
                <div className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-brand-gradient group-hover:ring-brand-blue/50">
                  <v.icon className="size-7 text-brand-red transition-colors group-hover:text-white" />
                </div>
                <h3 className="relative mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-xs leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
