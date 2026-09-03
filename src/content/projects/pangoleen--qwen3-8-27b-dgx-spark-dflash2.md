---
repo: "pangoleen/qwen3.8-27b-dgx-spark-dflash2"
name: "qwen3.8-27b-dgx-spark-dflash2"
description: "Qwen3.8-27B on one DGX Spark: SGLang + DFlash2 recipe, engine image, benchmarks, data and charts. By @redp314"
readmeQualityOk: true
url: "https://github.com/pangoleen/qwen3.8-27b-dgx-spark-dflash2"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-02T14:40:51Z"
lastCommitAt: "2026-09-03T08:15:32Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 10
maintainers: ["pangoleen"]
openGraphImageUrl: "https://opengraph.githubassets.com/b144d3c2cbbf761cc35d8282ff154ecc03514582abe209b2dfe544542adf61ed/pangoleen/qwen3.8-27b-dgx-spark-dflash2"
---

# Qwen3.8-27B on one DGX Spark (GB10)

By Paolo Rosson, [@redp314 on X](https://x.com/redp314), where the results and
follow-ups are posted first.

A serving recipe for a single DGX Spark: SGLang, NVFP4 weights, and a DFlash2
speculative drafter at a draft budget of 16. It ships the engine image build, the
launch script, the six benchmarks that produced every number below, the rows
behind them as CSV, and the kept FlashInfer autotune draws, the fix for a boot lottery worth 16%.

| Single stream, 320 tokens to 65k of context | 16 concurrent streams | 32 concurrent streams | Accepted tokens per verify pass |
|---|---|---|---|
| **64-78 tok/s**, two boots | **360 tok/s** aggregate, 27 per stream | **387 tok/s** aggregate, 15 per stream (32-seat profile) | 6.8-8.3 of a budget of 16 |

Conditions: a coding task on real source, 512 output tokens, temperature 0,
thinking off, decode only (time to first token excluded), median of 4 runs per
rung, two boots; the concurrency figures are distinct 2k-token code prefixes,
512 output tokens, mean of 2 runs, one boot per profile. Past 65k it falls: 56 at 130k, 38-41 at 260k. Everything
else, with its conditions, is in…
