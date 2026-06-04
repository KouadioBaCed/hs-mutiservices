"use client";

import { motion } from "framer-motion";
import { Smile, Wrench, CalendarRange, FolderCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

/** Modifiez librement les valeurs ci-dessous. */
const stats = [
  { icon: Smile, value: 500, suffix: "+", label: "Clients satisfaits" },
  { icon: Wrench, value: 1200, suffix: "+", label: "Interventions réalisées" },
  { icon: CalendarRange, value: 10, suffix: " ans", label: "D'expérience" },
  { icon: FolderCheck, value: 350, suffix: "+", label: "Projets réalisés" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-12">
          <div className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-brand-blue/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-brand-red/[0.05] blur-3xl" />

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-soft">
                  <s.icon className="size-7 text-white" />
                </div>
                <div className="mt-4 font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
