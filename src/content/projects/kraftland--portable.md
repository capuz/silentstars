---
repo: "Kraftland/portable"
name: "portable"
description: "Fast, private, modern sandbox designed for desktop Linux"
readmeQualityOk: true
url: "https://github.com/Kraftland/portable"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["dbus", "sandbox", "accessibility", "linux", "security", "systemd", "privacy", "fast", "user-friendly"]
stars: 95
forks: 11
openIssues: 2
closedIssues: 115
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2024-11-11T03:36:51Z"
lastCommitAt: "2026-09-08T08:15:40Z"
lastReleaseAt: "2024-11-30T04:49:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["Kimiblock"]
openGraphImageUrl: "https://opengraph.githubassets.com/57431f3bc8b715958a2f426b9ac93c14bc9dbf66addfad1c5474a7ec447c1f9a/Kraftland/portable"
discussionCount: 2
---

# Abstract
Portable is a sandbox framework targeted for Desktop usage and offers ease of use for distro packagers, which should work on most recent systems:

- enables unprivileged user namespaces
- uses systemd >=258
- has libseccomp >= 2.6
- a thread-safe libudev implementation (systemd-udevd is)
- has landlock ABI 8 and above (Linux kernel >= 7.0)
- Follows the [FHS (Filesystem Hierarchy Standard)](https://specifications.freedesktop.org/fhs/latest/)
	- Note that `/lib` `/lib64` `/bin` `/sbin` should be symlinks to their respective locations under `/usr`

- Does not have mount points under /usr/bin, and use a supported fs of OverlayFS (NOT BcacheFS)

This is a rewrite of a rewrite of Portable!
- For the legacy Go version, see `legacy-go` branch.
- For the original Bash version, see `legacy` branch.

Portable has companion projects for packaging and sandboxing:
| Project       | Descripton      |
| ------------- | -------------   |
| [Init](https://github.com/Kraftland/portable-init) | Sandbox PID 1 supervisor |
| [StashPak](https://github.com/Kimiblock/stashpak) | Build a Portable package for Arch Linux |
| [Packer](https://github.com/Kimiblock/portable-packer) | Packaging…
