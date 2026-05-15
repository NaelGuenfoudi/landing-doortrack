"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import GlobalMapBackground from "@/components/GlobalMapBackground";
import PhoneFrame from "@/components/PhoneFrame";
import SectionContent from "@/components/SectionContent";
import CalloutCard from "@/components/CalloutCard";
import HeroOpeningScene from "@/components/scene/hero-animation/HeroOpeningScene";

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
  const [activeScreen, setActiveScreen] = useState<"map" | "home" | "prospects">("map");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      if (activeScreen !== "map") setActiveScreen("map");
    } else if (latest < 0.66) {
      if (activeScreen !== "home") setActiveScreen("home");
    } else {
      if (activeScreen !== "prospects") setActiveScreen("prospects");
    }
  });

  return (
    <>
      <HeroOpeningScene />
      <main className="relative z-10">
        <div className="h-[200vh]" id="hero-animation-spacer" />
        <div className="relative">
      <GlobalMapBackground />
      
      {/* Conteneur global du scroll sticky */}
      <div ref={containerRef} className="relative h-[300vh]">
        
        {/* Le Stage Sticky pour le téléphone avec un offset top pour laisser respirer le header */}
        <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex items-center justify-center pointer-events-none z-20">
          <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 items-center">
            <div className="hidden lg:block h-20" />
            
            <div className="pointer-events-auto">
              <PhoneFrame currentScreen={activeScreen} />
            </div>
            
            <div className="hidden lg:block h-20" />
          </div>
        </div>

        {/* Les sections de texte qui défilent */}
        <div className="relative z-10 -mt-[calc(100vh-80px)]">
          {sections.map((section, index) => (
            <section 
              key={section.id}
              className="relative h-screen flex flex-col justify-center px-6"
            >
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 items-center">
                {/* Contenu Gauche - Animé */}
                <SectionContent 
                  number={section.number}
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.description}
                  isFirst={index === 0}
                />

                <div className="h-[600px] lg:h-20" />

                {/* Contenu Droit - Callout Animé */}
                <div className="space-y-12">
                  <CalloutCard 
                    title={section.callout.title}
                    text={section.callout.text}
                    delay={0.2}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Section 04 - CTA Final */}
      <section className="relative z-30 py-32 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/assets/map-pattern.svg")', backgroundSize: '400px 400px' }} />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="text-blue-400 font-bold tracking-wider text-sm">04 — PASSER À L’ÉTAPE SUIVANTE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Rejoignez les premiers utilisateurs de Doortrack.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Vous pilotez une équipe terrain ou vous prospectez au quotidien ? Échangeons sur vos besoins.
          </p>
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
    </div>
    </main>
    </>
  );
}
