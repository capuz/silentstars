---
repo: "andywmm9-pixel/xplane-g1000-nxi"
name: "xplane-g1000-nxi"
description: "A high-performance G1000 NXi glass cockpit (PFD/MFD) for X-Plane: one C++ avionics engine with a native XPLM plugin shell and a standalone desktop shell."
readmeQualityOk: true
url: "https://github.com/andywmm9-pixel/xplane-g1000-nxi"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 10
forks: 3
openIssues: 9
closedIssues: 51
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-06-10T18:46:17Z"
lastCommitAt: "2026-07-11T05:57:47Z"
lastReleaseAt: "2026-07-06T23:35:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 59
maintainers: ["andywmm9-pixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/1775abdd0adf1d0ad200c071f0b19724ecd8033adfee1fb2c565ae0fcb9b8252/andywmm9-pixel/xplane-g1000-nxi"
discussionCount: 1
---

# X-Plane G1000 NXi

> 🚫 **FOR FLIGHT SIMULATOR USE ONLY.** Under no circumstances should this
> software be used for real-life aviation, navigation, or flight operations of
> any kind. It is **not** a certified avionics device, contains no airworthiness
> guarantees, and must never be relied upon in an actual aircraft. This is a
> hobby project intended solely for use with flight simulators.

> ⚠️ **Work in progress — not complete.** This project is currently more of a
> proof of concept than a finished product. By no means is it complete, expect
> bugs, missing features, and rough edges. It is, however, actively planned to be
> finished.

A high-performance glass-cockpit (G1000-style PFD/MFD) for X-Plane, built as
**one C++ engine with two shells** so the same avionics code runs:

1. **Natively inside X-Plane** — an XPLM plugin drawn in the sim's render pass.
2. **As a standalone desktop program** — its own window + 60 fps loop, fed by
   X-Plane over the network.

Screenshots from the standalone shell (PFD in demo mode with the HSI Map layout,
TER Topo shading, and Nearest Airports window over the Colorado Rockies; MFD
Navigation Map with terrain shading and a multi-leg V134…
