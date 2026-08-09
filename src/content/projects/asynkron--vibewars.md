---
repo: "asynkron/VibeWars"
name: "VibeWars"
description: "Hex-grid strategy game built with Three.js + TypeScript/Vite"
readmeQualityOk: true
url: "https://github.com/asynkron/VibeWars"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-02T11:06:22Z"
lastCommitAt: "2026-08-09T04:47:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["rogeralsing"]
openGraphImageUrl: "https://opengraph.githubassets.com/56505f332ccf3f066042b104b515d169dece68fc68d7f789700940dd80b85d6b/asynkron/VibeWars"
---

# VibeWars

A hex-grid turn-based strategy game that runs entirely in the browser — terrain, units,
destructible ground and an AI opponent that searches whole turns in Web Workers. No server, no
backend, no runtime dependencies.

**Play it: https://asynkron.github.io/VibeWars/**

It began as a proof of concept: a strategy game written end to end by an AI coding agent. It has
since grown into ~24k lines of TypeScript with 508 tests, and the code is unusually heavily
commented — most non-obvious decisions carry the measurement or the bug that forced them.

---

## Quick start

```bash
npm ci
```

```bash
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on :5173 |
| `npm run build` | Static build into `dist/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | The full suite (37 files, 508 tests) |
| `npm run simulate` | `MATCHES=10` headless AI-vs-AI matches, prints win rates |
| `npm run tournament` | `ROUNDS=20` engine-vs-engine, prints a Wilson interval verdict |

Match setup rides in the query string: `?map=crown14&mode=human-vs-ai&ai=feint`.

---

## Tech

| | |
| --- | --- |
| **Language** | TypeScript 7 (strict), ES2020, bundler…
