---
repo: "brianreborn/familia"
name: "familia"
description: "Topology coordinator for local LLM agents on machines you own. Declarative multi-host graph, pinned runtimes, measured model/hardware registry — your models and data stay local."
readmeQualityOk: true
url: "https://github.com/brianreborn/familia"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 110
closedIssues: 66
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-06T19:30:57Z"
lastCommitAt: "2026-10-31T19:00:51Z"
lastReleaseAt: "2026-10-10T18:03:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 85
undervaluedScore: 46
maintainers: ["brianreborn"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f6b8bea3b0613ae0869cb422fb0d754e91a00a36ab83dddaee73106c3dc350d/brianreborn/familia"
---

# familia

**Federated Agents Mesh for Intelligent Local Interoperable Autonomy** · *Federación de Agentes Multi-Inteligentes Locales Interoperables Autónomos*

Your models and data stay on your machines. A file, context, or result moves across a boundary only when you tell it to.

familia is a **topology coordinator**. It doesn't replace your inference server or your agents. It pins them, checks them out side by side, and wires them into one graph you control: llama.cpp model servers, the green-roomz alias gateway, the green-agentz fleet, and agents such as hermes-agent, across the machines you own.

> **Headline model: LFM3-1.7B-Uncensored** ([AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF), base LiquidAI LFM3-1.7B, 256k context, tool calling). It is the default on every platform: one 1.13 GB file served as both `general` and `coder`. No safety tuning; you are responsible for its output. License `lfm1.0`: commercial use only for organisations under US$10M annual revenue. Want to iterate on it? Swap quants or sampling in…
