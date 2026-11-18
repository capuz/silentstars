---
repo: "yuvichh/mux"
name: "mux"
description: "Fast, verified copy and sync of files and folders between machines, folders and web addresses. Every machine that downloads also serves. One Rust binary and library."
readmeQualityOk: true
url: "https://github.com/yuvichh/mux"
language: "Rust"
languages: ["Rust", "Lean"]
languagePcts: [78, 22]
topics: ["blake3", "cli", "file-distribution", "file-transfer", "machine-learning", "p2p", "peer-to-peer", "quic", "rust", "swarm"]
stars: 7
forks: 0
openIssues: 12
closedIssues: 34
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-08-31T19:42:09Z"
lastCommitAt: "2026-11-18T12:06:48Z"
lastReleaseAt: "2026-11-15T08:55:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 76
maintainers: ["yuvichh"]
openGraphImageUrl: "https://opengraph.githubassets.com/f834a312fe45ef20d60b043c256be2c7786aacee72509e77c43c28bca6e2c546/yuvichh/mux"
---

**Copy large files and directories to many machines at once.**

[How it works](https://github.com/yuvichh/mux/blob/HEAD/docs/how-it-works.md) ·
[Architecture](https://github.com/yuvichh/mux/blob/HEAD/docs/architecture.md) ·
[Protocol](https://github.com/yuvichh/mux/blob/HEAD/docs/protocol.md) ·
[Performance](https://github.com/yuvichh/mux/blob/HEAD/docs/performance.md) ·
[Contributing](https://github.com/yuvichh/mux/blob/HEAD/CONTRIBUTING.md)

mux is a command-line tool and Rust library that copies large files and
directories, such as model weights, datasets, build outputs and disk images,
from one machine to many. Every machine that is downloading also serves the
parts it already has, so the tenth machine does not wait on the first. It is
a single binary: there is no tracker, scheduler or database to run. It builds
and is tested on Linux, macOS and Windows.

```
 direct download                    mux

      source                        source ─── A ─── C
   ┌──┬──┼──┬──┐                       │   ╲   │   ╱ │
   A  B  C  D  E                       B ───── D ─── E

 five machines share one uplink     every machine is also a source
```
