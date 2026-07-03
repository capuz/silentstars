---
repo: "IGNF/validator"
name: "validator"
description: "Validateur de données initialement développé pour le géoportail de l'urbanisme"
url: "https://github.com/IGNF/validator"
homepage: "https://ignf.github.io/validator/"
language: "Java"
languages: ["Java", "Game Maker Language"]
languagePcts: [78, 20]
topics: ["cli", "data-validator", "validation"]
stars: 17
forks: 3
openIssues: 23
closedIssues: 122
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2016-07-08T15:04:15Z"
lastCommitAt: "2026-07-03T12:37:48Z"
lastReleaseAt: "2018-12-17T18:35:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 66
maintainers: ["DD-Arras", "Bloumy", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/718d4b527822990a9f6f2d6fe0e80d2c1f8c149b6dfab4af630ca386c191bc2b/IGNF/validator"
---

# Validator

## Description

> This program validates a dataset (a folder containing geodata files and other documents) according to a schema describing the folder structure and the feature catalog. It outputs a report containing validation errors and warnings, and normalized data ready for database integration.

> It has been originally developed for the [Géoportail de l'Urbanisme]((https://www.geoportail-urbanisme.gouv.fr)) to check urban planning documents against CNIG standards in order to produce a nationwide database.

Ce programme permet de valider et de normaliser les données présentes dans une arborescence de fichiers. Ces données peuvent être :

* Des tables, géographiques ou non, aux formats CSV, GML, Shapefile ou MapInfo
* Des fiches de métadonnées
* Des fichiers PDF
* Des dossiers (principalement pour contrôle de présence)

Le paramétrage s'effectue à l'aide de [fichiers JSON décrivant des arborescences de fichiers et des tables](validator-core/src/main/resources/schema/README.md).

## Cas d'usage

* [Géoportail de l'Urbanisme](https://www.geoportail-urbanisme.gouv.fr) : Validation des données en fonction des [standards CNIG PLU, POS, CC, PSMV, SUP et…
