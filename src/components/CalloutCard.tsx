"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import CalloutLine from "./CalloutLine";

export interface CalloutCardProps {
  icon: ComponentType<LucideProps>;
  title: string;
  text: string;
  tag?: string;
  delay?: number;
  manual?: boolean;
  /** Identifiant utilisé pour câbler les lignes de liaison SVG (§9). */
  anchorId?: string;
}

/**
 * CalloutCard
 * -----------
 * Fiche fonctionnelle terrain (cf. cahier §14) : icône fonctionnelle, titre
 * court, texte bénéfice, tag JetBrains Mono. Fond paper warm, ombre légère,
 * pas de glassmorphism, pas de glow.
 */
export default function CalloutCard({
  icon: Icon,
  title,
  text,
  tag,
  delay = 0,
  manual = false,
  anchorId,
}: CalloutCardProps) {
  const initial = manual ? undefined : { opacity: 0, x: 20, filter: "blur(8px)" };
  const whileInView = manual ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" };
  const viewport = manual ? undefined : { once: false, amount: 0.5 };
  const transition = manual
    ? undefined
    : {
        duration: 0.8,
        delay,
        ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
      };

  return (
    <motion.article
      data-callout-anchor={anchorId}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={{ y: -4 }}
      className="group relative w-full max-w-[340px] rounded-[20px] border border-line bg-paper/92 shadow-shadow-2 backdrop-blur-[10px] px-6 py-5 transition-[box-shadow,border-color] duration-200 hover:shadow-shadow-3 hover:border-line-2"
    >
      <CalloutLine />
      <div className="flex items-center gap-3 mb-3">
        <span className="w-7 h-7 rounded-lg bg-terrain-soft text-terrain-2 grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-[1.04]">
          <Icon size={16} strokeWidth={1.75} aria-hidden />
        </span>
        <h3 className="text-[16px] leading-[1.25] font-bold tracking-[-0.01em] text-ink">
          {title}
        </h3>
      </div>

      <p className="text-[13.5px] leading-[1.55] text-muted">{text}</p>

      {tag && (
        <span className="inline-flex mt-3 font-mono text-[10px] tracking-[0.12em] uppercase text-terrain-2 bg-terrain-soft px-[9px] py-[5px] rounded-md font-semibold">
          {tag}
        </span>
      )}
    </motion.article>
  );
}
