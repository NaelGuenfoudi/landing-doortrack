"use client";

interface PhoneOverlayProps {
  currentScreen: "map" | "home" | "prospects" | "flash";
}

/**
 * PhoneOverlay
 * ------------
 * Ancres ponctuelles discrètes utilisées comme cibles pour les lignes de
 * liaison cadastrales (cf. cahier §9). Aucun glow, aucun halo, aucun pulse :
 * la DA proscrit ces effets (§3.3).
 */
export default function PhoneOverlay({ currentScreen }: PhoneOverlayProps) {
  void currentScreen;
  return <div className="absolute inset-0 z-30 pointer-events-none" />;
}
