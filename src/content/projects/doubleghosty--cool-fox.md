---
repo: "DoubleGhosty/cool_fox"
name: "cool_fox"
description: "Unmodified mirror of the original codec-d/cool_fox (GPL-3.0, commit f4b48ad)"
readmeQualityOk: true
url: "https://github.com/DoubleGhosty/cool_fox"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 467
forks: 310
openIssues: 5
closedIssues: 0
watchers: 6
contributors: 96
recentReleases: 0
createdAt: "2026-11-26T08:48:31Z"
lastCommitAt: "2026-11-26T15:22:21Z"
status: "newborn"
tags: ["solo_builder", "fork_magnet"]
healthScore: 72
undervaluedScore: 22
maintainers: ["codec-d", "starnotes-xj", "simon0302010"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f0558394c37a4769b15e36ebb91f822e20bf20810983796fff26e5820726388/DoubleGhosty/cool_fox"
---

# VIctory on an RX 7900 XTX

## Run the codec_d Windows build

Download and extract the Windows x64 ZIP from the [private releases](https://github.com/codec-d/cool_fox/releases/latest). Open PowerShell in the extracted folder and point the launcher at your own complete Xbox dump.

```powershell
$env:VICTORY_GAME_DIR = 'D:\Games\MyDump'
.\Play-VIctory.cmd pareto-residency
```

The launcher selects Series S and the RTX-tested residency settings. It builds its shader cache locally under `%LOCALAPPDATA%\VIctory\cache-pareto`. Set `VICTORY_CACHE_DIR` to reuse an existing cache outside the checkout. Windows x64, an AVX2 CPU, and a Direct3D 12 GPU with shader model 6.6 and mesh shader support are required.

To build from this checkout, install the pinned Rust toolchain and the MSVC C++ build tools with a Windows SDK, then run `cargo build --release --locked -p victory`. The same launcher finds `target\release\victory.exe`. The sections below describe the upstream AMD fork and its separate launcher.
