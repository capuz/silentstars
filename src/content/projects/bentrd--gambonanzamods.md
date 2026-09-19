---
repo: "bentrd/GambonanzaMods"
name: "GambonanzaMods"
description: "Modding framework for Gambonanza"
readmeQualityOk: true
url: "https://github.com/bentrd/GambonanzaMods"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [42, 41]
stars: 5
forks: 1
openIssues: 10
closedIssues: 48
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-05T09:53:13Z"
lastCommitAt: "2026-09-19T01:15:42Z"
lastReleaseAt: "2026-08-15T10:05:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 64
maintainers: ["github-actions[bot]", "bentrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/633f4f5a5c96898776466e204cda1f89c1188b191fa59b6c34fa2cd7c460d268/bentrd/GambonanzaMods"
---

# GambonanzaMods

A modding framework for the Steam game **Gambonanza**, and the desktop app
that installs it for you.

The patcher adds four call sites to the game's `Assembly-CSharp.dll` and drops
a loader into `Managed/`. After that, a mod is a plain .NET DLL in
`Gambonanza/Mods/<ModName>/`. No Harmony, no MonoMod, no Unity Editor.

**[Wiki](https://github.com/bentrd/GambonanzaMods/wiki)** ·
**[Download the mod manager](https://bentrd.github.io/GambonanzaMods/)** ·
[Changelog](https://github.com/bentrd/GambonanzaMods/blob/HEAD/CHANGELOG.md)

## Playing

Download the **[Gambonanza Mod Manager](https://bentrd.github.io/GambonanzaMods/)**
(macOS, Windows, Linux). It finds your game, backs it up, patches it, and
installs mods, modpacks and texture packs from the community registry. It tells
you when anything needs updating and fixes it with one more click. Restore puts
your game back byte for byte.

No terminal, no .NET, no git. Start here:
[Using the Mod Manager](https://github.com/bentrd/GambonanzaMods/wiki/Using-the-Mod-Manager).

## Building

```bash
git clone https://github.com/bentrd/GambonanzaMods.git
cd GambonanzaMods
./build.sh
```

Auto-detects the install, patches it,…
