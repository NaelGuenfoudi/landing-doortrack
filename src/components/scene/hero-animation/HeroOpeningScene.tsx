"use client";

import React, { useRef, useState, RefObject } from "react";
import NancyMapLayer from "./NancyMapLayer";
import ScrollChoreography from "./ScrollChoreography";
import { MapRef } from "react-map-gl/maplibre";
import { useMotionValueEvent, useScroll } from "framer-motion";

/**
 * HeroOpeningScene
 * ----------------
 * Orchestrateur de la scène de fond.
 * Reçoit les refs des éléments UI pour les synchroniser via GSAP.
 */
interface HeroOpeningSceneProps {
  titleRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<(HTMLDivElement | null)[]>;
  setActiveScreen: (screen: "map" | "home" | "prospects" | "flash") => void;
}

export default function HeroOpeningScene({ titleRef, phoneRef, sectionRefs, setActiveScreen }: HeroOpeningSceneProps) {
  const mapRef = useRef<MapRef>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolling) setIsScrolling(true);
    if (latest <= 50 && isScrolling) setIsScrolling(false);
  });

  return (
    <>
      <div className="fixed inset-0 z-0">
        <NancyMapLayer ref={mapRef} disableAnimation={isScrolling} />
      </div>

      <ScrollChoreography 
        mapRef={mapRef} 
        titleRef={titleRef}
        phoneRef={phoneRef} 
        sectionRefs={sectionRefs}
        setActiveScreen={setActiveScreen}
      />
    </>
  );
}
