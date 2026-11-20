---
repo: "EsupPortail/esup-dematec"
name: "esup-dematec"
description: "Application de dématérialisation des recrutements des enseignants chercheurs et ATER liés à l'application nationale Galaxie. "
readmeQualityOk: true
url: "https://github.com/EsupPortail/esup-dematec"
homepage: "https://www.esup-portail.org/wiki/display/EsupDematEC"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [59, 22]
stars: 6
forks: 3
openIssues: 0
closedIssues: 11
watchers: 10
contributors: 7
recentReleases: 0
createdAt: "2013-04-08T09:52:21Z"
lastCommitAt: "2026-11-19T11:57:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 70
undervaluedScore: 72
maintainers: ["vbonamy"]
openGraphImageUrl: "https://opengraph.githubassets.com/12691e66912f6b2460e6cd31a33b3a580f522fd4f4f9a00d9c476c63c197c6f0/EsupPortail/esup-dematec"
---

Application de dématérialisation des recrutements des enseignants-chercheurs et ATER liés à l'application nationale Galaxie.
============================

Cette application permet une gestion des authentifications des candidats et autres utilisateurs (administrateur, gestionnaire, membre de commission).

Elle ingère des fichiers Excel Galaxie pour générer ensuite les comptes utilisateurs, postes, candidatures liés.

Elle permet aux candidats de déposer des fichiers pour chacune de ses candidatures.

Elle permet aux membres de consulter les fichiers des candidatures correspondant à leur(s) commission(s) et validées par les gestionnaires (RH : recevable/non-recevable).

L'ensemble des données est stocké dans une base de données, fichiers compris, cela nous a amené à utiliser PostgreSQL (et non MySQL) pour ses possibilités de streaming sur les blobs.

## Configuration

### Configuration système

Logs :
* `src/main/resources/logback.xml` : journalisation avec SLF4J/Logback. La sortie console est activée ; les sorties fichier et mail sont optionnelles et doivent être activées dans ce fichier.
