---
repo: "bluetouff/l0g"
name: "l0g"
description: "l0g website"
readmeQualityOk: true
url: "https://github.com/bluetouff/l0g"
homepage: "https://l0g.fr"
language: "MDX"
languages: ["MDX", "JavaScript"]
languagePcts: [36, 34]
topics: ["commodities", "cryptocurrency", "economy", "finance", "geopolitics"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-08T14:13:45Z"
lastCommitAt: "2026-10-26T20:59:40Z"
lastReleaseAt: "2026-07-30T21:36:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["bluetouff", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c97c798df57890a69fad576f7033d7c8801abfd96b75ee10cc9c5448b8f4e5e/bluetouff/l0g"
---

# l0g.fr

Journal statique (Astro 7 + Tailwind v4), édité en Markdown/MDX, versionné sur
GitHub, déployé en pull-based sur un serveur Debian/Apache qui ne sert que du
HTML. Infographies locales, recherche Pagefind, RSS, sitemap, aucun tracker.

> Pour publier (articles, pages avec graphes, colonne de droite), voir le guide
> pas à pas : [`docs/GUIDE-CONTENU.md`](https://github.com/bluetouff/l0g/blob/HEAD/docs/GUIDE-CONTENU.md).

## Jouer en local

```bash
npm install
npm run dev          # http://localhost:4321
```

Aperçu d'un build de production (nécessaire pour tester la recherche Pagefind) :

```bash
npm run build        # astro build + indexation pagefind
npm run preview
```

## Surfaces publiques

l0g publie aussi des surfaces lisibles par machine, utilisées par les agents IA
et par les dashboards :

- `/agents.json` : manifeste de découverte pour agents.
- `/openapi.json` : contrat OpenAPI 3.1 de l'API publique.
- `/api/v1/risk-diff.json` : diff du risque sur 1, 7 et 30 jours
  (signaux, sources, claims, modèles, articles et confiance).
- `/api/v1/black-box.json` : frames point-in-time hashées pour rejouer
  l'état public du risque sans reconstruction rétroactive.
-…
