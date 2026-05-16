"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FloatingWidgetsProps {
  currentScreen: "map" | "home" | "prospects" | "flash";
}

interface WidgetItem {
  id: number;
  label: string;
  value: string;
  pos: string;
  delay: number;
  dot?: string;
}

const widgetsData: Record<string, WidgetItem[]> = {
  map: [
    { id: 1, label: "Secteur Nord", value: "85% couvert", pos: "top-[-40px] left-[-60px]", delay: 0 },
    { id: 2, label: "Densité", value: "Opportunité +", pos: "bottom-[20px] right-[-80px]", delay: 0.5 },
  ],
  home: [
    { id: 3, label: "Objectif Jour", value: "42 / 50 portes", pos: "top-[20px] right-[-100px]", delay: 0.2 },
    { id: 4, label: "Conversion", value: "+15% vs hier", pos: "bottom-[-30px] left-[-70px]", delay: 0.7 },
  ],
  prospects: [
    { id: 5, label: "Statut Prospect", value: "Chaud", pos: "top-[-20px] left-[-90px]", delay: 0.1, dot: "bg-terrain" },
    { id: 6, label: "Prochaine relance", value: "Aujourd'hui 14:30", pos: "bottom-[60px] right-[-110px]", delay: 0.6 },
  ],
  flash: [
    { id: 7, label: "Mode Flash", value: "Hors-ligne actif", pos: "top-[100px] left-[-120px]", delay: 0.3 },
    { id: 8, label: "Cadence", value: "3 sec / porte", pos: "bottom-[-10px] right-[-60px]", delay: 0.8 },
  ],
};

export default function FloatingWidgets({ currentScreen }: FloatingWidgetsProps) {
  const currentWidgets = widgetsData[currentScreen];

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          {currentWidgets.map((widget) => (
            <motion.div
              key={widget.id}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: widget.delay },
                scale: { duration: 0.4, delay: widget.delay },
                y: { 
                  duration: 4 + (widget.id % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className={`absolute ${widget.pos} px-3.5 py-2 bg-paper/85 backdrop-blur-md border border-line rounded-lg shadow-shadow-2 flex flex-col gap-0.5 min-w-[120px]`}
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold flex items-center gap-1.5">
                {widget.dot && <span className={`w-1.5 h-1.5 rounded-full ${widget.dot}`} />}
                {widget.label}
              </span>
              <span className="font-sans text-[13px] font-bold text-ink whitespace-nowrap">
                {widget.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
