"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import type { ContactIntentId } from "./ContactForm";

interface BetaCTAProps {
  onSelectIntent?: (intent: ContactIntentId) => void;
}

export default function BetaCTA({ onSelectIntent }: BetaCTAProps) {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden flex flex-col md:flex-row items-center gap-8 p-10 md:p-14 rounded-[28px] bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-3"
        >
          {/* Décorations de fond premium */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-terrain/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-terrain-soft/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-16 h-16 rounded-2xl bg-terrain-soft text-terrain flex items-center justify-center shrink-0">
            <MessageSquare size={32} />
          </div>

          <div className="relative z-10 flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
              Vous hésitez entre contribution, test pilote ou accompagnement ?
            </h3>
            <p className="text-lead">
              Présentez-nous votre organisation, votre équipe et vos objectifs. Nous conviendrons ensemble du format le plus adapté à votre terrain.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              type="button" 
              onClick={() => onSelectIntent?.("contact-general")}
              className="btn-primary whitespace-nowrap"
            >
              Être rappelé{" "}
              <span className="arrow font-mono font-medium">→</span>
            </button>
            <button 
              type="button" 
              onClick={() => onSelectIntent?.("contact-general")}
              className="btn-secondary whitespace-nowrap"
            >
              Prendre contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
