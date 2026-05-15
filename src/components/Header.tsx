"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [threshold, setThreshold] = useState(1000); // Valeur par défaut

  useEffect(() => {
    // La map est maintenant à plat à 40% de 200vh, soit 80vh
    setThreshold(window.innerHeight * 0.8);
    
    const handleResize = () => setThreshold(window.innerHeight * 0.8);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Le header apparaît progressivement juste avant que la map ne soit à plat
  const opacity = useTransform(scrollY, [threshold * 0.7, threshold], [0, 1]);
  const y = useTransform(scrollY, [threshold * 0.7, threshold], [-20, 0]);

  return (
    <motion.header 
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <MapPin size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Doortrack
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Prendre contact
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Rejoindre la bêta
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
