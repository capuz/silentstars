---
repo: "eric-cielo/moflo"
name: "moflo"
description: "MoFlo — an opinionated, local-first AI agent orchestration toolkit for Claude Code: semantic memory, learned routing, gates, and spells. No API keys, no cloud, works out of the box."
readmeQualityOk: true
url: "https://github.com/eric-cielo/moflo"
homepage: "https://cielolimitada.com/moflo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["claude-code", "developer-tools", "agent-orchestration", "ai-agents", "anthropic", "claude", "cli", "local-first", "mcp", "model-context-protocol"]
stars: 17
forks: 1
openIssues: 8
closedIssues: 685
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2026-01-31T14:10:35Z"
lastCommitAt: "2026-08-07T05:15:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["eric-cielo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9700da2687257af566645052844f75a1097e94b1ced1a6dcd69178af8108c399/eric-cielo/moflo"
discussionCount: 1
---

</p>

# MoFlo

**A standalone, opinionated AI agent orchestration toolkit for Claude Code, optimized for local development.**

**[Website](https://cielolimitada.com/moflo)** · [npm](https://www.npmjs.com/package/moflo) · [GitHub](https://github.com/eric-cielo/moflo)

## TL;DR

MoFlo makes Claude Code remember what it learns, check what it knows before exploring files, and get smarter over time — all automatically. Install it, run `flo init`, restart Claude Code, and everything just works: your docs and code are indexed on session start so Claude can search them instantly, gates prevent Claude from wasting tokens on blind exploration, task outcomes feed back into routing so it picks the right agent type next time, and context depletion warnings tell you when to start a fresh session. No configuration, no API keys, no cloud services — it all runs locally on your machine.

## Quickstart

```bash
npm install --save-dev moflo
flo init
```

Restart Claude Code. That's it — memory, indexing, gates, and routing are all active.

Or — just ask Claude to install MoFlo into your project and initialize it!

To verify everything is running, run the **`/healer`** skill inside Claude Code (or…
