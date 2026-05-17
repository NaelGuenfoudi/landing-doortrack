"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollIndicator
 * ---------------
 * Indicateur discret façon annotation cadastrale (cf. cahier §12) :
 * label JetBrains Mono + ligne verticale fine, opacity 0.45, disparaît
 * dès le début du scroll.
 */
export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  // Fade-out rapide dès que l'utilisateur amorce le scroll (~12% d'un viewport).
  const opacity = useTransform(scrollY, [0, 80, 160], [0.45, 0.2, 0]);
  const translateY = useTransform(scrollY, [0, 160], [0, 8]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 0.45, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
      style={{ opacity, y: translateY }}
      className="fixed bottom-9 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2"
    >
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
        Scroll pour explorer
      </span>
      <span className="block w-px h-[34px] bg-line-2" />
    </motion.div>
  );
}
