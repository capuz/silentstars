---
repo: "bluetouff/l0g"
name: "l0g"
description: "l0g website"
readmeQualityOk: true
url: "https://github.com/bluetouff/l0g"
homepage: "https://l0g.fr"
language: "MDX"
languages: ["MDX", "HTML"]
languagePcts: [38, 23]
topics: ["commodities", "cryptocurrency", "economy", "finance", "geopolitics"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-08T14:13:45Z"
lastCommitAt: "2026-09-04T08:04:10Z"
lastReleaseAt: "2026-07-30T21:36:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 49
maintainers: ["bluetouff", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1a5c529fb4b300a6b1b5f606c042b28a1b7ed2a69e3bace4bf11cbe42d415c0/bluetouff/l0g"
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
