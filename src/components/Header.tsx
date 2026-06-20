"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site";

const navLinks = [
  { label: "Climatisation", href: "#climatisation" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Valeurs", href: "#valeurs" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-slate-200 bg-white/85 py-2 shadow-[0_8px_30px_-20px_rgba(13,45,107,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <nav className="container-tight flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2.5"
          aria-label="VH Multiservices — accueil"
        >
          <span className="relative block h-11 w-[92px] sm:h-12 sm:w-[100px]">
            <Image
              src="/logo.png"
              alt="Logo VH Multiservices"
              fill
              priority
              sizes="100px"
              className="object-contain"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-heading text-base font-bold tracking-wide text-brand-navy">
              VH Multiservices
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              {siteConfig.legalForm} — {siteConfig.country}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative block whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-navy"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-brand-navy"
          >
            <Phone className="size-4 shrink-0 text-brand-red" />
            {siteConfig.phoneDisplay}
          </a>
          <Button asChild variant="accent" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Devis gratuit
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-navy shadow-sm xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl xl:hidden"
          >
            <ul className="container-tight flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3 px-1">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 px-3 text-sm text-slate-600"
                >
                  <Phone className="size-4 text-brand-red" />
                  {siteConfig.phoneDisplay}
                </a>
                <Button asChild variant="accent" className="w-full">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demander un devis
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
