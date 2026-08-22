---
repo: "SheepyLord/Gmod-Simple-Character-Model-Importer"
name: "Gmod-Simple-Character-Model-Importer"
description: "A project aims to achieve automated character model porting from Mikumikudance / VRM to Valve Source Engine"
readmeQualityOk: true
url: "https://github.com/SheepyLord/Gmod-Simple-Character-Model-Importer"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 60
forks: 9
openIssues: 5
closedIssues: 144
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-06-04T02:05:22Z"
lastCommitAt: "2026-08-22T04:07:41Z"
lastReleaseAt: "2026-06-14T02:51:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["SheepyLord", "sialim", "NovaDiablox"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1258871764/e1e838b8-6f62-4ae0-ba13-857c378444db"
---

# Source Engine Character Importer from MMD and VMD to Gmod, L4D2 and SFM

To developers: This repo can be directly ran from the source without downloading the .exe binary in the release. Please refer to the following instruction:

Gmod / SFM Steam Workshop Addon: https://steamcommunity.com/sharedfiles/filedetails/?id=3738916298
L4D2 Steam Addon: https://steamcommunity.com/sharedfiles/filedetails/?id=3748993892

## Requirements

- Windows 10/11, 64-bit.
- Python 3.12, 64-bit.
- PowerShell.
- Garry's Mod, L4D2 or SFM installed through Steam for final StudioMDL/gmad compile and
  package steps.

The app manages its own portable Blender 4.5 setup under:

```text
%LOCALAPPDATA%\MMDCharacterImporter
```

VTFCmd and the older VC runtime DLLs needed by VTFCmd/PyOpenGL are included in
`external_tools`.

## One-Time Source Setup

Open a terminal in this repo folder. If your prompt looks like `C:\path>`, you
are using Command Prompt. If it starts with `PS`, you are using PowerShell.

Create the virtual environment first, then activate it as a separate command.
Do not append the activation script path to `python -m venv`.

Command Prompt:

```cmd
python -m venv .venv…
