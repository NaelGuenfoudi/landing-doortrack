"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Contributeur terrain",
    benefit: "Faites entendre votre voix et influencez le produit dès sa construction.",
    engagement: "Faible",
    forWho: "Pour les professionnels qui veulent partager leurs méthodes, leurs irritants et leurs besoins terrain sans engagement financier.",
    features: [
      "Accès prioritaire aux échanges bêta",
      "Influence sur la roadmap produit",
      "Retour direct avec le porteur du projet",
      "Possibilité de tester la bêta dès qu’elle est disponible"
    ],
    cta: "Je contribue"
  },
  {
    title: "Entreprise pilote",
    benefit: "Formalisez votre intérêt et réservez une priorité de test.",
    engagement: "Moyen",
    forWho: "Pour les structures souhaitant valider l’intérêt de Doortrack dans leur organisation avant un déploiement réel.",
    features: [
      "Priorité pour un futur pilote",
      "Cadrage des besoins métier",
      "Périmètre de test discuté en amont",
      "Visibilité sur les évolutions produit"
    ],
    cta: "Candidater comme pilote"
  },
  {
    title: "Early Adopter",
    benefit: "Accédez en priorité aux premières versions et bénéficiez de conditions préférentielles.",
    engagement: "Élevé",
    forWho: "Pour les managers qui veulent sécuriser un accès prioritaire et soutenir concrètement la finalisation du MVP.",
    features: [
      "Accès prioritaire à la solution",
      "Tarif préférentiel au lancement",
      "Démo et onboarding prioritaires",
      "Participation renforcée à la roadmap"
    ],
    cta: "Devenir Early Adopter"
  },
  {
    title: "Pilote terrain encadré",
    benefit: "Testez Doortrack sur une équipe réelle, avec un cadre, des objectifs et des indicateurs.",
    engagement: "Très élevé",
    forWho: "Pour les entreprises prêtes à tester la solution dans des conditions proches du réel, sur un périmètre défini.",
    features: [
      "Test réel sur une équipe cible",
      "Paramétrage et accompagnement prioritaire",
      "Suivi des KPI terrain",
      "Conditions préférentielles en cas de déploiement"
    ],
    cta: "Étudier un pilote terrain"
  }
];

export default function BetaCardsGrid() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-line shadow-shadow-2 hover:translate-y-[-6px] hover:border-terrain/35 hover:shadow-terrain/8 transition-all duration-500"
          >
            <div className="flex flex-col gap-4 mb-6">
               <h4 className="text-xl font-bold text-ink">{card.title}</h4>
               <p className="text-sm font-semibold text-terrain uppercase tracking-wider">{card.engagement}</p>
            </div>

            <p className="text-sm font-bold text-ink mb-4">{card.benefit}</p>
            <p className="text-[13px] text-muted mb-6 leading-relaxed">{card.forWho}</p>

            <ul className="flex-1 space-y-3 mb-8">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-[12.5px] text-ink-soft">
                  <span className="text-terrain shrink-0">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl border border-line bg-paper text-ink font-bold group-hover:bg-terrain group-hover:text-white group-hover:border-terrain transition-all">
              {card.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
