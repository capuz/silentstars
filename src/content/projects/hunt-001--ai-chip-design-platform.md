---
repo: "HUNT-001/ai-chip-design-platform"
name: "ai-chip-design-platform"
description: "Multi-agent RISC-V verification and test-generation framework for AI-assisted RTL, ISS, compliance, coverage, and debug workflows."
readmeQualityOk: true
url: "https://github.com/HUNT-001/ai-chip-design-platform"
language: "Python"
languages: ["Python", "IL Assembly"]
languagePcts: [34, 21]
topics: ["agentic-ai", "ai", "chip-design", "digital-design", "eda", "hardware-verification", "machine-learning", "multi-agent-systems", "red-teaming", "riscv"]
stars: 12
forks: 4
openIssues: 6
closedIssues: 56
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-06T16:44:09Z"
lastCommitAt: "2026-11-19T11:59:21Z"
lastReleaseAt: "2026-11-09T08:39:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 65
maintainers: ["HUNT-001"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a8a7d534004be56cacd20792b3eaa8c265e0fd36ffd3287cc01d9224cfe9c11/HUNT-001/ai-chip-design-platform"
discussionCount: 1
---

# AVA — Autonomic Verification Agent

**A multi-agent RISC-V RTL verification platform, and a research track studying whether verification agents can be trusted.**

[Quick Start](#quick-start) · [Architecture](#part-i--ava-the-verification-pipeline) · [VOE Research](#part-ii--voe-the-verification-operating-environment) · [Reproducing Results](#reproducibility) · [Contributing](#contributing)

---

## The verdict

- `completed` / exit 0: verified.
- `failed` / exit 1: a violation was found.
- `incomplete` / exit 3: it could not verify (a tool was missing, or a stage could not run).

The exit code is the verdict, and it does not depend on the console encoding. Current release: [v4.0.1](https://github.com/HUNT-001/ai-chip-design-platform/releases/tag/v4.0.1). It supersedes v4.0.0, whose `completed` compared only instruction PCs on real Spike logs.
