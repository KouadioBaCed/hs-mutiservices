"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  Wind,
  Wrench,
  ShieldCheck,
  Truck,
  BadgeCheck,
  ArrowRight,
  MessageCircle,
  Building2,
  Home,
  LayoutGrid,
  Gauge,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { SplitUnit } from "@/components/visuals/SplitUnit";
import { SplitCarousel } from "@/components/sections/SplitCarousel";
import { whatsappLink } from "@/lib/site";

/** Types de splits proposés */
const types = [
  {
    icon: Home,
    title: "Split mural",
    text: "Le grand classique pour chambres, salons et bureaux. Discret et économique.",
  },
  {
    icon: LayoutGrid,
    title: "Split cassette",
    text: "Encastré au plafond, diffusion 4 directions pour les grands espaces.",
  },
  {
    icon: Wind,
    title: "Console / plafonnier",
    text: "Idéal en commerce et salle d'attente, soufflage puissant et homogène.",
  },
  {
    icon: Building2,
    title: "Armoire de climatisation",
    text: "Forte puissance pour halls, restaurants, salles de réception et industrie.",
  },
  {
    icon: Wind,
    title: "Gainable",
    text: "Invisible et silencieux, intégré dans les faux-plafonds pour un rendu haut de gamme.",
  },
  {
    icon: LayoutGrid,
    title: "Multi-split",
    text: "Une seule unité extérieure pour climatiser plusieurs pièces à la fois.",
  },
];

/** Puissances disponibles (BTU) */
const capacities = ["9 000", "12 000", "18 000", "24 000", "36 000", "48 000+"];

/** Garanties / services inclus */
const guarantees = [
  { icon: Truck, label: "Livraison rapide" },
  { icon: Wrench, label: "Installation pro" },
  { icon: ShieldCheck, label: "Garantie constructeur" },
  { icon: BadgeCheck, label: "SAV & entretien" },
];

export function Splits() {
  return (
    <section
      id="climatisation"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* fonds */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-24 size-[420px] rounded-full bg-brand-blue/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-[360px] rounded-full bg-brand-red/[0.05] blur-[120px]" />

      <div className="container-tight relative">
        <SectionHeader
          eyebrow="Notre activité phare"
          title={
            <>
              Vente de <span className="text-tricolor">climatiseurs split</span>{" "}
              de tout genre
            </>
          }
          description="Particuliers, commerces ou entreprises : nous fournissons, installons et entretenons tous types de splits, toutes marques et toutes puissances. Le confort thermique, livré clé en main."
        />

        {/* Bouton catalogue → carousel */}
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <SplitCarousel />
        </Reveal>

        {/* Bloc vitrine principal */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* visuel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-brand-gradient p-8 shadow-premium ring-1 ring-brand-navy/10 sm:p-12"
          >
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-red/20 blur-2xl" />
            <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-brand-blue/30 blur-2xl" />
            <div className="absolute inset-0 bg-grid-light opacity-40" />

            <div className="relative z-10 w-full max-w-md">
              <SplitUnit />
            </div>

            <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-white/20 backdrop-blur">
              <Snowflake className="size-3.5" /> Air froid garanti
            </div>
          </motion.div>

          {/* texte + arguments */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-brand-navy sm:text-3xl">
              Du choix de l&apos;appareil à la mise en service
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Nous vous conseillons la puissance adaptée à votre surface, nous
              vous proposons les meilleures marques au juste prix, puis nos
              techniciens assurent une installation propre et sécurisée.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3">
              {guarantees.map((g) => (
                <li
                  key={g.label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient">
                    <g.icon className="size-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-brand-navy">
                    {g.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* puissances */}
            <div className="mt-7">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Gauge className="size-4 text-brand-red" /> Puissances
                disponibles (BTU)
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {capacities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-3.5 py-1.5 text-sm font-semibold text-brand-navy"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent">
                <a href="#contact">
                  Demander un devis <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" /> Commander sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Grille des types de splits */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-navy sm:text-2xl">
              Tous les types de splits, sous le même toit
            </h3>
          </div>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => (
              <StaggerItem key={t.title}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:border-brand-blue/40 hover:shadow-card"
                >
                  <div className="absolute -right-12 -top-12 size-32 rounded-full bg-brand-blue/[0.07] blur-2xl transition-all group-hover:bg-brand-red/10" />
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue via-brand-red to-brand-blue transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative flex size-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-soft">
                    <t.icon className="size-7 text-white" />
                  </div>
                  <h4 className="relative mt-5 font-heading text-lg font-semibold uppercase tracking-wide text-brand-navy">
                    {t.title}
                  </h4>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600">
                    {t.text}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
