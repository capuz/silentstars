---
repo: "thefullctx/inkling-2-mini-sglang-dgx-spark"
name: "inkling-2-mini-sglang-dgx-spark"
description: "Inkling-2-Mini (NVFP4/MXFP8 + DSpark) on a single NVIDIA DGX Spark with SGLang — Docker Compose, sparkrun, systemd & benchmarks"
readmeQualityOk: true
url: "https://github.com/thefullctx/inkling-2-mini-sglang-dgx-spark"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-21T02:22:04Z"
lastCommitAt: "2026-11-24T14:05:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 13
maintainers: ["thefullctx"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca223af2d6f70b616365d82067a65e014d54275a35cb3b944349036ee083fcc7/thefullctx/inkling-2-mini-sglang-dgx-spark"
---

# Inkling-2-Mini on a Single NVIDIA DGX Spark (SGLang + DSpark + INT8 Draft + Verify Cap)

Tuned, lightweight single-node recipe for running **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** natively in **NVFP4 / MXFP8** with **DSpark speculative decoding** and **4 small read-only Python/Triton overlays** (zero C++/CUDA compilation) on a **single NVIDIA DGX Spark** using **SGLang**.

> **Highlights vs. Stock SGLang (1× DGX Spark, zero target weight quantization):**
> * **`c=1` short decode:** `45.2` → **50.4 tok/s** (`temp=0`, +11.4%) | **53.9 tok/s** (`temp=0.6`, +8.8% — beats stock vLLM!)
> * **15.6K long-context decode:** `40.0` → **51.4 tok/s (+28.6%)**
> * **15.6K warm prefix TTFT:** `0.27s` → **0.156s (156 ms, -42%)**
> * **`c=4` concurrent aggregate:** `87.6` → **101.8 tok/s (+16.2%)** *(104.0 tok/s with `VERIFY_CAP=4`)*
> * **Unified RAM headroom:** **~71.1 GiB used / ~50.5 GiB free** on 121.6 GiB Spark
> * **Accuracy:** Target weights & distribution unchanged (no lossy target quantization), reasoning + tools + vision all pass ✅.
>
> Looking for our vLLM recipe?
