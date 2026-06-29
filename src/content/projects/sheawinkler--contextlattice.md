---
repo: "sheawinkler/ContextLattice"
name: "ContextLattice"
description: "ContextLattice is the local-first control plane for long-horizon agent memory, coordination, and behavioral provenance. "
url: "https://github.com/sheawinkler/ContextLattice"
homepage: "https://contextlattice.io"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [46, 28]
topics: ["agent-framework", "agent-orchestration", "ai-infra", "context-engineering", "context-management", "long-horizon-agents", "long-horizon-intelligence", "ai-interface", "golang", "rust"]
stars: 121
forks: 8
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-02-19T10:54:58Z"
lastCommitAt: "2026-06-29T07:22:55Z"
lastReleaseAt: "2026-03-22T20:12:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 29
maintainers: ["sheawinkler"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c1aaebc98d60cd39633452938ad75995aae428963c8c1c18de6b5ce7ac295c/sheawinkler/ContextLattice"
fundingLinks: ["GITHUB:https://github.com/sheawinkler", "CUSTOM:https://www.paypal.me/SheaWinkler37"]
---

# ContextLattice

  </a>
</p>

  Private-by-default memory and context orchestration for AI agents.
</p>

</p>

## What ContextLattice Does

ContextLattice provides a single memory contract for agentic systems:

- Unified write/read contract for memory and context.
- Durable fanout across retrieval/storage lanes.
- Staged retrieval (fast now, deep continuation when needed).
- Agent sessions that turn prior work, objective lineage, graph touches, skills, checkpoints, and handoffs into prompt-ready packages and exportable run cards.
- Go/Rust runtime ownership for the active application path.
- Legacy Python runtime archived under `archive/services/orchestrator_legacy_python` for tooling/test compatibility only.
- Local-first deployment with optional hosted surfaces.

## Current Public Baseline

`v3.4.2` is the public agent runtime contract baseline: universal adapter lifecycle, native agent sessions, objective runtime state, scoped recall, checkpoints, handoffs, completion flow, runtime telemetry, one-command runtime proof, storage-governance hardening, and local session-store diagnostics behind one local contract.

`v4` remains the private tuning lane for experiments that still…
