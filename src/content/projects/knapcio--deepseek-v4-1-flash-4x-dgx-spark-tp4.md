---
repo: "knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4"
name: "DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4"
description: "Tuned TP4 serving profile for DeepSeek-V4.1-Flash on 4x NVIDIA DGX Spark (SGLang, DSpark), built on the MiaAI-Lab recipe"
readmeQualityOk: true
url: "https://github.com/knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 65
forks: 11
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-09-17T05:18:01Z"
lastCommitAt: "2026-10-22T08:52:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 36
maintainers: ["knapcio", "adapt-ai-systems", "rchmagos"]
openGraphImageUrl: "https://opengraph.githubassets.com/52786275c148e6db9e2ac5faf150064f2e92c1123ef6dfd427670bc5a6492d56/knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4"
fundingLinks: ["GITHUB:https://github.com/MiaAI-Lab"]
---

> [!IMPORTANT]
> **Issue #16 was resolved by [#18](https://github.com/knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4/pull/18).**
> The original v2.4 images predate the fix and must be rebuilt: new canary builds carry a
> credited, fail-closed backport of [SGLang #41303](https://github.com/sgl-project/sglang/pull/41303),
> which keeps the complete SWA window on the affected bounded-replay/prefix-cache path.
> The v2.1-compatible block in [`.env.tp4.example`](https://github.com/knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4/blob/HEAD/.env.tp4.example) remains the conservative
> fallback. Incident analysis and a focused regression procedure are in
> [`docs/issue-16-swa-crash.md`](https://github.com/knapcio/DeepSeek-V4.1-Flash-4x-DGX-Spark-TP4/blob/HEAD/docs/issue-16-swa-crash.md).

## Credits

This repository is a downstream profile of **[MiaAI-Lab/DeepSeek-v4.1-Flash-DGX-Sparks](https://github.com/MiaAI-Lab/DeepSeek-v4.1-Flash-DGX-Sparks)** by Mia (MiaAI-Lab). The launcher (`start.sh`, `start-tp4.sh`, `boot.py`), the Engram NVMe row store, the MXFP8 b12x routing, the memory model in `docs/chunked-prefill-memory.md`, the thinking alias, the output cap, the loop abort and the overall…
