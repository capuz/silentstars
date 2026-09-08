---
repo: "thenumbernine/numo9"
name: "numo9"
description: "HD2D Fantasy Console in LuaJIT"
readmeQualityOk: true
url: "https://github.com/thenumbernine/numo9"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-08T05:45:21Z"
lastCommitAt: "2026-09-08T08:17:15Z"
lastReleaseAt: "2025-09-12T02:20:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 64
maintainers: ["thenumbernine"]
openGraphImageUrl: "https://opengraph.githubassets.com/825adc951f170d6566468bf5044ebbaf8200fae309cff5f2a5039b2c0c217db8/thenumbernine/numo9"
fundingLinks: ["GITHUB:https://github.com/thenumbernine", "BUY_ME_A_COFFEE:https://buymeacoffee.com/thenumbernine"]
---

[Bank! Available on Steam. Purchases help support development!](https://store.steampowered.com/app/3844040/Bank/?beta=0)<br>

[Youtube Playlist:](https://www.youtube.com/watch?v=R8FA24Iwo6w&list=PLvkQx1ZpORprcwfSuMEvSgGO7Kpxo44Ma)<br>

[Discord Channel](https://discord.gg/5mRZPNHccB)

# Fantasy Console

I thought I'd make a fantasy console with all the LuaJIT binding code and libraries I have laying around.

What does NuMo9 have that the competition doesn't?
- 16-bit console era.  4-button gamepads.
- 8bpp sprites, 8x8 or 16x16 tilemaps, brushmaps, blending.
- "Mode-7" transformations, "Super-FX" 3D meshes and ***VOXELMAPS***.
- ***HD2D!***  Free SSAO and lightmaps for all your 3D games.
- Multiplayer, 4 local players per connection, up to 64 total players, unlimited observers.
- Server can edit games in realtime.  Live game DM'ing.
- It's strictly LuaJIT.  No compiler needed.
- Pico8-compatible.  TIC-80 so-so.

# "Hardware"

### Framebuffer

|Mode| Resolution | Format    | Ratio |
|----|------------|-----------|-------|
|  0 | 256x256    | RGB565    |  1:1  |
|  1 | 256x256    | 8bppIndex |  1:1  |
|  2 | 256x256    | RGB332    |  1:1  |
|  3 | 272x217    | RGB565    |  5:4  |
|…
