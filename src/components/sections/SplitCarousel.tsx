"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Images,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Snowflake,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

/**
 * Catalogue produits — les fichiers se trouvent dans /public/split.
 * `tag` permet de regrouper visuellement (climatiseur / traitement d'air / accessoire).
 */
type Tag = "Climatiseur" | "Traitement d'air" | "Accessoire";

interface Product {
  file: string; // nom exact du fichier dans /public/split
  title: string;
  tag: Tag;
}

const products: Product[] = [
  { file: "Muraux.png", title: "Split mural", tag: "Climatiseur" },
  { file: "Cassettes.png", title: "Split cassette", tag: "Climatiseur" },
  { file: "Gainables.png", title: "Split gainable", tag: "Climatiseur" },
  { file: "Armoires.png", title: "Armoire de climatisation", tag: "Climatiseur" },
  { file: "Allèges.png", title: "Split console (allège)", tag: "Climatiseur" },
  { file: "Les splits portables.png", title: "Split portable", tag: "Climatiseur" },
  { file: "Déshumidificateur.png", title: "Déshumidificateur", tag: "Traitement d'air" },
  { file: "Humidificateur.png", title: "Humidificateur", tag: "Traitement d'air" },
  { file: "Stabilisateur.png", title: "Stabilisateur de tension", tag: "Accessoire" },
  { file: "Cuivre d’installation.png", title: "Cuivre d'installation", tag: "Accessoire" },
  { file: "Bande amaflex.png", title: "Bande Armaflex (isolation)", tag: "Accessoire" },
  { file: "multiprise.png", title: "Multiprise", tag: "Accessoire" },
];

const src = (file: string) => `/split/${encodeURIComponent(file)}`;

export function SplitCarousel() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true); // intention utilisateur
  const [hovering, setHovering] = React.useState(false); // pause temporaire au survol

  const count = products.length;
  const current = products[index];

  const go = React.useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
    setPlaying(true);
    setHovering(false);
  };

  // navigation clavier + verrouillage du scroll
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  // défilement automatique (en pause pendant le survol de l'image)
  React.useEffect(() => {
    if (!open || !playing || hovering) return;
    const id = window.setInterval(() => go(1), 3500);
    return () => window.clearInterval(id);
  }, [open, playing, hovering, go]);

  // garde la miniature active visible
  const thumbRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!open) return;
    const el = thumbRef.current?.querySelector<HTMLElement>(
      `[data-i="${index}"]`
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index, open]);

  return (
    <>
      {/* ====== Bouton accrocheur ====== */}
      <motion.button
        type="button"
        onClick={() => openAt(0)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-brand-blue/20 bg-white p-4 text-left shadow-card transition-colors hover:border-brand-blue/40 sm:gap-5 sm:p-5"
      >
        {/* halo animé */}
        <span className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-blue/10 blur-2xl transition-all duration-500 group-hover:bg-brand-red/15" />
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* pile de miniatures */}
        <span className="relative flex shrink-0 items-center">
          {products.slice(0, 3).map((p, i) => (
            <span
              key={p.file}
              className={cn(
                "relative size-16 overflow-hidden rounded-2xl border-2 border-white bg-brand-offwhite shadow-soft sm:size-20",
                i > 0 && "-ml-6 sm:-ml-7"
              )}
              style={{ zIndex: 3 - i, rotate: `${(i - 1) * 6}deg` }}
            >
              <Image
                src={src(p.file)}
                alt={p.title}
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </span>
          ))}
        </span>

        {/* texte */}
        <span className="relative min-w-0 flex-1">
          <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
            <Snowflake className="size-3.5" /> Catalogue produits
          </span>
          <span className="mt-1 block font-heading text-lg font-bold uppercase leading-tight tracking-wide text-brand-navy sm:text-xl">
            Voir nos {count} modèles en images
          </span>
          <span className="mt-0.5 block text-sm text-slate-500">
            Muraux, cassettes, gainables, armoires…
          </span>
        </span>

        {/* pastille play */}
        <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-soft transition-transform duration-300 group-hover:scale-110 sm:size-14">
          <Images className="size-5 sm:size-6" />
        </span>
      </motion.button>

      {/* ====== Carousel plein écran ====== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] flex flex-col bg-brand-ink/95 backdrop-blur-md"
          >
            {/* barre haute */}
            <div
              className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-white">
                <Snowflake className="size-5 text-brand-blue" />
                <span className="font-heading text-sm uppercase tracking-[0.2em] sm:text-base">
                  Nos climatiseurs &amp; équipements
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label={playing ? "Pause" : "Lecture"}
                >
                  {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Fermer"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* scène */}
            <div
              className="relative flex flex-1 items-center justify-center px-4 sm:px-20"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <button
                onClick={() => go(-1)}
                className="absolute left-2 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:size-14"
                aria-label="Précédent"
              >
                <ChevronLeft className="size-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.file}
                  initial={{ opacity: 0, scale: 0.95, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -30 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full max-w-3xl flex-col items-center"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-premium">
                    <Image
                      src={src(current.file)}
                      alt={current.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 768px"
                      priority
                      className="object-contain p-6"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-soft">
                      {current.tag}
                    </span>
                  </div>
                  <figcaption className="mt-5 text-center">
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                      {current.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {index + 1} / {count} · disponible sur devis
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                onClick={() => go(1)}
                className="absolute right-2 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:size-14"
                aria-label="Suivant"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* miniatures + CTA */}
            <div
              className="px-4 pb-5 pt-2 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={thumbRef}
                className="mx-auto flex max-w-4xl gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {products.map((p, i) => (
                  <button
                    key={p.file}
                    data-i={i}
                    onClick={() => setIndex(i)}
                    aria-label={p.title}
                    className={cn(
                      "relative size-16 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-all sm:size-[72px]",
                      i === index
                        ? "border-brand-red ring-2 ring-brand-red/40"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={src(p.file)}
                      alt={p.title}
                      fill
                      sizes="72px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-3 flex justify-center">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
                >
                  <MessageCircle className="size-4" /> Ce modèle m&apos;intéresse
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
