"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  MessageSquare,
  Building2,
  Rocket,
  Compass,
  Check,
  ChevronRight,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ContactIntentId } from "./ContactForm";

interface Level {
  id: ContactIntentId;
  icon: ComponentType<LucideProps>;
  title: string;
  short: string;
  involvementLabel: string;
  intro: string;
  benefits: string[];
  cta: string;
  
  // Mobile enriched fields
  shortLabel: string;
  subtitle: string;
  involvement: string;
  description: string;
  microcopy: string;
  formIntent: ContactIntentId;
}

const levels: Level[] = [
  {
    id: "contributeur-terrain",
    icon: MessageSquare,
    title: "Contributeur",
    short: "Partagez vos retours d’usage.",
    involvementLabel: "NIVEAU D'IMPLICATION : FAIBLE",
    intro: "Votre expérience aide à orienter Doortrack dès le départ, sans engagement financier.",
    benefits: [
      "Partagez vos retours d’usage",
      "Aidez à façonner un outil utile",
      "Accédez aux nouveautés en avant-première",
    ],
    cta: "Je contribue",
    
    shortLabel: "Contributeur",
    subtitle: "Partagez vos retours d’usage.",
    involvement: "Niveau d’implication : faible",
    description: "Votre expérience aide à orienter Doortrack dès le départ, sans engagement financier.",
    microcopy: "30 secondes pour présenter votre contexte.",
    formIntent: "contributeur-terrain",
  },
  {
    id: "entreprise-pilote",
    icon: Building2,
    title: "Pilote",
    short: "Testez avec une équipe identifiée.",
    involvementLabel: "NIVEAU D'IMPLICATION : MOYEN",
    intro: "Vous testez Doortrack dans un contexte réel avec une équipe commerciale identifiée.",
    benefits: [
      "Test en conditions réelles",
      "Retours structurés",
      "Priorité dans les évolutions",
    ],
    cta: "Devenir pilote",
    
    shortLabel: "Pilote",
    subtitle: "Testez avec une équipe identifiée.",
    involvement: "Niveau d’implication : moyen",
    description: "Vous testez Doortrack dans un contexte réel avec une équipe commerciale identifiée.",
    microcopy: "Idéal pour une équipe déjà structurée.",
    formIntent: "entreprise-pilote",
  },
  {
    id: "early-adopter",
    icon: Rocket,
    title: "Prioritaire",
    short: "Accédez aux premières versions.",
    involvementLabel: "NIVEAU D'IMPLICATION : ÉLEVÉ",
    intro: "Vous sécurisez un accès prioritaire aux premières versions et participez aux évolutions du produit.",
    benefits: [
      "Accès anticipé",
      "Conditions préférentielles",
      "Influence sur la roadmap",
    ],
    cta: "Accéder en priorité",
    
    shortLabel: "Prioritaire",
    subtitle: "Accédez aux premières versions.",
    involvement: "Niveau d’implication : élevé",
    description: "Vous sécurisez un accès prioritaire aux premières versions et participez aux évolutions du produit.",
    microcopy: "Pour les structures qui veulent prendre de l’avance.",
    formIntent: "early-adopter",
  },
  {
    id: "pilote-accompagne",
    icon: Compass,
    title: "Accompagné",
    short: "Cadrez un test structuré.",
    involvementLabel: "NIVEAU D'IMPLICATION : TRÈS ÉLEVÉ",
    intro: "Vous échangez avec Doortrack pour définir un scénario de test adapté à votre équipe, vos secteurs et vos contraintes.",
    benefits: [
      "Cadrage du besoin",
      "Test structuré",
      "Retours exploitables",
    ],
    cta: "Cadrer un test",
    
    shortLabel: "Accompagné",
    subtitle: "Cadrez un test structuré.",
    involvement: "Niveau d’implication : très élevé",
    description: "Vous échangez avec Doortrack pour définir un scénario de test adapté à votre équipe, vos secteurs et vos contraintes.",
    microcopy: "Le meilleur choix pour préparer un vrai pilote opérationnel.",
    formIntent: "pilote-accompagne",
  },
];

interface EngagementSelectorProps {
  onSelectIntent?: (intent: ContactIntentId) => void;
}

export default function EngagementSelector({ onSelectIntent }: EngagementSelectorProps) {
  const [activeId, setActiveId] = useState<ContactIntentId>(levels[0].id);

  const active = levels.find((l) => l.id === activeId) ?? levels[0];
  const shouldReduceMotion = useReducedMotion();

  // Radar coordinates mapping
  const radarCoords: Record<ContactIntentId, { x: number; y: number }> = {
    "contributeur-terrain": { x: 22, y: 28 },
    "entreprise-pilote": { x: 78, y: 28 },
    "early-adopter": { x: 22, y: 72 },
    "pilote-accompagne": { x: 78, y: 72 },
    "contact-general": { x: 50, y: 50 },
  };

  const activeCoords = radarCoords[activeId] || radarCoords["contributeur-terrain"];

  return (
    <div id="contribution" className="scroll-mt-20">
      {/* ==================== VERSION DESKTOP ==================== */}
      <div className="hidden md:block max-w-[1180px] mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-h2 text-ink">
            Choisissez votre niveau de participation
          </h2>
          <p className="text-lead mx-auto">
            Choisissez le niveau d’implication adapté à votre rôle, votre équipe et votre maturité commerciale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[36%_1fr] gap-6 lg:gap-10 items-start">
          {/* Liste des cartes (gauche desktop) */}
          <div className="flex flex-col gap-4">
            {levels.map((level) => {
              const isActive = level.id === activeId;
              const Icon = level.icon;
              return (
                <motion.button
                  key={level.id}
                  type="button"
                  onClick={() => setActiveId(level.id)}
                  whileHover={!isActive ? { scale: 1.01, x: 2 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`relative text-left rounded-[24px] bg-white px-6 py-5 border transition-[border-color,box-shadow] duration-200 group ${
                    isActive
                      ? "border-terrain shadow-shadow-3"
                      : "border-line shadow-shadow-1 hover:border-line-2 hover:shadow-shadow-2"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-terrain text-white"
                          : "bg-terrain-soft text-terrain-2 group-hover:bg-terrain/10"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[17px] font-bold text-ink leading-snug">
                        {level.title}
                      </h3>
                      <p className="text-[13.5px] text-muted leading-relaxed mt-1">
                        {level.short}
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`mt-1 shrink-0 transition-all ${
                        isActive
                          ? "text-terrain translate-x-0.5"
                          : "text-muted-2 group-hover:text-ink group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="selectorConnector"
                      className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-white border-r border-t border-terrain rotate-45 hidden lg:block"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Panneau de détail (droite desktop) */}
          <div className="relative rounded-[28px] bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-2 p-6 md:p-10 min-h-[300px] lg:min-h-[420px] overflow-hidden">
            {/* Mini-radar / Boussole dynamique en haut à droite */}
            <div className="absolute top-8 right-8 hidden lg:block w-24 h-24 rounded-full border border-line bg-canvas/30 backdrop-blur-sm pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Grille du radar */}
                <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(217, 93, 50, 0.03)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(217, 93, 50, 0.06)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(217, 93, 50, 0.03)" strokeWidth="0.5" strokeDasharray="1 2" />
                <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(217, 93, 50, 0.03)" strokeWidth="0.5" />
                <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(217, 93, 50, 0.03)" strokeWidth="0.5" />
                
                {/* Lignes de repère vers les autres coordonnées */}
                <line x1="50" y1="50" x2="22" y2="28" stroke="rgba(217, 93, 50, 0.08)" strokeWidth="0.5" strokeDasharray="1 2" />
                <line x1="50" y1="50" x2="78" y2="28" stroke="rgba(217, 93, 50, 0.08)" strokeWidth="0.5" strokeDasharray="1 2" />
                <line x1="50" y1="50" x2="22" y2="72" stroke="rgba(217, 93, 50, 0.08)" strokeWidth="0.5" strokeDasharray="1 2" />
                <line x1="50" y1="50" x2="78" y2="72" stroke="rgba(217, 93, 50, 0.08)" strokeWidth="0.5" strokeDasharray="1 2" />

                {/* Point d'origine */}
                <circle cx="50" cy="50" r="2" fill="var(--color-terrain)" opacity="0.3" />

                {/* Rayon actif orienté vers les coordonnées du niveau sélectionné */}
                <motion.line
                  x1="50"
                  y1="50"
                  animate={{ x2: activeCoords.x, y2: activeCoords.y }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  stroke="var(--color-terrain)"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                />

                {/* Cible radar active */}
                <motion.circle
                  animate={{ cx: activeCoords.x, cy: activeCoords.y }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  r="4"
                  fill="var(--color-terrain)"
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                className="space-y-6 lg:pr-24"
              >
                <span className="inline-flex font-mono text-[11px] tracking-[0.16em] uppercase text-terrain-2 bg-terrain-soft px-3 py-1.5 rounded-md font-semibold">
                  {active.involvementLabel}
                </span>

                <h3 className="text-h3 text-ink">{active.title}</h3>

                <p className="text-lead">{active.intro}</p>

                <ul className="space-y-3 pt-2">
                  {active.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-ink-soft leading-relaxed"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-terrain-soft text-terrain-2 grid place-items-center shrink-0">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectIntent?.(active.id)}
                    className="btn-primary w-full md:w-auto"
                  >
                    {active.cta}{" "}
                    <span className="arrow font-mono font-medium">→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ==================== VERSION MOBILE (Radar de Contribution) ==================== */}
      <div className="block md:hidden px-5 py-16 text-ink bg-transparent border-t border-line">
        {/* Bloc intro */}
        <div className="mb-6 space-y-3">
          <span className="inline-flex font-mono text-[11px] tracking-[0.18em] uppercase text-terrain font-semibold">
            PARTICIPATION
          </span>
          <h2 className="text-[32px] sm:text-[36px] font-bold tracking-tight text-ink leading-[0.98]">
            Choisissez votre niveau de participation
          </h2>
          <p className="text-[15px] text-ink-soft leading-[1.55]">
            Choisissez le niveau d’implication adapté à votre rôle, votre équipe et votre maturité commerciale.
          </p>
        </div>

        {/* Module visuel — Radar de contribution */}
        <div className="relative w-full min-h-[220px] rounded-[28px] bg-white/72 backdrop-blur-[14px] border border-[rgba(217,93,50,0.12)] shadow-sm overflow-hidden flex items-center justify-center p-4">
          {/* Fond du radar SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grille */}
            <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(217, 93, 50, 0.04)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(217, 93, 50, 0.08)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(217, 93, 50, 0.04)" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(217, 93, 50, 0.04)" strokeWidth="0.5" />
            <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(217, 93, 50, 0.04)" strokeWidth="0.5" />
            
            {/* Lignes de liaison inactives vers tous les points */}
            <line x1="50" y1="50" x2="22" y2="28" stroke="rgba(217, 93, 50, 0.12)" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="50" y1="50" x2="78" y2="28" stroke="rgba(217, 93, 50, 0.12)" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="50" y1="50" x2="22" y2="72" stroke="rgba(217, 93, 50, 0.12)" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="50" y1="50" x2="78" y2="72" stroke="rgba(217, 93, 50, 0.12)" strokeWidth="0.5" strokeDasharray="1 2" />

            {/* Ligne de liaison active animée */}
            <motion.line
              x1="50"
              y1="50"
              animate={{ x2: activeCoords.x, y2: activeCoords.y }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              stroke="var(--color-terrain)"
              strokeWidth="1.5"
              strokeDasharray="2 1"
            />
          </svg>

          {/* Noyau central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              key={active.id}
              initial={{ scale: 0.94, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-[104px] h-[104px] rounded-full bg-white border-2 border-terrain shadow-md flex flex-col items-center justify-center text-center p-2"
            >
              <span className="text-[9px] font-bold tracking-wider text-muted uppercase">
                Niveau choisi
              </span>
              <span className="text-[13px] font-extrabold text-ink mt-0.5">
                {active.shortLabel}
              </span>
            </motion.div>
          </div>

          {/* Les 4 points interactifs */}
          {levels.map((level) => {
            const isActive = level.id === activeId;
            const Icon = level.icon;
            const coords = radarCoords[level.id];
            
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => setActiveId(level.id)}
                aria-pressed={isActive}
                aria-label={`Sélectionner le niveau ${level.title}`}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute z-20 focus:outline-none"
              >
                {/* Halo actif */}
                {isActive && !shouldReduceMotion && (
                  <motion.div
                    className="absolute -inset-2 rounded-full bg-terrain/12 z-0 pointer-events-none"
                    animate={{ scale: [0.95, 1.25, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 relative z-10 ${
                    isActive
                      ? "bg-terrain text-white border-terrain-2 shadow-lg shadow-terrain/15"
                      : "bg-white/85 text-terrain-2 border-line hover:border-line-2 hover:bg-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.25 : 1.75} />
                </div>
                
                <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${
                  isActive ? "text-terrain-2 font-extrabold" : "text-ink-soft"
                }`}>
                  {level.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sélecteur compact 2x2 */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {levels.map((level) => {
            const isActive = level.id === activeId;
            const Icon = level.icon;
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => setActiveId(level.id)}
                aria-pressed={isActive}
                aria-label={`Sélectionner le niveau ${level.title}`}
                className={`text-left rounded-2xl p-3 border transition-all duration-200 flex items-start gap-2.5 min-h-[74px] cursor-pointer ${
                  isActive
                    ? "border-terrain bg-terrain/5 shadow-sm"
                    : "border-line bg-white/70 hover:bg-white hover:border-line-2"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors ${
                    isActive ? "bg-terrain text-white" : "bg-terrain-soft text-terrain-2"
                  }`}
                >
                  <Icon size={15} strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13.5px] font-bold text-ink leading-tight">
                    {level.shortLabel}
                  </h3>
                  <p className="text-[11px] text-muted-2 mt-0.5 truncate leading-none">
                    {level.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Fiche dynamique du niveau sélectionné */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.985 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 rounded-[28px] bg-white/78 backdrop-blur-[14px] border border-[rgba(217,93,50,0.12)] p-5 text-ink shadow-sm space-y-4"
          >
            <div>
              <span className="inline-flex font-mono text-[10px] tracking-[0.14em] uppercase text-terrain-2 bg-terrain-soft px-2.5 py-1 rounded font-bold">
                {active.involvement}
              </span>
            </div>

            <h3 className="text-[20px] font-bold text-ink tracking-tight leading-snug">
              {active.title}
            </h3>

            <p className="text-[14.5px] text-ink-soft leading-relaxed">
              {active.description}
            </p>

            <ul className="space-y-2.5 pt-1">
              {active.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-[14px] text-ink-soft leading-normal"
                >
                  <span className="mt-0.5 w-4.5 h-4.5 rounded-full bg-terrain-soft text-terrain-2 grid place-items-center shrink-0">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={() => onSelectIntent?.(active.id)}
                className="w-full h-13 rounded-full bg-gradient-to-r from-terrain to-terrain-2 text-white font-bold text-[14.5px] flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-terrain/10 active:scale-[0.98] transition-transform duration-150 group"
              >
                {active.cta}{" "}
                <motion.span
                  className="font-mono text-base animate-pulse"
                  animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </button>
              <p className="text-[11px] text-muted text-center leading-normal">
                {active.microcopy}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
