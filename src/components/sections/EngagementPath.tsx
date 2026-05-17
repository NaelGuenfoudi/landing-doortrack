"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Contributeur terrain" },
  { id: "02", title: "Entreprise pilote" },
  { id: "03", title: "Early Adopter" },
  { id: "04", title: "Pilote terrain encadré" },
];

export default function EngagementPath() {
  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-h3 text-ink">Un parcours d’engagement adapté à votre implication</h3>
          <p className="text-lead mx-auto">
            Chaque entreprise peut contribuer à son rythme : simple retour terrain, intérêt formalisé, accès prioritaire ou pilote encadré.
          </p>
        </div>

        <div className="relative flex justify-between items-start">
          {/* Ligne horizontale de fond */}
          <div className="absolute top-6 left-0 w-full h-px bg-line-2 z-0" />
          
          {/* Ligne animée au scroll (placeholder simple avec Framer) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-6 left-0 w-full h-[2px] bg-terrain z-1 origin-left"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 + 0.5 }}
              className="relative z-10 flex flex-col items-center gap-4 text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-paper border-2 border-line-2 flex items-center justify-center text-terrain font-mono font-bold text-sm group-hover:border-terrain transition-colors bg-white">
                {step.id}
              </div>
              <span className="text-sm font-bold text-ink max-w-[120px]">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
