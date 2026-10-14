---
repo: "StellarFoundry/soroban-security-scanner"
name: "soroban-security-scanner"
description: "Deterministic security analysis for Stellar Soroban smart contracts and Rust projects."
readmeQualityOk: true
url: "https://github.com/StellarFoundry/soroban-security-scanner"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "code-scanning", "devsecops", "rust", "sarif", "security", "security-tools", "smart-contracts", "soroban", "static-analysis"]
stars: 10
forks: 2
openIssues: 159
closedIssues: 17
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-09-21T11:06:44Z"
lastCommitAt: "2026-10-14T08:58:20Z"
lastReleaseAt: "2026-09-28T01:13:02Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 81
undervaluedScore: 44
maintainers: ["Ayinkx", "Hey-Yetunde", "jiggy-techy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f398462ac7219b43b3b929fb5b59ee8de5bb812fb376731136d98952c44b7ff5/StellarFoundry/soroban-security-scanner"
discussionCount: 0
---

# Soroban Security Scanner

**Deterministic, evidence-based security analysis for Stellar Soroban smart contracts and Soroban-related Rust projects.**

`soroban-scan` statically analyzes Soroban/Rust source code and reports security
findings with stable rule identifiers, severity and confidence ratings, precise
source locations, evidence, and remediation guidance.

The core scanner is **deterministic** and **AI-independent**. It never executes,
deploys, signs, or mutates the code it analyzes.

> **Project status:** early development. See [`docs/PROJECT_STATUS.md`](https://github.com/StellarFoundry/soroban-security-scanner/blob/HEAD/docs/PROJECT_STATUS.md)
> for an honest, continuously updated description of what exists today.

---

## Why

Soroban smart contracts handle real value, and security review is still largely
manual and ad hoc. Generic Rust linters (`clippy`) do not understand Soroban
semantics, and general-purpose static analyzers do not model Soroban's
authorization, storage, and resource model.

`soroban-scan` fills that gap with focused, Soroban-aware detectors, a
deterministic rule engine, and CI-friendly machine-readable output (JSON, SARIF).

## Quickstart

```bash…
