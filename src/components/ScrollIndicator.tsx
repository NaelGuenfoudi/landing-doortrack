"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ScrollIndicator
 * ---------------
 * Guide visuel en glassmorphism pour inciter au scroll.
 */
export default function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Scrollez pour explorer</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-16 rounded-full border border-slate-200/50 bg-white/20 backdrop-blur-md flex items-start justify-center p-2 shadow-xl shadow-slate-900/5"
        >
          <div className="w-1 h-3 bg-blue-600 rounded-full" />
        </motion.div>
        <motion.div
           animate={{ opacity: [0.3, 1, 0.3] }}
           transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-blue-600" />
        </motion.div>
      </div>
    </motion.div>
  );
}
