---
repo: "SocialGouv/domifa"
name: "domifa"
description: "Faciliter l'accès aux droits pour les personnes sans domicile stable, en simplifiant la gestion de la domiciliation"
readmeQualityOk: true
url: "https://github.com/SocialGouv/domifa"
homepage: "https://domifa.fabrique.social.gouv.fr"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [73, 25]
stars: 22
forks: 12
openIssues: 1
closedIssues: 813
watchers: 6
contributors: 24
recentReleases: 0
createdAt: "2019-03-19T14:29:35Z"
lastCommitAt: "2026-11-10T14:50:13Z"
lastReleaseAt: "2021-05-17T14:17:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 70
maintainers: ["pYassine", "abdelazizsakhi", "SocialGroovyBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b13382c75266d43d10154d13ebf7b0fc6222bfbf875ae5be650eb207b422d33/SocialGouv/domifa"
discussionCount: 2
---

# DomiFa

> DomiFa est une plateforme numérique qui facilite la gestion de la domiciliation pour les organismes agréés et permet aux personnes sans domicile stable d'accéder à leurs droits.

🌐 **Homepage** : https://domifa.fabrique.social.gouv.fr

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version LTS recommandée)
- Pnpm (gestionnaire de packages)
- Docker et Docker Compose
- PostgreSQL (ou via Docker)

### Installation rapide

```bash
# 1. Cloner le projet
git clone https://github.com/SocialGouv/domifa.git
cd domifa

# 2. Lancer l'environnement de développement
docker-compose up -d

# 3. Installer les dépendances
pnpm install

# 4. Démarrer le projet en mode développement
pnpm dev
```

L'application sera accessible sur :

- Frontend structures : http://localhost:4200
- Portail domiciliés : http://localhost:4201
- Interface admin : http://localhost:4202
- Portail de pilotage (statistiques) : http://localhost:4203
- Backend API : http://localhost:3000

## 📁 Architecture du projet

DomiFa utilise une architecture **monorepo** avec plusieurs packages :

```
domifa/
├── packages/
│   ├── backend/              # API NestJS + PostgreSQL
│   ├── frontend/             # Interface…
