---
repo: "SARDONYX-sard/d-merge"
name: "d-merge"
description: "High-Speed Nemesis & FNIS Patcher + .hkx development tools"
readmeQualityOk: true
url: "https://github.com/SARDONYX-sard/d-merge"
homepage: "https://www.nexusmods.com/skyrimspecialedition/mods/152190"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["skyrim-special-edition", "havok-animation", "patcher"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-09-23T03:34:17Z"
lastCommitAt: "2026-11-09T04:34:32Z"
lastReleaseAt: "2025-07-08T11:59:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["SARDONYX-sard", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d1a8ecf80397446ca6f996a2a261a45b856779d7c2b3d404e5f1b0143168e9/SARDONYX-sard/d-merge"
---

# D Merge(Diff & Merge) hkx patcher

NOTE: DMerge has fully adopted Claude Code starting with v3.0.0. The last version written mostly by hand is 2.8.0.

  

  

## Release

- [Click assets](https://github.com/SARDONYX-sard/d-merge/releases)

## Intended Use of Automatic Settings File Loading

The load order configuration file is automatically loaded each time the application runs.

It is written to <skyrim data dir>/.d_merge/d_merge_settings.json immediately before the application closes.

By utilizing this behavior as follows, settings will be automatically loaded and updated whenever you switch profiles.

```txt
D:/MO2/mods/
├── d_merge_windows_egui/
│       ├── .d_merge/
│       │    └── translation.json
│       ├── assets/                        <- templates files dir
│       ├── interface/                     <- dummy dir
│       └── d_merge.exe               <- main exe
│
├── male_profile_dir/
│       ├── meshes/
│       └── .d_merge/
│             └── d_merge_settings.json    <- (output_dir: D:/MO2/mods/male_profile_dir)
│
└── female_profile_dir/
           ├── meshes/
           └── .d_merge/
                  └── d_merge_settings.json <- (output_dir:…
