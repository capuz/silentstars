---
repo: "numan-cli/numan"
name: "numan"
description: "The missing package management layer for Nushell. Brings verified registry support, lockfiles, and managed autoloading to plugins, modules, scripts, and completions."
readmeQualityOk: true
url: "https://github.com/numan-cli/numan"
homepage: "https://numan-cli.github.io/numan-registry/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "nushell", "package-manager", "rust", "cross-platform", "lockfile", "nupm", "nushell-plugin", "reproducibility", "reproducible-builds"]
stars: 5
forks: 0
openIssues: 8
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-06-27T11:23:27Z"
lastCommitAt: "2026-10-24T08:08:16Z"
lastReleaseAt: "2026-08-16T11:53:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 63
maintainers: ["tonythethompson", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2b8fb6f74a958c2f6d81ee18370fc16897fcd1dda548a86dec07586fa879af5/numan-cli/numan"
fundingLinks: ["GITHUB:https://github.com/tonythethompson", "KO_FI:https://ko-fi.com/trackdub"]
discussionCount: 0
---

# numan

**numan** is a cross-platform package manager for [Nushell](https://www.nushell.sh/). It installs plugins, modules, scripts, and completion packages from signed registries, verifies downloaded artifacts, and records immutable install state in a lockfile.
Packages remain inert after installation. Plugins and modules are only registered with Nushell when you explicitly run `numan activate`; hook packages require the separate `numan hook enable` command.

Built in Rust for Linux, macOS, and Windows.

---

## About

Nushell has a growing ecosystem of community packages, but managing them across machines, Nu versions, and operating systems remains difficult.

nupm handles local package installation well. Registry-based workflows also need artifact verification, reproducible lockfiles, platform-aware resolution, and activation that remains safe across Nushell upgrades.

numan provides those guarantees:

| Concern | How numan handles it |
| -------- | ---------------------- |
| **Trust** | Verifies registry indexes with Ed25519 signatures, includes a built-in trust root for the `official` registry, and validates plugin binaries with SHA-256 |
| **Reproducibility** | Lockfile v2…
