---
repo: "eunomia-bpf/bpf-benchmark"
name: "bpf-benchmark"
description: "AI Agent eBPF optimization benchmark and framework"
readmeQualityOk: true
url: "https://github.com/eunomia-bpf/bpf-benchmark"
language: "C"
languages: ["C", "Python"]
languagePcts: [46, 21]
topics: ["bpf", "ebpf", "llvm", "performance", "benchmark", "jit", "optimization", "agents", "kernel", "llm"]
stars: 26
forks: 5
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 8
recentReleases: 1
createdAt: "2023-08-18T16:33:46Z"
lastCommitAt: "2026-11-06T13:19:36Z"
lastReleaseAt: "2026-09-22T22:02:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 64
maintainers: ["yunwei37"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e511f92b993fb9452c242db958b2b12f721e0647f5b6d1c8d7782d7d8b0e3d8/eunomia-bpf/bpf-benchmark"
fundingLinks: ["GITHUB:https://github.com/yunwei37", "GITHUB:https://github.com/Officeyutong"]
---

# bpf-bench

> **Artifact evaluation (ATC 2026):** evaluator instructions for the accepted
> paper *BPF-Ext: Safely Extending the eBPF Compilation Pipeline with Native
> Operations* live in
> [`docs/atc26-artifact-evaluation.md`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/docs/atc26-artifact-evaluation.md).
> Start with this GitHub guide; [Zenodo](https://doi.org/10.5281/zenodo.22907396)
> holds the immutable archival backup.

## BPF-Ext / Kinsn artifact (ATC '26)

The paper *BPF-Ext: Safely Extending the eBPF Compilation Pipeline with Native
Operations* (ACM ATC '26) points here. Where its parts live:

| Paper part | Location |
| --- | --- |
| BPF-Ext kernel support (verifier lowering and restore, x86-64 and arm64 JIT) | `vendor/linux-framework`: [`eunomia-bpf/linux`](https://github.com/eunomia-bpf/linux), branch `kinsn-only` |
| Kinsn operations | [`kinsn/module/`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/kinsn/module/) (x86-64 and arm64 kernel modules) |
| Compile-time recognizer and bytecode optimizer | [`llvm-backend/llvm`](https://github.com/eunomia-bpf/bpf-kinsn-llvm), [`bpfopt/`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/bpfopt/) |
|…
