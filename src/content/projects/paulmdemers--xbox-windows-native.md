---
repo: "PaulMDemers/xbox-windows-native"
name: "xbox-windows-native"
description: "Native Windows 2000 on original Xbox: loader, HAL, drivers and bounded hardware diagnostics"
readmeQualityOk: true
url: "https://github.com/PaulMDemers/xbox-windows-native"
language: "Python"
languages: ["Python", "C"]
languagePcts: [59, 33]
stars: 42
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-03T22:05:16Z"
lastCommitAt: "2026-10-29T05:49:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["PaulMDemers"]
openGraphImageUrl: "https://opengraph.githubassets.com/817a6f7ed4c81eb779eb2743a04322ea9d426aa3d11149a9e6d924ae401f5975/PaulMDemers/xbox-windows-native"
---

# Native Windows 2000 on the original Xbox

This project adapts open-source bootloaders, a hardware abstraction layer (HAL),
and device drivers so Windows 2000 can run directly on the original Xbox's CPU.
It combines FATX storage, software-rendered graphics, AC'97 audio and desktop
input. xemu is a separate development/test environment; the physical console
runs Windows natively.

The integrated demo is usable for desktop applications on the tested 64 MiB,
Conexant-equipped Xbox. **720p is recommended:** text and full-window dragging
were confirmed clean on the test display. The 1080i path boots, but its text and
motion defects remain unresolved. Graphics are software-rendered, without
native GPU acceleration.

## Start here

- **[Current status and guide map](https://github.com/PaulMDemers/xbox-windows-native/blob/HEAD/docs/current-status.md)** — capabilities, remaining work and latest engineering handoff
- **[External tester quick start](https://github.com/PaulMDemers/xbox-windows-native/blob/HEAD/docs/testers.md)** — hardware report, installation checklist and results
- [How it works and what we…
