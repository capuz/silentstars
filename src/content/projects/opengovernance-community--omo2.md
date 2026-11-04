---
repo: "OpenGovernance-community/OMO2"
name: "OMO2"
description: "BaseCamp for OpenMyOrganization 2.0. Visit the site to discover all the collaborative tolls included here."
readmeQualityOk: true
url: "https://github.com/OpenGovernance-community/OMO2"
homepage: "https://opengov.tools"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [69, 25]
topics: ["collaborative", "sharedgovernance"]
stars: 6
forks: 1
openIssues: 45
closedIssues: 119
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-02-27T10:24:46Z"
lastCommitAt: "2026-11-04T13:05:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 78
maintainers: ["DavidDrayer"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a7a2a454ab55d8675ee739b1ad004ca9bd03d687723bdb6faaa15c12d86724/OpenGovernance-community/OMO2"
---

Texte de vérif de la mise à jour version 2

Bienvenue sur le repository de OMO2, la nouvelle version de OpenMyOrganization.

Le depot peut etre utilise de deux manieres distinctes :

## 1. Developpement local avec Docker

Utiliser ce parcours si vous voulez lancer une version locale reproductible du projet, avec base de demo, Mailpit, phpMyAdmin et tests de sous-domaines avec `localtest.me`.

Resume rapide :

```bash
git clone <url-du-repo>
cd OMO2
docker compose down -v
docker compose up --build
```

Guide complet : [DOCKER.md](https://github.com/OpenGovernance-community/OMO2/blob/HEAD/docs/DOCKER.md)

## 2. Installation sur un site ou un serveur

Utiliser ce parcours si vous voulez deployer l'application sur un hebergement reel.

Resume rapide :

```bash
git clone -b Dev <url-du-repo> .
```

Puis ouvrir le site dans le navigateur. Si le fichier `.env` est absent, le site redirige automatiquement vers `install.php` et lance l'assistant d'installation.

Guide complet : [DEPLOY.md](https://github.com/OpenGovernance-community/OMO2/blob/HEAD/docs/DEPLOY.md)

## Organisation des fichiers

- `docs/` : guides de deploiement et Docker ; `docs/performance/` : rapports de performance.
-…
