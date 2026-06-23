---
repo: "alias8818/enoch-agentic-research-system"
name: "enoch-agentic-research-system"
description: "Agentic research control plane: queue state, worker preflight, wake-gated execution, evidence sync, dashboard, alerts, and AI-generated paper packaging."
url: "https://github.com/alias8818/enoch-agentic-research-system"
homepage: "https://alias8818.github.io/enoch-agentic-research-system/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["agentic-ai", "control-plane", "langgraph", "local-ai", "research-automation", "wake-gate", "agentic-research", "enoch"]
stars: 16
forks: 2
openIssues: 124
closedIssues: 228
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-04-28T22:41:39Z"
lastCommitAt: "2026-06-23T06:42:36Z"
lastReleaseAt: "2026-05-24T14:38:20Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 93
undervaluedScore: 53
maintainers: ["alias8818"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c41b82e5d91d9d34a82a5109fbf08386160066917f767fbf7cdc5d3ec301aaf/alias8818/enoch-agentic-research-system"
discussionCount: 0
---

# Enoch Agentic Research System

![Enoch — Agentic Research Control Plane](site/assets/social-card.svg)

Enoch Control Plane is an agentic research control plane: it queues ideas, gates dispatch, supervises local AI runs, preserves evidence, and packages AI-generated research artifacts with provenance instead of pretending autonomous work is just a script.

## The problem

Long-running autonomous AI work fails in ways ordinary scripts do not:

- child processes continue after an agent session appears idle;
- GPU workers can still be active when queue state says no work is running;
- queues become stale or disagree across sources;
- evidence scatters across machines and run folders;
- generated reports overstate results when claim boundaries aren't preserved.

Enoch Control Plane treats those as control-plane problems, not model problems. It uses process tracking, CPU/GPU quiet-window telemetry, idempotent APIs, stale-state reconciliation, a professional operator dashboard, evidence bundles, and claim ledgers to make autonomous work observable and auditable.

> Agentic AI systems need control planes. A model can propose and execute work, but a separate system should decide what is…
