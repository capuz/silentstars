---
repo: "jacobhausler/hermes-workflows"
name: "hermes-workflows"
description: "Agent-owned workflow graphs for Hermes Agent: nodes, fan-outs, gates, fingerprint-resume, desktop DAG view"
readmeQualityOk: true
url: "https://github.com/jacobhausler/hermes-workflows"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 7
forks: 6
openIssues: 18
closedIssues: 100
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-09-25T01:20:06Z"
lastCommitAt: "2026-11-17T14:33:53Z"
lastReleaseAt: "2026-10-12T11:07:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 72
maintainers: ["jacobhausler", "atbrace", "atbrace-hermes"]
openGraphImageUrl: "https://opengraph.githubassets.com/87b9ea22ac740fe2de6be7b1d9e0ad46b985ac9ddc245e5d1348a85f234494c4/jacobhausler/hermes-workflows"
---

# Hermes Workflows

**Agent-owned workflow graphs for [Hermes Agent](https://github.com/NousResearch/hermes-agent).**
Your agent authors a JSON graph of agent nodes, fan-outs and gates; a background
runner executes it outside the caller process tree and hands results back through
the same `workflow` tool it launched from. Hermes Desktop draws the live DAG.

Four production diagrams, glossed two lines each:
[docs/showcase.md](https://github.com/jacobhausler/hermes-workflows/blob/HEAD/docs/showcase.md).

## Why this exists

A single agent turn is one long, fragile thread of work: one context, one
timeout, no resumable checkpoints. A **graph** splits the job into nodes with
explicit dependencies — parallel recon lanes, a synthesis join, an adversarial
review gate — each node a separate child session with its own model, budget, and
typed failure. When something dies or you change your mind mid-flight, only the
affected nodes re-run: completed work is replayed from its stored fingerprint,
not re-paid.

## What you get

| Capability | In one line |
|---|---|
| **Graph runs** | Agent nodes with `goal`, `after` edges, per-node `model`/`provider`/`reasoning`, and…
