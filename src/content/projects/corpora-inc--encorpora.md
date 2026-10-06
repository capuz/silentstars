---
repo: "corpora-inc/encorpora"
name: "encorpora"
description: "Corpora for k-12 and beyond"
readmeQualityOk: true
url: "https://github.com/corpora-inc/encorpora"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 5
forks: 3
openIssues: 111
closedIssues: 137
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-11-10T17:05:23Z"
lastCommitAt: "2026-10-06T04:55:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 80
maintainers: ["skyl", "Umanistan"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad326a2c8f9f96675f4b8f0343ac04d9f96153f157e1dcc8ff4ccc5e6eac5ab/corpora-inc/encorpora"
postedAt: "2026-07-04T19:31:10.093Z"
---

# encorpora

**encorpora** (“on corpora”) is Corpora Inc’s monorepo. Products, packs, content,
infrastructure and the marketing site all live here and ship from one trunk.

Development is trunk-based: short-lived branch → PR → automated adversarial review →
squash-merge to `main`. See [AGENTS.md](https://github.com/corpora-inc/encorpora/blob/HEAD/AGENTS.md) for the worker loop and the gates.

## What's in here

- **Corpán** (`corpan/`) — the language-learning app. Tauri (Rust) + React,
  shipping on iOS, Android and desktop. 54 interface locales
  (`corpan/corpan-app/public/locales/`) over a corpus of narrated, translated content.
- **Corpán Packs** (`corpan/packs/`) — the pack system and the packs themselves:
  games, readers, an on-device LLM tutor, a multiplayer city. Packs deploy
  over-the-air on merge to `main` and are versioned against app floors.
- **Dynawalla: Apprentice of Numbers** (`dynawalla/`, planned — not yet on `main`)
  — the newest product: children's mathematics, grades 1–6 plus an introduction
  to pre-algebra, set in an ancient-futurist world of astrolabes, gears and
  mechanical computers.
- **Books & publishing** (`books/`) — the authored source for…
