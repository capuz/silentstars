---
repo: "MTES-MCT/dashlord"
name: "dashlord"
description: "Tableau de bord des scans de sécurité sur les sites de la fabrique"
readmeQualityOk: true
url: "https://github.com/MTES-MCT/dashlord"
homepage: "https://dashlord.mte.incubateur.net/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 6
forks: 25
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 36
recentReleases: 0
createdAt: "2021-04-05T14:53:05Z"
lastCommitAt: "2026-09-17T08:51:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 92
maintainers: ["DashlordBetaGouvBot", "tristanrobert"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec02f5aac65f1ebbccbd7a7515d1726a04b5ce6ba8aad824661fd908f9b66fb6/MTES-MCT/dashlord"
discussionCount: 1
---

# DashLord

Tableau de bord des bonnes pratiques techniques de la fabrique numérique du MTE : https://dashlord.mte.incubateur.net

## Usage

### Ajouter une URL dans le dashlord

Vous devez éditer le fichier [./dashlord.yml](https://github.com/MTES-MCT/dashlord/blob/HEAD/dashlord.yml) et ajouter une entrée pour votre URL.

💡 Bonne pratique : enlever les slashs à la fin des urls

Exemple d'entrée pour une URL :

```yml
- url: https://www.free.fr
  title: Homepage free.fr
  betaId: free # optionnel, id de la startup sur beta.gouv.fr
  tags: # optionnel
    - telecom
    - provider
  repositories: # optionnel, pour récupérer les alertes de sécu de ces repos
    - free/free-ui
    - free/free-css
  docker: # optionnel, pour scanner les images avec trivy
    - ghcr.io/socialgouv/fabrique/frontend
    - ghcr.io/socialgouv/fabrique/backend
  tools: # optionnel, pour desactiver certains outils
    nmap: false
  pages: # optionnel, pour lancer lighthouse sur des pages supplémentaires
    - /profil
    - /mentions
```

Pour la documentation de DashLord lui-même : https://github.com/SocialGouv/dashlord
