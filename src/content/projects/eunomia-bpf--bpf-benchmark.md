---
repo: "eunomia-bpf/bpf-benchmark"
name: "bpf-benchmark"
description: "AI Agent eBPF optimization benchmark and framework"
readmeQualityOk: true
url: "https://github.com/eunomia-bpf/bpf-benchmark"
language: "C"
languages: ["C"]
languagePcts: [54]
topics: ["bpf", "ebpf", "llvm", "performance", "benchmark", "jit", "optimization", "agents", "kernel", "llm"]
stars: 25
forks: 5
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 8
recentReleases: 1
createdAt: "2023-08-18T16:33:46Z"
lastCommitAt: "2026-10-02T09:59:27Z"
lastReleaseAt: "2026-09-22T22:02:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 65
maintainers: ["yunwei37"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0cdc5452a73d67ff5db611efb65efa36a6fe40496641705365e4bc667289b87/eunomia-bpf/bpf-benchmark"
fundingLinks: ["GITHUB:https://github.com/yunwei37", "GITHUB:https://github.com/Officeyutong"]
---

# bpf-bench

> **Artifact evaluation (ATC 2026):** evaluator instructions for the accepted
> paper *BPF-Ext: Safely Extending the eBPF Compilation Pipeline with Native
> Operations* live in
> [`docs/atc26-artifact-evaluation.md`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/docs/atc26-artifact-evaluation.md).
> Start with this GitHub guide; [Zenodo](https://doi.org/10.5281/zenodo.22907396)
> holds the immutable archival backup.

Auto-research framework and benchmark for agentic OS kernel extension
optimization.

`bpf-bench` frames eBPF optimization as a closed-loop search problem for LLM
agents. Agents choose optimization actions, the framework executes those actions
against real applications and workloads in isolated Docker/KVM/AWS environments,
and each iteration returns verifier, JIT, workload, and performance feedback for
the next decision.

This repository is the execution substrate and artifact workspace for the
`bpf-bench` paper draft in
[`docs/ebpf27-bpfoptbench/`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/docs/ebpf27-bpfoptbench/). It also provides the
artifact and evaluation harness for KOperation (short for *kernel operation*) and its paper,…
