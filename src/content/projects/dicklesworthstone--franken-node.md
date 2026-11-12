---
repo: "Dicklesworthstone/franken_node"
name: "franken_node"
description: "Trust-native JavaScript/TypeScript runtime platform built on franken_engine with deterministic compatibility, migration autopilot, extension trust controls, and incident replay."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_node"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["cli", "developer-tools", "javascript", "migration", "observability", "runtime", "rust", "security", "supply-chain-security", "typescript"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-19T00:56:35Z"
lastCommitAt: "2026-11-12T11:38:55Z"
lastReleaseAt: "2026-10-04T14:27:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["Dicklesworthstone", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0df992b6eb35dfa536198e50de5878f006d223f33f5024a7a118220e901f352a/Dicklesworthstone/franken_node"
---

# franken_node

`franken-node` is a **trust-native JavaScript/TypeScript runtime platform** for
extension-heavy systems. It pairs Node/Bun ecosystem velocity with deterministic
security controls, cryptographically-grounded trust operations, and replayable
incident forensics.

```bash
# One-line installer (Linux / macOS)
curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/franken_node/main/install.sh | bash
```

> [!IMPORTANT]
> **Status: pre-1.0.** The CLI surface and the on-the-wire JSON shapes
> (decision receipts, trust cards, replay verdicts, counterfactual reports,
> incident bundles) are stable and covered by golden tests. Internal Rust
> APIs and feature-gated modules may still break between versions. See
> [Stability](#stability) for the full breakdown.

---

## A concrete scenario

It's Tuesday. A transitive npm dependency in your build was published 14
days ago by a brand-new publisher whose username is 2 characters off a
popular library. The package's behavior has slowly drifted in the last
three minor releases.

Under your current stack: the typosquat scanner flags it tomorrow; your
package-lock pinned the new version yesterday; the egress check runs at…
