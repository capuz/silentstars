---
repo: "cordum-io/cordum-packs"
name: "cordum-packs"
description: "Official pack bundles and the public catalog for Cordum."
readmeQualityOk: true
url: "https://github.com/cordum-io/cordum-packs"
homepage: "https://cordum.io/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [70, 29]
topics: ["ai", "ai-agents", "governance", "llm", "workflows"]
stars: 5
forks: 5
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-12T15:36:50Z"
lastCommitAt: "2026-10-18T08:16:05Z"
lastReleaseAt: "2026-04-30T13:01:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 50
maintainers: ["dependabot[bot]", "yaront1111", "bigboycoder1"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a7a75e72896aec27fae5e01ad5270a0eeb1220328af95fb4b51cec507426749/cordum-io/cordum-packs"
---

# Cordum Packs

The official catalog of Cordum packs: versioned, production-grade bundles and
runtime code that make workflows safe to operate in real systems.

Cordum is an AI agent orchestration platform with built-in brakes. It sits
between agents and tools to enforce policy-before-dispatch, approval gates for
risky actions, and full auditability. Packs bring those guarantees to
integrations and workflows so teams can move from proof-of-concept to
production with confidence.

## Protocol

All packs implement the [Cordum Agent Protocol (CAP)](https://github.com/cordum-io/cap) — the open wire protocol for distributed AI agent governance. Packs are CAP-native workers that communicate via `BusPacket` envelopes over NATS, with built-in safety gating and policy enforcement.

The reference control plane is [Cordum](https://github.com/cordum-io/cordum).

## From PoC to production

Most teams get stuck at the trust gap: agents can do the work, but governance,
approvals, and audit trails are missing. Packs close that gap by shipping
deterministic, policy-gated workflows and the runtimes that execute them.
Deterministic core, autonomy at the edges.

## Why teams use packs

- **Policy gate…
