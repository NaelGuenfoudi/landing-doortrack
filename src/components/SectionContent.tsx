"use client";

import { motion } from "framer-motion";

interface SectionContentProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  isFirst?: boolean;
  customTextAlign?: any;
  manual?: boolean;
}

export default function SectionContent({ 
  number, 
  eyebrow, 
  title, 
  description, 
  isFirst,
  customTextAlign = "left",
  manual = false
}: SectionContentProps) {
  // Définition explicite pour satisfaire le compilateur de Netlify (TypeScript)
  const initial = manual ? undefined : { opacity: 0, y: 30, filter: "blur(10px)" };
  const whileInView = manual ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" };
  const viewport = manual ? undefined : { once: false, amount: 0.5 };
  const transition = manual ? undefined : { 
    duration: 0.8, 
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number] 
  };

  return (
    <motion.div 
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      style={{ textAlign: customTextAlign }}
      className="space-y-6"
    >
      <motion.span 
        initial={manual ? undefined : { opacity: 0 }}
        whileInView={manual ? undefined : { opacity: 1 }}
        transition={manual ? undefined : { delay: 0.2 }}
        className="text-blue-600 font-bold tracking-wider text-sm"
      >
        {number} — {eyebrow}
      </motion.span>
      
      <motion.h2 
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-lg text-slate-600 max-w-xl leading-relaxed"
      >
        {description}
      </motion.p>
      
      {isFirst && (
        <motion.div 
          initial={manual ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={manual ? undefined : { opacity: 1, scale: 1 }}
          transition={manual ? undefined : { delay: 0.4 }}
          className="pt-4 pointer-events-auto"
        >
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
            Rejoindre la bêta
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
