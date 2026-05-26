"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * OrbitalMap (Cobe)
 * -----------------
 * Globe WebGL "dots" stylé, derrière le téléphone du hero bêta.
 * Palette : orange Doortrack sur sphère paper. Rotation lente continue.
 *
 * Couleurs Cobe = float RGB (0-1).
 *   --color-terrain   #E25B14 → [0.886, 0.357, 0.078]
 *   --color-ember     #F3B179 → [0.953, 0.694, 0.475]
 *   --color-paper     #FAF7F0 → [0.980, 0.969, 0.941]
 */
export default function OrbitalMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const SIZE = 600;
    const PHI_INCREMENT = 0.0017; // ~36s par tour, conforme cahier §4.2 (24-40s)
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let phi = 0;
    let rafId = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: SIZE * 2,
      height: SIZE * 2,
      phi: 0,
      theta: 0.28,
      dark: 0,
      diffuse: 1.15,
      mapSamples: 16000,
      mapBrightness: 5.2,
      baseColor: [0.98, 0.969, 0.941],
      markerColor: [0.886, 0.357, 0.078],
      glowColor: [0.953, 0.694, 0.475],
      markers: [],
    });

    if (prefersReducedMotion) {
      // Cahier §4.9 — pas de rotation continue si l'utilisateur le demande.
      globe.update({ phi: 0 });
    } else {
      const tick = () => {
        phi += PHI_INCREMENT;
        globe.update({ phi });
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          // Centre horizontal du globe à 58% du hero : son centre est juste
          // à droite du téléphone (centré à ~50%). Avec une largeur de 62%,
          // le bord gauche tombe à ~27% (donc à gauche du téléphone) et le
          // bord droit à ~89% (passe derrière les cartes bénéfices).
          left: "58%",
          transform: "translate(-50%, -50%)",
          width: "min(720px, 62%)",
          aspectRatio: "1 / 1",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
