---
repo: "haroldo-ok/sms-game-designer"
name: "sms-game-designer"
description: "A W.I.P. visual tool for creating Sega Master System games."
readmeQualityOk: true
url: "https://github.com/haroldo-ok/sms-game-designer"
homepage: "https://haroldo-ok.itch.io/sega-master-system-game-designer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [66]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-05T20:13:58Z"
lastCommitAt: "2026-11-14T10:40:56Z"
lastReleaseAt: "2026-11-14T10:48:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 32
maintainers: ["haroldo-ok"]
openGraphImageUrl: "https://opengraph.githubassets.com/811fcfb96a6e7bad755a4182cc5620753430319aca9584d1edf68e37834d127f/haroldo-ok/sms-game-designer"
---

# SMS Game Designer

A no-code environment for making Sega Master System games: Blockly for logic,
pixel editors for art, a compiler running as WASM, and an emulator to play
the result. Everything happens in the browser — no server, no accounts, no
install.

Ported from [`vcs-game-maker`](https://github.com/haroldo-ok/vcs-game-maker),
built on [CVBasic](https://github.com/nanochess/CVBasic) and
[gasm80](https://github.com/nanochess/gasm80), with the browser toolchain
from
[`CVBasic-emscripten`](https://github.com/haroldo-ok/CVBasic-emscripten).

## The idea

The Atari 2600 has five movable objects, so `vcs-game-maker` can name them
all: `player0`, `player1`, `missile0`, `missile1`, `ball`. The Master System
has 64 sprites, and a modest shmup has 25 things on screen at once. Naming
them is hopeless.

So this tool changes the unit of authoring:

> You author **types** — a Ship, a Bug, a Shot. The runtime owns the
> individual copies. Interactions are declared between **groups**, not
> between individuals.

Everything else follows from that. Scripts are written from the point of view
of one instance, so blocks say *set my x* and never name anything. Collision
is `on collide with…
