"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Eye, Shield, BarChart3 } from "lucide-react";

export default function VisionSection() {
  const shouldReduceMotion = !!useReducedMotion();
  const [mode, setMode] = useState<"before" | "after">("before");

  return (
    <section
      id="vision"
      className="relative z-20 bg-canvas/92 backdrop-blur-[1px] overflow-hidden py-24 border-t border-line"
    >
      {/* ==================== VERSION DESKTOP ==================== */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-6 space-y-24">
        
        {/* SECTION 3 : VISION / DÉCLIC */}
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Colonne Gauche : Titres & Description */}
          <div className="space-y-6">
            <span className="inline-flex font-mono text-[12px] tracking-[0.18em] uppercase text-terrain font-semibold">
              VISION
            </span>
            <h2 className="text-h2 font-bold tracking-tight text-ink leading-[1.04]">
              Le problème, ce n’est pas l’effort.
              <br />
              <span className="text-terrain-2">C’est ce qu’on perd entre deux passages.</span>
            </h2>
            <p className="text-lead text-ink-soft">
              En prospection, l’action existe déjà. Ce qui manque souvent, c’est la continuité : une rue déjà visitée, une relance oubliée, une information notée trop vite, un manager qui dépend de retours incomplets.
            </p>
          </div>

          {/* Colonne Droite : Statement Quote & Abstract Animation */}
          <div className="space-y-6">
            {/* Statement Card */}
            <div className="p-8 rounded-[32px] bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-3 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(118deg, rgba(31,42,46,0.55) 0 1px, transparent 1px 18px)",
                }}
              />
              <blockquote className="space-y-4 relative z-10">
                <p className="text-[17px] font-bold text-ink leading-relaxed">
                  “ Doortrack ne sert pas à surveiller les commerciaux. Il sert à rendre leur zone lisible, leur suivi plus simple et leurs opportunités plus difficiles à perdre. ”
                </p>
                <footer className="flex flex-col gap-2 pt-2 border-t border-line/50 font-sans text-[13.5px] text-ink-soft font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terrain" />
                    <span>Moins de reporting subi. Plus de visibilité utile.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terrain-2" />
                    <span>Le commercial garde le rythme. Le manager garde la vision.</span>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Micro Dashboard Card representing animated points */}
            <div className="p-6 rounded-[24px] bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-1 flex items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-terrain uppercase tracking-wider">
                  FLUX DE PROSPECTION
                </span>
                <h4 className="text-[15px] font-bold text-ink leading-none">
                  Structure de zone
                </h4>
                <p className="text-[12.5px] text-ink-soft leading-tight max-w-[200px]">
                  Les informations terrain se connectent automatiquement.
                </p>
              </div>
              
              <div className="w-40 h-20 rounded-xl bg-linen/20 border border-line/45 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 160 80">
                  <g>
                    <motion.path
                      d="M 20 20 L 60 15 L 100 40 L 140 25 L 110 65 L 50 60 Z"
                      fill="rgba(226, 91, 20, 0.03)"
                      stroke="var(--color-terrain)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      animate={{ strokeDashoffset: [0, -12] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                    <circle cx="20" cy="20" r="3.5" fill="var(--color-terrain)" />
                    <circle cx="60" cy="15" r="3.5" fill="var(--color-terrain-2)" />
                    <circle cx="100" cy="40" r="3.5" fill="var(--color-success)" />
                    <circle cx="140" cy="25" r="3.5" fill="var(--color-terrain)" />
                    <circle cx="110" cy="65" r="3.5" fill="var(--color-terrain-2)" />
                    <circle cx="50" cy="60" r="3.5" fill="var(--color-success)" />
                    {!shouldReduceMotion && (
                      <>
                        <motion.circle cx="100" cy="40" r="7" stroke="var(--color-success)" strokeWidth="0.8" fill="none" animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.2, repeat: Infinity }} />
                        <motion.circle cx="60" cy="15" r="7" stroke="var(--color-terrain-2)" strokeWidth="0.8" fill="none" animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.2, delay: 0.7, repeat: Infinity }} />
                      </>
                    )}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
         {/* SECTION 4 : AVANT / AVEC DOORTRACK (Side-by-Side Comparison) */}
        <div className="space-y-10 pt-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-[28px] font-bold text-ink tracking-tight">
              De l’information dispersée à une zone maîtrisée.
            </h3>
            <p className="text-[15px] text-ink-soft leading-normal">
              Doortrack transforme les retours de prospection en suivi clair, partagé et réutilisable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* AVANT */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] bg-white/82 backdrop-blur-xl border border-white/55 p-8 shadow-shadow-2 space-y-6 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-4">
                <span className="inline-flex font-mono text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1 rounded text-muted bg-canvas-2">
                  STATUT ACTUEL
                </span>
                <h3 className="text-[24px] font-extrabold text-ink tracking-tight">
                  Avant
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed font-semibold">
                  L’information existe, mais elle reste dispersée.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Rues déjà visitées mais difficiles à retrouver",
                    "Relances notées à part ou oubliées",
                    "Historique éclaté entre outils, souvenirs et messages",
                    "Manager dépendant des retours oraux"
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[14px] text-ink-soft">
                      <span className="w-5 h-5 rounded-full bg-canvas-2 text-muted flex items-center justify-center shrink-0 font-bold text-[11px]">
                        ×
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-24 rounded-2xl bg-linen/10 border border-line/40 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full max-w-[360px]" viewBox="0 0 360 80">
                  <g>
                    <line x1="40" y1="20" x2="70" y2="40" stroke="rgba(31,42,46,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="180" y1="40" x2="160" y2="65" stroke="rgba(31,42,46,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="240" y1="60" x2="270" y2="35" stroke="rgba(31,42,46,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                    
                    <circle cx="40" cy="20" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="100" cy="15" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="180" cy="40" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="280" cy="25" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="240" cy="60" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="120" cy="65" r="3.5" fill="rgba(31,42,46,0.25)" />
                    <circle cx="60" cy="55" r="3.5" fill="rgba(31,42,46,0.25)" />
                  </g>
                </svg>
                <span className="absolute bottom-1.5 right-3 text-[9px] font-mono text-muted uppercase tracking-wider">
                  Données dispersées
                </span>
              </div>
            </motion.div>

            {/* AVEC DOORTRACK */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
              className="rounded-[32px] bg-white/82 backdrop-blur-xl border border-terrain/20 p-8 shadow-shadow-3 space-y-6 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-4">
                <span className="inline-flex font-mono text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1 rounded text-terrain bg-terrain-soft">
                  SOLUTION
                </span>
                <h3 className="text-[24px] font-extrabold text-ink tracking-tight">
                  Avec Doortrack
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed font-semibold">
                  Chaque passage devient une information claire et réutilisable.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Secteurs lisibles",
                    "Statuts clairs",
                    "Relances structurées",
                    "Vision partagée entre commercial et manager"
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[14px] text-ink-soft">
                      <span className="w-5 h-5 rounded-full bg-terrain-soft text-terrain-2 flex items-center justify-center shrink-0 font-bold text-[11px]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-24 rounded-2xl bg-terrain-soft/10 border border-terrain/15 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full max-w-[360px]" viewBox="0 0 360 80">
                  <g>
                    <motion.path
                      d="M 40 20 L 100 15 L 180 40 L 280 25 L 240 60 L 120 65 L 60 55 Z"
                      fill="rgba(226, 91, 20, 0.04)"
                      stroke="var(--color-terrain)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                    <circle cx="40" cy="20" r="4.5" fill="var(--color-terrain)" />
                    <circle cx="100" cy="15" r="4.5" fill="var(--color-terrain-2)" />
                    <circle cx="180" cy="40" r="4.5" fill="var(--color-success)" />
                    <circle cx="280" cy="25" r="4.5" fill="var(--color-terrain)" />
                    <circle cx="240" cy="60" r="4.5" fill="var(--color-terrain-2)" />
                    <circle cx="120" cy="65" r="4.5" fill="var(--color-success)" />
                    <circle cx="60" cy="55" r="4.5" fill="var(--color-terrain)" />
                  </g>
                </svg>
                <span className="absolute bottom-1.5 right-3 text-[9px] font-mono text-terrain uppercase tracking-wider font-semibold">
                  Tournée connectée
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 5 : CE QUE DOORTRACK CHANGE VRAIMENT */}
        <div className="space-y-12 pt-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex font-mono text-[12px] tracking-[0.18em] uppercase text-terrain font-semibold">
              TRANSFORMATION
            </span>
            <h3 className="text-h2 font-bold tracking-tight text-ink">
              Ce que Doortrack change vraiment
            </h3>
            <p className="text-lead text-ink-soft">
              L’objectif n’est pas d’ajouter du reporting. L’objectif est de rendre l’action commerciale plus lisible, plus continue et plus exploitable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Voir ce qui a été fait",
                text: "Chaque passage, chaque rue et chaque statut restent visibles."
              },
              {
                icon: Shield,
                title: "Conserver ce qui a été appris",
                text: "Les retours utiles ne disparaissent plus dans des notes ou des souvenirs."
              },
              {
                icon: BarChart3,
                title: "Piloter avec une base claire",
                text: "Le manager suit l’activité sans interrompre le rythme de l’équipe."
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-[28px] bg-white/82 hover:bg-white/92 backdrop-blur-xl border border-white/55 hover:border-terrain/25 shadow-shadow-2 space-y-4 transition-all duration-200 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-terrain-soft text-terrain-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <card.icon size={22} strokeWidth={2} className="transition-transform duration-200 group-hover:scale-105" />
                </div>
                <h4 className="text-[18px] font-bold text-ink leading-snug">
                  {card.title}
                </h4>
                <p className="text-[14.5px] text-ink-soft leading-relaxed">
                  {card.text}
                </p>
                {/* Visual hovering lines accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-terrain group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ==================== VERSION MOBILE ==================== */}
      <div className="block lg:hidden px-5 w-full space-y-16">
        
        {/* 4. VISION / DÉCLIC */}
        <div className="space-y-6">
          <span className="inline-flex font-mono text-[10px] tracking-[0.18em] uppercase text-terrain font-semibold">
            VISION
          </span>
          <h2 className="text-[32px] font-bold tracking-tight text-ink leading-[1.02]">
            Le problème, ce n’est pas l’effort.
            <br />
            <span className="text-terrain">C’est ce qu’on perd entre deux passages.</span>
          </h2>
          <p className="text-[15px] text-ink-soft leading-[1.55]">
            En prospection, l’action existe déjà. Ce qui manque souvent, c’est la continuité : une rue déjà visitée, une relance oubliée, une information notée trop vite, un manager qui dépend de retours incomplets.
          </p>
          
          <div className="p-5.5 rounded-[24px] bg-paper border border-line shadow-[inset_0_1px_3px_rgba(31,42,46,0.02)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(118deg, rgba(31,42,46,0.55) 0 1px, transparent 1px 18px)",
              }}
            />
            <p className="text-[13.5px] font-semibold text-ink leading-[1.5] relative z-10">
              Doortrack ne sert pas à surveiller les commerciaux. Il sert à rendre leur zone lisible, leur suivi plus simple et leurs opportunités plus difficiles à perdre.
            </p>
          </div>
        </div>

        {/* 5. INTERACTIVE BEFORE / AFTER */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-[20px] font-extrabold text-ink tracking-tight">
              Visualiser le changement
            </h3>
            <p className="text-[13px] text-ink-soft">
              Découvrez la différence concrète sur votre prospection quotidienne.
            </p>
          </div>

          {/* Toggle switcher controls */}
          <div className="w-full max-w-[280px] mx-auto p-1 bg-linen/50 border border-line/60 rounded-2xl flex gap-1 relative select-none">
            <button
              type="button"
              onClick={() => setMode("before")}
              aria-pressed={mode === "before"}
              className={`relative flex-1 py-2 text-center rounded-[12px] font-bold text-[12.5px] cursor-pointer z-10 transition-colors ${
                mode === "before" ? "text-ink font-extrabold" : "text-muted hover:text-ink"
              }`}
            >
              {mode === "before" && (
                <motion.div
                  layoutId="beforeAfterBgMobile"
                  className="absolute inset-0 bg-white border border-line rounded-[12px] shadow-sm z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              Avant
            </button>
            <button
              type="button"
              onClick={() => setMode("after")}
              aria-pressed={mode === "after"}
              className={`relative flex-1 py-2 text-center rounded-[12px] font-bold text-[12.5px] cursor-pointer z-10 transition-colors ${
                mode === "after" ? "text-terrain-2 font-extrabold" : "text-muted hover:text-ink"
              }`}
            >
              {mode === "after" && (
                <motion.div
                  layoutId="beforeAfterBgMobile"
                  className="absolute inset-0 bg-white border border-terrain/10 rounded-[12px] shadow-[0_2px_8px_rgba(217,93,50,0.06)] z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              Avec Doortrack
            </button>
          </div>

          {/* Switch content block */}
          <div className="rounded-[32px] bg-white border border-line p-5 shadow-sm min-h-[385px] flex flex-col justify-between overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: mode === "before" ? -12 : 12 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: mode === "before" ? 12 : -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-flex font-mono text-[9px] tracking-[0.16em] uppercase font-bold px-2 py-0.5 rounded ${
                    mode === "before" ? "text-muted bg-canvas-2" : "text-terrain bg-terrain-soft"
                  }`}>
                    {mode === "before" ? "STATUT ACTUEL" : "SOLUTION"}
                  </span>
                  
                  <h3 className="text-[19px] font-extrabold text-ink tracking-tight mt-2.5">
                    {mode === "before" ? "Avant" : "Avec Doortrack"}
                  </h3>
                  
                  <p className="text-[13.5px] text-ink-soft leading-relaxed mt-1">
                    {mode === "before" 
                      ? "L’information existe, mais elle reste dispersée." 
                      : "Chaque passage devient une information claire et réutilisable."
                    }
                  </p>
                  
                  {/* SVG Illustration */}
                  <div className="w-full h-28 my-3 rounded-xl bg-linen/25 border border-line/30 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-full max-w-[280px]" viewBox="0 0 280 110">
                      <g>
                        {mode === "after" ? (
                          <motion.path
                            d="M 40 25 L 100 15 L 160 45 L 240 30 L 190 75 L 90 85 L 50 60 Z"
                            fill="rgba(226, 91, 20, 0.03)"
                            stroke="var(--color-terrain)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          />
                        ) : (
                          <>
                            {/* Scattered disconnected lines */}
                            <line x1="40" y1="25" x2="60" y2="40" stroke="rgba(31,42,46,0.12)" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="160" y1="45" x2="140" y2="70" stroke="rgba(31,42,46,0.12)" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="190" y1="75" x2="210" y2="90" stroke="rgba(31,42,46,0.12)" strokeWidth="1" strokeDasharray="2 2" />
                          </>
                        )}
                        
                        {/* Dots */}
                        <circle cx="40" cy="25" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-terrain)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="100" cy="15" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-terrain-2)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="160" cy="45" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-success)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="240" cy="30" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-terrain)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="190" cy="75" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-terrain-2)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="90" cy="85" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-success)" : "rgba(31,42,46,0.3)"} />
                        <circle cx="50" cy="60" r={mode === "after" ? "5" : "4"} fill={mode === "after" ? "var(--color-terrain)" : "rgba(31,42,46,0.3)"} />
                        
                        {/* Pulses on load */}
                        {mode === "after" && !shouldReduceMotion && (
                          <>
                            <motion.circle cx="160" cy="45" r="9" stroke="var(--color-success)" strokeWidth="1" fill="none" animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                            <motion.circle cx="100" cy="15" r="9" stroke="var(--color-terrain-2)" strokeWidth="1" fill="none" animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, delay: 0.7, repeat: Infinity }} />
                          </>
                        )}
                      </g>
                    </svg>
                    <span className="absolute bottom-1 right-2 text-[9px] font-mono text-muted uppercase tracking-wider">
                      {mode === "before" ? "Zones fragmentées" : "Tournée connectée"}
                    </span>
                  </div>
                  
                  {/* Points list */}
                  <ul className="space-y-2 pt-1">
                    {(mode === "before" ? [
                      "Rues déjà visitées mais difficiles à retrouver",
                      "Relances notées à part ou oubliées",
                      "Historique éclaté entre outils, souvenirs et messages",
                      "Manager dépendant des retours oraux"
                    ] : [
                      "Secteurs lisibles",
                      "Statuts clairs",
                      "Relances structurées",
                      "Vision partagée entre commercial et manager"
                    ]).map((point, index) => (
                      <motion.li
                        key={point}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                        className="flex items-center gap-2.5 text-[13px] text-ink-soft"
                      >
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          mode === "before" ? "bg-canvas-2 text-muted" : "bg-terrain-soft text-terrain-2"
                        }`}>
                          {mode === "before" ? "×" : "✓"}
                        </span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 6. CE QUE DOORTRACK CHANGE VRAIMENT */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <span className="inline-flex font-mono text-[10px] tracking-[0.18em] uppercase text-terrain font-semibold">
              TRANSFORMATION
            </span>
            <h3 className="text-[24px] font-bold tracking-tight text-ink leading-[1.08]">
              Ce que Doortrack change vraiment
            </h3>
            <p className="text-[14px] text-ink-soft leading-relaxed">
              L’objectif n’est pas d’ajouter du reporting. L’objectif est de rendre l’action commerciale plus lisible, plus continue et plus exploitable.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Voir ce qui a été fait",
                text: "Chaque passage, chaque rue et chaque statut restent visibles."
              },
              {
                title: "Conserver ce qui a été appris",
                text: "Les retours utiles ne disparaissent plus dans des notes ou des souvenirs."
              },
              {
                title: "Piloter avec une base claire",
                text: "Le manager suit l’activité sans interrompre le rythme de l’équipe."
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-5 rounded-2xl bg-white border border-line shadow-sm space-y-2"
              >
                <h4 className="text-[15px] font-bold text-ink leading-tight">
                  {card.title}
                </h4>
                <p className="text-[13px] text-ink-soft leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
