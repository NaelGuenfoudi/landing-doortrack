"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalMapBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      style={{ y }}
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
    >
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'url("/assets/map-pattern.svg")',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </motion.div>
  );
}
