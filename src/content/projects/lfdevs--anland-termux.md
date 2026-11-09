---
repo: "lfdevs/anland-termux"
name: "anland-termux"
description: "Use Anland in Termux (especially Termux native, PRoot and Chroot)"
readmeQualityOk: true
url: "https://github.com/lfdevs/anland-termux"
language: "Java"
languages: ["Java"]
languagePcts: [68]
topics: ["android", "chroot", "freedreno", "linux", "plasma", "proot", "termux", "turnip", "wayland"]
stars: 145
forks: 13
openIssues: 19
closedIssues: 24
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2026-06-22T14:15:53Z"
lastCommitAt: "2026-11-09T11:58:55Z"
lastReleaseAt: "2026-10-14T16:34:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 88
undervaluedScore: 29
maintainers: ["lfdevs", "superturtlee", "Goldzxcbug"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f4639201ab14aaf6b6bc92ab4003e6efa6eebb8d50a063d7bd54f4b58732a86/lfdevs/anland-termux"
discussionCount: 6
---

# Anland: Termux

**English** | [中文](https://github.com/lfdevs/anland-termux/blob/HEAD/README_zh.md)

---

Use [Anland](https://github.com/SuperTurtleDev/anland/tree/legacy) in Termux, including **Termux native** and **PRoot/Chroot/LXC** containers.

## Features

* Supports Termux native environments and PRoot containers. This means you can experience an Anland-powered Wayland desktop even if your device is not rooted.
* Provides ready-to-use [PRoot-Distro](https://github.com/termux/proot-distro) container images built through automated Docker workflows.
* Supports hardware acceleration with the Freedreno and Turnip drivers on devices with Qualcomm Snapdragon processors.
* Supports hardware video decoding and encoding through [Termux:VA](https://github.com/lfdevs/termux-va). You can follow this guide to try it out: [Termux:VA User Guide](https://github.com/lfdevs/termux-va/blob/main/doc/user-guide.md)

## Compatibility

### Wayland compositor support

| | KWin | Weston | Mutter |
| :---: | :---: | :---: | :---: |
| Termux native | ✔️ | ✔️ | ✔️ |
| Debian 13 | ✔️ | ✔️ | ✔️ |
| Ubuntu 26.04 LTS | ✔️ | ✔️ | ✔️ |

### Processor support

* Most mainstream Qualcomm Snapdragon processors…
