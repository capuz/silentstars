---
repo: "ulalume/megatoy"
name: "megatoy"
description: "YM2612 Patch Editor"
readmeQualityOk: true
url: "https://github.com/ulalume/megatoy"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 9
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-23T14:09:40Z"
lastCommitAt: "2026-11-13T05:39:23Z"
lastReleaseAt: "2025-10-01T11:18:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 75
maintainers: ["ulalume"]
openGraphImageUrl: "https://opengraph.githubassets.com/504287a865a150a9112a80ede5b1d0bbf8a85e04aff099d9bf4646e8f58f5943/ulalume/megatoy"
---

A YM2612 (OPN2) patch editor for the Mega Drive / Genesis sound chip<br>

## Features

- Edit patches with accurate envelope graphs
- Open several patches at once, each in its own tab, with undo for each
- Play with MIDI or the computer keyboard
- Patch Lab: random, mutate and mix
- Copy any patch as MML
- Runs on macOS, Windows, Linux and the web

## Patches

Add folders with **File ▸ Add Folder to Workspace...**, or drop a file on the window.
Stars and icons are kept in `.ym2612/<file name>.json` next to each patch.

Read via [ym2612_format](https://github.com/ulalume/ym2612_format):
`.dmp` `.dmf` `.fui` `.fur` `.mml` `.opm` `.tfi` `.rym2612` `.vgi` `.eif` `.spat` `.tyi` `.y12` `.dat` `.ins` `.vgm` `.vgz`

Saved as: `.dmp` `.fui` `.eif` `.spat` `.tfi` `.tyi` `.vgi` `.y12` `.mml`

Built-in: [ym2612-patches](https://github.com/ulalume/ym2612-patches) (CC0).
More: [DefleMask Legacy](https://www.deflemask.com/get_legacy/) ·
[Furnace](https://github.com/tildearrow/furnace) ·
[Rym2612 ReFill](https://www.inphonik.com/press/press-release-rym2612-refill/)

## Build

```bash
git clone https://github.com/ulalume/megatoy.git
cd megatoy
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake…
