---
repo: "neilthomas89440-crypto/inferna-next"
name: "inferna-next"
description: "Self-hosted GPU cluster orchestration: deploy and serve AI models on your own hardware"
readmeQualityOk: true
url: "https://github.com/neilthomas89440-crypto/inferna-next"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 25]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T07:41:10Z"
lastCommitAt: "2026-08-23T04:08:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 25
maintainers: ["neilthomas89440-crypto"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d88f6032e6f9a188542801b5e2dcb24160f3ffacf0bbfa3b21c3af1328565b/neilthomas89440-crypto/inferna-next"
---

# Inferna Next

Self-hosted GPU cluster orchestration: deploy and serve open-source AI models on your own hardware with one click — a "Model-as-a-Service" for machines you control.

**Inferna Next** is a control plane for GPU clusters. A central server exposes a web UI and REST/gRPC APIs; lightweight worker agents run on each GPU host and manage inference engine containers (vLLM, SGLang). Deploy a model from a curated catalog, and the platform picks the worker, the GPU, the engine, and the tuning profile (low latency or high throughput) for you. Everything runs in Docker.

## Features

- **Central web UI** to manage multiple GPU clusters — on-prem or cloud
- **Model catalog** with one-click deploy (Qwen, Llama, Phi, DeepSeek, BGE, Whisper, Qwen2.5-VL)
- **Automatic engine selection** — vLLM and SGLang, tuned for latency or throughput profiles
- **Multi-vendor GPU support** — NVIDIA (NVML), AMD (ROCm), plus a mock mode for demos
- **Enterprise basics** — user auth (JWT), role-based access control, monitoring dashboards (Prometheus + Grafana)
- **Docker-first** — single `docker compose` command to run the whole stack

## Architecture

```
        ┌─────────────────────────────┐…
