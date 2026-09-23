---
repo: "ranxianglei/acp-kernel"
name: "acp-kernel"
description: "压缩内核ACP compression & state management engine — standalone,  zero runtime dependencies"
readmeQualityOk: true
url: "https://github.com/ranxianglei/acp-kernel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 29
forks: 8
openIssues: 42
closedIssues: 58
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-31T06:03:38Z"
lastCommitAt: "2026-09-23T08:47:27Z"
lastReleaseAt: "2026-08-02T06:55:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 45
maintainers: ["ranxianglei", "bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9449c8e723abe3f9b1eff1ada07dfdd9138a4f86448de5ad73fa230d319395/ranxianglei/acp-kernel"
discussionCount: 1
---

# acp-kernel

Framework-agnostic, model-driven context-compression engine. Pure TypeScript core with **zero host dependency** — like a zip library, it does not assume any agent, server, or UI exists.

## What this is

`acp-kernel` is a **host-agnostic, model-driven context-compression engine**: 3-tier LSM-tree context compression, growth-based nudge policy, protected-content filtering. Its compression algorithms and pipeline architecture (`PipelineNode` / `processTurn` / `CompressionCore`) are **original work by the ACP authors** — an independent reimplementation, not a port of any existing codebase.

The key design principle: **the model writes the summaries; this library orchestrates everything around them.** The core decides *when* to compress, *what range* to compress, tracks *state* (blocks, message-id mapping, tiers), applies a compress *decision*, prunes compressed ranges, and supports decompress/search. It never calls a model.

## Why a separate library

- **Decoupling**: the original plugin is tightly coupled to OpenCode's hook system, making the algorithm hard to test and reuse.
- **Multi-host**: one core, multiple thin adapters (OpenCode, Pi, or any agent).
- **License…
