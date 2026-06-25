---
repo: "goplus/spx"
name: "spx"
description: "spx - A Scratch Compatible Go/XGo 2D Game Engine for STEM education"
url: "https://github.com/goplus/spx"
homepage: "https://xbuilder.com/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["gop", "goplus", "game-engine-2d", "learning-gop", "scratch-like", "stem-education", "stem", "builder", "go", "golang"]
stars: 122
forks: 34
openIssues: 53
closedIssues: 190
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2021-07-26T22:18:57Z"
lastCommitAt: "2026-06-25T06:40:42Z"
lastReleaseAt: "2021-10-05T18:44:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 47
maintainers: ["joeykchen", "go-wyvern", "fennoai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b4c43080d74618720d8fca4a8960b1201ef17f1386135fb74065185c002786c/goplus/spx"
---

spx - A Scratch Compatible 2D Game Engine
========

## How to build

How to run games powered by XGo spx engine?

* Install go (version >= 1.25.0)
* Install python (version >= 3.8)
* Install scons (version == 4.7.0) (for engine development, optional)
* Install make
* Install [`mingw-w64`](https://www.mingw-w64.org/) (Windows only)
* Add the Go environment's bin directory to the system PATH.
```
    export PATH=$PATH:$GOPATH/bin
```
* Download XGo and build it. See https://github.com/goplus/xgo#how-to-build.
* Download spx and build it.
	```sh
	# please use Git Bash to run the following commands in windows platform
	git clone https://github.com/goplus/spx.git
	cd spx
	git checkout dev
	# prepare all required host and web assets, use `make prepare-full` instead.
	make prepare-host
	# run the demo
	spx run -path tutorial/00-Hello
	```
* Build a game and run.
  * cd `game-root-dir`
  * xgo run .

## Games powered by spx

* [AircraftWar](https://github.com/goplus/AircraftWar)
* [FlappyCalf](https://github.com/goplus/FlappyCalf)
* [MazePlay](https://github.com/goplus/MazePlay)
* [BetaGo](https://github.com/xushiwei/BetaGo)
* [Gobang](https://github.com/xushiwei/Gobang)
*…
