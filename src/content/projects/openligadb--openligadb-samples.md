---
repo: "OpenLigaDB/OpenLigaDB-Samples"
name: "OpenLigaDB-Samples"
description: "Code-Samples und Issue-Tracker for using OpenLigaDB-Api"
readmeQualityOk: true
url: "https://github.com/OpenLigaDB/OpenLigaDB-Samples"
homepage: "https://www.OpenLigaDB.de"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [48, 31]
topics: ["api", "bundesliga"]
stars: 179
forks: 18
openIssues: 20
closedIssues: 84
watchers: 17
contributors: 6
recentReleases: 0
createdAt: "2016-11-07T19:19:16Z"
lastCommitAt: "2026-10-29T05:49:12Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 71
undervaluedScore: 25
maintainers: ["msiggi", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77e34c442331f66c3a019ab56a57cd8140e31ce210c3b5d35d2efd16a2256c9a/OpenLigaDB/OpenLigaDB-Samples"
discussionCount: 29
---

# Dokumentation zur OpenligaDB und deren Api

## Allgemeines

Zum Abrufen der Liga-Daten der OpenligaDB werden im wesentlichen folgende Parameter verwendet:
- **LeagueShortcut**  - ein vom Ersteller der Liga vergebener, kurzer string, für die 1. Fußball-Bundesliga z.B. 'bl1'
- **LeagueSeason** - die Jahreszahl der Saison der Liga
- **GroupOrderId** - Die OrderId der 'Gruppierung' - entspricht z.B. in der Fußball-Bundesliga dem 'Spieltag' 

Der Abruf der Daten per JSON-Api erfolgt dann je nach Detailtiefe dem Schema

> https://api.openligadb.de/getmatchdata/LeagueShortcut/LeagueSeason/GroupOrderId

Eine Swagger-Online-Dokumentation der Api gibt es unter https://api.openligadb.de/

### Berechtigungen
Jeder angemeldete User darf Ligen anlegen, ist dann der "Administrator" seiner Ligen und nur dieser darf Teams und Spielansetzungen hinzufügen sowie die Ergebnistypen für seine Ligen festlegen. 

Anders ist es bei den Spielergebnissen, diese können von JEDEM angemeldeten User editiert werden. Nach einer Zeit von 6 Tagen nach Spielende ist das Editieren der Ergebnisse nur noch dem Administrator der Liga möglich.

Auf…
