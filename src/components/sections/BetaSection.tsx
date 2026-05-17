"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import SectionContent from "@/components/SectionContent";
import CalloutCard from "@/components/CalloutCard";
import { LayoutGrid, Map as MapIcon, ShieldCheck } from "lucide-react";
import EngagementPath from "./EngagementPath";
import BetaCardsGrid from "./BetaCardsGrid";
import BetaComparisonTable from "./BetaComparisonTable";
import BetaCTA from "./BetaCTA";
import OrbitalMap from "./OrbitalMap";

/**
 * BetaSection
 * -----------
 * Section "Rejoindre la bêta" (Onglet 2).
 * Structure complète selon cahier §6.
 */
export default function BetaSection() {
  return (
    <section id="beta" className="relative z-20 bg-canvas overflow-hidden py-24 md:py-32 border-t border-line">
      
      {/* 1. Hero Bêta avec map orbitale */}
      <div className="relative mb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <OrbitalMap />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_32%_30%] gap-12 items-center">
            
            {/* Colonne Gauche : Texte */}
            <div className="space-y-8">
              <SectionContent
                number="05"
                eyebrow="REJOINDRE LA BÊTA"
                title="Construire avec les pros du terrain, pour les pros du terrain."
                description="Doortrack est conçu pour les équipes de prospection terrain. Votre expérience nous permet d’aller plus vite, de prioriser l’essentiel et de créer un outil qui répond vraiment aux besoins du terrain."
                manual={true}
              />
              <div className="flex gap-4 pt-4">
                 <button className="h-[54px] px-8 rounded-full bg-terrain text-white font-bold hover:bg-terrain-2 transition-all shadow-shadow-2">
                   Rejoindre la bêta →
                 </button>
                 <button className="h-[54px] px-8 rounded-full border border-line bg-white/50 backdrop-blur-sm text-ink font-bold hover:bg-white transition-all">
                   En savoir plus
                 </button>
              </div>
            </div>

            {/* Colonne Centre : Téléphone */}
            <div className="relative flex justify-center py-12 lg:py-0">
              <div className="w-full max-w-[230px] relative z-10">
                <PhoneFrame currentScreen="map" />
              </div>
              {/* Halo subtil sous le téléphone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-terrain/5 blur-[100px] rounded-full z-0" />
            </div>

            {/* Colonne Droite : Micro-cartes */}
            <div className="flex flex-col gap-6">
              <CalloutCard
                icon={LayoutGrid}
                title="Des outils pensés pour vos réalités de terrain"
                text="Partagez vos usages, vos contraintes et vos priorités pour orienter les fonctionnalités réellement utiles."
                tag="CO-CONSTRUCTION"
                manual={true}
              />
              <CalloutCard
                icon={MapIcon}
                title="Un accès anticipé à la solution"
                text="Testez les premières versions, donnez vos retours et gardez une longueur d’avance sur votre organisation terrain."
                tag="ACCÈS PRIORITAIRE"
                manual={true}
              />
              <CalloutCard
                icon={ShieldCheck}
                title="Une contribution reconnue"
                text="Votre retour compte. Chaque échange peut influencer les priorités produit, les parcours utilisateurs et les futurs modules."
                tag="ROADMAP"
                manual={true}
              />
            </div>

          </div>
        </div>
      </div>

      {/* 2. Parcours d’engagement progressif */}
      <EngagementPath />

      {/* 3. Cartes des 4 niveaux */}
      <BetaCardsGrid />

      {/* 4. Comparatif synthétique */}
      <BetaComparisonTable />

      {/* 5. CTA final */}
      <BetaCTA />
      
    </section>
  );
}
