---
repo: "jschmied/qwen38-flash-next-gb10"
name: "qwen38-flash-next-gb10"
description: "Getting Qwen's Qwen4-architecture preview (Qwen3.8-Flash-Next) to run on a single DGX Spark GB10 — 125.9 GiB of weights against 117 GiB of unified memory"
readmeQualityOk: true
url: "https://github.com/jschmied/qwen38-flash-next-gb10"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T20:10:03Z"
lastCommitAt: "2026-08-31T09:49:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9c37877f77412cce59818161d8a44766b51c0e0bd572813d6abd7e71123c6703/jschmied/qwen38-flash-next-gb10"
---

# Qwen3.8-Flash-Next on a DGX Spark (GB10)

Can Qwen's Qwen4-architecture preview be made to run well on a single GB10 with 128 GB of
unified memory? This repo is the working record — including, deliberately, the parts that do not
work and the claims of our own we had to withdraw.

**Status: working, fast, and usable.** `17.1 → 36.5 tok/s` single-stream on one box, via three
measured levers. The model serves 262K-capable context, tool calls, and vision.

| lever | single-stream | note |
| --- | --- | --- |
| `RadixArk/…-NVFP4` as published | 17.1 | dense projections left in BF16 |
| + dense projections FP8 (lovedheart) | 23.7 | same size, +39% |
| + `lm_head` FP8 (ours, first on GPU for this model) | 26.1 | no measurable quality cost |
| + MTP k=2 | **36.5** | +35%; the head lever **doubles** under speculation |

Aggregate is a **different config and not comparable to the row above it**: the 266.8 tok/s at 48
streams in [load and waits](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/load-and-waits.md) was measured on the *baseline* checkpoint
(its c=1 row is the 17.1 above), MTP off, with short prompts. On the shipped config with
4000-token inputs we measure…
