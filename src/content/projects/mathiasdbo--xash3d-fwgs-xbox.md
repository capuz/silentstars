---
repo: "mathiasdbo/Xash3D-FWGS-XBOX"
name: "Xash3D-FWGS-XBOX"
description: "Half-Life on the original Xbox: a port of Xash3D FWGS built with nxdk"
readmeQualityOk: true
url: "https://github.com/mathiasdbo/Xash3D-FWGS-XBOX"
language: "C"
languages: ["C"]
languagePcts: [76]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-11-09T15:31:23Z"
lastCommitAt: "2026-11-15T11:05:41Z"
lastReleaseAt: "2026-11-13T20:50:11Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["mathiasdbo"]
openGraphImageUrl: "https://opengraph.githubassets.com/779eca42d4bc992828f0c40233a9abb3bc738ee622426c6878b40ddcd47972ed/mathiasdbo/Xash3D-FWGS-XBOX"
fundingLinks: ["CUSTOM:https://github.com/FWGS/xash3d-fwgs/blob/master/Documentation/donate.md"]
---

# Xash3D-FWGS-XBOX

*Formerly named Resonance3D. Older changelog entries, the divergence ledger and
the `// Resonance3D (#NN)` markers in the source keep the old name.*

An Original Xbox (2001) port of **Xash3D-FWGS**, a GoldSrc-compatible engine,
built against the open-source **nxdk** homebrew SDK — with a modern Vulkan
renderer kept alongside it on PC.

Two things make this port different from a straight recompile:

- **A 64 MB budget shared with the GPU.** The memory ceiling is enforced
  offline, by the asset baker, not discovered at runtime. A map that doesn't
  fit breaks the build, not the console.
- **An offline asset pipeline.** Maps, textures and sounds are compiled ahead
  of time into `.mpak` archives with per-map texture atlases, DXT compression
  and packed lightmaps, so the engine never parses a WAD on the console.

**Status: Half-Life runs on a real Original Xbox.** The engine, the NV2A
renderer (`ref/nv2a`), the menu, saves, hardware audio on the console's audio
chip and the offline asset pipeline are working, and the first campaign maps
play on hardware. It is still work in progress: frame times are measured, not
yet where we want them (see…
