# DoorTrack — Dossier UX/UI & Motion Design en 5 sprints

## Objectif du document

Ce document sert de cahier d'exécution pour faire évoluer la landing page DoorTrack vers une version plus claire, plus fluide, plus interactive et mieux adaptée au desktop comme au mobile.

Le site doit conserver l'identité visuelle déjà présente : fond clair cartographique, interface premium, grandes typographies, boutons orange, cartes arrondies, téléphone central, animations au scroll et logique terrain.

L'objectif n'est pas de reconstruire tout le site, mais de corriger les problèmes existants, d'ajouter les sections manquantes, de clarifier l'expérience utilisateur et d'optimiser l'ensemble sur mobile.

---

# Sommaire des 5 sprints

1. **Sprint 1 — Corrections de l'accueil desktop**  
   Correction du bug blanc/noir/blanc, navigation, responsive vertical desktop, suppression des indicateurs parasites et ajout du footer légal.

2. **Sprint 2 — Section “Rejoindre la bêta” desktop**  
   Création d'une section interactive avec téléphone, globe cartographique animé, bénéfices et choix des niveaux d'engagement.

3. **Sprint 3 — Section “Vision & Contact” desktop**  
   Création d'une section courte, humaine, professionnelle et orientée problème terrain, avec formulaire simple.

4. **Sprint 4 — Motion design, animations et transitions**  
   Standardisation des animations : globe, scroll, cartes interactives, boutons, transitions entre sections, accessibilité et performance.

5. **Sprint 5 — Adaptation mobile complète**  
   Refonte de l'expérience mobile : navigation simplifiée, hero mobile, téléphone + globe, accordéons interactifs, vision/contact et footer mobile.

---

# Principes visuels globaux à respecter

## Identité générale

DoorTrack doit rester un outil :

- clair ;
- premium ;
- terrain ;
- technologique ;
- sobre ;
- vivant sans être gadget.

L'interface ne doit pas ressembler à une landing page générique SaaS avec des blocs empilés. Elle doit donner l'impression d'un produit conçu autour de la carte, de la donnée terrain et du pilotage commercial.

## Palette recommandée

Les couleurs doivent rester cohérentes avec la version actuelle.

| Usage | Couleur recommandée | Note |
|---|---:|---|
| Fond principal | `#F8F5EF` ou `#FAF8F3` | Blanc cassé / papier cartographique |
| Texte principal | `#151B23` | Noir doux, pas noir pur |
| Texte secondaire | `#5F6670` | Gris lisible |
| Orange CTA | `#E94722` ou `#F04A23` | Couleur principale des boutons |
| Orange clair badge | `#FCE7DD` | Fond de badges ou icônes |
| Bordures cartes | `rgba(21, 27, 35, 0.08)` | Très subtil |
| Ombres cartes | `rgba(15, 23, 42, 0.08)` | Ombre douce |
| Bleu nuit logo / interface | `#0B2B36` | À utiliser avec parcimonie |

## Typographie

La typographie doit rester sobre, moderne et généreuse.

### Desktop

- Titre hero : entre **72 px et 96 px** selon la largeur écran.
- Gros titres de section : entre **48 px et 64 px**.
- Sous-titres : entre **20 px et 24 px**.
- Texte courant : entre **16 px et 18 px**.
- Labels type `REJOINDRE LA BÊTA` : entre **12 px et 14 px**, uppercase, tracking élevé.

### Mobile

- Titre hero : entre **40 px et 48 px**.
- Titres de section : entre **32 px et 40 px**.
- Texte courant : entre **16 px et 18 px**.
- Labels : **12 px**, uppercase, tracking élevé.

## Règles d'espacement

### Desktop

- Largeur maximale du contenu : **1200 à 1280 px**.
- Marges latérales : **64 px minimum** sur grands écrans.
- Espacement vertical entre sections : **96 à 140 px**.
- Rayon des cartes : **24 à 32 px**.

### Mobile

- Largeur utile : `calc(100% - 40px)`.
- Marges latérales : **20 px**.
- Espacement vertical entre blocs : **32 à 56 px**.
- Rayon des cartes : **20 à 28 px**.

---

# Sprint 1 — Corrections de l'accueil desktop

## Objectif

Corriger les problèmes visibles sur la page d'accueil actuelle sans casser l'identité existante.

Les corrections prioritaires sont :

1. supprimer le bug de transition blanc → noir → blanc dans les premiers centimètres de scroll ;
2. rendre la section d'accueil adaptative à la hauteur réelle de l'écran ;
3. supprimer les indicateurs parasites `01 / 02 / 03 / 04 / 05 / 06` visibles dans les blocs de contenu du bas ;
4. mettre à jour la navigation ;
5. ajouter un footer légal propre et discret.

---

## 1.1 Correction du bug de transition blanc/noir/blanc

### Problème actuel

Sur l'accueil desktop :

- l'utilisateur arrive sur une vue avec des bâtiments 3D latéraux ;
- au scroll, les bâtiments doivent remonter pour donner une vue du dessus, proche d'une logique Google Maps ;
- ensuite, l'expérience doit arriver sur l'écran sticky ;
- actuellement, dans les premiers centimètres de scroll, un fond noir apparaît brutalement ;
- le noir disparaît ensuite vers un fond blanc / clair avec la carte en arrière-plan.

Ce comportement donne une impression de bug visuel.

### Résultat attendu

La transition doit rester entièrement dans une gamme claire :

- blanc cassé ;
- beige très clair ;
- fond cartographique clair ;
- gris très léger ;
- jamais de fond noir intermédiaire.

### Comportement cible

Au scroll :

1. Les bâtiments 3D restent visibles sur fond clair.
2. La caméra ou la perspective évolue progressivement vers une vue du dessus.
3. La carte reste visible en arrière-plan.
4. L'écran sticky prend progressivement sa place.
5. Aucune étape ne doit afficher un écran noir, un flash sombre ou un overlay noir.

### Spécification technique visuelle

- Supprimer tout overlay noir ou background noir appliqué pendant la transition.
- Vérifier les états `initial`, `whileInView`, `animate`, `exit` et les interpolations de couleur.
- Si un overlay est nécessaire pour lisibilité, utiliser uniquement :
  - `rgba(248,245,239,0.75)` ;
  - `rgba(255,255,255,0.7)` ;
  - ou un dégradé clair.
- Interdire toute valeur proche de `#000000`, `#050505`, `#0A0A0A` dans cette transition.

### Critères d'acceptation

- En scrollant lentement depuis le haut de l'accueil, aucun passage noir n'apparaît.
- La carte reste cohérente visuellement du début jusqu'à l'écran sticky.
- La transition est fluide et continue.
- Le site ne donne plus l'impression de changer brutalement d'univers graphique.

---

## 1.2 Adaptation à la hauteur desktop

### Problème actuel

Quand la fenêtre desktop n'est pas en plein écran ou que la hauteur disponible est réduite, certains textes sont rognés.

### Résultat attendu

Le contenu doit s'adapter à la hauteur disponible sans disparaître.

### Règles à appliquer

- Remplacer les hauteurs fixes trop rigides par des hauteurs adaptatives.
- Utiliser `min-height` plutôt que `height` quand un bloc peut contenir plus de texte.
- Utiliser des tailles de texte fluides avec `clamp()`.
- Éviter les containers internes avec `overflow: hidden` si du texte peut être coupé.
- Autoriser le contenu à prendre plus de hauteur si la fenêtre est réduite.

### Recommandations CSS

- Hero desktop : `min-height: 100svh` ou `min-height: 100dvh`.
- Sections longues : `height: auto` + `min-height` raisonnable.
- Titre principal : `font-size: clamp(56px, 6vw, 96px)`.
- Texte courant : `font-size: clamp(16px, 1.2vw, 18px)`.

### Critères d'acceptation

- Sur un écran laptop réduit en hauteur, aucun texte important n'est coupé.
- Les CTA restent accessibles.
- Les animations ne masquent pas les contenus essentiels.
- La page reste lisible entre 700 px et 1000 px de hauteur desktop.

---

## 1.3 Suppression des indicateurs `01 / 02 / 03 / 04 / 05 / 06`

### Problème actuel

Dans les paragraphes du bas de l'accueil, des éléments graphiques avec les numéros `01`, `02`, `03`, `04`, `05`, `06` apparaissent au fil du scroll.

Ces éléments ne sont pas nécessaires et alourdissent l'expérience.

### Modification à faire

- Supprimer ces logos / pastilles / indicateurs de paragraphe dans les blocs de contenu du bas.
- Conserver uniquement les titres, textes, cartes et éléments utiles à la compréhension.

### Critères d'acceptation

- Aucun indicateur numéroté parasite n'apparaît dans les paragraphes du bas.
- La lecture est plus sobre et plus fluide.
- Le site conserve son style premium sans surcharge décorative.

---

## 1.4 Navigation desktop

### Navigation cible desktop

La navbar doit afficher :

- Logo DoorTrack à gauche.
- Liens centrés :
  - **Accueil**
  - **Rejoindre la bêta**
  - **Vision & Contact**
- Bouton principal à droite :
  - **Rejoindre la bêta →**

### Style navbar

- Position : sticky ou fixed selon l'architecture actuelle.
- Placement : haut de page, centré horizontalement.
- Hauteur approximative : **64 à 72 px**.
- Fond : blanc légèrement translucide.
- Blur : léger backdrop blur.
- Rayon : pill / capsule.
- Ombre : très légère.
- Les liens doivent rester lisibles, non collés au bouton.

### Comportement

- Au clic sur **Accueil**, scroll ou navigation vers le haut.
- Au clic sur **Rejoindre la bêta**, scroll vers la section bêta.
- Au clic sur **Vision & Contact**, scroll vers la section correspondante.
- Le bouton principal renvoie aussi vers la section bêta ou vers un formulaire selon l'état retenu.

### Critères d'acceptation

- Les trois onglets sont présents et correctement nommés.
- Aucun ancien lien inutile ne reste visible.
- La navbar reste cohérente avec la DA actuelle.
- Le bouton CTA est prioritaire visuellement sans écraser les liens.

---

## 1.5 Footer légal desktop

### Objectif

Ajouter un footer sobre avec les liens obligatoires et utiles.

### Contenu

Le footer doit contenir :

- DoorTrack
- Mentions légales
- Politique de confidentialité
- CGU
- CGV
- Cookies
- Contact

### Style

- Hauteur desktop : **80 à 120 px**.
- Fond : blanc cassé ou très léger gris chaud.
- Texte : petit, gris, lisible.
- Liens alignés horizontalement sur desktop.
- Une fine ligne de séparation peut être utilisée au-dessus.
- Animation très sobre : apparition douce au scroll uniquement.

### Critères d'acceptation

- Le footer est visible en bas de page.
- Les liens sont présents et cliquables ou prêts à être liés.
- Le footer ne prend pas une place excessive.
- Aucun effet motion agressif n'est appliqué.

---

# Sprint 2 — Section “Rejoindre la bêta” desktop

## Objectif

Créer une section desktop claire, interactive et premium pour présenter les différents niveaux d'engagement possibles.

La section ne doit pas être une succession de tableaux ou de textes. Elle doit être construite comme une expérience visuelle : téléphone, globe cartographique animé, bénéfices, puis cartes interactives.

---

## 2.1 Structure générale desktop

La section **Rejoindre la bêta** doit être composée de 3 blocs maximum :

1. Hero interactif.
2. Choix interactif des 4 niveaux d'engagement.
3. CTA final simple.

Ne pas ajouter :

- grande timeline détaillée ;
- tableau comparatif complet ;
- longue section textuelle ;
- répétition des mêmes bénéfices ;
- blocs supplémentaires non demandés.

---

## 2.2 Bloc 1 — Hero interactif desktop

### Composition générale

Le hero doit reprendre une structure proche de l'existant :

- à gauche : label, titre, texte court, CTA ;
- au centre / légèrement à droite : téléphone avec écran map ;
- derrière le téléphone : globe cartographique animé ;
- à droite : 3 cartes bénéfices compactes.

### Placement desktop recommandé

Pour une largeur desktop de référence entre **1280 px et 1440 px** :

- Container global : `max-width: 1280px`, centré.
- Hauteur du bloc : environ **90 à 100 vh**, avec `min-height` adaptatif.
- Colonne gauche : largeur **35 %**.
- Zone téléphone + globe : largeur **30 %**.
- Colonne bénéfices : largeur **30 %**.
- Gouttières entre colonnes : **32 à 56 px**.

### Colonne gauche

#### Label

Texte :

`REJOINDRE LA BÊTA`

Style :

- uppercase ;
- tracking élevé ;
- orange ;
- taille 12 à 14 px ;
- marge basse 24 px.

#### Titre

Texte :

**Construire avec les pros du terrain, pour les pros du terrain.**

Style desktop :

- taille : 64 à 84 px selon écran ;
- interligne serré : 0.95 à 1.05 ;
- poids fort ;
- couleur texte principal.

#### Paragraphe

Texte :

DoorTrack est conçu pour les équipes de prospection terrain. Vos retours nous aident à créer un outil vraiment utile.

Style :

- taille : 17 à 19 px ;
- couleur secondaire ;
- largeur maximale : 460 px ;
- marge haute : 24 px.

#### Boutons

Bouton principal :

**Rejoindre la bêta →**

Bouton secondaire :

**En savoir plus**

Placement :

- alignement horizontal sur desktop ;
- marge haute : 32 px ;
- gap : 16 px.

Style bouton principal :

- fond orange ;
- texte blanc ;
- hauteur 52 à 58 px ;
- padding horizontal 28 à 36 px ;
- rayon capsule ;
- ombre très douce.

Style bouton secondaire :

- fond blanc ou transparent ;
- bordure légère ;
- texte foncé ;
- même hauteur que le CTA principal.

---

## 2.3 Téléphone + globe desktop

### Téléphone

Le téléphone doit être centré dans sa colonne.

Contenu affiché dans le téléphone :

- écran carte terrain ;
- pins colorés ;
- interface mobile DoorTrack ;
- ne pas utiliser un écran trop générique ou une image vide.

Dimensions desktop recommandées :

- largeur téléphone : **260 à 340 px** ;
- hauteur proportionnelle ;
- le téléphone ne doit pas dépasser visuellement le titre principal.

### Globe cartographique derrière le téléphone

Le globe est un élément central de la section.

#### Rendu attendu

- Sphère ou réseau circulaire semi-transparent.
- Doit évoquer une carte / un maillage terrain.
- Doit tourner lentement autour ou derrière le téléphone.
- Ne doit pas ressembler à une planète réaliste complète.
- Ne doit pas être une plateforme plate.
- Doit rester élégant, léger et premium.

#### Placement

- Le globe doit être derrière le téléphone.
- Le téléphone reste au premier plan.
- Le globe dépasse légèrement à gauche et à droite du téléphone.
- Opacité faible à moyenne : environ 20 % à 45 %.
- Couleur dominante : orange clair / beige / gris cartographique.

#### Animation

- Rotation lente continue.
- Durée d'une rotation complète : **24 à 40 secondes**.
- Mouvement constant, non agressif.
- Possibilité d'avoir 2 ou 3 anneaux orbitaux avec vitesses différentes.

---

## 2.4 Cartes bénéfices à droite

### Nombre de cartes

3 cartes uniquement.

### Placement desktop

- Colonne droite.
- Cartes empilées verticalement.
- Gap : 24 px environ.
- Largeur : 300 à 380 px.
- Chaque carte : hauteur entre 120 et 160 px.

### Style

- fond blanc ;
- border `1px solid rgba(21,27,35,0.08)` ;
- rayon 24 à 28 px ;
- ombre douce ;
- icône orange claire à gauche / haut gauche ;
- badge discret orange clair en bas ou sous le texte.

### Carte 1

Titre :

**Des outils pensés pour vos réalités terrain**

Texte :

Partagez vos usages et contraintes pour orienter les fonctionnalités utiles.

Badge :

**CO-CONSTRUCTION**

### Carte 2

Titre :

**Un accès anticipé à la solution**

Texte :

Testez les premières versions et gardez une longueur d'avance.

Badge :

**ACCÈS PRIORITAIRE**

### Carte 3

Titre :

**Une contribution reconnue**

Texte :

Vos retours peuvent influencer les priorités produit.

Badge :

**ROADMAP**

---

## 2.5 Bloc 2 — Choix interactif des niveaux d'engagement desktop

### Objectif

Présenter les 4 niveaux d'engagement sans tout afficher d'un coup.

Il faut éviter les tableaux lourds et les longues timelines. Le visiteur doit comprendre rapidement qu'il existe 4 portes d'entrée, puis explorer celle qui l'intéresse.

### Titre de bloc

**Choisissez le niveau adapté à votre maturité terrain**

### Sous-titre

**Sélectionnez le rôle qui correspond le mieux à votre organisation et à vos objectifs.**

### Layout desktop prioritaire

Structure en deux zones :

- à gauche : liste verticale de 4 cartes compactes ;
- à droite : panneau de détail de la carte active.

### Placement recommandé

Container :

- `max-width: 1180px` ;
- centré ;
- marge haute depuis hero : 80 à 120 px.

Zone gauche :

- largeur : **36 %** ;
- 4 cartes empilées ;
- gap : 16 px.

Zone droite :

- largeur : **64 %** ;
- panneau de détail large ;
- hauteur minimale alignée avec la liste de gauche.

---

## 2.6 États des cartes d'engagement desktop

### État fermé

Chaque carte fermée affiche :

- icône ;
- titre ;
- sous-titre court ;
- petit chevron ou indicateur d'ouverture.

### État actif / hover / clic

Quand une carte est survolée ou cliquée :

- la carte s'agrandit légèrement ;
- le contour devient orange ;
- l'ombre augmente très légèrement ;
- les autres cartes se décalent avec fluidité ;
- le panneau de droite affiche les informations du niveau sélectionné ;
- l'état actif doit rester visible après clic.

### Règle d'interaction

- Desktop : activation au hover + clic.
- Si l'utilisateur clique, la carte reste active même après sortie du hover.
- Une seule carte active à la fois.

---

## 2.7 Contenu des 4 niveaux d'engagement

### Niveau 1 — Contributeur terrain

#### Carte fermée

Titre :

**Contributeur terrain**

Sous-titre :

Partagez vos retours sans engagement financier.

#### Panneau actif

Titre :

**Contributeur terrain**

Label :

**NIVEAU D'IMPLICATION : FAIBLE**

Texte court :

Votre expérience terrain guide DoorTrack dès le départ, sans engagement financier.

Bénéfices :

- Partagez vos usages et irritants terrain.
- Aidez à façonner un outil vraiment utile.
- Accédez en avant-première aux nouveautés.

CTA :

**Je contribue**

---

### Niveau 2 — Entreprise pilote

#### Carte fermée

Titre :

**Entreprise pilote**

Sous-titre :

Formalisez votre intérêt et réservez une priorité de test.

#### Panneau actif

Titre :

**Entreprise pilote**

Label :

**NIVEAU D'IMPLICATION : MOYEN**

Texte court :

Vous validez l'intérêt de DoorTrack pour votre organisation et préparez un futur test.

Bénéfices :

- Décrivez vos besoins prioritaires.
- Indiquez le nombre d'utilisateurs visés.
- Réservez une priorité pour un futur pilote.

CTA :

**Candidater comme pilote**

---

### Niveau 3 — Early Adopter

#### Carte fermée

Titre :

**Early Adopter**

Sous-titre :

Accédez en priorité aux premières versions.

#### Panneau actif

Titre :

**Early Adopter**

Label :

**NIVEAU D'IMPLICATION : ÉLEVÉ**

Texte court :

Vous sécurisez un accès prioritaire et participez plus directement aux évolutions du produit.

Bénéfices :

- Sécurisez un accès prioritaire.
- Bénéficiez de conditions préférentielles.
- Influencez les priorités produit.

CTA :

**Devenir Early Adopter**

---

### Niveau 4 — Pilote terrain encadré

#### Carte fermée

Titre :

**Pilote terrain encadré**

Sous-titre :

Testez DoorTrack dans un cadre accompagné.

#### Panneau actif

Titre :

**Pilote terrain encadré**

Label :

**NIVEAU D'IMPLICATION : TRÈS ÉLEVÉ**

Texte court :

Vous testez DoorTrack sur une équipe réelle avec un périmètre, des objectifs et des indicateurs.

Bénéfices :

- Testez sur une équipe réelle.
- Définissez un périmètre et des objectifs.
- Suivez les KPI terrain avec un cadre clair.

CTA :

**Étudier un pilote terrain**

---

## 2.8 Bloc 3 — CTA final desktop

### Placement

Sous les niveaux d'engagement, avec une marge haute de 64 à 96 px.

### Design

- Grande carte horizontale.
- Fond blanc.
- Rayon 28 à 32 px.
- Bordure légère.
- Icône message à gauche.
- Texte au centre.
- Deux boutons à droite.

### Texte

Titre :

**Vous ne savez pas quel niveau choisir ?**

Texte :

Échangeons sur votre organisation terrain, votre équipe commerciale et vos objectifs. Nous vous orienterons vers le niveau d'engagement le plus adapté.

Boutons :

- **Être rappelé →**
- **Prendre contact**

### Critères d'acceptation du sprint 2

- La section bêta ne contient pas de tableau comparatif lourd.
- La timeline 01/02/03/04 n'est pas utilisée en élément principal.
- Le téléphone avec map est visible dans le hero.
- Le globe cartographique tourne derrière le téléphone.
- Les 4 niveaux sont interactifs.
- Le contenu détaillé apparaît uniquement pour le niveau actif.
- La section reste claire, moderne et cohérente avec le site existant.

---

# Sprint 3 — Section “Vision & Contact” desktop

## Objectif

Créer une section courte, humaine et professionnelle, qui explique pourquoi DoorTrack existe et permet de prendre contact facilement.

La section doit être beaucoup plus courte que la version précédente. Elle ne doit pas devenir un long manifeste.

---

## 3.1 Structure desktop

La section doit contenir uniquement :

1. Une intro courte.
2. Une phrase forte mise en avant.
3. Trois bénéfices simples.
4. Un formulaire de contact.

---

## 3.2 Intro courte

### Placement desktop

- Section en fond clair.
- Container `max-width: 1180px`.
- Bloc texte à gauche ou en haut selon la composition.
- Grande respiration visuelle.

### Label

`VISION & CONTACT`

### Titre

**Une idée née du terrain, pas d'un bureau.**

### Texte

DoorTrack est né d'un constat simple : en prospection terrain, trop d'informations utiles se perdent entre la rue, le commercial et le manager.

---

## 3.3 Phrase forte mise en avant

### Texte

**Le problème, ce n'est pas le manque d'effort.**  
**C'est le manque de visibilité.**

### Style

- Carte blanche large.
- Texte très grand.
- Première phrase en texte foncé.
- Deuxième phrase en orange.
- Peut inclure une ligne orbitale ou un tracé cartographique discret en fond.
- Ne pas ajouter de paragraphe long autour.

### Placement desktop

- À droite de l'intro ou sous l'intro selon largeur.
- Taille suffisante pour être un vrai moment visuel.
- Hauteur : environ 260 à 360 px.

---

## 3.4 Trois bénéfices

### Titre

**Transformer la prospection terrain en données exploitables.**

### Sous-texte

DoorTrack rend la prospection plus lisible, plus mesurable et plus actionnable.

### Cartes

#### Carte 1

**Voir où l'équipe est passée**

Suivez les tournées et les visites en temps réel.

#### Carte 2

**Ne plus perdre les informations terrain**

Centralisez les comptes rendus et les données clés.

#### Carte 3

**Piloter avec une donnée claire**

Prenez de meilleures décisions, plus vite.

### Style

- Trois cartes horizontales sur desktop.
- Fond blanc.
- Icône orange claire.
- Texte court.
- Pas de paragraphes longs.

---

## 3.5 Formulaire de contact desktop

### Bloc formulaire

Titre :

**Échangeons sur votre réalité terrain**

Texte :

Vous managez une équipe terrain ou vous pratiquez la prospection porte-à-porte ? Parlons de vos besoins, de vos contraintes et de ce que DoorTrack peut vous apporter.

### Champs

- Nom
- Entreprise
- Fonction
- Email
- Message

### Bouton

**Échanger sur DoorTrack →**

### Placement desktop

- Carte large.
- Texte à gauche.
- Formulaire à droite.
- Champs en grille 2 colonnes si possible.
- Message sur pleine largeur.

### Style formulaire

- Fonds de champs : blanc ou très clair.
- Bordures fines.
- Focus : bordure orange.
- Bouton principal orange.
- Coins arrondis.

### Critères d'acceptation du sprint 3

- La section Vision & Contact est courte.
- Aucun long paragraphe inutile n'apparaît.
- La phrase forte est visible immédiatement.
- Le formulaire est simple.
- La section donne une impression humaine, professionnelle et terrain.

---

# Sprint 4 — Motion design, animations et transitions

## Objectif

Standardiser toutes les animations du site pour obtenir une expérience fluide, premium et maîtrisée.

Les animations doivent servir la compréhension. Elles ne doivent pas être décoratives ou excessives.

---

## 4.1 Principes motion généraux

### À rechercher

- fluidité ;
- inertie légère ;
- transitions douces ;
- micro-interactions propres ;
- continuité au scroll ;
- impression premium.

### À éviter

- rotations brutales ;
- effets néon ;
- animations trop rapides ;
- textes qui volent dans tous les sens ;
- empilements d'animations ;
- parallaxe excessive ;
- transitions noires ou flashs sombres.

---

## 4.2 Animation du globe derrière le téléphone

### État attendu

Le globe doit être l'élément motion principal de la section **Rejoindre la bêta**.

### Comportement

- Rotation lente continue.
- Mouvement circulaire fluide.
- Peut contenir des arcs orbitaux, points et traits cartographiques.
- Doit rester derrière le téléphone.
- Doit rester semi-transparent.

### Paramètres recommandés

- Durée rotation principale : **24 à 40 s**.
- Durée anneaux secondaires : **18 à 55 s** selon l'anneau.
- Easing : linéaire pour rotation continue.
- Opacité : 20 % à 45 %.
- Pas de variation trop visible de scale.

### Sur mobile

- Conserver le globe, mais le simplifier.
- Réduire le nombre d'anneaux si nécessaire.
- Prioriser la fluidité.

---

## 4.3 Animation du téléphone

### Comportement

- Léger floating vertical.
- Amplitude : 4 à 8 px maximum.
- Durée : 4 à 6 s.
- Easing : ease-in-out.

### Interdictions

- Ne pas faire tourner le téléphone.
- Ne pas créer de gros zoom automatique.
- Ne pas rendre le téléphone instable ou flottant de manière excessive.

---

## 4.4 Animation des cartes bénéfices

### Entrée au scroll

- Fade-in.
- Slide-up léger de 16 à 24 px.
- Délai progressif entre cartes : 80 à 140 ms.

### Hover desktop

- Léger déplacement vertical : -3 à -6 px.
- Ombre légèrement renforcée.
- Bordure très légèrement plus visible.
- Icône avec micro-scale maximum 1.04.

### Mobile

- Pas de hover.
- Apparition au scroll uniquement.

---

## 4.5 Animation des niveaux d'engagement desktop

### Interaction

Quand une carte est active :

- scale : 1.02 à 1.04 maximum ;
- bordure orange ;
- ombre renforcée ;
- panneau de détail mis à jour avec fade/slide.

### Panneau de détail

Lors du changement de niveau actif :

- ancien contenu : fade-out rapide ;
- nouveau contenu : fade-in + slide-up 8 à 12 px ;
- durée totale : 250 à 400 ms.

### Repositionnement des cartes

- Les autres cartes ne doivent pas sauter brutalement.
- Utiliser une animation de layout fluide.
- Durée : 300 à 450 ms.
- Easing : spring léger ou ease-out.

---

## 4.6 Animation des accordéons mobile

### Ouverture

- Durée : 300 à 450 ms.
- Hauteur animée progressivement.
- Opacité du contenu : 0 → 1.
- Chevron : rotation 180°.
- Les cartes suivantes descendent naturellement.

### Fermeture

- Durée : 250 à 350 ms.
- Ne pas créer de saut de scroll brutal.

### Règle

Une seule carte ouverte à la fois par défaut.

---

## 4.7 Animation des boutons

### Bouton principal

Au hover desktop :

- translation légère : -2 px ;
- ombre renforcée ;
- fond orange légèrement plus intense ;
- flèche qui avance de 3 à 5 px.

Au clic :

- scale 0.98 très bref.

### Bouton secondaire

Au hover :

- fond légèrement teinté ;
- bordure plus visible ;
- texte légèrement plus foncé.

---

## 4.8 Transitions au scroll entre sections

### Accueil → Rejoindre la bêta

- Transition douce.
- Pas de rupture chromatique.
- Passage du fond cartographique existant vers le fond bêta clair.
- Le contenu ne doit pas apparaître brutalement.

### Hero bêta → Niveaux d'engagement

- Le téléphone et le globe peuvent légèrement perdre en opacité ou remonter hors focus.
- Les cartes d'engagement apparaissent avec fade + slide-up.
- Sensation de continuité, pas de nouvelle page plaquée.

### Niveaux d'engagement → Vision & Contact

- Transition plus calme.
- Réduction de la densité visuelle.
- Apparition de la phrase forte.

---

## 4.9 Accessibilité motion

Prévoir un comportement réduit si l'utilisateur a activé la réduction de mouvement.

### Si `prefers-reduced-motion: reduce`

- Désactiver la rotation continue du globe.
- Désactiver le floating du téléphone.
- Conserver uniquement des transitions simples fade-in.
- Garder les interactions fonctionnelles.

---

## 4.10 Critères d'acceptation du sprint 4

- Les animations sont visibles mais jamais agressives.
- Le globe tourne derrière le téléphone de façon fluide.
- Les transitions au scroll sont continues.
- Les cartes interactives ne sautent pas brutalement.
- Les boutons ont des micro-interactions propres.
- L'expérience reste fluide sur desktop et mobile.

---

# Sprint 5 — Adaptation mobile complète

## Objectif

Créer une vraie expérience mobile, et non une version desktop compressée.

Sur mobile, il faut réduire, hiérarchiser et transformer les composants pour un usage vertical fluide.

La logique mobile doit être :

**Comprendre → Voir le produit → Choisir un niveau → Contacter**

---

## 5.1 Navigation mobile

### Problème à corriger

La navigation actuelle conserve trop d'éléments. Certains boutons ou liens se superposent, sont coupés ou créent une impression de site non finalisé.

### Structure cible

Sur mobile, la navbar affiche uniquement :

- logo DoorTrack à gauche ;
- bouton **Rejoindre la bêta** à droite.

Les liens centraux sont masqués :

- Accueil ;
- Rejoindre la bêta ;
- Vision & Contact.

### Dimensions recommandées

- Hauteur navbar : **72 px**.
- Padding horizontal : **20 px**.
- Logo : hauteur 32 à 40 px.
- CTA : hauteur 44 à 48 px.
- Fond : blanc légèrement translucide.
- Bordure basse très fine.

### Comportement

- Navbar sticky en haut.
- Le bouton CTA renvoie vers la section bêta ou le formulaire selon la position retenue.
- Le bouton ne doit jamais passer sur deux lignes.

---

## 5.2 Hero mobile “Rejoindre la bêta”

### Ordre d'affichage

1. Navbar.
2. Label `REJOINDRE LA BÊTA`.
3. Titre principal.
4. Paragraphe court.
5. Boutons.
6. Téléphone avec globe animé.
7. Trois cartes bénéfices.

### Texte

Label :

`REJOINDRE LA BÊTA`

Titre :

**Construire avec les pros du terrain, pour les pros du terrain.**

Paragraphe :

DoorTrack est conçu pour les équipes de prospection terrain. Vos retours nous aident à créer un outil vraiment utile.

Bouton principal :

**Rejoindre la bêta →**

Bouton secondaire :

**En savoir plus**

### Dimensions mobile

- Largeur utile : `calc(100% - 40px)`.
- Marges : 20 px à gauche et droite.
- Titre : 40 à 48 px.
- Interligne titre : 1.0 à 1.08.
- Paragraphe : 17 à 18 px.
- Boutons : largeur adaptable ; sur petits écrans, ils peuvent être empilés.

### Placement

Le titre doit apparaître avant le téléphone. Le téléphone ne doit pas remonter trop haut ni couper la lecture du texte.

---

## 5.3 Téléphone + globe mobile

### Téléphone

- Centré.
- Largeur : **78 % à 86 %** de l'écran.
- Max-width : **360 px**.
- Contenu : écran map DoorTrack.
- Ne jamais couper le téléphone sauf effet volontaire maîtrisé.

### Globe

- Derrière le téléphone.
- Plus discret que desktop.
- Opacité : 15 % à 30 %.
- Rotation lente.
- Ne doit pas gêner la lisibilité de la map.

### Placement

Le bloc téléphone + globe doit commencer après les CTA, avec une marge haute d'environ 48 px.

---

## 5.4 Cartes bénéfices mobile

### Placement

Sous le téléphone, en colonne verticale.

### Format

- Pleine largeur utile.
- Fond blanc.
- Coins arrondis : 24 à 28 px.
- Padding : 24 à 28 px.
- Gap entre cartes : 16 px.
- Icône à gauche.
- Texte court.
- Badge orange discret.

### Carte 1

Titre :

**Des outils pensés pour vos réalités terrain**

Texte :

Partagez vos usages et contraintes pour orienter les fonctionnalités utiles.

Badge :

**CO-CONSTRUCTION**

### Carte 2

Titre :

**Un accès anticipé à la solution**

Texte :

Testez les premières versions et gardez une longueur d'avance.

Badge :

**ACCÈS PRIORITAIRE**

### Carte 3

Titre :

**Une contribution reconnue**

Texte :

Vos retours peuvent influencer les priorités produit.

Badge :

**ROADMAP**

---

## 5.5 Section engagements mobile

### Problème à corriger

La timeline `01 / 02 / 03 / 04` est inutile sur mobile. Elle occupe de la place sans améliorer la compréhension.

### Modification à faire

Supprimer la timeline sur mobile et la remplacer par des accordéons verticaux interactifs.

### Titre

**Choisissez le niveau adapté à votre maturité terrain**

### Sous-titre

**Sélectionnez le rôle qui correspond le mieux à votre organisation et à vos objectifs.**

### Structure

4 accordéons :

1. Contributeur terrain
2. Entreprise pilote
3. Early Adopter
4. Pilote terrain encadré

### État fermé

Chaque carte fermée affiche :

- icône ;
- titre ;
- sous-titre court ;
- chevron vers le bas.

### État ouvert

Quand l'utilisateur appuie sur une carte :

- la carte s'agrandit ;
- le contenu apparaît ;
- les autres cartes descendent ;
- le chevron se retourne ;
- le CTA apparaît en bas.

Une seule carte ouverte à la fois par défaut.

---

## 5.6 Contenu des accordéons mobile

### Accordéon 1 — Contributeur terrain

Sous-titre fermé :

Partagez vos retours sans engagement financier.

Contenu ouvert :

- Partagez vos usages et retours terrain.
- Aidez à façonner un outil vraiment utile.
- Accédez en avant-première aux nouveautés.

Niveau d'implication : **Faible**

CTA :

**Je contribue**

---

### Accordéon 2 — Entreprise pilote

Sous-titre fermé :

Formalisez votre intérêt et réservez une priorité de test.

Contenu ouvert :

- Décrivez vos besoins prioritaires.
- Indiquez le nombre d'utilisateurs visés.
- Réservez une priorité pour un futur pilote.

Niveau d'implication : **Moyen**

CTA :

**Candidater comme pilote**

---

### Accordéon 3 — Early Adopter

Sous-titre fermé :

Accédez en priorité aux premières versions.

Contenu ouvert :

- Sécurisez un accès prioritaire.
- Bénéficiez de conditions préférentielles.
- Influencez les priorités produit.

Niveau d'implication : **Élevé**

CTA :

**Devenir Early Adopter**

---

### Accordéon 4 — Pilote terrain encadré

Sous-titre fermé :

Testez DoorTrack dans un cadre accompagné.

Contenu ouvert :

- Testez sur une équipe réelle.
- Définissez un périmètre et des objectifs.
- Suivez les KPI terrain avec un cadre clair.

Niveau d'implication : **Très élevé**

CTA :

**Étudier un pilote terrain**

---

## 5.7 CTA final mobile

### Placement

Après les 4 accordéons.

### Texte

Titre :

**Vous ne savez pas quel niveau choisir ?**

Texte :

Nos équipes peuvent vous guider vers le niveau le plus adapté à vos besoins.

Boutons :

- **Être rappelé**
- **Prendre contact**

### Style

- Carte pleine largeur.
- Fond blanc.
- Coins arrondis.
- Boutons empilables si largeur insuffisante.

---

## 5.8 Vision & Contact mobile

### Objectif

Rendre la section courte, lisible et directe.

### Structure

1. Intro courte.
2. Citation forte.
3. Trois cartes bénéfices.
4. Formulaire.

### Label

`VISION & CONTACT`

### Titre

**Une idée née du terrain, pas d'un bureau.**

### Texte

Trop d'informations utiles se perdent entre la rue, le commercial et le manager.

### Citation forte

**Le problème, ce n'est pas le manque d'effort.**  
**C'est le manque de visibilité.**

### Cartes bénéfices

#### Carte 1

**Voir où l'équipe est passée**

Suivez les tournées et les visites en temps réel.

#### Carte 2

**Ne plus perdre les informations terrain**

Centralisez les comptes rendus et les données clés.

#### Carte 3

**Piloter avec une donnée claire**

Prenez de meilleures décisions, plus vite.

### Formulaire mobile

Titre :

**Parlons de votre terrain**

Champs :

- Nom
- Entreprise
- Email
- Message

Bouton :

**Échanger sur DoorTrack →**

### Règles mobile

- Tous les champs en pleine largeur.
- Message en textarea de hauteur confortable.
- Bouton pleine largeur.
- Ne pas ajouter de texte long.

---

## 5.9 Footer mobile

### Contenu

- DoorTrack
- Mentions légales
- Politique de confidentialité
- CGU
- CGV
- Cookies
- Contact

### Style

- Compact.
- Liens empilés ou en grille simple.
- Texte petit mais lisible.
- Pas d'animation forte.

---

## 5.10 Ce qu'il faut supprimer ou masquer sur mobile

- Navbar complète avec tous les liens.
- Timeline `01 / 02 / 03 / 04`.
- Tableaux comparatifs.
- Longs paragraphes.
- Sections répétitives.
- Parallaxe lourde.
- Effets 3D trop consommateurs.
- Tout contenu qui oblige à scroller longtemps avant de comprendre ou d'agir.

---

## 5.11 Critères d'acceptation du sprint 5

- La version mobile n'est plus une version desktop compressée.
- La navigation est claire et compacte.
- Le téléphone et le globe sont visibles sans couper les contenus.
- Les bénéfices sont lisibles.
- Les engagements sont présentés sous forme d'accordéons fluides.
- Vision & Contact est courte et actionnable.
- Le formulaire est utilisable facilement au pouce.
- Les animations restent fluides sur mobile.

---

# Checklist finale globale

## Desktop

- [ ] Le bug noir dans le header accueil est supprimé.
- [ ] La transition accueil reste claire du début à la fin.
- [ ] Les textes ne sont plus rognés sur les hauteurs desktop réduites.
- [ ] Les indicateurs parasites 01/02/03/04/05/06 sont supprimés.
- [ ] La navbar affiche Accueil, Rejoindre la bêta, Vision & Contact.
- [ ] Le footer légal est ajouté.
- [ ] La section bêta affiche téléphone + globe tournant.
- [ ] Les 4 niveaux d'engagement sont interactifs.
- [ ] Vision & Contact reste court et professionnel.

## Mobile

- [ ] La navbar mobile est simplifiée.
- [ ] Le hero mobile respecte l'ordre texte → CTA → téléphone → bénéfices.
- [ ] Le globe reste visible mais léger.
- [ ] Les cartes bénéfices sont empilées proprement.
- [ ] Les engagements sont en accordéons.
- [ ] Vision & Contact est réduite et lisible.
- [ ] Le formulaire mobile est simple.
- [ ] Le footer mobile est compact.

## Motion

- [ ] Les scroll transitions sont fluides.
- [ ] Le globe tourne lentement.
- [ ] Le téléphone flotte subtilement.
- [ ] Les boutons ont des micro-interactions.
- [ ] Les cartes actives s'ouvrent sans saut brutal.
- [ ] Les animations respectent les performances mobile.
