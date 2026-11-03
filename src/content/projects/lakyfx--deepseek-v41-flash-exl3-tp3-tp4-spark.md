---
repo: "LakyFx/deepseek-v41-flash-exl3-tp3-tp4-spark"
name: "deepseek-v41-flash-exl3-tp3-tp4-spark"
description: "DeepSeek 1017 EXL3 on 3-4 DGX Sparks. TP4 4.0.4: 4,277 tok/s cold prefill; C16 code 331.7 / prose 287.5 native decode sum. Smart CUDA Graph, KV Cache and Adaptive Speculation controllers. C16/R48, 9M KV, 3.5 GiB checkpoints. TP3 1.2.8: up to +58% cold prefill. Exact recipes, source and benchmarks."
readmeQualityOk: true
url: "https://github.com/LakyFx/deepseek-v41-flash-exl3-tp3-tp4-spark"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["benchmarks", "deepseek", "dgx-spark", "exl3", "inference", "local-llm", "speculative-decoding", "tensorfold", "prefix-caching"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-09T17:53:15Z"
lastCommitAt: "2026-11-03T11:13:25Z"
lastReleaseAt: "2026-10-23T15:16:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["LakyFx"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa4202d832692356068b61de5827efbd64004c579314f010fae9ece8102520c/LakyFx/deepseek-v41-flash-exl3-tp3-tp4-spark"
---

# TensorFold TP4 4.0.4 - more kernel polish, smarter control

**Current production recipe: 4.0.4.** DeepSeek 1017, four DGX Sparks,
switchless TP4, mixed EXL3 **~3.51 bpw routed experts**.

**Smart CUDA Graph Controller · Smart KV Cache Controller · Smart Adaptive
Speculative Controller.** Selective kernel refinements inspired by
[ashhart/TensorFold](https://github.com/ashhart/TensorFold), efficient long
agent histories and improved compatibility/recovery complete this update.
Same balanced weights, **C16 / adaptive R48 / 9M KV / 3.5 GiB checkpoints**.

Cold 64K prefill: **4,277 tok/s median**, three samples, **zero KV hits**.

| Concurrency | Code sum tok/s | Prose sum tok/s | MAX median/task tok/s | MAX median total tok/s |
| --- | ---: | ---: | ---: | ---: |
| **C1** | **115.4** | **88.6** | 86.5 | **86.5** |
| **C3** | **186.6** | **152.6** | 48.8 | **146.5** |
| **C6** | **245.9** | **200.5** | 29.6 | **177.8** |
| **C12** | **310.1** | **265.2** | 19.1 | **228.8** |
| **C16** | **331.7** | **287.5** | 16.3 | **260.3** |

**Code/prose:** thinking OFF, greedy, warm pass 2, 512 tokens/request; sum of
individual native decode rates. **MAX workflow:** thinking MAX, non-greedy;…
