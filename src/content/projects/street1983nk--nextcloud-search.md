---
repo: "street1983nk/nextcloud-search"
name: "nextcloud-search"
description: "Findling: zero-config full text search for Nextcloud (PHP companion findling + ExApp findling_backend)"
readmeQualityOk: true
url: "https://github.com/street1983nk/nextcloud-search"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 14
forks: 2
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T10:40:07Z"
lastCommitAt: "2026-10-29T10:20:56Z"
lastReleaseAt: "2026-09-30T14:37:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 51
maintainers: ["street1983nk"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f906f6806fa169e0b8d7be3b8b00f0f9d7e0156f00e3d0a7c08f8ca00e10840/street1983nk/nextcloud-search"
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
- Filter nach Dateityp oder Ordner direkt in der Nextcloud-Suche
- Texterkennung für gescannte PDFs und Bilder: zehn Sprachen verfügbar
  (Deutsch, Englisch, Französisch, Spanisch, Italienisch, Niederländisch,
  Portugiesisch, Dänisch, Estnisch, Tschechisch), voreingestellt sind…
