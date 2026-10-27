---
repo: "IGNF/cartes.gouv.fr-documentation"
name: "cartes.gouv.fr-documentation"
description: "Site de documentation statique pour cartes.gouv.fr"
readmeQualityOk: true
url: "https://github.com/IGNF/cartes.gouv.fr-documentation"
homepage: "https://cartes.gouv.fr/aide/"
language: "Nunjucks"
languages: ["Nunjucks", "JavaScript"]
languagePcts: [52, 35]
topics: ["dsfr", "eleventy", "pagefind", "static-website"]
stars: 7
forks: 19
openIssues: 24
closedIssues: 121
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2023-12-12T12:42:46Z"
lastCommitAt: "2026-10-27T12:39:29Z"
lastReleaseAt: "2026-02-24T13:47:01Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 88
maintainers: ["cbrousseau1", "CorentinPeutin", "MFrangi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c4fcaf1174fd93d211f4924d09b6a588d9df6d295434efc17c4026183429fe7/IGNF/cartes.gouv.fr-documentation"
---

# cartes.gouv.fr-documentation

Ce dépôt constitue un site de documentation statique associé à [cartes.gouv.fr](https://cartes.gouv.fr/) et aux services de la Géoplateforme.

Il est construit sur la base des templates de [codegouvfr/eleventy-dsfr](https://github.com/codegouvfr/eleventy-dsfr) et sur le générateur de site statique [Eleventy](https://www.11ty.dev/).

## Prise en main

- [Guide de contribution](https://github.com/IGNF/cartes.gouv.fr-documentation/blob/HEAD/CONTRIBUTING.md)
- [Principes généraux](https://github.com/IGNF/cartes.gouv.fr-documentation/blob/HEAD/docs/index.md)
- [Documentation rédacteur](https://github.com/IGNF/cartes.gouv.fr-documentation/blob/HEAD/docs/redacteur.md)
- [Documentation développeur](https://github.com/IGNF/cartes.gouv.fr-documentation/blob/HEAD/docs/developpeur.md)

## Déploiements

Un tag respectant le versioning sémantique (`vX.Y.Z`) déclenche la génération d'une image déployable sur le registre ghcr.io avec une url de la forme :

```
ghcr.io/ignf/cartes.gouv.fr-documentation:vX.Y.Z
```

Le déploiement de cette image n'est ensuite plus du ressort de ce dépôt.

Tous les tags ne font pas l'objet d'une version déployée en production. Mais…
