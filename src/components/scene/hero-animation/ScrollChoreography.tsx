"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapRef } from "react-map-gl/maplibre";
import { RefObject, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollChoreographyProps {
  mapRef: RefObject<MapRef | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
}

export default function ScrollChoreography({ mapRef, phoneRef }: ScrollChoreographyProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMap = setInterval(() => {
      const mapInstance = mapRef.current?.getMap();
      if (mapInstance && mapInstance.isStyleLoaded()) {
        console.log("GSAP: Map is fully ready");
        setIsReady(true);
        clearInterval(checkMap);
      }
    }, 200);
    return () => clearInterval(checkMap);
  }, [mapRef]);

  useGSAP(() => {
    if (!isReady || !mapRef.current || !phoneRef.current) return;

    const map = mapRef.current.getMap();
    const phone = phoneRef.current;
    
    // On s'assure que le canvas de la map existe
    const mapCanvas = map.getCanvas();
    if (!mapCanvas) return;

    const state = {
      pitch: 60,
      bearing: -20,
      zoom: 16,
      phoneY: 400,
      phoneScale: 0.7,
      phoneOpacity: 0,
      mapOpacity: 1
    };

    // Timeline principale
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-animation-spacer",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        markers: true, // RÉACTIVÉ POUR DEBUG
        invalidateOnRefresh: true
      }
    });

    // PHASE 2 : 0% - 40% (Élévation)
    tl.to(state, {
      pitch: 0,
      bearing: 0,
      zoom: 15.5,
      duration: 0.4,
      ease: "none",
      onUpdate: () => {
        map.jumpTo({
          pitch: state.pitch,
          bearing: state.bearing,
          zoom: state.zoom
        });
      }
    }, 0);

    // PHASE 3 : 40% - 75% (Apparition téléphone)
    tl.to(state, {
      phoneY: 0,
      phoneScale: 0.9,
      phoneOpacity: 0.85,
      mapOpacity: 0.85,
      duration: 0.35,
      ease: "power1.inOut",
      onUpdate: () => {
        phone.style.transform = `translateY(${state.phoneY}px)`;
        phone.style.opacity = state.phoneOpacity.toString();
        const inner = phone.querySelector('div');
        if (inner) inner.style.transform = `scale(${state.phoneScale})`;
        mapCanvas.style.opacity = state.mapOpacity.toString();
      }
    }, 0.4);

    // PHASE 4 : 75% - 100% (Stabilisation finale)
    tl.to(state, {
      phoneScale: 1.0,
      phoneOpacity: 1.0,
      duration: 0.25,
      ease: "power2.out",
      onUpdate: () => {
        phone.style.opacity = state.phoneOpacity.toString();
        const inner = phone.querySelector('div');
        if (inner) inner.style.transform = `scale(${state.phoneScale})`;
      }
    }, 0.75);

    // Force un rafraîchissement global
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [isReady], revertOnUpdate: true });

  return null;
}
