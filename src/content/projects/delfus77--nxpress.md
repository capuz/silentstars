---
repo: "DeLFuS77/NXPress"
name: "NXPress"
description: "Compress and decompress Nintendo Switch NSP, XCI and SuperNSP files to NSZ and XCZ: one program for Windows, macOS and Linux, with a window and a command line compatible with nsz."
readmeQualityOk: true
url: "https://github.com/DeLFuS77/NXPress"
homepage: "https://github.com/DeLFuS77/NXPress/releases/latest"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["cli", "compression", "cross-platform", "decompression", "desktop-app", "fat32", "golang", "linux", "macos", "nintendo-switch"]
stars: 50
forks: 1
openIssues: 2
closedIssues: 112
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-10-22T14:39:58Z"
lastCommitAt: "2026-11-20T12:00:21Z"
lastReleaseAt: "2026-11-03T08:44:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["DeLFuS77"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1429872340/31052d90-a632-4caf-ba8f-8c5d3c010b25"
---

# NXPress

Compresses and decompresses Nintendo Switch NSP and XCI files to NSZ and XCZ, multi-title files (SuperNSP) included. It writes standard NSZ and XCZ, the same format nsz writes, so installers read them as usual.

💬 Questions, ideas or news of new versions? Join the [Discord server](https://discord.gg/acQVZSEBR), shared with [Switch Library Manager Web](https://github.com/DeLFuS77/switch-library-manager-web).

It is one program with no Python or other dependencies. Opened with no arguments it shows a window: drop files or folders on it, choose what to do and start. With arguments it is a command line that takes the same options as nsz, so it can replace it in scripts and in tools that call nsz.

## Download

The program for Windows, macOS (Apple chip or Intel) and Linux (PC or ARM) is on the [releases page](https://github.com/DeLFuS77/NXPress/releases/latest). It needs your own `prod.keys`, dumped from your own console; none is included. Tested with DBI.
