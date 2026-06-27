---
repo: "yuting0624/antigravity-for-claude-code"
name: "antigravity-for-claude-code"
description: "Claude Code plugin: run the Antigravity CLI (Gemini) as a collaborating sub-agent with intelligent model routing across the SDLC. Community project; not affiliated with Google/Anthropic."
url: "https://github.com/yuting0624/antigravity-for-claude-code"
language: "Shell"
languages: ["Shell"]
languagePcts: [92]
stars: 70
forks: 3
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-19T01:13:25Z"
lastCommitAt: "2026-06-27T00:35:21Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 12
maintainers: ["yuting0624"]
openGraphImageUrl: "https://opengraph.githubassets.com/c29e995e4c3a36fc94372c32dd524dae77213b31753dd956b43e44bce8c655c2/yuting0624/antigravity-for-claude-code"
---

# 🛰️ Antigravity for Claude Code

**Run the Antigravity CLI (Gemini) as a collaborating sub-agent, right inside Claude Code.**

Claude conducts the judgement; Gemini does the heavy lifting — intelligent model routing across the SDLC.

![Claude Code plugin](https://img.shields.io/badge/Claude%20Code-plugin-5A4FCF?logo=claudecode&logoColor=#D97757)

</div>

---

## ⚡ Quick look

Claude stays the conductor; the bulk, token-heavy read ran on cheaper Gemini, and Claude verified the result.

---

## 💡 Why

| | Claude (conductor) | Gemini / `agy` (executor) |
|---|---|---|
| **Owns** | requirements · architecture · the hard 20% · **verification** · review | scaffold · implementation · test generation · search |
| **Strength** | judgement | cheap, fast throughput |

```
you → Claude Code (conduct: design / verify / review)
         └── agy → Gemini (execute: implement / test / search)
```

> *Generation is solved; verification, judgement, and direction are the craft.*

## ✨ What it does

- **Routes work across the SDLC** — Claude keeps the judgement calls; Antigravity handles scaffolding, **test generation**, **first-pass review**, and **migrations** under a shared `AGENTS.md`.
- **Adds…
