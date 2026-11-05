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
openIssues: 13
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-09-30T06:35:51Z"
lastCommitAt: "2026-11-05T00:58:41Z"
lastReleaseAt: "2026-11-04T03:51:45Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 61
maintainers: ["suirindo", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/906719e7ec1fcdfb8df3dda61fd0b40efbbbb3a311fe2bc2245752cfcce12020/suirindo/agent-role-contracts"
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
