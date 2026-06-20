"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Illustration vectorielle d'un climatiseur split mural (unité intérieure)
 * avec soufflerie d'air froid animée. 100% inline, on-brand, sans dépendance
 * externe — l'image reste nette à toutes les tailles et ne casse jamais.
 *
 * Astuce : pour utiliser de vraies photos produit plus tard, déposez-les dans
 * /public/splits et remplacez ce composant par <Image .../> là où il est appelé.
 */
export function SplitUnit({
  className,
  temp = "16°",
  label = "Mode froid",
}: {
  className?: string;
  temp?: string;
  label?: string;
}) {
  // 4 flux d'air froid décalés
  const streams = [0, 1, 2, 3];

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 400 300"
        className="h-auto w-full"
        role="img"
        aria-label="Climatiseur split mural VH Multiservices en mode froid"
      >
        <defs>
          <linearGradient id="su-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#eef3fb" />
          </linearGradient>
          <linearGradient id="su-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1B4FA8" />
            <stop offset="1" stopColor="#0D2D6B" />
          </linearGradient>
          <linearGradient id="su-air" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1B4FA8" stopOpacity="0.55" />
            <stop offset="1" stopColor="#1B4FA8" stopOpacity="0" />
          </linearGradient>
          <filter id="su-shadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#0D2D6B"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        {/* Flux d'air froid */}
        {streams.map((i) => (
          <motion.path
            key={i}
            d={`M ${118 + i * 55} 118 q -10 60 6 150`}
            fill="none"
            stroke="url(#su-air)"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.9, 0], pathLength: [0.2, 1, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.45,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Flocons */}
        {streams.map((i) => (
          <motion.g
            key={`flake-${i}`}
            initial={{ opacity: 0 }}
            animate={{ y: [108, 250], opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.3 + i * 0.6,
              ease: "easeIn",
            }}
          >
            <g
              transform={`translate(${130 + i * 50} 0)`}
              stroke="#1B4FA8"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
            >
              <line x1="0" y1="-5" x2="0" y2="5" />
              <line x1="-5" y1="0" x2="5" y2="0" />
              <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" />
              <line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" />
            </g>
          </motion.g>
        ))}

        {/* Corps de l'unité intérieure */}
        <motion.g
          filter="url(#su-shadow)"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* coque */}
          <rect
            x="40"
            y="40"
            width="320"
            height="78"
            rx="22"
            fill="url(#su-body)"
            stroke="#dbe4f3"
            strokeWidth="2"
          />
          {/* liseré tricolore signature */}
          <rect x="40" y="40" width="320" height="6" rx="3" fill="#C8181A" />

          {/* écran / afficheur */}
          <rect x="286" y="58" width="58" height="34" rx="10" fill="url(#su-screen)" />
          <text
            x="315"
            y="80"
            textAnchor="middle"
            fontFamily="Oswald, Impact, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#ffffff"
          >
            {temp}
          </text>

          {/* LED d'état */}
          <motion.circle
            cx="64"
            cy="60"
            r="3.5"
            fill="#1B4FA8"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />

          {/* grille de soufflage (volet) */}
          <g stroke="#cdd9ee" strokeWidth="3" strokeLinecap="round">
            <line x1="70" y1="100" x2="270" y2="100" />
            <line x1="70" y1="108" x2="270" y2="108" />
          </g>
        </motion.g>
      </svg>

      {/* étiquette mode froid */}
      <div className="absolute right-3 top-2 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-navy shadow-soft ring-1 ring-brand-navy/10 backdrop-blur">
        <span className="size-1.5 animate-pulse rounded-full bg-brand-blue" />
        {label}
      </div>
    </div>
  );
}
