---
repo: "suirindo/agent-role-contracts"
name: "agent-role-contracts"
description: "Catch out-of-scope coding-agent tasks, declared self-review, and stale handoffs before execution. Offline, model-agnostic Node.js CLI."
readmeQualityOk: true
url: "https://github.com/suirindo/agent-role-contracts"
homepage: "https://netsujo.jp/en/products/agent-role-contracts"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["agent-governance", "ai-agents", "cli", "developer-tools", "multi-agent", "nodejs", "validation", "workflow", "agent-handoffs", "coding-agents"]
stars: 4
forks: 0
openIssues: 15
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-09-30T06:35:51Z"
lastCommitAt: "2026-11-03T02:32:18Z"
lastReleaseAt: "2026-10-15T06:47:02Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 59
maintainers: ["suirindo", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b6a84d51a0ba0e867816c1f3efee8716cf5e05a2a81b3bb2007360f329e5865/suirindo/agent-role-contracts"
fundingLinks: ["GITHUB:https://github.com/netsujo-inc"]
promoted: true
postedAt: "2026-10-31T07:53:30.293Z"
---

# Agent Role Contracts

[日本語](https://github.com/suirindo/agent-role-contracts/blob/HEAD/README.ja.md)

**Catch out-of-scope agent tasks, self-review, and stale handoffs before execution.**

Choose a starting point: [run the demo](#quick-start--three-minutes), [use the checker in your own repository](https://github.com/suirindo/agent-role-contracts/tree/main/experiments/adoption), or [evaluate a real workflow](https://github.com/suirindo/agent-role-contracts/blob/HEAD/experiments/external-evaluation/README.md).

The checker validates declarations. A PASS does not grant execution permission.

## Quick Start — three minutes

**Requirements:** Git and **Node.js 22.5 or newer**, with npm. Clone once, then run the demo:

```sh
git clone https://github.com/suirindo/agent-role-contracts.git
npm --prefix agent-role-contracts run demo --silent
```

No `npm install`, API key, agent runtime or account is needed. Only cloning uses the network; the demo runs offline. The commands use Git and npm and do not require Bash, Docker or OS-specific tools.

### Expected output

```text
Agent Role Contracts: check a task before handing it to an agent.

1. Normal task
   Scope: src/example.mjs; allowed:…
