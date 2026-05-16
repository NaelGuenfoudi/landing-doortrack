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
  const animationProps = manual ? {} : {
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: false, amount: 0.5 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <motion.div 
      {...animationProps}
      style={{ textAlign: customTextAlign }}
      className="space-y-6"
    >
      <motion.span 
        initial={manual ? {} : { opacity: 0 }}
        whileInView={manual ? {} : { opacity: 1 }}
        transition={{ delay: 0.2 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
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
