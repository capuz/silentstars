---
repo: "thomaslehmann1234/ha_ortsnetz_auslastung"
name: "ha_ortsnetz_auslastung"
description: "HA Energy data collector for ortsnetz-auslastung.de"
readmeQualityOk: true
url: "https://github.com/thomaslehmann1234/ha_ortsnetz_auslastung"
homepage: "https://www.ortsnetz-auslastung.de"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["energy-data", "energy-markets", "energy-monitoring"]
stars: 28
forks: 3
openIssues: 4
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-11T08:40:34Z"
lastCommitAt: "2026-10-23T12:04:32Z"
lastReleaseAt: "2026-10-14T18:32:28Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 49
maintainers: ["thomaslehmann1234", "Optic00", "thomas-lehmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe87bb023bd2bd5c74ba7e8e86267d50c8b9425147cb704db4690a70aab3abc5/thomaslehmann1234/ha_ortsnetz_auslastung"
fundingLinks: ["KO_FI:https://ko-fi.com/thomaslehmann1234"]
---

# Ortsnetz-Auslastung für Home-Assistant-Admins

Diese Anleitung richtet sich an Personen, die eine Home-Assistant-Instanz betreuen. Die HACS-Integration sendet die drei Phasenspannungen L1, L2 und L3 sowie den Standort deiner Instanz an die Ortsnetz-Auslastung-API. Nach dem ersten Senden werden die Werte alle fünf Minuten übertragen.

## Ortsnetz-Auslastung

[Ortsnetz-Auslastung](https://www.ortsnetz-auslastung.de) visualisiert Spannungsmessungen, Netzfrequenzen und standortübergreifende Statistiken aus freiwillig teilnehmenden PV-Anlagen in Deutschland.

Für eine Karte der öffentlichen Messpunkte steht zusätzlich das Community-Projekt [Ortsnetz Map](https://github.com/BeGiBue/ha-ortsnetz-auslastung) bereit.

## Voraussetzungen

- Home Assistant mit installiertem [HACS](https://hacs.xyz/)
- Drei numerische `sensor`-Entitäten für L1, L2 und L3; Spannungswerte mit kompatibler Einheit, z. B. `229.8 V` oder `229800 mV`

Beim Einrichten legt die Integration zusätzlich die Entitäten **Netzspannungsstatus** und **Batteriespeicherempfehlung** an; ihre Werte erscheinen nach der ersten erfolgreichen Übertragung. Der Netzspannungsstatus ist der jeweils schlechteste Phasenstatus (`Normal`,…
