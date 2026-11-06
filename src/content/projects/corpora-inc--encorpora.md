---
repo: "corpora-inc/encorpora"
name: "encorpora"
description: "Corpora for k-12 and beyond"
readmeQualityOk: true
url: "https://github.com/corpora-inc/encorpora"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 5
forks: 3
openIssues: 170
closedIssues: 400
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-11-10T17:05:23Z"
lastCommitAt: "2026-11-06T07:11:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 82
maintainers: ["skyl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cbef269e9da23be0a69afacedd7a59cf6ac0f58399dac8aed049a16c5fd1bd6/corpora-inc/encorpora"
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
