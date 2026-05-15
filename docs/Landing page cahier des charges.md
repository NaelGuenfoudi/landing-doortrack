# Cahier des charges V4 — Landing page Doortrack avec Framer Motion

## 1. Objectif du document

Ce document doit être utilisé comme cahier des charges directement exploitable par Claude ou par un développeur front-end.

Il décrit la landing page de **Doortrack**, une application mobile de prospection terrain destinée aux :

- dirigeants ;
- responsables commerciaux ;
- managers d’équipes terrain ;
- commerciaux terrain.

La landing page doit présenter Doortrack comme une solution premium, moderne et concrète, capable de structurer la prospection terrain autour d’une carte opérationnelle, d’un pilotage simple et d’un suivi prospect exploitable.

La page ne doit pas chercher à recréer une vraie application fonctionnelle.  
Elle doit mettre en scène les vrais écrans de l’application à travers un téléphone fixe central et des transitions Framer Motion.

---

## 2. Positionnement de Doortrack

### 2.1 Nom officiel

Le nom à utiliser partout est :

```txt
Doortrack
```

Ne pas utiliser :

```txt
DoorTrack
Ortrack
Door Track
```

### 2.2 Phrase de positionnement

Doortrack doit être présenté comme :

```txt
L’application mobile qui aide les équipes commerciales à prioriser leurs secteurs, suivre leurs actions terrain et transformer la prospection en données claires pour le manager.
```

### 2.3 Ton éditorial

Le ton doit être :

- startup premium ;
- direct ;
- concret ;
- orienté terrain ;
- crédible pour des dirigeants et responsables commerciaux ;
- accessible aux commerciaux.

Ne pas utiliser un ton trop vague, trop corporate ou trop “startup bullshit”.

À éviter :

```txt
Révolutionnez votre business.
L’outil ultime de croissance.
Boostez vos performances comme jamais.
```

À privilégier :

```txt
Savoir où agir.
Prioriser les bons secteurs.
Ne plus perdre les informations terrain.
Piloter sans micro-manager.
Transformer chaque passage terrain en donnée exploitable.
```

### 2.4 Vocabulaire principal

Utiliser principalement :

```txt
prospection terrain
équipes terrain
carte opérationnelle
secteurs
actions terrain
prospects
relances
pilotage commercial
```

Éviter de trop insister sur le terme “porte-à-porte”.  
Il peut apparaître ponctuellement, mais le terme principal doit rester **prospection terrain**.

---

## 3. Objectif business de la landing page

La landing page doit donner envie de prendre contact ou de rejoindre la bêta.

### 3.1 CTA principal

Le CTA principal est :

```txt
Rejoindre la bêta
```

Destination :

```txt
Page contact avec formulaire
```

### 3.2 CTA secondaire

Le CTA secondaire est :

```txt
Prendre contact
```

Destination :

```txt
Page contact avec formulaire
```

### 3.3 Formulaire de contact

La page doit prévoir un lien ou un scroll vers une page contact/formulaire.

Champs recommandés pour le formulaire :

```txt
Prénom
Nom
Entreprise
Poste
Nombre de commerciaux terrain
Secteur d’activité
Email
Téléphone
Message / besoin terrain
```

Bouton de validation :

```txt
Envoyer ma demande
```

Phrase de réassurance sous le formulaire :

```txt
Vos informations servent uniquement à vous recontacter au sujet de Doortrack.
```

### 3.4 Niveau de maturité produit

Ne pas parler de l’avancement du produit.

Ne pas écrire :

```txt
en construction
MVP
projet en développement
bientôt disponible
produit pas encore finalisé
```

La page doit présenter Doortrack comme une solution claire, crédible et déjà bien pensée, sans insister sur son statut de développement.

---

## 4. Décision centrale de rendu

### 4.1 Utiliser les vrais visuels de l’application

Les écrans de l’application doivent être affichés sous forme d’images fixes haute fidélité.

Il ne faut pas recoder l’application à l’intérieur de la landing page.

Raison :  
un recodage créerait une interface ressemblante mais différente, avec un risque de perte de crédibilité.

La bonne approche est :

```txt
captures définitives de l’app + overlays animés + transitions Framer Motion
```

### 4.2 Règle absolue

Les visuels de l’application sont la source de vérité.

Claude ne doit pas recréer les cards, les KPI, les cartes ou les listes prospects à la main.  
Claude doit intégrer les images fournies telles quelles dans le téléphone.

### 4.3 Ce qui doit être animé

Framer Motion doit animer :

- le passage entre les captures ;
- les faux taps ;
- les halos ;
- les petits marqueurs d’attention ;
- les textes autour du téléphone ;
- les callouts ;
- les transitions de section ;
- le fond map très subtil.

Framer Motion ne doit pas servir à reconstruire toute l’application.

---

## 5. Assets visuels à utiliser

### 5.1 Écrans principaux

Prévoir les fichiers suivants dans `/public/screens/` :

```txt
/public/screens/doortrack-map.webp
/public/screens/doortrack-home.webp
/public/screens/doortrack-prospects.webp
```

### 5.2 Ordre final des écrans

L’ordre définitif est :

```txt
Carte → Accueil → Prospects
```

La carte est le cœur du produit et doit apparaître en premier.

### 5.3 Format des images

Les captures doivent être :

- définitives ;
- nettes ;
- non compressées ;
- au même ratio ;
- au même cadrage ;
- au même format ;
- en portrait ;
- intégrées telles quelles dans le téléphone.

Format recommandé :

```txt
WebP
largeur minimale : 900 px
hauteur minimale : 1800 px
ratio identique pour les 3 captures
```

Si les captures sont disponibles en PNG haute qualité, les convertir ensuite en WebP optimisé.

---

## 6. Concept UX principal

### 6.1 Principe

La page repose sur un téléphone mockup SaaS fixe au centre de l’écran.

Pendant le scroll :

- le téléphone reste fixe ;
- le téléphone reste centré ;
- le téléphone reste en portrait ;
- le téléphone ne tourne pas ;
- le téléphone ne change pas de position ;
- le téléphone ne grossit pas ;
- l’image à l’intérieur du téléphone change progressivement ;
- les textes autour changent en parallèle.

L’effet recherché :

```txt
Le téléphone est stable.
L’application semble être utilisée.
Le site raconte l’intérêt de chaque écran autour du téléphone.
```

### 6.2 Animation à deux couches

Il faut séparer deux animations.

#### Couche 1 — Dans le téléphone

L’image affichée dans le téléphone change comme dans une navigation mobile.

Transition attendue :

```txt
slide horizontal + léger fade + micro blur
```

#### Couche 2 — Autour du téléphone

Les titres, textes et callouts changent avec un effet :

```txt
fade + blur + légère remontée + apparition en cascade
```

Le contenu autour doit donner une sensation de réécriture propre, premium et fluide.

---

## 7. Structure globale de la landing page

La page contient 4 grandes sections :

```txt
01 — Carte opérationnelle
02 — Accueil / KPI / motivation
03 — Prospects / relance / conversion
04 — CTA final
```

Les sections 01, 02 et 03 utilisent le téléphone central fixe.

La section 04 est une section finale de conversion avec deux CTA.

---

## 8. Direction artistique

### 8.1 Style général

Le rendu doit être :

- clair ;
- premium ;
- SaaS moderne ;
- terrain direct ;
- lisible ;
- crédible ;
- sobre ;
- dynamique sans être gadget.

### 8.2 Fond global

Le fond global doit être clair, avec une map de prospection très transparente.

Fond recommandé :

```txt
gris très clair / blanc cassé avec légère teinte bleutée
```

Exemple :

```css
background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 45%, #F8FAFC 100%);
```

### 8.3 Map en arrière-plan

Le fond doit intégrer un motif de carte très discret.

Cette map doit évoquer :

- rues ;
- blocs de bâtiments ;
- zones ;
- tracés ;
- quelques points très faibles ;
- logique de prospection terrain.

Opacité :

```txt
5 %
```

Ce choix est volontaire : assez visible pour donner une identité, mais pas assez pour gêner.

Règles :

- pas de carte trop détaillée ;
- pas de copie de Google Maps ;
- pas de couleurs fortes ;
- pas de labels de rues visibles ;
- pas de surcharge visuelle.

Exemple CSS :

```css
.global-map-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("/assets/map-pattern.svg");
  background-size: 920px auto;
  background-repeat: repeat;
}
```

### 8.4 Animation du fond

La map de fond peut avoir un très léger parallax.

```tsx
const mapY = useTransform(scrollYProgress, [0, 1], [0, -70])
```

Le mouvement doit être presque imperceptible.

---

## 9. Charte graphique

### 9.1 Couleur principale

La couleur principale est le bleu nuit.

```css
--navy-950: #020617;
--navy-900: #061A33;
--navy-800: #08264A;
--navy-700: #0B3566;
```

### 9.2 Couleur d’action

```css
--blue-700: #1D4ED8;
--blue-600: #2563EB;
--blue-500: #3B82F6;
--blue-100: #DBEAFE;
--blue-50: #EFF6FF;
```

### 9.3 Couleur accent

L’accent principal est orange.

```css
--orange-600: #EA580C;
--orange-500: #F97316;
--orange-100: #FFEDD5;
--orange-50: #FFF7ED;
```

L’orange doit servir aux :

- soulignements ;
- points chauds ;
- accents de progression ;
- éléments commerciaux importants.

### 9.4 Couleurs fonctionnelles

Vert :

```css
--green-700: #15803D;
--green-600: #16A34A;
--green-100: #DCFCE7;
--green-50: #F0FDF4;
```

Rouge :

```css
--red-600: #DC2626;
--red-500: #EF4444;
--red-100: #FEE2E2;
--red-50: #FEF2F2;
```

Gris :

```css
--slate-950: #020617;
--slate-800: #1E293B;
--slate-700: #334155;
--slate-600: #475569;
--slate-500: #64748B;
--slate-300: #CBD5E1;
--slate-200: #E2E8F0;
--slate-100: #F1F5F9;
--slate-50: #F8FAFC;
--white: #FFFFFF;
```

---

## 10. Typographie

Utiliser :

```txt
Inter
```

Fallback :

```txt
system-ui, sans-serif
```

### 10.1 H1 / très gros titre

```css
font-size: clamp(44px, 5vw, 72px);
font-weight: 760;
line-height: 0.96;
letter-spacing: -0.045em;
color: var(--navy-900);
```

### 10.2 H2 / titre de section

```css
font-size: clamp(34px, 4vw, 54px);
font-weight: 740;
line-height: 1.05;
letter-spacing: -0.035em;
color: var(--navy-900);
```

### 10.3 Titres de callouts

```css
font-size: 18px;
font-weight: 720;
line-height: 1.25;
color: var(--navy-900);
```

### 10.4 Texte courant

```css
font-size: 16px;
line-height: 1.65;
font-weight: 450;
color: var(--slate-600);
```

### 10.5 Microcopy

```css
font-size: 13px;
line-height: 1.45;
font-weight: 500;
color: var(--slate-500);
```

---

## 11. Layout desktop

### 11.1 Structure des sections principales

Pour les sections 01, 02 et 03 :

```txt
[Bloc texte gauche]    [Téléphone central sticky]    [Bloc texte droit]
```

Chaque section doit occuper environ une hauteur d’écran.

```css
.scroll-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(280px, 1fr) 420px minmax(280px, 1fr);
  align-items: center;
  gap: 56px;
  position: relative;
}
```

### 11.2 Container

```css
.page-container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 48px;
}
```

### 11.3 Téléphone sticky

Le téléphone ne doit pas être recréé dans chaque section.  
Il faut un seul téléphone sticky.

```css
.phone-sticky-wrapper {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}
```

---

## 12. Téléphone

### 12.1 Style

Le téléphone doit être un mockup SaaS premium.

Choix retenu :

```txt
téléphone vertical portrait, graphite/noir, propre, sobre, premium
```

Pas d’effet iPhone trop réaliste obligatoire.  
Un mockup SaaS moderne est suffisant.

### 12.2 CSS recommandé

```css
.phone-frame {
  width: clamp(320px, 26vw, 410px);
  aspect-ratio: 390 / 820;
  border-radius: 48px;
  padding: 12px;
  background: linear-gradient(145deg, #111827, #020617);
  box-shadow:
    0 48px 90px rgba(15, 23, 42, 0.22),
    0 18px 36px rgba(15, 23, 42, 0.18),
    inset 0 0 0 1px rgba(255, 255, 255, 0.16);
}

.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 36px;
  background: #ffffff;
}
```

### 12.3 Micro-animation autorisée

Le téléphone reste fixe, mais on autorise :

- légère respiration de l’ombre ;
- reflet très subtil ;
- glow très léger autour du cadre.

Animation recommandée :

```tsx
animate={{
  boxShadow: [
    "0 48px 90px rgba(15,23,42,0.20)",
    "0 52px 100px rgba(37,99,235,0.18)",
    "0 48px 90px rgba(15,23,42,0.20)"
  ]
}}
transition={{
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

Ne pas animer :

- la rotation ;
- la position ;
- la taille ;
- l’inclinaison.

---

## 13. Intégration des visuels dans le téléphone

### 13.1 Mapping des images

```ts
const screenImages = {
  map: "/screens/doortrack-map.webp",
  home: "/screens/doortrack-home.webp",
  prospects: "/screens/doortrack-prospects.webp"
}

const screenAlt = {
  map: "Écran carte Doortrack avec secteurs, opportunités et actions terrain",
  home: "Écran accueil Doortrack avec KPI, objectifs et actions du jour",
  prospects: "Écran prospects Doortrack avec scores, statuts et relances"
}
```

### 13.2 Rendu de l’image active

```tsx
<div className="phone-screen">
  <AnimatePresence mode="sync" custom={direction}>
    <motion.img
      key={activeScreen}
      src={screenImages[activeScreen]}
      alt={screenAlt[activeScreen]}
      custom={direction}
      variants={phoneImageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </AnimatePresence>
</div>
```

Utiliser `object-cover` uniquement si les images sont exactement au bon ratio.  
Sinon utiliser `object-contain`, mais il faut privilégier des captures au bon ratio pour éviter les bandes.

---

## 14. Détection de section active

Le changement d’écran doit être progressif et synchronisé avec le scroll.

Approche recommandée :

- utiliser `useScroll` pour suivre la progression globale ;
- utiliser `useTransform` ou un calcul basé sur les seuils pour déterminer l’écran actif ;
- déclencher les transitions à des seuils progressifs.

Ordre :

```txt
0 % à 33 %   → Carte
33 % à 66 %  → Accueil
66 % à 100 % → Prospects
```

Exemple :

```ts
const sectionOrder = ["map", "home", "prospects"]

function getActiveScreen(progress: number) {
  if (progress < 0.33) return "map"
  if (progress < 0.66) return "home"
  return "prospects"
}
```

La transition doit être déclenchée progressivement au scroll, mais le changement d’image peut rester un seuil net avec animation fluide.

---

## 15. Animation interne du téléphone

### 15.1 Effet recherché

Le passage entre écrans doit donner la sensation d’une navigation mobile.

Choix retenu :

```txt
slide horizontal type changement d’onglet mobile
```

Il faut éviter :

- page-turn trop gadget ;
- rotation 3D ;
- effet cube ;
- transition trop spectaculaire.

### 15.2 Variants Framer Motion

```ts
const phoneImageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 42 : -42,
    opacity: 0,
    scale: 0.992,
    filter: "blur(3px)"
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -42 : 42,
    opacity: 0,
    scale: 0.992,
    filter: "blur(3px)",
    transition: {
      duration: 0.38,
      ease: "easeInOut"
    }
  })
}
```

### 15.3 Direction

Quand l’utilisateur descend :

```txt
Carte → Accueil → Prospects
direction = 1
```

Quand l’utilisateur remonte :

```txt
Prospects → Accueil → Carte
direction = -1
```

---

## 16. Overlays animés sur les captures

Les overlays sont autorisés pour rendre la démonstration plus réelle.

Ils doivent rester au-dessus des images et ne pas modifier les captures.

### 16.1 Types d’overlays autorisés

- faux tap ;
- halo subtil ;
- pulse autour d’un bouton ;
- surlignage léger ;
- petit label flottant ;
- micro zoom sur une zone ;
- glow sur un élément ;
- curseur très discret.

### 16.2 Règle

Les overlays doivent renforcer la compréhension sans faire croire que l’application est réellement interactive.

### 16.3 Faux tap

```tsx
<motion.div
  className="absolute h-12 w-12 rounded-full border border-blue-500/40 bg-blue-500/10"
  initial={{ scale: 0.4, opacity: 0 }}
  animate={{ scale: 1.4, opacity: [0, 1, 0] }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

### 16.4 Séquence Carte → Accueil

Pendant la sortie de la section Carte :

1. léger halo sur une zone d’action de la carte ;
2. slide horizontal ;
3. apparition de l’écran Accueil ;
4. apparition des textes Accueil.

### 16.5 Séquence Accueil → Prospects

Pendant la sortie de la section Accueil :

1. léger halo sur la bottom nav ou une action liée aux prospects ;
2. slide horizontal ;
3. apparition de l’écran Prospects ;
4. apparition des textes Prospects.

---

## 17. Animation des textes autour

### 17.1 Effet choisi

Les textes doivent être vendeurs, explicites et impactants.

Animation choisie :

```txt
fade + blur + apparition ligne par ligne + cascade des callouts
```

Pas d’effet machine à écrire complet, car cela peut devenir lent et gadget.  
L’effet doit donner une sensation de réécriture sans ralentir la lecture.

### 17.2 Variants

```ts
const externalContentVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: {
      duration: 0.34,
      ease: "easeInOut"
    }
  }
}
```

### 17.3 Callouts

Deux callouts par section.

Structure :

```txt
1 callout à gauche
1 callout à droite
```

Ou, si le layout le permet :

```txt
titre + description à gauche
2 callouts répartis autour du téléphone
```

Le fichier doit rester lisible et premium.  
Ne pas multiplier les cartes.

---

## 18. Connecteurs

Les connecteurs sont autorisés mais doivent être très discrets.

Style :

```css
.connector-line {
  stroke: rgba(37, 99, 235, 0.20);
  stroke-width: 1.3;
  stroke-dasharray: 4 7;
}
```

Ils doivent être supprimés sur mobile.

---

## 19. Section 01 — Carte opérationnelle

### 19.1 Rôle

C’est la première section et la plus importante.

Elle doit installer immédiatement le cœur de Doortrack :

```txt
la carte opérationnelle de prospection terrain
```

### 19.2 Écran affiché

```txt
doortrack-map.webp
```

### 19.3 Texte principal

Eyebrow :

```txt
01 — CARTE OPÉRATIONNELLE
```

Titre :

```txt
Transformez votre terrain en carte d’action commerciale.
```

Description :

```txt
Doortrack aide vos équipes à visualiser les bons secteurs, prioriser les opportunités et remonter une donnée terrain claire au manager.
```

### 19.4 Callout gauche

Titre :

```txt
Prioriser les bons secteurs
```

Texte :

```txt
Repérez en un coup d’œil les zones à travailler, les rues déjà couvertes et les opportunités qui méritent une action immédiate.
```

### 19.5 Callout droit

Titre :

```txt
Piloter le terrain sans le subir
```

Texte :

```txt
Chaque action terrain devient visible, structurée et exploitable pour suivre l’activité sans multiplier les comptes-rendus flous.
```

### 19.6 Mention discrète de la prospection flash

Ajouter une petite card secondaire, non dominante :

Titre :

```txt
Prospection flash
```

Texte :

```txt
En quelques secondes, le commercial qualifie son passage : porte fermée, échange réalisé, devis envoyé ou contrat signé.
```

Cette card doit rester secondaire.  
Ne pas en faire une section complète.

### 19.7 Caption

```txt
La carte devient le point de départ de chaque décision terrain.
```

---

## 20. Section 02 — Accueil / KPI / Motivation

### 20.1 Rôle

Montrer que Doortrack n’est pas seulement une carte, mais aussi un cockpit quotidien pour les équipes.

### 20.2 Écran affiché

```txt
doortrack-home.webp
```

### 20.3 Texte principal

Eyebrow :

```txt
02 — PILOTAGE QUOTIDIEN
```

Titre :

```txt
Une journée plus claire pour chaque commercial.
```

Description :

```txt
Objectifs, actions prioritaires, progression et performance : chacun sait où il en est et ce qu’il doit faire ensuite.
```

### 20.4 Callout gauche

Titre :

```txt
Motiver sans complexifier
```

Texte :

```txt
Les KPI essentiels restent visibles sans noyer le commercial dans des tableaux inutiles.
```

### 20.5 Callout droit

Titre :

```txt
Manager avec des faits
```

Texte :

```txt
Le responsable suit l’activité réelle, repère les blocages et accompagne ses équipes avec des données concrètes.
```

### 20.6 Caption

```txt
Un cockpit simple pour garder le cap entre objectifs, actions et résultats.
```

---

## 21. Section 03 — Prospects / Relance / Conversion

### 21.1 Rôle

Montrer que Doortrack transforme la prospection en suivi commercial exploitable.

### 21.2 Écran affiché

```txt
doortrack-prospects.webp
```

### 21.3 Texte principal

Eyebrow :

```txt
03 — SUIVI PROSPECT
```

Titre :

```txt
Ne laissez plus vos opportunités disparaître après le passage terrain.
```

Description :

```txt
Les prospects sont qualifiés, priorisés et relancés au bon moment pour transformer l’activité terrain en conversions.
```

### 21.4 Callout gauche

Titre :

```txt
Prioriser les prospects chauds
```

Texte :

```txt
Scores, statuts et historique permettent de concentrer l’énergie commerciale sur les contacts les plus prometteurs.
```

### 21.5 Callout droit

Titre :

```txt
Relancer avec le bon contexte
```

Texte :

```txt
Chaque interaction reste attachée au prospect pour agir vite, relancer proprement et éviter les pertes d’information.
```

### 21.6 Caption

```txt
Le terrain ne s’arrête pas à la visite : il nourrit un suivi commercial clair.
```

---

## 22. Section 04 — CTA final

### 22.1 Rôle

Convertir le visiteur vers une prise de contact.

### 22.2 Texte principal

Eyebrow :

```txt
04 — PASSER À L’ÉTAPE SUIVANTE
```

Titre :

```txt
Rejoignez les premiers utilisateurs de Doortrack.
```

Description :

```txt
Vous pilotez une équipe terrain ou vous prospectez au quotidien ? Échangeons sur vos besoins et découvrez comment Doortrack peut structurer votre prospection.
```

### 22.3 CTA principal

Titre :

```txt
Rejoindre la bêta
```

Texte :

```txt
Accédez aux premiers échanges autour de Doortrack et contribuez à façonner un outil réellement pensé pour le terrain.
```

Bouton :

```txt
Rejoindre la bêta
```

Lien :

```txt
/contact
```

### 22.4 CTA secondaire

Titre :

```txt
Prendre contact
```

Texte :

```txt
Vous avez une équipe commerciale terrain, une problématique de suivi ou un besoin précis ? Parlons-en.
```

Bouton :

```txt
Prendre contact
```

Lien :

```txt
/contact
```

---

## 23. Composants à créer

```txt
LandingPage
Header
GlobalMapBackground
StickyPhoneStage
PhoneFrame
PhoneImageScreen
PhoneOverlayLayer
ScrollSection
SectionCopy
CalloutCard
ConnectorLine
CaptionBar
FinalCTASection
CTAButton
```

---

## 24. Structure de données recommandée

```ts
const sections = [
  {
    id: "map",
    number: "01",
    eyebrow: "CARTE OPÉRATIONNELLE",
    title: "Transformez votre terrain en carte d’action commerciale.",
    description:
      "Doortrack aide vos équipes à visualiser les bons secteurs, prioriser les opportunités et remonter une donnée terrain claire au manager.",
    screen: "map",
    caption: "La carte devient le point de départ de chaque décision terrain.",
    leftCallout: {
      title: "Prioriser les bons secteurs",
      text:
        "Repérez en un coup d’œil les zones à travailler, les rues déjà couvertes et les opportunités qui méritent une action immédiate."
    },
    rightCallout: {
      title: "Piloter le terrain sans le subir",
      text:
        "Chaque action terrain devient visible, structurée et exploitable pour suivre l’activité sans multiplier les comptes-rendus flous."
    }
  },
  {
    id: "home",
    number: "02",
    eyebrow: "PILOTAGE QUOTIDIEN",
    title: "Une journée plus claire pour chaque commercial.",
    description:
      "Objectifs, actions prioritaires, progression et performance : chacun sait où il en est et ce qu’il doit faire ensuite.",
    screen: "home",
    caption: "Un cockpit simple pour garder le cap entre objectifs, actions et résultats.",
    leftCallout: {
      title: "Motiver sans complexifier",
      text:
        "Les KPI essentiels restent visibles sans noyer le commercial dans des tableaux inutiles."
    },
    rightCallout: {
      title: "Manager avec des faits",
      text:
        "Le responsable suit l’activité réelle, repère les blocages et accompagne ses équipes avec des données concrètes."
    }
  },
  {
    id: "prospects",
    number: "03",
    eyebrow: "SUIVI PROSPECT",
    title: "Ne laissez plus vos opportunités disparaître après le passage terrain.",
    description:
      "Les prospects sont qualifiés, priorisés et relancés au bon moment pour transformer l’activité terrain en conversions.",
    screen: "prospects",
    caption: "Le terrain ne s’arrête pas à la visite : il nourrit un suivi commercial clair.",
    leftCallout: {
      title: "Prioriser les prospects chauds",
      text:
        "Scores, statuts et historique permettent de concentrer l’énergie commerciale sur les contacts les plus prometteurs."
    },
    rightCallout: {
      title: "Relancer avec le bon contexte",
      text:
        "Chaque interaction reste attachée au prospect pour agir vite, relancer proprement et éviter les pertes d’information."
    }
  }
]
```

---

## 25. Responsive

### Desktop

Version prioritaire.

Elle doit inclure :

- téléphone sticky central ;
- animation au scroll ;
- textes à gauche et à droite ;
- transitions internes ;
- overlays ;
- CTA final.

### Tablette

Adapter :

- téléphone un peu plus petit ;
- colonnes plus serrées ;
- connecteurs simplifiés.

### Mobile

Créer une version simplifiée.

Sur mobile :

- pas besoin de sticky complexe ;
- chaque section peut afficher le téléphone puis le texte ;
- les connecteurs doivent être masqués ;
- les transitions doivent rester simples ;
- le CTA doit être rapidement accessible.

---

## 26. Accessibilité

Prévoir :

- balises alt sur les images ;
- contraste suffisant ;
- boutons accessibles ;
- textes lisibles ;
- `prefers-reduced-motion`.

Exemple :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 27. Critères d’acceptation

La landing page est validée si :

- le nom affiché est bien Doortrack ;
- la première section affiche la carte ;
- l’ordre des écrans est Carte → Accueil → Prospects ;
- le téléphone reste très fixe ;
- les captures sont intégrées telles quelles ;
- les écrans ne sont pas recodés ;
- la transition interne est un slide mobile fluide ;
- les textes autour changent avec un effet fade + blur + cascade ;
- il y a deux callouts principaux par section ;
- la prospection flash est seulement mentionnée dans la section Carte ;
- le fond global contient une map très transparente à environ 5 % ;
- le rendu est clair, premium, terrain et crédible ;
- les CTA pointent vers `/contact` ;
- la page ne parle pas d’avancement produit, MVP ou construction ;
- la page donne envie de rejoindre la bêta ou de prendre contact.

---

## 28. Priorités de développement

Ordre strict :

1. Préparer les trois captures définitives.
2. Créer la page claire avec fond map discret.
3. Créer le téléphone central sticky.
4. Intégrer les images dans le téléphone.
5. Détecter la progression du scroll.
6. Changer les images selon les sections.
7. Créer le slide horizontal mobile entre captures.
8. Animer les textes autour.
9. Ajouter les deux callouts par section.
10. Ajouter les micro-overlays.
11. Ajouter la card discrète Prospection flash dans la section Carte.
12. Créer la section CTA.
13. Adapter en responsive.
14. Optimiser performance et accessibilité.

---

## 29. Ce qu’il ne faut pas faire

Ne pas :

- recoder l’application ;
- modifier les captures ;
- créer une interface approximative ;
- afficher DoorTrack au lieu de Doortrack ;
- afficher Ortrack ;
- faire tourner le téléphone ;
- déplacer le téléphone entre les sections ;
- créer trop de callouts ;
- créer une section complète sur la prospection flash ;
- parler de MVP ou de produit en construction ;
- utiliser un fond sombre global ;
- rendre le fond map trop visible ;
- faire un effet page-turn gadget ;
- surcharger la page.

---

## 30. Message final à faire passer

La landing page doit faire comprendre rapidement :

```txt
Doortrack transforme la prospection terrain en système pilotable.
```

Le visiteur doit retenir :

```txt
Je vois mes secteurs.
Je sais où agir.
Je garde mes prospects.
Je relance au bon moment.
Je pilote l’activité terrain avec des données claires.
```

La promesse finale :

```txt
Une carte pour agir.
Un cockpit pour suivre.
Un pipeline pour convertir.
```
