# 🌸 Poke App

> Petit projet d'apprentissage — **Tailwind CSS v4 + DaisyUI** + JavaScript (vanilla) + Webpack.  
> Objectif : pratiquer le `fetch()` avec l'api de TCGdex et construire une UI agréable rapidement.

---

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Bundler: Webpack](https://img.shields.io/badge/bundler-Webpack-orange)](https://webpack.js.org/)
[![TailwindCSS](https://img.shields.io/badge/css-Tailwind%20v4-blueviolet)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/ui-DaisyUI-9cf)](https://daisyui.com/)

---

## 🎯 Objectif du projet

Ce projet sert de base pour :
- apprendre l’utilisation de `fetch()` et la manipulation du DOM en JavaScript ;
- découvrir Tailwind CSS v4 et DaisyUI ;
- afficher une carte d'un Pokémon via une barre de recherche.

---

## 🧰 Prérequis

- **Node.js** (version LTS recommandée, ex. `v24.x`)  
  → utilise `nvm` pour gérer les versions si possible.
- **npm** (installé automatiquement avec Node.js)
- Un compte **GitHub** pour le suivi du projet.

Un fichier `.nvmrc` est fourni avec la version recommandée (`24`).

---

## ⚙️ Installation du projet

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/JJustAri/poke-api-app.git
cd poke-api-app

```
### 2️⃣ Set up du projet

Installer toutes les dépendances nécessaires au projet (Webpack, Tailwind CSS v4, DaisyUI, etc.) :

```bash
npm install

``` 
### 3️⃣ Lancer le serveur de développement

```bash
npm run dev
```
- Webpack compile automatiquement le JavaScript et le CSS

- Tailwind CSS v4 et DaisyUI sont traités via PostCSS

- Le serveur de développement utilise le Hot Module Replacement (HMR)
  
### 4️⃣ Accéder à l’application

Une fois le serveur lancé, l’application est accessible à l’adresse suivante :

```bash
http://localhost:8080/
