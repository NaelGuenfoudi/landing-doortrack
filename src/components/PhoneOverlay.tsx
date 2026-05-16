"use client";

import { motion } from "framer-motion";

interface PhoneOverlayProps {
  currentScreen: "map" | "home" | "prospects" | "flash";
}

export default function PhoneOverlay({ currentScreen }: PhoneOverlayProps) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {/* Overlay pour la section MAP et FLASH (qui réutilise la map) */}
      {(currentScreen === "map" || currentScreen === "flash") && (
        <>
          {/* Pulse sur un secteur clé de la carte */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[30%] w-16 h-16 bg-terrain rounded-full blur-xl"
          />
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[46%] left-[36%] w-4 h-4 bg-terrain rounded-full shadow-[0_0_15px_rgba(226,91,20,0.8)]"
          />
        </>
      )}

      {/* Overlay pour la section HOME */}
      {currentScreen === "home" && (
        <>
          {/* Halo sur un KPI important */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-[22%] left-[5%] right-[5%] h-32 bg-gradient-to-r from-teal/10 via-teal/20 to-teal/10 rounded-2xl blur-lg"
          />
        </>
      )}

      {/* Overlay pour la section PROSPECTS */}
      {currentScreen === "prospects" && (
        <>
          {/* Pulse sur le statut d'un prospect chaud */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-[35%] right-[10%] w-20 h-8 bg-terrain-soft rounded-full blur-md"
          />
        </>
      )}

      {/* Faux tap global qui apparaît lors du changement de section (simulé par le changement d'écran) */}
      <motion.div
        key={`tap-${currentScreen}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.2], opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-terrain/50 bg-terrain/20 rounded-full z-40"
      />
    </div>
  );
}
