---
repo: "KyleDerZweite/spellbook"
name: "spellbook"
description: "Self-hosted TCG collection manager with mobile scanning, OCR recognition, fast search, and cross-device sync"
readmeQualityOk: true
url: "https://github.com/KyleDerZweite/spellbook"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["card-scanner", "collection-manager", "magic-the-gathering", "mtg", "ocr", "scryfall", "self-hosted", "tcg", "meilisearch", "spacetimedb"]
stars: 8
forks: 1
openIssues: 21
closedIssues: 25
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-01T14:29:06Z"
lastCommitAt: "2026-10-08T10:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 70
maintainers: ["KyleDerZweite"]
openGraphImageUrl: "https://opengraph.githubassets.com/38da13fe1a7dab276a7417882e93018a33188226fb88a50d0c13989cf35d44a6/KyleDerZweite/spellbook"
---

# Spellbook

Spellbook is an open-source, self-hosted Magic: The Gathering inventory and deck builder. Search the Scryfall catalog, track owned printings, build decks, and compare required cards with inventory.

The application uses SvelteKit, PostgreSQL, and a Python ingestion worker. Accounts use local username and password authentication. Scan review supports image uploads and manual printing selection. Automatic card recognition and direct browser camera capture remain planned.

Start the configured local development environment with `./dev.sh`. This runs Vite on port 5173 and the scan-worker on port 8087. See [local development setup](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/operations/deployment.md#local-development) for prerequisites and private configuration.

- [Product specification](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/product/specification.md)
- [Documentation index](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/README.md)
- [Domain glossary](https://github.com/KyleDerZweite/spellbook/blob/HEAD/GLOSSARY.md)
- [Repository…
