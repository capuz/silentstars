---
repo: "FIZL0/openmx"
name: "openmx"
description: "openMX: a remaster and rewrite of MX Unleashed (PS2 motocross) for PC, Steam Deck and the browser, with online play and mods (MX vs. ATV Unleashed tracks too)"
readmeQualityOk: true
url: "https://github.com/FIZL0/openmx"
homepage: "https://openmx.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["dirt-bike", "game", "motocross", "ps2", "racing-game", "remaster", "reverse-engineering", "rewrite", "rust", "wasm"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T13:58:24Z"
lastCommitAt: "2026-11-21T12:41:24Z"
lastReleaseAt: "2026-10-31T16:38:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["FIZL0"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cde79cef5c7534e3a54f9e29f2be662f3d05c6e5d93804de15e7ac29c49af43/FIZL0/openmx"
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
