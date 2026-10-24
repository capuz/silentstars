---
repo: "traust-security/traust"
name: "traust"
description: "Traust security auditing harness, skills, and commands"
readmeQualityOk: true
url: "https://github.com/traust-security/traust"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 22
forks: 12
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-08-31T11:50:29Z"
lastCommitAt: "2026-10-24T00:15:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 37
maintainers: ["chubirka", "konflux-internal-p02[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b7bb590e70c2b2b663cdddd2ffd16f74a36fe14f55d7b490e06ab851c48b18/traust-security/traust"
discussionCount: 1
---

# Traust

Traust is an AI-native workflow engine for the automated security assessment of software. It equips adopters with a structured methodology to run consistent, repeatable multi-framework audits across repositories that include source code, container images, RPM packages, Kubernetes operators, or infrastructure as code (IaC). It provides machine triage of findings and live validation of exploits to drive remediation, recording every event in a signed, tamper-evident ledger. Traust is built to simplify the process of application security, with the ability to scale to hundreds of repositories across dozens of product releases if needed.

This repository holds Traust's agent-facing security skills, slash commands, CLI entry points, and workflow policy. Shared platform capabilities are being consolidated in [traust-core](https://github.com/traust-security/traust-core); adoption by the existing components is in progress. Traust is agent-agnostic in principle, with current implementations for Claude Code and Crush. Developed by Red Hat's Hybrid Platforms team and published under Apache License 2.0.

## Quick start

```bash
git clone <your-forge>/traust.git && cd traust
uv sync…
