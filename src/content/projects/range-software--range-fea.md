---
repo: "Range-Software/range-fea"
name: "range-fea"
description: "Range Software - Finite Element Analysis"
readmeQualityOk: true
url: "https://github.com/Range-Software/range-fea"
homepage: "https://www.range-software.com"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["finite-element-analysis", "cae", "cad", "computational-fluid-dynamics", "cfd", "stress", "heat-transfer", "simulation", "engineering", "electromagnetics"]
stars: 48
forks: 22
openIssues: 0
closedIssues: 5
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2018-04-23T08:37:41Z"
lastCommitAt: "2026-11-11T19:49:35Z"
lastReleaseAt: "2019-05-31T16:08:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["tomas-soltys"]
openGraphImageUrl: "https://opengraph.githubassets.com/555e2477281ad108b1e5cd25f4ccb429b973a5c8a2e900c625d86c4a08e93545/Range-Software/range-fea"
---

# Range Software - FEA

Range FEA is an open-source desktop application for computer-aided engineering using the Finite Element Method. It provides an integrated environment for mesh generation, simulation setup, and 3D visualisation of results across a range of physics domains — including structural stress, heat transfer, fluid dynamics, acoustics, electrostatics, and magnetostatics.

The application is built on Qt6 and ships with a standalone CLI solver (`fea-solver`) alongside the main GUI (`fea`). Mesh generation uses the embedded TetGen library for automatic tetrahedral meshing.

## Help and tutorials

1. [General help](https://github.com/Range-Software/range-fea/blob/HEAD/src/fea/help/general/en/general_index.md)
2. [Tutorials](https://github.com/Range-Software/range-fea/blob/HEAD/src/fea/help/tutorials/en/tutorial_index.md)

## Prepare build environment
Initialize all submodules
```
git submodule update --init --recursive
```
The following command will attempt to download and install all required packages, therefore it must be executed under a privileged (root) user
```
sudo ./src/range-build-tools/prereqs.sh
```
_NOTE: In case your OS does not provide you with Qt version…
