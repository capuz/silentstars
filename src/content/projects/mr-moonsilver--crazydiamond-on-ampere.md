---
repo: "Mr-Moonsilver/crazydiamond-on-ampere"
name: "crazydiamond-on-ampere"
description: "Flash-Next inference engine (vLLM overlay) for Qwen3.8-Flash-Next on 4x RTX 3090: fits 8 agents x 200k context when the model just fits in VRAM"
readmeQualityOk: true
url: "https://github.com/Mr-Moonsilver/crazydiamond-on-ampere"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-22T17:16:08Z"
lastCommitAt: "2026-11-24T14:04:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Mr-Moonsilver"]
openGraphImageUrl: "https://opengraph.githubassets.com/3841f50d4dfc7bdbb6d7da61843571e9d7feabc4e366a3f62960bfec54d6630d/Mr-Moonsilver/crazydiamond-on-ampere"
---

# crazydiamond-on-ampere

**Qwen3.8-Flash-Next (INT4 weights, Intel AutoRound W4A16) on four RTX 3090s: 8 agent sessions × 200,000 tokens of context, with the KV cache in host RAM.**

## Performance

Measured on our box (4 × RTX 3090) against stock vLLM with the same image, model, GPUs and limits. The stock arm runs vLLM's own QSA host-KV mode (`VLLM_QSA_KV_OFFLOAD=1`) and its launcher (`packet/run-flash-stock-keyed.sh`) also mounts our QSA row-cache files (`qsa.py`, `ops_qsa.py`). These comparisons therefore measure the rest of the overlay (the native prefill lane, the prefill/decode split and the scheduling), not host KV. **Build-6** is the release published here. **Predecessor** is build-6's direct predecessor with the same engine settings. Details and caveats are under [Results](#results).
