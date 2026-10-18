---
repo: "mpereiraesaa/prospero-win"
name: "prospero-win"
description: "Windows compatibility runtime for native PlayStation 5 homebrew."
readmeQualityOk: true
url: "https://github.com/mpereiraesaa/prospero-win"
language: "C"
languages: ["C", "Python"]
languagePcts: [72, 23]
stars: 202
forks: 31
openIssues: 7
closedIssues: 12
watchers: 2
contributors: 11
recentReleases: 3
createdAt: "2026-09-14T19:31:45Z"
lastCommitAt: "2026-10-18T08:16:47Z"
lastReleaseAt: "2026-10-10T13:13:22Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 30
maintainers: ["mpereiraesaa", "leolobato", "kvaps"]
openGraphImageUrl: "https://opengraph.githubassets.com/70b73d4449ccdb0c49ca6c3fcc00dbd80f4c26e9e93d509d507449660cf1bc53/mpereiraesaa/prospero-win"
---

**prospero-win — Windows gaming on your PS5**

Bring PC classics to the big screen. **prospero-win runs Windows games
locally on a homebrew-enabled PlayStation 5**, with DualSense controls,
keyboard and mouse support, and a launcher for your game library.
It carries its own copy of [Wine](https://www.winehq.org/).

Built to bridge generations of Windows gaming—from 2000s classics to newer
32-bit and 64-bit software—with compatibility expanding game by game.

## What's supported

- **32-bit Windows games** through our custom x86 translator.
- **64-bit Windows applications** running natively on the PS5's x86-64 CPU
  through Wine.
- **Direct3D 8, 9, 10 and 11** graphics through
  [DXVK](https://github.com/doitsujin/dxvk) and Vulkan.
- **OpenGL games** through Mesa's [Zink](https://docs.mesa3d.org/drivers/zink.html)
  on top of Vulkan.
- **Classic 2D games and Windows applications** through GDI.
- **DualSense controls**, including Xbox-style XInput support, analog
  sticks, triggers and rumble.
- **Custom controller mappings** for games originally designed for
  keyboard and mouse.
- **USB keyboard and mouse**, usable alongside the controller.
- **Game audio** through the PS5's audio…
