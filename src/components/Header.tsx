"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [threshold, setThreshold] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const updateThreshold = () => {
      setThreshold(window.innerHeight * 0.8);
      setIsMobile(window.innerWidth < 1024);
    };
    
    updateThreshold(); // Call once initially
    
    window.addEventListener("resize", updateThreshold);
    
    // Suivi du défilement pour réduire la hauteur de la navbar
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    // IntersectionObserver pour l'état actif des sections
    const sections = ["accueil", "demo", "vision", "contribution", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Zone active centrale du viewport
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("resize", updateThreshold);
      unsubscribeScroll();
      observer.disconnect();
    };
  }, [scrollY]);
  
  // Le header apparaît progressivement juste avant que la map ne soit à plat
  const motionOpacity = useTransform(scrollY, [threshold * 0.7, threshold], [0, 1]);
  const motionY = useTransform(scrollY, [threshold * 0.7, threshold], [-20, 0]);

  const headerOpacity = isMobile ? 1 : motionOpacity;
  const headerY = isMobile ? 0 : motionY;

  return (
    <motion.header 
      style={{ opacity: headerOpacity, y: headerY }}
      className={`fixed left-[16px] right-[16px] md:left-1/2 md:right-auto md:-translate-x-1/2 z-[100] flex items-center justify-between md:justify-start gap-4 rounded-full text-ink transition-all duration-300 w-[calc(100%-32px)] md:w-auto whitespace-nowrap
        ${isScrolled 
          ? "top-[8px] md:top-[12px] px-3.5 py-0.5 bg-white/82 backdrop-blur-2xl border border-white/60 shadow-lg" 
          : "top-[12px] md:top-[18px] px-4.5 py-1 bg-white/72 backdrop-blur-xl border border-white/50 shadow-md"
        }`}
    >
      <div className="flex items-center gap-2 pr-3 md:border-r border-line whitespace-nowrap">
        <div className="w-[22px] h-[22px] rounded-md bg-teal relative">
          <div className="absolute left-[6px] top-[5px] w-2 h-3 bg-paper rounded-[2px]" />
          <div className="absolute left-[11px] top-[10px] w-[3px] h-[3px] rounded-full bg-terrain" />
        </div>
        <Link href="/" className="text-sm font-bold tracking-tight whitespace-nowrap">
          Doortrack
        </Link>
      </div>

      <nav className="hidden md:flex gap-1.5 whitespace-nowrap">
        {["accueil", "demo", "vision", "contribution", "contact"].map((id) => {
          const isActive = activeSection === id;
          const label = id === "accueil" ? "Accueil" : id === "demo" ? "Démo" : id === "vision" ? "Vision" : id === "contribution" ? "Participation" : "Contact";
          return (
            <Link
              key={id}
              href={`#${id}`}
              className={`text-[13px] px-[12px] py-1 rounded-full transition-all whitespace-nowrap relative font-medium ${
                isActive 
                  ? "text-ink font-bold bg-canvas/70 shadow-sm" 
                  : "text-ink-soft hover:bg-canvas/45"
              }`}
            >
              {label}
              {isActive && (
                <motion.span
                  layoutId="navActiveDot"
                  className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-terrain"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <Link
        href="#contribution"
        className="flex items-center gap-1.5 px-[16px] py-[5px] bg-terrain text-paper-2 text-[12.5px] md:text-[13px] font-semibold tracking-tight rounded-full transition-colors hover:bg-terrain-2 whitespace-nowrap ml-1"
      >
        Choisir mon niveau <span className="font-mono text-base leading-none">→</span>
      </Link>
    </motion.header>
  );
}
