---
repo: "Amankori2307/monopoly"
name: "monopoly"
description: "Monopoly is a multi-player economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, aiming to drive them to bankruptcy."
readmeQualityOk: true
url: "https://github.com/Amankori2307/monopoly"
homepage: "https://monopoly.amankori.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["monopoly", "game", "board-game", "multiplayer-game", "monopoly-board-game", "monopoly-game"]
stars: 5
forks: 1
openIssues: 23
closedIssues: 39
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-08-14T16:29:42Z"
lastCommitAt: "2026-09-09T08:17:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 80
maintainers: ["tech-anarix", "Amankori2307"]
openGraphImageUrl: "https://opengraph.githubassets.com/38852e5a163a616df5d6e9f4f4f7a8d36ba9e1fbb29bca70ecc7cb6bb6f86335/Amankori2307/monopoly"
---

# Monopoly

A browser Monopoly with the full printed ruleset, built as a **pure rules engine with a React
shell**. Games have stable ids, save to `localStorage`, and resume from `/game/:gameId`.

**[Play it](https://amankori2307.github.io/monopoly/)** · [Ruleset](https://github.com/Amankori2307/monopoly/blob/HEAD/docs/india-edition-rules.md) ·
[Architecture](https://github.com/Amankori2307/monopoly/blob/HEAD/docs/architecture.md) · [File index](https://github.com/Amankori2307/monopoly/blob/HEAD/docs/file-index.md)

---

## Getting started

```bash
pnpm install
pnpm dev          # Vite dev server on :3000
```

| Command          | What it does                                             |
| ---------------- | -------------------------------------------------------- |
| `pnpm dev`       | dev server on :3000                                      |
| `pnpm build`     | production build into `build/`                           |
| `pnpm test`      | unit and integration tests (vitest)                      |
| `pnpm test:e2e`  | end-to-end tests (playwright, starts its own dev server) |
| `pnpm typecheck` | tsc --noEmit                                             |
| `pnpm lint`      |…
