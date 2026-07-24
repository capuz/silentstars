---
repo: "yuting0624/antigravity-for-claude-code"
name: "antigravity-for-claude-code"
description: "Claude Code plugin: run the Antigravity CLI (Gemini) as a collaborating sub-agent with intelligent model routing across the SDLC. Community project; not affiliated with Google/Anthropic."
readmeQualityOk: true
url: "https://github.com/yuting0624/antigravity-for-claude-code"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["agy-cli", "antigravity-cli", "claude-code", "claude-code-plugin", "delegate", "gemini", "gemini-cli", "orchestration", "subagent-delegation"]
stars: 203
forks: 19
openIssues: 4
closedIssues: 6
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2026-06-19T01:13:25Z"
lastCommitAt: "2026-07-24T06:08:47Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 90
undervaluedScore: 23
maintainers: ["yuting0624", "Masterisk-F"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3fbf96eb6d8347731c68d8e235a1aada72b6532414f48a780d24177113d8f79/yuting0624/antigravity-for-claude-code"
---

# 🛰️ Antigravity for Claude Code

**Run the Antigravity CLI (Gemini) as a collaborating sub-agent, right inside Claude Code.**

Claude conducts the judgement; Gemini does the heavy lifting — intelligent model routing across the SDLC.

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
- **Adds tools Claude lacks natively** — live **Google/web search**, **Vertex AI Search** over your internal data, deep…
