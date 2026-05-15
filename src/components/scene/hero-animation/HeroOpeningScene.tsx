"use client";

import React, { useRef, useState } from "react";
import NancyMapLayer from "./NancyMapLayer";
import ScrollChoreography from "./ScrollChoreography";
import PhoneRig from "./PhoneRig";
import { MapRef } from "react-map-gl/maplibre";
import { useMotionValueEvent, useScroll } from "framer-motion";

/**
 * HeroOpeningScene
 * ----------------
 * ACTE 0 - Animation d'ouverture cinématique.
 * Gère le fond cartographique MapLibre et le téléphone.
 */
export default function HeroOpeningScene() {
  const mapRef = useRef<MapRef>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolling) setIsScrolling(true);
    if (latest <= 50 && isScrolling) setIsScrolling(false);
  });

  return (
    <>
      {/* Layer 1 : Fond cartographique MapLibre (z-0) */}
      <div className="fixed inset-0 z-0">
        <NancyMapLayer ref={mapRef} disableAnimation={isScrolling} />
      </div>

      {/* Layer 2 : Téléphone (z-10) */}
      <PhoneRig ref={phoneRef} />

      {/* Layer 3 : Chorégraphie GSAP (Logique) */}
      <ScrollChoreography mapRef={mapRef} phoneRef={phoneRef} />
    </>
  );
}
