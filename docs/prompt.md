# Doortrack — Animation d'ouverture Hero (ACTE 0) — Version MapLibre

> Spec technique de l'animation cinématique d'entrée avec MapLibre GL JS sur un vrai quartier de Nancy.
> Document à placer dans `design-system/HERO_ANIMATION.md` (remplace la version précédente avec génération procédurale).

**Version** 2.0 · **Statut** Brief validé, prêt pour développement
**Stack principal** MapLibre GL JS + GSAP ScrollTrigger + Three.js (téléphone existant)
**Dépendance** Ce document s'articule avec `design-system/MASTER.md`

---

## Sommaire

1. [Vision & narratif](#1-vision--narratif)
2. [Storyboard détaillé](#2-storyboard-détaillé)
3. [Stack technique](#3-stack-technique)
4. [Architecture des composants](#4-architecture-des-composants)
5. [Configuration MapLibre](#5-configuration-maplibre)
6. [Style cartographique custom](#6-style-cartographique-custom)
7. [Timeline GSAP scroll-driven](#7-timeline-gsap-scroll-driven)
8. [Transition map → téléphone](#8-transition-map--téléphone)
9. [Téléphone existant — intégration](#9-téléphone-existant--intégration)
10. [Performance & contraintes](#10-performance--contraintes)
11. [Anti-patterns & pièges](#11-anti-patterns--pièges)
12. [Inspirations](#12-inspirations)

---

## 1. Vision & narratif

### Le narratif

**"Le territoire physique entre dans votre poche."**

L'animation raconte en 2 écrans de scroll ce que fait Doortrack : on part d'une vue isométrique 3D d'un vrai quartier de Nancy avec ses bâtiments en relief, on bascule en vue cadastrale top-down, puis tout se fait aspirer dans le téléphone où s'affiche la même zone en mode app Doortrack.

### Pourquoi un vrai quartier plutôt qu'une ville procédurale

- **Cohérence produit** : Doortrack montre de vraies cartes, pas des dioramas fictifs
- **Authenticité** : un prospect qui prospecte à Nancy se reconnaît
- **Géographie réelle** : les données OSM donnent des bâtiments aux formes réalistes
- **Évolutif** : on peut changer la ville sans toucher au code (juste les coordonnées)
- **Pas d'asset 3D à gérer** : tout est généré via les tuiles vectorielles

### Le ressenti recherché

Cinématique premium type Apple Vision Pro — easings doux, mouvements amples, contemplatif au début, plus dynamique à la fin. Pas punchy/dev, pas magique/playful. Le mot-clé est **majestueux**.

### Articulation avec le reste de la landing

Cette animation est l'**ACTE 0** du storyboard global défini dans MASTER.md section 6. Elle se déroule de `0vh` à `200vh`. Le reste du storyboard (ACTES 1 à 11) reprend à `200vh` avec le téléphone qui devient le personnage principal.

**Important** : il n'y a pas de hero "classique" avec h1 + sous-titre + CTAs pendant cette animation. Le texte du hero apparaît APRÈS, à partir de 200vh, quand le téléphone est en position finale.

---

## 2. Storyboard détaillé

L'animation se déroule sur **200vh** (2 écrans de scroll) découpés en 4 phases.

### PHASE 1 — Contemplation isométrique (0vh → 50vh)

**Visuel** : Vue isométrique 3D d'un quartier de Nancy. Bâtiments OSM extrudés selon leur hauteur réelle, majoritairement blancs avec ~15 bâtiments colorés (orange, sky, green, purple) répartis aléatoirement. Rues claires, peu de labels.

**MapLibre state** :
- `center` : coordonnées du centre de la zone Nancy
- `zoom` : 16
- `pitch` : 60 (max MapLibre, vue inclinée)
- `bearing` : -17 (légère rotation pour effet diorama)

**Téléphone** : invisible (hors viewport, `position.y = -200vh` ou similaire)

**Comportement** :
- `interactive: false` sur la map (l'utilisateur ne peut pas la manipuler)
- Légère rotation auto du bearing (-17° → -22° → -17° en boucle lente sur 20s) pour montrer que la scène est vivante
- Mouse parallax léger via `setBearing` réactif à la position X de la souris (max ±3° d'amplitude additionnelle)

**Note importante** : MapLibre limite le `pitch` à 60° maximum. Cela donne une vue isométrique qui correspond bien à tes images de référence (le pitch 60 + bearing -17 produit un effet diorama très similaire).

---

### PHASE 2 — Élévation top-down (50vh → 100vh)

**Visuel** : La caméra bascule progressivement vers le ciel. Les bâtiments perdent leur volume visuel, on voit le quartier "à plat" comme un plan cadastral.

**MapLibre transition (scrubbed sur scroll 50-100vh)** :
- `pitch` : 60 → 0 (l'effet 3D disparaît, vue top-down pure)
- `bearing` : -17 → 0 (la carte se redresse)
- `zoom` : 16 → 15.7 (légèrement zoomé out pour englober plus de zone)
- `center` : inchangé

**Téléphone** : invisible toujours

**Comportement** :
- Mouse parallax atténué progressivement (1.0 → 0.0)
- Auto-rotation du bearing désactivée pendant la transition
- Pendant la transition, les ombres d'extrusion s'estompent naturellement (effet propre à MapLibre quand le pitch baisse)

**Easing** : `power2.inOut` sur les 3 propriétés (pitch, bearing, zoom). La transition doit être fluide, organique.

---

### PHASE 3 — Apparition du téléphone (100vh → 150vh)

**Visuel** : La map est en vue top-down complète. Le téléphone Three.js apparaît depuis le bas et monte vers le centre, semi-transparent au début.

**MapLibre state** : statique à la fin de phase 2 (pitch 0, bearing 0, zoom 15.7)

**Téléphone** :
- `position.y` : depuis hors viewport → centre vertical
- `scale` : 0.7 → 0.9
- `opacity` : 0 → 0.85
- Lumière douce orange sous le téléphone qui s'allume progressivement (intensity 0 → 0.5)

**Map en fond** :
- Très légère réduction d'opacité globale : 1.0 → 0.85 (pour donner du poids au téléphone qui arrive)
- Très léger blur : 0px → 2px (effet "profondeur de champ", focus sur le téléphone)

**Comportement** :
- Mouse parallax complètement désactivé
- Le téléphone monte avec un easing `expo.out` (arrive vite puis ralentit)

---

### PHASE 4 — Aspiration & continuité visuelle (150vh → 200vh)

**Visuel** : La map en fond se fige et capture une snapshot. Cette snapshot devient la texture qui s'affiche sur l'écran du téléphone, créant une continuité parfaite entre la map MapLibre et le téléphone.

**Mécanique précise** :

1. À 150vh exactement, déclencher une **capture du canvas MapLibre** vers une image / texture
2. Cette texture est transmise au composant téléphone via prop ou context
3. L'écran du téléphone affiche progressivement cette texture (opacity 0 → 1) PAR-DESSUS sa map normale
4. En parallèle, la map MapLibre en fond fade out (opacity 0.85 → 0)
5. À 175vh : la map MapLibre est invisible, l'écran du téléphone montre la texture capturée — visuellement identique
6. De 175vh à 200vh : sur l'écran du téléphone, crossfade de la texture statique vers la vraie interface Doortrack avec ses pins et UI

**Téléphone** :
- `scale` : 0.9 → 1.0 (taille finale du composant existant)
- `position.y` : finalise sa position
- `opacity` : 0.85 → 1.0

**Map** :
- `opacity` du canvas : 0.85 → 0
- `blur` : 2px → 0px (anecdotique, vu que ça fade out)

**Easing** :
- Map fade out : `power2.in` (commence lent, accélère)
- Téléphone : `expo.out` (arrive vite, se pose)
- Texture sur écran : `power2.inOut`

**Fin de phase 4** : À 200vh, la map MapLibre n'est plus visible. Le téléphone est en position finale avec sa map qui scroll selon le scroll continu de la page (comportement actuel préservé).

---

## 3. Stack technique

### Librairies à installer

```bash
pnpm add maplibre-gl
pnpm add react-map-gl
```

| Lib | Version cible | Rôle |
|---|---|---|
| `maplibre-gl` | ^5.x | Rendu de la map 3D, scroll-driven camera |
| `react-map-gl` | ^7.x | Wrapper React idiomatique (avec sous-package `maplibre`) |
| `gsap` + ScrollTrigger | déjà installé | Timeline scroll-driven |
| `@react-three/fiber` | déjà installé | Téléphone 3D existant |

### Sources de tuiles

**OpenFreeMap** — choix retenu :
- URL : `https://tiles.openfreemap.org/planet`
- Style de base : `https://tiles.openfreemap.org/styles/bright` (sera customisé)
- **100% gratuit**, sans API key, sans rate limit
- Basé OpenStreetMap, couverture mondiale
- Données de bâtiments avec hauteurs (`render_height`)

**Alternatives à connaître** (si besoin futur) :
- **MapTiler** : free tier 100k req/mois, plus de styles prêts à l'emploi
- **Stadia Maps** : free tier dev, plus stylisé visuellement

### Coordonnées Nancy à utiliser

Centre approximatif d'un quartier intéressant de Nancy (Place Stanislas / centre-ville) :
- **longitude** : `6.1844`
- **latitude** : `48.6921`

À ajuster selon le rendu. Zones alternatives suggérées :
- Place Stanislas (centre historique, bâtiments emblématiques) : `[6.1844, 48.6936]`
- Quartier Saint-Léon (résidentiel) : `[6.1740, 48.6890]`
- Quartier Charles III (mixte) : `[6.1820, 48.6850]`

---

## 4. Architecture des composants

### Arborescence

```
src/components/scene/hero-animation/
├── HeroOpeningScene.tsx       # Orchestrateur principal
├── DoortrackMap.tsx            # Wrapper MapLibre + style custom
├── PhoneRig.tsx                # Wrapper du téléphone existant + animation
├── ScrollChoreography.tsx      # Timeline GSAP scrubbée
├── TransitionBridge.tsx        # Gère la capture map → texture téléphone
├── styles/
│   └── doortrack-map-style.ts  # Style MapLibre custom (JSON object)
└── utils/
    ├── coloredBuildings.ts     # Sélection aléatoire de bâtiments à colorer
    └── captureMap.ts            # Helper pour capture canvas MapLibre
```

### Hiérarchie React

```tsx
<HeroOpeningScene>
  {/* La map prend tout l'écran en fixed background */}
  <div className="fixed inset-0 z-0">
    <DoortrackMap ref={mapRef} />
  </div>

  {/* Le téléphone Three.js par-dessus, en fixed aussi */}
  <div className="fixed inset-0 z-10 pointer-events-none">
    <PhoneRig ref={phoneRef} />
  </div>

  {/* Le spacer qui donne du scroll à l'animation */}
  <div className="h-[200vh]" id="hero-animation-spacer" />

  {/* Logique de scroll (ne rend rien visuellement) */}
  <ScrollChoreography mapRef={mapRef} phoneRef={phoneRef} />
  <TransitionBridge mapRef={mapRef} phoneRef={phoneRef} />
</HeroOpeningScene>
```

### Layering visuel (z-index)

```
z-30 : sections de la landing (commencent après 200vh)
z-10 : téléphone 3D (Three.js canvas)
z-0  : map MapLibre (en background)
```

---

## 5. Configuration MapLibre

### Initialisation

```tsx
const map = new maplibregl.Map({
  container: containerRef.current,
  style: doortrackMapStyle,  // notre style custom (section 6)
  center: [6.1844, 48.6921],  // Nancy
  zoom: 16,
  pitch: 60,
  bearing: -17,
  interactive: false,         // CRITIQUE : pas d'interaction utilisateur
  attributionControl: false,  // on ajoutera l'attribution manuellement
  antialias: true,
  canvasContextAttributes: {
    antialias: true,
    preserveDrawingBuffer: true,  // CRITIQUE : permet la capture canvas
  }
});
```

### Points clés

- **`interactive: false`** : la map ne réagit pas aux gestes utilisateur, elle est pilotée uniquement par GSAP
- **`preserveDrawingBuffer: true`** : nécessaire pour pouvoir capturer le canvas avec `canvas.toDataURL()` ou similaire en phase 4
- **`antialias: true`** : indispensable pour un rendu propre des arêtes des bâtiments extrudés
- **Attribution OpenStreetMap obligatoire** : à placer en bas à droite, discret mais présent (obligation légale)

### Méthodes API utilisées dans la choreography

```tsx
// Changements progressifs scrubbés
map.setPitch(value)
map.setBearing(value)
map.setZoom(value)
map.setCenter([lng, lat])

// Pour récupérer l'élément canvas (capture finale)
const canvas = map.getCanvas()
```

---

## 6. Style cartographique custom

### Inspiration visuelle

Tes images de référence : sol blanc cassé, bâtiments majoritairement blancs/gris très clair avec quelques accents colorés ressortis en hauteur, pas de labels parasitaires, rues subtiles.

### Approche

On part du style `bright` d'OpenFreeMap qu'on modifie en JSON pour matcher le design system Doortrack.

### Tokens à utiliser (depuis MASTER.md)

```
--color-bg: #FAFAF7       (sol/background)
--color-line: rgba(15,15,16,0.08)  (rues)
--color-orange-500: #F97316
--color-sky-500: #0EA5E9
--color-green-500: #22C55E
--color-purple-500: #A78BFA  (à ajouter si non présent)
```

### Spec du style

**Background (le "sol")** :
- Couleur : `#FAFAF7` (warm off-white du design system)

**Bâtiments en 3D (fill-extrusion)** :
- Couleur par défaut : `#FCFCFA` (blanc cassé légèrement plus clair que le sol pour ressortir)
- Couleur des bâtiments sélectionnés colorés : selon attribution dynamique (voir section "Bâtiments colorés aléatoires")
- Hauteur : `render_height` réel de OSM
- Base : 0
- Opacité : 1.0 en phase 1, peut baisser via expression en phase 3-4

**Rues** :
- Routes principales : `rgba(15, 15, 16, 0.12)`, largeur 1.5
- Routes secondaires : `rgba(15, 15, 16, 0.08)`, largeur 1
- Chemins/piétons : `rgba(15, 15, 16, 0.04)`, largeur 0.5
- Pas de tracé central, juste des polygones de couleur

**Labels** :
- **Tous masqués** en phase 1-2 pour le look "plan d'architecte"
- Optionnel : noms de rues principales très discrets (`opacity: 0.3`, `font-size: 9px`, couleur `--ink-muted`)

**Parcs/zones vertes** :
- Couleur : `#F0FDF4` (green-50 du design system, très pâle)
- Subtiles, pas dominantes visuellement

**Eau** :
- Couleur : `#E0F2FE` (sky-50, pâle)
- Probablement peu présent à Nancy centre (sauf canal de la Meurthe)

### Bâtiments colorés aléatoires

**Mécanisme** :

À l'initialisation de la map, sélectionner aléatoirement ~15 bâtiments parmi tous ceux visibles dans la zone. Pour chacun, assigner une couleur du design system.

```tsx
// utils/coloredBuildings.ts (pseudo-code)
function pickColoredBuildings(map, count = 15) {
  // Récupère les features bâtiments de la zone visible
  const buildings = map.queryRenderedFeatures({
    layers: ['3d-buildings']
  });

  // Filtre ceux qui ont une hauteur > 5m (visibles en 3D)
  const tallEnough = buildings.filter(b =>
    b.properties.render_height > 5
  );

  // Sélection aléatoire avec seed pour reproductibilité
  const selected = shuffleSeeded(tallEnough, 42).slice(0, count);

  // Assignation des couleurs
  const colors = ['#F97316', '#0EA5E9', '#22C55E', '#A78BFA'];
  return selected.map((building, i) => ({
    id: building.id,
    color: colors[i % colors.length]
  }));
}
```

**Application des couleurs** :

Utiliser une expression MapLibre pour colorer dynamiquement :

```javascript
'fill-extrusion-color': [
  'case',
  ['in', ['get', 'osm_id'], ['literal', orangeIds]], '#F97316',
  ['in', ['get', 'osm_id'], ['literal', skyIds]], '#0EA5E9',
  ['in', ['get', 'osm_id'], ['literal', greenIds]], '#22C55E',
  ['in', ['get', 'osm_id'], ['literal', purpleIds]], '#A78BFA',
  '#FCFCFA'  // couleur par défaut (blanc cassé)
]
```

**Note** : si `osm_id` n'est pas accessible directement dans la source vectorielle (selon le tileset), utiliser des combinaisons de propriétés comme la position et hauteur pour identifier de manière unique.

### Seed pour reproductibilité

Utiliser un seed fixe (`42`) pour que le même set de bâtiments colorés apparaisse à chaque chargement. C'est mieux pour :
- Cohérence visuelle (les utilisateurs revisitant la page voient la même chose)
- Tests A/B sur des combinaisons
- Debug

---

## 7. Timeline GSAP scroll-driven

### Setup

```tsx
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  if (!mapRef.current || !phoneRef.current) return;

  const map = mapRef.current;  // instance MapLibre
  const phone = phoneRef.current;

  // État intermédiaire pour pouvoir interpoler les valeurs MapLibre
  const mapState = {
    pitch: 60,
    bearing: -17,
    zoom: 16,
    opacity: 1
  };

  const phoneState = {
    y: -200,   // hors viewport
    scale: 0.7,
    opacity: 0
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-animation-spacer',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    }
  });

  // === PHASE 2 : 25-50% (50-100vh scroll) ===
  tl.to(mapState, {
    pitch: 0,
    bearing: 0,
    zoom: 15.7,
    ease: 'power2.inOut',
    onUpdate: () => {
      map.setPitch(mapState.pitch);
      map.setBearing(mapState.bearing);
      map.setZoom(mapState.zoom);
    }
  }, 0.25);

  // === PHASE 3 : 50-75% (100-150vh) ===
  tl.to(phoneState, {
    y: 0,
    scale: 0.9,
    opacity: 0.85,
    ease: 'expo.out',
    onUpdate: () => {
      phone.setPosition(phoneState.y);
      phone.setScale(phoneState.scale);
      phone.setOpacity(phoneState.opacity);
    }
  }, 0.5);

  tl.to(mapState, {
    opacity: 0.85,
    ease: 'power2.inOut',
    onUpdate: () => {
      const canvas = map.getCanvas();
      canvas.style.opacity = mapState.opacity;
      canvas.style.filter = `blur(${(1 - mapState.opacity) * 13}px)`;
    }
  }, 0.5);

  // === PHASE 4 : 75-100% (150-200vh) ===
  tl.call(() => {
    triggerMapCapture();  // capture la frame MapLibre
  }, [], 0.75);

  tl.to(mapState, {
    opacity: 0,
    ease: 'power2.in',
    onUpdate: () => {
      const canvas = map.getCanvas();
      canvas.style.opacity = mapState.opacity;
    }
  }, 0.75);

  tl.to(phoneState, {
    scale: 1.0,
    opacity: 1.0,
    ease: 'expo.out',
    onUpdate: () => {
      phone.setScale(phoneState.scale);
      phone.setOpacity(phoneState.opacity);
    }
  }, 0.75);

}, { dependencies: [] });
```

### Notes importantes

- **`scrub: 1.2`** : smoothing en secondes. 1.2s donne un feel premium sans être en retard.
- **MapLibre n'est pas tweenable directement** : on tween un objet JS et on appelle `setPitch/setBearing/setZoom` dans `onUpdate`.
- **`map.setPitch()` peut être coûteux** s'il est appelé 60fois/sec sur un mouvement complexe. À tester en perf. Si c'est un souci, on peut le throttler à 30fps.
- **Synchronisation Lenis** : si Lenis est utilisé, brancher `lenis.on('scroll', ScrollTrigger.update)`.

---

## 8. Transition map → téléphone

### Le moment magique

À 150vh (75% de la timeline), on capture une snapshot du canvas MapLibre. Cette image devient la texture affichée sur l'écran du téléphone, créant un raccord visuel parfait.

### Mécanique technique

**Étape 1 — Capture**

```tsx
function captureMapCanvas(map) {
  const canvas = map.getCanvas();

  // Méthode 1 : data URL (simple mais lourde en mémoire)
  const dataUrl = canvas.toDataURL('image/png');

  // Méthode 2 : transfer direct vers Three.js texture (optimal)
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
```

**Étape 2 — Application sur l'écran du téléphone**

Le composant téléphone existant doit pouvoir recevoir cette texture et l'afficher sur le plane de son écran, avec une opacité animée.

**Étape 3 — Crossfade vers la vraie map de l'app**

Une fois la texture en place (à ~175vh), on commence à crossfade vers l'interface Doortrack normale (avec ses pins, UI, etc.).

### Pourquoi ça marche visuellement

Au moment où la map MapLibre disparaît, l'utilisateur a déjà vu la même image sur l'écran du téléphone. Son cerveau interprète ça comme **continuité** : "la map est rentrée dans le téléphone". C'est l'effet d'aspiration sans aspiration shader complexe.

### Si la capture est trop lourde

`canvas.toDataURL('image/png')` peut bloquer ~50-200ms selon la taille du canvas. Optimisations :

- Réduire la résolution de capture (downscale à 512x512 avant capture)
- Utiliser `CanvasTexture` direct de Three.js (pas de sérialisation PNG)
- Faire la capture en `requestIdleCallback` pendant Phase 3 (avant qu'on en ait besoin)

---

## 9. Téléphone existant — intégration

### État actuel

Le composant téléphone est déjà en place dans le projet. Il affiche une map qui scroll selon le scroll natif de la page. Ce composant doit :

1. Pouvoir être **piloté en position/scale/opacity** par GSAP pendant les phases 3-4
2. Recevoir une **texture externe** à afficher sur son écran pendant la transition
3. **Reprendre son comportement normal** après 200vh

### Props à ajouter au composant existant

```tsx
interface PhoneProps {
  // ... props existantes
  introMode?: boolean;
  externalScreenTexture?: THREE.Texture | null;
  externalScreenOpacity?: number;
  introPosition?: { y: number };
  introScale?: number;
  introOpacity?: number;
}
```

### Comportement selon `introMode`

**`introMode === true` (pendant phases 1-4)** :
- Le téléphone respecte `introPosition`, `introScale`, `introOpacity`
- Sur l'écran, on affiche `externalScreenTexture` par-dessus la map normale, avec `externalScreenOpacity`
- La map dans l'écran est figée (pas de scroll)

**`introMode === false` (après 200vh)** :
- Comportement normal du composant
- La map dans l'écran reprend son scroll
- Toutes les props intro sont ignorées

### Important — ne pas casser l'existant

L'ajout des props doit être **rétrocompatible**. Si on n'utilise pas ces props, le téléphone se comporte exactement comme avant.

---

## 10. Performance & contraintes

### Targets

- **60fps stable** sur desktop moyen pendant les 4 phases
- **LCP < 3s** malgré le chargement de MapLibre + tuiles
- **First tiles loaded < 1.5s** sur 4G

### Optimisations à appliquer

**MapLibre** :
- Pas d'antialias supplémentaire au-delà du natif
- `interactive: false` (évite le coût de gestion des events)
- Style minimaliste (peu de couches → peu de draw calls)
- Préchargement des tuiles : lancer la map en background dès le `_app` ou layout, pour avoir les tuiles prêtes quand le hero s'affiche

**Capture canvas (phase 4)** :
- Une seule capture, pas de capture continue
- Downscale à 1024x1024 avant capture si la map fait du 4K
- Garbage collect la dataURL après transfert vers texture

**Three.js (téléphone)** :
- Pas d'impact spécifique de cette animation (le téléphone existe déjà)

**Bundle size** :
- `maplibre-gl` : ~280kb gzipped (lib lourde mais raisonnable)
- `react-map-gl` : ~30kb gzipped
- **Total ajouté** : ~310kb gzipped

C'est conséquent. Si bundle size critique, considérer le lazy load de la lib uniquement pour la home page :

```tsx
const DoortrackMap = dynamic(() => import('./DoortrackMap'), {
  ssr: false,
  loading: () => <MapPlaceholder />
});
```

### Monitoring

En dev, afficher fps + tile load times dans un coin de l'écran via un overlay dev-only.

---

## 11. Anti-patterns & pièges

### À éviter absolument

❌ **`interactive: true`** : laisser l'utilisateur scroll/pan/zoom sur la map = chaos avec GSAP

❌ **Modifier la map dans `useFrame` Three.js** : doit être piloté par GSAP uniquement, sinon désync

❌ **Capture canvas dans la timeline GSAP scrub** : la capture est coûteuse, doit être appelée **une seule fois** via `tl.call()` à 150vh

❌ **Pitch > 60** : MapLibre ne le supporte pas en standard. Si besoin extrême, c'est Three.js custom layer.

❌ **Trop de bâtiments colorés** : 15 max. Au-delà, on perd le contraste qui les rend signature.

❌ **Labels visibles en phase 1-2** : casse complètement le look "plan d'architecte premium"

❌ **Style "bright" OpenFreeMap par défaut** : ressemble à Google Maps, pas signature. Toujours customiser.

❌ **Oublier l'attribution OSM** : obligation légale, sinon risque de prendre une lettre. Petit texte discret en bas à droite suffit.

### Pièges techniques

⚠️ **`preserveDrawingBuffer: true`** : indispensable pour la capture, mais induit un léger coût perf. Acceptable pour notre cas.

⚠️ **Tuiles non chargées au start** : si l'utilisateur arrive et que les tuiles ne sont pas encore là, l'animation démarre sur une map blanche. Solution : afficher un loader pendant le `map.on('load')` et ne démarrer l'animation qu'après.

⚠️ **Différence rendering entre navigateurs** : Safari rend MapLibre légèrement différemment de Chrome. Tester sur les deux.

⚠️ **Memory leak sur unmount** : disposer la map avec `map.remove()` dans le cleanup du composant. Sinon en dev avec hot reload, fuite progressive.

⚠️ **`queryRenderedFeatures` au mauvais moment** : doit être appelé après `map.on('load')` ET après que les tuiles de la zone soient chargées. Sinon retourne un array vide.

⚠️ **Z-fighting des extrusions** : les bâtiments très bas (< 3m) peuvent avoir des artefacts. Filtrer pour ne pas les afficher en 3D si problème.

⚠️ **Hauteurs OSM manquantes** : certains bâtiments OSM n'ont pas de `render_height`. Définir une hauteur par défaut (10m) via expression `coalesce`.

---

## 12. Inspirations

### Pour la map stylisée

- **mapbox.com** — galerie de styles custom, voir leurs studios
- **stripe.com (anciennes versions)** — fond cartographique stylisé
- **figma.com/community** — chercher "map style" pour des inspirations
- **maputnik.github.io** — éditeur visuel de styles MapLibre, parfait pour expérimenter

### Pour le scroll-driven camera 3D

- **mapbox.com/showcase** — démos officielles avec scrollytelling
- **rauno.me/craft/scroll** — articles techniques sur scroll-driven storytelling
- **awwwards.com** — chercher "map" ou "geographic" dans les sites primés

### Pour le moment de transition map → objet

- **stripe.com/payments** — graphiques qui fusionnent dans dashboards
- **revolut.com** — anciennes pages avec animations carte → app

### Pour l'esthétique cartographique "plan d'architecte"

- **citymapper.com (interface)** — minimaliste, ronde et premium
- **felt.com** — outil de cartographie avec style très épuré
- Plans cadastraux des sites des **Hôtels de ville** français — direction esthétique exacte

---

## Implémentation — checklist d'avancement

- [ ] `maplibre-gl` et `react-map-gl` installés
- [ ] Style custom `doortrack-map-style.ts` créé
- [ ] `DoortrackMap.tsx` affiche le quartier de Nancy en isométrique
- [ ] `interactive: false` et `preserveDrawingBuffer: true` configurés
- [ ] Attribution OSM visible en bas à droite (discrète mais présente)
- [ ] Bâtiments colorés aléatoires fonctionnent (15 colorés)
- [ ] Mouse parallax + auto-rotation Phase 1 OK
- [ ] Transition Phase 2 (pitch 60→0, bearing -17→0) fluide
- [ ] `PhoneRig.tsx` wrap le téléphone existant avec props `introMode`
- [ ] Téléphone monte et fade-in en Phase 3
- [ ] Capture canvas MapLibre à 150vh OK
- [ ] Texture transférée à l'écran du téléphone
- [ ] Crossfade map MapLibre → écran téléphone fluide à 175vh
- [ ] Après 200vh, téléphone reprend son comportement normal
- [ ] 60fps maintenu pendant toute l'animation
- [ ] Pas de memory leak en dev (hot reload propre)
- [ ] Tuiles préchargées (pas de map blanche au démarrage)
- [ ] Build production fonctionne

---

*Doortrack — ACTE 0 — Le territoire devient outil.*