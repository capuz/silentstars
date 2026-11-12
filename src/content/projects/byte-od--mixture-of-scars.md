---
repo: "byte-od/mixture-of-scars"
name: "mixture-of-scars"
description: "Breaking the barrier between LLMs and hardware. Mixture of Scars (MoS) static weight compression & SCache O(1) constant KV-cache replacement."
readmeQualityOk: true
url: "https://github.com/byte-od/mixture-of-scars"
homepage: "https://github.com/byte-od/mixture-of-scars"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [75, 23]
topics: ["apple-silicon", "artificial-intelligence", "deep-learning", "edge-ai", "fast-weights", "huggingface", "inference", "kv-cache", "llm", "machine-learning"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-11-08T04:58:10Z"
lastCommitAt: "2026-11-12T05:40:49Z"
lastReleaseAt: "2026-11-12T05:40:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["byte-od"]
openGraphImageUrl: "https://opengraph.githubassets.com/19bcabcad6768dfd20dcb6dd39d75452f91779cedae9d118423ef52e9ce815aa/byte-od/mixture-of-scars"
---

# Mixture of Scars (MoS) & SCache: Breaking the Barrier Between LLMs and Hardware

> **"Breaking the barrier between LLMs and hardware."**  
> Modern Large Language Models have been crippled by a Dual Memory Wall: static weight bloat ($O(N)$) and linear context explosion ($O(L)$).  
> **Mixture of Scars (MoS)** and **SCache** provide the architectural breakthrough to eliminate both bottlenecks simultaneously:
> 1. **Mixture of Scars (MoS):** Radical static weight ($W_0$) compression (`135.43 GiB → 38.12 GiB` standalone at `72.71B`, and `27.59x` / `-96.37%` across an 8-specialist bank) via symmetric `INT4` bases, Activation-Aware SVD (`ASVD`) low-rank scar experts, and `20 × 4`-layer streaming shards (`1.79 GiB`/shard).
> 2. **SCache ($O(1)$ Dynamic Context):** Drop-in HuggingFace KV-cache replacement that freezes memory into a constant physical window backed by Widrow-Hoff associative fast-weights (`0.00 B` growth at any sequence length).

### 📄 Official Preprint (`v1.2.0`), Public `72.71B` Shards & Interactive Red-Team Lab
- **Permanent Preprint (CERN / Zenodo DOI):** [`10.5281/zenodo.24143839`](https://doi.org/10.5281/zenodo.24143839) ([**Preprint v1.2 PDF — 0.5B → 7.62B →…
