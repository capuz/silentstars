---
repo: "Ace17/deeep"
name: "deeep"
description: "A platformer/metroidvania game"
readmeQualityOk: true
url: "https://github.com/Ace17/deeep"
language: "C++"
languages: ["C++", "C"]
languagePcts: [58, 36]
topics: ["emscripten", "metroidvania", "asmjs", "2d", "platformer", "game", "sdl"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2017-04-13T04:53:59Z"
lastCommitAt: "2026-09-13T08:30:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/193c911241339b55a83ae347c17b338ae3b65d6401ccc50f1e258ff624a6e02d/Ace17/deeep"
---

# Deeep

Author: Sebastien Alaiwan

Demo
----

An online demo is available here:

http://code.alaiwan.org/games/deeep

Description
-----------

This is a demo of a platform-independent C++14 game project.
It uses SDL2, and OpenGL ES 3.0.

It's meant as an example of a platformer/metroidvania game
which can be compiled to native code, or, using Emscripten, to WebAssembly.

The code doesn't contain any reference/dependency to Emscripten, except in the
entry-point file, where the main loop function gets passed to Emscripten.

This code also shows how to isolate your game logic code (doors, switches,
powerups, bullets, ..) from your I/O code (display, audio, input).

Directory structure
-------------------

```
bin/            output directory for architecture-specific executable binaries.
res/            output directory for game resources (e.g. sounds, music, sprites, tilesets).
assets/         source files for game resources.

src/audio/      audio engine (mixing, music playback, channel allocation, etc.)
src/base/       basic types (vectors, matrices, string, span, etc.)
src/engine/     main loop, pause, video capture, composition root
src/entities/   game entity classes (door,…
