---
repo: "gip-inclusion/les-emplois"
name: "les-emplois"
description: "Plate-forme numérique de l'inclusion"
readmeQualityOk: true
url: "https://github.com/gip-inclusion/les-emplois"
homepage: "https://emplois.inclusion.beta.gouv.fr"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 35
forks: 31
openIssues: 0
closedIssues: 32
watchers: 6
contributors: 51
recentReleases: 0
createdAt: "2019-07-22T12:52:29Z"
lastCommitAt: "2026-11-02T13:33:59Z"
lastReleaseAt: "2020-09-24T16:20:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["dependabot[bot]", "xavfernandez", "Abdess83"]
openGraphImageUrl: "https://opengraph.githubassets.com/8058a9d00c6459fb049f88790f991bb7994491a24481f7e81fa27d2d419d499b/gip-inclusion/les-emplois"
---

# Itou - Les emplois de l'inclusion

> Les emplois de l'inclusion est un service numérique de délivrance des PASS IAE
> et de mise en relation d'employeurs inclusifs avec des candidats éloignés de
> l'emploi par le biais de tiers (prescripteurs habilités, orienteurs) ou en
> autoprescription.

# Environnement de développement

## Définition des variables d'environnement

Les valeurs par défaut de `dev.py` permettent de lancer un environnement fonctionnel.

Cependant, il est recommandé d'en prendre connaissance pour noter par exemple
que les emails ne sont pas réellement envoyés mais que leur contenu est
simplement écrit dans la sortie standard.

Le reste de la configuration se fait avec des [variables d'environnement](https://github.com/gip-inclusion/les-emplois/blob/HEAD/docs/environment.md).

Celles concernant notre hébergeur CleverCloud sont définis au niveau du déploiement et
de l'app CleverCloud tandis que les autres paramètres applicatifs indépendants du PaaS
sont définis dans le projet `itou-secrets`.

## Installation

L’application est développée avec [Django](https://www.djangoproject.com/), la
base de données est gérée par [PostgreSQL](https://www.postgresql.org/) et le…
