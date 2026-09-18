---
repo: "elsechord/CyberGuard"
name: "CyberGuard"
description: "Evidence-driven autonomous SOC team on AgentTeams: hash-bound approvals, HMAC audit chain, rollback and reproducible attack scenarios — auditable governance primitives for agent infrastructure."
readmeQualityOk: true
url: "https://github.com/elsechord/CyberGuard"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-infra", "agentscope", "agentteams", "ai-soc", "audit", "human-in-the-loop", "incident-response", "llm-agents", "mcp", "multi-agent"]
stars: 43
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-17T17:45:32Z"
lastCommitAt: "2026-09-18T14:03:59Z"
lastReleaseAt: "2026-09-17T18:04:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 32
maintainers: ["Shuuyou", "armaygooser"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bed8ca2423707e665c7658e0bf788ec6667ef181e6f3623a0b3ba30f4272931/elsechord/CyberGuard"
---

# CyberGuard

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/elsechord-horizontal-light.png">
</picture>

**60-second demo (console walk-through):** [cyberguard-demo-60s.mp4](https://github.com/elsechord/CyberGuard/releases/download/v0.14.0/cyberguard-demo-60s.mp4) — release asset of [v0.14.0](https://github.com/elsechord/CyberGuard/releases/tag/v0.14.0).

CyberGuard is an evidence-driven autonomous security operations team built on [AgentTeams](https://github.com/agentscope-ai/AgentTeams). It coordinates specialized Agents for alert fusion, threat intelligence, network hunting, endpoint forensics, response planning, controlled execution and independent recovery verification.

The project is designed for the GOAI “Agent Infra 新智基座” track. It intentionally reuses AgentTeams for orchestration, Matrix collaboration, Skill distribution, shared storage and credential brokering, while CyberGuard provides the security-domain application layer.

*The read-only audit console: incident queue with evidence metrics and approvals pending human review.*

## Three steps to run

**Path A — Docker Compose (recommended):**

```bash
git clone…
