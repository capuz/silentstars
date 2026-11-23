---
repo: "Speicherstadt/belegt"
name: "belegt"
description: "Self-hosted document archive with GoBD mode: emails, e-invoices (ZUGFeRD, XRechnung), scans with OCR and any file, immutable until retention ends. Selbst gehostetes, revisionssicheres Dokumentenarchiv nach GoBD mit Prüferzugang, Hash-Kette und RFC-3161-Zeitstempel."
readmeQualityOk: true
url: "https://github.com/Speicherstadt/belegt"
homepage: "https://belegt.store"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["audit-trail", "compliance", "dms", "document-archive", "document-management", "e-invoicing", "e-rechnung", "email-archiving", "germany", "gobd"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-11-14T10:12:14Z"
lastCommitAt: "2026-11-23T12:25:38Z"
lastReleaseAt: "2026-11-23T10:03:06Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["firsttris", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36b14d96f12efb46105403acbc70392fb58361b08947585a260d37786caf2979/Speicherstadt/belegt"
---

**Belegt ist, was du beweisen kannst.**<br>
Mails, E-Rechnungen, Scans und beliebige Dokumente an einem Ort, durchsuchbar, auf deinem Server. Was aufbewahrt
werden muss, bleibt bis Fristende unverändert, und danach löschst du es nachweisbar.

[Warum?](#warum-belegt) •
[Funktionen](#funktionen) •
[Schnellstart](#schnellstart) •
[FAQ](#faq) •
[Dokumentation](https://belegt.store/) •
[Entwicklung](#entwicklung)

🖱️ **[Demo ausprobieren](https://belegt.store/demo/)**: mit Beispieldaten, im Browser, ohne Installation •
🖼️ **[Rundgang in Bildern](https://belegt.store/)**

> **Warning**
>
> **Beta:** Belegt wird noch stark weiterentwickelt. Vor jedem Update sichern
> ([Sichern](https://belegt.store/betrieb.html#sichern)); Migrationen lassen sich nicht zurückspielen.

## Warum Belegt?

Wer ein Unternehmen führt, muss Rechnungen, Kontoauszüge und Geschäftsbriefe sechs, acht oder zehn Jahre aufbewahren,
unverändert und auffindbar, und der Betriebsprüfung zeigen können. Ein Ordner auf dem Server oder ein
Dokumentenmanagement reicht dafür selten: Dateien lassen sich ändern, und niemand weiß, wann was gelöscht werden darf.
