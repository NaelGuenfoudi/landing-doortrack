"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function BetaCTA() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 p-10 md:p-14 rounded-[28px] bg-white border border-line shadow-shadow-3"
        >
          <div className="w-16 h-16 rounded-2xl bg-terrain-soft text-terrain flex items-center justify-center shrink-0">
            <MessageSquare size={32} />
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-ink">
              Vous ne savez pas quel niveau choisir ?
            </h3>
            <p className="text-lead">
              Échangeons sur votre organisation terrain, votre équipe commerciale et vos objectifs. Nous vous orienterons vers le niveau d’engagement le plus adapté.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="h-[54px] px-8 rounded-full bg-terrain text-white font-bold hover:bg-terrain-2 transition-all whitespace-nowrap">
              Être rappelé →
            </button>
            <button className="h-[54px] px-8 rounded-full border border-line bg-transparent text-ink font-bold hover:bg-canvas transition-all whitespace-nowrap">
              Prendre contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
