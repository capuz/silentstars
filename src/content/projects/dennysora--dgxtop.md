---
repo: "DennySORA/dgxtop"
name: "dgxtop"
description: "Rust terminal monitor for NVIDIA GPUs, Linux systems, and DGX Spark, with per-process memory views and persistent GPU job history."
readmeQualityOk: true
url: "https://github.com/DennySORA/dgxtop"
homepage: "https://dennysora.me/en/projects/tools/dgxtop/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["rust", "tui", "gpu-monitoring", "nvml", "nvidia", "dgx-spark", "linux", "process-monitor"]
stars: 106
forks: 11
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-03T15:36:47Z"
lastCommitAt: "2026-11-16T11:56:23Z"
lastReleaseAt: "2026-10-11T04:59:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 43
maintainers: ["DennySORA"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9dcc72fb027ff9b8a491c00954577737fa4393ddeb74363282d56c9d36190fc/DennySORA/dgxtop"
discussionCount: 0
---

# dgxtop

**A terminal monitor for NVIDIA GPUs on Linux and DGX Spark**

Every GPU, each job's share of its memory and the whole machine on one screen,<br>
plus a record of every GPU job from start to end, including how it ended.

[繁體中文](https://github.com/DennySORA/dgxtop/blob/HEAD/docs/README.zh-TW.md) · [日本語](https://github.com/DennySORA/dgxtop/blob/HEAD/docs/README.ja.md) · [Project page](https://dennysora.me/en/projects/tools/dgxtop/) · [How it works](https://dennysora.me/en/projects/tools/dgxtop/#architecture)

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/DennySORA/dgxtop/main/install.sh | bash
```

Linux on x86_64 or aarch64 with glibc 2.34 or newer (Ubuntu 22.04, Debian 12, RHEL 9 and later),
DGX Spark included. WSL 2 runs the Linux build. GPU metrics need the NVIDIA driver; without it, CPU,
memory, disks and network still work. WSL 1, musl, macOS and Windows are not supported.

The installer picks the build for your CPU, checks it against the release's `SHA256SUMS` and
installs it to `~/.local/bin`. The previous version is kept, and `./install.sh --rollback` brings
it back. For a specific release, append `-s -- --version v2.6.0` to `bash`.

Or build…
