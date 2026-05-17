"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const criteria = [
  "Engagement financier",
  "Accès à la bêta",
  "Influence produit",
  "Test avec données réelles",
  "Accompagnement dédié",
  "Disponibilité"
];

const data = [
  ["Aucun", "Prioritaire", "Élevée", "Non", "Non", "Ouvert"],
  ["Aucun", "Selon planning", "Très élevée", "Selon accord", "Selon disponibilité", "Sur sélection"],
  ["Contribution possible", "Prioritaire", "Très élevée", "Partiel", "Prioritaire", "Places limitées"],
  ["Budget pilote", "Inclus dans le pilote", "Maximale", "Oui", "Inclus", "Nombre limité"]
];

const titles = [
  "Contributeur terrain",
  "Entreprise pilote",
  "Early Adopter",
  "Pilote terrain encadré"
];

export default function BetaComparisonTable() {
  return (
    <div className="py-20 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-h3 text-ink">Choisissez le niveau adapté à votre maturité terrain</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[24px] border border-line bg-white/50 backdrop-blur-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-paper/50">
                <th className="p-6 text-sm font-bold text-ink">Critère</th>
                {titles.map(title => (
                  <th key={title} className="p-6 text-sm font-bold text-ink">{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((criterion, i) => (
                <tr key={criterion} className="border-b border-line/50 hover:bg-white/40 transition-colors">
                  <td className="p-6 text-sm font-semibold text-ink-soft">{criterion}</td>
                  {data.map((col, j) => (
                    <td key={j} className="p-6 text-[13px] text-muted">
                      {col[i] === "Oui" ? (
                        <Check size={18} className="text-terrain" />
                      ) : (
                        col[i]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
