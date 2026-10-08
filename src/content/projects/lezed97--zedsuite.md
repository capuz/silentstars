---
repo: "LeZed97/ZedSuite"
name: "ZedSuite"
description: "Free ECU map editor — any binary, automatic detection on VAG Bosch EDC15/EDC16. 100% local, open source. by ZedPerf"
readmeQualityOk: true
url: "https://github.com/LeZed97/ZedSuite"
homepage: "https://linktr.ee/zedperf"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 41]
topics: ["bosch", "chiptuning", "ecu", "rust", "tauri", "tdi", "tuning", "vag", "winols", "edc15"]
stars: 151
forks: 28
openIssues: 7
closedIssues: 39
watchers: 10
contributors: 7
recentReleases: 10
createdAt: "2026-08-17T14:16:44Z"
lastCommitAt: "2026-10-08T10:50:07Z"
lastReleaseAt: "2026-09-08T17:02:32Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 24
maintainers: ["LeZed97"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1337254336/229577e5-6f70-40db-9645-c7aaeb2f5191"
discussionCount: 4
---

# ZedSuite

**English** · [Français](https://github.com/LeZed97/ZedSuite/blob/HEAD/README.fr.md)

   

**Open source ECU map editor — 100% local, on Windows, macOS and Linux.**

Drop in a VAG-group Bosch EDC15/EDC16 dump and ZedSuite finds the maps for you — Driver Wish, Turbo Boost, N75, SOI, torque limiters and the rest. Edit them in a table, on a 2D graph or a 3D surface, or straight in the hexdump. Keep versions, compare them, disable or re-enable DTCs, fix the checksum, export your binary or a WinOLS mappack.

Any other ECU opens too, with the map definitions you bring: a WinOLS `.ols` project, a TunerPro `.xdf` or a JSON mappack. The editor, the hexdump and the versions work the same on those files — see [Bringing your own map definitions](#-bringing-your-own-map-definitions-beta), which is **beta**.

No account, no cloud, no limits: everything runs locally and your files stay on your computer.

## 🚗 ECUs detected automatically

| ECU | Detection |
|-----|-----------|
| Bosch EDC15P | pattern + codeblock based |
| Bosch EDC15VM+ | pattern + codeblock based |
| Bosch EDC16U1 | signature based |
| Bosch EDC16U31 | signature based |
| Bosch EDC16U34 | signature based |…
