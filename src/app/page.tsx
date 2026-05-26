"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NancyMapLayer from "@/components/scene/hero-animation/NancyMapLayer";
import ScrollIndicator from "@/components/ScrollIndicator";
import BetaSection from "@/components/sections/BetaSection";
import VisionSection from "@/components/sections/VisionSection";
import ProofSection from "@/components/sections/ProofSection";
import ContactForm from "@/components/sections/ContactForm";
import type { ContactIntentId } from "@/components/sections/ContactForm";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import MobileProductDemo from "@/components/sections/MobileProductDemo";
import DesktopProductDemo from "@/components/sections/DesktopProductDemo";

export default function Home() {
  const [selectedIntent, setSelectedIntent] = useState<ContactIntentId>("contact-general");

  const handleSelectIntent = (intentId: ContactIntentId) => {
    setSelectedIntent(intentId);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Background Map Layer (Fixed behind the Hero) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-canvas">
        <NancyMapLayer />
      </div>
      
      <ScrollIndicator />
      
      <main className="relative z-10 bg-transparent" id="accueil">
        
        {/* ==================== VERSION DESKTOP ==================== */}
        <div className="hidden lg:block">
          
          {/* Hero Section Immersif */}
          <div className="relative h-[100vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Gradient overlays to ensure readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/10 via-paper/40 to-canvas pointer-events-none" />
            <div 
              className="absolute inset-0 z-15 pointer-events-none" 
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 45%, rgba(255,255,255,0.1) 100%)"
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-20 max-w-4xl space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="inline-flex font-mono text-[11px] tracking-[0.2em] uppercase text-terrain font-semibold px-4 py-1.5 bg-terrain-soft rounded-full"
              >
                PROSPECTION CARTOGRAPHIÉE
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-h1 text-ink text-center leading-[1.05] tracking-tight"
              >
                Vous méritez un <span className="text-terrain">vrai</span> outil terrain.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="text-lead max-w-2xl mx-auto"
              >
                Doortrack aide les équipes commerciales à visualiser leurs secteurs, suivre leurs passages et transformer la prospection en information exploitable.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.4 }}
                className="flex justify-center gap-4 pt-4"
              >
                <a
                  href="#demo"
                  className="btn-primary"
                >
                  Voir la démo <span className="arrow font-mono font-medium ml-1">→</span>
                </a>
                <a
                  href="#vision"
                  className="btn-secondary"
                >
                  Comprendre le concept
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Démonstration produit interactive desktop */}
          <DesktopProductDemo />
        </div>
        
        {/* ==================== VERSION MOBILE ==================== */}
        <div className="block lg:hidden text-ink">
          
          {/* Hero mobile avec la carte en arrière-plan et un overlay clair pour lisibilité */}
          <div className="relative h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
            {/* Dégradé clair de transition */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/10 via-paper/60 to-canvas pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative z-20 max-w-[480px] space-y-6 pt-12"
            >
              <h1 className="text-[36px] sm:text-[40px] leading-[1.05] font-bold text-ink text-balance">
                Vous méritez un <span className="text-terrain">vrai</span> outil terrain.
              </h1>
              <p className="text-[15.5px] leading-[1.5] text-ink-soft">
                Visualisez vos secteurs, suivez vos opportunités et pilotez votre prospection depuis le terrain.
              </p>
              <div className="pt-2">
                <a
                  href="#contribution"
                  className="inline-flex items-center justify-center h-13 px-8 bg-terrain text-paper-2 text-[14.5px] font-semibold rounded-full shadow-shadow-2 hover:bg-terrain-2 transition-colors w-full sm:w-auto"
                >
                  Choisir mon niveau <span className="arrow font-mono font-medium ml-1.5">→</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Démonstration produit mobile scénarisée en 4 étapes */}
          <MobileProductDemo />
        </div>

        {/* ==================== SECTIONS COMMUNES RESPONSIVES ==================== */}
        
        {/* Section Vision & Contact */}
        <VisionSection />

        {/* Section de Preuve (Crédibilité) */}
        <ProofSection />

        {/* Section Bêta / Participation */}
        <BetaSection onSelectIntent={handleSelectIntent} />

        {/* Formulaire de Contact */}
        <ContactForm selectedIntent={selectedIntent} onSelectIntent={setSelectedIntent} />

        {/* Floating CTA mobile */}
        <MobileStickyCTA />
      </main>
    </>
  );
}
