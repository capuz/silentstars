---
repo: "oliverjessner/oliverjessner.github.io"
name: "oliverjessner.github.io"
description: "Oliver Jessner Website"
readmeQualityOk: true
url: "https://github.com/oliverjessner/oliverjessner.github.io"
homepage: "https://oliverjessner.at"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [47, 35]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-21T17:27:08Z"
lastCommitAt: "2026-09-24T08:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 73
maintainers: ["oliverjessner"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac9ec05191719ec85cdf96bd26382340603539a19606b9c80b645f14f8ee6417/oliverjessner/oliverjessner.github.io"
fundingLinks: ["GITHUB:https://github.com/oliverjessner", "BUY_ME_A_COFFEE:https://buymeacoffee.com/oliverjessner"]
---

# oliverjessner.at

Die Website wird mit Eleventy 3 und einer vollständig Node-basierten Build-Pipeline erzeugt. Liquid-Templates, bestehendes HTML/CSS/JavaScript und die öffentlichen URLs der früheren Website bleiben kompatibel; Ruby ist nicht erforderlich.

## Requirements

- Node.js 20 oder neuer
- npm

## Installation

```bash
npm install
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

1. Eleventy rendert Seiten, Posts, Kategorien, Pagination, Feed und Sitemaps.
2. `tools/build/build-css.js` assembliert das bestehende CSS.
3. Sharp erzeugt responsive Bildvarianten; das HTML erhält Lade- und LCP-Attribute.
4. PurgeCSS entfernt nicht verwendete Produktionsregeln.
5. Pagefind erzeugt den Suchindex.
6. Die QA prüft Root-Dateien, interne Links, lokale Assets, JSON-LD, RSS und Sitemaps.

Zusätzliche Kommandos:

```bash
npm run build:site
npm run build:css
npm run…
