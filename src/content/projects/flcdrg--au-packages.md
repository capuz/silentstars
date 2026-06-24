---
repo: "flcdrg/au-packages"
name: "au-packages"
description: "David's Chocolatey Automatic Packages"
url: "https://github.com/flcdrg/au-packages"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["chocolatey", "chocolatey-packages", "chocolatey-automatic", "hacktoberfest"]
stars: 18
forks: 58
openIssues: 17
closedIssues: 88
watchers: 1
contributors: 48
recentReleases: 0
createdAt: "2017-04-30T05:21:05Z"
lastCommitAt: "2026-06-24T00:23:28Z"
lastReleaseAt: "2018-07-29T16:20:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 76
maintainers: ["flcdrg", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/61aaddfac75b6f6cd0b97432504dff34c0cc47db00aff2d8cb572f83aa7c309e/flcdrg/au-packages"
fundingLinks: ["GITHUB:https://github.com/flcdrg"]
---

# Chocolatey packages

This repository contains my Chocolatey packages. Where possible I use [chocolatey automatic packages](https://chocolatey.org/docs/automatic-packages). These packages will have an `update.ps1` script in the folder that is run daily to automatically detect and publish new versions.

If there is no `update.ps1`, I haven't got around to creating one yet.

Do you use these packages? [Show your appreciation by sponsoring me!](https://github.com/sponsors/flcdrg)

## Contributions

If you have found a bug or have a suggestion, please feel free to raise an issue.

Pull requests are also most welcome!

## Prerequisites

To run locally you will need:

- Powershell 7+.
- [Custom fork of Chocolatey AU](https://github.com/flcdrg/chocolatey-au/tree/simplify) (has some extra features that hopefully will be merged into Chocolatey AU eventually)
- [au-dotnet](https://github.com/flcdrg/au-dotnet/), a custom orchestrator used instead of the AU module's `update_all.ps1` script (to work around issues with PowerShell 7+).

## Automatic package update

### Single package

Run from within the directory of the package to update that package:

```powershell
    cd <package_dir>…
