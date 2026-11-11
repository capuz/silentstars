---
repo: "anivar/decern"
name: "decern"
description: "Deterministic authorization + tamper-evident audit for AI agents, humans, and workloads — one principal type, safety invariants machine-checked by an SMT solver (cvc5), every decision independently verifiable offline. Pure Rust."
readmeQualityOk: true
url: "https://github.com/anivar/decern"
homepage: "https://decern.anivar.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["access-control", "agentic", "agents", "audit", "authorization", "authz", "cedar", "formal-verification", "rust", "tamper-evident"]
stars: 14
forks: 3
openIssues: 48
closedIssues: 104
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2026-08-02T08:47:16Z"
lastCommitAt: "2026-11-11T11:20:22Z"
lastReleaseAt: "2026-10-20T16:57:39Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["anivar", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1319971099/05947f18-2fc7-438c-935a-024f0b31502d"
fundingLinks: ["GITHUB:https://github.com/anivar"]
discussionCount: 8
---

# decern

An authorization decision point that records. Every decision for an agent, a human or a
workload — one principal type, one pure function of `(principal, authority graph, policy,
now)` — is written to an Ed25519-signed, hash-chained ledger **before it is served**, and
anyone holding its public key can verify a ledger kept in files offline; checked against a
tree head published where the operator cannot reach, a single-file ledger also shows that
nothing up to that head was dropped or rewritten. The model's safety invariants
are **machine-checked over its whole symbolic input space**, not tested on examples, by
Cedar's Lean-verified symbolic compiler ([cedar-policy-symcc](https://crates.io/crates/cedar-policy-symcc))
and the cvc5 solver. What that covers, and what it deliberately does not, is
[stated precisely](https://github.com/anivar/decern/blob/HEAD/docs/CLI.md#what-proven-covers).

[Website](https://decern.anivar.net/) · [Commands](https://github.com/anivar/decern/blob/HEAD/docs/CLI.md) · [Roadmap](https://github.com/anivar/decern/blob/HEAD/ROADMAP.md) ·
[Releases](https://github.com/anivar/decern/releases) ·…
