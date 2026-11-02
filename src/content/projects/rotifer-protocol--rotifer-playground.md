---
repo: "rotifer-protocol/rotifer-playground"
name: "rotifer-playground"
description: "Local dev environment — Rust core + TypeScript CLI for gene development & Arena competition"
readmeQualityOk: true
url: "https://github.com/rotifer-protocol/rotifer-playground"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [60, 22]
topics: ["dsh-plugin"]
stars: 6
forks: 1
openIssues: 11
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-22T09:56:17Z"
lastCommitAt: "2026-11-02T15:17:07Z"
lastReleaseAt: "2026-08-15T01:32:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 65
maintainers: ["xiaoba-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/015dc15af7c503b3387944faeae7a31f91b87b4e92cd2c9265b09542fa3b83ad/rotifer-protocol/rotifer-playground"
---

# Rotifer Playground

Development environment for the **Rotifer Protocol** — **WASM-Native, Polyglot by Design**: build genes in TypeScript / Rust / AssemblyScript / Go / C, compete in Arenas, share via Cloud, and simulate agent evolution.

> **Status:** v0.33.x — Agents now have memory (spec §38). It belongs to the agent, not to any gene, so it survives the genome changing. `rotifer agent create --memory-quota <size>` sets an agent's quota (default 10MB); over quota, CACHE, then PATTERN, then CONTEXT entries are evicted oldest first, and PREFERENCE entries never are. Memory is stored in the project's `.rotifer/playground.db`, every change is logged to `.rotifer/audit.jsonl`, and `rotifer agent memory list` / `delete` show and clear it without printing values. In `agent run`, Node-path genes get it as `ctx.memory` (SDK: `@rotifer/playground/memory`) and compiled genes through the `rotifer.readMemory` / `writeMemory` / `queryMemory` / `deleteMemory` host functions; TypeScript compiled to WASM with Javy cannot reach those host functions yet. A gene sees only the entries its access scope allows (same domain by default), and an entry's `maxRetentionDays` is enforced. The Cloud schema…
