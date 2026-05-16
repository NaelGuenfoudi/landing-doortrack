"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import SectionContent from "@/components/SectionContent";
import CalloutCard from "@/components/CalloutCard";
import HeroOpeningScene from "@/components/scene/hero-animation/HeroOpeningScene";
import ScrollIndicator from "@/components/ScrollIndicator";

export const sections = [
  {
    id: "map" as const,
    number: "01",
    eyebrow: "CARTE OPÉRATIONNELLE",
    title: "Transformez votre terrain en carte d’action commerciale.",
    description: "Doortrack aide vos équipes à visualiser les bons secteurs, prioriser les opportunités et remonter une donnée terrain claire au manager.",
    callout: {
      title: "Prioriser les bons secteurs",
      text: "Repérez en un coup d’œil les zones à travailler, les rues déjà couvertes et les opportunités qui méritent une action immédiate."
    }
  },
  {
    id: "home" as const,
    number: "02",
    eyebrow: "PILOTAGE QUOTIDIEN",
    title: "Une journée plus claire pour chaque commercial.",
    description: "Objectifs, actions prioritaires, progression et performance : chacun sait où il en est et ce qu’il doit faire ensuite.",
    callout: {
      title: "Motiver sans complexifier",
      text: "Les KPI essentiels restent visibles sans noyer le commercial dans des tableaux inutiles."
    }
  },
  {
    id: "prospects" as const,
    number: "03",
    eyebrow: "SUIVI PROSPECT",
    title: "Ne laissez plus vos opportunités disparaître après le passage terrain.",
    description: "Les prospects sont qualifiés, priorisés et relancés au bon moment pour transformer l’activité terrain en conversions.",
    callout: {
      title: "Relancer avec le bon contexte",
      text: "Chaque interaction reste attachée au prospect pour agir vite, relancer proprement et éviter les pertes d’information."
    }
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeScreen, setActiveScreen] = useState<"map" | "home" | "prospects">("map");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <HeroOpeningScene 
        titleRef={titleRef} 
        phoneRef={phoneRef} 
        sectionRefs={sectionRefs}
        setActiveScreen={setActiveScreen}
      />
      
      <ScrollIndicator />
      
      <main className="relative z-10 bg-transparent">
        {/* LE STAGE (Conteneur de scroll luxueux) */}
        <div ref={containerRef} className="relative h-[600vh]" id="main-scroll-container">
          
          {/* LE THEATRE STICKY (Tout ce qui est fixe à l'écran) */}
          <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
            
            {/* 1. TITRE HERO CENTRAL */}
            <div 
              ref={titleRef}
              className="absolute inset-0 z-40 flex items-center justify-center px-6"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 text-center leading-[1.1] max-w-4xl drop-shadow-md">
                {sections[0].title}
              </h1>
            </div>

            {/* 2. LE TÉLÉPHONE */}
            <div 
              ref={phoneRef}
              className="absolute top-20 bottom-0 left-0 right-0 z-20 flex items-center justify-center px-6 opacity-0 translate-y-[100vh]"
            >
              <div className="w-full max-w-[300px] pointer-events-auto">
                <PhoneFrame currentScreen={activeScreen} />
              </div>
            </div>

            {/* 3. LES SECTIONS (Chacune en absolute) */}
            {sections.map((section, index) => (
              <div 
                key={section.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="absolute inset-0 z-30 flex items-center justify-center px-6 opacity-0"
              >
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 items-center pointer-events-none">
                  {/* Texte Gauche */}
                  <div className="space-y-6">
                    <SectionContent 
                      number={section.number}
                      eyebrow={section.eyebrow}
                      title={section.title}
                      description={section.description}
                      isFirst={index === 0}
                    />
                  </div>

                  {/* Espace central libre pour le téléphone */}
                  <div className="h-[600px] lg:h-20" />

                  {/* Callout Droite */}
                  <div className="space-y-12">
                    <CalloutCard 
                      title={section.callout.title}
                      text={section.callout.text}
                      delay={0.2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 04 - CTA Final (Scroll normal) */}
        <section className="relative z-30 py-32 px-6 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/assets/map-pattern.svg")', backgroundSize: '400px 400px' }} />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <span className="text-blue-400 font-bold tracking-wider text-sm">04 — PASSER À L’ÉTAPE SUIVANTE</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Rejoignez les premiers utilisateurs de Doortrack.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/40 active:scale-95 w-full sm:w-auto text-lg">
                Rejoindre la bêta
              </button>
              <button className="px-10 py-5 bg-transparent text-white font-bold rounded-full border border-slate-700 hover:bg-slate-800 transition-all active:scale-95 w-full sm:w-auto text-lg">
                Prendre contact
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
