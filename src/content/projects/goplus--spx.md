---
repo: "goplus/spx"
name: "spx"
description: "spx - A Scratch Compatible Go/XGo 2D Game Engine for STEM education"
readmeQualityOk: true
url: "https://github.com/goplus/spx"
homepage: "https://xbuilder.com"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["gop", "goplus", "game-engine-2d", "learning-gop", "scratch-like", "stem-education", "stem", "builder", "go", "golang"]
stars: 124
forks: 36
openIssues: 3
closedIssues: 260
watchers: 5
contributors: 19
recentReleases: 0
createdAt: "2021-07-26T22:18:57Z"
lastCommitAt: "2026-09-29T08:10:30Z"
lastReleaseAt: "2021-10-05T18:44:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 49
maintainers: ["joeykchen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f1b019ccf16f839d114da4f125d7fb757072d77a4253187fa32a01b237653b/goplus/spx"
---

spx - A Scratch Compatible 2D Game Engine
========

## How to build

Install Git, Make, Go, and the XGo CLI. Keep `$GOPATH/bin` on `PATH`; Windows
users should run the commands below from Git Bash and install
[`mingw-w64`](https://www.mingw-w64.org/). The authoritative Go, XGo, SCons,
EMSDK, NDK, and JDK versions live in
[`internal/release/runtime.lock.json`](https://github.com/goplus/spx/blob/HEAD/internal/release/runtime.lock.json).
`buildctl` selects the locked Go toolchain and installs build-only tools such
as SCons when they are needed.

```sh
git clone https://github.com/goplus/spx.git
cd spx

# Download the locked published host runtime and install the spx command.
make setup
make doctor

# Discover and run repository demos.
make list-demos
make run DEMO_INDEX=1
```

Use `make help` for the supported entry points. To build the editor and all
runtime assets from local Godot source instead of downloading them:

```sh
GODOT_SRC=/absolute/path/to/godot make dev MODE=normal
```

To run an existing game directly, change to its root directory and run
`xgo run .`.

## Games powered by spx

* [AircraftWar](https://github.com/goplus/AircraftWar)
*…
