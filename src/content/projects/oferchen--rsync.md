---
repo: "oferchen/rsync"
name: "rsync"
description: "Classic rsync re-implementation in pure Rust"
url: "https://github.com/oferchen/rsync"
homepage: "https://github.com/oferchen/rsync"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 80
forks: 0
openIssues: 0
closedIssues: 60
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-09-21T14:40:40Z"
lastCommitAt: "2026-07-04T06:10:57Z"
lastReleaseAt: "2026-04-06T14:50:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 45
maintainers: ["oferchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7f339fbc6ea5fd18f812726cb6f483a7b9dc99b8477d74d1c109b7da1228509/oferchen/rsync"
fundingLinks: ["GITHUB:https://github.com/oferchen"]
---

# oc-rsync

`rsync` re-implemented in Rust. Wire-compatible with upstream rsync 3.4.4 (and back-compat with 3.4.3 / 3.4.2 / 3.4.1, protocol 32), works as a drop-in replacement.

Binary name: **`oc-rsync`** - installs alongside system `rsync` without conflict.

---

## Status

**Release:** 0.6.3 - Wire-compatible drop-in replacement for rsync 3.4.4 (and 3.4.3 / 3.4.2 / 3.4.1, protocols 28-32).

All transfer modes (local, SSH, daemon), delta algorithm, metadata preservation, incremental recursion, and compression are complete. Interop tested against upstream rsync 2.6.9, 3.0.9, 3.1.3, 3.4.1, 3.4.2, 3.4.3, and 3.4.4. Upstream rsync's own `testsuite/*.test` corpus runs in CI against `oc-rsync` as `$RSYNC` - all tests now pass (known-failures roster is empty).

| Component | Status |
|-----------|--------|
| **Transfer** | Local, SSH, daemon push/pull, daemon-over-remote-shell (`host::module`) |
| **Delta** | Rolling + strong checksums, block matching, parallel receive-delta pipeline |
| **Metadata** | Permissions, timestamps, ownership, ACLs (`-A`), xattrs (`-X`) |
| **File handling** | Sparse, hardlinks, symlinks, devices, FIFOs |
| **Deletion** | `--delete`…
