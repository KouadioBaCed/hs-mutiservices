"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

const nav = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Valeurs", href: "#valeurs" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Prestation de services divers",
  "Nettoyage professionnel",
  "Maintenance et réparation",
  "Commerce général",
  "Intermédiation commerciale",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="container-tight relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-12 w-24 overflow-hidden rounded-lg bg-white p-1">
                <Image src="/logo.png" alt="VH Multiservices" fill sizes="96px" className="object-contain" />
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.name} {siteConfig.legalForm} — prestations fiables,
              rapides et professionnelles pour particuliers et entreprises en{" "}
              {siteConfig.country}.
            </p>
            <p className="mt-4 font-serif text-base italic text-white/50">
              « {siteConfig.slogan} »
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-blue/50 hover:bg-brand-blue/20 hover:text-white"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-red"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Nos services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <p className="mt-5 text-sm font-medium text-white">{siteConfig.manager}</p>
            <p className="text-xs uppercase tracking-widest text-white/45">
              {siteConfig.managerTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <Phone className="size-4 text-brand-red" /> {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneRaw2}`} className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <Phone className="size-4 text-brand-red" /> {siteConfig.phoneDisplay2}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <MessageCircle className="size-4 text-brand-red" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <Mail className="size-4 text-brand-red" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="size-4 text-brand-red" /> {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/45 sm:text-left">
            © {year} {siteConfig.name} {siteConfig.legalForm}. Tous droits réservés.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            Haut de page <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
