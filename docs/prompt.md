# Prompt Claude Code — Doortrack : audit, sprints et synchronisation scroll

```text
Tu vas agir comme un Tech Lead front-end senior, un expert Next.js, un expert Framer Motion, un UX/UI Lead et un Product Owner.

Je développe une landing page pour une application appelée Doortrack.

Doortrack est une application mobile-first pensée pour les équipes commerciales terrain, notamment les équipes qui font de la prospection porte-à-porte. L’objectif n’est pas de créer un CRM générique, mais un outil cartographié de pilotage commercial terrain.

La promesse produit :
Doortrack permet aux managers et aux commerciaux terrain de visualiser leurs secteurs, suivre leurs passages, centraliser leurs prospects, organiser leurs relances et transformer la prospection terrain en carte d’action claire.

Stack actuelle :
- Next.js
- Framer Motion
- Projet lancé avec npm run dev
- Le projet tourne actuellement sans erreur
- Structure existante avec src/components
- Développement via Claude Code / Gemini CLI
- Des animations scroll existent déjà
- Des sections sont déjà construites
- Le rendu actuel est visuellement intéressant

Important :
Le projet existe déjà et certaines parties sont bonnes.
Il ne faut surtout pas repartir de zéro.
Il ne faut pas refaire toute la landing page.
Il ne faut pas casser les animations existantes si elles peuvent être ajustées.
Il ne faut pas remplacer brutalement l’architecture actuelle si elle peut être nettoyée légèrement.
Il faut conserver ce qui fonctionne, auditer ce qui existe, puis améliorer uniquement ce qui nuit à la fluidité, à la compréhension ou à la synchronisation.

Objectif principal de cette intervention :
1. Rendre le scroll plus fluide.
2. Synchroniser précisément les écrans du téléphone avec les textes affichés.
3. Raccourcir légèrement la transition du hero map vers la démonstration téléphone.
4. Garder le rendu premium déjà existant.
5. Ne pas casser l’existant.
6. Structurer les corrections en sprints validables.

Priorités absolues :
- Scroll plus naturel.
- Téléphone sticky mieux synchronisé avec les textes.
- Transitions entre écrans plus smooth.
- Conservation de la direction visuelle actuelle.
- Version montrable à un manager commercial ou à un prospect.

Mode de travail obligatoire :
Tu ne dois pas commencer par modifier directement tout le code.
Tu dois d’abord :
1. Auditer le projet.
2. Identifier les fichiers et composants concernés.
3. Comprendre les animations existantes.
4. Identifier ce qui fonctionne déjà.
5. Identifier ce qui doit être conservé.
6. Identifier ce qui doit être corrigé.
7. Proposer un découpage en sprints.
8. Pour chaque sprint, expliquer ce que tu vas faire.
9. Attendre ma validation avant de modifier le code du sprint concerné.
10. Après chaque sprint, fournir :
   - fichiers modifiés ;
   - résumé des changements ;
   - risques éventuels ;
   - checklist de test ;
   - prochaines étapes.

Avant toute modification :
- Vérifie l’état Git avec git status.
- Crée une branche dédiée si possible, par exemple :
  refactor-scroll-storytelling
- Si la branche existe déjà, utilise un nom proche, par exemple :
  refactor-scroll-storytelling-v2
- Ne supprime rien sans justification.
- Ne modifie pas massivement le projet sans expliquer pourquoi.

État actuel de la landing page d’après l’existant :

1. Hero initial
La page commence avec une grande map 3D en plein écran.
Il y a un header avec le logo Doortrack, “Prendre contact” et “Rejoindre la bêta”.
Le titre actuel est :
“Transformez votre terrain en carte d’action commerciale.”
Il y a une indication “Scrollez pour explorer”.
La map est dominante et donne un effet premium.
Quand on scrolle, la map remonte et se transforme progressivement en vue plus haute / plus plate.

Ce qu’il faut conserver :
- La grande map 3D.
- L’effet premium.
- Le header.
- Le logo Doortrack.
- Les CTA.
- La logique de transition map vers démonstration produit.

Ce qu’il faut améliorer :
- La transition du hero est trop longue.
- L’utilisateur doit arriver plus vite sur le téléphone.
- Il doit y avoir un scroll visible et maîtrisé, mais pas un parcours trop lent.
- Le hero doit rester dominant, mais ne doit pas retarder la compréhension du produit.

2. Première section téléphone — Carte terrain / carte opérationnelle
Après le hero, on arrive sur un téléphone sticky au centre.
À gauche, il y a un texte principal du type :
“Transformez votre terrain en carte d’action commerciale.”
À droite, un avantage du type :
“Prioriser les bons secteurs.”
Le téléphone affiche l’écran “Carte terrain”.

Ce qu’il faut conserver :
- Téléphone sticky au centre.
- Écran carte terrain.
- Texte à gauche.
- Avantage à droite.
- Ambiance map en fond.

Ce qu’il faut améliorer :
- La synchronisation entre l’écran du téléphone, le texte gauche et l’avantage droit.
- La transition depuis le hero vers cette section.
- La lisibilité du storytelling.

3. Deuxième section téléphone — Accueil / dashboard
En continuant le scroll, le téléphone reste sticky.
L’écran change vers une page d’accueil / dashboard.
Le texte à gauche parle d’une journée plus claire pour chaque commercial.
L’avantage à droite parle de motivation, d’objectifs, de performance ou de pilotage sans complexifier.

Ce qu’il faut conserver :
- L’écran dashboard.
- L’idée de progression par étape.
- Le téléphone sticky.
- Les textes qui apparaissent/disparaissent.

Ce qu’il faut améliorer :
- La transition entre l’écran carte terrain et l’écran dashboard.
- Le timing d’apparition/disparition des textes.
- L’impression d’application réelle.
- Le mouvement doit être plus naturel, moins sec, plus smooth.

4. Troisième section téléphone — Mes prospects
En continuant le scroll, le téléphone affiche l’écran “Mes prospects”.
Le texte à gauche parle de ne plus laisser les opportunités disparaître après le passage terrain.
L’avantage à droite parle de relancer avec le bon contexte.
Cette section est très importante car elle montre la douleur principale : le mauvais suivi global des prospects après le porte-à-porte.

Ce qu’il faut conserver :
- Écran “Mes Prospects”.
- Position centrale du téléphone.
- Storytelling autour du suivi des prospects.
- Texte gauche + avantage droit.

Ce qu’il faut améliorer :
- Synchronisation parfaite avec le scroll.
- Transition plus naturelle.
- Lien plus clair entre la promesse et l’écran affiché.

5. Prospection Flash
Je souhaite ajouter ou intégrer une continuité après l’écran “Mes prospects” pour montrer l’aspect “Prospection Flash”.
Cela doit apparaître après la troisième image / troisième écran principal, dans la continuité de la section “Mes prospects”.
Cela peut être :
- un quatrième visuel léger ;
- un petit téléphone secondaire ;
- une mini-transition après “Mes prospects” ;
- ou une courte séquence avant le CTA final.

Attention :
Ne complexifie pas inutilement la section sticky principale.
Si l’ajout d’un quatrième écran risque de casser la logique actuelle, propose d’abord une intégration simple et explique-la avant modification.
Le cœur de la landing reste les 3 écrans principaux : Carte terrain, Dashboard, Mes prospects.

6. Section finale / CTA
Actuellement, la landing finit sur une section sombre avec :
“Rejoignez les premiers utilisateurs de Doortrack.”
Il y a deux CTA :
- Rejoindre la bêta
- Prendre contact

Ce qu’il faut conserver :
- Section sombre premium.
- CTA visibles.
- Logique de conversion.

Ce qu’il faut améliorer :
- Ajouter ou préparer un formulaire cohérent de prise de contact / bêta.
- Le formulaire doit servir de début de tunnel commercial.
- Le formulaire doit aider à qualifier les prospects intéressés par Doortrack.

Champs du formulaire à prévoir :
- Prénom
- Nom
- Entreprise
- Fonction
- Téléphone
- Taille de l’équipe terrain
- Secteur d’activité
- Message libre

CTA recommandé :
“Être recontacté pour la bêta”

Tu peux proposer une meilleure formulation si elle est plus cohérente avec la page, mais ne choisis pas une formulation trop agressive.

Ton global des textes :
Le ton doit mélanger :
- premium startup ;
- terrain direct ;
- sobre B2B.

La dominante doit rester terrain direct.
Doortrack doit parler à des managers et commerciaux qui gèrent des zones, des rues, des prospects, des relances et des équipes terrain.
Évite le jargon SaaS inutile.
Évite les promesses creuses.
Évite les phrases trop marketing qui ne disent rien.

Mot “CRM” :
Ne pas utiliser “CRM” dans le hero.
Ne pas positionner Doortrack comme un CRM classique.
Si le mot CRM est utilisé, il doit apparaître au maximum une fois, uniquement pour différencier :
“Doortrack n’est pas un CRM classique : c’est une carte opérationnelle pensée pour la prospection terrain.”

Hero title :
Le titre actuel peut être amélioré.
Propose 3 à 5 alternatives avant de modifier le texte.
Les alternatives doivent être cohérentes avec :
- la prospection terrain ;
- le pilotage commercial ;
- la carte ;
- le suivi des prospects ;
- le référencement naturel ;
- la compréhension immédiate par un manager.

Pistes possibles :
1. “Pilotez votre prospection terrain depuis une carte claire et actionnable.”
2. “Transformez votre terrain commercial en carte d’action.”
3. “Gardez enfin une vision claire de votre prospection terrain.”
4. “La carte de pilotage pensée pour la prospection porte-à-porte.”
5. “Visualisez vos secteurs, suivez vos prospects, pilotez votre terrain.”

Propose aussi un sous-titre clair, par exemple :
“Doortrack aide les équipes commerciales à visualiser leurs secteurs, suivre leurs prospects et organiser leurs relances sans perdre le fil du terrain.”

Tu peux améliorer cette phrase, mais elle doit rester claire, directe et orientée terrain.

Spécification UX de la section téléphone sticky :

Desktop :
- Téléphone au centre.
- Textes opérationnels à gauche.
- Avantages métier à droite.
- Les textes à gauche expliquent l’étape.
- Les textes à droite expliquent le bénéfice concret.
- Possibilité d’ajouter des flèches, lignes, repères ou callouts qui pointent vers les zones pertinentes de l’écran du téléphone.
- Les callouts doivent rester sobres, précis et utiles.
- Aucun élément ne doit surcharger la lecture.

Mobile :
- Conserver l’idée sticky si possible.
- Réduire la taille du téléphone.
- Adapter les textes pour éviter une page illisible.
- Si le sticky complet crée des bugs ou une mauvaise expérience mobile, proposer une version mobile simplifiée mais visuellement cohérente.
- Ne pas forcer une animation complexe si elle casse l’expérience mobile.

Transitions entre écrans :
Les transitions existent déjà.
Ne les remplace pas entièrement sans raison.
Ajuste-les si possible.

Objectif :
- Transition plus smooth.
- Mouvement plus naturel.
- Effet d’application réelle.
- Pas de changement brutal.
- Pas d’effet gadget.
- Pas de transition trop rapide.
- Pas de latence excessive.

Style recommandé :
- léger slide horizontal ;
- fade discret ;
- micro-mouvement ;
- easing plus doux ;
- timing mieux calibré ;
- cohérence entre l’arrivée du texte et le changement d’écran.

Déclenchement attendu :
L’écran du téléphone doit changer quand le texte associé devient l’étape dominante.
Le téléphone ne doit pas changer trop tôt ni trop tard.
Le changement d’écran, le titre à gauche et l’avantage à droite doivent appartenir à la même étape.
Il faut éviter qu’un écran soit visible avec le mauvais texte.

Très important :
Le problème actuel n’est pas l’absence d’animation.
Le problème actuel est le manque de synchronisation naturelle entre :
- scroll ;
- téléphone ;
- texte gauche ;
- avantage droit ;
- progression narrative.

Tu dois donc corriger la synchronisation avant d’ajouter de nouveaux effets.

Découpage en sprints attendu :
Après audit, propose toi-même les sprints les plus adaptés au code réel.

Les sprints doivent au minimum couvrir :
1. Audit et sécurisation Git.
2. Audit des composants et animations existantes.
3. Nettoyage léger de la structure sans changement visuel majeur.
4. Ajustement du hero map pour raccourcir la transition vers le téléphone.
5. Synchronisation téléphone + textes + avantages.
6. Lissage des transitions entre les 3 écrans.
7. Intégration contrôlée de Prospection Flash.
8. Formulaire bêta / prise de contact.
9. Responsive mobile/tablette/desktop.
10. Tests, performance et version présentable.

Pour chaque sprint, tu dois fournir :
- nom du sprint ;
- objectif ;
- fichiers probablement concernés ;
- modifications prévues ;
- ce qui sera conservé ;
- ce qui ne sera pas touché ;
- risques ;
- critères de validation ;
- checklist de test ;
- demande explicite de validation avant codage.

Format obligatoire de ta première réponse :
Tu dois répondre uniquement avec :

1. État Git détecté
- branche actuelle ;
- état des fichiers ;
- proposition de branche de travail.

2. Audit rapide du projet
- structure détectée ;
- fichiers clés ;
- composants liés au hero ;
- composants liés au téléphone ;
- composants liés au scroll ;
- composants liés au formulaire ou CTA.

3. Ce qui fonctionne déjà et doit être protégé
- liste précise.

4. Ce qui doit être corrigé
- liste précise.

5. Plan de sprints proposé
- sprint par sprint ;
- objectif ;
- fichiers concernés ;
- risque ;
- critère de validation.

6. Sprint 1 proposé
- actions exactes ;
- fichiers concernés ;
- ce qui sera modifié ;
- ce qui ne sera pas modifié ;
- résultat attendu ;
- question finale : “Valides-tu le Sprint 1 ?”

Interdiction :
Dans ta première réponse, ne modifie pas encore le code.
Ne lance pas de gros refactoring.
Ne réécris pas les composants.
Ne supprime rien.
Ne change pas les textes.
Ne change pas les animations.
Commence par auditer et proposer.

Après validation d’un sprint :
Tu peux modifier le code uniquement sur le périmètre validé.
Après chaque sprint, tu dois fournir :
- résumé clair ;
- fichiers modifiés ;
- logique appliquée ;
- tests à faire ;
- commande à lancer ;
- points à vérifier visuellement ;
- proposition du sprint suivant.

Critères de réussite finaux :
La landing doit :
- garder son identité actuelle ;
- conserver la map 3D ;
- conserver le téléphone sticky ;
- conserver les trois écrans principaux ;
- mieux synchroniser les textes et le téléphone ;
- arriver plus vite du hero vers la démonstration ;
- avoir des transitions plus naturelles ;
- rester fluide sur desktop ;
- rester propre sur mobile ;
- être montrable à un manager commercial ou à un prospect ;
- ne pas donner l’impression d’un site cassé ou expérimental ;
- ne pas devenir une landing surchargée.

Rappel stratégique :
Le but n’est pas de faire une landing parfaite.
Le but est d’obtenir rapidement une version propre, fluide, compréhensible et crédible, sans détruire ce qui est déjà réussi.
```
