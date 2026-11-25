---
repo: "holdmysocks/SixNG"
name: "SixNG"
description: "Asset extractor for your own GTA VI install (Xbox Series, RPF9): CLI and desktop app; models to glTF, textures, map data. GPL-3.0."
readmeQualityOk: true
url: "https://github.com/holdmysocks/SixNG"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 102
forks: 21
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-11-21T00:08:20Z"
lastCommitAt: "2026-11-25T03:18:00Z"
lastReleaseAt: "2026-11-23T00:35:09Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 36
maintainers: ["holdmysocks", "kaoru-maki", "tarekmania"]
openGraphImageUrl: "https://opengraph.githubassets.com/b43a206ba4da5af9672dc0561e7f0ba763f3256764a540777b4b4029aca150b3/holdmysocks/SixNG"
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
