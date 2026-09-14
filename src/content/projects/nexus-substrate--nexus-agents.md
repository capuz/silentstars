---
repo: "nexus-substrate/nexus-agents"
name: "nexus-agents"
description: "Governance substrate for your AI coding agents — adversarial review, drift-detected rules, immutable audit, closed-loop telemetry"
readmeQualityOk: true
url: "https://github.com/nexus-substrate/nexus-agents"
homepage: "https://nexus-substrate.github.io/nexus-agents/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 18
forks: 2
openIssues: 181
closedIssues: 3143
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T19:44:54Z"
lastCommitAt: "2026-09-14T09:12:37Z"
lastReleaseAt: "2026-02-12T00:35:56Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 56
maintainers: ["williamzujkowski", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bed1d6f09f20f6fd50af0ca5b74d70e2d55d80fc469f725bdf20b8b2327df7d/nexus-substrate/nexus-agents"
---

# Nexus Agents

> Autonomic control plane for AI coding agents — one entry point, adversarial review, tamper-evident hash-chained audit, human-gated closed-loop tuning (autonomous demotion, earned promotion)

---

## Why Nexus Agents?

**Nexus-agents is an autonomic control plane for your AI coding agents** — Claude Code, Codex, Gemini, and OpenCode. The agents are the _data plane_: they do the engineering. Nexus-agents is the _control plane_: it admits work through one entry point, reviews it adversarially before it ships, records every action in a tamper-evident event log, and closes the loop by tuning where the next task goes based on what actually worked.

Borrowing the vocabulary of [autonomic computing](https://en.wikipedia.org/wiki/Autonomic_computing): the system runs a **MAPE-K** loop — Monitor, Analyze, Plan, Execute over a shared Knowledge base — so that operating your agent fleet is, as much as the evidence allows, self-managing rather than hand-driven.

### The control-plane mapping

Each classic control-plane role maps to a shipped nexus-agents component — the metaphor is load-bearing, not decoration:

| Control-plane role | nexus-agents component…
