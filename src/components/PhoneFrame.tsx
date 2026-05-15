"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PhoneOverlay from "./PhoneOverlay";

interface PhoneFrameProps {
  currentScreen: "map" | "home" | "prospects";
  introMode?: boolean;
  introOpacity?: number;
  introScale?: number;
}

const screenImages = {
  map: "/screens/doortrack-map.jpg",
  home: "/screens/doortrack-home.jpg",
  prospects: "/screens/doortrack-prospects.jpg",
};

export default function PhoneFrame({ 
  currentScreen, 
  introMode = false, 
  introOpacity = 1, 
  introScale = 1 
}: PhoneFrameProps) {
  return (
    /* Réduction de la taille max de 380px à 340px pour libérer de l'espace vertical */
    <div 
      className="relative mx-auto w-full max-w-[300px] md:max-w-[340px] aspect-[390/800]"
      style={{ opacity: introOpacity, transform: `scale(${introScale})` }}
    >
      {/* Cadre du téléphone */}
      <div className="absolute inset-0 bg-slate-950 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3),0_30px_60px_-30px_rgba(2,6,23,0.4)] border border-slate-800 flex flex-col">
        {/* Encoche / Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-40" />
        
        {/* Écran interne */}
        <div className="relative flex-1 bg-white rounded-[2.2rem] overflow-hidden border border-slate-900">
          {/* Overlays animés - On les désactive en introMode pour plus de sobriété si besoin, ou on les laisse */}
          {!introMode && <PhoneOverlay currentScreen={currentScreen} />}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={introMode ? { opacity: 1 } : { opacity: 0, x: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={introMode ? { opacity: 1 } : { opacity: 0, x: -40, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={screenImages[currentScreen]}
                alt={`Écran Doortrack - ${currentScreen}`}
                fill
                sizes="(max-width: 768px) 300px, 340px"
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Reflet subtil sur le cadre */}
      <div className="absolute inset-0 rounded-[3rem] pointer-events-none border border-white/10 z-50 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
    </div>
  );
}
