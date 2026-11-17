---
repo: "aspctt/scvk"
name: "scvk"
description: "A native Vulkan renderer for SimCity 4. Not a wrapper: replaces the game's DirectX 7 era renderer through SC4's own plugin system."
readmeQualityOk: true
url: "https://github.com/aspctt/scvk"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["cpp", "glsl", "graphics-programming", "gzcom", "modding", "renderer", "reverse-engineering", "simcity", "simcity-4-deluxe-edition", "simcity4"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-04T22:56:35Z"
lastCommitAt: "2026-11-17T12:16:37Z"
lastReleaseAt: "2026-10-31T09:30:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["aspctt"]
openGraphImageUrl: "https://opengraph.githubassets.com/37c3b11a4d99b2829745f20e1f1b89da5e7c8a3cdc7d1d24249939af584b7584/aspctt/scvk"
---

# <p align=center style="text-align: center;"> <img alt="Banner" src="https://i.ibb.co/LzJQGWC3/scvk-Banner.png"> </p>

A native Vulkan renderer for SimCity 4.

SimCity 4 shipped in 2003 with a DirectX 7 renderer and an unfinished OpenGL
one. Both have aged badly against modern drivers. scvk replaces the renderer
with one built on Vulkan, loaded as a DLL plugin through the game's own GZCOM
plugin system.

This project is not affiliated with, endorsed by, or supported by Electronic
Arts Inc. or Maxis. Vulkan and the Vulkan logo are registered trademarks of the
Khronos Group Inc.

## Status

**Stable.** The whole game draws, from the region view to cities, menus and loading
screens. It has been played on NVIDIA and AMD graphics cards, on Windows and on Linux,
and Intel graphics are untested.

| Area | Status |
|---|---|
| Startup, video modes, swapchain | Working, windowed, fullscreen and borderless |
| Terrain, buildings, interface | Working |
| Textures, blending, depth | Working |
| Day and night lighting, cloud shadows | Working |
| Loading screens | Working |
| Fog | Working, though the game never turns it on |
| In-game photos | Working |
| ReShade | Working, effects under the…
