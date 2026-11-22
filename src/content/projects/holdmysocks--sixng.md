---
repo: "holdmysocks/SixNG"
name: "SixNG"
description: "Asset extractor for your own GTA VI install (Xbox Series, RPF9): CLI and desktop app; models to glTF, textures, map data. GPL-3.0."
readmeQualityOk: true
url: "https://github.com/holdmysocks/SixNG"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 31
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-11-21T00:08:20Z"
lastCommitAt: "2026-11-22T02:07:14Z"
lastReleaseAt: "2026-11-21T23:00:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["holdmysocks", "vladbondarenko97", "Ahmet-Dedeler"]
openGraphImageUrl: "https://opengraph.githubassets.com/18f29d98977b290c2d7c214ee2905a09b754880e47a1772f92e7b67957ba0c93/holdmysocks/SixNG"
---

# SixNG Extractor

An asset extractor for your own GTA VI install (Xbox Series build, RPF9
archives). It is meant for personal modding.

There is one Rust core library with two front ends:

- `sixng`: a CLI with JSON output, filters, categories and resumable runs.
- `sixng-gui`: a desktop app to open an install, browse and search it,
  preview items and extract a selection.

> **Game data never goes in git.** Indexes, extracted output and scratch
> files all go under `work/` (or any `--out` you choose). `work/` and every
> `*.png/*.dds/*.glb` file are in `.gitignore`.

| Shaded | UV checker + wireframe |
|---|---|
|  |  |

*Screenshots show the app with a generated demo scene (crates, a barrel and a ground plane), not game content.*
