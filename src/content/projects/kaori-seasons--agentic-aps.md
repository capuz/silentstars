---
repo: "kaori-seasons/agentic-aps"
name: "agentic-aps"
description: "Intelligent Production Scheduling System"
originalDescription: "智能排产系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kaori-seasons/agentic-aps"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [44, 34]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-04-16T00:53:40Z"
lastCommitAt: "2026-11-14T10:43:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 21
maintainers: ["kaori-seasons"]
openGraphImageUrl: "https://opengraph.githubassets.com/b992d2c71d90b9cf76cb585519a2141b912dba9fd1f43ae33dd37f37246dde3c/kaori-seasons/agentic-aps"
---

#### Intelligent Scheduling Workflow (Full-Chain Animation)

The animation shows the **six-step scheduling operation** from 06:30 to 08:00 each day, plus the closed loop of in-shift execution feedback: **① Orders & configuration** (order pool extraction · configuration validation · red-order marking) → **② Kit completeness & CTP** (three-state classification of inventory/ASN · earliest feasible launch date) → **③ Finite-capacity solving** (Timefold 90-second solve, hard-constraint violations 12→0) → **④ Manual intervention confirmation** (Gantt dragging only moves items after T+2 · reason codes · supervisor sign-off) → **⑤ Freeze and release for delivery** (work orders · kitting · freeze T+0/T+1 · traceable versions) → **⑥ Execution & exceptions** (work reporting written back every 15 minutes · L1–L3 escalation). Urgent orders are **inserted with zero disruption** within the reserved manual window, while exceptions and rush insertions loop back to step ③ for **minute-level local rescheduling**.

**Core features**: professional solver arbitration (100% hard-constraint satisfaction) · closed-loop manual intervention (adjustable Gantt, fully logged) · minute-level local rescheduling…
