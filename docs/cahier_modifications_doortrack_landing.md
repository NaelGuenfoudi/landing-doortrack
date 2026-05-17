# Cahier de modifications — Landing page DoorTrack

**Document à transmettre à un développeur, intégrateur front-end ou intelligence artificielle de génération de code.**  
**Version :** 1.0  
**Objet :** Refonte ciblée de la landing page DoorTrack en cohérence avec la direction artistique fournie.

---

## 1. Résumé du besoin

La landing page DoorTrack existe déjà avec une direction forte : carte en arrière-plan, téléphone central, sections de fonctionnalités et logique de démonstration produit. Le problème actuel n’est pas l’absence d’idée visuelle. Le problème est la hiérarchie : certains éléments parasitent la lecture, le téléphone est trop grand, le fond reste trop détaillé dans les sections basses, et les encadrés de droite ne vendent pas assez clairement les bénéfices métier de l’application.

L’objectif de ce chantier est donc de :

1. conserver l’effet immersif du header ;
2. rendre le reste de la page beaucoup plus lisible ;
3. mettre l’application au centre de l’attention ;
4. transformer les encadrés de droite en vrais arguments commerciaux ;
5. ajouter un formulaire de conversion clair en bas de page ;
6. respecter strictement la direction artistique DoorTrack : terrain, plan cadastral, carnet de route, papier chaud, sobriété premium.

---

## 2. Positionnement produit à comprendre avant développement

DoorTrack est une application de pilotage de prospection terrain, principalement pensée pour les équipes commerciales qui font du porte-à-porte ou de la prospection physique par secteur.

L’application doit permettre de :

- visualiser les secteurs à prospecter ;
- suivre les rues déjà couvertes ;
- qualifier rapidement les adresses ;
- suivre les prospects et leurs statuts ;
- piloter les objectifs quotidiens ;
- éviter les oublis de relance ;
- donner aux managers une vision claire de l’activité terrain.

La landing page ne doit pas ressembler à une landing SaaS générique. Elle doit évoquer :

- un carnet de route terrain ;
- une fiche de prospection ;
- un plan cadastral ;
- une journée commerciale réelle ;
- une application utile, pratique, sobre, sérieuse.

Le ton doit être professionnel, ancré, lisible et crédible. Pas futuriste. Pas gadget. Pas agence créative qui cherche à impressionner au détriment du produit.

---

## 3. Direction artistique obligatoire

### 3.1 Intention visuelle

La direction artistique DoorTrack repose sur un univers **grounded & warm** :

- fond sable chaud ;
- papier ivoire ;
- typographie propre ;
- traits fins façon plan cadastral ;
- orange terrain comme signal visuel ;
- teal profond comme ancre sérieuse ;
- fiches fonctionnelles proches d’un carnet de terrain ;
- animations discrètes et utiles.

### 3.2 Ce que la page doit faire ressentir

La page doit donner l’impression d’un outil créé pour des commerciaux qui travaillent réellement sur le terrain. Elle doit sembler :

- sérieuse ;
- utile ;
- opérationnelle ;
- premium par sa rigueur ;
- claire pour un manager ;
- crédible pour une équipe commerciale.

### 3.3 Ce qu’il faut éviter absolument

Ne pas utiliser :

- fond noir dominant ;
- glow néon ;
- halo bleu lumineux ;
- particules ;
- animations cyberpunk ;
- texte qui scramble ou se décode ;
- parallax excessif ;
- spring/bounce trop enfantin ;
- dashboard SaaS générique ;
- ville 3D photoréaliste qui tourne en boucle ;
- pop-ups décoratifs inutiles ;
- cartes trop blanches et froides ;
- bleu SaaS standard ;
- compteurs artificiels type “+50 clients heureux”.

### 3.4 Règle centrale

**Le header attire. Les sections fonctionnalités expliquent. Le formulaire convertit.**

Le fond ne doit jamais devenir plus important que l’application.

---

## 4. Tokens design obligatoires

Le développeur doit utiliser ces variables CSS comme base du système visuel.

```css
:root {
  /* Surfaces */
  --canvas: #F1ECE0;
  --canvas-2: #E8E1D1;
  --paper: #FAF7F0;
  --paper-2: #FFFFFF;
  --linen: #E2DAC6;

  /* Texte */
  --ink: #1F2A2E;
  --ink-soft: #3A4549;
  --muted: #786E5E;
  --muted-2: #9A9080;

  /* Lignes */
  --line: #DDD5C1;
  --line-2: #C8BFA8;

  /* Identité */
  --teal: #003F4C;
  --teal-2: #0A5566;
  --teal-ink: #BFD4D9;

  --terrain: #E25B14;
  --terrain-2: #C24A0E;
  --terrain-soft: #F8DFC9;
  --ember: #F3B179;

  /* Fonctionnelles */
  --success: #2E9461;
  --info: #3C7DAF;
  --plum: #6A4FB3;
  --danger: #B83020;

  /* Rare dark accent */
  --dark: #1F2A2E;
  --dark-soft: #2C383D;

  /* Radius */
  --r-sm: 8px;
  --r: 14px;
  --r-lg: 20px;
  --r-xl: 28px;

  /* Ombres */
  --shadow-1: 0 1px 2px rgba(31, 42, 46, 0.04);
  --shadow-2: 0 6px 24px -8px rgba(31, 42, 46, 0.10);
  --shadow-3: 0 24px 60px -20px rgba(31, 42, 46, 0.18);

  /* Typographies */
  --font: "Manrope", system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
}
```

### Règle couleur importante

Ne pas utiliser un orange générique type `#FF5A1F`.  
L’orange DoorTrack est :

```css
--terrain: #E25B14;
```

Il est plus chaud, plus sobre, plus cohérent avec l’univers terrain.

---

## 5. Typographies

### 5.1 Police principale

Utiliser **Manrope** pour :

- titres ;
- paragraphes ;
- boutons ;
- cards ;
- formulaire ;
- interface générale.

Import Google Fonts :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### 5.2 Police secondaire

Utiliser **JetBrains Mono** pour :

- numéros de section ;
- tags ;
- coordonnées ;
- labels techniques ;
- micro-données ;
- statuts ;
- éléments type plan / annotation.

### 5.3 Échelle typographique recommandée

```css
h1, h2, h3, h4 {
  font-family: var(--font);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--ink);
  text-wrap: balance;
}

.hero-title {
  font-size: clamp(48px, 8.4vw, 116px);
  line-height: 0.96;
  letter-spacing: -0.04em;
  font-weight: 700;
}

.feature-title {
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.feature-description {
  font-size: 16px;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 390px;
}

.section-kicker {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terrain);
  font-weight: 600;
}
```

---

## 6. Structure globale de la landing page

La landing doit être organisée en trois grands moments.

### 6.1 Header immersif

Rôle : capter l’attention et installer l’univers terrain.

Le header peut conserver :

- map 3D en perspective ;
- bâtiments en relief ;
- headline fort ;
- animation de caméra ;
- sensation de territoire à explorer.

Mais il doit rester dans la palette chaude : `--canvas`, `--paper`, `--terrain`, `--teal`.

### 6.2 Transition au scroll

Rôle : passer du décor spectaculaire à un support de lecture plus calme.

La caméra doit progressivement :

- s’élever ;
- réduire la perspective ;
- aplatir les bâtiments ;
- réduire les ombres ;
- transformer le fond en plan cadastral discret.

### 6.3 Sections fonctionnalités

Rôle : expliquer clairement les fonctionnalités et les bénéfices.

Chaque section doit suivre le même système :

- texte bénéfice à gauche ;
- téléphone au centre ;
- cards fonctionnelles à droite ;
- lignes d’annotation entre téléphone et cards ;
- fond cadastral très léger.

---

## 7. Modification 1 — Réduire le téléphone sticky central

### Problème actuel

Le téléphone est trop grand. Il est parfois coupé en haut ou en bas et il empêche les contenus latéraux de respirer.

### Action demandée

Réduire le téléphone d’environ **25%** sur les sections fonctionnalités.

### Position attendue

Le téléphone doit :

- rester au centre horizontal de la page ;
- être sticky pendant le scroll des sections fonctionnalités ;
- être centré verticalement ;
- ne jamais être masqué par le haut ou le bas du viewport ;
- rester l’élément central, sans écraser les textes.

### CSS recommandé

```css
.phone-sticky-wrapper {
  position: sticky;
  top: 12vh;
  height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.phone-mockup {
  width: clamp(230px, 22vw, 320px);
  max-height: 70vh;
  object-fit: contain;
  transform-origin: center center;
}

@media (max-width: 1366px) {
  .phone-mockup {
    width: clamp(220px, 21vw, 285px);
    max-height: 68vh;
  }
}
```

### Critères de validation

Sur un écran type laptop 1366 × 768 :

- le téléphone est visible entièrement ;
- il ne touche pas le haut de l’écran ;
- il ne touche pas le bas de l’écran ;
- le texte gauche est lisible ;
- les cards droite ne sont pas collées ;
- le téléphone reste dominant mais pas envahissant.

---

## 8. Modification 2 — Recomposer les sections fonctionnalités en grille 3 colonnes

### Action demandée

Toutes les sections bottom doivent adopter une grille en trois colonnes :

1. **Colonne gauche** : bénéfice commercial.
2. **Colonne centre** : téléphone sticky.
3. **Colonne droite** : fiches fonctionnelles reliées au téléphone.

### CSS recommandé

```css
.feature-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(240px, 0.75fr) minmax(320px, 1fr);
  column-gap: clamp(48px, 5vw, 88px);
  align-items: center;
  padding: 12vh clamp(48px, 6vw, 88px);
  position: relative;
}

.feature-left {
  max-width: 430px;
  z-index: 6;
}

.feature-center {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.feature-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 360px;
  z-index: 6;
}
```

### Règle de lecture

L’utilisateur doit comprendre la section dans cet ordre :

1. **Pourquoi c’est utile** avec le texte gauche ;
2. **Comment ça se voit dans l’app** avec le téléphone ;
3. **Quelles fonctionnalités le permettent** avec les cards droite.

---

## 9. Modification 3 — Transformer le fond après le header

### Problème actuel

Le fond de bâtiments / map reste trop détaillé dans les sections fonctionnalités. Il concurrence les textes, les cards et le téléphone.

### Action demandée

Conserver l’effet 3D dans le header, puis basculer après le hero vers un fond :

- plat ;
- cadastral ;
- peu contrasté ;
- très clair ;
- presque texturé ;
- sans gros bâtiments visibles ;
- sans ombres fortes.

### Header

Le header conserve une vue 3D immersive.

```css
.hero-map-background {
  opacity: 1;
  filter: saturate(0.85) contrast(0.95) brightness(1.02);
  transform: perspective(1200px) rotateX(58deg) scale(1.08);
}
```

### Sections fonctionnalités

```css
.features-background {
  background: var(--canvas);
  position: relative;
  overflow: hidden;
}

.features-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(60, 40, 20, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(60, 40, 20, 0.045) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.55;
  pointer-events: none;
}

.features-map-layer {
  position: absolute;
  inset: 0;
  opacity: 0.10;
  filter: contrast(0.75) brightness(1.08);
  transform: scale(1);
  pointer-events: none;
}

.features-building-layer {
  opacity: 0.12;
  filter: contrast(0.75);
  pointer-events: none;
}

.features-shadow-layer {
  opacity: 0.05;
  pointer-events: none;
}
```

### Niveau de détail attendu dans le bottom

- rues : traits fins ;
- labels éventuels : très discrets, en JetBrains Mono 7–10px ;
- bâtiments : rectangles plats, maximum 10–15% d’opacité ;
- ombres : maximum 4–6% ;
- aucun bloc 3D massif derrière les textes ;
- aucune zone de fond ne doit réduire la lisibilité.

### Critère de validation

Dans les sections fonctionnalités, le fond doit être ressenti comme une texture de plan, pas comme une scène 3D.

---

## 10. Modification 4 — Animation de transition header vers sections fonctionnalités

### Objectif

Créer une transition naturelle entre :

- le header immersif avec bâtiments en perspective ;
- les sections fonctionnalités avec plan cadastral sobre.

### Comportement attendu

Au scroll :

1. la caméra s’élève ;
2. la perspective diminue ;
3. la map tourne vers une vue top-down ;
4. les bâtiments perdent du relief ;
5. les ombres disparaissent ;
6. les détails deviennent discrets.

### Timing

- début de transition : environ 70% de la hauteur du hero ;
- fin de transition : au début de la première section fonctionnalité.

### Valeurs de principe

```js
const progress = scrollY / heroHeight;

rotateX: 58deg -> 0deg;
scale: 1.08 -> 1;
buildingOpacity: 1 -> 0.12;
shadowOpacity: 0.35 -> 0.05;
mapDetailsOpacity: 0.60 -> 0.10;
```

### Exemple Framer Motion

```js
const rotateX = useTransform(scrollYProgress, [0, 1], [58, 0]);
const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
const buildingOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.12]);
const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.05]);
```

### Critère de validation

L’animation doit être fluide mais secondaire. Elle ne doit pas devenir l’attraction principale.

---

## 11. Modification 5 — Supprimer les pop-ups parasites autour du téléphone

### Problème actuel

Des petits pop-ups ou encarts flottants sont présents en haut à gauche et en haut à droite du téléphone. Ils ne clarifient pas l’usage et rendent la section confuse.

### Action demandée

Supprimer tous les éléments flottants non nécessaires autour du téléphone.

### À supprimer

- pop-up haut gauche du téléphone ;
- pop-up haut droit du téléphone ;
- badge flottant sans lien direct avec l’écran ;
- pastille décorative ;
- micro-card non connectée à une fonctionnalité.

### À conserver uniquement

- les cards fonctionnelles à droite ;
- les lignes d’annotation ;
- les points d’ancrage éventuels sur l’écran ;
- le téléphone.

### Règle de décision

Si un élément ne répond pas à la question “qu’est-ce que ça explique dans l’application ?”, il doit être supprimé.

---

## 12. Modification 6 — Revoir l’indicateur “scroll pour explorer”

### Problème actuel

L’indication “scroll pour explorer” attire trop l’attention et peut cannibaliser le reste.

### Action demandée

Le garder uniquement dans le hero, mais le rendre plus discret et le faire disparaître dès le scroll.

### Position

Bas centre du hero.

```css
.scroll-indicator {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  opacity: 0.45;
}

.scroll-indicator.is-hidden {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  pointer-events: none;
}
```

### Comportement JS

```js
if (window.scrollY > heroHeight * 0.12) {
  scrollIndicator.classList.add("is-hidden");
}
```

### Variante visuelle recommandée

Remplacer la souris par une ligne verticale fine, plus cohérente avec la DA technique / plan cadastral.

```css
.scroll-indicator-line {
  width: 1px;
  height: 34px;
  background: var(--line-2);
  opacity: 0.7;
  margin: 8px auto 0;
}
```

---

## 13. Modification 7 — Refaire l’écran “Prospection rapide”

### Problème actuel

L’écran “Prospection rapide” est mal intégré et semble moins propre que les autres écrans. Il doit être refait.

### Structure attendue dans le téléphone

```text
Prospection rapide
Adresse détectée

25 Rue de la Libération
54460 Fouligny-sur-Moselle

[ Intéressé ] [ Relance ]
[ Refus     ] [ Absent  ]

[ Déjà envoyé ]

Enregistrement immédiat
```

### Style de l’écran

```css
.flash-screen {
  background: var(--paper-2);
  color: var(--ink);
}

.flash-title {
  font-family: var(--font);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.flash-subtitle {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.flash-action {
  border-radius: 14px;
  padding: 18px 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-1);
}
```

### Couleurs des statuts

```css
.status-interested {
  color: var(--success);
  background: rgba(46, 148, 97, 0.10);
}

.status-followup {
  color: var(--terrain);
  background: var(--terrain-soft);
}

.status-refused {
  color: var(--danger);
  background: rgba(184, 48, 32, 0.10);
}

.status-absent {
  color: var(--ink-soft);
  background: var(--canvas-2);
}

.status-sent {
  color: var(--teal);
  background: var(--teal-ink);
}
```

### Critères de validation

- même style que les autres écrans ;
- même radius interne ;
- même netteté ;
- même alignement ;
- aucune impression de capture mal collée ;
- texte lisible ;
- grille des 4 statuts équilibrée.

---

## 14. Modification 8 — Refonte des cards de droite

### Problème actuel

Les encadrés de droite sont trop faibles visuellement et trop descriptifs. Ils doivent devenir des fiches fonctionnelles qui vendent la valeur métier.

### Action demandée

Transformer chaque encadré en **feature card DoorTrack**.

### Style de card

```css
.feature-card {
  width: 340px;
  min-height: 118px;
  padding: 22px 24px;
  border-radius: var(--r-lg);
  background: rgba(250, 247, 240, 0.92);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-2);
  backdrop-filter: blur(10px);
  position: relative;
}

.feature-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.feature-card-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--terrain-soft);
  color: var(--terrain-2);
  flex-shrink: 0;
}

.feature-card-title {
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.feature-card-text {
  font-family: var(--font);
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--muted);
}

.feature-card-tag {
  display: inline-flex;
  margin-top: 12px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terrain-2);
  background: var(--terrain-soft);
  padding: 5px 9px;
  border-radius: 6px;
}
```

### Icônes recommandées

Utiliser des icônes filaires, pas remplies, type **Lucide** ou **Phosphor Regular**.

- zones / potentiel : grid cadastral ;
- couverture : pin ;
- priorisation : chart ;
- objectifs : target ;
- relance : bell ;
- qualification : lightning ;
- historique : file / document ;
- synchronisation : circular arrows ;
- équipe : users / clipboard.

### Critère de validation

Chaque card doit être lisible seule. Même sans lire le titre gauche, l’utilisateur doit comprendre le bénéfice.

---

## 15. Modification 9 — Refaire les lignes de liaison téléphone → cards

### Problème actuel

Les lignes sont trop discrètes. Elles ne guident pas assez le regard.

### Action demandée

Créer des lignes d’annotation visibles mais élégantes, façon plan technique.

### Implémentation recommandée

Utiliser un overlay SVG dans chaque section.

```css
.callout-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
}

.callout-line {
  stroke: var(--terrain);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  opacity: 0.85;
}

.callout-anchor {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--terrain);
  box-shadow: 0 0 0 5px rgba(226, 91, 20, 0.14);
}

.callout-card-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--terrain);
}
```

### Style de ligne

Utiliser des lignes à angle propre, pas des courbes décoratives exagérées.

Exemple SVG :

```svg
<path d="M 610 280 H 690 Q 704 280 704 294 V 310 H 760" />
```

### Critère de validation

L’utilisateur doit comprendre immédiatement quelle card explique quelle zone de l’écran.

---

## 16. Contenu exact des sections fonctionnalités

### 16.1 Section 01 — Cartographie intelligente

#### Texte gauche

```text
01 — CARTOGRAPHIE INTELLIGENTE

Visualisez vos secteurs,
suivez vos opportunités,
pilotez votre terrain.

DoorTrack transforme votre zone de prospection en plan d’action clair : rues couvertes, secteurs à traiter, points chauds et priorités terrain.
```

#### Cards droite

**Card 1**

```text
Titre : Repérez les rues à potentiel
Texte : Identifiez les zones où concentrer vos efforts au lieu de prospecter au hasard.
Tag : PRIORITÉ TERRAIN
Icône : grid cadastral
Liaison : zones colorées de la carte
```

**Card 2**

```text
Titre : Suivez la couverture réelle
Texte : Visualisez les rues déjà visitées, celles oubliées et celles qui restent à traiter.
Tag : COUVERTURE
Icône : pin
Liaison : filtre / couche de couverture
```

**Card 3**

```text
Titre : Décidez avec une donnée claire
Texte : Appuyez vos actions sur un score lisible plutôt que sur une impression terrain dispersée.
Tag : SCORE
Icône : chart
Liaison : bloc score en bas du téléphone
```

---

### 16.2 Section 02 — Pilotage quotidien

#### Texte gauche

```text
02 — PILOTAGE QUOTIDIEN

Une journée plus claire
pour chaque commercial.

Chaque commercial sait quoi faire, où aller et quelle action prioriser. Le manager suit l’avancement sans demander un reporting permanent.
```

#### Cards droite

**Card 1**

```text
Titre : Objectifs visibles dès le départ
Texte : Donnez un cap clair à la journée : appels, visites, relances et rendez-vous.
Tag : OBJECTIFS
Icône : target
Liaison : barre objectif du jour
```

**Card 2**

```text
Titre : Activité suivie en temps réel
Texte : Les actions terrain remontent automatiquement pour éviter les tableaux manuels en fin de journée.
Tag : LIVE TERRAIN
Icône : bar chart
Liaison : blocs KPI
```

**Card 3**

```text
Titre : Performance exploitable
Texte : Repérez les écarts, les blocages et les commerciaux qui ont besoin d’un appui.
Tag : MANAGER
Icône : trophy / trend
Liaison : bloc performance semaine
```

---

### 16.3 Section 03 — Mémoire prospects

#### Texte gauche

```text
03 — MÉMOIRE PROSPECTS

Ne laissez plus vos opportunités
disparaître après le passage terrain.

Chaque contact garde son statut, son historique et sa prochaine action. La prospection ne dépend plus de notes perdues ou de souvenirs flous.
```

#### Cards droite

**Card 1**

```text
Titre : Historique centralisé
Texte : Retrouvez l’adresse, le statut, les passages et les échanges sans chercher dans plusieurs outils.
Tag : FICHE TERRAIN
Icône : document
Liaison : liste prospects
```

**Card 2**

```text
Titre : Relances maîtrisées
Texte : Chaque prospect à suivre ressort au bon moment pour éviter les opportunités oubliées.
Tag : RELANCE
Icône : bell
Liaison : statut “à relancer”
```

**Card 3**

```text
Titre : Donnée propre pour l’équipe
Texte : Tout le monde travaille sur la même information : commercial, manager, back-office.
Tag : ÉQUIPE
Icône : users / clipboard
Liaison : bouton ajouter / fiche prospect
```

---

### 16.4 Section 04 — Prospection flash

#### Texte gauche

```text
04 — PROSPECTION FLASH

Agissez plus vite que jamais
sur le terrain.

Le mode Flash permet de qualifier une adresse en quelques secondes, sans casser le rythme de passage.
```

#### Cards droite

**Card 1**

```text
Titre : Qualification en 3 secondes
Texte : Intéressé, absent, refus, relance : le bon statut est saisi immédiatement.
Tag : ACTION RAPIDE
Icône : lightning
Liaison : grille des quatre boutons
```

**Card 2**

```text
Titre : Enregistrement immédiat
Texte : Chaque action est sauvegardée pour conserver une donnée terrain fiable.
Tag : DONNÉE FIABLE
Icône : sync
Liaison : message bas “enregistrement immédiat”
```

**Card 3**

```text
Titre : Suite commerciale automatique
Texte : Le statut déclenche la bonne suite : rappel, relance, note ou prochain passage.
Tag : SUIVI
Icône : arrow / automation
Liaison : bouton “Déjà envoyé” ou zone statut
```

---

## 17. Formulaire CTA footer

### Problème actuel

La fin de page contient une intention de conversion, mais pas de formulaire direct. L’utilisateur doit pouvoir laisser ses informations immédiatement.

### Position

Le formulaire doit être placé après le bloc final actuel :

```text
Ne marchez plus à l’aveugle.
Prospectez avec précision.
```

### Section formulaire

```css
.footer-form-section {
  padding: 120px clamp(32px, 6vw, 96px);
  background: var(--canvas);
  position: relative;
}

.footer-form-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(60, 40, 20, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(60, 40, 20, 0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
}

.footer-form-card {
  position: relative;
  z-index: 2;
  max-width: 920px;
  margin: 0 auto;
  padding: 48px;
  border-radius: var(--r-xl);
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-3);
}
```

### Titre du formulaire

```text
Demandez une démo DoorTrack
```

```css
.footer-form-title {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: var(--ink);
}
```

### Sous-titre

```text
Expliquez-nous votre organisation terrain. Nous vous recontactons pour vous montrer comment DoorTrack peut s’adapter à votre équipe.
```

### Champs du formulaire

Champs obligatoires recommandés :

- prénom ;
- nom ;
- email professionnel ;
- téléphone ;
- société ;
- fonction ;
- taille de l’équipe commerciale ;
- message libre.

### Options du champ “taille de l’équipe commerciale”

```text
1 à 3 commerciaux
4 à 10 commerciaux
11 à 30 commerciaux
Plus de 30 commerciaux
```

### Style des champs

```css
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 32px;
}

.form-field,
.form-select,
.form-textarea {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--paper-2);
  color: var(--ink);
  padding: 0 16px;
  font-family: var(--font);
  font-size: 14px;
}

.form-field,
.form-select {
  height: 50px;
}

.form-textarea {
  min-height: 120px;
  padding-top: 14px;
  resize: vertical;
  grid-column: 1 / -1;
}

.form-field:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--terrain);
  box-shadow: 0 0 0 4px rgba(226, 91, 20, 0.10);
  outline: none;
}
```

### Bouton principal

```text
Réserver une démo
```

```css
.form-submit {
  height: 54px;
  padding: 0 28px;
  border-radius: 999px;
  background: var(--terrain);
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
  box-shadow: var(--shadow-2);
  transition: box-shadow 200ms ease, transform 200ms ease, background 200ms ease;
}

.form-submit:hover {
  background: var(--terrain-2);
  box-shadow: var(--shadow-3);
  transform: translateY(-1px);
}

.form-submit:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(226, 91, 20, 0.12), var(--shadow-2);
}
```

### Bouton secondaire optionnel

```text
Prendre contact
```

```css
.form-secondary {
  height: 54px;
  padding: 0 24px;
  border-radius: 999px;
  background: var(--teal);
  color: var(--paper-2);
  font-size: 15px;
  font-weight: 600;
}
```

### Réassurance

```text
Démo en 15 min · sans engagement · réponse sous 24 à 48h
```

```css
.form-reassurance {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 16px;
}
```

### Critère de validation

L’utilisateur doit pouvoir convertir sans devoir chercher un bouton ou changer de page.

---

## 18. Responsive

### Desktop large — 1200px et plus

- grille 3 colonnes ;
- téléphone sticky ;
- cards à droite ;
- lignes de liaison visibles ;
- fond cadastral léger.

### Laptop — 1024px à 1199px

```css
@media (max-width: 1199px) {
  .feature-section {
    grid-template-columns: minmax(260px, 1fr) minmax(220px, 0.7fr) minmax(300px, 1fr);
    column-gap: 36px;
    padding-inline: 44px;
  }

  .feature-card {
    width: 300px;
  }

  .phone-mockup {
    width: clamp(220px, 21vw, 285px);
  }
}
```

### Tablette — moins de 1024px

```css
@media (max-width: 1023px) {
  .feature-section {
    grid-template-columns: 1fr;
    gap: 44px;
    min-height: auto;
    padding: 96px 40px;
  }

  .phone-sticky-wrapper {
    position: relative;
    top: auto;
    height: auto;
  }

  .feature-right {
    max-width: 100%;
  }

  .callout-lines {
    display: none;
  }
}
```

### Mobile — moins de 767px

```css
@media (max-width: 767px) {
  .feature-section {
    padding: 80px 24px;
  }

  .feature-title {
    font-size: 36px;
  }

  .feature-card {
    width: 100%;
  }

  .phone-mockup {
    width: min(78vw, 300px);
  }

  .footer-form-card {
    padding: 28px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
```

### Règle mobile

Sur mobile, il vaut mieux supprimer les lignes de liaison complexes que les conserver mal placées.

---

## 19. Animations autorisées

Les animations doivent être utiles et discrètes.

### Autorisées

- transition douce du hero vers le plan cadastral ;
- apparition légère des cards ;
- hover lift très discret sur CTA ;
- opacité progressive de l’indicateur scroll ;
- changement léger de shadow au hover.

### Interdites

- parallax exagéré ;
- glow néon ;
- particules ;
- texte qui scramble ;
- bounce excessif ;
- animation permanente qui fatigue l’œil ;
- vidéo auto-play lourde dans le hero.

### Hover CTA

```css
.btn-primary,
.form-submit {
  transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
}

.btn-primary:hover,
.form-submit:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-3);
}
```

---

## 20. Performance technique

### Objectifs

La landing doit rester fluide. Le design ne doit pas ralentir la page.

### Recommandations

- utiliser WebP ou AVIF pour les captures d’écran ;
- utiliser SVG pour les lignes et pictogrammes ;
- limiter la 3D au hero ;
- remplacer le fond 3D du bottom par une texture légère ;
- désactiver les animations complexes sur mobile ;
- éviter les vidéos lourdes en auto-play ;
- lazy-load des éléments sous le fold ;
- compresser les assets.

### Critère de validation

La page doit scroller sans lag sur laptop standard.

---

## 21. Liste des éléments à supprimer

Supprimer :

- les pop-ups inutiles autour du téléphone ;
- les badges flottants sans rôle ;
- les micro-cards qui ne pointent vers rien ;
- les ombres fortes de bâtiments dans le bottom ;
- les bâtiments 3D trop visibles dans les sections fonctionnalités ;
- les fonds trop contrastés derrière les textes ;
- les lignes de liaison invisibles ou trop faibles ;
- les animations qui attirent plus que le téléphone ;
- toute couleur non alignée avec les tokens DA.

---

## 22. Liste des éléments à améliorer

Améliorer :

- taille du téléphone ;
- lisibilité du fond ;
- cohérence de l’écran “Prospection rapide” ;
- cards de droite ;
- pictogrammes fonctionnels ;
- textes commerciaux ;
- lignes de liaison ;
- formulaire footer ;
- responsive ;
- performance scroll.

---

## 23. Priorité d’exécution

### Lot 1 — Correction visuelle immédiate

1. réduire le téléphone de 25% ;
2. supprimer les pop-ups parasites ;
3. refaire l’écran “Prospection rapide” ;
4. rendre l’indicateur scroll discret.

### Lot 2 — Alignement direction artistique

5. appliquer les tokens DoorTrack ;
6. appliquer Manrope + JetBrains Mono ;
7. transformer le fond bottom en plan cadastral sobre ;
8. réduire reliefs, ombres et détails.

### Lot 3 — Renforcement commercial

9. refaire les cards de droite ;
10. ajouter les pictogrammes ;
11. intégrer les textes bénéfices fournis ;
12. refaire les lignes d’annotation.

### Lot 4 — Conversion

13. ajouter le formulaire CTA ;
14. intégrer la réassurance ;
15. vérifier le parcours contact.

### Lot 5 — QA technique

16. tester en 1366 × 768 ;
17. tester desktop large ;
18. tester tablette ;
19. tester mobile ;
20. tester fluidité scroll ;
21. vérifier que le téléphone n’est jamais coupé.

---

## 24. Checklist finale de validation

Avant livraison, vérifier :

- [ ] Le téléphone est environ 25% plus petit.
- [ ] Le téléphone est visible en entier sur laptop.
- [ ] Le fond 3D est réservé au header.
- [ ] Le fond des sections bottom est plat, sobre et cadastral.
- [ ] Les bâtiments bottom sont très atténués.
- [ ] Les ombres bottom sont quasi invisibles.
- [ ] Les pop-ups parasites sont supprimés.
- [ ] L’indicateur scroll est discret et disparaît au scroll.
- [ ] L’écran “Prospection rapide” est refait proprement.
- [ ] Les cards de droite utilisent `--paper`, `--line`, `--shadow-2`.
- [ ] Chaque card possède une icône fonctionnelle.
- [ ] Chaque card possède un titre, un texte bénéfice et un tag mono.
- [ ] Les lignes de liaison sont visibles et reliées aux bonnes zones.
- [ ] Les textes des sections correspondent à ceux du présent document.
- [ ] Le formulaire footer est présent.
- [ ] Le formulaire est utilisable et lisible.
- [ ] Les couleurs respectent les tokens.
- [ ] Les typographies sont Manrope et JetBrains Mono.
- [ ] Le responsive est propre sur desktop, laptop, tablette et mobile.
- [ ] La page scrolle sans lag.
- [ ] Aucun élément décoratif ne parasite la compréhension.

---

## 25. Instruction courte à donner à une IA de développement

Copier-coller ce bloc si l’objectif est de faire comprendre rapidement le chantier à une IA de génération de code :

```text
Tu dois modifier la landing page DoorTrack en respectant strictement la direction artistique suivante : univers terrain, carnet de route, plan cadastral, fond sable chaud, papier ivoire, orange terrain #E25B14, teal #003F4C, typographies Manrope et JetBrains Mono. Le header peut rester immersif avec une carte 3D et des bâtiments en perspective, mais dès les sections fonctionnalités, le fond doit devenir plat, sobre, cadastral, peu contrasté, avec très peu de relief et presque aucune ombre. Le téléphone sticky central doit être réduit d’environ 25% pour ne jamais être coupé. Supprime les pop-ups parasites autour du téléphone. Refais l’écran “Prospection rapide” proprement. Refonte complète des cards à droite : icône fonctionnelle, titre fort, texte orienté bénéfice commercial, tag mono, ombre légère, fond paper warm. Refaire les lignes de liaison entre les cards et les zones du téléphone avec des lignes SVG orange façon annotation technique. Ajouter un vrai formulaire CTA en bas de page avec champs prénom, nom, email pro, téléphone, société, fonction, taille d’équipe commerciale et message. Ne pas utiliser de glow, pas de fond noir, pas de bleu SaaS générique, pas de parallax excessif, pas de gadget cyberpunk. La priorité est la lisibilité, la crédibilité terrain et la conversion.
```

---

## 26. Phrase de cadrage finale

La landing DoorTrack ne doit pas chercher à être spectaculaire partout. Elle doit être spectaculaire uniquement au bon endroit : le header.

Ensuite, elle doit redevenir lisible, méthodique et commerciale.

La règle finale est :

**Le décor attire. L’application convainc. Le formulaire convertit.**
