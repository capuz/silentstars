---
repo: "NeoTech/Camcraft"
name: "Camcraft"
description: "A clean room implementation of a CAM package."
readmeQualityOk: true
url: "https://github.com/NeoTech/Camcraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 4
openIssues: 67
closedIssues: 48
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-10-24T08:24:29Z"
lastCommitAt: "2026-11-07T22:51:12Z"
lastReleaseAt: "2026-11-07T20:38:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 66
maintainers: ["NeoTech", "linuxguy123", "mkinney"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5642a95a002228de5e8dac0ff2582d9c68d3679d5719d3f6927aa067cbb980c/NeoTech/Camcraft"
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

## What it does

- **Import** STL, OBJ and STEP models; repair meshes (weld vertices, fill
  holes).
- **Set up** stock, work offsets (G54–G59), fixtures and machines (mill,
  5-axis, lathe, mill-turn).
- **2D milling:** face, contour (with G41/G42 compensation), pocket,
  adaptive clearing, slot, trace, engrave, chamfer, circular, bore and
  thread milling.
- **3D milling:** adaptive…
