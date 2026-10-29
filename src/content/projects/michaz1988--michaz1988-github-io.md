---
repo: "michaz1988/michaz1988.github.io"
name: "michaz1988.github.io"
description: "Kodi-Add-on-Repository mit automatischer Veröffentlichung sowie EPG-, Senderlisten- und Logo-Updates."
readmeQualityOk: true
url: "https://github.com/michaz1988/michaz1988.github.io"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 62
forks: 10
openIssues: 0
closedIssues: 84
watchers: 11
contributors: 1
recentReleases: 0
createdAt: "2025-11-05T02:07:13Z"
lastCommitAt: "2026-10-29T10:20:53Z"
lastReleaseAt: "2026-01-03T03:53:40Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 48
maintainers: ["michaz1988", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/90cd7f9e1ec4ebf5b302d2f3fdfad8d260acc1c04aae1b743d434903cb611407/michaz1988/michaz1988.github.io"
---

# Michaz Kodi Repository

Dieses Repository stellt Kodi-Add-ons, EPG-Daten und ergänzende Dateien bereit.

## Kodi-Repository installieren

1. In Kodi unter **Einstellungen → Dateimanager → Quelle hinzufügen** die Adresse
   `https://michaz1988.github.io/` eintragen.
2. Unter **Add-ons → Aus ZIP-Datei installieren** die Quelle öffnen.
3. Im Ordner [`repo/repository.michaz`](https://michaz1988.github.io/repo/repository.michaz/)
   die neueste ZIP-Datei installieren.
4. Anschließend **Aus Repository installieren → Michaz Repository** auswählen.

## EPG

- [EPG als XML](https://github.com/michaz1988/michaz1988.github.io/releases/download/EPG/guide.xml)
- [EPG als komprimierte XML.GZ-Datei](https://github.com/michaz1988/michaz1988.github.io/releases/download/EPG/guide.xml.gz)

Die EPG-Dateien werden täglich automatisch aktualisiert.

## Eigenen Fork verwenden

Die Add-on-Quellen liegen in der Branch `addons`. Beim Forken muss die
GitHub-Option **Copy the DEFAULT branch only** deaktiviert werden, damit diese
Branch ebenfalls in den Fork übernommen wird.

Der Workflow **Repository, EPG und Listen aktualisieren** in der Branch `main`
lädt die Quellen aus `addons`, erstellt die…
