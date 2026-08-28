---
repo: "HarommelRabbid/LifeLua"
name: "LifeLua"
description: "Lua interpreter for the PS Vita"
readmeQualityOk: true
url: "https://github.com/HarommelRabbid/LifeLua"
homepage: "https://harommelrabbid.github.io/LifeLua/"
language: "C"
languages: ["C"]
languagePcts: [83]
stars: 18
forks: 0
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-03-24T06:55:53Z"
lastCommitAt: "2026-08-28T14:23:51Z"
lastReleaseAt: "2025-08-08T13:55:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 41
maintainers: ["HarommelRabbid"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fd4b3709d711fcea260e8df6541b1851a4c793e8029960a34cf7d0038386e67/HarommelRabbid/LifeLua"
---

# LifeLua
LifeLua is a Lua interpreter for the PS Vita which combines simplicity with advanceability. It is an alternative to the other Lua interpreters available for the platform.

## Features
* Timers with pausing and stopping
* Camera support with effects and filters
* JSON, TOML and SQLite3 support
* Image support including PSD, TGA & HDR support
* Audio with support for MP3, WAV, OGG, OPUS, FLAC and tracker module formats (.MOD, .IT & more)
* QR code scanning & generation
* Shapes with solid colors or gradients
* TBA
## Documentation
https://harommelrabbid.github.io/LifeLua
## Samples
For a showcase of LifeLua's features go to the repository's `sample` folder.
## Compiling
* [libsqlite](https://github.com/VitaSmith/libsqlite): run `cd libsqlite && make`, move the library (ends with` *.a`) in the folder where the libraries are stored in the vitasdk, and run `make install`, see https://github.com/VitaSmith/libsqlite?tab=readme-ov-file#compiling
* Set up [vitasdk](https://github.com/vitasdk) if you haven't and build LifeLua using:

```
mkdir build && cd build && cmake .. && make
```

To make after your first build (assuming you are in the `build` folder):

```
find . -mindepth 1…
