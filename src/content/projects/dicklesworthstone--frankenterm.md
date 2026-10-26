---
repo: "Dicklesworthstone/frankenterm"
name: "frankenterm"
description: "Swarm-native terminal platform for AI coding agents: real-time pane capture, change-point pattern detection, transactional policy-gated automation, a JSON/MCP robot API, and a fail-closed operating envelope — on its own vendored terminal engine, with a native iOS client that attaches to your Macs."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenterm"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["ai-agents", "automation", "rust", "terminal", "agent-orchestration", "ios", "mcp", "observability", "terminal-multiplexer"]
stars: 125
forks: 19
openIssues: 5
closedIssues: 57
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-01-18T20:19:33Z"
lastCommitAt: "2026-10-26T18:06:29Z"
lastReleaseAt: "2026-06-21T07:18:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 38
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137047020/dca8d535-23e1-4a00-8864-c57d6ac28c15"
---

# ft — FrankenTerm

### What's here

| If you're... | Start with |
|---|---|
| Trying it out | [10-Minute Tour](#10-minute-tour) → [Commands](#commands) → [Robot Mode](#robot-mode-json-api) |
| Building a meta-agent | [Robot Mode](#robot-mode-json-api) → [Sample Mission/Tx Contracts](#deep-dive-sample-mission-and-tx-contracts) → [Operating Envelope](#operating-envelope) |
| Operating at scale | [Capacity Planning](#deep-dive-capacity-planning) → [Operator Playbook](#operator-playbook-excerpts) → [Troubleshooting](#troubleshooting) |
| Understanding how it works | [Architecture](#architecture) → [System Components](#system-components-and-responsibilities) → [Deep Dives](#deep-dive-the-watcher-capture-loop) |
| Auditing the claims | [Trust & Attestation](#trust--attestation) → [Threat Model](#deep-dive-threat-model) → [Formal Methods](#deep-dive-formal-methods-in-this-repo) |
| Reading the algorithms | [Algorithm & Data Structure Catalog](#algorithm--data-structure-catalog) → [Pattern Engine](#deep-dive-pattern-engine-architecture) → [Cx Cancellation Model](#deep-dive-the-cx-cancellation-model) |

**A swarm-native terminal platform designed to observe, control, and audit large…
