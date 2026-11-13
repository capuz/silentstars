---
repo: "firsttris/haben"
name: "haben"
description: "Selbst gehostete Buchhaltung für Freiberufler, Selbstständige, Kleinunternehmer, GmbH und UG: E-Rechnung (ZUGFeRD, XRechnung), Belege, Bankabgleich, EÜR oder Bilanz, E-Bilanz und Steuererklärungen an ELSTER. Für die GoBD gebaut, DATEV-Export. Open-Source-Alternative zu Lexware Office (lexoffice) und sevDesk. Docker-Image für den eigenen Server."
readmeQualityOk: true
url: "https://github.com/firsttris/haben"
homepage: "https://haben.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["accounting", "bookkeeping", "buchhaltung", "buchhaltungssoftware", "datev", "docker", "e-rechnung", "elster", "euer", "freelancer"]
stars: 481
forks: 45
openIssues: 109
closedIssues: 102
watchers: 3
contributors: 21
recentReleases: 10
createdAt: "2026-10-02T00:15:12Z"
lastCommitAt: "2026-11-13T11:27:45Z"
lastReleaseAt: "2026-10-20T19:20:36Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 27
maintainers: ["firsttris", "SteGun93", "Dudeplayz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400849760/a5362735-e02a-4c24-afa6-c57aa8c0f8bf"
---

**Die Buchhaltungssoftware für Freiberufler, Selbstständige, Kleinunternehmer und kleine GmbHs, die du selbst betreibst.**<br>
Rechnungen mit E-Rechnung (ZUGFeRD, XRechnung), Belege, Bankabgleich, EÜR oder Bilanz mit E-Bilanz und die Steuern
direkt an ELSTER. Für die GoBD gebaut, auf deinem Server, ohne Datenabfluss.

[Warum?](#warum-haben) •
[Funktionen](#funktionen) •
[Schnellstart](#schnellstart) •
[FAQ](#faq) •
[Dokumentation](https://haben.app/) •
[Entwicklung](#entwicklung)

> [!WARNING]
> **Beta:** Haben wird noch stark weiterentwickelt. Datenmodell und Abläufe können sich von Version zu Version
> ändern, und Migrationen lassen sich nicht zurückspielen. Vor jedem Update ein Backup machen
> (`docker compose exec backup backup.sh`, siehe [Backup und Wiederherstellen](https://haben.app/installation-backup.html#backup-und-wiederherstellen))
> und Auswertungen und Meldungen ans Finanzamt vor dem Absenden prüfen.

## Warum Haben?

In der Buchhaltung gibt es Soll und Haben. Haben ist, was dir gehört.

Rechnungen schreiben, Belege sammeln, Konto abgleichen, Voranmeldung schicken: Dafür braucht es kein Abo bei
Lexware Office (früher lexoffice) oder sevDesk und keinen fremden Dienst,…
