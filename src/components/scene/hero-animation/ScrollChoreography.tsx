"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapRef } from "react-map-gl/maplibre";
import { RefObject, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollChoreographyProps {
  mapRef: RefObject<MapRef | null>;
  titleRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<(HTMLDivElement | null)[]>;
  setActiveScreen: (screen: "map" | "home" | "prospects") => void;
}

export default function ScrollChoreography({ 
  mapRef, 
  titleRef, 
  phoneRef, 
  sectionRefs,
  setActiveScreen
}: ScrollChoreographyProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMap = setInterval(() => {
      const mapInstance = mapRef.current?.getMap();
      if (mapInstance && mapInstance.isStyleLoaded()) {
        setIsReady(true);
        clearInterval(checkMap);
      }
    }, 200);
    return () => clearInterval(checkMap);
  }, [mapRef]);

  useGSAP(() => {
    if (!isReady || !mapRef.current || !titleRef.current || !phoneRef.current || !sectionRefs.current) return;

    const map = mapRef.current.getMap();
    const title = titleRef.current;
    const phone = phoneRef.current;
    const sections = sectionRefs.current;

    // --- SETUP INITIAL ---
    gsap.set(title, { opacity: 1, scale: 1, y: 0 });
    gsap.set(phone, { y: "100vh", opacity: 0, scale: 0.8 });
    sections.forEach(s => { if(s) gsap.set(s, { opacity: 0, y: 20 }); });

    const mapState = { pitch: 60, bearing: -20, zoom: 16 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    // --- SPRINT 1 : INTRO (0% -> 25%) ---
    
    // 1. Map s'élève (0 -> 15%)
    tl.to(mapState, {
      pitch: 0, bearing: 0, zoom: 15.5,
      duration: 0.15, ease: "power1.inOut",
      onUpdate: () => {
        map.jumpTo({ pitch: mapState.pitch, bearing: mapState.bearing, zoom: mapState.zoom });
      }
    }, 0);

    // 2. Titre s'efface (5 -> 15%)
    tl.to(title, {
      opacity: 0, scale: 0.8, y: -50,
      duration: 0.1, ease: "power2.in"
    }, 0.05);

    // 3. Téléphone monte et se fixe (15 -> 25%)
    tl.to(phone, {
      y: "0vh", opacity: 1, scale: 1,
      duration: 0.1, ease: "power2.out"
    }, 0.15);

    // --- SPRINT 2 : SECTION 1 - CARTE (25% -> 45%) ---
    if (sections[0]) {
      tl.call(() => setActiveScreen("map"), [], 0.25);
      tl.to(sections[0], { opacity: 1, y: 0, duration: 0.1 }, 0.25); // Entrée
      tl.to(sections[0], { opacity: 0, y: -20, duration: 0.1 }, 0.45); // Sortie
    }

    // --- SPRINT 3 : SECTION 2 - ACCUEIL (50% -> 70%) ---
    if (sections[1]) {
      tl.call(() => setActiveScreen("home"), [], 0.5);
      tl.to(sections[1], { opacity: 1, y: 0, duration: 0.1 }, 0.5); // Entrée
      tl.to(sections[1], { opacity: 0, y: -20, duration: 0.1 }, 0.7); // Sortie
    }

    // --- SPRINT 4 : SECTION 3 - PROSPECTS (75% -> 95%) ---
    if (sections[2]) {
      tl.call(() => setActiveScreen("prospects"), [], 0.75);
      tl.to(sections[2], { opacity: 1, y: 0, duration: 0.1 }, 0.75); // Entrée
    }

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [isReady], revertOnUpdate: true });

  return null;
}
