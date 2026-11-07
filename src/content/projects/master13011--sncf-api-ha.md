---
repo: "Master13011/SNCF-API-HA"
name: "SNCF-API-HA"
description: "Intégration SNCF API pour Home Assistant"
readmeQualityOk: true
url: "https://github.com/Master13011/SNCF-API-HA"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["custom-component", "hacs", "home-assistant"]
stars: 16
forks: 10
openIssues: 2
closedIssues: 16
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2025-07-28T07:13:55Z"
lastCommitAt: "2026-11-07T09:29:30Z"
lastReleaseAt: "2025-08-08T08:50:15Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 72
maintainers: ["Master13011", "pa-martin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3bf6688db62ea757230e5902a3d8dc450c697c02d5b0fe4973e353988623ae/Master13011/SNCF-API-HA"
---

# 🚄 Intégration SNCF Trains pour Home Assistant

Suivez les horaires des trains SNCF entre deux gares dans Home Assistant, grâce à l’API officielle [SNCF](https://www.digital.sncf.com/startup/api).
Départ / arrivée, retards, durée, mode (TER…), tout est intégré dans une interface configurable et traduite.
Les numéros de voie sont récupérés, quand c'est possible, auprès de Gares & Connexions.

> ⚠️ **Limites connues**
> - Seuls les trajets **sans correspondance** sont conservés.
> - Les trains supprimés ne sont pas pris en compte.
> - Les numéros de voie reposent sur un point d'accès non officiel de Gares & Connexions : ils sont fournis « au mieux » et peuvent être absents (`N/A`).

---

## 📦 Installation

### 1. Via HACS (recommandé)

> Nécessite HACS installé dans Home Assistant

1. Aller dans **HACS**
2. Chercher **SNCF Trains**
3. Installer puis redémarrer Home Assistant

### 2. Manuel (sans HACS)

1. Télécharger le contenu du dépôt
2. Copier le dossier `sncf_trains` dans `config/custom_components/`
3. Redémarrer Home Assistant

---

## ⚙️ Configuration

1. Aller dans **Paramètres → Appareils & services → Ajouter une intégration**
2. Rechercher **SNCF Trains**
3. Suivre les…
