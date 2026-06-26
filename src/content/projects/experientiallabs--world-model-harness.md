---
repo: "experientiallabs/world-model-harness"
name: "world-model-harness"
description: "World-model-as-a-harness for simulating AI agent environments"
url: "https://github.com/experientiallabs/world-model-harness"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T22:40:57Z"
lastCommitAt: "2026-06-26T23:42:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 18
maintainers: ["SilenNaihin"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fc917fe8699912bda8c1f7ca627ebece5a669ddac8981abd76c94ed284e804d/experientiallabs/world-model-harness"
---

# World Model Harness

> **Docker as an LLM.** Stop running your evals in sandboxes — simulate your environment without running it.

A frontier LLM (Opus 4.8 / GPT 5.5) acts as the *environment* your agent steps against,
reconstructed from your own OpenTelemetry traces. No sandbox, no live services, no flaky resets.

Inspired by **Qwen-AgentWorld** (LLM-as-environment), **GEPA** (reflective prompt evolution), and
**DreamGym** (retrieval over a trace replay buffer) — but with **zero training**: we get there with
prompt optimization on a frontier model. See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for how
the pieces fit (and where to plug in a new provider, adapter, or embedder).

## How it works

1. **Build** from your agent's OTel traces (file export or vendor SDK): ingest → normalize → split
   train/held-out → index a replay buffer → evolve the env prompt with GEPA against the held-out split.
2. **Serve**: agents call `WorldModel.step(action)` (in-process or via the local HTTP backend). Each
   step retrieves the most similar past `(state, action) → observation` examples and predicts the
   next observation.

## Quickstart

```bash
uv sync
wmh providers verify…
