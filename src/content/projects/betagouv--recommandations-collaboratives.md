---
repo: "betagouv/recommandations-collaboratives"
name: "recommandations-collaboratives"
description: "Outil support Recommandations-Collaboratives basé sur le framework django"
readmeQualityOk: true
url: "https://github.com/betagouv/recommandations-collaboratives"
homepage: "https://recommandations-collaboratives.beta.gouv.fr"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [50, 31]
stars: 13
forks: 15
openIssues: 397
closedIssues: 620
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2021-05-31T10:20:32Z"
lastCommitAt: "2026-09-16T08:48:29Z"
lastReleaseAt: "2024-06-25T20:07:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 79
maintainers: ["alice-telescoop", "glibersat", "Jeremy-Bojko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/372465671/26c1848d-d1c8-4df2-9632-826f60607218"
---

# Recoco (Recommandations Collaboratives)

## Mission

Le logiciel Recoco est un outil numérique permettant d'épauler une méthodologie de
Recommandations Collaboratives se focalisant sur les problématiques complexes et nécessitant
de multiples expertises sur des temps longs.

Historiquement, le logiciel Recoco est issu de la mission UrbanVitaliz (équipe-projet portée
par le CEREMA), en partenariat avec Beta.gouv.fr et sponsorisé par le Ministère
de la Transition Ecologique et l'Etablissement Public Foncier du
Nord-Pas-de-Calais.

Nos sponsors: CEREMA, DGALN et ANCT.

## Logiciel

Il est réalisé en python/django côté moteur et alpinejs/bootstrap/dsfr côté interface.

Il est par nature multi-portails, permettant ainsi d'héberger plusieurs
thématiques disposant de leur propre espace tout en proposant une porosité entre
celles-ci.

Son code est couvert par la licence AGPL v3.0.

En savoir plus sur https://recommandations-collaboratives.beta.gouv.fr/

Vous pouvez trouver notre carnet de route ici: https://github.com/orgs/betagouv/projects/89/views/9

## Installation

Deux choix :

1.  Via virtualenv et uv
2.  Via Docker

### Via virtualenv

#### Prérequis

Installez `pandoc` et `gdal`…
