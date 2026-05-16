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
    sections.forEach(s => { 
      if(s) {
        gsap.set(s, { opacity: 1 }); // Le container est visible, on anime les enfants
        const q = gsap.utils.selector(s);
        gsap.set(q(".left-content"), { opacity: 0, y: 20 });
        gsap.set(q(".right-content"), { opacity: 0, y: 20 });
        gsap.set(q(".pointer-line"), { scaleX: 0 });
      }
    });

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

    // --- SPRINT 1 : INTRO (0% -> 20%) ---
    
    // 1. Map s'élève (0 -> 12%)
    tl.to(mapState, {
      pitch: 0, bearing: 0, zoom: 15.5,
      duration: 0.12, ease: "power1.inOut",
      onUpdate: () => {
        map.jumpTo({ pitch: mapState.pitch, bearing: mapState.bearing, zoom: mapState.zoom });
      }
    }, 0);

    // 2. Titre s'efface (4 -> 12%)
    tl.to(title, {
      opacity: 0, scale: 0.8, y: -50,
      duration: 0.08, ease: "power2.in"
    }, 0.04);

    // 3. Téléphone monte et se fixe (12 -> 20%)
    tl.to(phone, {
      y: "0vh", opacity: 1, scale: 1,
      duration: 0.08, ease: "power2.out"
    }, 0.12);

    // --- SPRINT 2 : SÉQUENÇAGE NARRATIF (20% -> 100%) ---

    // SECTION 1 - CARTE
    const q1 = gsap.utils.selector(sections[0]);
    tl.call(() => setActiveScreen("map"), [], 0.2); // Phone Solo Map
    tl.to(q1(".left-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.25); // Annonce
    tl.to(q1(".right-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.30); // Preuve
    tl.to(q1(".pointer-line"), { scaleX: 1, duration: 0.05 }, 0.32); // Flèche
    tl.to([q1(".left-content"), q1(".right-content")], { opacity: 0, y: -20, duration: 0.05 }, 0.42); // Nettoyage

    // SECTION 2 - ACCUEIL
    const q2 = gsap.utils.selector(sections[1]);
    tl.call(() => setActiveScreen("home"), [], 0.47); // Phone Solo Home
    tl.to(q2(".left-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.52); // Annonce
    tl.to(q2(".right-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.57); // Preuve
    tl.to(q2(".pointer-line"), { scaleX: 1, duration: 0.05 }, 0.59); // Flèche
    tl.to([q2(".left-content"), q2(".right-content")], { opacity: 0, y: -20, duration: 0.05 }, 0.69); // Nettoyage

    // SECTION 3 - PROSPECTS
    const q3 = gsap.utils.selector(sections[2]);
    tl.call(() => setActiveScreen("prospects"), [], 0.74); // Phone Solo Prospects
    tl.to(q3(".left-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.79); // Annonce
    tl.to(q3(".right-content"), { opacity: 1, y: 0, duration: 0.05 }, 0.84); // Preuve
    tl.to(q3(".pointer-line"), { scaleX: 1, duration: 0.05 }, 0.86); // Flèche
    // On garde l'écran final affiché jusqu'au bout (95%)
    tl.to([q3(".left-content"), q3(".right-content")], { opacity: 0, duration: 0.05 }, 0.95);

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [isReady], revertOnUpdate: true });

  return null;
}
