---
repo: "oliverjessner/oliverjessner.github.io"
name: "oliverjessner.github.io"
description: "Oliver Jessner Website"
readmeQualityOk: true
url: "https://github.com/oliverjessner/oliverjessner.github.io"
homepage: "https://oliverjessner.at"
language: "HTML"
languages: ["HTML", "JavaScript", "CSS"]
languagePcts: [45, 35, 20]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-21T17:27:08Z"
lastCommitAt: "2026-11-23T13:29:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 72
maintainers: ["oliverjessner", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4807c0426b9ac88c092ee427cfd1b5a296a387e71f28a5f9702b5eb78bb1a30c/oliverjessner/oliverjessner.github.io"
fundingLinks: ["GITHUB:https://github.com/oliverjessner", "BUY_ME_A_COFFEE:https://buymeacoffee.com/oliverjessner"]
---

# oliverjessner.at

Die Website wird mit Eleventy 3 und einer vollständig Node-basierten Build-Pipeline erzeugt. Liquid-Templates, bestehendes HTML/CSS/JavaScript und die öffentlichen URLs der früheren Website bleiben kompatibel; Ruby ist nicht erforderlich.

## Requirements

- Node.js 22.12.0 oder neuer; `.nvmrc` und Netlify verwenden Node.js 24
- npm

Das Daten-Update `npm run update` verwendet für die Projekt-Releases die Fetchary-Library und benötigt Node.js 26 oder neuer. Die Website-Builds verwenden weiterhin die oben genannte Node-Version.

## Installation

```bash
npm ci
```

## Development

```bash
npm run dev
```

Eleventy startet den lokalen Entwicklungsserver und beobachtet Inhalte, Templates und Assets. Nach jedem Watch-Build werden das aus Liquid-Teildateien zusammengesetzte CSS und der Pagefind-Suchindex aktualisiert.

## Production Build

```bash
npm run build
```

Der Build leert `_site/` und führt diese Schritte aus:
