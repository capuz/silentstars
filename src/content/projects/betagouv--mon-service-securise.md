---
repo: "betagouv/mon-service-securise"
name: "mon-service-securise"
description: "MonServiceSécurisé"
readmeQualityOk: true
url: "https://github.com/betagouv/mon-service-securise"
homepage: "https://monservicesecurise.cyber.gouv.fr"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 26]
stars: 20
forks: 14
openIssues: 1
closedIssues: 33
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2021-03-26T16:08:09Z"
lastCommitAt: "2026-11-10T14:49:16Z"
lastReleaseAt: "2024-09-24T09:17:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 74
maintainers: ["Nephtys", "CadiChris", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/236146968fc57909b25f78dc3be4b9843af0c1aaf0f0c8ae57c5f814d6e765a6/betagouv/mon-service-securise"
---

# MonServiceSécurisé

---

MonServiceSécurisé est un service numérique développé par le laboratoire
d'innovation de l'[ANSSI](https://www.cyber.gouv.fr/), en lien avec l'incubateur
[BetaGouv](https://beta.gouv.fr/) de la direction interministérielle du
numérique. Il vise à aider les collectivités territoriales et les autres
entités publiques à sécuriser et à homologuer leurs services publics numériques
(sites web, applications mobiles, API).

## ⚙️ Configuration de l'environnement de développement

Il est nécessaire en prérequis d'avoir installé

- [Git](https://git-scm.com/),
- [Docker](https://www.docker.com/)
- Une version récente (>= 18) de [Node.js](https://nodejs.org/en/) :\
  Nous vous conseillons d'utiliser [`nvm use`](https://github.com/nvm-sh/nvm), pour utiliser la même version que dans les environnements d'intégration continue et de production, car nous spécifions la version de Node.js à utiliser dans le fichier `.nvmrc`.

Commencer par récupérer les sources du projet et aller dans le répertoire créé.

```sh
$ git clone https://github.com/betagouv/mon-service-securise.git && cd mon-service-securise
```

Créer un `network` Docker pour accueillir MonServiceSécurisé en…
