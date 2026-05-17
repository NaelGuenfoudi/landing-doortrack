# Doortrack — Cahier de modifications UX/UI & Motion Design

**Document de cadrage destiné à un designer, développeur front-end ou outil d’IA type Claude.**  
**Objectif :** corriger les irritants actuels du site, restructurer la navigation en trois onglets, créer une section **Rejoindre la bêta** cohérente avec l’univers visuel existant, puis intégrer une section **Vision & Contact** humaine, professionnelle et orientée terrain.

---

## 1. Contexte général

Doortrack est une application pensée pour les équipes de prospection terrain. Le site actuel possède déjà une direction artistique validée :

- fond clair / blanc cassé ;
- texture cartographique en arrière-plan ;
- grande typographie noire/gris anthracite ;
- accents orange/rouge pour les CTA et éléments actifs ;
- téléphone central présentant l’interface produit ;
- micro-cartes explicatives reliées visuellement au téléphone ;
- animations scrollées autour d’une carte 3D et d’un écran sticky ;
- ambiance sobre, premium, fonctionnelle, terrain.

Le site ne doit donc pas être entièrement repensé. Les sections existantes de l’accueil sont conservées dans leur esprit. Les nouvelles sections doivent prolonger exactement cette direction artistique, sans créer une rupture visuelle.

Le rendu attendu doit être moderne, animé, fluide et crédible. L’objectif n’est pas de créer une page décorative, mais un site qui sert trois fonctions :

1. faire comprendre Doortrack rapidement ;
2. permettre à un manager de choisir un niveau d’engagement dans la bêta ;
3. déclencher une prise de contact qualifiée.

---

## 2. Problèmes actuels à corriger en priorité

### 2.1. Bug de transition noir → clair

#### Problème constaté
Au début du scroll, le site passe brutalement d’un fond clair à un fond noir, puis revient ensuite vers du blanc. Cette transition donne une impression de bug ou de rupture non maîtrisée.

#### Modification attendue
Supprimer cette transition noire brutale.

#### Comportement attendu
La transition entre le hero, la carte 3D et les sections suivantes doit rester dans une palette claire :

- blanc cassé ;
- gris très clair ;
- fond cartographique ;
- légère teinte chaude/pastel ;
- accents orange/rouge Doortrack.

#### Recommandation visuelle
Utiliser un gradient doux au lieu du noir :

```css
background: linear-gradient(
  180deg,
  #F7F4EF 0%,
  #F9F7F3 45%,
  #FFFFFF 100%
);
```

ou, si besoin d’un passage plus marqué :

```css
background: linear-gradient(
  180deg,
  #EFE7DD 0%,
  #F8F5F0 55%,
  #FFFFFF 100%
);
```

À éviter absolument :

```css
background: #000000;
```

Le noir ne doit pas être utilisé comme grand fond de transition sur ce site.

---

### 2.2. Problème d’adaptation verticale de l’écran

#### Problème constaté
Quand la fenêtre du navigateur n’est pas en plein écran, certaines parties du texte sont rognées. Le site semble dépendre d’une hauteur fixe d’écran.

#### Modification attendue
Le site doit s’adapter à la hauteur réelle de l’écran, notamment sur ordinateur portable, fenêtres réduites, écrans 13 pouces, écrans avec barre système visible, etc.

#### Règles techniques attendues
Éviter les hauteurs rigides du type :

```css
height: 100vh;
```

quand elles provoquent du rognage.

Préférer :

```css
min-height: 100svh;
height: auto;
overflow: visible;
```

ou :

```css
min-height: min(100dvh, 920px);
```

Les gros titres doivent utiliser `clamp()` :

```css
font-size: clamp(48px, 6vw, 92px);
line-height: 0.95;
```

Les textes secondaires :

```css
font-size: clamp(16px, 1.2vw, 20px);
line-height: 1.45;
```

#### Comportement attendu
Si la hauteur disponible diminue :

- le titre se réduit légèrement ;
- les marges verticales diminuent ;
- les blocs se rapprochent ;
- le contenu reste visible ;
- aucun texte ne doit être coupé ;
- si nécessaire, le scroll doit prendre le relais.

---

### 2.3. Suppression des indicateurs de paragraphe 01 / 02 / 03 / 04 / 05 / 06

#### Problème constaté
Dans les sections du bas, on voit des éléments de type numéro de paragraphe ou logo de paragraphe : 01, 02, 03, 04, 05, 06. Ces éléments ne sont pas appréciés et doivent être supprimés.

#### Modification attendue
Supprimer ces indicateurs dans toutes les sections concernées.

#### Attention
Ne pas supprimer les petits labels utiles du type :

- `$ 01` ;
- `CARTOGRAPHIE INTELLIGENTE` ;
- `PROSPECTION FLASH` ;
- `REJOINDRE LA BÊTA` ;
- `VISION & CONTACT`.

Ce qui doit disparaître, ce sont les pictogrammes ou numéros parasites qui accompagnent les paragraphes au scroll et qui donnent une impression de surcharge.

---

### 2.4. Footer légal et liens obligatoires

#### Modification attendue
Ajouter un footer final sobre, intégré à la direction artistique.

#### Taille recommandée
Le footer doit être discret :

- hauteur desktop : 56 à 80 px ;
- hauteur mobile : 120 à 180 px, selon empilement ;
- fond : blanc cassé ou très léger gris ;
- séparation haute : ligne fine gris clair ou orange très discret.

#### Contenu minimal recommandé

```text
Doortrack — Fonctionnel. Terrain. Efficace.
Mentions légales · Politique de confidentialité · CGU · CGV · Cookies · Contact
```

#### Pages ou ancres à prévoir
Créer les liens suivants, même s’ils renvoient dans un premier temps vers des pages placeholder :

- `/mentions-legales`
- `/politique-confidentialite`
- `/cgu`
- `/cgv`
- `/cookies`
- `/contact`

#### Note importante
Le contenu juridique définitif devra être validé séparément. Le rôle du designer/développeur ici est de prévoir les emplacements, les liens, la structure et la cohérence UX.

---

## 3. Nouvelle structure de navigation

### 3.1. Navigation actuelle à remplacer
La navigation doit être simplifiée et alignée sur les objectifs commerciaux.

### 3.2. Navigation finale attendue

```text
Accueil | Rejoindre la bêta | Vision & Contact
```

### 3.3. Rôle de chaque onglet

#### Accueil
Conserver la page actuelle, son principe d’animation, sa carte 3D, son téléphone central et ses sections explicatives.

Objectif :

- comprendre rapidement Doortrack ;
- montrer le produit ;
- expliquer le problème terrain ;
- donner envie de continuer.

#### Rejoindre la bêta
Nouvelle section majeure.

Objectif :

- présenter les 4 niveaux d’engagement ;
- expliquer la logique progressive ;
- faire comprendre qu’il existe plusieurs façons de participer ;
- convertir les managers intéressés en contacts qualifiés.

#### Vision & Contact
Nouvelle section de conclusion.

Objectif :

- humaniser le projet ;
- expliquer l’origine terrain de Doortrack ;
- rappeler la problématique concrète ;
- proposer un formulaire de contact simple ;
- déclencher une prise de contact.

---

## 4. Direction artistique globale à respecter

### 4.1. Ambiance générale
Le site doit rester :

- clair ;
- aérien ;
- premium ;
- professionnel ;
- terrain ;
- orienté produit ;
- animé mais pas gadget.

La direction doit évoquer :

- la cartographie ;
- la prospection ;
- la donnée terrain ;
- le pilotage commercial ;
- la rigueur opérationnelle ;
- la simplicité d’usage.

### 4.2. Palette de couleurs recommandée

#### Fond principal
```css
--color-bg-main: #F8F5F0;
--color-bg-soft: #FBFAF7;
--color-bg-white: #FFFFFF;
```

#### Texte
```css
--color-text-main: #252A2F;
--color-text-muted: #6B6F73;
--color-text-light: #9A9A9A;
```

#### Accent Doortrack
```css
--color-accent: #E94B2B;
--color-accent-hover: #D83D21;
--color-accent-soft: #F8D8CD;
```

#### Bordures / cartes
```css
--color-border: #E6E0D8;
--color-card: rgba(255, 255, 255, 0.78);
--color-card-solid: #FFFFFF;
```

#### Bleu très sombre possible pour interface produit
```css
--color-navy: #061E3A;
```

Attention : ce bleu sombre peut être utilisé dans le téléphone ou certains éléments produit, mais pas comme grand fond de transition.

---

### 4.3. Typographie
La typographie actuelle doit rester dans l’esprit : moderne, large, sobre, très lisible.

#### Titres principaux
- Très grands.
- Graisse forte.
- Interlettrage légèrement serré.
- Ligne courte.
- Impact immédiat.

Exemple CSS :

```css
.hero-title {
  font-size: clamp(52px, 6.4vw, 96px);
  line-height: 0.96;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: #252A2F;
}
```

#### Textes secondaires
```css
.body-large {
  font-size: clamp(17px, 1.2vw, 21px);
  line-height: 1.55;
  color: #6B6F73;
}
```

#### Labels techniques
Les petits labels doivent rester très graphiques :

```css
.section-label {
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #E94B2B;
  font-weight: 600;
}
```

Exemples :

```text
$ 05
REJOINDRE LA BÊTA
```

```text
$ 06
VISION & CONTACT
```

---

## 5. Onglet 1 — Accueil

### 5.1. Objectif
Ne pas refaire l’accueil. La structure actuelle est validée.

Il faut seulement corriger :

1. la transition noire ;
2. le responsive vertical ;
3. les indicateurs 01/02/03/04/05/06 parasites ;
4. les liens de navigation ;
5. la cohérence de transition vers les nouveaux onglets.

### 5.2. Modifications UI précises

#### Navbar
Remplacer les items actuels par :

```text
Accueil | Rejoindre la bêta | Vision & Contact
```

Le bouton principal de droite doit devenir :

```text
Rejoindre la bêta →
```

ou, selon la section active :

```text
Vision →
```

Le bouton doit rester orange/rouge avec texte blanc.

#### Scroll
Quand l’utilisateur clique sur un onglet :

- scroll fluide ;
- ancre exacte sur la section ;
- pas de saut brutal ;
- la navbar reste visible ou revient discrètement.

Exemple :

```js
scrollIntoView({ behavior: 'smooth', block: 'start' })
```

ou animation via GSAP ScrollToPlugin si le projet l’utilise.

---

## 6. Onglet 2 — Rejoindre la bêta

### 6.1. Référence visuelle validée
La section doit s’inspirer du second visuel généré précédemment :

- fond clair cartographique ;
- grande zone hero ;
- téléphone central ;
- map 3D en arrière-plan autour du téléphone ;
- micro-cartes explicatives ;
- parcours d’engagement progressif ;
- 4 cartes d’offres ;
- comparatif clair ;
- bloc CTA final.

Cette section doit être cohérente avec les captures actuelles du site, notamment :

- téléphone central ;
- fond carte ;
- labels rouges ;
- cartes blanches arrondies ;
- CTA orange ;
- textes noirs/gris ;
- animation scrollée propre.

---

### 6.2. Structure générale de la section

La section **Rejoindre la bêta** doit être composée de 5 blocs :

1. Hero bêta avec téléphone + map orbitale ;
2. Parcours d’engagement progressif ;
3. Cartes des 4 niveaux ;
4. Comparatif synthétique ;
5. CTA final de prise de contact.

---

## 6.3. Bloc 1 — Hero “Rejoindre la bêta”

### Objectif
Faire comprendre que la bêta n’est pas une simple inscription, mais une co-construction avec des professionnels du terrain.

### Layout desktop

Grille recommandée :

- container max-width : 1280 à 1440 px ;
- padding horizontal : 64 px desktop ;
- section min-height : `100svh` mais adaptable ;
- colonne gauche : texte ;
- centre : téléphone + map 3D ;
- droite : 3 micro-cartes.

Répartition :

```text
[ Texte 38% ] [ Téléphone + map 32% ] [ Cartes 30% ]
```

### Texte à intégrer

#### Label
```text
$ 05
REJOINDRE LA BÊTA
```

#### Titre principal
```text
Construire avec les pros du terrain, pour les pros du terrain.
```

#### Texte secondaire
```text
Doortrack est conçu pour les équipes de prospection terrain. Votre expérience nous permet d’aller plus vite, de prioriser l’essentiel et de créer un outil qui répond vraiment aux besoins du terrain.
```

#### CTA principal
```text
Rejoindre la bêta →
```

#### CTA secondaire
```text
En savoir plus
```

### Micro-cartes à droite

#### Carte 1
```text
Des outils pensés pour vos réalités de terrain
```

Texte :
```text
Partagez vos usages, vos contraintes et vos priorités pour orienter les fonctionnalités réellement utiles.
```

Badge :
```text
CO-CONSTRUCTION
```

#### Carte 2
```text
Un accès anticipé à la solution
```

Texte :
```text
Testez les premières versions, donnez vos retours et gardez une longueur d’avance sur votre organisation terrain.
```

Badge :
```text
ACCÈS PRIORITAIRE
```

#### Carte 3
```text
Une contribution reconnue
```

Texte :
```text
Votre retour compte. Chaque échange peut influencer les priorités produit, les parcours utilisateurs et les futurs modules.
```

Badge :
```text
ROADMAP
```

---

## 6.4. Animation principale — Map qui tourne autour du téléphone

### Intention
L’animation doit donner l’impression que le téléphone est le centre de pilotage terrain et que la carte gravite autour de lui comme un globe ou un système opérationnel.

### Effet attendu
Autour du téléphone central :

- la map 3D tourne lentement ;
- elle forme un disque / globe cartographique en perspective ;
- des bâtiments ou volumes très légers apparaissent ;
- quelques pins restent visibles ;
- la rotation est lente, premium, contrôlée ;
- le téléphone reste net et stable au premier plan.

### Sensation recherchée
Le visiteur doit comprendre visuellement :

```text
Le terrain tourne autour de l’outil.
Doortrack centralise les données terrain.
Le téléphone devient le cockpit commercial.
```

### Spécification motion

#### Rotation de la map
- vitesse : très lente ;
- durée d’un tour complet : 40 à 70 secondes ;
- mouvement continu ;
- pas d’accélération agressive ;
- rotation horizontale ou orbitale légère ;
- perspective 3D faible à moyenne.

Exemple de logique CSS/JS :

```js
// Pseudo-code
mapOrbit.rotationY += delta * 0.04;
mapOrbit.rotationX = fixedTilt;
```

#### Téléphone
Le téléphone doit rester :

- centré ;
- stable ;
- légèrement flottant ;
- très lisible.

Animation recommandée :

```css
transform: translateY(sin(time) * 6px);
```

ou équivalent Framer Motion :

```js
animate={{ y: [0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
```

#### Pins de carte
Quelques points de prospection peuvent pulser très légèrement :

- scale : 1 → 1.15 → 1 ;
- opacity : 0.65 → 1 → 0.65 ;
- durée : 2 à 3 secondes ;
- décalage entre les pins.

#### Lignes de connexion
Les lignes reliant le téléphone aux cartes doivent :

- se tracer au scroll ;
- avoir une couleur orange très douce ;
- rester fines ;
- ne jamais surcharger.

CSS :

```css
.connection-line {
  stroke: #E94B2B;
  stroke-width: 1;
  opacity: 0.45;
}
```

---

## 6.5. Bloc 2 — Parcours d’engagement progressif

### Objectif
Présenter les 4 niveaux comme une progression logique, et non comme 4 offres isolées.

### Titre
```text
Un parcours d’engagement adapté à votre implication
```

### Sous-titre
```text
Chaque entreprise peut contribuer à son rythme : simple retour terrain, intérêt formalisé, accès prioritaire ou pilote encadré.
```

### Parcours horizontal desktop

```text
01 Contributeur terrain  →  02 Entreprise pilote  →  03 Early Adopter  →  04 Pilote terrain encadré
```

### Animation
Au scroll :

1. la ligne horizontale apparaît de gauche à droite ;
2. les 4 étapes apparaissent successivement ;
3. chaque pastille s’active brièvement ;
4. les cartes en dessous apparaissent ensuite.

### Style
- fond transparent ;
- pastilles très fines ;
- numéros orange ;
- texte anthracite ;
- lignes pointillées ou très légères.

---

## 6.6. Bloc 3 — Cartes des 4 niveaux

### Objectif
Permettre au manager de comprendre immédiatement quel niveau lui correspond.

### Layout desktop
4 cartes alignées en grille :

```text
[ Contributeur terrain ] [ Entreprise pilote ] [ Early Adopter ] [ Pilote terrain encadré ]
```

### Dimensions recommandées

```css
.beta-card {
  min-height: 300px;
  border-radius: 24px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(230, 224, 216, 0.9);
  box-shadow: 0 24px 60px rgba(20, 20, 20, 0.04);
  backdrop-filter: blur(12px);
}
```

### Animation d’apparition
Chaque carte arrive légèrement depuis le bas :

```js
initial: { opacity: 0, y: 36 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
```

### Hover
Au survol :

- légère élévation ;
- contour orange doux ;
- CTA plus visible ;
- icône légèrement animée.

```css
.beta-card:hover {
  transform: translateY(-6px);
  border-color: rgba(233, 75, 43, 0.35);
  box-shadow: 0 28px 70px rgba(233, 75, 43, 0.08);
}
```

---

### Carte 1 — Contributeur terrain

#### Titre
```text
Contributeur terrain
```

#### Bénéfice clé
```text
Faites entendre votre voix et influencez le produit dès sa construction.
```

#### Niveau d’engagement
```text
Faible
```

#### Pour qui ?
```text
Pour les professionnels qui veulent partager leurs méthodes, leurs irritants et leurs besoins terrain sans engagement financier.
```

#### Ce que vous obtenez
```text
- Accès prioritaire aux échanges bêta
- Influence sur la roadmap produit
- Retour direct avec le porteur du projet
- Possibilité de tester la bêta dès qu’elle est disponible
```

#### CTA
```text
Je contribue
```

---

### Carte 2 — Entreprise pilote

#### Titre
```text
Entreprise pilote
```

#### Bénéfice clé
```text
Formalisez votre intérêt et réservez une priorité de test.
```

#### Niveau d’engagement
```text
Moyen
```

#### Pour qui ?
```text
Pour les structures souhaitant valider l’intérêt de Doortrack dans leur organisation avant un déploiement réel.
```

#### Ce que vous obtenez
```text
- Priorité pour un futur pilote
- Cadrage des besoins métier
- Périmètre de test discuté en amont
- Visibilité sur les évolutions produit
```

#### CTA
```text
Candidater comme pilote
```

---

### Carte 3 — Early Adopter

#### Titre
```text
Early Adopter
```

#### Bénéfice clé
```text
Accédez en priorité aux premières versions et bénéficiez de conditions préférentielles.
```

#### Niveau d’engagement
```text
Élevé
```

#### Pour qui ?
```text
Pour les managers qui veulent sécuriser un accès prioritaire et soutenir concrètement la finalisation du MVP.
```

#### Ce que vous obtenez
```text
- Accès prioritaire à la solution
- Tarif préférentiel au lancement
- Démo et onboarding prioritaires
- Participation renforcée à la roadmap
```

#### CTA
```text
Devenir Early Adopter
```

---

### Carte 4 — Pilote terrain encadré

#### Titre
```text
Pilote terrain encadré
```

#### Bénéfice clé
```text
Testez Doortrack sur une équipe réelle, avec un cadre, des objectifs et des indicateurs.
```

#### Niveau d’engagement
```text
Très élevé
```

#### Pour qui ?
```text
Pour les entreprises prêtes à tester la solution dans des conditions proches du réel, sur un périmètre défini.
```

#### Ce que vous obtenez
```text
- Test réel sur une équipe cible
- Paramétrage et accompagnement prioritaire
- Suivi des KPI terrain
- Conditions préférentielles en cas de déploiement
```

#### CTA
```text
Étudier un pilote terrain
```

---

## 6.7. Bloc 4 — Comparatif synthétique des niveaux

### Objectif
Rassurer les managers rationnels en clarifiant les différences entre les niveaux.

### Titre
```text
Choisissez le niveau adapté à votre maturité terrain
```

### Tableau recommandé

| Critère | Contributeur terrain | Entreprise pilote | Early Adopter | Pilote terrain encadré |
|---|---|---|---|---|
| Engagement financier | Aucun | Aucun | Contribution possible | Budget pilote |
| Accès à la bêta | Prioritaire | Selon planning | Prioritaire | Inclus dans le pilote |
| Influence produit | Élevée | Très élevée | Très élevée | Maximale |
| Test avec données réelles | Non | Selon accord | Partiel | Oui |
| Accompagnement dédié | Non | Selon disponibilité | Prioritaire | Inclus |
| Disponibilité | Ouvert | Sur sélection | Places limitées | Nombre limité |

### Style UI
Le tableau doit être très léger :

- fond blanc translucide ;
- lignes fines ;
- checkmarks orange ;
- pas de surcharge ;
- lisibilité prioritaire.

### Animation
Au scroll :

- le tableau apparaît après les cartes ;
- les colonnes s’illuminent légèrement au passage du curseur ;
- si une carte est survolée, la colonne correspondante du tableau peut être mise en avant.

---

## 6.8. Bloc 5 — CTA final “Parlons de votre organisation terrain”

### Objectif
Éviter de forcer le manager à choisir seul. Le CTA doit ouvrir la discussion.

### Texte

#### Titre
```text
Vous ne savez pas quel niveau choisir ?
```

#### Texte
```text
Échangeons sur votre organisation terrain, votre équipe commerciale et vos objectifs. Nous vous orienterons vers le niveau d’engagement le plus adapté.
```

#### CTA principal
```text
Être rappelé →
```

#### CTA secondaire
```text
Prendre contact
```

### Style
Grand bloc horizontal en fond blanc ou très légèrement teinté.

- icône de bulle de discussion ;
- CTA orange ;
- second CTA contour gris ;
- bordure fine ;
- arrondi 28 px.

---

## 7. Onglet 3 — Vision & Contact

### 7.1. Objectif
Cette section doit humaniser Doortrack et expliquer que le projet vient d’un vrai problème terrain. Elle doit être professionnelle, mais pas froide. Elle doit parler à un manager sans donner l’impression d’un discours artificiel.

Le point important : Doortrack n’est pas une idée abstraite. Le projet est né d’une problématique réellement rencontrée lors d’une activité de prospection terrain, notamment dans le cadre d’une activité de nettoyage extérieur.

---

## 7.2. Structure recommandée

La section doit être composée de 4 blocs :

1. Hero Vision ;
2. Texte d’origine terrain ;
3. Bloc “ce que Doortrack veut résoudre” ;
4. Formulaire de contact.

---

## 7.3. Hero Vision

### Label
```text
$ 06
VISION & CONTACT
```

### Titre principal
```text
Une idée née du terrain, pas d’un bureau.
```

### Texte court
```text
Doortrack est né d’un constat simple : en prospection terrain, trop d’informations utiles se perdent entre la rue, le commercial et le manager.
```

### Animation
- apparition du fond cartographique ;
- léger zoom arrière ;
- titre qui apparaît ligne par ligne ;
- téléphone ou mini-dashboard en arrière-plan très discret ;
- pas d’effet trop spectaculaire.

---

## 7.4. Texte principal Vision & Contact

### Texte à intégrer

```text
Doortrack est né d’un constat simple : sur le terrain, une équipe commerciale produit énormément d’informations, mais une grande partie de cette information se perd.

Une rue visitée, une maison intéressante, un refus à recontacter plus tard, un devis envoyé, un prospect absent, un secteur à fort potentiel… Sur le moment, tout paraît clair. Mais après plusieurs heures de prospection, plusieurs jours d’activité ou plusieurs commerciaux sur la même zone, le suivi devient vite flou.

J’ai moi-même rencontré ce problème en développant une activité de nettoyage extérieur. En prospection terrain, il ne suffit pas de “passer dans une rue”. Il faut savoir où l’on est passé, ce qui a été dit, quelles maisons ont du potentiel, qui doit être relancé, et quelles zones méritent réellement d’être retravaillées.

Le problème, ce n’est pas le manque d’effort.
C’est le manque de visibilité.
```

---

## 7.5. Bloc “Transformer la prospection terrain en données exploitables”

### Titre
```text
Transformer la prospection terrain en données exploitables.
```

### Texte
```text
Doortrack a pour objectif de rendre la prospection plus lisible, plus mesurable et plus actionnable.

L’idée n’est pas de remplacer le commercial par un outil, ni d’ajouter une couche administrative inutile. L’objectif est au contraire de simplifier le quotidien terrain : marquer rapidement une porte, suivre l’avancement d’un secteur, visualiser les opportunités, identifier les zones chaudes et donner au manager une lecture claire de l’activité réelle.

Une carte bien utilisée peut devenir bien plus qu’un simple support visuel. Elle peut devenir un outil de pilotage commercial.
```

### Présentation UI
Présenter ce bloc avec 3 petites cartes :

#### Carte 1
```text
Voir où l’équipe est passée
```

Texte :
```text
Suivre les rues, zones, passages et opportunités en temps réel.
```

#### Carte 2
```text
Ne plus perdre les informations terrain
```

Texte :
```text
Centraliser les refus, absences, devis, relances et prospects à potentiel.
```

#### Carte 3
```text
Piloter avec une donnée claire
```

Texte :
```text
Transformer l’activité terrain en indicateurs utiles pour le manager.
```

---

## 7.6. Bloc “Construire avec ceux qui prospectent vraiment”

### Titre
```text
Construire avec ceux qui prospectent vraiment.
```

### Texte
```text
Doortrack est encore en construction, et c’est volontaire.

Avant de figer le produit, nous voulons échanger avec des managers, des responsables commerciaux et des équipes qui connaissent réellement les contraintes de la prospection terrain : organisation des tournées, relances, suivi des commerciaux, gestion des zones, reporting, conversion, perte d’information, coordination entre terrain et management.

L’objectif est simple : construire une solution utile, pas une application de plus.

Si vous managez une équipe commerciale terrain, si vous pratiquez la prospection porte-à-porte, ou si vous souhaitez simplement partager vos méthodes et vos irritants, votre retour peut avoir un impact direct sur l’évolution du produit.
```

---

## 7.7. Formulaire de contact

### Objectif
Le formulaire doit être simple, rapide, rassurant. Ne pas demander trop d’informations.

### Titre formulaire
```text
Échangeons sur votre réalité terrain.
```

### Texte d’introduction
```text
Expliquez-nous brièvement votre organisation, votre équipe et vos besoins. Nous reviendrons vers vous pour identifier le niveau d’échange ou de bêta le plus adapté.
```

### Champs recommandés

1. Nom / prénom
2. Entreprise
3. Fonction
4. Email professionnel
5. Téléphone
6. Nombre de commerciaux terrain
7. Niveau d’intérêt
8. Message libre

### Options du champ “Niveau d’intérêt”

```text
Je veux simplement échanger
Je souhaite devenir contributeur terrain
Je souhaite candidater comme entreprise pilote
Je souhaite devenir Early Adopter
Je souhaite étudier un pilote terrain encadré
```

### CTA formulaire
```text
Envoyer ma demande →
```

### Micro-texte sous CTA
```text
Vos informations sont utilisées uniquement pour répondre à votre demande et échanger avec vous au sujet de Doortrack.
```

---

## 7.8. Bloc final Vision & Contact

### Texte de conclusion
```text
Doortrack avance avec une conviction claire : les meilleures solutions terrain se construisent avec ceux qui sont réellement confrontés au terrain.

Votre organisation, vos contraintes et vos retours peuvent nous aider à créer un outil réellement utile aux équipes commerciales.
```

### CTA final
```text
Rejoindre la bêta →
```

---

## 8. Animations globales entre les onglets

### 8.1. Principe général
Les animations doivent être cohérentes avec l’accueil déjà existant. Le site utilise déjà une logique immersive avec :

- map 3D ;
- téléphone central ;
- sticky screen ;
- éléments qui apparaissent autour au scroll.

Les nouvelles sections doivent reprendre cette logique, mais sans répéter exactement la même scène.

---

## 8.2. Transition Accueil → Rejoindre la bêta

### Effet attendu
À la fin de l’accueil, la map déjà présente doit servir de transition vers la bêta.

Scénario :

1. les éléments de l’accueil se dissipent ;
2. la carte reste visible ;
3. la carte se recentre autour du téléphone ;
4. la carte commence à tourner lentement autour du téléphone ;
5. le label `$ 05 — REJOINDRE LA BÊTA` apparaît ;
6. les micro-cartes de la bêta s’affichent.

### Sensation recherchée
La section bêta ne doit pas apparaître comme une page indépendante. Elle doit sembler être la suite logique de l’expérience produit.

---

## 8.3. Transition Rejoindre la bêta → Vision & Contact

### Effet attendu
Après le comparatif et le CTA bêta, l’animation doit ralentir.

Scénario :

1. les cartes d’offres se stabilisent ;
2. la map orbitale ralentit ;
3. les éléments visuels deviennent plus discrets ;
4. le fond cartographique reste, mais en filigrane ;
5. le titre “Une idée née du terrain, pas d’un bureau.” apparaît.

### Sensation recherchée
Passer d’une section commerciale dynamique à une section plus humaine et réflexive.

---

## 9. Recommandations techniques d’animation

### 9.1. Librairies possibles
Selon la stack actuelle, utiliser de préférence :

- **GSAP + ScrollTrigger** pour les animations scrollées complexes ;
- **Framer Motion** pour les micro-interactions React ;
- **Three.js / React Three Fiber** pour la map 3D orbitale ;
- **MapLibre / Mapbox GL** si la carte réelle est déjà intégrée ou prévue ;
- **Lenis** ou équivalent pour un scroll fluide, si déjà utilisé.

Ne pas ajouter trop de librairies si le site fonctionne déjà correctement.

---

### 9.2. Performance
Les animations doivent rester fluides sur ordinateur portable classique.

Contraintes :

- éviter les vidéos lourdes en arrière-plan ;
- limiter le nombre d’objets 3D ;
- utiliser `will-change` avec parcimonie ;
- prévoir un fallback statique sur mobile ;
- désactiver les animations lourdes si `prefers-reduced-motion` est actif.

Exemple :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Responsive design

### 10.1. Desktop large
À partir de 1280 px :

- hero en 3 colonnes ;
- téléphone au centre ;
- cartes à droite ;
- titre à gauche ;
- map 3D orbitale visible ;
- cartes bêta en 4 colonnes ;
- comparatif complet.

### 10.2. Laptop / hauteur réduite
Entre 900 et 1280 px de largeur, ou hauteur inférieure à 800 px :

- réduire les titres via `clamp()` ;
- diminuer les marges verticales ;
- réduire légèrement le téléphone ;
- permettre au contenu de scroller ;
- ne jamais rogner le texte.

### 10.3. Tablette
Entre 768 et 1024 px :

- hero en 2 colonnes ou empilé ;
- téléphone centré ;
- micro-cartes sous le téléphone ;
- cartes bêta en 2 colonnes ;
- comparatif transformé en cartes plutôt qu’un tableau large.

### 10.4. Mobile
Sous 768 px :

- une seule colonne ;
- téléphone réduit ;
- map 3D remplacée par image ou animation très légère ;
- cartes bêta empilées ;
- tableau comparatif remplacé par accordéons ;
- navbar compacte ;
- CTA sticky possible en bas : “Rejoindre la bêta”.

---

## 11. Accessibilité et lisibilité

### Règles
- Contraste texte/fond suffisant.
- CTA lisibles.
- Focus visible au clavier.
- Champs formulaire clairement nommés.
- Pas d’information uniquement transmise par la couleur.
- Animations non indispensables à la compréhension.

### Focus formulaire

```css
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #E94B2B;
  box-shadow: 0 0 0 4px rgba(233, 75, 43, 0.12);
}
```

---

## 12. Micro-interactions

### CTA principal
Au hover :

- légère translation vers la droite de la flèche ;
- fond plus intense ;
- ombre douce orange.

```css
.cta-primary:hover .arrow {
  transform: translateX(4px);
}
```

### Cartes
Au hover :

- élévation de 4 à 6 px ;
- bordure orange douce ;
- légère brillance sur l’icône.

### Formulaire
Au focus :

- contour orange ;
- placeholder plus clair ;
- champ actif visuellement évident.

---

## 13. Contenus exacts de la nouvelle navigation

### Navbar desktop

```text
Doortrack
Accueil
Rejoindre la bêta
Vision & Contact
[Rejoindre la bêta →]
```

### Navbar mobile
Menu burger :

```text
Accueil
Rejoindre la bêta
Vision & Contact
```

CTA mobile :

```text
Rejoindre la bêta
```

---

## 14. Critères d’acceptation

Le travail est validé si :

1. le bug de transition noir/blanc a disparu ;
2. le site reste lisible sur écran réduit en hauteur ;
3. aucun texte n’est rogné ;
4. les indicateurs parasites 01/02/03/04/05/06 ont été retirés ;
5. la navbar affiche uniquement : Accueil, Rejoindre la bêta, Vision & Contact ;
6. le footer légal est présent ;
7. la section Rejoindre la bêta reprend la direction visuelle claire, cartographique et premium ;
8. la map tourne autour du téléphone dans la section bêta ;
9. les 4 niveaux d’engagement sont compréhensibles rapidement ;
10. la section Vision & Contact explique clairement l’origine terrain de Doortrack ;
11. le formulaire de contact est simple et utilisable ;
12. les animations restent fluides ;
13. la version mobile reste exploitable ;
14. l’ensemble donne une impression cohérente, moderne et professionnelle.

---

## 15. Résumé exécutable pour le développeur

### À faire immédiatement

- Corriger la transition noire.
- Rendre les sections adaptatives en hauteur.
- Supprimer les numéros/pictogrammes parasites dans le bottom.
- Modifier la navbar.
- Ajouter un footer légal.

### À créer

- Section `Rejoindre la bêta`.
- Section `Vision & Contact`.
- Formulaire de contact.
- Tableau ou comparatif des 4 niveaux.
- Animation de map orbitale autour du téléphone.

### À respecter absolument

- Ne pas changer l’identité actuelle de l’accueil.
- Ne pas créer une section au style SaaS générique qui casse la direction artistique.
- Ne pas utiliser de fond noir massif.
- Ne pas surcharger avec des animations inutiles.
- Ne pas rendre le site dépendant d’une hauteur fixe d’écran.

---

## 16. Prompt court à donner à Claude avec ce document

```text
Tu es un designer front-end senior spécialisé en landing pages SaaS premium, motion design et interfaces React modernes.

Je te joins un cahier de modifications complet pour le site Doortrack. Ton objectif est de modifier le site existant sans casser sa direction artistique actuelle.

Respecte strictement :
- la palette claire, cartographique, premium ;
- le téléphone central ;
- les animations scrollées ;
- la navigation finale : Accueil, Rejoindre la bêta, Vision & Contact ;
- la suppression du bug de transition noire ;
- l’adaptation responsive en hauteur ;
- la création d’une section Rejoindre la bêta avec map 3D orbitale autour du téléphone ;
- la création d’une section Vision & Contact avec le texte fourni ;
- l’ajout d’un footer légal sobre.

Ne réinvente pas le site. Prolonge ce qui existe déjà. Le rendu doit être moderne, fluide, crédible et cohérent avec les captures actuelles.

Commence par proposer l’architecture des composants, puis implémente les modifications étape par étape.
```

---

## 17. Note stratégique finale

La priorité n’est pas de multiplier les effets visuels. La priorité est de construire une continuité claire :

```text
Accueil : je comprends Doortrack.
Rejoindre la bêta : je choisis mon niveau d’implication.
Vision & Contact : je comprends l’origine terrain du projet et je prends contact.
```

La meilleure animation à prioriser est la map qui tourne autour du téléphone, car elle résume visuellement le cœur de Doortrack :

```text
Le terrain est complexe.
Doortrack le centralise.
Le manager le pilote.
```
