---
repo: "ConaryLabs/Conary"
name: "Conary"
description: "Cross-distro Linux package manager preserving RPM, DEB, and Arch lifecycle semantics through one atomic, content-addressed transaction model with rollback. Rust. Early preview."
readmeQualityOk: true
url: "https://github.com/ConaryLabs/Conary"
homepage: "https://conary.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["arch-linux", "content-addressable-storage", "deb", "immutable-infrastructure", "linux", "package-manager", "rpm", "rust", "sat-solver", "system-management"]
stars: 5
forks: 0
openIssues: 90
closedIssues: 277
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-11-14T19:15:54Z"
lastCommitAt: "2026-08-28T12:22:38Z"
lastReleaseAt: "2026-07-02T10:29:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 68
maintainers: ["TusanHomichi"]
openGraphImageUrl: "https://opengraph.githubassets.com/784e079e11fb156addd738244828afecbf6f2de6a39254258f3e62cd45602c43/ConaryLabs/Conary"
discussionCount: 0
---

# Conary

**Website:** [conary.io](https://conary.io) | **Packages:** [remi.conary.io](https://remi.conary.io) | **Discussions:** [GitHub Discussions](https://github.com/ConaryLabs/Conary/discussions)

## Release Channels

| Channel | Current state | Authority |
| --- | --- | --- |
| Development head | Root [`Cargo.toml`](https://github.com/ConaryLabs/Conary/blob/HEAD/Cargo.toml) `[workspace.package]` version | Repository source authority |
| Latest published, artifact-verified release | [Latest immutable GitHub release](https://github.com/ConaryLabs/Conary/releases/latest) | [Release artifact matrix](https://github.com/ConaryLabs/Conary/blob/HEAD/docs/operations/release-artifact-matrix.md) |
| Current external tester pin | **None** | W7 passed; assignment waits for the signed public universe, daily-driver floor, synchronized release, and launch proof in [launch status](https://github.com/ConaryLabs/Conary/blob/HEAD/docs/roadmaps/launch-status.json) |

Conary is a cross-distro package manager for Linux, written in Rust. It
installs RPM, DEB, Arch, and native CCS packages on Fedora, Ubuntu, and Arch
hosts: an RPM keeps exact RPM lifecycle and dependency semantics on Ubuntu or
Arch,…
