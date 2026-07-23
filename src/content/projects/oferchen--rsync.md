---
repo: "oferchen/rsync"
name: "rsync"
description: "Classic rsync re-implementation in pure Rust"
readmeQualityOk: true
url: "https://github.com/oferchen/rsync"
homepage: "https://github.com/oferchen/rsync"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 86
forks: 1
openIssues: 0
closedIssues: 61
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-21T14:40:40Z"
lastCommitAt: "2026-07-23T06:15:30Z"
lastReleaseAt: "2026-04-06T14:50:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["oferchen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecf7d87a300b1646246da30f74566d811741fd85d7f600acf9c6ae05d04e0dee/oferchen/rsync"
fundingLinks: ["GITHUB:https://github.com/oferchen"]
---

# oc-rsync

`rsync` re-implemented in Rust. Wire-compatible with upstream rsync 3.4.4 (and back-compat with 3.4.3 / 3.4.2 / 3.4.1, protocol 32), works as a drop-in replacement.

Binary name: **`oc-rsync`** - installs alongside system `rsync` without conflict.

---

## Status

**Release:** 0.6.4 - Wire-compatible drop-in replacement for rsync 3.4.4 (and 3.4.3 / 3.4.2 / 3.4.1, protocols 28-32).

All transfer modes (local, SSH, daemon), delta algorithm, metadata preservation, incremental recursion, and compression are complete. Interop scenarios run in CI against upstream rsync 3.0.9, 3.1.3, and 3.4.4, with 2.6.9 built and cached for wire-byte regression coverage; 3.4.4 represents the whole 3.4.x series (3.4.1/3.4.2/3.4.3 share protocol 32 and are superseded by it). Upstream rsync's own `testsuite/*.test` corpus runs in CI against `oc-rsync` as `$RSYNC` - all tests now pass (known-failures roster is empty).

| Component | Status |
|-----------|--------|
| **Transfer** | Local, SSH, daemon push/pull, daemon-over-remote-shell (`host::module`) |
| **Delta** | Rolling + strong checksums, block matching, parallel receive-delta pipeline |
| **Metadata** | Permissions, timestamps,…
