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
stars: 16
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-26T09:02:14Z"
lastCommitAt: "2026-06-28T01:44:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["hikariming", "KurosawaGeeker"]
openGraphImageUrl: "https://opengraph.githubassets.com/972c602d9ef332e8c0f27efb602c8239ac90b24b74c70e40d329c88e926d4cec/hikariming/github-roast"
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
