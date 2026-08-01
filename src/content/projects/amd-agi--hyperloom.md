---
repo: "AMD-AGI/Hyperloom"
name: "Hyperloom"
description: "An agentic system that auto-optimizes LLM workloads on AMD GPUs."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/Hyperloom"
homepage: "https://rocm.docs.amd.com/projects/hyperloom"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent", "llm", "python", "skills"]
stars: 114
forks: 13
openIssues: 3
closedIssues: 336
watchers: 1
contributors: 105
recentReleases: 9
createdAt: "2026-03-27T18:34:28Z"
lastCommitAt: "2026-08-01T06:16:35Z"
lastReleaseAt: "2026-07-29T02:40:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 39
maintainers: ["xiaofei-zheng", "ZhengGong-amd", "lishuoshuo-amd"]
openGraphImageUrl: "https://opengraph.githubassets.com/2206d37f426681880c8cf25356fa42f7f6eb4184b2c092d64c731727c4745992/AMD-AGI/Hyperloom"
---

# ROCm Hyperloom

ROCm™ Hyperloom is an autonomous agentic system designed to optimize end-to-end inference workloads
(targeting both host code and GPU kernels) on AMD GPUs. Using advanced AI agents and profiling tools,
Hyperloom analyzes your workload, identifies performance bottlenecks, implements targeted optimizations,
and validates the performance and correctness of the optimizations without requiring manual intervention.
 
The system operates through a sophisticated multi-stage pipeline. First TraceLens, the profiling brain of
the workload understanding stage, consumes traces collected by Magpie (which in turn relies on IntelliKit
for some low-level GPU profiling tools), captures bottlenecks, and derives the roofline targets that seed
the optimization search tree.

Next, Hyperloom employs a self-evolving code optimization engine following an iterative agentic loop (Think
→ Decide → Implement → Benchmark). Arbor intelligently explores the optimization space using a Dynamic
Specialist Agent and Knowledge Base. In parallel to Arbor, GEAK, a multi-agent GPU performance optimizer,
optimizes hot kernels. Once optimizations are identified and validated, Hyperloom prepares
the…
