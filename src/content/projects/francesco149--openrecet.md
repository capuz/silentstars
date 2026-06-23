---
repo: "Francesco149/openrecet"
name: "openrecet"
description: "open drop in exe replacement for Recettear (WIP) and documentation of engine quirks"
url: "https://github.com/Francesco149/openrecet"
homepage: "https://ko-fi.com/lolisamurai"
language: "C"
languages: ["C"]
languagePcts: [79]
topics: ["decompilation", "easygamestation", "game-decompilation", "game-preservation", "game-preservation-reverse-engineering", "recettear", "retro-gaming", "reverse-engineering", "win32", "carpe-fulgur"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-05-19T20:20:06Z"
lastCommitAt: "2026-06-23T16:27:54Z"
lastReleaseAt: "2026-05-29T15:17:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["Francesco149"]
openGraphImageUrl: "https://opengraph.githubassets.com/c256c4edb7b6d587ec71a41a86e38964b9fe60b51e3f32d6e7c9bbaf89853ece/Francesco149/openrecet"
---

# OpenRecet

An open-source, clean-room-style C reimplementation of the Win32 engine
("Azumanga") behind **Recettear: An Item Shop's Tale** (EasyGameStation,
2007 / Carpe Fulgur EN, 2010) — aiming at a drop-in replacement for
`recettear.exe` that behaves like the original for people who own a
legitimate copy of the game.

This is an **educational reverse-engineering and game-preservation
project**. It ships **no game assets, no decompiled binary, and no
copyrighted content** — you bring your own copy of the game. MIT licensed
(our code only; no rights to the original game are granted).

*OpenRecet on an opening-prologue iv1_2 dialogue line: the dialogue box and
nameplate, both character standees, the spell-circle effect, and the top HUD
(clock / day / money) the engine draws over the live map — with the townsfolk
drifting past the back window. Every shot below is a real OpenRecet frame,
verified bit-for-bit against the original engine on the same deterministic input
trace (we no longer print them side by side — on the beats we showcase, the port
matches retail 1:1).*

More OpenRecet captures from the same deterministic traces:

*Free-roaming in the shop: the 3D room (geometry,…
