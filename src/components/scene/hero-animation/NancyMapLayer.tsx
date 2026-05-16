"use client";

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Map, { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

/**
 * NancyMapLayer
 * -------------
 * Version Stable - Rétablie après rollback.
 */
interface NancyMapLayerProps {
  disableAnimation?: boolean;
}

const NancyMapLayer = forwardRef<MapRef, NancyMapLayerProps>(({ disableAnimation = false }, ref) => {
  const mapRef = useRef<MapRef>(null);
  const requestRef = useRef<number>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const parallax = useRef({ x: 0, y: 0 });
  
  useImperativeHandle(ref, () => mapRef.current!);

  const initialViewState = {
    longitude: 6.1752,
    latitude: 48.6896,
    zoom: 16,
    pitch: 60,
    bearing: -20
  };

  const animate = () => {
    const map = mapRef.current?.getMap();
    if (map && !disableAnimation && map.isStyleLoaded()) {
      const scrollY = window.scrollY;
      
      // On n'anime QUE si on est exactement en haut (0)
      // Dès que le scroll commence, GSAP prend le contrôle exclusif
      if (scrollY <= 5) {
        parallax.current.x += (mousePos.current.x - parallax.current.x) * 0.05;
        parallax.current.y += (mousePos.current.y - parallax.current.y) * 0.05;

        map.jumpTo({
          bearing: -20 + (parallax.current.x * 6),
          pitch: 60 + (parallax.current.y * 3)
        });
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Cache buster pour le dev
  const styleUrl = `/styles/doortrack-map-style.json?v=${Date.now()}`;

  return (
    <div className="w-full h-full bg-[#FAFAF7]">
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle={styleUrl}
        interactive={false}
        antialias={true}
        preserveDrawingBuffer={true}
      />
      <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 bg-white/50 px-2 py-0.5 rounded-full pointer-events-none">
        Carte © <a href="https://www.openstreetmap.org/copyright" target="_blank" className="hover:underline">OpenStreetMap</a> contributors via OpenFreeMap
      </div>
    </div>
  );
});

NancyMapLayer.displayName = "NancyMapLayer";

export default NancyMapLayer;
