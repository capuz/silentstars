---
repo: "zongxinqian/strata-ampere"
name: "strata-ampere"
description: "High-throughput lossless TP=2/EP=2 fork of Strata tuned for Ampere (sm_86) dual-GPU MoE inference — up to 160-172 tok/s decode on 2x RTX 3080 20GB (non-P2P PCIe)."
originalDescription: "High-throughput lossless TP=2/EP=2 fork of Strata tuned for Ampere (sm_86) dual-GPU MoE inference — up to 160-172 tok/s decode on 2x RTX 3080 20GB (non-P2P PCIe)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zongxinqian/strata-ampere"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [44, 29]
topics: ["ampere", "cuda", "llm-inference", "moe", "rtx-3080", "sm86", "speculative-decoding", "strata", "tensor-parallelism"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-23T04:13:16Z"
lastCommitAt: "2026-11-25T03:16:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 35
maintainers: ["zongxinqian", "Niko1221"]
openGraphImageUrl: "https://opengraph.githubassets.com/baed8959a2215cbd0ac391c0fcd16a14b029565c7cfe460b6dae2c148cced0c2/zongxinqian/strata-ampere"
fundingLinks: ["GITHUB:https://github.com/Niko1221", "BUY_ME_A_COFFEE:https://buymeacoffee.com/strataengine"]
---

# strata-ampere

`strata-ampere` is a deep engineering optimization based on [Strata](https://github.com/Niko1221/Strata) (`0.1.60.1`). It aims to fully maximize the **decode and prefill throughput** of large MoE models at **100% strictly lossless accuracy** on a consumer-grade dual-card Ampere platform (`2× modified RTX 3080 20 GB`) with no NVLink and no PCIe P2P, paired with a four-channel DDR4 hybrid inference setup.

> **Measurement commitment**: All core speed figures in this document use the **median or average of multiple runs** (single occasional peaks are never used as the main metric). All experiments were measured and reproduced under `temperature=0`, no quantization reduction, `STRATA_ROUTE_TAIL_SKIP=0` (no cold experts discarded), and `BF16` cross-GPU AllReduce, under strictly lossless conditions.

---

## 1. Measured Core Optimization Speeds (median / average)

### 1. Decode generation speed (median of 6 strictly lossless scenarios, `REPS=3`)

At the default `320W` frequency, based on `Qwen3.8-Flash-Next-UD-Q4_K_XL` (`MTP-6` draft model, median of 3 rounds):
