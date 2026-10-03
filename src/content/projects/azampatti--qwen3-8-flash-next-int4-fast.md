---
repo: "azampatti/Qwen3.8-Flash-Next-Int4-FAST"
name: "Qwen3.8-Flash-Next-Int4-FAST"
description: "Recipe for the fastest 4bit qwen3.8FlashNext"
readmeQualityOk: true
url: "https://github.com/azampatti/Qwen3.8-Flash-Next-Int4-FAST"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [61, 37]
stars: 45
forks: 6
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-09-08T17:24:37Z"
lastCommitAt: "2026-10-03T22:05:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 19
maintainers: ["azampatti"]
openGraphImageUrl: "https://opengraph.githubassets.com/95e0ec582e548076ed37d6b9040f3ed784d7fd44b1ecd5122fd2a9e6b7b6e2a2/azampatti/Qwen3.8-Flash-Next-Int4-FAST"
---

# Qwen3.8-Flash-Next 125B-A5B INT4-AR

Qwen3.8-Flash-Next, quantized to int4 and cut to **5 routed experts per token instead of 10**, then healed
so it behaves as close to the original as we could get. It runs on **one DGX Spark (GB10, 128 GB)** at
about 70-75 tokens/s. 125B parameters in total, **4.8B active per token** (the original activates 6B).

## What you need

- A DGX Spark or another GB10 box, 128 GB unified memory
- Docker with the NVIDIA container toolkit
- About 130 GB of free disk. The model goes into the standard Hugging Face cache, so other tools share it
- **Recommended:** [Eugr's spark-vllm-docker](https://github.com/eugr/spark-vllm-docker), for the faster b12x serving stack:

  ```bash
  git clone https://github.com/eugr/spark-vllm-docker ~/spark-vllm-docker
  ```

  With it, setup pulls Eugr's b12x image (pinned to the build this model was validated on) and skips building
  ours: about 75 tok/s instead of 70, and no 20-40 minute compile. Without it, everything still works on our own image.

## Get it running

```bash
git clone https://github.com/azampatti/Qwen3.8-Flash-Next-Int4-FAST.git
cd Qwen3.8-Flash-Next-Int4-FAST
./setup.sh        # gets the image,…
