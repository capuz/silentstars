---
repo: "alplabai/signex"
name: "signex"
description: "Open-source, AI-first EDA tool — GPL licenced or Industry Lead EDA tools compatible schematic and PCB editor built in Rust Language"
readmeQualityOk: true
url: "https://github.com/alplabai/signex"
homepage: "https://signex.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["altium", "eda", "electronics", "hardware", "kicad", "open-source", "pcb", "rust", "schematic", "gui"]
stars: 241
forks: 28
openIssues: 184
closedIssues: 1047
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2026-04-06T14:57:12Z"
lastCommitAt: "2026-11-20T11:22:44Z"
lastReleaseAt: "2026-04-29T17:01:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 32
maintainers: ["alpelectronics", "alpCaner", "hkngln"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb2dd030a90ae63d4fbbdf7d319e8367e9d8c625bdde52bad40e67d5b3b5a008/alplabai/signex"
discussionCount: 1
---

Source-available, AI-first electronics design automation

---

Signex is source-available electronics design automation built in Rust, with
GPU-accelerated rendering through wgpu. Release 26.11.0 ships a **schematic
editor** and a **PCB editor**: from the schematic to a routed, rule-checked
board and its fabrication files. Symbol, footprint and component-library
editors and a board 3D view come with it at an earlier stage. Simulation and the
plugin system are on the [roadmap](https://github.com/alplabai/signex/blob/HEAD/docs/ROADMAP.md). Native file
formats (`.snxsch`, `.snxpcb`) are line-diffable in git and ~5× smaller than
the equivalent JSON.

**New here?** Install a package (see [Download](#download)), then follow the
**[User Guide](https://github.com/alplabai/signex/blob/HEAD/docs/USER_GUIDE.md)**: it takes you from **File ▸ New Project**
to a saved schematic and an exported PDF.
