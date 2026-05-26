"use client";

import EngagementSelector from "./EngagementSelector";
import BetaCTA from "./BetaCTA";
import type { ContactIntentId } from "./ContactForm";

interface BetaSectionProps {
  onSelectIntent?: (intent: ContactIntentId) => void;
}

export default function BetaSection({ onSelectIntent }: BetaSectionProps) {
  return (
    <section
      id="beta"
      className="relative z-20 bg-canvas/92 backdrop-blur-[1px] overflow-hidden py-16 border-t border-line"
    >
      {/* SÉLECTEUR DES NIVEAUX DE PARTICIPATION */}
      <EngagementSelector onSelectIntent={onSelectIntent} />

      {/* ASSISTANCE AU CHOIX ET CTA D'ÉCHANGE */}
      <BetaCTA onSelectIntent={onSelectIntent} />
    </section>
  );
}
