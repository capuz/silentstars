---
repo: "Apibim-com/BeamCraft"
name: "BeamCraft"
description: "Open-source, clean-room structural steel detailing workbench in Rust. IFC & DSTV first, scriptable, no telemetry. By Apibim."
readmeQualityOk: true
url: "https://github.com/Apibim-com/BeamCraft"
homepage: "https://beamcraft.cl"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bim", "cad", "clean-room", "dstv", "ifc", "rust", "steel-detailing", "structural-engineering", "wasm", "apibim"]
stars: 14
forks: 2
openIssues: 90
closedIssues: 267
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-14T12:58:38Z"
lastCommitAt: "2026-10-31T19:02:31Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["Blogbotana", "axisrow", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee8d11eccfdd27177ce175796723902ea07235aea4615af2fe5244ab2af931f3/Apibim-com/BeamCraft"
discussionCount: 4
---

Model, detail and document steel structures in a fast, native app, built from public standards.<br>
  Windows · Linux · macOS

> [!NOTE]
> **BeamCraft is pre-alpha.** There is no usable application yet; this repository currently holds
> the project scaffold, the rules and the CI that the first crates are built on.
> Windows and Linux are the initial CI targets. macOS remains a desktop development goal.

## Why BeamCraft

Steel detailing software is expensive, closed and tied to one vendor's file formats. BeamCraft aims
to be an open, scriptable alternative with a native, fast core:

- **Fast.** An original Rust engineering core and a planned native GPU-accelerated UI.
- **Open formats first.** USD is the authoritative project format, read and written by an
  original Rust layer engine. IFC export and DSTV NC are later milestones.
- **Scriptable by design.** Every feature is reachable headlessly from the CLI, so scripts and AI
  agents can drive it as easily as a person can.
- **Yours.** No account, no telemetry, no cloud. It works offline.

## Independent

BeamCraft targets the workflows of professional steel detailing tools such as Tekla Structures, but
it is **not** derived from…
