"use client";

/**
 * CalloutLine
 * -----------
 * Annotation cadastrale fine reliant une fiche fonctionnelle à la zone
 * correspondante de l'écran téléphone (cf. cahier §9).
 *
 * Rendue absolument à la gauche d'une CalloutCard. Le tracé est un L propre :
 * ancre côté téléphone → segment horizontal → léger virage → entrée dans la
 * card. Pas de courbes décoratives, pas de glow.
 */
export default function CalloutLine() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 24"
      preserveAspectRatio="none"
      className="absolute top-1/2 -translate-y-1/2 -left-[72px] w-[72px] h-6 pointer-events-none hidden lg:block"
    >
      {/* Halo doux autour de l'ancre côté téléphone */}
      <circle cx="4" cy="12" r="6" fill="rgba(226,91,20,0.14)" />
      {/* Ancre côté téléphone */}
      <circle cx="4" cy="12" r="3" fill="var(--color-terrain)" />
      {/* Ligne d'annotation */}
      <path
        d="M 8 12 H 56 Q 64 12 64 18 V 21"
        fill="none"
        stroke="var(--color-terrain)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Dot côté card */}
      <circle cx="64" cy="21" r="2" fill="var(--color-terrain)" />
    </svg>
  );
}
