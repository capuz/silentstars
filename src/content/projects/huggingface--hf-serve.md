---
repo: "huggingface/hf-serve"
name: "hf-serve"
description: "Experimental Hugging Face API for Transformers, Diffusers and Sentence Transformers, written in Python."
readmeQualityOk: true
url: "https://github.com/huggingface/hf-serve"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2025-02-17T09:43:24Z"
lastCommitAt: "2026-09-08T08:15:59Z"
lastReleaseAt: "2025-12-23T17:08:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["alvarobartt", "juanjucm", "ehcalabres"]
openGraphImageUrl: "https://opengraph.githubassets.com/92f37ce3c08699a1ed358c5fee3436e566e7692e1adef04f0fd7774d0a800d0a/huggingface/hf-serve"
---

# `hf-serve`

> [!WARNING]
> This project is still experimental, meant to replace the former
> [`huggingface-inference-toolkit`](https://github.com/huggingface/huggingface-inference-toolkit).

## Installation

First you need to setup your environment with [`uv`](https://github.com/astral-sh/uv) (or with your preferred Python environment manager).

```bash
uv venv --python 3.12
source .venv/bin/activate
```

> [!NOTE]
> Due to the need of `--preview-features extra-build-dependencies` to install
> [`flash-attn`](https://github.com/Dao-AILab/flash-attention) with `uv` without
> compiling it, but rather relying on the pre-built binaries, you need to use
> `uv` v0.8.13 (or higher, but beware on major updates since the feature is
> still experimental, so < v0.9.0 is recommended until stable).
>
> Reference: https://docs.astral.sh/uv/concepts/projects/config/#augmenting-build-dependencies
>
> To update `uv` once installed if `uv version` is lower than v0.8.13, simply
> `uv self update`.

Install it from the `uv.lock` file for CPU / MPS as follows:

```bash
uv sync --active --frozen --extra cpu
```

Alternatively, install it on NVIDIA CUDA 12.6 as follows:

```bash
uv sync --active…
