"use client";

import { motion } from "framer-motion";

interface SectionContentProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  isFirst?: boolean;
  customTextAlign?: "left" | "center" | "right";
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
  const initial = manual ? undefined : { opacity: 0, y: 30, filter: "blur(10px)" };
  const whileInView = manual ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" };
  const viewport = manual ? undefined : { once: false, amount: 0.5 };
  const transition = manual ? undefined : { 
    duration: 0.8, 
    ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] 
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
      <motion.div 
        initial={manual ? undefined : { opacity: 0 }}
        whileInView={manual ? undefined : { opacity: 1 }}
        transition={manual ? undefined : { delay: 0.2 }}
        className="flex flex-col gap-1.5 mb-2"
      >
        <span className="font-mono text-[12px] tracking-[0.18em] text-terrain font-semibold">
          § {number}
        </span>
        <span className="font-mono text-[12px] tracking-[0.18em] text-muted font-medium uppercase">
          {eyebrow}
        </span>
      </motion.div>
      
      <motion.h2 
        className="text-h2 text-ink text-balance"
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-lead"
      >
        {description}
      </motion.p>
      
      {isFirst && (
        <motion.div 
          initial={manual ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={manual ? undefined : { opacity: 1, scale: 1 }}
          transition={manual ? undefined : { delay: 0.4 }}
          className="pt-4 pointer-events-auto flex gap-3 flex-wrap"
        >
          <button className="inline-flex items-center gap-2 h-[54px] px-[22px] rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-terrain text-white shadow-shadow-2 transition-all hover:bg-terrain-2">
            Rejoindre la bêta <span className="font-mono font-medium">→</span>
          </button>
          <button className="inline-flex items-center gap-2 h-[54px] px-[22px] rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-transparent text-ink shadow-[inset_0_0_0_1.5px_var(--color-line-2)] transition-all hover:bg-canvas">
            En savoir plus
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
