"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wrench,
  ShoppingCart,
  Briefcase,
  Store,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

type Category =
  | "Nettoyage"
  | "Maintenance"
  | "Commerce"
  | "Vente"
  | "Prestations diverses";

interface Item {
  id: number;
  title: string;
  category: Category;
  icon: React.ElementType;
  gradient: string;
}

const items: Item[] = [
  { id: 1, title: "Entretien de bureaux", category: "Nettoyage", icon: Sparkles, gradient: "from-brand-navy to-brand-blue" },
  { id: 2, title: "Nettoyage de locaux", category: "Nettoyage", icon: Sparkles, gradient: "from-brand-blue to-brand-navy" },
  { id: 3, title: "Maintenance préventive", category: "Maintenance", icon: Wrench, gradient: "from-brand-navy via-brand-blue to-brand-navy" },
  { id: 4, title: "Réparations techniques", category: "Maintenance", icon: Wrench, gradient: "from-[#7a0c0c] to-brand-red" },
  { id: 5, title: "Distribution de produits", category: "Commerce", icon: ShoppingCart, gradient: "from-brand-red to-[#7a0c0c]" },
  { id: 6, title: "Achat & approvisionnement", category: "Commerce", icon: ShoppingCart, gradient: "from-brand-blue to-brand-red" },
  { id: 7, title: "Vente de marchandises", category: "Vente", icon: Store, gradient: "from-[#7a0c0c] to-brand-red" },
  { id: 8, title: "Vente de matériel & équipements", category: "Vente", icon: Store, gradient: "from-brand-red to-brand-blue" },
  { id: 9, title: "Accompagnement entreprises", category: "Prestations diverses", icon: Briefcase, gradient: "from-brand-navy to-[#0a1f50]" },
  { id: 10, title: "Services aux particuliers", category: "Prestations diverses", icon: Briefcase, gradient: "from-brand-blue to-brand-navy" },
];

const categories: ("Tous" | Category)[] = [
  "Tous",
  "Nettoyage",
  "Maintenance",
  "Commerce",
  "Vente",
  "Prestations diverses",
];

export function Gallery() {
  const [filter, setFilter] = React.useState<(typeof categories)[number]>("Tous");
  const [active, setActive] = React.useState<number | null>(null);

  const filtered =
    filter === "Tous" ? items : items.filter((i) => i.category === filter);

  const activeIndex = filtered.findIndex((i) => i.id === active);
  const activeItem = activeIndex >= 0 ? filtered[activeIndex] : null;

  const navigate = React.useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => {
        if (cur === null) return cur;
        const idx = filtered.findIndex((i) => i.id === cur);
        const next = (idx + dir + filtered.length) % filtered.length;
        return filtered[next].id;
      });
    },
    [filtered]
  );

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, navigate]);

  return (
    <section id="galerie" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Galerie"
          title={
            <>
              Nos <span className="text-tricolor">réalisations</span>
            </>
          }
          description="Un aperçu de nos domaines d'intervention au quotidien."
        />

        {/* filtres */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all",
                filter === c
                  ? "border-brand-red bg-brand-red text-white shadow-soft"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-navy"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grille */}
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActive(item.id)}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl text-left shadow-card"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    item.gradient
                  )}
                />
                <div className="absolute inset-0 bg-grid-light opacity-40" />
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <item.icon className="size-9 text-white/90" />
                    <span className="rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-wide text-white">
                      {item.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                      <ZoomIn className="size-3.5" /> Agrandir
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-all group-hover:ring-2 group-hover:ring-white/30" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-ink/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="size-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Précédent"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Suivant"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-3xl shadow-premium"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  activeItem.gradient
                )}
              />
              <div className="absolute inset-0 bg-grid-light opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                <activeItem.icon className="size-20 text-white/90" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                  {activeItem.title}
                </h3>
                <span className="rounded-full bg-black/25 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                  {activeItem.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
