# 🚀 Guide : Gérez votre site Doortrack avec votre IA

Bienvenue ! Ce guide va vous aider à installer votre "Lead Developer" personnel en moins de 10 minutes. Aucune compétence technique n'est requise. Il vous suffit de suivre ces étapes une par une.

---

## Étape 1 : Vos accès (Le "Bureau" digital)

### 1.1 Créer un compte Google
Si vous n'en avez pas déjà un, créez un compte Google. Il servira à faire fonctionner l'intelligence artificielle.
👉 [Créer un compte Google](https://accounts.google.com/signup)

### 1.2 Créer un compte GitHub
GitHub est l'endroit où nous stockons le "plan" et le code de votre site. 
👉 [Créer un compte GitHub](https://github.com/signup)
> **Action requise :** Une fois votre compte créé, envoyez-moi votre **nom d'utilisateur GitHub**. Je vous inviterai sur le projet pour que vous puissiez y accéder.

---

## Étape 2 : Installation des outils (Une seule fois)

### 2.1 Installer Node.js
C'est le moteur qui permet à l'IA de fonctionner sur votre ordinateur. 
1. Allez sur [nodejs.org](https://nodejs.org/en/download/prebuilt-installer).
2. Cliquez sur le bouton de téléchargement pour votre système (Windows ou Mac).
3. Lancez l'installeur et cliquez sur "Suivant" jusqu'à la fin.

### 2.2 Installer votre IA (Gemini CLI)
1. Ouvrez votre terminal (Cherchez "Terminal" sur Mac ou "PowerShell" sur Windows).
2. Copiez et collez la ligne suivante, puis appuyez sur Entrée :
   ```bash
   npm install -g @google/gemini-cli
   ```

---

## Étape 3 : Récupérer et Lancer le projet

### 3.1 Récupérer le projet
Dans le même terminal (ou PowerShell), tapez ces deux lignes l'une après l'autre :
```bash
cd desktop
git clone https://github.com/votre-nom-utilisateur/doortrack-landing.git
```
*(Je vous donnerai le lien exact une fois que je vous aurai invité sur GitHub)*.

### 3.2 Lancer l'IA et discuter
1. Dans votre terminal, entrez dans le dossier :
   ```bash
   cd doortrack-landing
   ```
2. Lancez l'IA en tapant simplement :
   ```bash
   gemini
   ```
3. **C'est fini !** Vous pouvez maintenant parler à l'IA comme à un collègue.

---

## 💡 Comment travailler avec votre IA ?

L'IA connaît déjà tout votre projet et les règles de design de Doortrack. Vous pouvez lui dire :
- *"Change le texte du bouton principal par : Commencer l'aventure"*
- *"Peux-tu rendre la carte en fond un peu plus visible ?"*
- *"Ajoute une phrase pour expliquer la prospection flash"*

**Le processus est toujours le même :**
1. Vous demandez.
2. L'IA vous propose un **plan d'action** simple.
3. Vous dites **"GO"**.
4. L'IA fait le travail et **publie automatiquement** sur votre lien Netlify.

---
*En cas de question, votre développeur (Nael) reste à votre disposition.*
