---
repo: "gip-inclusion/les-emplois"
name: "les-emplois"
description: "Plateforme numérique de l'inclusion"
readmeQualityOk: true
url: "https://github.com/gip-inclusion/les-emplois"
homepage: "https://plateforme.inclusion.gouv.fr"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 35
forks: 32
openIssues: 0
closedIssues: 32
watchers: 6
contributors: 53
recentReleases: 0
createdAt: "2019-07-22T12:52:29Z"
lastCommitAt: "2026-11-23T11:18:22Z"
lastReleaseAt: "2020-09-24T16:20:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["scur-iolus", "tonial", "vperron"]
openGraphImageUrl: "https://opengraph.githubassets.com/c56561135d46e91743b86b071c4ea1e87d7aebdd5b4ca9ac25b6cc2cacce929a/gip-inclusion/les-emplois"
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
