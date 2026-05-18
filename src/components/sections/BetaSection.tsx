"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import CalloutCard from "@/components/CalloutCard";
import { LayoutGrid, Map as MapIcon, ShieldCheck } from "lucide-react";
import EngagementSelector from "./EngagementSelector";
import BetaCTA from "./BetaCTA";
import OrbitalMap from "./OrbitalMap";

/**
 * BetaSection — "Rejoindre la bêta"
 * Structure stricte (cahier Sprint 2) :
 *   1. Hero interactif (label + titre + texte + CTA | phone+globe | 3 cartes bénéfices)
 *   2. Sélecteur 4 niveaux d'engagement
 *   3. CTA final "Vous ne savez pas quel niveau choisir ?"
 */
export default function BetaSection() {
  return (
    <section
      id="beta"
      className="relative z-20 bg-canvas overflow-hidden py-24 md:py-32 border-t border-line"
    >
      {/* 1. HERO BÊTA */}
      <div className="relative mb-20 md:mb-28">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <OrbitalMap />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_30%_30%] gap-x-[clamp(32px,4vw,56px)] gap-y-12 items-center">
            {/* Colonne gauche : label + titre + texte + CTA */}
            <div className="space-y-7">
              <span className="inline-flex font-mono text-[12px] tracking-[0.18em] uppercase text-terrain font-semibold">
                Rejoindre la bêta
              </span>
              <h2
                className="text-ink font-bold tracking-[-0.025em]"
                style={{
                  fontSize: "clamp(40px, 5.4vw, 76px)",
                  lineHeight: 1.02,
                }}
              >
                Construire avec les pros du terrain, pour les pros du terrain.
              </h2>
              <p className="text-lead max-w-[460px]">
                DoorTrack est conçu pour les équipes de prospection terrain. Vos
                retours nous aident à créer un outil vraiment utile.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button type="button" className="btn-primary">
                  Rejoindre la bêta{" "}
                  <span className="arrow font-mono font-medium">→</span>
                </button>
                <button type="button" className="btn-secondary">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Colonne centre : téléphone + globe (globe = OrbitalMap en absolute) */}
            <div className="relative flex justify-center py-10 lg:py-0">
              <motion.div
                className="w-full max-w-[260px] relative z-10"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <PhoneFrame currentScreen="map" />
              </motion.div>
              {/* Halo subtil sous le téléphone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-terrain/5 blur-[100px] rounded-full z-0 pointer-events-none" />
            </div>

            {/* Colonne droite : 3 cartes bénéfices */}
            <div className="flex flex-col gap-5">
              <CalloutCard
                icon={LayoutGrid}
                title="Des outils pensés pour vos réalités terrain"
                text="Partagez vos usages et contraintes pour orienter les fonctionnalités utiles."
                tag="CO-CONSTRUCTION"
                delay={0}
              />
              <CalloutCard
                icon={MapIcon}
                title="Un accès anticipé à la solution"
                text="Testez les premières versions et gardez une longueur d'avance."
                tag="ACCÈS PRIORITAIRE"
                delay={0.11}
              />
              <CalloutCard
                icon={ShieldCheck}
                title="Une contribution reconnue"
                text="Vos retours peuvent influencer les priorités produit."
                tag="ROADMAP"
                delay={0.22}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. SÉLECTEUR DES 4 NIVEAUX D'ENGAGEMENT */}
      <EngagementSelector />

      {/* 3. CTA FINAL */}
      <BetaCTA />
    </section>
  );
}
