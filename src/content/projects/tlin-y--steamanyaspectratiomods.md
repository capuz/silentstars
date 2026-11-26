---
repo: "TLin-Y/SteamAnyAspectRatioMods"
name: "SteamAnyAspectRatioMods"
description: "Play your favorite games at the aspect ratio you want, on the platform you choose. This collection provides easy to use, cross platform aspect ratio fixes for Steam games in Proton/Wine/Linux/MacOS/SteamOS/Windows."
readmeQualityOk: true
url: "https://github.com/TLin-Y/SteamAnyAspectRatioMods"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [63, 24]
stars: 121
forks: 0
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-31T17:41:31Z"
lastCommitAt: "2026-11-26T15:24:01Z"
lastReleaseAt: "2026-11-04T00:21:18Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 35
maintainers: ["TLin-Y"]
openGraphImageUrl: "https://opengraph.githubassets.com/541e2768f7c6fa6469cb265cb23b568143d9fad86d4341cb579a34077f616d36/TLin-Y/SteamAnyAspectRatioMods"
---

# SteamAnyAspectRatioMods

Play your favorite games at the aspect ratio you want (32:9 / 21:9 / 16:10 / 4:3 / 3:2 etc.), on the platform you choose. This collection provides easy to use, cross platform aspect ratio fixes for Steam games in Proton/Wine/Linux/MacOS/SteamOS/Windows.

[Jump to the full game mods list](#game-mods)

---

- **Windows/MacOS/Linux desktop:** the [AnyAspectRatio Desktop app](https://github.com/TLin-Y/SteamAnyAspectRatioMods/blob/HEAD/AnyAspectRatioDesktop/README.md) finds your games and applies these fixes for you.
- **Steam OS/DroidDeck:** the [AnyAspectRatio Decky plugin](https://github.com/TLin-Y/SteamAnyAspectRatioMods/blob/HEAD/AnyAspectRatioDecky/README.md) applies these fixes for you in one tap:

To use other mods together with these fixes:

- **Other ASI mods:** one ASI loader loads every `.asi` in the game folder. Keep a single loader DLL (for example `dinput8.dll`) and add the other mods' `.asi` and `.ini` files beside it.
- **Other proxy DLLs** (ReShade `dxgi.dll`, a mod using `winmm.dll`, ...): list every proxy DLL in the launch option, e.g. `WINEDLLOVERRIDES="dinput8,winmm,dxgi=n,b" %command%`.
