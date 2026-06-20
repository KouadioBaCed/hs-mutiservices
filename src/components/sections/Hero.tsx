"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Snowflake,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site";
import { SplitUnit } from "@/components/visuals/SplitUnit";

const highlights = [
  { icon: Snowflake, label: "Splits toutes marques" },
  { icon: Wrench, label: "Installation pro" },
  { icon: ShieldCheck, label: "Garantie & SAV" },
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
            Spécialiste climatisation · {siteConfig.country}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-brand-navy sm:text-5xl md:text-6xl"
          >
            Vente de <span className="text-tricolor">climatiseurs split</span> de
            tout genre
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {siteConfig.name}, votre partenaire multiservices, fournit, installe
            et entretient tous types de splits — pour particuliers, commerces et
            entreprises en {siteConfig.country}.
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
              <a href="#climatisation">
                Voir nos climatiseurs <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Devis WhatsApp
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
                <span className="flex items-center gap-2 font-heading text-sm uppercase tracking-[0.25em] text-white/70">
                  <span className="relative block h-7 w-16">
                    <Image
                      src="/logo.png"
                      alt="VH Multiservices"
                      fill
                      sizes="64px"
                      className="object-contain object-left brightness-0 invert"
                    />
                  </span>
                  Climatisation
                </span>
                <span className="rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Pro
                </span>
              </div>

              <div className="relative z-10 my-6 flex flex-1 items-center justify-center">
                <div className="w-full max-w-[300px]">
                  <SplitUnit />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "Toutes", l: "Marques" },
                  { k: "9-48k", l: "BTU" },
                  { k: "Pose", l: "Incluse" },
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
