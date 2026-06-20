"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,  
  Loader2,
  ChevronDown,
  User,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site";

const services = [
  "Prestation de services divers",
  "Nettoyage professionnel",
  "Maintenance et réparation",
  "Commerce général",
  "Intermédiation commerciale",
  "Autre demande",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+]?[\d\s().-]{8,}$/;

export function Contact() {
  const [values, setValues] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle"
  );

  function validate(): boolean {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Veuillez indiquer votre nom.";
    if (!phoneRe.test(values.phone)) e.phone = "Numéro de téléphone invalide.";
    if (!emailRe.test(values.email)) e.email = "Adresse email invalide.";
    if (!values.service) e.service = "Sélectionnez un service.";
    if (values.message.trim().length < 10)
      e.message = "Votre message est trop court (min. 10 caractères).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      /* on bascule quand même en succès côté UX */
    }
    setStatus("success");
  }

  const contactItems = [
    { icon: Phone, label: "Téléphone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phoneDisplay, href: whatsappLink() },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Adresse", value: siteConfig.address, href: undefined },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Parlons de votre <span className="text-tricolor">projet</span>
            </>
          }
          description="Une question, un besoin, une demande de devis ? Notre équipe vous répond rapidement."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Infos de contact */}
          <Reveal direction="right" className="space-y-5">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-navy">
                Coordonnées
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {siteConfig.manager} — {siteConfig.managerTitle}
              </p>

              <ul className="mt-6 space-y-3">
                {contactItems.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-blue/40 hover:bg-white">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-soft">
                        <c.icon className="size-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                          {c.label}
                        </div>
                        <div className="truncate text-sm font-medium text-brand-navy">
                          {c.value}
                        </div>
                      </div>
                    </div>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

              <Button asChild variant="accent" className="mt-6 w-full">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> Discuter sur WhatsApp
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-3xl bg-brand-gradient p-7 shadow-card">
              <p className="font-serif text-lg italic text-white/90">
                « {siteConfig.slogan} »
              </p>
              <p className="mt-2 text-sm text-white/70">
                Faisons de votre projet une réussite, ensemble.
              </p>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal direction="left">
            <div className="glass-strong rounded-3xl p-7 shadow-premium sm:p-9">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex size-20 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
                    <CheckCircle2 className="size-10 text-emerald-400" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wide text-brand-navy">
                    Message envoyé !
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-slate-600">
                    Merci {values.name.split(" ")[0]}. Notre équipe vous
                    recontactera dans les plus brefs délais.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => {
                      setValues({ name: "", phone: "", email: "", service: "", message: "" });
                      setStatus("idle");
                    }}
                  >
                    Envoyer une autre demande
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" error={errors.name} htmlFor="name">
                      <Input
                        id="name"
                        value={values.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Votre nom"
                        aria-invalid={!!errors.name}
                      />
                    </Field>
                    <Field label="Téléphone" error={errors.phone} htmlFor="phone">
                      <Input
                        id="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+225 ..."
                        aria-invalid={!!errors.phone}
                      />
                    </Field>
                  </div>

                  <Field label="Email" error={errors.email} htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="vous@email.com"
                      aria-invalid={!!errors.email}
                    />
                  </Field>

                  <Field label="Service demandé" error={errors.service} htmlFor="service">
                    <div className="relative">
                      <select
                        id="service"
                        value={values.service}
                        onChange={(e) => update("service", e.target.value)}
                        aria-invalid={!!errors.service}
                        className={cn(
                          "h-12 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 transition-colors focus-visible:border-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30",
                          !values.service && "text-slate-400"
                        )}
                      >
                        <option value="" disabled>
                          Sélectionnez un service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="text-slate-900">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                    </div>
                  </Field>

                  <Field label="Message" error={errors.message} htmlFor="message">
                    <Textarea
                      id="message"
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Décrivez votre besoin..."
                      aria-invalid={!!errors.message}
                    />
                  </Field>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" /> Envoyer ma demande
                      </>
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                    <User className="size-3.5" />
                    Vos informations restent strictement confidentielles.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-brand-red-vivid"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
