---
repo: "simongrossi/anonyfiles"
name: "anonyfiles"
description: "Anonyfiles est un outil open source d’anonymisation de fichiers .txt, .csv, .json, .docx et .xlsx, basé sur spaCy. Il propose trois interfaces : une ligne de commande (CLI), une API (FastAPI) et une interface graphique (Tauri/Svelte)."
url: "https://github.com/simongrossi/anonyfiles"
homepage: "http://anonyfiles.com/"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 8
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-05-05T15:40:21Z"
lastCommitAt: "2026-06-25T06:40:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["simongrossi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ab35b682a80eb040c8dc3ba1c9d907f4e567b4d168d03b8dd164c1e8650a558/simongrossi/anonyfiles"
---

# 🕵️‍♂️ Anonyfiles

**Anonyfiles** est une solution open source complète pour l’anonymisation automatisée de documents texte, tableurs et fichiers bureautiques.
Elle s’appuie sur des technologies de traitement du langage naturel (spaCy) et des stratégies avancées de remplacement (Faker, codes, placeholders, etc.).

## 🌟 Pourquoi ce projet ?

À force d’utiliser l’intelligence artificielle dans des cas variés, un besoin simple mais essentiel s’est imposé :
👉 **pouvoir anonymiser rapidement des données textuelles avant de les soumettre à un traitement externe** (IA, workflow, audit, etc.).

Mais l’objectif ne s’arrêtait pas là :
🔁 **Pouvoir désanonymiser un fichier traité** grâce à un mapping généré pendant l’anonymisation faisait aussi partie des ambitions du projet.

Et comme je suis curieux et passionné, je me suis dit : autant en profiter pour aller plus loin
🧠 **en créant une solution complète, modulaire et réutilisable**, avec API, CLI et interface graphique moderne.

---

## 🧩 Trois couches principales

* **`anonyfiles_core`** : bibliothèque Python contenant tout le moteur d’anonymisation et de désanonymisation.
* **`anonyfiles_cli`** : outil en ligne de commande…
