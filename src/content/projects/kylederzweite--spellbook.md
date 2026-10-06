---
repo: "KyleDerZweite/spellbook"
name: "spellbook"
description: "Self-hosted TCG collection manager with mobile scanning, OCR recognition, fast search, and cross-device sync"
readmeQualityOk: true
url: "https://github.com/KyleDerZweite/spellbook"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [57, 30]
topics: ["card-scanner", "collection-manager", "magic-the-gathering", "mtg", "ocr", "scryfall", "self-hosted", "tcg", "meilisearch", "spacetimedb"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-01T14:29:06Z"
lastCommitAt: "2026-10-06T10:33:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 74
maintainers: ["KyleDerZweite", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84f5cfb7b3bb43c791c7db04a9e6f1003c7cc376ef257586b40af699e573ba25/KyleDerZweite/spellbook"
---

# Spellbook

Spellbook is an open-source, self-hosted Magic: The Gathering inventory and deck builder. Search the Scryfall catalog, track owned printings, build decks, and compare required cards with inventory.

The application uses SvelteKit, PostgreSQL, and a Python ingestion worker. Accounts use local username and password authentication. Scan review supports image uploads and manual printing selection. Automatic card recognition and direct browser camera capture remain planned.

Start the configured local development environment with `./dev.sh`. This runs Vite on port 5173 and the scan-worker on port 8087. See [local development setup](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/operations/deployment.md#local-development) for prerequisites and private configuration.

- [Product specification](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/product/specification.md)
- [Documentation index](https://github.com/KyleDerZweite/spellbook/blob/HEAD/docs/README.md)
- [Domain glossary](https://github.com/KyleDerZweite/spellbook/blob/HEAD/GLOSSARY.md)
- [Repository…
