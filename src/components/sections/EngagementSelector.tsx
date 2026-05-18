"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

interface Level {
  id: string;
  icon: ComponentType<LucideProps>;
  title: string;
  short: string;
  involvementLabel: string;
  intro: string;
  benefits: string[];
  cta: string;
}

const levels: Level[] = [
  {
    id: "contributeur",
    icon: MessageSquare,
    title: "Contributeur terrain",
    short: "Partagez vos retours sans engagement financier.",
    involvementLabel: "NIVEAU D'IMPLICATION : FAIBLE",
    intro:
      "Votre expérience terrain guide DoorTrack dès le départ, sans engagement financier.",
    benefits: [
      "Partagez vos usages et irritants terrain.",
      "Aidez à façonner un outil vraiment utile.",
      "Accédez en avant-première aux nouveautés.",
    ],
    cta: "Je contribue",
  },
  {
    id: "entreprise",
    icon: Building2,
    title: "Entreprise pilote",
    short: "Formalisez votre intérêt et réservez une priorité de test.",
    involvementLabel: "NIVEAU D'IMPLICATION : MOYEN",
    intro:
      "Vous validez l'intérêt de DoorTrack pour votre organisation et préparez un futur test.",
    benefits: [
      "Décrivez vos besoins prioritaires.",
      "Indiquez le nombre d'utilisateurs visés.",
      "Réservez une priorité pour un futur pilote.",
    ],
    cta: "Candidater comme pilote",
  },
  {
    id: "early",
    icon: Rocket,
    title: "Early Adopter",
    short: "Accédez en priorité aux premières versions.",
    involvementLabel: "NIVEAU D'IMPLICATION : ÉLEVÉ",
    intro:
      "Vous sécurisez un accès prioritaire et participez plus directement aux évolutions du produit.",
    benefits: [
      "Sécurisez un accès prioritaire.",
      "Bénéficiez de conditions préférentielles.",
      "Influencez les priorités produit.",
    ],
    cta: "Devenir Early Adopter",
  },
  {
    id: "pilote",
    icon: Compass,
    title: "Pilote terrain encadré",
    short: "Testez DoorTrack dans un cadre accompagné.",
    involvementLabel: "NIVEAU D'IMPLICATION : TRÈS ÉLEVÉ",
    intro:
      "Vous testez DoorTrack sur une équipe réelle avec un périmètre, des objectifs et des indicateurs.",
    benefits: [
      "Testez sur une équipe réelle.",
      "Définissez un périmètre et des objectifs.",
      "Suivez les KPI terrain avec un cadre clair.",
    ],
    cta: "Étudier un pilote terrain",
  },
];

export default function EngagementSelector() {
  const [activeId, setActiveId] = useState<string>(levels[0].id);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const displayId = hoverId ?? activeId;
  const active = levels.find((l) => l.id === displayId) ?? levels[0];

  return (
    <div className="max-w-[1180px] mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-14 space-y-4">
        <h2 className="text-h2 text-ink">
          Choisissez le niveau adapté à votre maturité terrain
        </h2>
        <p className="text-lead mx-auto">
          Sélectionnez le rôle qui correspond le mieux à votre organisation et à
          vos objectifs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[36%_1fr] gap-6 lg:gap-10 items-start">
        {/* Liste des cartes (gauche desktop) */}
        <div className="flex flex-col gap-4">
          {levels.map((level) => {
            const isActive = level.id === displayId;
            const Icon = level.icon;
            return (
              <motion.button
                key={level.id}
                type="button"
                onClick={() => setActiveId(level.id)}
                onMouseEnter={() => setHoverId(level.id)}
                onMouseLeave={() => setHoverId(null)}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={`text-left rounded-[24px] bg-white px-6 py-5 border transition-[border-color,box-shadow] duration-200 ${
                  isActive
                    ? "border-terrain shadow-shadow-3"
                    : "border-line shadow-shadow-1 hover:border-line-2"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-terrain text-white"
                        : "bg-terrain-soft text-terrain-2"
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
                    className={`mt-1 shrink-0 transition-transform ${
                      isActive ? "text-terrain translate-x-0.5" : "text-muted-2"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Panneau de détail (droite desktop) */}
        <div className="relative rounded-[28px] bg-white border border-line shadow-shadow-2 p-8 md:p-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="space-y-6"
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
                <button type="button" className="btn-primary">
                  {active.cta}{" "}
                  <span className="arrow font-mono font-medium">→</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
