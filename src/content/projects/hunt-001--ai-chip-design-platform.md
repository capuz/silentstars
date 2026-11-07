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
forks: 5
openIssues: 2
closedIssues: 45
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T16:44:09Z"
lastCommitAt: "2026-11-07T16:12:45Z"
lastReleaseAt: "2026-07-29T18:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["HUNT-001"]
openGraphImageUrl: "https://opengraph.githubassets.com/66e039aadb99a357aeec13ae6bf79e4ba6191411d327f7da27dece31afd0804c/HUNT-001/ai-chip-design-platform"
discussionCount: 1
---

# AVA — Autonomic Verification Agent

**A multi-agent RISC-V RTL verification platform, and a research track studying whether verification agents can be trusted.**

[Quick Start](#quick-start) · [Architecture](#part-i--ava-the-verification-pipeline) · [VOE Research](#part-ii--voe-the-verification-operating-environment) · [Reproducing Results](#reproducibility) · [Contributing](#contributing)

---

## What this is

This repository contains two related things.

**AVA** is a verification pipeline. Give it RTL and it runs semantic analysis,
generates a testbench, executes the design against a golden ISS, compares the
two commit logs instruction by instruction, analyses coverage, and generates new
tests aimed at what the campaign has not yet reached. Twelve agents, most of
which run with no EDA toolchain at all.

**VOE** is the research track underneath it, and it asks a harder question: when
an automated agent reports that a design is verified, *why should anyone believe
it?* VOE is built on a small frozen kernel in which a claim cannot exist without
a witness — a real artifact, produced by a real tool, that can be re-checked
later. Every policy change is pre-registered before data is…
