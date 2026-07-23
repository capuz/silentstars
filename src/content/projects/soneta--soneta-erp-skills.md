---
repo: "soneta/soneta-erp-skills"
name: "soneta-erp-skills"
description: "Zestaw skills dla asystentów AI (Claude, Cursor, Windsurf, itp.) wspierających programowanie z ORM platformy enova365/Soneta Enterprise."
readmeQualityOk: true
url: "https://github.com/soneta/soneta-erp-skills"
language: "C#"
languages: ["C#", "SCSS"]
languagePcts: [52, 28]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2025-12-26T21:15:10Z"
lastCommitAt: "2026-07-23T06:15:11Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 57
maintainers: ["mwgo", "mariuszsuchan", "grzegorz-purchla-soneta"]
openGraphImageUrl: "https://opengraph.githubassets.com/346b519c73f6a23b3c6bc041a367e3f5a374c99374738c47b9c97962f1702ba5/soneta/soneta-erp-skills"
---

# Soneta AI Skills

Zestaw skills dla asystentów AI (Claude, Cursor, Windsurf, itp.) wspierających programowanie, projektowanie i konfigurację **platformy Soneta (enova365, Triva)**.

## Dostępne skille

### 0. soneta-erp (meta-skill)

Mapa i przewodnik po pozostałych skillach. Pomaga wybrać właściwy skill w zależności od warstwy zadania (dane, UI, logika, płace).

**Kiedy używać:** rozpoczynasz nowe zadanie dla enova365/Soneta/Triva i nie wiesz, który skill zastosować; zadanie obejmuje wiele warstw platformy i potrzebna jest koordynacja między skillami.

### 1. soneta-programming

Fundamentalne klasy ORM platformy Soneta (enova365, Triva).

**Zakres:**
- Mapowanie obiektowo-relacyjne (`Row`, `Table`, `Module`)
- Zarządzanie sesją (`Session`) i transakcjami biznesowymi
- Logowanie i dostęp do bazy (`Login`, `Database`, `BusApplication`)
- Paczki danych (`Datapack`, `GuidedRow`) i synchronizacja
- Kontekst aplikacji (`Context`)

**Kiedy używać:** pytania o klasy logiki biznesowej, sesje, transakcje, hierarchię `Row` → `Table` → `Module`.

### 2. soneta-business-xml

Generator plików `business.xml` definiujących strukturę obiektów biznesowych.

**Zakres:**
- Definiowanie tabel i…
