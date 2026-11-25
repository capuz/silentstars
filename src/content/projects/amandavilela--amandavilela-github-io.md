---
repo: "amandavilela/amandavilela.github.io"
name: "amandavilela.github.io"
description: "Amanda's portfolio"
readmeQualityOk: true
url: "https://github.com/amandavilela/amandavilela.github.io"
language: "Nunjucks"
languages: ["Nunjucks", "CSS", "JavaScript"]
languagePcts: [40, 29, 22]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2014-12-10T17:37:05Z"
lastCommitAt: "2026-11-25T03:14:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 44
maintainers: ["amandavilela"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0e98cde2a07ffb9e34f6b3717456681282fb97f3a3d4e36315486d897c7274c/amandavilela/amandavilela.github.io"
---

# Amanda's portfolio

Static portfolio site for [amandavilela.me](https://amandavilela.me).

Built with [Eleventy](https://www.11ty.dev/) (templates + routing) and [Lightning CSS](https://lightningcss.dev/) (styles).

## Getting started

1. Install [Bun](https://bun.sh/docs/installation) (v1.0 or later).
2. Install dependencies:

```bash
bun install
```

## Development

Start the dev server:

```bash
bun run dev
```

- Watches `src/css/` and re-bundles the CSS entry points into `dist/` with Lightning CSS on every change
- Eleventy processes templates from `src/` → `dist/` and serves `dist/` with live reload
- Blog images are resized on startup and re-processed when they change in `src/blog/`
- `Ctrl+C` shuts everything down
- Dev server runs at **http://localhost:8080** (Eleventy's default port)

## Build

Compile and emit a production-ready `dist/`:

```bash
bun run build
```

The build writes:
