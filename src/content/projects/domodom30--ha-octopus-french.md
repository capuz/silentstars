---
repo: "domodom30/ha-octopus-french"
name: "ha-octopus-french"
description: "Integration Octopus Energy pour Home Assistant - Suivi consommation et prix de l'électricité"
readmeQualityOk: true
url: "https://github.com/domodom30/ha-octopus-french"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["energie", "home-assistant", "octopus", "custom-componant", "french"]
stars: 23
forks: 18
openIssues: 1
closedIssues: 33
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-09-04T19:44:08Z"
lastCommitAt: "2026-10-25T22:07:56Z"
lastReleaseAt: "2026-05-04T10:44:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 72
maintainers: ["domodom30", "gaby49100", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/808100c5b938955c3b5461fa34f5751d16b3ca8711aaeb67b83460166ca3ca5f/domodom30/ha-octopus-french"
discussionCount: 5
---

# Octopus Energy France pour Home Assistant

Intégration Octopus Energy France (non officiel) pour Home Assistant.

---

## 🌟 Fonctionnalités

### 📊 Suivi de la consommation

- **Consommation électrique**
  - Mode BASE : consommation et coût mensuel
  - Mode HPHC : consommation et coût mensuel (heures pleines / heures creuses)
  - **Mode OctoTempo** : consommation et coût mensuel par couleur × période (6 capteurs : Été HP/HC, Hiver HP/HC, Rouge HP/HC)
  - **Statistiques historiques** : Import automatique de l'historique dans le tableau de bord Énergie
  - **Dernier relevé** : Valeur et détails de la dernière lecture quotidienne (avec ventilation Tempo si applicable)
- **Consommation de gaz** : cumulative mensuelle, avec le **dernier relevé** du compteur et l'historique journalier importé dans le tableau de bord Énergie
- **Abonnement** : Coût mensuel de l'abonnement électricité

### 🔢 Index des compteurs Linky

- **Index BASE** : Valeur actuelle du compteur
- **Index HP/HC** : Valeurs actuelles des compteurs heures pleines/creuses
- Suivi de la consommation entre deux relevés
- Fiabilité des données (REAL/ESTIMATED)

### 💰 Suivi financier

- **Solde de la cagnotte**…
