"use client";

import { motion } from "framer-motion";
import { Eye, Shield, BarChart3 } from "lucide-react";
import ContactForm from "./ContactForm";

const valueCards = [
  {
    icon: Eye,
    title: "Voir où l'équipe est passée",
    text: "Suivez les tournées et les visites en temps réel.",
  },
  {
    icon: Shield,
    title: "Ne plus perdre les informations terrain",
    text: "Centralisez les comptes rendus et les données clés.",
  },
  {
    icon: BarChart3,
    title: "Piloter avec une donnée claire",
    text: "Prenez de meilleures décisions, plus vite.",
  },
];

/**
 * VisionSection — "Vision & Contact"
 * Structure stricte (cahier Sprint 3) :
 *   1. Intro courte (label + titre + 1 paragraphe)
 *   2. Phrase forte mise en avant
 *   3. Trois bénéfices simples
 *   4. Formulaire de contact
 */
export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative z-20 bg-canvas overflow-hidden py-24 md:py-32 border-t border-line"
    >
      {/* 1. INTRO COURTE */}
      <div className="max-w-[1180px] mx-auto px-6 mb-20 md:mb-24">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex font-mono text-[12px] tracking-[0.18em] uppercase text-terrain font-semibold">
            Vision &amp; Contact
          </span>
          <h2
            className="text-ink font-bold tracking-[-0.025em]"
            style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              lineHeight: 1.04,
            }}
          >
            Une idée née du terrain, pas d&apos;un bureau.
          </h2>
          <p className="text-lead">
            DoorTrack est né d&apos;un constat simple : en prospection terrain,
            trop d&apos;informations utiles se perdent entre la rue, le
            commercial et le manager.
          </p>
        </div>
      </div>

      {/* 2. PHRASE FORTE MISE EN AVANT */}
      <div className="max-w-[1180px] mx-auto px-6 mb-24 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-paper border border-line shadow-shadow-3 px-8 md:px-16 py-14 md:py-20"
        >
          {/* Couche 1 — grille cadastrale fine (parcellaire) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(60,40,20,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,0.10) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
            aria-hidden
          />

          {/* Couche 2 — grille plus large pour profondeur */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(60,40,20,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,0.07) 1px, transparent 1px)",
              backgroundSize: "176px 176px",
            }}
            aria-hidden
          />

          {/* Couche 3 — trame topographique diagonale */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(118deg, rgba(31,42,46,0.55) 0 1px, transparent 1px 22px)",
            }}
            aria-hidden
          />

          {/* Couche 4 — second tracé topo plus rapproché (croisement) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(62deg, rgba(226,91,20,0.55) 0 1px, transparent 1px 38px)",
            }}
            aria-hidden
          />

          {/* Couche 5 — halo orange radial chaud */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 85% 60%, rgba(226,91,20,0.22) 0%, rgba(226,91,20,0.08) 30%, transparent 65%)",
            }}
            aria-hidden
          />

          {/* Couche 6 — halo secondaire à gauche, plus froid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 8% 30%, rgba(243,177,121,0.18) 0%, transparent 45%)",
            }}
            aria-hidden
          />

          {/* Couche 7 — pins radar (cercles concentriques) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g stroke="var(--color-terrain)" fill="none" strokeWidth="1.2">
              <circle cx="855" cy="295" r="6" opacity="0.8" />
              <circle cx="855" cy="295" r="18" opacity="0.45" />
              <circle cx="855" cy="295" r="34" opacity="0.22" />
            </g>
            <g stroke="var(--color-terrain-2)" fill="none" strokeWidth="1">
              <circle cx="135" cy="110" r="4" opacity="0.7" />
              <circle cx="135" cy="110" r="13" opacity="0.4" />
              <circle cx="135" cy="110" r="24" opacity="0.18" />
            </g>
            <g stroke="var(--color-terrain)" fill="var(--color-terrain)" opacity="0.55">
              <circle cx="500" cy="340" r="3" />
            </g>
            {/* trait "route" en biais */}
            <line
              x1="-20"
              y1="380"
              x2="1020"
              y2="60"
              stroke="rgba(226,91,20,0.18)"
              strokeWidth="2"
              strokeDasharray="4 10"
            />
          </svg>

          <p
            className="relative text-ink font-bold tracking-[-0.02em] leading-[1.05]"
            style={{ fontSize: "clamp(32px, 4.4vw, 60px)" }}
          >
            Le problème, ce n&apos;est pas le manque d&apos;effort.
            <br />
            <span className="text-terrain">C&apos;est le manque de visibilité.</span>
          </p>
        </motion.div>
      </div>

      {/* 3. TROIS BÉNÉFICES */}
      <div className="max-w-[1180px] mx-auto px-6 mb-24 md:mb-28">
        <div className="text-center mb-12 space-y-4">
          <h3
            className="text-ink font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1 }}
          >
            Transformer la prospection terrain en données exploitables.
          </h3>
          <p className="text-lead mx-auto">
            DoorTrack rend la prospection plus lisible, plus mesurable et plus
            actionnable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.11,
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-[24px] bg-white border border-line shadow-shadow-2 space-y-4 transition-[box-shadow,border-color] duration-200 hover:shadow-shadow-3 hover:border-line-2"
            >
              <div className="w-12 h-12 rounded-xl bg-terrain-soft text-terrain-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.04]">
                <card.icon size={22} strokeWidth={1.75} />
              </div>
              <h4 className="text-[18px] font-bold text-ink leading-snug">
                {card.title}
              </h4>
              <p className="text-[14.5px] text-muted leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. FORMULAIRE DE CONTACT */}
      <ContactForm />
    </section>
  );
}
