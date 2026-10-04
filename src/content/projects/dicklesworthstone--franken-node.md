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
stars: 30
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-19T00:56:35Z"
lastCommitAt: "2026-10-04T09:59:33Z"
lastReleaseAt: "2026-05-29T03:52:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/7760114d23b11fee37cfd8c86550ec5ede054a89d824fec3c4d52ff0d8c4adb3/Dicklesworthstone/franken_node"
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
