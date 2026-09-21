---
repo: "Immersion-Facilitee/immersion-facile"
name: "immersion-facile"
description: "Service public numérique 🇫🇷 qui a pour objectif de faciliter les immersions professionnelles"
readmeQualityOk: true
url: "https://github.com/Immersion-Facilitee/immersion-facile"
homepage: "https://immersion-facile.beta.gouv.fr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 15
forks: 6
openIssues: 267
closedIssues: 2517
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2021-07-19T09:25:42Z"
lastCommitAt: "2026-09-21T09:13:25Z"
lastReleaseAt: "2024-03-15T17:22:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 74
maintainers: ["tpicaud", "celineung", "bbohec"]
openGraphImageUrl: "https://opengraph.githubassets.com/085ad59e9ca7265433396686da906d4bd986b3dbb8d89422d573577308f822bc/Immersion-Facilitee/immersion-facile"
---

# Immersion Facile

Le but du projet immersion facile est de faciliter les immersions professionnelles.
Il y a pour cela plusieurs axes de travail :

- Dématérialiser entièrement les demandes d'immersion et les interactions des conseillers France travail, Missions locales, etc.
- Constituer un annuaire des entreprises qui sont susceptible d'accueillir en immersion
- Rendre les immersions recherchables par les bénéficiaires

### Prérequis

Pour démarrer le projet il vous faut `git`, `docker` et `node` (version 24.14.0 > voir package.json "engines" ) installée sur la machine.
Nous utilisons `pnpm` comme gestionnaire de paquets (pour l'installer : `npm install -g pnpm`).

### Démarrer le projet

- Demander à être ajouté comme contributeur au projet `Immersion-Facilitee/immersion-facile`
- Cloner le projet

#### Cloner le projet

```sh
git clone ssh://git@github.com:Immersion-Facilitee/immersion-facile.git immersion-facile
cd immersion-facile
```

#### Aperçu du projet

Le projet Immersion Facilitée est un monorepo composé des projets suivants :

- back/ : le back-end de l'application
- front/ : le front-end de l'application
- shared/ : les éléments partagés (types, schemas,…
