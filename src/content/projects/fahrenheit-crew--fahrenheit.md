---
repo: "fahrenheit-crew/fahrenheit"
name: "fahrenheit"
description: "A Final Fantasy X/X-2 reverse-engineering project and mod framework."
readmeQualityOk: true
url: "https://github.com/fahrenheit-crew/fahrenheit"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 29
forks: 10
openIssues: 22
closedIssues: 66
watchers: 3
contributors: 6
recentReleases: 1
createdAt: "2022-09-13T22:33:50Z"
lastCommitAt: "2026-07-09T20:44:14Z"
lastReleaseAt: "2026-05-26T13:26:30Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 62
maintainers: ["fkelava", "EvelynTSMG", "Andrewki44"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe01ac0808a6f2c8b5855c8429e3879ee85ecdd53e925fbd05111aba77789a9/fahrenheit-crew/fahrenheit"
---

# Fahrenheit

A Final Fantasy X/X-2 reverse-engineering project and mod framework.

## What is Fahrenheit?
Fahrenheit is a reverse-engineering project and mod framework for the [Final Fantasy X and X-2 HD Remasters](https://store.steampowered.com/app/359870/).

It allows you to freely hook game functions and distribute mods in the form of loadable DLLs.
Fahrenheit hosts the [.NET runtime](https://dotnet.microsoft.com/en-us/download)
within the games, allowing you to write mods in any compatible language.

The knowledge gathered by the project underpins many tools and mods for the game, such as the
[AI/VI TAS](https://github.com/coderwilson/FFX_TAS_Python), [Cutscene Remover](https://github.com/erickt420/FFXCutsceneRemover) mod,
[Karifean](https://github.com/Karifean)'s [FFXDataParser](https://github.com/Karifean/FFXDataParser), and more.
Fahrenheit, like all of these tools, is free for you to analyze, improve, learn from and use- now and forever.

## Build and deploy
Ensure the folder you cloned to does not contain special characters. This can cause build errors.

Building **requires** Visual Studio 2026 (full IDE or Build Tools only) with the following workloads:
- .NET desktop…
