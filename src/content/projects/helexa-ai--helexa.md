---
repo: "helexa-ai/helexa"
name: "helexa"
description: "helexa — self-hosted LLM serving stack (cortex control plane + neuron GPU harness). Read-only mirror of https://git.lair.cafe/helexa/helexa"
url: "https://github.com/helexa-ai/helexa"
homepage: "https://helexa.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T08:01:07Z"
lastCommitAt: "2026-07-03T12:39:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["grenade"]
openGraphImageUrl: "https://opengraph.githubassets.com/762b15301fefcf364d73eb564a9ae967a48d9f21e78f30091f834be4c369d73c/helexa-ai/helexa"
---

# helexa

**Near-frontier AI for mortals.**

helexa is a self-hosted LLM serving stack, written in Rust, for people
who run open-weight models on their own consumer GPUs. It has two
components:

- **cortex** — the per-operator control plane and LLM proxy. It sits in
  front of your GPU fleet and presents a unified OpenAI + Anthropic
  compatible API surface, handling model routing, lifecycle management
  (load / unload / evict), request translation, and metrics.
- **neuron** — the per-host LLM harness. One instance runs on every GPU
  host, serving candle-based in-process inference and managing local
  hardware discovery and model lifecycle.

## Why

Two principles constrain everything in this repository:

1. **Frontier or close to it.** helexa serves the open-weight models
   that get nearest to frontier capability — not every architecture
   ever published.
2. **Consumer hardware.** Everything must run on the cards mortals can
   actually buy: a 3060 here, a 4090 there, a 5090 if you got lucky.
   Mixed VRAM tiers across mismatched boxes are the expected topology,
   not a degraded case.

GPU acquisition is harder than it was a year ago, and the gap between
what cloud providers…
