---
repo: "aws-samples/sample-codex-agent-team"
name: "sample-codex-agent-team"
description: "Team of Codex agents that collaborate through a spec-driven development process. Full Stack Developer parent orchestrates dynamically sized pools of specialists: Coding, DevOps, Review, and Solutions Architect agents."
url: "https://github.com/aws-samples/sample-codex-agent-team"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-16T16:13:27Z"
lastCommitAt: "2026-06-23T23:16:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 13
maintainers: ["khanrubd", "amazon-ospo-app[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271398876/bbb00338-74c9-4b1e-8e55-b37807630b0a"
---

# Codex Agent Team Sample

A shareable sample configuration for a hybrid Codex development team. It combines project-scoped custom agents, a repo-local plugin, prompt shortcuts, lifecycle hooks, command rules, and spec templates for a plan-build-review workflow.

Jump to [Quick Start](#quick-start).

> This repository is a sample configuration, not a production-ready control plane. Review every agent instruction, hook, rule, plugin file, and security note before using it on real projects.

## Overview

The sample is built around a main-thread coordinator and five optional role agents:

| Agent | Role | Reasoning Effort | Primary Use |
| --- | --- | --- | --- |
| `fullstack-agent` | Spawned lead | xhigh | Specs, work splitting, delegation, and review-loop consolidation |
| `coding-agent` | Implementation engineer | high | Scoped production code, tests, refactors, and fixes |
| `devops-agent` | Infrastructure and delivery specialist | high | CI/CD, containers, IaC, environment wiring, and runbooks |
| `review-agent` | Independent reviewer | xhigh | PASS/FAIL review for bugs, regressions, security, and missing verification |
| `sa-agent` | Architecture and systems advisor | high |…
