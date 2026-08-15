---
repo: "folsomintel/fuse"
name: "fuse"
description: "Agent sandboxing"
readmeQualityOk: true
url: "https://github.com/folsomintel/fuse"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 5
forks: 1
openIssues: 8
closedIssues: 49
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-04T01:25:12Z"
lastCommitAt: "2026-08-15T04:05:13Z"
lastReleaseAt: "2026-07-20T06:58:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["andrewn6"]
openGraphImageUrl: "https://opengraph.githubassets.com/8825719307ce9cec4ba65ce29cd9afa497bb8f45bf747a933f3a60f64d167cc5/folsomintel/fuse"
---

# Fuse

**Sandboxed microVMs on your own hosts, driven by an API.**

Fuse is a control plane for Firecracker and QEMU microVMs. Register your hosts, describe a
workload in a `Fusefile`, and Fuse schedules it, boots the VM, and tracks the whole lifecycle
(provision, running, drain, destroy) with snapshots, fork, exec, live event streams, and
Prometheus metrics. CPU workloads run on Firecracker; GPU workloads run on QEMU hosts with
whole cards or MIG slices.

You bring the hosts. State lives in Postgres and on your disks, nowhere else.

## Install

```bash
brew install --cask folsomintel/fuse/fuse
```

Or without Homebrew, on macOS and Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/folsomintel/fuse/main/ops/install-fuse.sh | bash
```

The script verifies the release archive against the release's `checksums.txt` before
installing, and puts the binary in `/usr/local/bin` (or `~/.local/bin` if that is not
writable). Set `VERSION=vX.Y.Z` to pin a release, `FUSE_INSTALL_DIR` to choose where.

Upgrade with `brew upgrade --cask fuse`, check with `fuse --version`. You can also build
from a checkout with `go build -o bin/fuse ./cli`. Mind the naming: the `fuse_*` archives
are…
