"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import PhoneFrame from "@/components/PhoneFrame";

/**
 * PhoneRig
 * --------
 * Wrapper pour le téléphone Three.js (ici simulé par PhoneFrame pour la simplicité React)
 * Permet de piloter le téléphone pendant l'animation d'ouverture.
 */
interface PhoneRigProps {
  opacity?: number;
  scale?: number;
  y?: number;
  currentScreen?: "map" | "home" | "prospects";
}

const PhoneRig = forwardRef<HTMLDivElement, PhoneRigProps>((props, ref) => {
  const { opacity = 0, scale = 0.7, y = -200, currentScreen = "map" } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current!);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-10"
      style={{ 
        transform: `translateY(${y}px)`,
      }}
    >
      <div className="w-full max-w-[340px]">
        <PhoneFrame 
          currentScreen={currentScreen} 
          introMode={true} 
          introOpacity={opacity} 
          introScale={scale} 
        />
      </div>
    </div>
  );
});

PhoneRig.displayName = "PhoneRig";

export default PhoneRig;
