"use client";

import { motion } from "framer-motion";

interface CalloutCardProps {
  eyebrow?: string;
  metric?: string;
  title: string;
  text: string;
  subNotes?: string[];
  delay?: number;
  manual?: boolean;
}

export default function CalloutCard({ 
  eyebrow, 
  metric, 
  title, 
  text, 
  subNotes = [], 
  delay = 0, 
  manual = false 
}: CalloutCardProps) {
  const initial = manual ? undefined : { opacity: 0, x: 20, filter: "blur(8px)" };
  const whileInView = manual ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" };
  const viewport = manual ? undefined : { once: false, amount: 0.5 };
  const transition = manual ? undefined : { 
    duration: 0.8, 
    delay, 
    ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] 
  };

  return (
    <motion.div 
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className="w-full max-w-[320px] rounded-xl border border-line-2 shadow-shadow-2 overflow-hidden flex flex-col relative"
      style={{ 
        backgroundColor: "rgba(241, 236, 224, 0.08)", 
        backdropFilter: "blur(16px) saturate(120%)",
        WebkitBackdropFilter: "blur(16px) saturate(120%)"
      }}
    >
      {/* Header Panel */}
      <div 
        className="px-4 py-3 border-b border-line flex items-center justify-between relative z-10"
        style={{ backgroundColor: "rgba(31, 42, 46, 0.03)" }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink font-bold opacity-60">
          {eyebrow || "INSIGHT"}
        </span>
        {metric && (
          <span className="px-2 py-0.5 rounded-full bg-terrain/10 text-terrain font-mono text-[9px] font-bold border border-terrain/20">
            {metric}
          </span>
        )}
      </div>

      {/* Body Content */}
      <div className="p-4 space-y-2 relative z-10">
        <h3 className="text-[15px] font-bold text-ink leading-tight">{title}</h3>
        <p className="text-[13px] text-ink-soft leading-[1.5] font-medium">{text}</p>
      </div>

      {/* Footer / Sub-notes */}
      {subNotes.length > 0 && (
        <div 
          className="px-4 py-3 border-t border-line mt-auto relative z-10"
          style={{ backgroundColor: "rgba(31, 42, 46, 0.02)" }}
        >
          <ul className="space-y-1.5">
            {subNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 w-1 h-1 rounded-full bg-terrain/60 shrink-0 shadow-sm" />
                <span className="font-mono text-[10px] text-ink font-semibold leading-tight uppercase tracking-wider opacity-70">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
