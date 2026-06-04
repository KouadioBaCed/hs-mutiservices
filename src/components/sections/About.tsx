"use client";

import { motion } from "framer-motion";
import { Building2, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

const pillars = [
  { icon: Building2, title: "Expérience", text: "Une expertise éprouvée au service des particuliers et des entreprises." },
  { icon: ShieldCheck, title: "Professionnalisme", text: "Des prestations rigoureuses, conformes aux meilleurs standards." },
  { icon: HeartHandshake, title: "Confiance", text: "Une relation durable bâtie sur la transparence et l'écoute." },
  { icon: Users, title: "Accompagnement", text: "Un suivi personnalisé, du premier contact à la livraison." },
];

export function About() {
  return (
    <section id="a-propos" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">À propos de nous</span>
            <h2 className="section-heading mt-3">
              Une entreprise <span className="text-tricolor">multiservices</span>{" "}
              au service de votre réussite
            </h2>
            <div className="divider-tricolor mt-5 h-[3px] w-24 rounded-full" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {siteConfig.name} est une {siteConfig.legalForm} spécialisée dans la
              prestation de services aux particuliers et aux entreprises en{" "}
              {siteConfig.country} et à l&apos;international.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Notre engagement repose sur la{" "}
              <span className="font-semibold text-brand-navy">qualité</span>, la{" "}
              <span className="font-semibold text-brand-navy">réactivité</span> et la{" "}
              <span className="font-semibold text-brand-navy">satisfaction client</span>.
            </p>
            <p className="mt-6 border-l-2 border-brand-red pl-4 font-serif text-lg italic text-slate-500">
              « {siteConfig.slogan} »
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl p-6 transition-shadow hover:shadow-card"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient shadow-soft">
                  <p.icon className="size-6 text-white" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
