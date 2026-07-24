---
repo: "eunomia-bpf/bpf-benchmark"
name: "bpf-benchmark"
description: "AI Agent eBPF optimization benchmark and framework"
readmeQualityOk: true
url: "https://github.com/eunomia-bpf/bpf-benchmark"
language: "C"
languages: ["C"]
languagePcts: [61]
topics: ["bpf", "ebpf", "llvm", "performance", "benchmark", "jit", "optimization", "agents", "kernel", "llm"]
stars: 22
forks: 4
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2023-08-18T16:33:46Z"
lastCommitAt: "2026-07-24T06:07:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 51
maintainers: ["codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ee9f99289bba258fd82cce18e70f108590f719e01b7af7830f7ca39d5c795f7/eunomia-bpf/bpf-benchmark"
fundingLinks: ["GITHUB:https://github.com/yunwei37", "GITHUB:https://github.com/Officeyutong"]
---

# bpf-bench

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
artifact and evaluation harness for KOperation (short for *kernel operation*) and its paper,
[`KOperation: Safely Extending the eBPF Compilation Pipeline with Native Operations`](https://github.com/eunomia-bpf/bpf-benchmark/blob/HEAD/docs/paper/main.tex).
The current `bpf-bench` instantiation covers six production eBPF applications,
146 comparable BPF program measurements, and 42 microbenchmark tasks, with
correctness and integrity checks designed to prevent reward hacking.

## Branch Discipline

This experimental…
