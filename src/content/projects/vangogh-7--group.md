---
repo: "VanGogh-7/Group"
name: "Group"
description: "The agent underlying development framework in Rust."
readmeQualityOk: true
url: "https://github.com/VanGogh-7/Group"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 49
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-23T21:00:46Z"
lastCommitAt: "2026-09-18T08:26:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 23
maintainers: ["VanGogh-7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e130337597b8d6f43ad12b2d821de1defa95b2994ff52dbdeed0c5ba702e8454/VanGogh-7/Group"
---

# Group

Group is a strongly typed, asynchronous, durable state-graph runtime for Rust
agents.

It gives applications deterministic graph execution, provider-neutral chat
types, local and MCP-backed Tool execution, and opt-in durability without
coupling the Core runtime to a provider SDK or database.

## Current status

The Runtime, Durable, Model, and Tool base contracts have completed a full
repository architecture review and are intended for compatibility-first
evolution.

Genai and MCP adapter configuration surfaces remain experimental because they
are coupled to fixed upstream releases and evolving protocol behavior.

The repository now also contains the experimental `group-agent-prebuilt`
non-streaming Tool-calling loop. Its public API is not yet a stable
compatibility commitment.

Phase 2 release preparation was completed for the historical clean candidate
`9b069d430cae02e74134f37edb8d05b83c2cc6c7`: the full local verification
matrix, all eight clean package-archive audits, and both required hosted CI jobs
passed for that exact commit. For any later candidate containing this README,
acceptance requires those same gates to bind Git identity, archive source,
hosted CI, and…
