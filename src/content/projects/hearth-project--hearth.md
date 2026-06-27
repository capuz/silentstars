---
repo: "hearth-project/hearth"
name: "hearth"
description: "Scale-to-zero LLM serving on Kubernetes without adopting a platform — one CRD + KEDA, vendor-neutral across NVIDIA & Ascend."
url: "https://github.com/hearth-project/hearth"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["ascend", "keda", "kubernetes", "llm-serving", "operator", "vllm", "inference", "scale-to-zero", "xinchuang"]
stars: 7
forks: 5
openIssues: 12
closedIssues: 15
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-29T15:07:55Z"
lastCommitAt: "2026-06-27T00:46:40Z"
lastReleaseAt: "2026-06-06T14:51:18Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 61
maintainers: ["kube-gopher", "wondr-wclabs", "Jah-yee"]
openGraphImageUrl: "https://opengraph.githubassets.com/29f935ccc14d376a37980c4516b6cac76d76fe8287d98fb981e1b219ee8248be/hearth-project/hearth"
discussionCount: 1
---

# 🔥 Hearth

**Scale-to-zero serving for open-source LLMs on Kubernetes — one CRD + KEDA, no platform to
adopt. Vendor-neutral across NVIDIA, Ascend, and more.**

[**Quickstart**](#quickstart) · [**Architecture**](docs/architecture.md) · [**Observability**](docs/observability.md) · [**Roadmap**](ROADMAP.md) · [**Contributing**](CONTRIBUTING.md)

</div>

Hearth is a small Kubernetes operator that turns "run Qwen / DeepSeek / GLM on my private cluster"
into a single `LLMService` manifest: declarative deploy, queue-driven autoscaling, and
**scale-to-zero** — with NVIDIA-vLLM / vLLM-Ascend (Cambricon planned) as **pluggable backends**
behind one API, and nothing else to adopt.

> **Status — `v0.1.0` (alpha).** The NVIDIA backend and the full scale-to-zero path
> (gateway + KEDA) are **implemented and verified end-to-end on real NVIDIA GPUs** — cold-start
> keepalive, graceful drain, model caching/prewarm, 1→N autoscaling, and observability. The
> **Ascend** backend is scaffolded and golden-tested (renders correct manifests) but **not yet
> validated on real NPUs** — the v1 milestone (pending hardware). Still `v1alpha1` and **not
> production-ready** (no auth, no multi-tenancy) — see…
