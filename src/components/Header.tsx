"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [threshold, setThreshold] = useState(1000);

  useEffect(() => {
    // La map est maintenant à plat à 40% de 200vh, soit 80vh
    const updateThreshold = () => setThreshold(window.innerHeight * 0.8);
    
    updateThreshold(); // Call once initially
    
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);
  
  // Le header apparaît progressivement juste avant que la map ne soit à plat
  const opacity = useTransform(scrollY, [threshold * 0.7, threshold], [0, 1]);
  const y = useTransform(scrollY, [threshold * 0.7, threshold], [-20, 0]);

  return (
    <motion.header 
      style={{ opacity, y }}
      className="fixed top-[18px] left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3.5 px-3 py-1.5 bg-paper/85 backdrop-blur-md border border-line rounded-full text-ink shadow-shadow-2"
    >
      <div className="flex items-center gap-2 pr-2.5 border-r border-line">
        <div className="w-[22px] h-[22px] rounded-md bg-teal relative">
          <div className="absolute left-[6px] top-[5px] w-2 h-3 bg-paper rounded-[2px]" />
          <div className="absolute left-[11px] top-[10px] w-[3px] h-[3px] rounded-full bg-terrain" />
        </div>
        <Link href="/" className="text-sm font-bold tracking-tight">
          DoorTrack
        </Link>
      </div>

      <nav className="hidden md:flex gap-0.5">
        <Link href="#concept" className="text-[13px] text-ink-soft px-[11px] py-1.5 rounded-full transition-all hover:bg-canvas">
          Concept
        </Link>
        <Link href="#narratif" className="text-[13px] text-ink-soft px-[11px] py-1.5 rounded-full transition-all hover:bg-canvas">
          Narratif
        </Link>
        <Link href="/contact" className="text-[13px] text-ink-soft px-[11px] py-1.5 rounded-full transition-all hover:bg-canvas">
          Contact
        </Link>
      </nav>

      <Link 
        href="/contact" 
        className="flex items-center gap-1.5 px-[14px] py-[7px] bg-terrain text-paper-2 text-[13px] font-semibold tracking-tight rounded-full after:content-['→'] after:font-mono after:font-medium transition-colors hover:bg-terrain-2"
      >
        Vision
      </Link>
    </motion.header>
  );
}
