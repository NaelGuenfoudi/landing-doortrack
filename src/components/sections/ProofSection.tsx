"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, MapPin, RefreshCw } from "lucide-react";

export default function ProofSection() {
  const shouldReduceMotion = !!useReducedMotion();

  const proofs = [
    {
      icon: Users,
      text: "Échanges avec commerciaux et managers",
    },
    {
      icon: MapPin,
      text: "Besoin identifié sur le suivi des zones",
    },
    {
      icon: RefreshCw,
      text: "Prototype enrichi par les retours d’usage",
    },
  ];

  return (
    <section className="relative z-20 px-6 py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/78 backdrop-blur-xl border border-white/55 rounded-[32px] p-8 md:p-10 lg:p-12 shadow-shadow-2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
            {/* Gauche : Textes */}
            <div className="space-y-4 text-left">
              <span className="inline-flex font-mono text-[10px] tracking-[0.18em] uppercase text-terrain font-semibold">
                {"CONCEPTION DE L'OUTIL"}
              </span>
              <h3 className="text-h3 text-ink font-bold leading-tight">
                Pensé à partir d’usages réels.
              </h3>
              <p className="text-[14.5px] text-ink-soft leading-relaxed">
                Doortrack est construit à partir d’échanges avec des équipes qui prospectent réellement : besoin de visibilité, suivi des relances, couverture des secteurs et remontée d’information simple.
              </p>
            </div>

            {/* Droite : Les 3 preuves */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {proofs.map((proof, i) => {
                const Icon = proof.icon;
                return (
                  <motion.div
                    key={i}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex flex-col items-center text-center p-4 bg-linen/25 border border-line/40 rounded-2xl gap-3 hover:border-terrain/15 hover:bg-white/40 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-terrain-soft text-terrain-2 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                      <Icon size={18} strokeWidth={2} className="transition-transform duration-200 group-hover:scale-105" />
                    </div>
                    <span className="text-[13px] text-ink-soft font-semibold leading-snug">
                      {proof.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
