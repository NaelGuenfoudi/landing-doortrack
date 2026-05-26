# 📋 Journal de bord — Suivi du projet Doortrack

Ce document vous permet de suivre l'avancement de la création de votre landing page. Les mises à jour sont automatiques après chaque modification.

## 🚀 État actuel du projet
- **Dernière mise à jour :** Mardi 26 Mai 2026
- **Statut global :** 🟢 Finitions premium appliquées et validées sur le sélecteur, les formulaires, le pied de page et les visuels.

---

## ✅ Ce qui a été réalisé récemment
- **Finitions du sélecteur de participation :** Ajout d'un curseur de liaison triangulaire fluide et d'un widget radar dynamique pour orienter le choix de manière intuitive.
- **Section d'assistance au choix enrichie :** Formulation plus naturelle et ajout de textures douces d'arrière-plan.
- **Formulaire de contact optimisé :** Intégration d'une phrase de réassurance, boutons de validation adaptés automatiquement au choix de l'utilisateur, et lisibilité accrue de la mise en page.
- **Pied de page modernisé :** Signature ajustée et amélioration de la visibilité des liens.
- **Validation globale :** Suppression des anomalies résiduelles de mise en page.

## ⏳ Ce qu'il reste à faire
1. **Lancement de la phase de test client :** Validation finale par les premiers utilisateurs et retours d'usage.

---

## 🛠️ Historique technique (Archives)
*(Cette section contient les détails techniques pour les développeurs)*

# DoorTrack — Suivi d'exécution des 5 sprints

> Fichier de continuité. Permet de reprendre le travail avec n'importe quel LLM en lisant uniquement `docs/doortrack_dossier_ux_ui_motion_5_sprints.md` (le cahier) + ce fichier.
>
> ⚠️ **Règle** : ce fichier doit être mis à jour au fil de la discussion (à chaque sous-tâche, décision, ou retour utilisateur) pour permettre un handover propre.

## Légende statut
- ⏳ todo
- 🟡 in-progress
- 🟢 done (en attente validation utilisateur)
- ✅ validated (validé par l'utilisateur, ne plus toucher)

---

## Sprint 1 — Corrections accueil desktop

Statut global : 🟢 done (à valider visuellement)

### 1.1 Bug noir hero → section 1 — 🔴 reporté
**État** : bug toujours présent. Origine non identifiée dans le code (aucun `bg-black`, `bg-ink`, `bg-dark` en plein écran). Hypothèses non confirmées : MapLibre canvas WebGL, overlay invisible. Tentatives faites :
- Itération 1 : `bg-canvas` sur mapContainer + override `.maplibregl-* { background: transparent }` + opacité min map 0.18 → 0.55 et filter adouci. → INSUFFISANT.
- Itération 2 : voile d'intro noir cassé assumé en intro intentionnelle. → REJETÉ (le bug persiste au même endroit, donc inutile d'avoir 2 noirs).

**Décision** : **reporté après Sprint 2**. On revient à l'état d'avant ces tentatives. Modifications conservées :
- `src/components/scene/hero-animation/HeroOpeningScene.tsx` : `bg-canvas` ajouté au mapContainer (inoffensif).
- `src/app/globals.css` : override MapLibre transparent (inoffensif).
- `src/components/scene/hero-animation/ScrollChoreography.tsx` : opacité min mapContainer 0.55 + filter adouci (à reconfirmer ou rollback selon Sprint 4).

**À investiguer ensuite** : ajouter un debug temporaire (border outline sur chaque div fixed) pour voir quel élément devient visible au moment du noir. Ou tester en désactivant temporairement le ScrollTrigger pour isoler l'origine (CSS pur vs GSAP).

### 1.2 Adaptation hauteur desktop — 🟢
**Fichiers touchés**
- `src/app/globals.css` : `--hero-min-h: 100svh` ; rien d'autre (les sections sont déjà en sticky 100svh).
- `src/components/SectionContent.tsx` / `src/app/page.tsx` : aucune hauteur fixe ajoutée ; on s'appuie sur clamp() existant pour la typographie.
**Note** : la chorégraphie GSAP reste sur `h-[600vh]` (volontaire — c'est le scrub).

### 1.3 Suppression indicateurs 01/02/03/04/05/06 — 🟢
**Fichiers touchés**
- `src/components/SectionContent.tsx` : suppression du `$ {number}` rendu.
- `src/app/page.tsx` : on garde la prop `number` en data mais elle n'est plus rendue (pas de refactor inutile).
- `src/components/sections/BetaSection.tsx` : suppression du `number="05"` passé à SectionContent.
- `src/components/sections/VisionSection.tsx` : suppression du `number="06"`.

### 1.4 Navbar desktop — 🟢
**Constat** : déjà conforme au cahier (Accueil, Rejoindre la bêta, Vision & Contact + CTA droite). Pas de modification nécessaire.

### 1.5 Footer légal desktop — 🟢
**Constat** : déjà conforme (Mentions légales, Politique de confidentialité, CGU, CGV, Cookies, Contact + DoorTrack). Pas de modification.

### 1.6 Fichier de progression — 🟢
Création de ce fichier.

---

## Sprint 2 — Section "Rejoindre la bêta" desktop

Statut global : 🟢 done (à valider visuellement)

### 2.1 Suppression composants interdits — 🟢
Fichiers supprimés (interdits par cahier : pas de timeline, pas de tableau comparatif, pas de répétition) :
- `src/components/sections/EngagementPath.tsx` ❌
- `src/components/sections/BetaCardsGrid.tsx` ❌
- `src/components/sections/BetaComparisonTable.tsx` ❌

### 2.2 Refonte BetaSection — 🟢
`src/components/sections/BetaSection.tsx` réécrit en **3 blocs uniquement** :
1. Hero (label "REJOINDRE LA BÊTA" orange, titre H2 64-76px, paragraphe, CTA primaire+secondaire | téléphone+OrbitalMap | 3 cartes bénéfices).
2. `<EngagementSelector />`.
3. `<BetaCTA />` (inchangé, déjà conforme au cahier).

Textes mis à jour aux versions exactes du cahier (paragraphe et titres carte raccourcis).

### 2.3 EngagementSelector interactif — 🟢
Nouveau composant `src/components/sections/EngagementSelector.tsx`.
- Layout desktop : grille `36% / 1fr`. 4 cartes empilées gauche + panneau détail droite.
- État : `activeId` persistant (clic) + `hoverId` éphémère (hover). `displayId = hoverId ?? activeId`.
- Animation carte active : scale 1.02 (spring 320/28), bordure orange, ombre renforcée.
- Animation panneau : `AnimatePresence` avec fade+slide y=10→0, ease custom 280ms.
- Icônes Lucide : MessageSquare / Building2 / Rocket / Compass.
- Contenu : strictement les 4 niveaux du cahier (Contributeur terrain / Entreprise pilote / Early Adopter / Pilote terrain encadré) avec leur involvement label, intro, 3 bénéfices, CTA.

### 2.4 CTA final — 🟢
`BetaCTA.tsx` déjà conforme au cahier (icône message, texte centre, 2 boutons). Aucune modification.

### Notes
- Label "REJOINDRE LA BÊTA" est désormais en **orange** (`text-terrain`) comme demandé par le cahier (par opposition aux eyebrows des sections d'accueil qui restent en gris muted).

### 2.5 Globe Cobe (pause intra-sprint sur retour utilisateur) — 🟢
**Contexte** : l'ancien `OrbitalMap.tsx` basé sur `@react-three/fiber` + texture SVG ne s'affichait pas (Three.js TextureLoader peu fiable sur SVG). Utilisateur a demandé un "globe stylé en 3D" → choix : **Cobe** (WebGL dots, look premium type Linear/Vercel), couleur orange DoorTrack.

**Implémentation**
- `npm install cobe` (5 KB, dépendance dev).
- Réécriture complète de `src/components/sections/OrbitalMap.tsx`.
- Config Cobe : `baseColor` paper #FAF7F0, `markerColor` terrain #E25B14, `glowColor` ember #F3B179, `mapBrightness: 5.2`, `diffuse: 1.15`, `dark: 0`, `markers: []` (vide).
- Rotation continue : `requestAnimationFrame` + `globe.update({ phi })`, `phi += 0.0017` ≈ **36 s/tour** (cahier §4.2 demande 24-40 s).
- **Markers retirés** sur retour utilisateur ("points oranges pas beaux").
- **Position** (final v2) : canvas en `position: absolute`, `left: 58%`, `transform: translate(-50%, -50%)`. Centre du globe juste à droite du téléphone. Bord gauche à ~27% (déborde clairement à gauche du téléphone), bord droit à ~89% (passe derrière les cartes bénéfices). Itérations précédentes : centré (`grid place-items-center`) → trop centré ; aligné à droite (`left: 72%`) → trop décalé.
- Canvas `width: min(720px, 62%)`, `aspect-ratio: 1/1`, `opacity: 0.85`.
- Three.js / @react-three/fiber non désinstallés (peuvent encore être utilisés ailleurs au besoin).

---

## Sprint 3 — Section "Vision & Contact" desktop

Statut global : 🟢 done (à valider visuellement)

### 3.1 Refonte VisionSection en 4 blocs — 🟢
`src/components/sections/VisionSection.tsx` réécrit. Passe de 6 blocs à **4 blocs stricts** :
1. **Intro courte** : label `VISION & CONTACT` (orange), titre "Une idée née du terrain, pas d'un bureau.", 1 paragraphe court.
2. **Phrase forte** : carte large (fond `bg-paper`), texte XL bold ; 1re ligne ink "Le problème, ce n'est pas le manque d'effort." ; 2e ligne orange "C'est le manque de visibilité.". **Texture enrichie** sur retour utilisateur ("trop blanc, trop vide") : 7 couches empilées — grille cadastrale 44px + grille large 176px + trame topo diagonale 118° + trame topo 62° en orange + halo radial orange (85% 60%) + halo ember gauche + SVG pins radar (2 cercles concentriques + petit point + route en biais pointillée).
3. **Trois bénéfices** : titre H2 + sous-texte + 3 cartes grid 3 colonnes desktop (Eye/Shield/BarChart3). Textes courts du cahier exact.
4. **Formulaire** : composant `<ContactForm />`.

**Supprimés** : 3 longs paragraphes manifeste, bloc "Construire avec ceux qui prospectent vraiment", CTA final dupliqué "Rejoindre la bêta".

### 3.2 Refonte ContactForm (5 champs) — 🟢
`src/components/sections/ContactForm.tsx` réécrit. Passe de 8 champs à **5 champs stricts du cahier** : Nom / Entreprise / Fonction / Email / Message.
- Layout desktop : grille `38% / 1fr` → texte à gauche, formulaire à droite.
- Inputs : grille 2 colonnes ; Message en pleine largeur.
- Focus orange (`focus:border-terrain focus:ring-terrain/10`).
- Bouton : "Échanger sur DoorTrack →" capsule orange.
- Texte intro : "Échangeons sur votre réalité terrain" + paragraphe court du cahier.

**Supprimés** : champs Téléphone, Nombre de commerciaux, Niveau d'intérêt (hors cahier).

---

## Sprint 4 — Motion design

Statut global : 🟢 done (à valider visuellement)

### 4.1 Floating téléphone + globe reduced-motion — 🟢
- `BetaSection.tsx` : wrapper `motion.div` autour du PhoneFrame du hero bêta. `animate: { y: [0, -6, 0] }`, `duration: 5s`, `easeInOut`, `repeat: Infinity`. Amplitude 6px (cahier §4.3 : 4-8px / 4-6s).
- `OrbitalMap.tsx` : ajout détection `window.matchMedia("(prefers-reduced-motion: reduce)")`. Si actif → rotation désactivée (`globe.update({ phi: 0 })`), sinon RAF tick comme avant.

### 4.2 Animations entrée cartes bénéfices (stagger) — 🟢
- `BetaSection.tsx` : les 3 `CalloutCard` du hero bêta passent de `manual` à `delay={0 / 0.11 / 0.22}` → réactive l'anim `whileInView` (fade + slide-x 20→0 + unblur, ease custom 0.8s). Délai progressif 110ms entre cartes (cahier §4.4 : 80-140ms).
- `VisionSection.tsx` : `delay: i * 0.11` sur les 3 cartes bénéfices.

### 4.3 Micro-interactions boutons — 🟢
Centralisation dans `globals.css` via deux classes `@layer components` :
- **`.btn-primary`** : capsule orange 54px, hover translateY(-2px) + bg terrain-2 + shadow renforcée + flèche `.arrow` translateX(+4px) via descendant selector. Active scale(0.98).
- **`.btn-secondary`** : capsule blanche/transparente avec backdrop-blur, hover translateY(-2px) + bg blanc + border-line-2.

Appliquées à : `BetaSection` (Rejoindre la bêta / En savoir plus), `EngagementSelector` (CTA panneau), `BetaCTA` (Être rappelé / Prendre contact), `ContactForm` (Échanger sur DoorTrack).

### 4.4 prefers-reduced-motion global — 🟢
`globals.css` : `@media (prefers-reduced-motion: reduce)` force `animation-duration: 0.001ms` et `transition-duration: 0.001ms` on `*`. + `OrbitalMap` détecte aussi cette media query côté JS pour stopper le RAF.

### 4.5 Hover cartes (CalloutCard + cartes Vision) — 🟢
- `CalloutCard.tsx` : ajout `whileHover={{ y: -4 }}` + classe `group` ; transition `hover:shadow-shadow-3 hover:border-line-2` + icône en `group-hover:scale-[1.04]`.
- `VisionSection.tsx` : 3 cartes bénéfices, mêmes interactions hover.

### Transitions inter-sections
Pas de modification spécifique : les sections sont déjà toutes en `bg-canvas` + `border-t border-line` (pas de rupture chromatique). Le cahier §4.8 demande "douces, pas de rupture" → considéré conforme. Si besoin, on peut ajouter des spacers ou un fade au scroll dans une itération suivante.

---

## Sprint 5 — Mobile complet

Statut global : ❌ **ANNULÉ / ROLLBACK COMPLET** (jugé "nul" par l'utilisateur).

**Toutes les modifications du Sprint 5 ont été retirées.** L'état revient à celui de la fin du Sprint 4.

Rollback effectué :
- `Header.tsx` → restauré (bouton CTA "Rejoindre la bêta" classique).
- `ContactForm.tsx` → champ Fonction toujours visible, bouton non pleine-largeur.
- `EngagementSelector.tsx` → split desktop unique (pas d'accordéons mobile).
- `MobileAccueil.tsx` → **fichier supprimé**.
- `page.tsx` → scroll container 600vh sans `hidden md:block`, plus d'import `MobileAccueil`.
- `ScrollChoreography.tsx` → early return mobile retiré.
- `ScrollIndicator.tsx` → restauré (`fixed bottom-9 ... flex`).
- `BetaSection.tsx` → marges `px-6`, boutons `flex-wrap` non pleine-largeur, téléphone `max-w-[260px]`.
- `OrbitalMap.tsx` → positionnement inline style restauré (`left: 58%`, `width: min(720px, 62%)`, opacity 0.85).

**Plan d'exécution mobile à reprendre plus tard, si l'utilisateur le décide** (voir cahier §5).

---

## Règles & contraintes (rappel cahier)

- Identité conservée : fond clair cartographique, téléphone central, cartes arrondies, CTA orange, premium.
- Pas de tableau comparatif lourd.
- Pas de timeline 01/02/03/04 sur mobile.
- Bug noir → INTERDIT : transition entièrement claire.
- Mobile = vraie structure, pas une compression desktop.
- Animations sobres, fluides, utiles.

## Commandes utiles

```powershell
# Lancer le dev server
npm run dev

# Build
npm run build
```
