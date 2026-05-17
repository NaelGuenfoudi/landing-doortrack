"use client";

import { useRef, useState } from "react";
import {
  LayoutGrid,
  MapPin,
  BarChart3,
  Target,
  Activity,
  TrendingUp,
  FileText,
  Bell,
  Users,
  Zap,
  RefreshCw,
  Workflow,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

import PhoneFrame from "@/components/PhoneFrame";
import SectionContent from "@/components/SectionContent";
import CalloutCard from "@/components/CalloutCard";
import HeroOpeningScene from "@/components/scene/hero-animation/HeroOpeningScene";
import ScrollIndicator from "@/components/ScrollIndicator";
import DemoForm from "@/components/DemoForm";

type ScreenId = "map" | "home" | "prospects" | "flash";

interface Callout {
  icon: ComponentType<LucideProps>;
  title: string;
  text: string;
  tag: string;
  anchorId: string;
}

interface Section {
  id: ScreenId;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  callouts: Callout[];
}

export const sections: Section[] = [
  {
    id: "map",
    number: "01",
    eyebrow: "CARTOGRAPHIE INTELLIGENTE",
    title: "Visualisez vos secteurs, suivez vos opportunités, pilotez votre terrain.",
    description:
      "DoorTrack transforme votre zone de prospection en plan d’action clair : rues couvertes, secteurs à traiter, points chauds et priorités terrain.",
    callouts: [
      {
        icon: LayoutGrid,
        title: "Repérez les rues à potentiel",
        text: "Identifiez les zones où concentrer vos efforts au lieu de prospecter au hasard.",
        tag: "PRIORITÉ TERRAIN",
        anchorId: "map-zones",
      },
      {
        icon: MapPin,
        title: "Suivez la couverture réelle",
        text: "Visualisez les rues déjà visitées, celles oubliées et celles qui restent à traiter.",
        tag: "COUVERTURE",
        anchorId: "map-coverage",
      },
      {
        icon: BarChart3,
        title: "Décidez avec une donnée claire",
        text: "Appuyez vos actions sur un score lisible plutôt que sur une impression terrain dispersée.",
        tag: "SCORE",
        anchorId: "map-score",
      },
    ],
  },
  {
    id: "home",
    number: "02",
    eyebrow: "PILOTAGE QUOTIDIEN",
    title: "Une journée plus claire pour chaque commercial.",
    description:
      "Chaque commercial sait quoi faire, où aller et quelle action prioriser. Le manager suit l’avancement sans demander un reporting permanent.",
    callouts: [
      {
        icon: Target,
        title: "Objectifs visibles dès le départ",
        text: "Donnez un cap clair à la journée : appels, visites, relances et rendez-vous.",
        tag: "OBJECTIFS",
        anchorId: "home-objectives",
      },
      {
        icon: Activity,
        title: "Activité suivie en temps réel",
        text: "Les actions terrain remontent automatiquement pour éviter les tableaux manuels en fin de journée.",
        tag: "LIVE TERRAIN",
        anchorId: "home-live",
      },
      {
        icon: TrendingUp,
        title: "Performance exploitable",
        text: "Repérez les écarts, les blocages et les commerciaux qui ont besoin d’un appui.",
        tag: "MANAGER",
        anchorId: "home-perf",
      },
    ],
  },
  {
    id: "prospects",
    number: "03",
    eyebrow: "MÉMOIRE PROSPECTS",
    title: "Ne laissez plus vos opportunités disparaître après le passage terrain.",
    description:
      "Chaque contact garde son statut, son historique et sa prochaine action. La prospection ne dépend plus de notes perdues ou de souvenirs flous.",
    callouts: [
      {
        icon: FileText,
        title: "Historique centralisé",
        text: "Retrouvez l’adresse, le statut, les passages et les échanges sans chercher dans plusieurs outils.",
        tag: "FICHE TERRAIN",
        anchorId: "prospects-history",
      },
      {
        icon: Bell,
        title: "Relances maîtrisées",
        text: "Chaque prospect à suivre ressort au bon moment pour éviter les opportunités oubliées.",
        tag: "RELANCE",
        anchorId: "prospects-followup",
      },
      {
        icon: Users,
        title: "Donnée propre pour l’équipe",
        text: "Tout le monde travaille sur la même information : commercial, manager, back-office.",
        tag: "ÉQUIPE",
        anchorId: "prospects-team",
      },
    ],
  },
  {
    id: "flash",
    number: "04",
    eyebrow: "PROSPECTION FLASH",
    title: "Agissez plus vite que jamais sur le terrain.",
    description:
      "Le mode Flash permet de qualifier une adresse en quelques secondes, sans casser le rythme de passage.",
    callouts: [
      {
        icon: Zap,
        title: "Qualification en 3 secondes",
        text: "Intéressé, absent, refus, relance : le bon statut est saisi immédiatement.",
        tag: "ACTION RAPIDE",
        anchorId: "flash-actions",
      },
      {
        icon: RefreshCw,
        title: "Enregistrement immédiat",
        text: "Chaque action est sauvegardée pour conserver une donnée terrain fiable.",
        tag: "DONNÉE FIABLE",
        anchorId: "flash-save",
      },
      {
        icon: Workflow,
        title: "Suite commerciale automatique",
        text: "Le statut déclenche la bonne suite : rappel, relance, note ou prochain passage.",
        tag: "SUIVI",
        anchorId: "flash-followup",
      },
    ],
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cadastralRef = useRef<HTMLDivElement>(null);
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
        cadastralRef={cadastralRef}
      />

      {/* Layer cadastral fixe — grille 80px translucide qui prend le relais
          de la map 3D dès la fin du hero (cf. cahier §9 et §10). */}
      <div
        ref={cadastralRef}
        className="fixed inset-0 z-[1] pointer-events-none opacity-0"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60,40,20,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,0.045) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60,40,20,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,0.025) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>
      
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

            {/* 2. LE TÉLÉPHONE — sticky central, ~25% plus petit, jamais coupé */}
            <div
              ref={phoneRef}
              className="absolute inset-0 z-20 flex items-center justify-center px-6 opacity-0 translate-y-[100vh]"
            >
              <div className="w-full max-w-[230px] pointer-events-auto relative max-h-[70vh] flex items-center justify-center">
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
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(280px,0.95fr)_minmax(240px,300px)_minmax(320px,1fr)] gap-x-[clamp(36px,5vw,88px)] gap-y-12 items-center pointer-events-none">
                  {/* Texte Gauche */}
                  <div className="space-y-6 left-content opacity-0 max-w-[430px]">
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

                  {/* Cards fonctionnelles à droite (3 par section, §16) */}
                  <div className="right-content opacity-0 relative flex flex-col items-stretch gap-5 pointer-events-none">
                    {section.callouts.map((callout) => (
                      <CalloutCard
                        key={callout.anchorId}
                        icon={callout.icon}
                        title={callout.title}
                        text={callout.text}
                        tag={callout.tag}
                        anchorId={callout.anchorId}
                        manual={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc d'accroche final (cf. cahier §17 — précède le formulaire) */}
        <section className="relative z-30 pt-32 pb-16 px-6 bg-canvas overflow-hidden border-t border-line">
          <div
            className="absolute inset-0 opacity-[0.7] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(60,40,20,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,.04) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #000 80%)",
            }}
          />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="font-mono text-[11px] tracking-[0.16em] text-terrain font-semibold uppercase">
              § 05 — PASSER À L’ÉTAPE SUIVANTE
            </span>
            <h2 className="text-[clamp(36px,6vw,88px)] font-light tracking-[-0.03em] leading-[1.05] text-ink max-w-[22ch] mx-auto text-balance">
              Ne marchez plus à l&apos;aveugle.
              <br />
              <b className="font-bold text-terrain">Prospectez</b> avec précision.
            </h2>
          </div>
        </section>

        {/* Formulaire CTA footer (§17) */}
        <DemoForm />
      </main>
    </>
  );
}
