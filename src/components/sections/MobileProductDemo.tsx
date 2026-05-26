"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Pointer } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";

type TabId = "map" | "flash" | "prospects" | "home";

interface TabConfig {
  id: TabId;
  label: string;
  title: string;
  benefits: string[];
}

const tabConfigs: TabConfig[] = [
  {
    id: "map",
    label: "Carte",
    title: "Visualisation carte",
    benefits: [
      "Repérez les rues à potentiel",
      "Suivez la couverture réelle",
      "Décidez avec une donnée claire",
    ],
  },
  {
    id: "flash",
    label: "Flash",
    title: "Qualification flash",
    benefits: [
      "Qualifiez en quelques secondes",
      "Enregistrez chaque passage",
      "Gardez le rythme de passage",
    ],
  },
  {
    id: "prospects",
    label: "Prospects",
    title: "Suivi prospects",
    benefits: [
      "Centralisez l’historique",
      "Maîtrisez les relances",
      "Gardez une donnée propre",
    ],
  },
  {
    id: "home",
    label: "Manager",
    title: "Pilotage manager",
    benefits: [
      "Fixez des objectifs clairs",
      "Suivez l’activité de l’équipe",
      "Repérez les blocages",
    ],
  },
];

export default function MobileProductDemo() {
  const shouldReduceMotion = !!useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("map");
  const [pulseActive, setPulseActive] = useState(true);

  const activeTabConfig = tabConfigs.find((t) => t.id === activeTab) || tabConfigs[0];

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    setPulseActive(false);
  };

  const handleScrollToVision = () => {
    const target = document.getElementById("vision");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-20 bg-canvas/92 backdrop-blur-[1px] text-ink px-5 pt-16 pb-28">
      
      {/* 5.1 SOUS-SECTION INTERACTIVE UNIQUE */}
      <div className="space-y-6">
        
        {/* Label de la section */}
        <div className="space-y-3">
          <span className="inline-flex font-mono text-[10px] tracking-[0.18em] uppercase text-terrain font-semibold">
            DÉMONSTRATION
          </span>
          {/* Titre Principal */}
          <h2 className="text-[34px] sm:text-[38px] font-bold tracking-tight text-ink leading-[0.98]">
            Visualisez. Qualifiez. Suivez. Pilotez.
          </h2>
          {/* Sous-texte */}
          <p className="text-[15px] text-ink-soft leading-[1.55]">
            Doortrack transforme chaque passage en information claire, exploitable et partagée.
          </p>
        </div>

        {/* Ligne d'instruction obligatoire */}
        <div className="flex items-center justify-center gap-1.5 text-[12.5px] text-ink-soft font-medium pt-2">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-terrain"
          >
            <Pointer size={13} className="rotate-[90deg] fill-current" />
          </motion.div>
          <span>Touchez un onglet pour découvrir chaque vue de l’application.</span>
        </div>

        {/* Segmented Control / Onglets */}
        <div className="w-full p-1 bg-linen/50 border border-line/60 rounded-2xl flex justify-between gap-1 relative select-none">
          {tabConfigs.map((tab) => {
            const isTabActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                aria-pressed={isTabActive}
                className={`relative flex-1 py-2 text-center rounded-[12px] font-bold text-[12.5px] transition-colors duration-200 cursor-pointer z-10 ${
                  isTabActive ? "text-terrain-2" : "text-muted hover:text-ink"
                }`}
              >
                {/* Fond blanc glissant (layoutId) */}
                {isTabActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-white border border-terrain/10 rounded-[12px] shadow-[0_2px_8px_rgba(217,93,50,0.08)] z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    {/* Micro-hint pulsant d'une seconde sur l'onglet par défaut au chargement */}
                    {tab.id === "map" && pulseActive && (
                      <motion.div
                        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -inset-1 rounded-[12px] border border-terrain/40 pointer-events-none"
                      />
                    )}
                  </motion.div>
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Mockup téléphone de l'intro */}
        <div className="relative py-8 bg-[rgba(255,255,255,0.45)] border border-[rgba(217,93,50,0.10)] rounded-[28px] flex flex-col items-center justify-center overflow-hidden shadow-sm">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-terrain/4 blur-[40px] rounded-full pointer-events-none" />

          {/* Centered mockup */}
          <div className="relative z-10 w-full flex justify-center">
            <PhoneFrame currentScreen={activeTab} />
            
            {/* Visual overlays dynamically showing specific screen accents */}
            {activeTab === "map" && (
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-[1.8rem] max-w-[210px] md:max-w-[230px] mx-auto">
                {/* Pulsing point 1 */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-[35%] left-[45%] w-3 h-3 bg-terrain rounded-full border border-white"
                />
                {/* Pulsing point 2 */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  className="absolute top-[50%] left-[30%] w-3 h-3 bg-success rounded-full border border-white"
                />
                {/* Searching sweep */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-[42%] left-[32%] w-14 h-14 bg-terrain/20 rounded-full blur-md"
                  />
                )}
              </div>
            )}
            
            {activeTab === "flash" && (
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-[1.8rem] max-w-[210px] md:max-w-[230px] mx-auto">
                {/* Tap target ring */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-[53%] left-[28%] w-8 h-8 rounded-full border border-success bg-success/20 -translate-x-1/2 -translate-y-1/2"
                />
                {/* Tap pointer finger */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [0.9, 1.1, 0.9], y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-[56%] left-[32%] text-success drop-shadow-md"
                >
                  <Pointer size={18} className="rotate-[70deg] fill-success" />
                </motion.div>
              </div>
            )}
            
            {activeTab === "prospects" && (
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-[1.8rem] max-w-[210px] md:max-w-[230px] mx-auto">
                {/* Row highlighter */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { borderColor: ["rgba(221,213,193,0.3)", "var(--color-terrain)", "rgba(221,213,193,0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-[37.5%] left-[8px] right-[8px] h-[39px] border border-line bg-terrain/5 rounded"
                />
                {/* Follow-up tag pulse */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-[39.5%] right-[12px] px-1 py-0.5 rounded bg-terrain text-white font-extrabold text-[7px] uppercase tracking-wider shadow-sm"
                >
                  Relance
                </motion.div>
              </div>
            )}
            
            {activeTab === "home" && (
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-[1.8rem] max-w-[210px] md:max-w-[230px] mx-auto flex flex-col justify-end p-2 pb-6">
                <motion.div
                  initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur rounded-lg p-2 border border-line shadow-md flex flex-col gap-1 w-full"
                >
                  <div className="flex items-center justify-between text-[8px] font-bold text-ink uppercase tracking-wider">
                    <span>Activité équipe</span>
                    <span className="text-success font-extrabold">86%</span>
                  </div>
                  <div className="w-full h-1 bg-canvas rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "86%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-terrain"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Zone des bénéfices dynamiques sous le téléphone */}
        <div className="p-4.5 rounded-2xl bg-white border border-[rgba(217,93,50,0.10)] text-ink shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* Titre lié à l'onglet actif */}
              <h4 className="text-[14px] font-bold text-terrain-2">
                {activeTabConfig.title}
              </h4>
              {/* Liste de bénéfices */}
              <ul className="space-y-2">
                {activeTabConfig.benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                    className="flex items-center gap-2.5 text-[13.5px] text-ink-soft"
                  >
                    <span className="w-4 h-4 rounded-full bg-terrain-soft text-terrain-2 flex items-center justify-center shrink-0">
                      <Check size={9} strokeWidth={3} />
                    </span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 5.3 SOUS-SECTION C — CARTE CTA DE TRANSITION FINALE */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-[32px] border border-line bg-white shadow-sm p-6 text-center space-y-4"
      >
        <h3 className="text-[22px] sm:text-[24px] font-extrabold text-ink tracking-tight leading-tight">
          Prêt à voir Doortrack en action ?
        </h3>
        <p className="text-[14px] text-ink-soft leading-relaxed">
          Découvrez notre vision de la prospection et comment nous redonnons le contrôle aux équipes sur leur zone.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={handleScrollToVision}
            className="w-full h-13 rounded-full bg-gradient-to-r from-terrain to-terrain-2 text-white font-bold text-[14.5px] shadow-md shadow-terrain/10 active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
          >
            Comprendre le concept <span className="font-mono text-base">→</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
