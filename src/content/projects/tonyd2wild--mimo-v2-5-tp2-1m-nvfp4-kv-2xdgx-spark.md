---
repo: "tonyd2wild/MiMo-V2.5-TP2-1M-NVFP4-KV-2xDGX-Spark"
name: "MiMo-V2.5-TP2-1M-NVFP4-KV-2xDGX-Spark"
description: "MiMo-V2.5 Omni TP=2 on 2x DGX Spark · 1M context · NVFP4 4-bit KV (~1.01M-token pool, ~30 tok/s) · 69-eval: thinking-OFF 97.8 beats thinking-ON 90.6 for tool/agent work"
url: "https://github.com/tonyd2wild/MiMo-V2.5-TP2-1M-NVFP4-KV-2xDGX-Spark"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [51, 49]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T06:48:48Z"
lastCommitAt: "2026-06-23T23:17:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 21
maintainers: ["tonyd2wild"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a2915698be49cad18b9e8c36da1dda4b5a449f4ac859c2aefb7f9c8dc701ac/tonyd2wild/MiMo-V2.5-TP2-1M-NVFP4-KV-2xDGX-Spark"
---

# MiMo-V2.5 Omni · TP=2 · **1M context** · NVFP4 KV on 2× DGX Spark

Running [`lukealonso/MiMo-V2.5-NVFP4`](https://huggingface.co/lukealonso/MiMo-V2.5-NVFP4) (Omni: text + image + video + audio) tensor-parallel across **two NVIDIA DGX Spark (GB10)** boxes, with **4-bit `nvfp4` KV cache** + MTP speculative decoding — serving a **1,000,000-token** context with a **~1.97M-token KV pool**.

This is the **2-node** sibling of the 3-node build ([MiMo-V2.5-TP3-NVFP4-KV-3xDGX-Spark](https://github.com/tonyd2wild/MiMo-V2.5-TP3-NVFP4-KV-3xDGX-Spark)). Two Sparks instead of three — so it pairs cleanly with another 2-node model on the same fleet (e.g. DeepSeek-V4 TP=2 on the other pair).

> ⚠️ **This repo is the launch config + env + the patch mods — but it runs on top of a specific patched vLLM dev build, not stock vLLM.** The 6 required mods are now **vendored in [`recipe/mods/`](recipe/mods)** (apply them with [`recipe/apply-mods.sh`](recipe/apply-mods.sh) — see [Runtime stack used](#runtime-stack-used)). Stock `pip install vllm` will still **reject NVFP4 KV or OOM** — the mods patch a vLLM dev build (`0.21.1rc1.dev85+gd87ee1893`), they are not a stock-vLLM plugin. The `nvfp4` KV path…
