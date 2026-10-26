---
repo: "stellargames/bakagain"
name: "bakagain"
description: "A modern, moddable remake of the 1993 role-playing game Betrayal at Krondor, built in Unity. It runs the original game's story, world, rules and art from your own copy of the game, and plays on Windows, Linux and Android."
readmeQualityOk: true
url: "https://github.com/stellargames/bakagain"
homepage: "https://bakagain.org"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["game", "krondor", "modding", "open-source"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-27T06:16:21Z"
lastCommitAt: "2026-10-26T09:17:07Z"
lastReleaseAt: "2026-10-25T20:44:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["Macrosbot", "github-actions[bot]", "JorisVanEijden"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1390267956/38bba44c-07c0-4652-9c4e-24e6a3d5e82f"
---

# BaK-Again

A modern, moddable remake of the 1993 role-playing game *Betrayal at Krondor*, built in Unity. It
runs the original game's story, world, rules and art from **your own copy** of the game, and plays
on Windows, Linux and Android.

> **Beta.** The whole game is in: every chapter can be played to the end. What it needs now is
> players. Bug reports are welcome on the [forum](https://forum.bakagain.org).

## You need the original game

BaK-Again contains **nothing** from *Betrayal at Krondor*. It reads the game's data files
(`KRONDOR.001` and friends) from an installed copy, which you can buy from
[GOG](https://www.gog.com/). On first start it asks where that copy is.

## Download

Builds for Windows, Linux and Android are on the
[Releases page](https://github.com/stellargames/bakagain/releases) and at
[bakagain.org](https://bakagain.org).

## Building from source

- **Unity:** the version in `unity/ProjectSettings/ProjectVersion.txt`.
- **.NET 10 SDK:** for the data libraries in `src/`.

Build the two libraries the Unity project uses (this writes them into
`unity/Assets/Plugins/netstandard2.1/`), then open `unity/` in the Unity Editor:

```bash
dotnet build…
