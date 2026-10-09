---
repo: "Iswenzz/IW3SR"
name: "IW3SR"
description: "IW3SR is a client modification for Call of Duty 4 powered by IzEngine. Improves performance and gameplay with an in-game GUI, a runtime plugin system, new movement physics, and more."
readmeQualityOk: true
url: "https://github.com/Iswenzz/IW3SR"
homepage: "https://sr-speedrun.com"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["client", "cod4", "cpp", "reverse-engineering", "iw3sr", "izengine", "modding", "assembly", "sr"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2024-04-23T11:03:41Z"
lastCommitAt: "2026-10-09T18:56:07Z"
lastReleaseAt: "2026-07-17T15:35:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 64
maintainers: ["Iswenzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb6dc471de7ef594fc7ebfa58ef1aa181ac7a3462db6627a48ac735f1dc87536/Iswenzz/IW3SR"
fundingLinks: ["GITHUB:https://github.com/Iswenzz", "PATREON:https://patreon.com/Iswenzz", "KO_FI:https://ko-fi.com/Iswenzz"]
---

# IW3SR



A client modification for Call of Duty 4, powered by [IzEngine](https://github.com/Iswenzz/IzEngine). It improves performance and gameplay with an in-game GUI, a runtime plugin system, new movement physics, and more.

## Features

### Interface
- In-game GUI, with a settings panel for every module.
- Plugin system to rebuild and swap modules in without restarting the game.
- Console autocompletion, recolored output and widened color escape characters.
- Emoji support.
- Discord Rich Presence, with join invites.
- Built-in browser for video playback.
- Shell integration for `cod4://` links and `.dm_1` demo files.

### Movement
- Timestep (experimental): physics at your `com_maxfps` whatever frame rate you reach, with `sr_maxfps` capping the renderer.
- Alternative physics modes, listed below.
- Bunny hop script.
- CGAZ HUD, velocity meter, snap zones, pmove HUD, lagometer, FPS counter and key display.
- Raw input mouse, free of pointer acceleration and steady at high polling rates.

### Rendering
- Interpolation of rotating platforms.
- Portal view rendering, drawing the far side into the portal surface.
- Offline shader playback.
-…
