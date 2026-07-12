---
repo: "sherman-yang/nvidia-model-info"
name: "nvidia-model-info"
description: "Local dashboard for NVIDIA build.nvidia.com models with sortable metadata, model-card specs, live probes, and tool-calling detection."
readmeQualityOk: true
url: "https://github.com/sherman-yang/nvidia-model-info"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["dashboard", "express", "llm", "model-catalog", "nim", "nodejs", "nvidia", "tool-calling", "ai-dashboard", "llm-dashboard"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-05T15:50:06Z"
lastCommitAt: "2026-07-12T06:17:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 28
maintainers: ["sherman-yang"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8555056cd11f9afb07c56e0705db92e949986b5f49ea94761089bf7abe18837/sherman-yang/nvidia-model-info"
---

# NVIDIA Model Info Dashboard

A local web dashboard for browsing the free NVIDIA models listed on
[build.nvidia.com](https://build.nvidia.com), with sortable metadata, model-card
specs, live API probes, tool-calling detection, and copyable cURL examples.

The app is built for repeated model comparison work: dense table layout,
default `agent` filtering, pinned high-value columns, explicit rate limiting,
and refresh behavior that rebuilds local model-card data from NVIDIA sources.

## What It Shows

- Active and usable NVIDIA model IDs from `/v1/models`
- Flattened model metadata as sortable and searchable table columns
- Publisher labels from model cards, such as `agentic`, `coding`, `MoE`, and `Tool Use`
- Publisher-stated `Context (Card)` from `model_specs.json`
- Live-probed `Context (Deployed)` — the context window the hosted endpoint
  actually enforces, parsed from its own validation errors (it can be smaller
  than the model card claims)
- Live probe results for availability, latency, max output semantics, tool
  support, and how reasoning output is exposed
- Optional capability probes per model: structured output
  (`response_format` json_schema and `nvext.guided_json`),…
