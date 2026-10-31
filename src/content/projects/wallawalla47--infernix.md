---
repo: "Wallawalla47/Infernix"
name: "Infernix"
description: "C++/CUDA single-GPU inference engine for Qwen3.8 (incl. Qwen3.8-Flash-Next with offloaded experts) on the RTX 5090; grew from NInfer"
readmeQualityOk: true
url: "https://github.com/Wallawalla47/Infernix"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [60, 28]
stars: 166
forks: 30
openIssues: 6
closedIssues: 26
watchers: 2
contributors: 25
recentReleases: 4
createdAt: "2026-10-08T23:20:06Z"
lastCommitAt: "2026-10-31T15:55:21Z"
lastReleaseAt: "2026-10-18T23:45:39Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 86
undervaluedScore: 33
maintainers: ["arc-uri-el", "aminya"]
openGraphImageUrl: "https://opengraph.githubassets.com/c126a503d8fc4b66af93c7828d8890099a9c62b458a76a91146138a2eaff46fe/Wallawalla47/Infernix"
fundingLinks: ["GITHUB:https://github.com/Wallawalla47"]
---

# Infernix

> **AI disclaimer:** everything added since the fork from NInfer, including most of this README, was
> written with AI (mostly Claude Opus 5.5 and Qwen3.8-27B running on Infernix). It is likely to be
> neither complete nor entirely accurate. This is hobby development.

Infernix is a C++/CUDA inference engine that serves Qwen models on one NVIDIA RTX 50-series GPU
(tuned on the RTX 5090). It began as a fork of [NInfer](https://github.com/Neroued/ninfer) by
[Neroued](https://github.com/Neroued) and reads NInfer's `.ninfer` artifacts as well as its own
`.infernix` files.

## Headline results

`main` at `6b066a54`, one RTX 5090 (PCIe Gen5 x8), 2026-10-30/31, against each engine's latest
version, every engine native on Windows under the same 84 GiB RAM budget. Context columns: one
request at a time, ~8K to ~250K tokens. Replay: an agentic coding workload, two requests at once.
Activation precision differs: the other engines round to 8 bits what Infernix keeps at 16 (every
activation on IQ3_S; all but the NVFP4 routed experts, which Infernix runs at the checkpoint's own
4 bits and the others at 8 in decode); see each section's notes. Details: [Benchmarks](#benchmarks).

|…
