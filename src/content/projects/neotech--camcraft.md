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
stars: 64
forks: 31
openIssues: 596
closedIssues: 1656
watchers: 2
contributors: 26
recentReleases: 10
createdAt: "2026-10-24T08:24:29Z"
lastCommitAt: "2026-11-26T12:06:12Z"
lastReleaseAt: "2026-11-11T08:53:19Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 45
maintainers: ["mkinney", "NeoTech", "qsmits"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead90f2cfdc816cfbf65b61204f58abc6c4794e11f876fc70115ab0389656d12/NeoTech/Camcraft"
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
