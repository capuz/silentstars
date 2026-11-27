---
repo: "oliverjessner/OpenEmperor"
name: "OpenEmperor"
description: "🤴🏼 Clean-room reimplementation of Emperor: Rise of the Middle Kingdom in C++20 and SDL3. Built for modern systems, starting with Apple Silicon macOS. Early development; original game data required."
readmeQualityOk: true
url: "https://github.com/oliverjessner/OpenEmperor"
homepage: "https://oliverjessner.at/openemperor/"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["applesilicon", "recompilation", "retro-gaming"]
stars: 41
forks: 4
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 3
recentReleases: 1
createdAt: "2026-09-15T08:26:03Z"
lastCommitAt: "2026-11-27T12:56:45Z"
lastReleaseAt: "2026-09-19T10:51:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 37
maintainers: ["oliverjessner", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/50fc1203c1477d43c32abc9ce73c0cd1baf59e3a6a56a9ef3a24ff3f79caca02/oliverjessner/OpenEmperor"
fundingLinks: ["GITHUB:https://github.com/oliverjessner", "BUY_ME_A_COFFEE:https://buymeacoffee.com/oliverjessner"]
---

# OpenEmperor

A clean-room reimplementation of _Emperor: Rise of the Middle Kingdom_ for
native macOS on Apple Silicon. **0.1.0-alpha.2** includes a playable city
sandbox and an optional original-economy experiment. Gameplay and visual
parity remain incomplete; original campaigns and savegames are unsupported.

You need your own installed or extracted Emperor game data. Original assets
are read directly and are never bundled.

## Build and run

Install Xcode Command Line Tools, CMake and OpenSSL 3. CMake fetches pinned
SDL3 and JSON dependencies when needed and uses system zlib.

```sh
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_OSX_ARCHITECTURES=arm64
cmake --build build --parallel
./build/openemperor
```

On first launch, select the Emperor data directory. **Play Original economy**
opens the recommended experimental mode for a new city. Check the data folder,
map, difficulty and paid starter or empty start before **Start sandbox**.
