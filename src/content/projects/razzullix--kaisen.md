---
repo: "RAZZULLIX/KAISEN"
name: "KAISEN"
description: "◸△◹"
readmeQualityOk: true
url: "https://github.com/RAZZULLIX/KAISEN"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T21:34:45Z"
lastCommitAt: "2026-09-10T08:20:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 50
maintainers: ["RAZZULLIX"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2878ccc40ae4a670954aac53e14d1bf7a407a70e2a376d2ed13bcea5034b3bd/RAZZULLIX/KAISEN"
---

# KAISEN

改善 AI システム — **squeeze every bit out of every watt.**

An agentic AI coding harness: describe your program in words, and a swarm of
local (or frontier) models evolves it through a guarded pipeline —
build → verify → score — while you watch every generation live.

**📖 Complete reference for humans and AI agents:
[`MANUAL.md`](https://github.com/RAZZULLIX/KAISEN/blob/HEAD/MANUAL.md)** — every panel, every command, the spec
reference, routing, safety, and the full config. For the LLM-facing
protocol specifically: [`docs/KAI.md`](https://github.com/RAZZULLIX/KAISEN/blob/HEAD/docs/KAI.md). Model
compatibility matrix: [`docs/MODELS.md`](https://github.com/RAZZULLIX/KAISEN/blob/HEAD/docs/MODELS.md). Release
history: [`CHANGELOG.md`](https://github.com/RAZZULLIX/KAISEN/blob/HEAD/CHANGELOG.md).

## The flow

1. **First run** — a setup wizard connects your model (local llama.cpp
   endpoint or any OpenAI-compatible API) and creates a project: one-click
   demo, AI agent setup (paste code + goal in words), or manual.
2. **The pipeline canvas** — node-editor-style connected nodes. Each node is
   an inline **python or shell script** (or a harness file) with args,
   timeouts, and…
