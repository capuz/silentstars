---
repo: "jschmied/qwen38-flash-next-gb10"
name: "qwen38-flash-next-gb10"
description: "Getting Qwen's Qwen4-architecture preview (Qwen3.8-Flash-Next) to run on a single DGX Spark GB10 — 125.9 GiB of weights against 117 GiB of unified memory"
readmeQualityOk: true
url: "https://github.com/jschmied/qwen38-flash-next-gb10"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [67, 30]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T20:10:03Z"
lastCommitAt: "2026-09-09T08:18:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["jschmied"]
openGraphImageUrl: "https://opengraph.githubassets.com/65dbd244f73f5824e4f20350fde87438afe2198c6873c02aa6e1699f903dfddb/jschmied/qwen38-flash-next-gb10"
---

# Qwen3.8-Flash-Next on a DGX Spark (GB10)

Qwen's Qwen4-architecture preview (125B MoE, 6B active, a 51B n-gram table) served from one GB10
with 128 GB of unified memory, on vLLM. This repo is the working record: the recipe, every number
with its data file, the failures by symptom, and the claims of our own we had to withdraw.

**Status: working, fast, and usable** — 262K-capable context, tool calls, vision, one kernel fix of
ours merged into vLLM and four more under review there.

| what | number | where it comes from |
| --- | --- | --- |
| decode, single stream | 17.1 → **36.5 tok/s** (checkpoint levers + MTP) | [speculation](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/speculation-on-flash-next.md), [fp8 checkpoint](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/fp8-mixed-checkpoint.md), [lm_head](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/quantizing-lm-head.md) |
| decode, 16 / 32 streams | ~100 / 110 tok/s aggregate | [load and waits](https://github.com/jschmied/qwen38-flash-next-gb10/blob/HEAD/notes/load-and-waits.md) |
| TTFT, 7.5k / 29k tokens | **2.6 s / 10.1 s** (≈ 2,800 tok/s prefill) | [prefill…
