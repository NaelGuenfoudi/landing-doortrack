# Plan d’exécution Antigravity — Landing page Doortrack

## 1. Rôle de ce fichier

Ce document complète le cahier des charges principal :

```txt
cahier_des_charges_landing_page_doortrack_framer_motion_v4_autosuffisant.md
```

Le cahier des charges V4 décrit **ce qu’il faut construire**.  
Ce fichier décrit **comment le construire étape par étape avec Antigravity**, en découpant le travail en sprints clairs, contrôlables et validables.

Objectif : éviter de demander à Antigravity de tout faire d’un coup.

La mauvaise méthode serait :

```txt
Voici le cahier des charges complet, code-moi toute la landing page.
```

La bonne méthode est :

```txt
On avance sprint par sprint.
Chaque sprint a un objectif.
Chaque sprint est validé visuellement.
L’agent ne passe pas à l’étape suivante tant que la base précédente n’est pas propre.
```

---

## 2. Principe général de travail avec Antigravity

Antigravity doit être utilisé comme un assistant de développement piloté, pas comme un exécutant laissé en autonomie totale.

À chaque sprint, imposer cette méthode :

```txt
1. Lire le cahier des charges V4.
2. Lire le présent plan d’exécution.
3. Résumer l’objectif du sprint.
4. Proposer un plan court.
5. Attendre validation.
6. Coder uniquement ce qui est demandé.
7. Lancer le projet.
8. Vérifier dans le navigateur.
9. Lister les fichiers modifiés.
10. Expliquer ce qui est terminé et ce qui reste à faire.
```

Règle importante :

```txt
Ne jamais lancer plusieurs gros chantiers dans le même sprint.
```

---

## 3. Résultat final attendu

À la fin des sprints, le projet doit contenir :

- une landing page Doortrack claire, premium et animée ;
- un téléphone mockup SaaS fixe au centre ;
- les captures réelles de l’application intégrées telles quelles ;
- un ordre d’écrans : Carte → Accueil → Prospects ;
- une transition interne en slide horizontal mobile ;
- des textes autour qui changent avec fade + blur + cascade ;
- deux callouts maximum par section ;
- une map très transparente en fond global ;
- une section CTA finale ;
- une page `/contact` avec formulaire ;
- un responsive propre ;
- un build production sans erreur.

---

## 4. Prérequis avant de commencer

## 4.1 Outils nécessaires

Installer ou préparer :

```txt
Antigravity
Google Chrome
Node.js LTS
npm
Git
Compte GitHub
Compte Vercel ou Netlify
Éditeur de code intégré à Antigravity ou VS Code
```

## 4.2 Stack technique retenue

Le projet doit utiliser :

```txt
Next.js
TypeScript
Tailwind CSS
Framer Motion
lucide-react
```

Pourquoi cette stack :

- Next.js : base robuste pour landing page et routing `/contact` ;
- TypeScript : meilleure structure et moins d’erreurs ;
- Tailwind CSS : rapidité de mise en page ;
- Framer Motion : transitions fluides au scroll ;
- lucide-react : icônes propres, modernes et sobres.

---

## 5. Fichiers à préparer avant codage

## 5.1 Cahier des charges principal

Placer dans le projet :

```txt
/docs/cahier_des_charges_landing_page_doortrack_framer_motion_v4_autosuffisant.md
```

## 5.2 Présent plan d’exécution

Placer dans le projet :

```txt
/docs/plan_execution_antigravity_doortrack.md
```

## 5.3 Captures de l’application

Préparer les 3 captures définitives en haute qualité.

Chemins attendus :

```txt
/public/screens/doortrack-map.webp
/public/screens/doortrack-home.webp
/public/screens/doortrack-prospects.webp
```

Règles :

- les captures doivent être propres ;
- elles doivent être au même ratio ;
- elles doivent être en portrait ;
- elles doivent être non déformées ;
- elles ne doivent pas être compressées par une messagerie ;
- elles doivent venir directement de l’outil source ou d’un export propre.

## 5.4 Asset de fond map

Prévoir ou générer :

```txt
/public/assets/map-pattern.svg
```

Ce fichier doit représenter une map très légère :

- rues ;
- blocs ;
- parcelles ;
- quelques points ;
- aucun label de rue ;
- aucune couleur forte.

Opacité finale dans le site :

```txt
environ 5 %
```

---

## 6. Structure cible du projet

Antigravity doit viser cette structure :

```txt
doortrack-landing/
├─ docs/
│  ├─ cahier_des_charges_landing_page_doortrack_framer_motion_v4_autosuffisant.md
│  └─ plan_execution_antigravity_doortrack.md
├─ public/
│  ├─ screens/
│  │  ├─ doortrack-map.webp
│  │  ├─ doortrack-home.webp
│  │  └─ doortrack-prospects.webp
│  └─ assets/
│     └─ map-pattern.svg
├─ src/
│  ├─ app/
│  │  ├─ page.tsx
│  │  ├─ contact/
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ globals.css
│  ├─ components/
│  │  ├─ Header.tsx
│  │  ├─ GlobalMapBackground.tsx
│  │  ├─ StickyPhoneStage.tsx
│  │  ├─ PhoneFrame.tsx
│  │  ├─ PhoneImageScreen.tsx
│  │  ├─ PhoneOverlayLayer.tsx
│  │  ├─ ScrollSection.tsx
│  │  ├─ SectionCopy.tsx
│  │  ├─ CalloutCard.tsx
│  │  ├─ CaptionBar.tsx
│  │  ├─ FinalCTASection.tsx
│  │  └─ CTAButton.tsx
│  ├─ data/
│  │  └─ landingSections.ts
│  └─ lib/
│     └─ motion.ts
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

---

## 7. Règles de pilotage Antigravity

## 7.1 Règle n°1 — Ne pas tout faire d’un coup

Antigravity ne doit pas recevoir une mission trop large du type :

```txt
Code toute la landing page complète avec toutes les animations.
```

C’est trop large.  
Le résultat risque d’être joli mais instable, mal structuré ou différent de la vision.

## 7.2 Règle n°2 — Valider sprint par sprint

Chaque sprint doit se terminer par une validation :

```txt
Est-ce que ça fonctionne ?
Est-ce que c’est fidèle ?
Est-ce que c’est propre ?
Est-ce que la base suivante peut être construite dessus ?
```

## 7.3 Règle n°3 — Ne pas recoder l’application

Antigravity ne doit jamais reconstruire les écrans internes de Doortrack en React.

Il doit utiliser :

```txt
les captures d’écran réelles
```

Il peut uniquement ajouter :

- halos ;
- faux taps ;
- overlays ;
- effets de focus ;
- micro-pulses.

## 7.4 Règle n°4 — Le téléphone est le pivot

Le téléphone doit rester :

- fixe ;
- centré ;
- stable ;
- en portrait ;
- sans rotation ;
- sans zoom fort.

Si Antigravity commence à animer le téléphone lui-même, il faut corriger immédiatement.

## 7.5 Règle n°5 — Les animations doivent servir la compréhension

Animations autorisées :

- slide horizontal dans le téléphone ;
- fade + blur pour les textes ;
- halo léger ;
- faux tap ;
- parallax très léger du fond map.

Animations à refuser :

- page-turn 3D ;
- cube 3D ;
- téléphone qui tourne ;
- zoom spectaculaire ;
- éléments qui volent partout ;
- sur-animation startup gadget.

---

# 8. Vue globale des sprints

| Sprint | Objectif | Résultat attendu |
|---|---|---|
| Sprint 0 | Préparation | Antigravity comprend le projet et planifie correctement |
| Sprint 1 | Base technique | Projet Next.js fonctionnel |
| Sprint 2 | Layout + fond | Page claire structurée avec map subtile |
| Sprint 3 | Téléphone + captures | Téléphone central avec capture Carte affichée |
| Sprint 4 | Sticky + transition écrans | Téléphone fixe et changement Carte → Accueil → Prospects |
| Sprint 5 | Textes dynamiques | Callouts et textes synchronisés avec les écrans |
| Sprint 6 | Overlays animés | Faux taps, halos, micro-interactions |
| Sprint 7 | Contact + responsive + QA | Version finale exploitable |

---

# 9. Sprint 0 — Préparation et cadrage

## Objectif

Faire comprendre le projet à Antigravity sans commencer à coder.

## À fournir à Antigravity

- cahier des charges V4 ;
- présent plan d’exécution ;
- captures si déjà disponibles ;
- objectif final.

## Prompt à utiliser

```txt
Lis attentivement les deux fichiers suivants :

1. /docs/cahier_des_charges_landing_page_doortrack_framer_motion_v4_autosuffisant.md
2. /docs/plan_execution_antigravity_doortrack.md

Ne code rien pour l’instant.

Ta mission est uniquement de vérifier que tu comprends le projet.

Produis :
1. un résumé du concept de la landing page ;
2. les règles absolues à respecter ;
3. les composants à créer ;
4. les risques techniques ;
5. l’ordre de développement sprint par sprint ;
6. les assets nécessaires.

Rappel critique :
- ne pas recoder l’application ;
- utiliser les captures comme visuels sources ;
- téléphone fixe central ;
- ordre des écrans : Carte → Accueil → Prospects ;
- CTA vers /contact ;
- pas de mention MVP, construction ou avancement produit.
```

## Critères de validation

Valider uniquement si Antigravity répond clairement :

```txt
Le téléphone reste fixe.
Les captures sont utilisées telles quelles.
L’application n’est pas recodée.
L’ordre est Carte → Accueil → Prospects.
Les textes autour changent au scroll.
Les CTA pointent vers /contact.
```

---

# 10. Sprint 1 — Base technique du projet

## Objectif

Créer la base Next.js propre, sans animations complexes.

## Tâches

- initialiser Next.js ;
- installer TypeScript ;
- installer Tailwind CSS ;
- installer Framer Motion ;
- installer lucide-react ;
- créer `/` ;
- créer `/contact` ;
- créer header basique ;
- vérifier `npm run dev`.

## Prompt Antigravity

```txt
Sprint 1 — Crée la base technique du projet Doortrack.

Objectif :
- initialiser un projet Next.js avec TypeScript ;
- configurer Tailwind CSS ;
- installer Framer Motion ;
- installer lucide-react ;
- créer une page d’accueil simple ;
- créer une page /contact simple ;
- créer un header basique avec le nom Doortrack ;
- ne pas créer encore les animations avancées ;
- ne pas créer encore le téléphone sticky.

Respecte le cahier des charges V4.

À la fin :
1. lance npm run dev ;
2. vérifie que / fonctionne ;
3. vérifie que /contact fonctionne ;
4. liste les fichiers créés ou modifiés.
```

## Definition of Done

```txt
[ ] npm run dev fonctionne
[ ] / fonctionne
[ ] /contact fonctionne
[ ] Tailwind fonctionne
[ ] Framer Motion est installé
[ ] lucide-react est installé
[ ] aucune erreur console bloquante
[ ] nom affiché : Doortrack
```

---

# 11. Sprint 2 — Layout clair + fond map subtil

## Objectif

Créer la base visuelle premium de la landing page.

## Tâches

- créer le fond global clair ;
- créer la map subtile à 5 % ;
- créer la structure en 4 sections ;
- créer le header sticky ;
- intégrer les textes principaux ;
- créer le layout desktop 3 colonnes ;
- ne pas encore gérer le téléphone sticky.

## Prompt Antigravity

```txt
Sprint 2 — Crée le layout visuel principal de la landing page.

Objectif :
- page claire, premium, SaaS moderne ;
- fond global blanc / gris très clair ;
- map de prospection en fond très transparente, environ 5 % ;
- header sticky léger ;
- 4 sections :
  01 Carte opérationnelle
  02 Pilotage quotidien
  03 Suivi prospect
  04 CTA final
- sections 01 à 03 en structure 3 colonnes ;
- section 04 en bloc CTA.

Ne crée pas encore les transitions d’écran.
Ne crée pas encore les overlays.
Ne recode pas l’app.

Utilise exactement les textes du cahier des charges V4.
```

## Definition of Done

```txt
[ ] fond clair
[ ] map subtile visible mais très discrète
[ ] pas de fond sombre global
[ ] 4 sections présentes
[ ] textes corrects
[ ] header sticky
[ ] CTA Rejoindre la bêta
[ ] CTA Prendre contact
[ ] liens CTA vers /contact
```

---

# 12. Sprint 3 — Téléphone central + captures

## Objectif

Créer le téléphone mockup SaaS et intégrer les captures réelles.

## Tâches

- créer `PhoneFrame` ;
- créer `PhoneImageScreen` ;
- intégrer `doortrack-map.webp` ;
- intégrer `doortrack-home.webp` ;
- intégrer `doortrack-prospects.webp` ;
- afficher la carte en premier ;
- vérifier le ratio ;
- corriger `object-cover` ou `object-contain`.

## Prompt Antigravity

```txt
Sprint 3 — Ajoute le téléphone central Doortrack.

Objectif :
- créer un téléphone mockup SaaS premium ;
- format portrait ;
- graphite/noir ;
- affiché au centre ;
- intégrer les captures depuis /public/screens ;
- afficher doortrack-map.webp par défaut ;
- ne pas recoder l’interface de l’application ;
- ne pas modifier les captures ;
- ne pas créer plusieurs téléphones.

Le rendu doit être propre, lisible et crédible.
```

## Definition of Done

```txt
[ ] téléphone visible
[ ] téléphone premium
[ ] téléphone portrait
[ ] capture Carte affichée en premier
[ ] capture non déformée
[ ] aucun recodage de l’app
[ ] images chargées depuis /public/screens
```

---

# 13. Sprint 4 — Sticky + transition des écrans au scroll

## Objectif

Créer le cœur de l’expérience.

Le téléphone doit rester fixe et les écrans doivent changer au scroll.

## Tâches

- rendre le téléphone sticky ;
- détecter la progression du scroll ;
- définir l’écran actif ;
- ordre : Carte → Accueil → Prospects ;
- créer slide horizontal ;
- gérer direction scroll bas / haut ;
- ne pas animer le téléphone lui-même.

## Prompt Antigravity

```txt
Sprint 4 — Implémente l’expérience principale au scroll.

Objectif :
- le téléphone reste fixe au centre pendant les sections 01, 02 et 03 ;
- le téléphone ne bouge pas ;
- le téléphone ne tourne pas ;
- le téléphone ne grossit pas ;
- seul l’écran interne change ;
- ordre des écrans : Carte → Accueil → Prospects ;
- transition interne : slide horizontal mobile + fade léger + blur léger ;
- si l’utilisateur remonte, la direction doit s’inverser.

Ne modifie pas les captures.
Ne recode pas l’application.
Travaille uniquement l’intégration et la transition entre images.
```

## Definition of Done

```txt
[ ] téléphone fixe
[ ] aucun saut visuel
[ ] Carte en premier
[ ] Accueil en second
[ ] Prospects en troisième
[ ] slide horizontal propre
[ ] direction inversée au scroll up
[ ] aucun effet gadget
```

## Point de vigilance

Ce sprint est le plus important.

Si ce sprint est raté, ne pas continuer.  
Il faut corriger avant de passer aux textes autour.

---

# 14. Sprint 5 — Textes dynamiques autour du téléphone

## Objectif

Synchroniser les textes et callouts avec l’écran actif.

## Tâches

- créer `SectionCopy` ;
- créer `CalloutCard` ;
- afficher deux callouts par section ;
- synchroniser les textes avec l’écran actif ;
- ajouter fade + blur + cascade ;
- ajouter caption sous téléphone ;
- ajouter connecteurs très discrets si utile.

## Prompt Antigravity

```txt
Sprint 5 — Ajoute les textes dynamiques autour du téléphone.

Objectif :
- les textes changent selon la section active ;
- deux callouts maximum par section ;
- animation des textes : fade + blur + légère remontée ;
- apparition en cascade des callouts ;
- textes vendeurs, explicites et terrain ;
- pas de surcharge ;
- conserver la structure gauche / téléphone / droite ;
- ajouter une caption sous le téléphone.

Important :
le téléphone reste fixe.
Les textes autour s’effacent puis se réécrivent.
L’écran interne et les textes doivent être synchronisés.
```

## Definition of Done

```txt
[ ] deux callouts par section
[ ] textes corrects
[ ] textes synchronisés avec écran
[ ] animation fade + blur
[ ] pas de surcharge
[ ] caption visible
[ ] connecteurs discrets ou absents si trop chargé
```

---

# 15. Sprint 6 — Overlays animés et réalisme d’usage

## Objectif

Rendre la démonstration plus vivante sans rendre l’application interactive.

## Tâches

- ajouter faux taps ;
- ajouter halos ;
- ajouter pulses subtils ;
- ajouter focus léger ;
- mentionner discrètement la prospection flash dans section Carte ;
- éviter tout effet trop visible.

## Prompt Antigravity

```txt
Sprint 6 — Ajoute des overlays animés subtils au-dessus des captures.

Objectif :
- faux tap discret avant certains changements d’écran ;
- halo léger sur une zone utile ;
- pulse subtil sur la carte ;
- micro focus sur un bouton ou une zone ;
- ne jamais modifier les captures ;
- ne pas rendre l’application réellement interactive ;
- garder un rendu premium et sobre.

Ajoute dans la section Carte une petite card secondaire sur la prospection flash, sans en faire une section complète.

Si un overlay donne un rendu gadget ou cheap, retire-le.
```

## Definition of Done

```txt
[ ] faux taps subtils
[ ] halos subtils
[ ] aucun overlay agressif
[ ] prospection flash mentionnée seulement dans la section Carte
[ ] app non interactive
[ ] captures intactes
```

---

# 16. Sprint 7 — Contact, responsive, QA, déploiement

## Objectif

Finaliser la version exploitable.

## Tâches

- finaliser `/contact` ;
- créer formulaire ;
- connecter les CTA ;
- tester desktop ;
- tester tablette ;
- tester mobile ;
- optimiser images ;
- ajouter metadata SEO ;
- vérifier accessibilité ;
- ajouter `prefers-reduced-motion` ;
- build production ;
- déployer.

## Prompt Antigravity

```txt
Sprint 7 — Finalise la landing page Doortrack.

Objectif :
- page /contact avec formulaire propre ;
- boutons Rejoindre la bêta et Prendre contact pointent vers /contact ;
- responsive desktop, tablette et mobile ;
- mobile simplifié sans sticky complexe si nécessaire ;
- optimisation des images ;
- metadata SEO ;
- accessibilité correcte ;
- prefers-reduced-motion ;
- aucune erreur console ;
- build production fonctionnel.

À la fin, lance :
- npm run lint si disponible ;
- npm run build ;
- vérification navigateur.

Fournis un rapport final avec :
1. ce qui fonctionne ;
2. les points à tester manuellement ;
3. les limites restantes ;
4. les recommandations avant mise en ligne.
```

## Definition of Done

```txt
[ ] /contact fonctionne
[ ] formulaire présent
[ ] CTA vers /contact
[ ] responsive desktop OK
[ ] responsive tablette OK
[ ] responsive mobile OK
[ ] images optimisées
[ ] metadata SEO
[ ] prefers-reduced-motion
[ ] npm run build OK
[ ] aucune erreur console
```

---

# 17. Checklist finale complète

Avant de considérer la landing page comme finale :

```txt
[ ] Le nom affiché est Doortrack partout.
[ ] Aucun Ortrack.
[ ] Aucun DoorTrack.
[ ] La première section affiche la carte.
[ ] L’ordre est Carte → Accueil → Prospects.
[ ] Le téléphone reste fixe.
[ ] Le téléphone ne tourne pas.
[ ] Le téléphone ne grossit pas.
[ ] Les captures sont utilisées telles quelles.
[ ] Les captures ne sont pas déformées.
[ ] L’application n’est pas recodée.
[ ] La transition interne est un slide mobile.
[ ] Les textes autour changent avec fade + blur.
[ ] Il y a deux callouts maximum par section.
[ ] La prospection flash est secondaire.
[ ] Le fond map est très transparent.
[ ] Le site reste clair et premium.
[ ] Le ton est startup premium mais terrain direct.
[ ] Aucun passage ne parle de MVP ou d’avancement produit.
[ ] Les CTA pointent vers /contact.
[ ] La page contact existe.
[ ] Le formulaire est présent.
[ ] Le responsive mobile est lisible.
[ ] npm run build passe.
[ ] Aucune erreur console.
```

---

# 18. Prompts de correction rapide

## 18.1 Si le téléphone bouge trop

```txt
Le téléphone bouge trop. Corrige pour qu’il reste strictement fixe et centré pendant les sections 01, 02 et 03. Seule l’image à l’intérieur du téléphone doit changer. Ne modifie pas les captures.
```

## 18.2 Si les captures sont déformées

```txt
Les captures dans le téléphone sont déformées. Corrige le ratio d’affichage. Les images doivent garder leur proportion exacte. Ajuste le cadre ou utilise object-contain si nécessaire, mais ne modifie pas les images elles-mêmes.
```

## 18.3 Si les animations sont trop gadgets

```txt
Les animations sont trop visibles et donnent un rendu gadget. Simplifie. Garde uniquement un slide horizontal doux dans le téléphone, un fade + blur sur les textes, et des halos très subtils.
```

## 18.4 Si le fond map est trop visible

```txt
La map de fond est trop visible. Réduis son opacité à environ 5 % ou moins. Elle doit être une texture discrète, pas un élément de lecture.
```

## 18.5 Si Antigravity recode l’application

```txt
Tu as commencé à recoder l’interface de l’application. Ce n’est pas souhaité. Les écrans Doortrack doivent être intégrés comme captures haute fidélité. Supprime les composants qui reconstruisent l’app interne et utilise les images dans /public/screens.
```

## 18.6 Si les textes sont trop longs

```txt
Les textes sont trop longs. Réduis chaque callout à un titre court et une phrase explicite. Maximum deux callouts par section. Le rendu doit rester premium, clair et aéré.
```

---

# 19. Règle de décision finale

La version finale doit privilégier :

```txt
1. crédibilité produit
2. fidélité aux captures
3. fluidité du scroll
4. clarté du message
5. beauté visuelle
```

Pas l’inverse.

Une landing page très belle mais qui ne montre pas clairement le fonctionnement de Doortrack est ratée.  
Une landing page légèrement plus sobre mais claire, fluide et crédible est meilleure.

---

# 20. Dernière instruction à donner à Antigravity

Avant tout sprint important, rappeler :

```txt
Ta priorité n’est pas de créer une démonstration fonctionnelle de Doortrack.
Ta priorité est de créer une landing page premium qui met en scène les vrais écrans de Doortrack avec des transitions fluides, en gardant le téléphone fixe et les captures intactes.
```
