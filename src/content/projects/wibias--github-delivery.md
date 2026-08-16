---
repo: "Wibias/github-delivery"
name: "github-delivery"
description: "Agent Skill: GitHub ship loop for issues/PRs (fix reviews, watch CI, security, merge thanks)"
readmeQualityOk: true
url: "https://github.com/Wibias/github-delivery"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-30T18:24:46Z"
lastCommitAt: "2026-08-16T04:09:16Z"
lastReleaseAt: "2026-08-14T08:13:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Wibias", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de6109657aebd4a2adf3f3ad14a4e3672745f0144b5bbdde9e3662f39653e50b/Wibias/github-delivery"
---

# github-delivery

### GitHub delivery for agents, from intent to verified merge.

**Say the outcome, not the orchestration.**

`github-delivery` turns natural-language requests into evidence-backed GitHub workflows: PRDs, issue research, implementation, deep review, CI, fixes, stacks, verified merges, and verified stable self-update. v0.8.0 extends the quality and safety stack with an explicit typed-code anti-slop review checklist, feedback-bound merge freshness, fail-closed handling for unknown active GitHub rules, stronger default trusted-authority posture, resumable release publication, and recovery-aware merge transactions.

[Quick start](#try-it-in-60-seconds) · [Self-update](#update-an-installed-release) · [Progress watchdog](#agent-progress-watchdog) · [What it can own](#what-you-can-ask-it-to-own) · [Safety model](#safety-model) · [Installation](#installation)

</div>

> [!WARNING]
> **Active development.** The complete issue/PR lifecycle and core safety architecture are implemented, but the project is not yet 100% production-ready. I currently consider it roughly **80% of the way there**. See [Current state](#current-state).

> [!IMPORTANT]
> **Natural language is the…
