---
repo: "TRON4R/ha-ppc-smgw-han"
name: "ha-ppc-smgw-han"
description: "Home Assistant Integration for daily import of the German PPC SMGW power consumption and surplus feed values for customers of Octopus Energy Germany"
readmeQualityOk: true
url: "https://github.com/TRON4R/ha-ppc-smgw-han"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ha", "hacs", "smgw", "han", "imsys", "octopus", "smartmeter", "energy", "home-assistant", "metering"]
stars: 54
forks: 4
openIssues: 3
closedIssues: 12
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T00:40:14Z"
lastCommitAt: "2026-11-27T16:27:44Z"
lastReleaseAt: "2026-03-26T21:28:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 39
maintainers: ["TRON4R", "claude", "LeRehVer"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdbd1c7fe40242e95dba3f41e9e825e9b4066c98a15c6636143b5e761867059c/TRON4R/ha-ppc-smgw-han"
discussionCount: 4
---

# ha-ppc-smgw-han

**Home Assistant Custom Integration zum Abruf __geeichter Tagesendwerte__ von PPC Smart Meter Gateways über die HAN-Schnittstelle.**

## Was macht diese Integration?

Die Integration verbindet sich einmal täglich automatisch mit dem PPC SMGW und ruft die offiziellen, eichrechtskonformen Tagesendwerte vom Zählerstand-Endpunkt ab. Sie liefert:

- **Tagesverbrauch (gesamt)** - gesamter Stromverbrauch des Vortags
- **Tagesverbrauch pro Tarifzone** - mit **frei konfigurierbaren Tarifzonen** (seit v3.0.0): vom Einheitstarif mit nur einem Preis über einfache Zwei-Zonen-Tarife wie Octopus Go (Standard: 00:00–04:59 / 05:00–23:59) bis zu Tarifen mit mehreren Zeitfenstern pro Zone wie Octopus Heat
- **Tageseinspeisung (gesamt)** - gesamte Netzeinspeisung des Vortags
- **Energie-Dashboard-kompatibel** - alle Sensoren lassen sich direkt im Home Assistant Energie-Dashboard verwenden
- **Separater Datenexport für beliebige Zeiträume** - auf Abruf und unabhängig von den Sensoren: Die Daten kommen direkt aus dem Speicher des SMGW (je nach Gerät 15–24 Monate Historie, also auch aus der Zeit **vor** der Installation der Integration) — bequem aus der Home-Assistant-Oberfläche, ohne…
