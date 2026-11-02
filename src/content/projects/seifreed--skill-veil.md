---
repo: "seifreed/skill-veil"
name: "skill-veil"
description: "skill-veil is an open source static analysis and policy tool for the agent extension supply chain."
readmeQualityOk: true
url: "https://github.com/seifreed/skill-veil"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T20:27:42Z"
lastCommitAt: "2026-11-02T13:38:09Z"
lastReleaseAt: "2026-06-30T05:34:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 19
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/974da4e584f9ec0d9257700f54289ffd1524f0e8137a82302db1b736c657ce80/seifreed/skill-veil"
---

---

## Overview

**skill-veil** is an open source static analysis and policy tool for the agent
extension supply chain.

It helps answer a narrow but useful operational question:

> should this skill, prompt pack, instruction file, MCP manifest, or related
> artifact be allowed, reviewed, or blocked before it lands in a repo or CI
> pipeline?

It is strongest as a **static security and policy layer**, not as a universal
malware engine.

### Key Features

| Feature | Description |
|---------|-------------|
| **Agent Extension Coverage** | First-class support for `SKILL.md`, `AGENTS.md`, `CLAUDE.md`, `SYSTEM.md`, prompt packs, and MCP manifests |
| **Artifact Analysis** | Inspects referenced scripts, manifests, lockfiles, Docker artifacts, and operational configs |
| **Policy Engine** | `log`, `require_approval`, `block` with profiles, waivers, baselines, and overrides |
| **CI-Friendly Output** | Text, JSON, SARIF, SHIELD, diff mode, compact CI summary, and PR gating support |
| **External Rule Packs** | Versioned `official` and `community` rule packs with fixtures and validation |
| **Benchmarking** | Labeled corpus, confidence calibration, threshold tuning, and release history…
