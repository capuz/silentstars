---
repo: "matt82198/aesop"
name: "aesop"
description: "Orchestration kernel for autonomous software development — crash-only multi-agent coordination on git and plain text, fail-closed verification gates, self-learning guardrails."
readmeQualityOk: true
url: "https://github.com/matt82198/aesop"
homepage: "https://github.com/matt82198/aesop/tree/main/docs"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["agentic-ai", "agents", "orchestration-systems", "orchestrator", "ai-agents", "claude", "developer-tools", "llm", "multi-agent", "orchestration"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-11T20:57:51Z"
lastCommitAt: "2026-10-25T22:10:47Z"
lastReleaseAt: "2026-07-22T21:45:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["matt82198", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297778499/04010247-9e12-419d-a5c7-934eb7627c8e"
---

> **Contact policy.** I am not accepting acquisition offers, recruiter inquiries, or cold calls. Inquiries regarding licensing or commercial usage must go to matt82198@gmail.com. All other outreach will be ignored.

> **Status notice:** Aesop Kernel is mid-way through a major event-based overhaul whose goal is restoring fully fail-closed hooks. The 0.9.x and 0.10.x minor releases may show some degradation versus earlier versions while that lands.

## What It Is

Aesop is a kernel. It is not a finished autonomous developer, and it does not know your repositories, rules, or accounts. It ships the parts that run the loop: dispatch, gates, receipts, merge, watchdog, durable state, and a dashboard. You fill in the rest.

An iteration counts only when it leaves receipts that a gate can check. A lane that reports success without a receipt a gate can verify has not passed. The receipt gate is still in measurement mode, so the hosted receipt check is not required yet ([docs/RECEIPT-GATE.md](https://github.com/matt82198/aesop/blob/HEAD/docs/RECEIPT-GATE.md)).

### System diagram

Blue boxes ship in the npm package. Yellow boxes are yours to provide. Grey dashed boxes are examples that show…
