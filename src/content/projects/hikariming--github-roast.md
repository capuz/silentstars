---
repo: "hikariming/github-roast"
name: "github-roast"
description: "Savage GitHub Roast · Drop a handle, get a 0–100 value & trust score in 30s plus one brutally honest roast. Exposes PR farmers, AI bots & fork-hoarders. Deterministic scoring, self-hostable."
url: "https://github.com/hikariming/github-roast"
homepage: "https://githubroast.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "code-quality", "developer-tools", "github", "leaderboard", "nextjs", "openai", "roast"]
stars: 23
forks: 3
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-26T09:02:14Z"
lastCommitAt: "2026-06-28T06:57:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 38
maintainers: ["hikariming", "KurosawaGeeker", "AsperforMias"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6252da2e8110b131f6d462c34e0766c80884d39fca6d90574792b0563b7b242/hikariming/github-roast"
---

# Savage GitHub Roast 🔥

**English** · [中文](./README.zh.md)

> **Live:** [githubroast.dev](https://githubroast.dev)

Drop a GitHub handle and get, in 30 seconds, a **0–100 value & trust score**, a four-tier verdict (🏆 Legend / 💪 Solid / 🫥 NPC / 💩 Cooked), and one **brutally honest roast grounded in real data**. Built to expose star-farmers, AI bots, fork-hoarders, and self-merge PR farmers.

The scoring core comes from the open-source Claude skill `github-account-value` — this site **ports its Python scoring logic line-by-line into TypeScript**, with unit tests locking the two outputs in parity.

## How it works

```
browser ─▶ /api/scan ─▶ [Redis cache?] ─▶ lib/github.ts  (GitHub REST + GraphQL, operator PAT)
                                     └─▶ lib/score.ts   (deterministic scoring, parity with the Python skill)
                                     └─▶ write cache 24h
         ─▶ /api/roast (streaming) ─▶ lib/llm.ts (OpenAI-compatible; defaults to StepFun; bring-your-own key)
```

- **The score is deterministic** — computed server-side by `lib/score.ts`. The LLM cannot change the number.
- The LLM does only two things: read README/PRs to apply a bounded **±10**…
