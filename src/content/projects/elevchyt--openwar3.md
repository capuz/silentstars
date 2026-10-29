---
repo: "elevchyt/openwar3"
name: "openwar3"
description: "A modern reimplementation of the Warcraft III engine."
readmeQualityOk: true
url: "https://github.com/elevchyt/openwar3"
homepage: "https://openwar3.vercel.app/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [75, 24]
stars: 16
forks: 4
openIssues: 10
closedIssues: 205
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T14:21:11Z"
lastCommitAt: "2026-10-29T10:21:15Z"
lastReleaseAt: "2026-09-11T12:00:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["elevchyt"]
openGraphImageUrl: "https://opengraph.githubassets.com/65af7211e723b070950f53b9721e9924cb486f97831b8fa4a389e226b5650f76/elevchyt/openwar3"
---

# OpenWar3

A recreation of the **Warcraft III** engine in TypeScript. Ships **zero Blizzard assets** — uses your own install at runtime.

**The Frozen Throne 1.30.4 is required**, and the game checks it. Every unit's stats, every
ability, every cost and timing is read out of each player's own install, so two people on
different patches would be playing different games — the host would resolve an order against its
Footman while the client drew the one in its own tables, and nothing in the network protocol could
catch it. So the version is a gate rather than a recommendation: an install that is not 1.30.4 is
refused with a message naming what it found, at the folder dialog and again at **every launch**
(the desktop app remembers your folder, and Warcraft III can be patched between one session and
the next). Pre-1.30 MPQ-era installs are older than that build by construction and are not
accepted.

Goal: liberate WC3 from legacy constraints and bring the engine up to modern standards. Features planned:

- **Cross-platform** — Windows, Linux, macOS, anything with a browser
- **Multiplayer reconnect** — no more dropped games lost
- **Better AI** — **Computer+**, a second melee AI…
