---
repo: "projectpokemon/PoGoEncTool"
name: "PoGoEncTool"
description: "Tracks Pokémon GO Legality data as json"
readmeQualityOk: true
url: "https://github.com/projectpokemon/PoGoEncTool"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 28
forks: 10
openIssues: 0
closedIssues: 1
watchers: 11
contributors: 9
recentReleases: 0
createdAt: "2020-11-14T02:01:55Z"
lastCommitAt: "2026-08-28T15:31:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 57
maintainers: ["sora10pls"]
openGraphImageUrl: "https://opengraph.githubassets.com/6571c23aee4aa4d311b4ae0cf7cfd5121c0e321c130fc91176a5fe20736e5202/projectpokemon/PoGoEncTool"
---

# PoGoEncTool (PGET)
Tracks Pokémon GO Legality data as json, and can output as a PKHeX Legality Binary (pkl), sometimes referred to as a pickle.

## Building
PGET is a Windows Forms application which requires [.NET 10](https://dotnet.microsoft.com/download/dotnet/10.0).

## Updating the JSON
1. Build the program.
2. Drag the json from the Resources folder onto the built executable.
3. The executable will launch, editing the json resource.
4. Future launches of the program will automatically edit the json resource, assuming you don't change paths.
5. Commit changes / submit pull request.

Periodically, the generated pkl will be merged into PKHeX for legality data.

## Screenshots
