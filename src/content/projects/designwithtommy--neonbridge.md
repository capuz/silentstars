---
repo: "DesignWithTommy/Neonbridge"
name: "Neonbridge"
description: "Neonbridge: open-source GTA VI (GTA 6) launcher and D3D12 compatibility layer for Windows PC. Runs your own dumped Xbox Series X|S (Scarlett) GDK build natively: x64 game code unchanged, console system libraries reimplemented, Xbox shaders translated to DXIL. Not an emulator. Work in progress; no game files included."
readmeQualityOk: true
url: "https://github.com/DesignWithTommy/Neonbridge"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["compatibility-layer", "d3d12", "directx12", "grand-theft-auto-vi", "gta-6-pc", "gta-vi", "gta6", "rust", "windows", "xbox-series-x"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-23T23:52:16Z"
lastCommitAt: "2026-11-25T13:22:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["DesignWithTommy"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ca8630d835128e2ad93e0320a3583ff7bd15acdb2a7e804566412ba6705f044/DesignWithTommy/Neonbridge"
---

# Neonbridge: one launcher for every GTA VI (GTA 6) Xbox Series runtime on PC

**Status: WIP.** Neonbridge is one launcher that runs each leading project's working build, vendored whole and unchanged, against the Xbox Series X|S (Scarlett) build of Grand Theft Auto VI that you dumped from a console you own. Pick a runtime, and Neonbridge builds it when its sources are newer than its exe, sets it up, starts it with that runtime's settings and logs the run. It **isn't playable yet**. No game files are included or linked, and there is no release download.

## Quick start

```
cargo build --release                      # target\release\neonbridge.exe
neonbridge                                 # numbered picker: runtime and preset, then the game folder
neonbridge --runtime victory --game <dump dir> [--log run.log] [--timeout S]
```

You need Visual Studio Build Tools with the x64 C++ tools, the Windows SDK and Rust (stable, `x86_64-pc-windows-msvc`). Each runtime's own toolchain is pinned in its tree (`rust-toolchain.toml`), and rustup fetches it.
