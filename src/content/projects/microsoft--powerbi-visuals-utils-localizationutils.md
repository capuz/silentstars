---
repo: "microsoft/powerbi-visuals-utils-localizationutils"
name: "powerbi-visuals-utils-localizationutils"
description: "Storage for PowerBI custom visuals localization string resources"
readmeQualityOk: true
url: "https://github.com/microsoft/powerbi-visuals-utils-localizationutils"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [85]
stars: 30
forks: 26
openIssues: 0
closedIssues: 1
watchers: 14
contributors: 10000
recentReleases: 0
createdAt: "2017-06-28T11:23:48Z"
lastCommitAt: "2026-08-28T14:37:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 65
maintainers: ["csigs", "pbicvloc", "kullJul"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d6f5f6464d7abe94a368cae67a7dd3de97805ea31a6fe6fec8cb15f8460de8d/microsoft/powerbi-visuals-utils-localizationutils"
---

# powerbi-visuals-utils-localizationutils

Central hub for the localization of the Power BI custom visuals owned by Microsoft.

English strings are collected from the visual repositories into this repo, sent for
translation, and the finished translations are pushed back to every visual repository.
The whole cycle is automated; this repo holds the master copy of the translated
resources plus the automation that moves them around.

## Repository layout

| Path | Purpose |
| --- | --- |
| `localizations/<visual>/stringResources/<locale>/resources.resjson` | **Master copy** of the strings for every visual and locale. Source of truth. |
| `visuals/<visual>` | Git submodules pointing at the shipping visual repositories. Used only as transport (read `en-US` from them, write translations back). |
| `descriptions/<visual>/en-US.resjson` | English marketplace descriptions. |
| `deprecatedLocalizations/` | Strings of visuals that are no longer shipped. |
| `src/loc/<locale>/<visual>/en-US/resources.resjson.lcl` | LocStudio output produced by OneLocBuild (English source paired with its translation). |
| `LocProject.json` | OneLocBuild configuration: maps each…
