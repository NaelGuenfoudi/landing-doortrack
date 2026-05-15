# Doortrack — Animation d'ouverture Hero (ACTE 0) — Version MapLibre

> Spec technique de l'animation cinématique d'entrée basée sur **MapLibre GL JS** avec un quartier réel de Nancy. La carte plonge en vue top-down au scroll, puis se fait aspirer dans le téléphone 3D existant.
> Document à placer dans `design-system/HERO_ANIMATION.md`.

**Version** 2.0 (refonte MapLibre) · **Statut** Brief validé, prêt pour développement
**Dépendance** Ce document s'articule avec `design-system/MASTER.md` (spec globale)
**Note** Remplace l'ancienne approche Three.js procédurale.

---

## Sommaire

1. [Vision & narratif](#1-vision--narratif)
2. [Storyboard détaillé](#2-storyboard-détaillé)
3. [Architecture technique](#3-architecture-technique)
4. [Configuration MapLibre](#4-configuration-maplibre)
5. [Style custom Doortrack](#5-style-custom-doortrack)
6. [Bâtiments colorés aléatoires](#6-bâtiments-colorés-aléatoires)
7. [Téléphone existant — intégration](#7-téléphone-existant--intégration)
8. [Timeline GSAP scroll-driven](#8-timeline-gsap-scroll-driven)
9. [Transition finale (Option A)](#9-transition-finale-option-a)
10. [Performance & contraintes](#10-performance--contraintes)
11. [Anti-patterns & pièges](#11-anti-patterns--pièges)
12. [Inspirations](#12-inspirations)

---

## 1. Vision & narratif

### Le narratif

**"Le territoire réel entre dans votre poche."**

L'animation montre un vrai quartier de Nancy en 3D isométrique, plonge progressivement vers une vue cadastrale top-down, puis cette carte se fait aspirer dans le téléphone Doortrack. Le wow effect vient du fait que le territoire montré n'est pas inventé — c'est une vraie ville, vraies rues, vrais bâtiments. C'est exactement ce que voit un commercial qui va prospecter.

### Pourquoi MapLibre plutôt qu'un modèle 3D

- Un modèle 3D générique (procédural ou Sketchfab) ne raconte rien de Doortrack
- Une vraie carte raconte immédiatement le produit : "voici un quartier, voici les bâtiments, voici votre terrain"
- La transition vers la map du téléphone devient évidente (continuité géographique parfaite)
- Bonus marketing : on peut faire varier la ville montrée selon la cible
- Pas de dépendance à un asset 3D introuvable ou décevant

### Le ressenti

**Cinématique premium type Apple Vision Pro / Linear Method.** Mouvements amples, easings doux. Le mot-clé : **majestueux et concret**.

### Zone choisie

**Nancy, Place Stanislas et alentours** (centre historique).
Coordonnées centre : **`[6.1837, 48.6937]`** (longitude, latitude — format MapLibre)

Cette zone offre :
- Bâtiments denses au centre (façades classées, ressort bien en 3D)
- Quartier résidentiel autour (typique terrain de prospection)
- Échelle parfaite pour zoom 16
- Reconnaissable sans être un cliché parisien

---

## 2. Storyboard détaillé

L'animation se déroule sur **200vh** (2 écrans de scroll), découpés en 4 phases.

### PHASE 1 — Contemplation isométrique (0vh → 50vh)

**Visuel** : Vue 3D inclinée du quartier Place Stanislas. Bâtiments extrudés en blanc, 15 colorés (orange, sky, green, purple) répartis aléatoirement. Style monochrome architectural type maquette.

**Camera state** :
- `center: [6.1837, 48.6937]`
- `zoom: 16`
- `pitch: 60` (max autorisé MapLibre — vue très inclinée)
- `bearing: -20` (légère rotation pour effet diorama)

**Comportement** :
- Légère **auto-rotation continue du bearing** (~0.05°/frame) pour donner vie à la scène
- **Mouse parallax** sur le bearing : ±5° selon position X souris, ±3° sur pitch selon position Y
- Interactions utilisateur **désactivées** (`interactive: false`) — c'est purement décoratif

**Téléphone** : invisible (en dessous du viewport)

---

### PHASE 2 — Élévation top-down (50vh → 100vh)

**Visuel** : La caméra se redresse progressivement. À 100vh, vue parfaitement plongeante, les bâtiments perdent leur volume visuel, on voit le quartier comme un plan cadastral.

**Camera transition (scrubbée sur scroll 50-100vh)** :
- `pitch` : 60 → 0
- `bearing` : -20 → 0 (la carte se redresse)
- `zoom` : 16 → 15.5 (légèrement zoomé out pour englober plus)
- `center` : reste fixe

**Comportement** :
- Mouse parallax atténué progressivement (×1 → ×0)
- Auto-rotation désactivée dès le début de cette phase
- À la fin : vue cadastrale parfaite, immobile

**Téléphone** : commence à monter discrètement depuis le bas (Three.js, hors MapLibre)

**Easing** : `power2.inOut` sur tous les paramètres caméra

---

### PHASE 3 — Apparition du téléphone (100vh → 150vh)

**Visuel** : La map reste en top-down. Le téléphone Three.js monte du bas et apparaît centré, semi-transparent, par-dessus la map.

**Map MapLibre** : statique, légère atténuation
- `opacity` du canvas : 1 → 0.85
- Aucune modification de caméra MapLibre durant cette phase

**Téléphone Three.js** :
- `position.y` : -8 → 0
- `position.z` : -3 → -1
- `scale` : 0.6 → 0.8
- Matériau du téléphone : `opacity` 0 → 0.6

**Effets ambiants** :
- Une lueur orange diffuse apparaît derrière le téléphone (CSS radial-gradient)
- Le mouse parallax est complètement désactivé

---

### PHASE 4 — Aspiration & continuité visuelle (150vh → 200vh)

**Visuel** : La map MapLibre fade out pendant que le téléphone devient pleinement opaque. La continuité visuelle est assurée par le fait que l'écran du téléphone affiche la même zone géographique (même coordonnées Nancy, mais en interface Doortrack).

**Map MapLibre** :
- `opacity` du canvas : 0.85 → 0 (fade out total)
- Aucune transformation supplémentaire (pas de scale, pas de translate)

**Téléphone Three.js** :
- `scale` : 0.8 → 1.0 (taille finale)
- `position.y` : 0 → position finale
- Matériau : `opacity` 0.6 → 1.0
- Écran : commence à afficher la map Doortrack (interface app)

**Camera Three.js** :
- `fov` : 40 → 30 (zoom in subtil pour focus sur le téléphone)

**Transition de continuité (Option A — voir section 9)** :
À 150vh, on capture une frame de MapLibre via `canvas.toDataURL()`. Cette texture est appliquée temporairement sur l'écran du téléphone, puis crossfade vers la vraie map Doortrack.

**Easings** :
- Map fade : `power2.in`
- Téléphone : `expo.out`

**Fin de phase 4** : À 200vh, MapLibre est invisible (opacity 0), le téléphone est en position finale avec sa map Doortrack qui scroll selon le scroll continu de la page.

---

## 3. Architecture technique

### Composants à créer

```
src/components/scene/hero-animation/
├── HeroOpeningScene.tsx       # orchestrateur principal
├── NancyMapLayer.tsx           # MapLibre + style custom + bâtiments colorés
├── PhoneRig.tsx                # wrapper du téléphone Three.js existant
├── ScrollChoreography.tsx      # timeline GSAP scrubbée
├── TransitionBridge.tsx        # gère la continuité map → écran téléphone
└── styles/
    └── doortrack-map-style.json  # style custom Doortrack pour MapLibre
```

### Stack

- `maplibre-gl` (^5.x) — moteur de la carte
- `react-map-gl/maplibre` — wrapper React idiomatique
- `gsap` + `@gsap/react` + `ScrollTrigger` — déjà installés
- `@react-three/fiber` + `drei` — déjà installés (téléphone)

### Hiérarchie React

```tsx
<HeroOpeningScene>
  {/* Layer 1 : MapLibre, fixed background, z-0 */}
  <NancyMapLayer ref={mapRef} />

  {/* Layer 2 : Three.js téléphone, fixed, z-10 */}
  <Canvas style={{ position: 'fixed', inset: 0, zIndex: 10 }}>
    <PhoneRig ref={phoneRef} />
  </Canvas>

  {/* Layer 3 : choreography (hook only, no render) */}
  <ScrollChoreography mapRef={mapRef} phoneRef={phoneRef} />
  <TransitionBridge mapRef={mapRef} phoneRef={phoneRef} />
</HeroOpeningScene>
```

### Layer de scroll

```tsx
// page.tsx
<>
  <HeroOpeningScene />                  {/* fixed, full screen */}
  <main className="relative z-20">
    <div id="hero-spacer" className="h-[200vh]" />  {/* donne du scroll */}
    <Hero />                              {/* commence à 200vh */}
    {/* reste de la landing */}
  </main>
</>
```

---

## 4. Configuration MapLibre

### Setup initial

```ts
const map = new maplibregl.Map({
  container: 'map',
  style: '/styles/doortrack-map-style.json',
  center: [6.1837, 48.6937],
  zoom: 16,
  pitch: 60,
  bearing: -20,
  attributionControl: false,
  interactive: false,
  canvasContextAttributes: {
    preserveDrawingBuffer: true,  // nécessaire pour capture en phase 4
    antialias: true,
  }
});
```

### Source de tuiles

**OpenFreeMap** — gratuit, sans clé API, sans limites, basé OSM.

```json
"sources": {
  "openfreemap": {
    "type": "vector",
    "url": "https://tiles.openfreemap.org/planet"
  }
}
```

Alternative si besoin de meilleure performance EU : **MapTiler** avec free tier 100k req/mois.

### Attribution

Discrète dans le footer :
> Carte © OpenStreetMap contributors via OpenFreeMap

---

## 5. Style custom Doortrack

Fichier à créer : `public/styles/doortrack-map-style.json`

### Caractéristiques

- **Fond** : warm off-white `#FAFAF7`
- **Bâtiments** : blanc `#FCFCFA` extrudés en 3D
- **Routes** : très subtiles, gris clair `#E5E5E1`
- **Espaces verts** : très atténués
- **Labels** : **complètement supprimés**
- **POIs** : supprimés

### Structure JSON (extrait)

```json
{
  "version": 8,
  "name": "Doortrack Architectural",
  "sources": {
    "openfreemap": {
      "type": "vector",
      "url": "https://tiles.openfreemap.org/planet"
    }
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": { "background-color": "#FAFAF7" }
    },
    {
      "id": "roads-base",
      "type": "line",
      "source": "openfreemap",
      "source-layer": "transportation",
      "paint": {
        "line-color": "#E5E5E1",
        "line-width": [
          "interpolate", ["linear"], ["zoom"],
          12, 0.5, 16, 2, 18, 4
        ]
      }
    },
    {
      "id": "buildings-3d",
      "type": "fill-extrusion",
      "source": "openfreemap",
      "source-layer": "building",
      "minzoom": 14,
      "paint": {
        "fill-extrusion-color": [
          "case",
          ["boolean", ["feature-state", "highlight"], false],
          ["coalesce", ["feature-state", "color"], "#FCFCFA"],
          "#FCFCFA"
        ],
        "fill-extrusion-height": [
          "interpolate", ["linear"], ["zoom"],
          14, 0,
          16, ["coalesce", ["get", "render_height"], 8]
        ],
        "fill-extrusion-base": 0,
        "fill-extrusion-opacity": 0.95,
        "fill-extrusion-vertical-gradient": true
      }
    }
  ]
}
```

### Référence

Voir `https://maplibre.org/maplibre-style-spec/` pour la spec complète.

---

## 6. Bâtiments colorés aléatoires

### Approche

Au chargement de la map, récupérer les features visibles de la couche `building`, en sélectionner **15 aléatoirement parmi les plus volumineux**, et leur appliquer une couleur via `feature-state`.

### Méthode

```ts
map.on('load', () => {
  map.once('idle', () => {
    const buildings = map.queryRenderedFeatures({ layers: ['buildings-3d'] });

    // Trier par taille
    const sorted = [...buildings].sort((a, b) =>
      (b.properties?.render_height ?? 0) - (a.properties?.render_height ?? 0)
    );

    // Prendre les 50 plus grands, en piocher 15 avec seed
    const candidates = sorted.slice(0, 50);
    const seededRng = createSeededRandom(42);
    const shuffled = [...candidates].sort(() => seededRng() - 0.5);
    const selected = shuffled.slice(0, 15);

    const colors = [
      ...Array(4).fill('#F97316'),  // orange
      ...Array(4).fill('#0EA5E9'),  // sky
      ...Array(4).fill('#22C55E'),  // green
      ...Array(3).fill('#A78BFA'),  // purple
    ];

    selected.forEach((building, i) => {
      if (!building.id) return;
      map.setFeatureState(
        { source: 'openfreemap', sourceLayer: 'building', id: building.id },
        { highlight: true, color: colors[i] }
      );
    });
  });
});

function createSeededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
```

### Note importante

`queryRenderedFeatures` ne retourne que les features visibles dans le viewport actuel. S'assurer que la caméra est en position Phase 1 AVANT la sélection.

---

## 7. Téléphone existant — intégration

### Prop à ajouter au composant téléphone existant

```tsx
interface PhoneProps {
  // ... props existantes
  introMode?: boolean;
  introOpacity?: number;
  introScale?: number;
  introScreenTexture?: THREE.Texture | null;
  introScreenBlend?: number; // 0 = texture map, 1 = UI normale
}
```

Quand `introMode === true` :
- Le matériau du téléphone accepte `opacity < 1`
- La map dans l'écran est figée
- Le composant ne déclenche pas son comportement scroll habituel

### PhoneRig.tsx — wrapper de pilotage

```tsx
import { ExistingPhoneComponent } from '@/components/.../Phone';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Group } from 'three';

export const PhoneRig = forwardRef<Group, {}>((_, ref) => {
  const internalRef = useRef<Group>(null);
  useImperativeHandle(ref, () => internalRef.current!);

  return (
    <group ref={internalRef}>
      <ExistingPhoneComponent introMode={true} />
    </group>
  );
});
```

---

## 8. Timeline GSAP scroll-driven

### Setup

```tsx
useGSAP(() => {
  if (!mapRef.current || !phoneRef.current) return;

  const map = mapRef.current.getMap();
  const phone = phoneRef.current;

  // Proxy object pour animer la caméra MapLibre
  const cameraState = {
    pitch: 60,
    bearing: -20,
    zoom: 16,
  };

  const updateMapCamera = () => {
    map.jumpTo({
      pitch: cameraState.pitch,
      bearing: cameraState.bearing,
      zoom: cameraState.zoom,
    });
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-spacer',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    }
  });

  // PHASE 2 : 25-50% — élévation top-down
  tl.to(cameraState, {
    pitch: 0,
    bearing: 0,
    zoom: 15.5,
    ease: 'power2.inOut',
    onUpdate: updateMapCamera,
  }, 0.25);

  // PHASE 3 : 50-75% — apparition téléphone
  tl.to(phone.position, { y: 0, z: -1, ease: 'power2.out' }, 0.5);
  tl.to(phone.scale, { x: 0.8, y: 0.8, z: 0.8, ease: 'power2.out' }, 0.5);
  tl.to(phoneMaterial, { opacity: 0.6, ease: 'power2.out' }, 0.5);
  tl.to(mapCanvas.style, { opacity: 0.85, ease: 'power2.out' }, 0.5);

  // PHASE 4 : 75-100% — aspiration
  tl.to(mapCanvas.style, { opacity: 0, ease: 'power2.in' }, 0.75);
  tl.to(phone.scale, { x: 1, y: 1, z: 1, ease: 'expo.out' }, 0.75);
  tl.to(phoneMaterial, { opacity: 1, ease: 'power2.in' }, 0.75);

  // Callback à 95% pour la transition Option A
  tl.call(() => triggerMapToPhoneScreenTransition(), [], 0.95);
});
```

### Points importants

- **MapLibre n'expose pas sa caméra comme un objet GSAP-friendly** : utilisation d'un proxy `cameraState`
- **`scrub: 1.2`** : smoothing optimal pour effet premium
- **Pas de `pin: true`** : scroll natif conservé
- **Sync Lenis** si présent : `lenis.on('scroll', ScrollTrigger.update)`

### Mouse parallax Phase 1

```tsx
useEffect(() => {
  const onMouseMove = (e: MouseEvent) => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.5) return;

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    mapRef.current.getMap().jumpTo({
      bearing: -20 + x * 10,
      pitch: Math.max(0, Math.min(60, 60 + y * 6)),
    });
  };
  window.addEventListener('mousemove', onMouseMove);
  return () => window.removeEventListener('mousemove', onMouseMove);
}, []);
```

---

## 9. Transition finale (Option A — continuité visuelle)

### Mécanique

À 150vh, on capture la frame MapLibre en image et on l'applique sur l'écran du téléphone. Puis crossfade vers l'UI Doortrack.

### Code de capture

```tsx
const captureMapAsTexture = (): THREE.Texture => {
  const mapCanvas = mapRef.current.getCanvas();
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = 512;
  tempCanvas.height = 1024;
  const ctx = tempCanvas.getContext('2d');
  ctx?.drawImage(mapCanvas, 0, 0, 512, 1024);

  const texture = new THREE.CanvasTexture(tempCanvas);
  texture.needsUpdate = true;
  return texture;
};
```

**Note critique** : la map DOIT être initialisée avec `preserveDrawingBuffer: true` (voir section 4) sinon la capture retourne un canvas vide.

### Shader simple pour le blend

```glsl
uniform sampler2D introTexture;
uniform sampler2D doortrackUI;
uniform float blend;
varying vec2 vUv;

void main() {
  vec4 mapImg = texture2D(introTexture, vUv);
  vec4 uiImg = texture2D(doortrackUI, vUv);
  gl_FragColor = mix(mapImg, uiImg, blend);
}
```

### Application

```tsx
// À 95% timeline (~190vh)
const capturedTexture = captureMapAsTexture();
phoneScreenMaterial.uniforms.introTexture.value = capturedTexture;
phoneScreenMaterial.uniforms.blend.value = 0;

gsap.to(phoneScreenMaterial.uniforms.blend, {
  value: 1,
  duration: 1.0,
  ease: 'power2.inOut',
});
```

### Après 200vh

- `introMode` passe à `false`
- Le téléphone retrouve son comportement normal
- MapLibre canvas reste à `opacity: 0`

---

## 10. Performance & contraintes

### Targets

- **60fps** desktop moyen
- **45fps** desktop ancien
- **40fps** tablette

### Optimisations MapLibre

- `interactive: false` désactive les handlers internes
- `preserveDrawingBuffer: true` obligatoire mais coûteux — l'activer dès le mount
- Ne pas zoom/dézoom pendant l'animation (tuiles déjà chargées)
- Pré-charger les tuiles dès le mount

### Optimisations Three.js (téléphone)

- DPR cap à 2 : `dpr={[1, 2]}`
- Pas de shadow maps haute résolution
- `frameloop="demand"` après 200vh

### Bundle weight

- `maplibre-gl` : ~250kb gzipped
- `react-map-gl/maplibre` : ~10kb wrapper
- Le reste déjà chargé

**Impact** : first-load JS passe de ~150kb à ~410kb. Acceptable pour landing immersive.

### Critères d'acceptation perf

- [ ] 60fps Phase 1 stable
- [ ] 50fps minimum Phase 2
- [ ] LCP < 3s sur 4G
- [ ] Pas de jank au scroll
- [ ] Tuiles toutes chargées avant le scroll

---

## 11. Anti-patterns & pièges

### À éviter absolument

❌ **`interactive: true`** : l'utilisateur pourrait drag/zoom/rotate. Tout désactiver.

❌ **`flyTo`** pour la caméra : animation autonome incompatible avec scroll-driven. Toujours `jumpTo` via GSAP.

❌ **Labels et POIs** : gâche l'esthétique monochrome. Style custom rigoureux.

❌ **Oublier `preserveDrawingBuffer: true`** : `toDataURL` retourne canvas vide.

❌ **Capturer la map à chaque frame** : `toDataURL` est coûteux, à faire UNE FOIS.

❌ **Démonter MapLibre avant la fin** : `opacity: 0` suffit.

❌ **Hardcoder Nancy partout** : centraliser dans constante `NANCY_CENTER = [6.1837, 48.6937]`.

### Pièges techniques

⚠️ **`queryRenderedFeatures` vide au mount** : features disponibles seulement après `idle` event.

⚠️ **Feature IDs OSM string vs number** : gérer les deux dans `setFeatureState`.

⚠️ **Sync GSAP + Lenis** : `lenis.on('scroll', ScrollTrigger.update)` indispensable.

⚠️ **`pitch: 0` après `pitch: 60` avec bearing non nul** : peut introduire un saut, tester et ajuster.

⚠️ **CanvasTexture après capture** : `texture.needsUpdate = true` obligatoire.

⚠️ **Cleanup au unmount** : `map.remove()` pour libérer WebGL.

⚠️ **Style custom local** : servir depuis `/public/styles/`, référence relative.

⚠️ **Attribution OSM obligatoire** : footer minimum.

---

## 12. Inspirations

### Cinematic map storytelling

- **Mapbox scrollytelling examples** : `docs.mapbox.com/help/tutorials/scrollytelling/`
- **maplibre.org/maplibre-gl-js/docs/examples/** — exemples "animate camera"
- **The Pudding** — articles avec cartographie scroll-driven
- **NYT The Upshot** — visualisations narratives

### Esthétique architecture monochrome

- **Stamen Toner** — référence du style monochrome
- **Mapzen Refill** — minimaliste épuré
- Recherche "minimalist white architectural map style"

### Transition map → device

- **stripe.com/payments** — graphiques fusionnant dans dashboards
- **linear.app** — absorption d'éléments dans UI
- **revolut.com** anciennes versions

### Scroll choreography

- **rauno.me/craft** — explications techniques
- **gsap.com/showcase** — galerie officielle avec source code

---

## Implémentation — checklist

- [ ] MapLibre installé, NancyMapLayer fonctionne avec OpenFreeMap
- [ ] Style custom monochrome OK
- [ ] Quartier Place Stanislas visible en isométrique
- [ ] 15 bâtiments colorés placés aléatoirement
- [ ] Auto-rotation + mouse parallax Phase 1
- [ ] Timeline GSAP scrubbée fonctionne
- [ ] Phase 2 : transition vers top-down sans saut
- [ ] Phase 3 : téléphone monte et apparaît
- [ ] Phase 4 : MapLibre fade out, téléphone fully opaque
- [ ] Capture frame MapLibre et application sur écran téléphone
- [ ] Crossfade map capturée → UI Doortrack
- [ ] Après 200vh, téléphone reprend comportement normal
- [ ] 60fps maintenu
- [ ] Pas de memory leak hot reload
- [ ] Attribution OSM présente

---

*Doortrack — ACTE 0 — Le territoire devient outil.*