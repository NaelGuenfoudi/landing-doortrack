"use client";

import { useRef, useState } from "react";
import PhoneFrame from "@/components/PhoneFrame";
import SectionContent from "@/components/SectionContent";
import CalloutCard from "@/components/CalloutCard";
import HeroOpeningScene from "@/components/scene/hero-animation/HeroOpeningScene";
import ScrollIndicator from "@/components/ScrollIndicator";
import FloatingWidgets from "@/components/scene/hero-animation/FloatingWidgets";

export const sections = [
  {
    id: "map" as const,
    number: "01",
    eyebrow: "CARTE OPÉRATIONNELLE",
    title: "Visualisez vos secteurs, suivez vos prospects, pilotez votre terrain.",
    description: "Doortrack aide les équipes commerciales à visualiser leurs secteurs, suivre leurs prospects et organiser leurs relances sans perdre le fil du terrain.",
    callouts: [
      {
        eyebrow: "MÉTRIQUE TERRAIN",
        metric: "+25% de couverture",
        title: "Prioriser les bons secteurs",
        text: "Repérez en un coup d’œil les zones à travailler, les rues déjà couvertes et les opportunités qui méritent une action immédiate.",
        subNotes: ["Zonage cadastral précis", "Détection automatique de doublons"]
      },
      {
        eyebrow: "LOGISTIQUE",
        metric: "Optimisé",
        title: "Cartographie Dynamique",
        text: "Une carte qui s'adapte à votre progression réelle. Plus besoin de pointer manuellement chaque rue sur papier.",
        subNotes: ["Mise à jour en direct", "Filtres de secteurs personnalisés"]
      }
    ]
  },
  {
    id: "home" as const,
    number: "02",
    eyebrow: "PILOTAGE QUOTIDIEN",
    title: "Une journée plus claire pour chaque commercial.",
    description: "Objectifs, actions prioritaires, progression et performance : chacun sait où il en est et ce qu’il doit faire ensuite.",
    callouts: [
      {
        eyebrow: "EFFICACITÉ GLOBALE",
        metric: "15 min / débrief",
        title: "Motiver sans complexifier",
        text: "Les KPI essentiels restent visibles sans noyer le commercial dans des tableaux inutiles.",
        subNotes: ["Tableau de bord temps réel", "Objectifs hebdomadaires"]
      },
      {
        eyebrow: "PERFORMANCE",
        metric: "KPI Live",
        title: "Indicateurs de Succès",
        text: "Suivez votre ratio de transformation en temps réel. Sachez exactement quel effort produit quel résultat.",
        subNotes: ["Progression vs objectifs", "Statistiques de passage"]
      }
    ]
  },
  {
    id: "prospects" as const,
    number: "03",
    eyebrow: "SUIVI PROSPECT",
    title: "Ne laissez plus vos opportunités disparaître après le passage terrain.",
    description: "Les prospects sont qualifiés, priorisés et relancés au bon moment pour transformer l’activité terrain en conversions.",
    callouts: [
      {
        eyebrow: "RETENTION CLIENT",
        metric: "0 perte d'info",
        title: "Relancer avec le bon contexte",
        text: "Chaque interaction reste attachée au prospect pour agir vite, relancer proprement et éviter les pertes d’information.",
        subNotes: ["Historique complet des passages", "Rappels automatiques intelligents"]
      },
      {
        eyebrow: "QUALIFICATION",
        metric: "Data Riche",
        title: "Fiches Prospects Détailées",
        text: "Capturez les détails qui font la différence : besoins spécifiques, meilleur moment pour rappeler, humeur du prospect.",
        subNotes: ["Notes vocales & photos", "Score de chaleur prospect"]
      }
    ]
  },
  {
    id: "flash" as const,
    number: "04",
    eyebrow: "PROSPECTION FLASH",
    title: "Agissez plus vite que jamais sur le terrain.",
    description: "Le mode Flash vous permet de qualifier une rue entière en quelques secondes sans jamais perdre votre focus.",
    callouts: [
      {
        eyebrow: "VITESSE D'EXÉCUTION",
        metric: "3s / porte",
        title: "Qualification en un tap",
        text: "Le mode Flash vous permet de qualifier une rue entière en quelques secondes sans jamais perdre votre focus.",
        subNotes: ["Optimisé pour le terrain", "Zéro friction logicielle"]
      },
      {
        eyebrow: "CONNECTIVITÉ",
        metric: "Edge Sync",
        title: "Infrastructure Robuste",
        text: "Une application conçue pour les zones blanches. Synchronisation asynchrone pour ne jamais ralentir votre foulée.",
        subNotes: ["Mode hors-ligne complet", "Cryptage de bout en bout"]
      }
    ]
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeScreen, setActiveScreen] = useState<"map" | "home" | "prospects" | "flash">("map");

  return (
    <>
      <HeroOpeningScene 
        titleRef={titleRef} 
        phoneRef={phoneRef} 
        sectionRefs={sectionRefs}
        setActiveScreen={setActiveScreen}
        bgRef={bgRef}
      />
      
      <ScrollIndicator />
      
      <main className="relative z-10 bg-transparent">
        {/* LE STAGE (Conteneur de scroll luxueux) */}
        <div ref={containerRef} className="relative h-[600vh]" id="main-scroll-container">
          
          {/* LE THEATRE STICKY (Tout ce qui est fixe à l'écran) */}
          <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
            
            {/* 0. BACKGROUND ALTERNÉ (Canvas-2) */}
            <div 
              ref={bgRef}
              className="absolute inset-0 z-0 bg-canvas-2 opacity-0 transition-opacity duration-300 pointer-events-none"
            />

            {/* 1. TITRE HERO CENTRAL */}
            <div 
              ref={titleRef}
              className="absolute inset-0 z-40 flex items-center justify-center px-6"
            >
              <h1 className="text-h1 text-ink text-center max-w-[22ch]">
                Le <span style={{ background: "linear-gradient(180deg, transparent 65%, rgba(226,91,20,.25) 65%)", padding: "0 4px" }}>terrain</span> mérite un <span className="text-terrain">vrai</span> outil.
              </h1>
            </div>

            {/* 2. LE TÉLÉPHONE */}
            <div 
              ref={phoneRef}
              className="absolute top-20 bottom-0 left-0 right-0 z-20 flex items-center justify-center px-6 opacity-0 translate-y-[100vh]"
            >
              <div className="w-full max-w-[300px] pointer-events-auto relative">
                <FloatingWidgets currentScreen={activeScreen} />
                <PhoneFrame currentScreen={activeScreen} />
              </div>
            </div>

            {/* 3. LES SECTIONS (Chacune en absolute) */}
            {sections.map((section, index) => (
              <div 
                key={section.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="absolute inset-0 z-30 flex items-center justify-center px-6"
              >
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 items-center pointer-events-none">
                  {/* Texte Gauche */}
                  <div className="space-y-6 left-content opacity-0">
                    <SectionContent 
                      number={section.number}
                      eyebrow={section.eyebrow}
                      title={section.title}
                      description={section.description}
                      isFirst={index === 0}
                      manual={true}
                    />
                  </div>

                  {/* Espace central libre pour le téléphone */}
                  <div className="h-[600px] lg:h-20" />

                  {/* Callout Droite (Double Cartes - Droites & Séparées) */}
                  <div className="space-y-24 right-content opacity-0 relative flex flex-col items-center">
                    {section.callouts.map((callout, cIdx) => (
                      <div key={cIdx} className="relative">
                        {/* Ligne de connexion individuelle ultra-fine */}
                        <div 
                          className="absolute top-1/2 -left-20 w-20 h-[1px] bg-line-2 hidden lg:block origin-right pointer-line scale-x-0"
                        >
                          {/* Point de connexion style "réticule" */}
                          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border border-terrain/30 flex items-center justify-center bg-canvas/50 backdrop-blur-sm">
                            <div className="w-1 h-1 bg-terrain rounded-full shadow-[0_0_5px_rgba(226,91,20,0.5)]" />
                          </div>
                        </div>

                        <CalloutCard 
                          {...callout}
                          manual={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 04 - CTA Final (Scroll normal) */}
        <section className="relative z-30 py-32 px-6 bg-canvas overflow-hidden border-t border-line">
          <div className="absolute inset-0 opacity-[0.7] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(60,40,20,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,.04) 1px, transparent 1px)', backgroundSize: '80px 80px', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #000 80%)' }} />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="font-mono text-[11px] tracking-[0.16em] text-terrain font-semibold uppercase">§ 05 — PASSER À L’ÉTAPE SUIVANTE</span>
            <h2 className="text-[clamp(36px,6vw,88px)] font-light tracking-[-0.03em] leading-[1.05] text-ink max-w-[22ch] mx-auto text-balance">
              Ne marchez plus à l&apos;aveugle.<br/><b className="font-bold text-terrain">Prospectez</b> avec précision.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button className="inline-flex items-center gap-2 h-[54px] px-[22px] rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-terrain text-white shadow-shadow-2 transition-all hover:bg-terrain-2 hover:shadow-shadow-3 w-full sm:w-auto justify-center">
                Réserver une démo <span className="font-mono font-medium">→</span>
              </button>
              <button className="inline-flex items-center gap-2 h-[54px] px-[22px] rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-teal text-paper-2 shadow-shadow-1 transition-all hover:bg-teal-2 w-full sm:w-auto justify-center">
                Prendre contact
              </button>
            </div>
            <p className="font-mono text-[11px] text-muted tracking-[0.1em] uppercase pt-4">Démo en 15 min · sans engagement</p>
          </div>
        </section>
      </main>
    </>
  );
}
