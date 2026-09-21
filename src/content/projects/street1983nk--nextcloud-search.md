---
repo: "street1983nk/nextcloud-search"
name: "nextcloud-search"
description: "Findling: zero-config full text search for Nextcloud (PHP companion findling + ExApp findling_backend)"
readmeQualityOk: true
url: "https://github.com/street1983nk/nextcloud-search"
language: "Python"
languages: ["Python", "PHP"]
languagePcts: [69, 22]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-15T10:40:07Z"
lastCommitAt: "2026-09-21T09:12:58Z"
lastReleaseAt: "2026-09-11T07:18:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 53
maintainers: ["street1983nk"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c89b29ca150f74b196549f480662e818ed9bd08cf8af491997238c0550680dc/street1983nk/nextcloud-search"
---

Deutsch | [English](https://github.com/street1983nk/nextcloud-search/blob/HEAD/README.en.md) | [Français](https://github.com/street1983nk/nextcloud-search/blob/HEAD/README.fr.md)

# Findling

Volltextsuche, Texterkennung und semantische Suche für Nextcloud, ohne
Konfiguration. Treffer erscheinen in der normalen Suchleiste.

**Findling + Nextcloud MCP Connector = die Retrieval-Schicht für Ihr eigenes RAG.**
Der [MCP Connector](https://apps.nextcloud.com/apps/mcp_connector) reicht Findlings Treffer an jeden MCP-Client weiter, mit
genau den Rechten des fragenden Nutzers; gemessen im
[Fidelity-Test](https://github.com/street1983nk/nextcloud-mcp-connector/blob/main/tests/integration/test_content_hit_fidelity.py).
Das Modell bringen Sie mit, kein Inhalt verlässt Ihren Server.

## Was Findling kann

- Volltextsuche mit deutscher Wortbehandlung: Komposita, Flexion, Umlaute,
  Phrasen, Ausschlüsse, Dateityp-Filter
- Texterkennung für gescannte PDFs und Bilder: Deutsch, Englisch, Französisch
- Semantische Suche: findet Dokumente auch über Umschreibungen
- Jeder Treffer wird von Nextcloud rechtegeprüft
- Keine Konfiguration: der erste Indexlauf startet von selbst

## Unterstützte Dateitypen…
