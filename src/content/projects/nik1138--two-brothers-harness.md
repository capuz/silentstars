---
repo: "nik1138/two-brothers-harness"
name: "two-brothers-harness"
description: "TypeScript harness for cooperation between two AI agents — a senior (older brother) and a junior (younger brother)"
readmeQualityOk: true
url: "https://github.com/nik1138/two-brothers-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai-agents", "cli", "llm", "mcp", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-30T19:59:33Z"
lastCommitAt: "2026-11-12T11:41:35Z"
lastReleaseAt: "2026-11-08T21:02:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["nik1138"]
openGraphImageUrl: "https://opengraph.githubassets.com/21ab36250d4370f9f1611d49943c8ed64942450080335753b4a4bbc43184b719/nik1138/two-brothers-harness"
---

# Two Brothers

A harness for cooperation between two agents: a **senior** (the older brother —
experienced, level-headed, the arbiter) and a **junior** (the younger brother —
brave, determined, the challenger). Both work with **one shared context**, have
**different system prompts**, and exchange **structured protocol messages**: the
senior consults the junior, may delegate part of the work to it, reviews what
comes back, and makes the final decision. This is not subagents in the usual
sense — it is parallel models with explicit roles advising each other as peers
within a single context.

The implementation is the TypeScript package in
[`packages/harness/`](https://github.com/nik1138/two-brothers-harness/blob/HEAD/packages/harness/) (`@two-brothers/harness`, written in
the style of pi / deepseek-harness). **v0.0.1 is published on npm**;
`npm install -g @two-brothers/harness` gives the global `two-brothers`
command (see [Install](#install)). You can also build from a checkout with
the [Quickstart](https://github.com/nik1138/two-brothers-harness/blob/HEAD/docs/quickstart.md) — offline in a couple of minutes, no API
key. The full flag, environment-variable, and endpoint reference is…
