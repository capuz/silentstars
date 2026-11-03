---
repo: "nekomancer01/DarkSoulsPS2"
name: "DarkSoulsPS2"
description: "Homebrew PS2 port of Dark Souls Remastered: C/VU1 engine plus exporters that read your own copy of the game (no game data included)"
readmeQualityOk: true
url: "https://github.com/nekomancer01/DarkSoulsPS2"
language: "C"
languages: ["C", "Python"]
languagePcts: [53, 40]
topics: ["decompilation", "game", "port", "recompilation", "playstation-2"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-01T00:34:35Z"
lastCommitAt: "2026-11-03T12:48:05Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["claude", "nekomancer01"]
openGraphImageUrl: "https://opengraph.githubassets.com/278dc69b96df1e4a05250a3417a65aaf6d258eafae87202ef3eca4dd99c1eab3/nekomancer01/DarkSoulsPS2"
---

# DarkSoulsPS2

A homebrew port of **Dark Souls Remastered** to the PlayStation 2. It's a C engine for the PS2 (`ps2/proto`, built
with ps2dev and gsKit, with hand-written VU1 microprograms), plus Python tools (`tools/`) that read **your own copy**
of the PC game and convert its maps, characters, animations, collision, AI scripts and menus into PS2-sized files.

You build it yourself, and it runs in the PCSX2 emulator. Running it on a real PS2 is set up but hasn't been tested.

## What works today

This is an early prototype, not a playable game yet.

| Works | Not yet |
|---|---|
| Firelink Shrine and Undead Burg, with seamless walking between them (no loading screen) | Any other area |
| The Warrior: walking, running, rolling, dashing, R1 attacks, falling | Lock-on, blocking, parries, magic, items, levelling |
| Enemies with their own AI scripts, taking and dealing damage | Bosses |
| Event scripts: chests, fog walls, doors, item pickups | NPC dialogue, shops |
| Saving and loading on the memory card | Cutscenes |
| Sound effects, footsteps, music and ambience (effects at a low sample rate) | Reverb, NPC voices |
| HUD (health, stamina, Estus, souls), 30 fps in PCSX2 | Full…
