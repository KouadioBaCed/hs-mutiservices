"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  const [showTip, setShowTip] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="mb-1 hidden max-w-[230px] rounded-2xl bg-white px-4 py-3 text-sm text-brand-navy shadow-2xl sm:block"
          >
            <button
              onClick={() => setShowTip(false)}
              className="absolute -right-2 -top-2 rounded-full bg-brand-navy p-1 text-white"
              aria-label="Fermer"
            >
              <X className="size-3" />
            </button>
            <strong className="block font-semibold">Une question ?</strong>
            <span className="text-brand-navy/70">
              Discutons sur WhatsApp, réponse rapide garantie.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contacter ${siteConfig.name} sur WhatsApp`}
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-110 sm:size-16"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <span className="absolute inset-0 rounded-full ring-2 ring-white/30" />
        <MessageCircle className="relative size-7 sm:size-8" fill="currentColor" />
      </a>
    </div>
  );
}
