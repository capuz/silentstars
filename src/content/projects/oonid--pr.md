---
repo: "oonid/pr"
name: "pr"
description: "Android app that runs Linux distributions via [proot](https://github.com/proot-me/proot) — no root, no Termux required. pr: ptrace-based root."
readmeQualityOk: true
url: "https://github.com/oonid/pr"
language: "C"
languages: ["C", "Rust"]
languagePcts: [52, 29]
topics: ["chroot", "linux", "proot", "proot-android", "proot-distro", "ptrace", "userland-exec"]
stars: 12
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T07:28:37Z"
lastCommitAt: "2026-11-09T03:31:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 55
maintainers: ["oonid"]
openGraphImageUrl: "https://opengraph.githubassets.com/2094fb07df35dd3e19841c0467a4217f472d1df88715f3f65a6d47c2853c33cc/oonid/pr"
---

# pr

Android app that runs Linux distributions via [proot](https://github.com/proot-me/proot) — no root, no Termux required.

## What it does

- Install and run Linux distributions on any Android device: the list offers Alpine, Debian, Fedora and Ubuntu, and the custom-image card installs any OCI image, with Manjaro, openSUSE and Rocky Linux one tap away under **Images** (see [Supported distributions](#supported-distributions))
- Native OCI container image support (`docker.io/library/...`, by tag or pinned as `name[:tag]@sha256:<digest>`): manifests and layers are checked against their digests, and the layer cache is verified before reuse
- Hard links in an image are stored once, the way proot's link2symlink stores them, instead of as copies: a fresh Ubuntu container takes about 130 MB instead of 1.2 GB
- Downloads cope with slow and flaky networks: a stall timeout instead of a limit on the whole transfer, retries with a growing delay, a renewed registry token for long pulls, and archives that enter the cache only when complete
- Background sessions: a session keeps running after its screen closes, for example a long-running agent or server, under a `specialUse` foreground…
