---
repo: "DITP-pilotage/pilote-2"
name: "pilote-2"
description: "Code source du projet PILOTE2"
readmeQualityOk: true
url: "https://github.com/DITP-pilotage/pilote-2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2022-11-22T08:09:51Z"
lastCommitAt: "2026-10-19T09:13:55Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 76
maintainers: ["jordantaillefer", "contitri", "antoinechalifour"]
openGraphImageUrl: "https://opengraph.githubassets.com/b598c73be0d87047fed771d9b189df0a91d92ef98ae5cbe602e261fbe4868cb3/DITP-pilotage/pilote-2"
---

# Pilote — Monorepo

Outil de pilotage territorial pour le suivi des politiques publiques.

Le monorepo regroupe deux familles d'applications :

- **Pilote PPG** : l'application historique de pilotage des Politiques Prioritaires du Gouvernement (Next.js), avec son Keycloak et son pipeline de données.
- **kpilote** : la nouvelle plateforme, composée d'une API, d'une webapp, d'un back-office et de deux packages partagés.

Les deux familles sont indépendantes : `pilote-ppg` n'utilise aucun package `kpilote-*`.

## Structure

```
pilote/
├── apps/
│   ├── pilote-ppg/                  Application PPG (Politiques Prioritaires du Gouvernement)
│   │   ├── src/                     Code source (client + server)
│   │   ├── tests/                   Tests E2E (Playwright)
│   │   └── ...
│   ├── pilote-ppg-auth/             Keycloak (authentification)
│   ├── pilote-ppg-data-management/  Pipeline dbt (Python)
│   ├── kpilote-api/                 API REST kpilote (Hono + Prisma)
│   ├── kpilote-webapp/              Webapp kpilote (React + TanStack Router, BFF Hono)
│   └── kpilote-admin/               Back-office kpilote multi-environnement (clé API)
├── packages/
│   ├── kpilote-shared/…
