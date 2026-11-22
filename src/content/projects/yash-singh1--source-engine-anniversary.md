---
repo: "Yash-Singh1/source-engine-anniversary"
name: "source-engine-anniversary"
description: "Source Engine leak modified for HL2 Anniversary running on macOS"
readmeQualityOk: true
url: "https://github.com/Yash-Singh1/source-engine-anniversary"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2026-11-21T10:32:24Z"
lastCommitAt: "2026-11-22T11:45:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 42
maintainers: ["Yash-Singh1"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f6f9fce7c5911d021fdf2cb8c24c8aadc89e454bad47ab926903f79ebf7df54/Yash-Singh1/source-engine-anniversary"
---

# Source Engine - HL2 Anniversary Edition

This branch is a decomp of HL2 Anniversary Edition built off the TF2 2018 Source Engine leak and `nillerusr`'s build system ported to MacOS.

## Building & Installing

```sh
brew install pkg-config python3 sdl2 freetype fontconfig jpeg-turbo libpng
python3 ./waf configure -T release --prefix='' --build-games=hl2_complete
python3 ./waf build
python3 ./waf install --destdir="$HOME/Library/Application Support/Steam/steamapps/common/Half-Life 2" # replace destdir with whereever your steam installation directory for HL2 is stored if you want to install it there
```

## Launching

Press **Play** in Steam, or run from the game directory:

```sh
./hl2_launcher -game hl2_complete
```
