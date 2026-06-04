"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  Wrench,
  ShoppingCart,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    icon: Briefcase,
    title: "Prestation de services divers",
    text: "Des solutions adaptées aux besoins des particuliers et des entreprises, pour vous décharger de l'essentiel.",
  },
  {
    icon: Sparkles,
    title: "Nettoyage professionnel",
    text: "Nettoyage et entretien de bureaux, locaux commerciaux et espaces professionnels.",
  },
  {
    icon: Wrench,
    title: "Maintenance et réparation",
    text: "Travaux de maintenance préventive et corrective pour préserver vos installations.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce général",
    text: "Achat, vente et distribution de produits et marchandises de qualité.",
  },
  {
    icon: Handshake,
    title: "Intermédiation commerciale",
    text: "Mise en relation et accompagnement commercial pour développer votre activité.",
  },
];

export function Missions() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-brand-offwhite py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="container-tight">
        <SectionHeader
          eyebrow="Nos missions"
          title={
            <>
              Des prestations <span className="text-tricolor">complètes</span>
            </>
          }
          description="Une gamme de services pensée pour accompagner chaque étape de vos projets, avec exigence et réactivité."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <StaggerItem key={s.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition-all hover:border-brand-blue/40 hover:shadow-card"
              >
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-brand-blue/[0.07] blur-2xl transition-all group-hover:bg-brand-red/10" />
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue via-brand-red to-brand-blue transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-soft">
                    <s.icon className="size-7 text-white" />
                  </div>
                  <span className="font-heading text-4xl font-bold text-slate-200 transition-colors group-hover:text-brand-red/30">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-brand-navy">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {s.text}
                </p>

                <span className="relative mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-brand-red opacity-0 transition-opacity group-hover:opacity-100">
                  En savoir plus <ArrowUpRight className="size-4" />
                </span>
              </motion.article>
            </StaggerItem>
          ))}

          {/* Carte CTA */}
          <StaggerItem>
            <a
              href="#contact"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-brand-gradient p-8 shadow-premium"
            >
              <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-brand-red/30 blur-2xl" />
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold uppercase leading-tight text-white">
                  Un besoin précis&nbsp;?
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Parlez-nous de votre projet. Nous concevons une solution sur
                  mesure pour vous.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-white">
                Demander un devis
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
