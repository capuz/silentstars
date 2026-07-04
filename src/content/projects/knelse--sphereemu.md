---
repo: "knelse/SphereEmu"
name: "SphereEmu"
description: "Early WIP server emulator for Sphere game (old Russian MMO)"
readmeQualityOk: true
url: "https://github.com/knelse/SphereEmu"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 27
forks: 5
openIssues: 2
closedIssues: 1
watchers: 10
contributors: 2
recentReleases: 1
createdAt: "2022-04-12T00:09:54Z"
lastCommitAt: "2026-07-04T22:18:49Z"
lastReleaseAt: "2026-04-14T13:01:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 48
maintainers: ["knelse"]
openGraphImageUrl: "https://opengraph.githubassets.com/92b4c4a6e6e78736a24905d7843f95618280cda7d4c425998616aec86863164d/knelse/SphereEmu"
---

# SphereEmu
Boilerplate code to tinker with packets for Sphere (old Russian MMORPG) server emulator

Currently built with `Godot 4.* Mono`.

## Compatibility
Running Sphere on latest hardware (notably, RDNA 3 Radeon 7000 series) might turn out into a good old 15 fps in cities experience.
If that happens to you, dgVoodoo2 might help:
1. Grab the latest release from https://github.com/dege-diosg/dgVoodoo2
2. Unpack, run, add new profile for Sphere (click Add and navigate to game folder)
3. In the General tab, select Direct3D 12 (feature level 12.0) for Output API. Others didn't work for me, but your mileage may vary
4. In DirectX tab, select dgVoodoo Virtual 3D Accelerated Card for Videocard, 512-4096 MB for VRAM
5. Keep everything else as is or tweak as you like
6. Copy D3D9.dll (or all files to be safe) from MS\x86 to game folder (launcher does not care about added files)
7. Launch the game. If everything worked correctly, cities should jump from 15 to 150+ fps
8. If not, try different Output APIs and/or Videocards

## Running the server

1. Get and install prerequisities
   1. .NET 9.0 SDK
   2. Godot (4.6.1 Mono or higher)
2. Download the repo
3. Update appsettings.json for your…
