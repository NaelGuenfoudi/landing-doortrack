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
  description: string;
  benefits: string[];
}

const tabConfigs: TabConfig[] = [
  {
    id: "map",
    label: "Carte",
    title: "Visualisez vos secteurs. Priorisez vos passages.",
    description: "Transformez votre zone de prospection en plan d’action clair : rues couvertes, opportunités détectées et priorités.",
    benefits: [
      "Repérez les rues à potentiel",
      "Suivez la couverture réelle",
      "Décidez avec une donnée claire",
    ],
  },
  {
    id: "flash",
    label: "Flash",
    title: "Qualifiez une adresse sans casser le rythme.",
    description: "Intéressé, absent, refus, relance : chaque passage est enregistré en quelques secondes.",
    benefits: [
      "Qualification en quelques secondes",
      "Enregistrement immédiat",
      "Suite commerciale claire",
    ],
  },
  {
    id: "prospects",
    label: "Prospects",
    title: "Ne perdez plus une opportunité après le passage.",
    description: "Chaque prospect garde son statut, son historique et sa prochaine action. Plus de notes dispersées, plus de relances oubliées.",
    benefits: [
      "Historique centralisé",
      "Relances maîtrisées",
      "Donnée propre pour l’équipe",
    ],
  },
  {
    id: "home",
    label: "Manager",
    title: "Donnez au manager une vision claire de l’activité.",
    description: "Suivez l’activité, repérez les blocages et pilotez l’équipe avec une base exploitable.",
    benefits: [
      "Objectifs visibles",
      "Activité suivie",
      "Performance exploitable",
    ],
  },
];

export default function DesktopProductDemo() {
  const shouldReduceMotion = !!useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("map");

  const activeTabConfig = tabConfigs.find((t) => t.id === activeTab) || tabConfigs[0];

  const handleScrollToVision = () => {
    const target = document.getElementById("vision");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="relative z-20 bg-canvas/92 backdrop-blur-[1px] text-ink py-24 border-t border-line">
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex font-mono text-[12px] tracking-[0.18em] uppercase text-terrain font-semibold">
            DÉMONSTRATION INTERACTIVE
          </span>
          <h2 className="text-h2 font-bold tracking-tight text-ink">
            Visualisez. Qualifiez. Suivez. Pilotez.
          </h2>
          <p className="text-lead text-ink-soft">
            Doortrack transforme chaque passage en information claire, exploitable et partagée.
          </p>
          {/* Instruction d'interaction */}
          <div className="inline-flex items-center justify-center gap-1.5 text-[13.5px] text-ink-soft font-semibold bg-linen/60 px-4 py-1.5 rounded-full border border-line">
            <Pointer size={14} className="text-terrain rotate-[90deg] fill-current" />
            <span>Cliquez sur une vue pour explorer le flux de prospection.</span>
          </div>
        </div>

        {/* Grille Interactive à 3 Colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr] gap-x-12 xl:gap-x-16 gap-y-12 items-center">
          
          {/* COLONNE GAUCHE : Contenu Dynamique */}
          <div className="min-h-[380px] flex flex-col justify-between p-8 rounded-[32px] bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-flex font-mono text-[10px] tracking-[0.15em] uppercase text-terrain font-semibold bg-terrain-soft px-2.5 py-1 rounded">
                    VUE {activeTab === "map" ? "01" : activeTab === "flash" ? "02" : activeTab === "prospects" ? "03" : "04"}
                  </span>
                  
                  <h3 className="text-[26px] xl:text-[28px] font-extrabold tracking-tight text-ink leading-tight mt-4">
                    {activeTabConfig.title}
                  </h3>
                  
                  <p className="text-[14.5px] text-ink-soft leading-relaxed mt-2.5">
                    {activeTabConfig.description}
                  </p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-line/50">
                  {activeTabConfig.benefits.map((benefit, bIndex) => (
                    <motion.li
                      key={benefit}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: shouldReduceMotion ? 0 : bIndex * 0.08 }}
                      className="flex items-center gap-3 text-[14.5px] text-ink-soft"
                    >
                      <span className="w-5 h-5 rounded-full bg-terrain-soft text-terrain-2 flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={2.5} />
                      </span>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6">
              <button
                type="button"
                onClick={handleScrollToVision}
                className="btn-secondary"
              >
                Voir ce que ça change
              </button>
            </div>
          </div>

          {/* COLONNE CENTRALE : Mockup Téléphone Stabilisé */}
          <div className="relative py-12 px-6 bg-white/72 backdrop-blur-xl border border-white/50 rounded-[36px] flex flex-col items-center justify-center shadow-shadow-2 w-full min-h-[510px] xl:min-h-[550px]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-terrain/4 blur-[60px] rounded-full pointer-events-none" />

            {/* Centered mockup */}
            <div className="relative z-10 w-full flex justify-center scale-100 xl:scale-105 transition-transform">
              <PhoneFrame currentScreen={activeTab} />
              
              {/* Overlays spécifiques */}
              {activeTab === "map" && (
                <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-[1.8rem] max-w-[210px] md:max-w-[230px] mx-auto">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[35%] left-[45%] w-3 h-3 bg-terrain rounded-full border border-white"
                  />
                  <motion.div
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                    className="absolute top-[50%] left-[30%] w-3 h-3 bg-success rounded-full border border-white"
                  />
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
                  <motion.div
                    animate={shouldReduceMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-[53%] left-[28%] w-8 h-8 rounded-full border border-success bg-success/20 -translate-x-1/2 -translate-y-1/2"
                  />
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
                  <motion.div
                    animate={shouldReduceMotion ? {} : { borderColor: ["rgba(221,213,193,0.3)", "var(--color-terrain)", "rgba(221,213,193,0.3)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[37.5%] left-[8px] right-[8px] h-[39px] border border-line bg-terrain/5 rounded"
                  />
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

          {/* COLONNE DROITE : Navigation Stack Interactive */}
          <div className="flex flex-col gap-4 select-none">
            {tabConfigs.map((tab, idx) => {
              const isTabActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={isTabActive}
                  className={`text-left rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isTabActive
                      ? "border-terrain bg-terrain-soft/12 shadow-shadow-2 ring-2 ring-terrain/10"
                      : "border-line bg-linen/35 hover:border-line-2 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-9 h-9 font-mono text-[13px] font-bold rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isTabActive 
                        ? "bg-terrain text-white scale-105" 
                        : "bg-terrain-soft text-terrain-2 group-hover:bg-terrain/10"
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-[16px] font-bold leading-tight transition-colors ${
                        isTabActive ? "text-terrain-2" : "text-ink"
                      }`}>
                        {tab.label}
                      </h3>
                      <p className="text-[12px] text-ink-soft leading-none mt-1 group-hover:text-ink">
                        {tab.id === "map" ? "Cartographie" : tab.id === "flash" ? "Qualification" : tab.id === "prospects" ? "Mémoire" : "Pilotage"}
                      </p>
                    </div>
                  </div>
                  <Pointer
                    size={16}
                    className={`text-terrain shrink-0 rotate-[90deg] transition-all duration-300 ${
                      isTabActive 
                        ? "opacity-100 translate-x-0 scale-110" 
                        : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
