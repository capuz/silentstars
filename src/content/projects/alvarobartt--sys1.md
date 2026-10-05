---
repo: "alvarobartt/sys1"
name: "sys1"
description: "Blazing fast, self-hosted structured decisions for open-weight models with a TypeSafe AI compatible API, written in Rust."
readmeQualityOk: true
url: "https://github.com/alvarobartt/sys1"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["decision-model", "huggingface", "jev", "jev-api", "laya", "inference-server", "self-hosted", "systemone", "decisions-api"]
stars: 48
forks: 2
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-22T08:38:01Z"
lastCommitAt: "2026-10-05T10:46:32Z"
lastReleaseAt: "2026-09-25T17:41:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 33
maintainers: ["alvarobartt", "juanjucm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1381133707/f2c93491-5315-4d14-9f11-0d47c41fdde8"
---

<img
    src="https://github.com/user-attachments/assets/8b2774a7-6439-422e-bbd3-3fdd85117c5d"
    alt="sys1"
    width="1200"
  />
    Blazing fast structured decisions for System One open-models self-hosted with a TypeSafe AI compatible API, written in Rust.

## Features

- `tokio`, `axum` and `serde`, the usual suspects
- System One compatible API Spec
- `candle` with [`tokenizers` release candidate](https://huggingface.co/blog/tokenizers-v1)!
- Dynamic, token-based batching
- SDPA on CPU, Metal, and CUDA
- Flash Attention on Ampere, Ada Lovelace, and Hopper
- Blazing fast inference for Laya

## Get started

Install it with support for CPU, Metal or CUDA.

```bash
cargo install sys1 --features cpu
# cargo install sys1 --no-default-features --features metal
# cargo install sys1 --no-default-features --features cuda
# cargo install sys1 --no-default-features --features cuda,flash-attn-2 # Ampere, Ada Lovelace, or Hopper
# cargo install sys1 --no-default-features --features cuda,flash-attn-3 # Hopper
```

Then run it with any of the supported models (more coming soon!).

- [`convaiinnovations/laya`](https://huggingface.co/convaiinnovations/laya) for English text, guardrails, email…
