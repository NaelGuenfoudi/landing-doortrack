"use client";

import { motion } from "framer-motion";

interface CalloutCardProps {
  title: string;
  text: string;
  delay?: number;
  manual?: boolean;
}

export default function CalloutCard({ title, text, delay = 0, manual = false }: CalloutCardProps) {
  const animationProps = manual ? {} : {
    initial: { opacity: 0, x: 20, filter: "blur(8px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
    viewport: { once: false, amount: 0.5 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <motion.div 
      {...animationProps}
      className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}
