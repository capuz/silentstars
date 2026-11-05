---
repo: "firsttris/haben"
name: "haben"
description: "Selbst gehostete Buchhaltung für Freiberufler, Selbstständige und Kleinunternehmer: E-Rechnung mit ZUGFeRD und XRechnung, Belege, Bankabgleich, EÜR, Umsatzsteuer-Voranmeldung und Jahreserklärungen direkt an ELSTER. GoBD-konform, DATEV-Export. Open-Source-Alternative zu Lexware Office (lexoffice) und sevDesk. Docker-Image für den eigenen Server."
readmeQualityOk: true
url: "https://github.com/firsttris/haben"
homepage: "https://firsttris.github.io/haben/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["accounting", "bookkeeping", "buchhaltung", "buchhaltungssoftware", "datev", "docker", "e-rechnung", "elster", "euer", "freelancer"]
stars: 44
forks: 6
openIssues: 21
closedIssues: 30
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-02T00:15:12Z"
lastCommitAt: "2026-11-05T14:04:57Z"
lastReleaseAt: "2026-10-20T19:20:36Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 43
maintainers: ["firsttris", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400849760/dcb51a72-3f16-443e-a8b6-df92472e6909"
---

**Die Buchhaltungssoftware für Freiberufler, Selbstständige, Kleinunternehmer und kleine GmbHs, die du selbst betreibst.**<br>
Rechnungen mit E-Rechnung (ZUGFeRD, XRechnung), Belege, Bankabgleich, EÜR oder Bilanz mit E-Bilanz und die Steuern
direkt an ELSTER. GoBD-konform, auf deinem Server, ohne Datenabfluss.

[Warum?](#-warum-haben) •
[Funktionen](#-funktionen) •
[Schnellstart](#-schnellstart) •
[FAQ](#-faq) •
[Dokumentation](https://firsttris.github.io/haben/) •
[Entwicklung](#-entwicklung)

> [!WARNING]
> **Beta:** Haben wird noch stark weiterentwickelt. Datenmodell und Abläufe können sich von Version zu Version
> ändern, und Migrationen lassen sich nicht zurückspielen. Vor jedem Update ein Backup machen
> (`docker compose exec backup backup.sh`, siehe [Backup und Wiederherstellen](https://firsttris.github.io/haben/installation.html#backup-und-wiederherstellen))
> und Auswertungen und Meldungen ans Finanzamt vor dem Absenden prüfen.

## 💡 Warum Haben?

In der Buchhaltung gibt es Soll und Haben. Haben ist, was dir gehört.

Rechnungen schreiben, Belege sammeln, Konto abgleichen, Voranmeldung schicken: Dafür braucht es kein Abo bei
Lexware Office (früher lexoffice) oder sevDesk…
