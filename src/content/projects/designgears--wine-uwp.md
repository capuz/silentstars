---
repo: "designgears/wine-uwp"
name: "wine-uwp"
description: "Packaged UWP apps on a patched Wine, with Windows components harvested from Microsoft's own ISO"
readmeQualityOk: true
url: "https://github.com/designgears/wine-uwp"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 14
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-10-12T04:15:14Z"
lastCommitAt: "2026-11-14T10:45:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 51
maintainers: ["designgears", "LiveManQuestion", "felixfong227"]
openGraphImageUrl: "https://opengraph.githubassets.com/c681b19669778e7653f3f518ba4e5e064f0ee1b8a76beeef4e1596fc3c00ac20/designgears/wine-uwp"
---

A patched Wine that runs packaged Windows Store (UWP) apps on Linux.

Stock Wine runs classic Win32 programs. Apps from the Microsoft Store are different: they come as signed
`.msix` packages, start through the Windows app model, draw their UI with XAML through DirectComposition,
and lean on hundreds of Windows Runtime classes. wine-uwp fills those gaps, well enough that real,
closed-source Store apps install and run, with no source and no symbols for any of them.

> **Looking to run Shapr3D?** Use **[Shapr3D for Linux](https://github.com/designgears/shapr3d-linux)**:
> one AppImage with a setup that does everything below for you.

## What runs

| App | State |
| --- | --- |
| **Shapr3D** | The target. Sketching, modelling, menus, cloud sync, sign-in, STL and PDF export |
| Microsoft Solitaire Collection | Playable: menus, games, card moves |
| Media Player | Plays audio from its own UI |
| Calculator | Fully working; the pixel-exact regression baseline |
| Feedback Hub | Works, interactive |
| Camera | Starts, then shows its own error page |
| Halo Infinite (GDK, via the Xbox app) | Installs from the Xbox app; campaign and online multiplayer play, with EasyAntiCheat |

## How it…
