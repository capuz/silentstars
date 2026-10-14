---
repo: "acyclic-labs/sdk"
name: "sdk"
description: "Open-source Acyclic SDK and in-memory reference providers"
readmeQualityOk: true
url: "https://github.com/acyclic-labs/sdk"
homepage: "https://acyclic.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["agents", "fork-join", "protobuf", "rust", "sdk", "typescript", "agent-swarm", "claude-code", "multi-agent"]
stars: 33
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-09-03T02:20:10Z"
lastCommitAt: "2026-10-14T08:58:13Z"
lastReleaseAt: "2026-09-29T05:49:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["Var1377", "ramstar3000"]
openGraphImageUrl: "https://opengraph.githubassets.com/40978fcb560314ab24d7282b81e4ca63f25ceaab4bd8f82bd493153a686933d7/acyclic-labs/sdk"
discussionCount: 0
---

# Acyclic SDK

**Rapid agent swarms. Make any agentic workflow exponentially faster.**

Acyclic Labs builds rapid agent swarms. Hand a task to a swarm and it fans the work out across many agents, each in its own sandbox, then merges what they produce, so long agentic workflows finish exponentially faster. The harness is open source and works without managed hosting; for managed swarms, see [acyclic.dev](https://acyclic.dev/agents).

[Managed Agents](https://acyclic.dev/agents) is the hosted composition of the open-source Acyclic harness. It does not introduce a separate agent loop, and nothing about forking, recursion or durable execution is reserved for the hosted version.

The Acyclic SDK is the open contract and composition layer for building recursive,
fork-join agent systems. It contains the Rust harness, public service interfaces,
customer-machine implementations, conformance suites, and TypeScript packages.

This repository contains a public release candidate. APIs remain pre-release
until their family version is published and tagged.

## Open-source boundary

Everything shipped to or executed on a customer's machine belongs in this
Apache-2.0 repository. Private…
