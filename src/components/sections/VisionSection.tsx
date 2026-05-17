"use client";

import { motion } from "framer-motion";
import SectionContent from "@/components/SectionContent";
import ContactForm from "./ContactForm";
import { Eye, Shield, BarChart3 } from "lucide-react";

const valueCards = [
  {
    icon: Eye,
    title: "Voir où l’équipe est passée",
    text: "Suivre les rues, zones, passages et opportunités en temps réel."
  },
  {
    icon: Shield,
    title: "Ne plus perdre les informations terrain",
    text: "Centraliser les refus, absences, devis, relances et prospects à potentiel."
  },
  {
    icon: BarChart3,
    title: "Piloter avec une donnée claire",
    text: "Transformer l’activité terrain en indicateurs utiles pour le manager."
  }
];

export default function VisionSection() {
  return (
    <section id="vision" className="relative z-20 bg-canvas overflow-hidden py-24 md:py-32 border-t border-line">
      
      {/* 1. Hero Vision */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <SectionContent
            number="06"
            eyebrow="VISION & CONTACT"
            title="Une idée née du terrain, pas d’un bureau."
            description="Doortrack est né d’un constat simple : en prospection terrain, trop d’informations utiles se perdent entre la rue, le commercial et le manager."
            manual={true}
          />
        </div>
      </div>

      {/* 2. Texte principal Vision */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-lead">
            <p>
              Doortrack est né d’un constat simple : sur le terrain, une équipe commerciale produit énormément d’informations, mais une grande partie de cette information se perd.
            </p>
            <p>
              Une rue visitée, une maison intéressante, un refus à recontacter plus tard, un devis envoyé, un prospect absent, un secteur à fort potentiel… Sur le moment, tout paraît clair. Mais après plusieurs heures de prospection, plusieurs jours d’activité ou plusieurs commerciaux sur la même zone, le suivi devient vite flou.
            </p>
            <p>
              J’ai moi-même rencontré ce problème en développant une activité de nettoyage extérieur. En prospection terrain, il ne suffit pas de “passer dans une rue”. Il faut savoir où l’on est passé, ce qui a été dit, quelles maisons ont du potentiel, qui doit être relancé, et quelles zones méritent réellement d’être retravaillées.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-paper/50 p-10 rounded-[32px] border border-line">
            <p className="text-2xl md:text-3xl font-bold text-ink leading-tight">
              Le problème, ce n’est pas le manque d’effort.<br />
              <span className="text-terrain">C’est le manque de visibilité.</span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bloc “Transformer la prospection terrain” */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-h2 text-ink">Transformer la prospection terrain en données exploitables.</h3>
          <p className="text-lead mx-auto max-w-3xl">
            Doortrack a pour objectif de rendre la prospection plus lisible, plus mesurable et plus actionnable. L’idée n’est pas de remplacer le commercial par un outil, mais de simplifier son quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueCards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[24px] bg-white border border-line shadow-shadow-2 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-terrain-soft text-terrain flex items-center justify-center">
                <card.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-ink">{card.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Bloc “Construire avec ceux qui prospectent vraiment” */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-h3 text-ink">Construire avec ceux qui prospectent vraiment.</h3>
          <p className="text-lead">
            Doortrack est encore en construction, et c’est volontaire. Avant de figer le produit, nous voulons échanger avec des managers, des responsables commerciaux et des équipes qui connaissent réellement les contraintes de la prospection terrain.
          </p>
          <p className="text-sm text-muted italic">
            Votre retour peut avoir un impact direct sur l’évolution du produit.
          </p>
        </div>
      </div>

      {/* 5. Formulaire de contact */}
      <ContactForm />

      {/* 6. Bloc final Vision */}
      <div className="max-w-4xl mx-auto px-6 text-center py-20 border-t border-line/50 mt-20">
        <p className="text-lead mb-10">
          Doortrack avance avec une conviction claire : les meilleures solutions terrain se construisent avec ceux qui sont réellement confrontés au terrain.
        </p>
        <button className="h-[54px] px-10 rounded-full bg-terrain text-white font-bold hover:bg-terrain-2 transition-all shadow-shadow-2">
          Rejoindre la bêta →
        </button>
      </div>

    </section>
  );
}
