---
repo: "MrJox/warscape_community_editor"
name: "warscape_community_editor"
description: "Community editor for Total War: Attila Warscape content"
readmeQualityOk: true
url: "https://github.com/MrJox/warscape_community_editor"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["attila", "editor", "rome2", "total-war"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2026-10-12T17:15:08Z"
lastCommitAt: "2026-11-08T10:41:02Z"
lastReleaseAt: "2026-11-08T08:25:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Frodo45127"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf14a337e8769d195eb799d8208d0e12e44d6a31f0888755a95bc18f6d0c443/MrJox/warscape_community_editor"
---

# Warscape Community Editor

One editor for Total War: Attila (Warscape engine) content: weather and lighting, battle and campaign tiles, and later
units, VFX, battle maps and cinematics. It shares one viewport and one renderer built on the game's own shaders. Plan
and status: [PLAN.md](https://github.com/MrJox/warscape_community_editor/blob/HEAD/PLAN.md).

**State:** `wce` is one Rust application (a Cargo workspace, `crates/`): the weather tool, the tile tool and the UI editor in a shared
shell. The gates are Cargo examples and tests, run by `scripts/`. The earlier plans are in [docs/plans/](https://github.com/MrJox/warscape_community_editor/blob/HEAD/docs/plans/).

## Build

rpfm_lib is a path dependency: check out [RPFM](https://github.com/Frodo45127/rpfm) (develop branch) next to this repo, as `../rpfm`.

### Windows

The `wce` binary builds SDL3 from source. Cargo's `build-dir` (set in `.cargo/config.toml`) keeps the intermediates under
`%USERPROFILE%\.cargo\build`, so a long repo path does not break SDL's MSBuild compiler check (it needs Cargo 1.91 or newer):

```powershell
cargo build --release -p wce_app
```

The binary lands at `target\release\wce.exe`.

### Linux

The…
