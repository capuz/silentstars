---
repo: "GiulioCocconi/SILICON"
name: "SILICON"
description: "Simulation of Interconnected Logical Inputs, Circuits, and Output Nodes"
readmeQualityOk: true
url: "https://github.com/GiulioCocconi/SILICON"
homepage: "https://giuliococconi.github.io/SILICON/"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-15T15:48:41Z"
lastCommitAt: "2026-09-30T09:57:22Z"
lastReleaseAt: "2026-05-26T21:32:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 75
maintainers: ["GiulioCocconi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca98993a26ab7e7d52c7574cb2b984608f38e52f11947457b608ac7f778743b/GiulioCocconi/SILICON"
---

An Open Source Suite for simulating Circuits, Finite State Machines and Microcontrollers (WIP)

_Package repository hosting is graciously provided by [Cloudsmith](https://cloudsmith.com).
Cloudsmith is the only fully hosted, cloud-native, universal package management solution, that
enables your organization to create, store and share packages in any format, to any place, with total
confidence._

_Currently sponsored by UniGe_

## TODOs

Since it's a pre-alpha product, there are quite a lot of things to be done:

A roadmap (+ various diagrams/ideas) is available [here](https://www.canva.com/design/DAGqb7QaA-w/_ld_l41b__KKIG6wlUhFLg/view), written partly in Italian.
_Common_

- [X] GUI with QT6:
    * [X] Implement logic for moving graphicalWires,
    * [X] Use [QSettings](https://doc.qt.io/qt-6/qsettings.html) to save user preferences
- [ ] MacOS support
- [X] Documentation
    * [ ] User docs
- [X] CI/CD
    * [X] [GitHub Actions](https://github.com/features/actions)
    * [X] Multi-OS support (_kinda done: windows builds are now supported_)
        * [ ] Deployment (setup packages for Win & Mac). See [here](https://www.qt.io/blog/cmake-deployment-api).

_Logic circuits (Silicon…
