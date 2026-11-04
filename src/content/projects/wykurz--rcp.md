---
repo: "wykurz/rcp"
name: "rcp"
description: "Tools for working with large filesets"
readmeQualityOk: true
url: "https://github.com/wykurz/rcp"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [57, 37]
stars: 14
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-06-17T19:58:22Z"
lastCommitAt: "2026-11-04T02:57:20Z"
lastReleaseAt: "2024-06-06T04:17:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 68
maintainers: ["wykurz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf6658ed595b831da92b7b9caa9c7b4fde9f6346c39a7a528e174929e050a334/wykurz/rcp"
---

# RCP TOOLS

This repo contains tools to efficiently copy, remove and link large filesets, both locally and
across remote hosts.

[Website](https://www.wykurz.org/rcp/) · [Performance reports](https://www.wykurz.org/rcp/reports/)
· [Installation](#installation)

- `rcp` is for copying files; similar to `cp` but generally MUCH faster when dealing with large
  filesets.

  Supports both local and remote copying using `host:/path` syntax (similar to `scp`).

  Inspired by tools like `dsync`(1) and `pcp`(2).

- `rrm` is for removing large filesets.

- `rchm` is for recursively changing permissions and ownership of large filesets; a fast replacement
  for `dchmod`(3).

- `rlink` allows hard-linking filesets with optional update path; typically used for hard-linking
  datasets with a delta.

- `rcmp` tool is for comparing filesets.

- `filegen` tool generates sample filesets, useful for testing.

# Benchmarks

The [performance report](https://www.wykurz.org/rcp/reports/performance/) compares rcp with dcp, GNU
cp, and rsync across Lustre, Weka, NFS, XFS, and ZFS, remote transfers, and a Linux source tree. It
includes default settings, concurrency sweeps, SVG figures, and the complete…
