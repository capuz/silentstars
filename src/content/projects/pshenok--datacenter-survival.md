---
repo: "pshenok/datacenter-survival"
name: "datacenter-survival"
description: "Build and run a datacenter: power chains, heat, cooling, PUE. Sister game of Server Survival — the physical layer of the cloud."
readmeQualityOk: true
url: "https://github.com/pshenok/datacenter-survival"
homepage: "https://pshenok.github.io/datacenter-survival/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["datacenter", "education", "game", "simulation", "threejs"]
stars: 8
forks: 0
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T04:30:21Z"
lastCommitAt: "2026-08-04T06:11:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 31
maintainers: ["pshenok"]
openGraphImageUrl: "https://opengraph.githubassets.com/adea6b241bfc4c0c7eccd3bea1a5e734b22aa1d80cb4a3d100a53671b78de720/pshenok/datacenter-survival"
---

# Datacenter Survival

**You run the physical layer of the cloud.** Racks earn money while they are
powered and cool — everything else is the fight to keep those two things true.

Sister game of [Server Survival](https://github.com/pshenok/server-survival):
that one teaches the *logical* layer (services, routing, scaling); this one
teaches the *physical* layer it all runs on — megawatts, heat, cooling, PUE.

*Real capture, sped up with the game's own fast-forward: the chain goes live →
the rack block cooks itself past 45 °C and throttles → CRACs answer it (and
push PUE up) → the city grid dies, and only the UPS-backed half of the room
stays lit until the standby generator picks up. Throughout, badges name the
building responsible for every kilowatt you fail to serve — and the ledger
totals it in dollars.*

## The two systems

- **Power is wired.** Grid Feed → Transformer → UPS → PDU → Rack. Every link
  has a kW capacity. Overload one and it clips its whole subtree
  proportionally — push it further and its **breaker opens**, because real
  gear does not dim forever. A UPS bridges a blip in seconds; a standby
  generator carries the rest, for exactly as long as there is fuel in…
