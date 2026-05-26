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
  const requestRef = useRef<number | null>(null);
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

  useEffect(() => {
    const animate = () => {
      const map = mapRef.current?.getMap();
      if (map && !disableAnimation && map.isStyleLoaded()) {
        const scrollY = window.scrollY;
        const scrollThreshold = window.innerHeight * 0.8;
        const progress = Math.min(scrollY / scrollThreshold, 1);

        parallax.current.x += (mousePos.current.x - parallax.current.x) * 0.05;
        parallax.current.y += (mousePos.current.y - parallax.current.y) * 0.05;

        // Le parallax s'estompe au fur et à mesure que la carte se met à plat
        const currentParallaxX = parallax.current.x * (1 - progress);
        const currentParallaxY = parallax.current.y * (1 - progress);

        const targetPitch = 60 * (1 - progress) + (currentParallaxY * 3);
        const targetBearing = -20 * (1 - progress) + (currentParallaxX * 6);
        const targetZoom = 16 - (progress * 1.0); // Dézoom progressif vers 15 pour le fond d'écran

        map.jumpTo({
          bearing: targetBearing,
          pitch: targetPitch,
          zoom: targetZoom
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

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
  }, [disableAnimation]);

  return (
    <div className="w-full h-full bg-canvas">
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle="/styles/doortrack-map-style.json"
        interactive={false}
      />
      <div className="absolute bottom-2 right-2 text-[10px] text-muted bg-paper/50 px-2 py-0.5 rounded-full pointer-events-none">
        Carte © <a href="https://www.openstreetmap.org/copyright" target="_blank" className="hover:underline text-ink">OpenStreetMap</a> contributors via OpenFreeMap
      </div>
    </div>
  );
});

NancyMapLayer.displayName = "NancyMapLayer";

export default NancyMapLayer;
