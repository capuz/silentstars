---
repo: "AmyJeanes/TeslaMateAgile"
name: "TeslaMateAgile"
description: "Integration to automatically fill in prices for charge data captured by TeslaMate for smart energy providers"
readmeQualityOk: true
url: "https://github.com/AmyJeanes/TeslaMateAgile"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["octopus", "teslamate", "tibber", "electricity-tariffs", "tesla"]
stars: 123
forks: 18
openIssues: 1
closedIssues: 64
watchers: 12
contributors: 9
recentReleases: 0
createdAt: "2020-05-31T03:04:39Z"
lastCommitAt: "2026-09-27T05:00:34Z"
lastReleaseAt: "2020-06-04T01:57:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["renovate[bot]", "AmyJeanes", "Fneoigmewop"]
openGraphImageUrl: "https://opengraph.githubassets.com/359b5363449c8ff64adbcc2be5f63f814b78555352e7bab6c19aedb18a689208/AmyJeanes/TeslaMateAgile"
fundingLinks: ["GITHUB:https://github.com/AmyJeanes"]
discussionCount: 4
---

# TeslaMateAgile

## Description
This app will automatically update your cost for charge sessions in TeslaMate within a specified geofence (usually home) using data from your smart electricity tariff.

Supported energy providers / tarriffs:
- [Octopus Energy: Agile Octopus](https://octopus.energy/agile/)
- [Tibber](https://tibber.com/en)
- Fixed Price (manually specify prices for different times of the day)
- [aWATTar](https://www.awattar.de/)
- [Energinet](https://www.energidataservice.dk/tso-electricity/Elspotprices)
- [Home Assistant](https://www.home-assistant.io/)
- [Monta](https://monta.com/)
- [EDF Tempo](https://particulier.edf.fr/fr/accueil/gestion-contrat/options/tempo/details.html)
- [PGE (Pacific Gas & Electric) Day-Ahead Market](https://www.pge.com/en/account/rate-plans/hourly-flex-pricing.html)

## How to use
You can either use it in a Docker container or go to the releases and download the zip of the latest one and run it on the command line using `./TeslaMateAgile`.

Alternatively, if you are using Home Assistant OS (or supervised) [@tougher](https://github.com/tougher) has wrapped this project in a Home Assistant Addon:…
