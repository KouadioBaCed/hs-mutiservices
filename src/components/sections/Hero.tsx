"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site";

const highlights = [
  { icon: ShieldCheck, label: "Prestations fiables" },
  { icon: Clock, label: "Intervention rapide" },
  { icon: Award, label: "Qualité garantie" },
];

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallaxe légère
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-[#dfe9f8] via-[#eef3fb] to-white pt-28"
    >
      {/* fonds animés */}
      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute inset-0 bg-hero-radial"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <motion.div
        className="pointer-events-none absolute -left-40 top-24 size-[420px] rounded-full bg-brand-blue/20 blur-[120px]"
        style={{ y: yGlow }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-10 size-[380px] rounded-full bg-brand-red/[0.07] blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-tight relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Colonne texte */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm"
          >
            <span className="size-2 animate-pulse rounded-full bg-brand-red" />
            {siteConfig.legalForm} · {siteConfig.country}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-brand-navy sm:text-5xl md:text-6xl"
          >
            Votre partenaire{" "}
            <span className="text-tricolor">multiservices</span> de confiance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {siteConfig.name} accompagne particuliers et entreprises avec des
            prestations fiables, rapides et professionnelles.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-4 font-serif text-lg italic text-slate-500"
          >
            « {siteConfig.slogan} »
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" variant="accent">
              <a href="#contact">
                Demander un devis <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Contact WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
          >
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <h.icon className="size-4 text-brand-red" />
                {h.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Colonne visuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-square">
            {/* halo */}
            <div className="absolute inset-6 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />

            {/* carte vitrine logo (îlot coloré, ancrage visuel) */}
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-brand-gradient p-8 shadow-premium ring-1 ring-brand-navy/10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-red/20 blur-2xl" />
              <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-brand-blue/25 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-heading text-sm uppercase tracking-[0.3em] text-white/60">
                  VH Multiservices
                </span>
                <span className="rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Pro
                </span>
              </div>

              <div className="relative z-10 my-6 flex flex-1 items-center justify-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-40 w-full max-w-[280px] rounded-2xl bg-white/95 p-6 shadow-2xl"
                >
                  <Image
                    src="/logo.png"
                    alt="VH Multiservices"
                    fill
                    sizes="280px"
                    className="object-contain p-4"
                  />
                </motion.div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "+10", l: "Ans" },
                  { k: "500+", l: "Clients" },
                  { k: "24/7", l: "Support" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/10 bg-white/5 py-3"
                  >
                    <div className="font-heading text-xl font-bold text-white">
                      {s.k}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Découvrir</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-slate-300 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-brand-red"
          />
        </span>
      </motion.div>
    </section>
  );
}
