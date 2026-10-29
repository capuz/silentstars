---
repo: "Open-BFME/openbfme-godot"
name: "openbfme-godot"
description: "BFME Godot: A modern implementation of BFME 2 ROTWK into Godot using the game's original assets"
readmeQualityOk: true
url: "https://github.com/Open-BFME/openbfme-godot"
homepage: "https://github.com/Open-BFME/openbfme-godot/releases/tag/v0.4.11"
language: "C++"
languages: ["C++"]
languagePcts: [73]
stars: 38
forks: 10
openIssues: 9
closedIssues: 12
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-07-25T21:39:41Z"
lastCommitAt: "2026-10-29T21:24:01Z"
lastReleaseAt: "2026-10-12T10:32:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 46
maintainers: ["Ancalgonn", "daisyhasacat", "wiruzman"]
openGraphImageUrl: "https://opengraph.githubassets.com/748bf35e7d5f353ee96c13be3dbff6815bc46d9f3d7fd659a5e731e0faad4154/Open-BFME/openbfme-godot"
---

# OpenBFME

**The Battle for Middle-earth II: The Rise of the Witch-king 2.01, rebuilt in Godot.**

[Play it](#play-it) · [Status](#status) · [Where it's going](#where-its-going) · [Build from source](#build-from-source) · [Player guide](https://github.com/Open-BFME/openbfme-godot/blob/HEAD/docs/PLAYING.md) · [Roadmap](https://github.com/Open-BFME/openbfme-godot/blob/HEAD/docs/ROADMAP.md)

## What it is

OpenBFME is built with AI assistance and is still being optimized. The Rise
of the Witch-king has not been decompiled yet, so many features are reverse
engineered from the game, and some use a stand-in until OpenBFME's RotWK
decompilation project is complete.

OpenBFME is a faithful, fan-made recreation of **The Rise of the Witch-king
2.01** that runs on the original game files from your own install. This
repository contains no game assets: you bring your own copy of the game, or
let the launcher download it (see [Play it](#play-it)).

The game logic is C++ in a GDExtension (`engine/`). It is translated from
EA's Command & Conquer Generals: Zero Hour source and the BFME decompiles,
and checked against the RotWK program itself, keeping the original SAGE class
and file names. Godot…
