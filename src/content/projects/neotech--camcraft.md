---
repo: "NeoTech/Camcraft"
name: "Camcraft"
description: "A clean room implementation of a CAM package."
readmeQualityOk: true
url: "https://github.com/NeoTech/Camcraft"
homepage: "https://neotech.github.io/Camcraft/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 28
forks: 13
openIssues: 294
closedIssues: 917
watchers: 2
contributors: 15
recentReleases: 10
createdAt: "2026-10-24T08:24:29Z"
lastCommitAt: "2026-11-17T14:35:31Z"
lastReleaseAt: "2026-11-11T08:53:19Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 53
maintainers: ["NeoTech", "mkinney", "vilts"]
openGraphImageUrl: "https://opengraph.githubassets.com/d86bc10d15c59b403884a4770425e126463b3b44b282dfd9f1c266b3d82cc4e3/NeoTech/Camcraft"
fundingLinks: ["GITHUB:https://github.com/NeoTech", "CUSTOM:https://buy.stripe.com/8x2dR93Up10S6eP0FO4c800"]
---

# CamCraft

A CAM system that turns 3D models into NC programs (G-code) for CNC milling
machines and lathes. Written in Rust on a Flecs ECS core with an egui
interface.

CamCraft is a clean-room implementation of HSMWorks' user-visible behavior:
its operation types, parameters and workflow, specced from published
documentation and general machining knowledge. "HSMWorks" is a trademark of
Autodesk; this project is independent and unaffiliated. No HSMWorks code,
text, assets or post processors were used.

> **Status: pre-1.0, for testing.** Every toolpath is verified against the
> part, the stock and the fixtures before it can be posted, and anything that
> cannot be proven safe is refused by name. Still, check every program in
> your machine's own simulation and dry-run it before cutting metal.

> **Experimental work in progress - use with caution.** CamCraft is under
> heavy, fast-moving development. Features land daily, some are half-built
> on purpose, and a release can change behaviour you relied on yesterday.
> Treat every posted program as a first draft: simulate it, dry-run it with
> the spindle off and the Z raised, and keep a hand on the feed hold. Our
> unofficial testing…
