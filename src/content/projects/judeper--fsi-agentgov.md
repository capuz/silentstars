---
repo: "judeper/FSI-AgentGov"
name: "FSI-AgentGov"
description: "Governance framework for Microsoft 365 AI agents (Copilot Studio) in regulated financial services"
url: "https://github.com/judeper/FSI-AgentGov"
homepage: "https://judeper.github.io/FSI-AgentGov/"
language: "Python"
languages: ["Python", "PowerShell"]
languagePcts: [55, 27]
topics: ["ai-governance", "compliance", "copilot-studio", "financial-services", "finra", "governance", "microsoft-365", "sec", "governance-framework", "power-platform"]
stars: 6
forks: 2
openIssues: 62
closedIssues: 102
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2025-12-15T23:15:15Z"
lastCommitAt: "2026-06-27T00:34:41Z"
lastReleaseAt: "2026-05-11T17:05:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 66
maintainers: ["judeper", "fsi-monitor-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71f5d47261ded52bc3f0a3799209f1b5fad142ef74efe8b6f4b4563036fab509/judeper/FSI-AgentGov"
---

# FSI Agent Governance Framework v1.6.2

**Governance framework for Microsoft 365 AI agents in US financial services.**

## Latest Release

**[v1.6.2 — May 11, 2026](https://github.com/judeper/FSI-AgentGov/releases/latest)** (Frontier Readiness auto-evaluator wave)

- Six telemetry-driven Frontier evaluators (Q01, Q03, Q13, Q16, Q17, Q18) take auto-evaluable coverage from 0% to 24% — remaining 76% are facilitator-only by design.
- Honesty principle: every new evaluator is **partial-capped** (never returns `"yes"`) and explicitly names residual facilitator burden in its evidence string.
- The Frontier wave added 21 tests at release time; the assessment test suite now stands at 140 tests. Existing 78-control assessment behaviour unchanged. Safe to upgrade in place — see [`CHANGELOG.md`](CHANGELOG.md#162--may-11-2026-frontier-readiness-auto-evaluator-wave).

> **New to this framework? [Start Here](docs/start-here.md)** — understand what FSI-AgentGov covers, why it exists, and where to begin.

> ⚠️ **Scope:** This framework is designed exclusively for **US financial institutions** using **Microsoft 365 AI agents** (Microsoft Copilot Studio, Agent Builder). Non-US regulations (EU AI…
