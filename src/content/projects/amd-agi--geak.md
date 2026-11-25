---
repo: "AMD-AGI/GEAK"
name: "GEAK"
description: "Generating Efficient AI-Centric Kernels"
readmeQualityOk: true
url: "https://github.com/AMD-AGI/GEAK"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 27]
topics: ["gpu", "hip", "kernel-optimization", "triton", "brain", "llm", "python"]
stars: 214
forks: 76
openIssues: 14
closedIssues: 148
watchers: 4
contributors: 46
recentReleases: 1
createdAt: "2025-07-30T05:34:06Z"
lastCommitAt: "2026-11-25T03:18:59Z"
lastReleaseAt: "2026-10-19T06:51:34Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 44
maintainers: ["yueliu14", "amd-ethany", "jiangyon-amd"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c81f6d2879ea51642db413cf4943ea6fa7b66e184807803ef8f29e37b49c90/AMD-AGI/GEAK"
---

&nbsp;•&nbsp;

GEAK is an autonomous optimization agent that makes AMD GPUs run faster, automatically. Built as a
multi-agent system with an evolving knowledge base, it learns from every optimization run and continuously
improves its strategies over time. Point it at a single kernel or a live model-serving stack such as vLLM or
sglang, and GEAK runs the full optimization loop: it finds the bottlenecks, generates and tunes better kernels
across paths such as Triton, FlyDSL, TileLang, and HIP, and validates the speedup on the real system. What
normally takes weeks of expert kernel engineering becomes an automated, repeatable, and self-improving process.
