"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      // Affiche après 400px de scroll, masque si à moins de 500px du bas (près du formulaire)
      const nearBottom = docHeight - scrolled - winHeight < 550;
      setVisible(scrolled > 400 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const section = document.getElementById("contribution");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-paper/85 backdrop-blur-md border-t border-line block lg:hidden pb-[calc(16px+env(safe-area-inset-bottom))]"
        >
          <button
            onClick={handleClick}
            className="w-full h-12 bg-terrain text-paper-2 text-[14.5px] font-bold rounded-full shadow-shadow-3 flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
          >
            Choisir mon niveau <span className="font-mono font-medium">→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
