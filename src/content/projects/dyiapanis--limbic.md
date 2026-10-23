---
repo: "dyiapanis/limbic"
name: "limbic"
description: "Self-organising memory system for Hermes Agent — SQLite-backed, adaptive trust, organic atrophy, user-scoped"
readmeQualityOk: true
url: "https://github.com/dyiapanis/limbic"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-06T23:58:33Z"
lastCommitAt: "2026-10-23T12:04:37Z"
lastReleaseAt: "2026-10-23T06:21:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 54
maintainers: ["dyiapanis"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30c9fb6c19f0da1de3d607d42b8981feabb39308e25bc78528b1feb5ac4eb58/dyiapanis/limbic"
---

Self-Organising Memory for AI Agents

**Version 0.11.0**
Author: D Yiapanis · License: PolyForm Noncommercial 1.0.0 (source-available; commercial use requires a separate license)

Limbic is a self-organising local memory system for AI agents. It stores facts, learns which ones matter through interaction, and surfaces the right context at the right time — without ever calling an LLM. Designed for [Hermes Agent](https://hermes-agent.nousresearch.com) and implements the upstream `MemoryProvider` ABC.

---

## How It Works

Limbic is inspired by the brain's limbic system:

- **Hippocampus** (encoding) — `remember()` embeds, checks interference, and stores
- **Amygdala** (salience) — trust scoring, self-tunes from use
- **Thalamus** (retrieval) — `recall()` searches and gates by relevance
- **Atrophy** — unused memories fade and are removed

The agent sees two tools (`remember`, `recall`). The operator sees one file (`limbic.db`). Everything inside is self-organising.

**What it does:**
- New memories start quiet and become easier to recall the more they're used
- Similar memories compete — newer ones supersede older ones, older ones can block similar new ones
- Novel facts get a trust…
