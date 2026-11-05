---
repo: "alplabai/signex"
name: "signex"
description: "Open-source, AI-first EDA tool — GPL licenced or Industry Lead EDA tools compatible schematic and PCB editor built in Rust Language"
readmeQualityOk: true
url: "https://github.com/alplabai/signex"
homepage: "https://signex.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["altium", "eda", "electronics", "hardware", "kicad", "open-source", "pcb", "rust", "schematic", "gui"]
stars: 216
forks: 23
openIssues: 137
closedIssues: 766
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2026-04-06T14:57:12Z"
lastCommitAt: "2026-11-05T08:05:13Z"
lastReleaseAt: "2026-04-29T17:01:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 31
maintainers: ["alpCaner", "hkngln"]
openGraphImageUrl: "https://opengraph.githubassets.com/c62e5b00070a899c4b37ad36d7c21689c5293fdb3261c148ea9278d9a5cb0aa8/alplabai/signex"
discussionCount: 1
---

Open-source, AI-first electronics design automation

---

Signex is open-source EDA tooling built in Rust with GPU-accelerated
rendering and an Altium Designer-quality UI. Today it is a **schematic
editor** with symbol, footprint and component-library editors, ERC,
annotation, and PDF / BOM / netlist export. The PCB editor, 3D viewer,
simulation and plugin system are on the [roadmap](https://github.com/alplabai/signex/blob/HEAD/docs/ROADMAP.md), not in
the Community Preview. Native file formats (`.snxsch`, `.snxpcb`) are
line-diffable in git and ~5× smaller than the equivalent JSON.

**New here?** Install a package (see [Download](#download)), then follow the
**[User Guide](https://github.com/alplabai/signex/blob/HEAD/docs/USER_GUIDE.md)**: it takes you from **File ▸ New Project**
to a saved schematic and an exported PDF.

**Migrating from a GPL-based EDA tool?** The optional [import companion repository](https://github.com/alplabai/signex-kicad-import)
(GPL-3.0-or-later, distributed independently) converts
project files from GPL-based EDA tools to Signex's native
formats one-way. Run it once against your project; open the resulting
`.snxprj` in Signex.

**Migrating from Altium?**…
