---
repo: "betagouv/csplab"
name: "csplab"
description: "Accompagner le travail des employeurs de la fonction publique"
readmeQualityOk: true
url: "https://github.com/betagouv/csplab"
homepage: "https://beta.gouv.fr/startups/csplab.html"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["hr", "public-administration"]
stars: 10
forks: 1
openIssues: 125
closedIssues: 454
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-09-10T14:34:51Z"
lastCommitAt: "2026-09-29T07:46:17Z"
lastReleaseAt: "2026-05-19T08:34:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 73
maintainers: ["vincentporte", "AntoineAugusti", "ShallowRed"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b9b6414c03d6238edd3c454717580f6b57ca539b175931d9cb269c8cd011262/betagouv/csplab"
discussionCount: 0
---

# CSPLab

⚠️ Ce projet est en cours de développement. ⚠️

## Objectif du projet

Accompagner le travail des employeurs de la fonction publique.

Plus d'information sur la page dédiée à notre startup d'état 👉
https://beta.gouv.fr/startups/csplab.html

## 🏗️ Architecture

Le monorepo est organisé en services :

- **dev** : Service pour les outils de développement
- **notebook** : Service Jupyter pour l'analyse et le prototypage

### Prérequis

- [mise](https://mise.jdx.dev/getting-started.html) : lanceur de tâches du repo ([docs/mise.md](https://github.com/betagouv/csplab/blob/HEAD/docs/mise.md)), il installe et épingle lui-même les outils (node, pnpm, uv).
- Docker + Docker Compose (Colima, Docker Desktop, OrbStack…)
- [scw](https://www.scaleway.com/en/docs/scaleway-cli/quickstart/), installé par mise : les secrets des services sont lus dans Scaleway Secret Manager. `scw init` enregistre une [clé d'API](https://www.scaleway.com/en/docs/iam/how-to/create-api-keys/) et le projet CSPLab (identifiants fournis par l'équipe) dans `~/.config/scw/config.yaml`.
- [poppler](https://poppler.freedesktop.org/) : requis pour le service OCR en local (géré automatiquement en production via…
