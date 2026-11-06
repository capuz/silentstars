---
repo: "FIZL0/openmx"
name: "openmx"
description: "openMX: a remaster and rewrite of MX Unleashed (PS2 motocross) for PC, Steam Deck and the browser, with online play and mods (MX vs. ATV Unleashed tracks too)"
readmeQualityOk: true
url: "https://github.com/FIZL0/openmx"
homepage: "https://openmx.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["dirt-bike", "game", "motocross", "ps2", "racing-game", "remaster", "reverse-engineering", "rewrite", "rust", "wasm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T13:58:24Z"
lastCommitAt: "2026-11-06T13:20:14Z"
lastReleaseAt: "2026-10-31T16:38:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 65
maintainers: ["FIZL0"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e822f3fe0e6b0d47caa564eb2e296b72a5b9cffb551f08cc357320261dafbcd/FIZL0/openmx"
---

# openmx

A re-implementation of **MX Unleashed** (PS2, SLUS-20767) in Rust — the original's simulation, ported
function by function and **proved to match it bit for bit**, behind a new renderer, new menus, local
split-screen and online play, on the desktop and in a browser.

It ships no game data. Everything it shows — tracks, terrain, bikes, the rider, textures, menu art,
sound — is read at runtime from your own dump of the disc.

```
cargo run --release -p openmx                          # the front end: pick a track and ride it
cargo run --release -p openmx -- --track free06        # straight onto a track, no menu
cargo run --release -p openmx -- --players 2 --split v # two players, side by side
cargo run --release -p openmx -- --vehicle biplane     # start in the track's biplane
```

## What is in it

**The ride.** The bike's ground step — suspension, tires, the rigid body, engine torque, slip, the air
state and the collision sweep — on the parameters each bike's own `.phy` carries. The rider on top of
it: the trick machine and its 24 stunts from the disc's `stunts.ini`, landings judged against the
`.phy`'s limits, wrecks, the ragdoll and the put-back. The track's biplane,…
