---
repo: "tenstorrent/tt-model-manager"
name: "tt-model-manager"
description: "Publish and pull precompiled tt-metal kernel caches over Hugging Face Hub for Tenstorrent accelerators"
readmeQualityOk: true
url: "https://github.com/tenstorrent/tt-model-manager"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-accelerator", "huggingface", "kernel-cache", "machine-learning", "package-manager", "python", "tenstorrent", "tt-metal", "ttnn"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 31
recentReleases: 0
createdAt: "2026-06-22T16:08:08Z"
lastCommitAt: "2026-08-28T14:37:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 55
maintainers: ["ezietlowTT", "tsingletaryTT", "anirudTT"]
openGraphImageUrl: "https://opengraph.githubassets.com/90962bd58562211691bb5d5afc9f4fcfa40b7b6a05590ffa4a362b324af9ef00/tenstorrent/tt-model-manager"
---

# tt-model

> ⚠️ **Experimental — no support, no guarantees.** tt-model is an early, experimental
> project. Nothing here is officially supported, and we make no claim of correctness,
> stability, or fitness for any purpose. APIs, the bundle format, and behavior may change
> or break at any time without notice. Use it at your own risk.

`tt-model` publishes and pulls **self-contained model bundles** over the Hugging Face Hub and
serves them on Tenstorrent hardware through the **Tenstorrent vLLM plugin**
([`tenstorrent/vllm-tt-plugin`](https://github.com/tenstorrent/vllm-tt-plugin) — stock upstream
vLLM built `VLLM_TARGET_DEVICE=empty`), an OpenAI-compatible server. Every bundle carries or
builds its **own per-model venv**, so the box needs only a TT card + firmware (plus SFPI, an
externally-managed box dependency). One command pulls a bundle and brings the server up:

```bash
tt-model serve <namespace>/<model>     # install if needed, then launch the OpenAI server
```

## Bundles

A bundle is a self-contained HF **model** repo: it ships (or pins) the whole serving stack and
builds it into a fresh, per-model venv on the consumer. Weights are **never embedded** — only
referenced by…
